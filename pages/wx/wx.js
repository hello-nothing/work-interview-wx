Page({

    /**
     * 页面的初始数据
     */
    data: {
        list: [{
                id: 1,
                name: '微信小程序主要目录和文件的作用'
            },
            {
                id: 2,
                name: 'wxml与标准的html的异同'
            },
            {
                id: 3,
                name: 'WXSS和CSS的异同'
            },
            {
                id: 4,
                name: '怎么封装微信小程序的数据请求'
            },
            {
                id: 5,
                name: '小程序页面之间有哪些（传值）传递数据的方法'
            },
            {
                id: 6,
                name: '小程序的双向绑定和vue的异同'
            },
            {
                id: 7,
                name: '小程序的生命周期函数'
            },
            {
                id: 8,
                name: '简述微信小程序原理'
            },
            {
                id: 9,
                name: '微信小程序的相关文件类型'
            },
            {
                id: 10,
                name: '那些方法来提高微信小程序的应用速度'
            },
            {
                id: 11,
                name: '微信小程序的优劣势'
            },
            {
                id: 12,
                name: '微信小程序和H5的区别'
            },
            {
                id: 13,
                name: '小程序关联微信公众号如何确定用户的唯一性'
            },
            {
                id: 14,
                name: '使用webview直接加载要注意那些事项'
            },
            {
                id: 15,
                name: '小程序调用后台接口遇到的问题'
            },
            {
                id: 16,
                name: '微信小程序如何实现下拉刷新'
            },
            {
                id: 17,
                name: 'webview中的页面怎么跳转回小程序'
            },
            {
                id: 18,
                name: 'bindtap和catchtap的区别'
            },
            {
                id: 19,
                name: '页面跳转方式'
            },
            {
                id: 20,
                name: '小程序与原生App比较'
            },
            {
                id: 21,
                name: '小程序的发布流程（开发流程）'
            },
            {
                id: 22,
                name: '小程序授权登录流程'
            },
            {
                id: 23,
                name: '小程序支付如何实现'
            },
            {
                id: 24,
                name: '小程序的常见问题'
            },
            {
                id: 25,
                name: '什么是uni-app'
            },
        ]
    },
    goLook(e) {
        let id = e.currentTarget.dataset.id;
        console.log(id)
        wx.navigateTo({
            url: `/pages/wx/key?key=${id}`,
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