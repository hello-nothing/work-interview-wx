// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        console.log(res)
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null
  }
})
// "tabBar": {
//   "color": "#707070",
//   "selectedColor": "#4e6ef2",
//   "list": [
//       {
//           "pagePath": "pages/index/index",
//           "text": "首页",
//           "iconPath": "/img/home.png",
//           "selectedIconPath": "/img/home1.png"
//       },
//       {
//           "pagePath": "pages/collection/collection",
//           "text": "收藏",
//           "iconPath": "/img/collection.png",
//           "selectedIconPath": "/img/collection1.png"
//       },
//       {
//           "pagePath": "pages/my/my",
//           "text": "我的",
//           "iconPath": "/img/my.png",
//           "selectedIconPath": "/img/my1.png"
//       }
//   ]
// },