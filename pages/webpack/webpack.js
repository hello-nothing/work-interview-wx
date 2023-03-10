// pages/webpack/webpack.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        list: [{
                id: 1,
                name: 'webpack的构建流程'
            },
            {
                id: 2,
                name: 'Loader和Plugin的区别'
            },
            {
                id: 3,
                name: '提高webpack的构建速度'
            },
            {
                id: 4,
                name: 'webpack热更新是怎么做到的'
            },
            {
                id: 5,
                name: 'webpack中常见的Loader'
            },
            {
                id: 6,
                name: 'webpack中常见的Plugin'
            },
        ]
    },
    goLook(e) {
        let id = e.currentTarget.dataset.id;
        console.log(id)
        wx.navigateTo({
            url: `/pages/webpack/key?key=${id}`,
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