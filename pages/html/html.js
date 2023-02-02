// pages/html/html.js
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
                id:4,
                name:'BFC机制'
            },
            {
                id:5,
                name:'target和currentTarget区别'
            },
            {
                id:6,
                name:'document.ready和window.onload区别'
            },
            {
                id: 7,
                name:'事件流'
            },
            {
                id:8,
                name:'doctype作用，严格模式和混合模式的区别'
            },
            {
                id: 9,
                name:'水平垂直居中的实现方式'
            },
            {
                id: 10,
                name:'回流和重绘区别'
            }
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
            url: `/pages/key/key?key=${id}&type=html`,
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