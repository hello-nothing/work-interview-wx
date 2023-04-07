// pages/question/key.js
const {
    getQuestionDetail,
    collectQuestion,
    cancelCollect
} = require('../../utils/api')
Page({

    /**
     * 页面的初始数据
     */
    data: {
        kind: '',
        questionId: '',
        detailInfo: {},
        isCollect: false
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.setData({
            kind: options.kind,
            questionId: options.id
        })
        this.getDetail(options.id)
    },
    getDetail(id) {
        wx.showLoading({
            title: '加载中',
        })
        getQuestionDetail({
            id
        }).then(res => {
            console.log(res)
            this.setData({
                detailInfo: res.data,
                isCollect: res.data.like
            })
            wx.hideLoading()
        })
    },
    goBack() {
        wx.navigateBack({
            delta: -1,
        })
    },
    // 收藏
    collect() {
        console.log(this.data.questionId)
        collectQuestion({
            id: this.data.questionId
        }).then(res => {
            console.log(res)
            this.setData({
                isCollect: true
            })
            wx.showToast({
                title: '已收藏',
            })
        })
    },
    // 取消收藏
    resetCollect() {
        cancelCollect({
            id: this.data.questionId
        }).then(res => {
            console.log(res)
            this.setData({
                isCollect: false
            })
            wx.showToast({
                title: '已取消',
                icon: 'none'
            })
        })
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})