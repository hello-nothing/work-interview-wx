// pages/css/css.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        list: [{
                id: 2,
                name: 'px，em，rem区别'
            },
            {
                id: 3,
                name: '盒子模型'
            },
            {
                id: 4,
                name: 'BFC机制'
            },
            {
                id: 1,
                name: 'css 选择器和优先级'
            },
            {
                id: 5,
                name: '实现两栏布局（左侧固定 + 右侧自适应布局）'
            },
            {
                id: 6,
                name: '实现圣杯布局和双飞翼布局（经典三分栏布局）'
            },
            {
                id: 7,
                name: '水平垂直居中多种实现方式'
            },
            {
                id: 8,
                name: 'line-height 如何继承？'
            },
            {
                id: 9,
                name: '重排（reflow）和重绘（repaint）的理解'
            },
            {
                id: 10,
                name: 'flex布局'
            },
            {
                id: 11,
                name: "前端常见的布局方式"
            },
            {
                id: 12,
                name: '可继承和不可继承样式'
            },
            {
                id:13,
                name:'block和inline的区别？'
            },
            {
                id:14,
                name:'隐藏元素的方式'
            },
            {
                id:15,
                name:'link和@import区别'
            },
            {
                id:16,
                name:'transition和animation的区别'
            },
            {
                id:17,
                name:'伪元素和伪类'
            },
            {
                id:18,
                name:"CSS3新样式"
            },
            {
                id:19,
                name:'CSS提升性能方式'
            },
            {
                id:20,
                name:'为何使用less、sass'
            },
            {
                id:21,
                name:'postCss是啥'
            },
            {
                id:22,
                name:'单行、多行溢出省略号'
            },
            {
                id:23,
                name:'自适应布局方式'
            },
            {
                id:24,
                name:'CSS工程化'
            },
            {
                id:25,
                name:'实现一个三角形'
            },
            {
                id:26,
                name:'实现扇形'
            },
            {
                id:27,
                name:'如何显示小于12px的文字？'
            },
        ]
    },
    goLook(e) {
        let id = e.currentTarget.dataset.id;
        console.log(id)
        wx.navigateTo({
            url: `/pages/css/key?key=${id}`,
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