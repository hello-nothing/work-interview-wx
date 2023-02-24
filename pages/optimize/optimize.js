// pages/optimize/optimize.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        list: [{
                id: 1,
                name: '前端优化的原则'
            },
            {
                id: 2,
                name: '网页内容的优化'
            },
            {
                id: 3,
                name: 'css的优化'
            },
            {
                id: 4,
                name: 'JavaScript的优化'
            },
            {
                id: 5,
                name: 'webpack打包优化'
            },
            {
                id:6,
                name:'SEO优化'
            }
        ]
    },
    goLook(e) {
        let id = e.currentTarget.dataset.id;
        console.log(id)
        wx.navigateTo({
            url: `/pages/optimize/key?key=${id}`,
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

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