// pages/vue/vue.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        list: [{
                id: 0,
                name: "说说你对 SPA 单页面的理解，它的优缺点分别是什么？"
            },
            {
                id: 1,
                name: '对vue的理解'
            },
            {
                id: 2,
                name: '什么是虚拟DOM？'
            },
            {
                id: 3,
                name: 'vue的生命周期'
            },
            {
                id: 4,
                name: 'vue的双向绑定原理'
            },
            {
                id: 5,
                name: 'vue的指令有哪些'
            },
            {
                id: 6,
                name: 'v-if和v-show区别'
            },
            {
                id: 7,
                name: 'v-for和v-if为什么不能放于同一级'
            },
            {
                id: 8,
                name: 'nextTick'
            },
            {
                id: 9,
                name: 'v-for中key的原理'
            },
            {
                id: 10,
                name: '组件间传递数据'
            },
            {
                id: 11,
                name: 'computed和watch区别'
            },
            {
                id: 12,
                name: 'vnode的diff算法原理'
            },
            {
                id: 13,
                name: 'axios'
            },
            {
                id: 14,
                name: 'Vue项目可以进行哪些优化'
            },
            {
                id: 15,
                name: 'vue中是如何检测数组变化的'
            },
            {
                id: 16,
                name: 'Vue的事件绑定原理'
            },
            {
                id: 17,
                name: '父子组件生命周期调用顺序'
            },
            {
                id: 18,
                name: 'data为什么是函数'
            },
            {
                id: 19,
                name: 'v-html 会导致哪些问题'
            },
            {
                id: 20,
                name: '为什么要使用异步组件？'
            },
            {
                id: 21,
                name: 'action 与 mutation 的区别'
            },
            {
                id: 22,
                name: '插槽与作用域插槽的区别'
            },
            {
                id: 23,
                name: '谈谈对keep-alive的了解'
            },
            {
                id: 24,
                name: 'VueX'
            },
            {
                id: 25,
                name: 'vue.cli项目中src目录每个文件夹和文件的用法'
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
            url: `/pages/vue/key?key=${id}`,
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