// pages/js/js.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        list: [{
                id: 0,
                name: '数据类型'
            },
            {
                id: 1,
                name: 'setTimeout、setInterval区别'
            },
            {
                id: 2,
                name: '防抖节流'
            },
            {
                id: 3,
                name: '深浅拷贝'
            },
            {
                id: 4,
                name: '继承'
            },
            {
                id: 5,
                name: 'es6新特性'
            },
            {
                id: 6,
                name: 'es6的class的es5的类有什么区别'
            },
            {
                id: 7,
                name: '数组去重'
            },
            {
                id: 8,
                name: 'this'
            },
            {
                id: 9,
                name: '箭头函数和普通函数区别'
            },
            {
                id: 10,
                name: 'new的原理'
            },
            {
                id: 11,
                name: '浏览器事件循环和node事件循环'
            },
            {
                id: 12,
                name: '手写promise'
            },
            {
                id: 13,
                name: '手写bind'
            },
            {
                id: 14,
                name: '手写call、apply'
            },
            {
                id: 15,
                name: '作用域与作用域链'
            },
            {
                id: 16,
                name: '执行上下文'
            },
            {
                id: 17,
                name: '闭包'
            },
            {
                id: 18,
                name: '同步任务-异步任务'
            },
            {
                id: 19,
                name: 'web 存储'
            },
            {
                id: 20,
                name: '常见手写'
            },

        ],
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },
    goLook(e) {
        let id = e.currentTarget.dataset.id;
        console.log(id)
        wx.navigateTo({
            url: `/pages/key/key?key=${id}&type=js`,
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