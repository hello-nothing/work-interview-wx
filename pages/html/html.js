// pages/html/html.js
const {
    getQuestionList
} = require('../../utils/api')
Page({

    /**
     * 页面的初始数据
     */
    data: {
        list: [{
                id: 1,
                name: 'HTML语义化，如何理解HTML语义化'
            },
            {
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
                id: 5,
                name: 'target和currentTarget区别'
            },
            {
                id: 6,
                name: 'document.ready和window.onload区别'
            },
            {
                id: 7,
                name: '事件流'
            },
            {
                id: 8,
                name: 'doctype作用，严格模式和怪异模式的区别'
            },
            {
                id: 9,
                name: '水平垂直居中的实现方式'
            },
            {
                id: 10,
                name: '回流和重绘区别'
            },
            {
                id: 11,
                name: '从浏览器地址栏输入 url 到请求返回发生了什么'
            },
            {
                id: 12,
                name: "浏览器渲染页面的过程"
            },
            {
                id: 13,
                name: "块级元素、行内元素、行内块元素"
            },
            {
                id: 14,
                name: 'src和href的区别'
            },
            {
                id: 15,
                name: 'img标签的title和alt是什么'
            },
            {
                id: 16,
                name: '浏览器内核'
            },

            {
                id: 18,
                name: '优雅降级和渐进增强 '
            },
            {
                id: 19,
                name: 'web标准和w3c标准'
            },
            {
                id: 20,
                name: '前端页面由哪三个部分组成 '
            },
            {
                id: 21,
                name: 'div+css布局和table布局有什么优点 '
            },
            {
                id: 22,
                name: '前端需要注意哪些SEO'
            },
            {
                id: 23,
                name: 'canvas和svg的区别'
            },
            {
                id: 24,
                name: 'HTML和XHTML的区别'
            },
            {
                id: 17,
                name: 'a标签中 active hover link visited 正确的设置顺序是什么?'
            },
            {
                id: 25,
                name: 'video标签的几个属性方法'
            },
            {
                id: 26,
                name: "HTML5新特性"
            }
        ],
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        console.log(options)
        this.getList(options.id)
    },
    getList(id) {
        getQuestionList({
            id
        }).then(res => {
            console.log(res)
            this.setData({
                list: res.data
            })
        })
    },
    goLook(e) {
        let id = e.currentTarget.dataset.id;
        console.log(id)
        wx.navigateTo({
            url: `/pages/html/key?id=${id}`,
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