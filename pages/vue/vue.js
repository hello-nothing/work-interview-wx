// pages/vue/vue.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        list: [{
                id: 1,
                name: 'vue的双向绑定原理'
            },
            {
                id: 2,
                name: 'vue的指令有哪些'
            },
            {
                id: 3,
                name: 'v-if和v-show区别'
            },
            {
                id: 4,
                name: 'v-for和v-if为什么不能放于同一级'
            },
            {
                id: 5,
                name: 'nextTick'
            },
            {
                id: 6,
                name: 'v-for中key的原理'
            },
            {
                id: 7,
                name: 'vue的生命周期'
            },
            {
                id: 8,
                name: '父子组件通信'
            },
            {
                id: 9,
                name: 'computed和watch区别'
            },
            {
                id: 10,
                name: 'vnode的diff算法原理'
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