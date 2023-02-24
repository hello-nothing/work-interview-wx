// pages/http/http.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        list: [{
                id: 1,
                name: 'http 状态码'
            },
            {
                id: 2,
                name: 'GET方法'
            },
            {
                id: 3,
                name: 'POST方法'
            },
            {
                id: 4,
                name: 'PUT方法'
            },
            {
                id: 5,
                name: 'DELETE方法'
            },
            {
                id: 6,
                name: ' Get和Post的区别'
            },
            {
                id: 7,
                name: ' POST和PUT请求的区别'
            },
            {
                id: 8,
                name: ' 常见的HTTP请求头和响应头'
            },
            {
                id: 9,
                name: 'Content-Type属性'
            },
            {
                id: 10,
                name: 'HTTP状态码304'
            },
            {
                id: 11,
                name: 'Ajax'
            },
        ]
    },
    goLook(e) {
        let id = e.currentTarget.dataset.id;
        console.log(id)
        wx.navigateTo({
            url: `/pages/http/key?key=${id}`,
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