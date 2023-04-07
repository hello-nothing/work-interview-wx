// app.js
import {
  _request,
} from './utils/request'
const {
  login
} = require('./utils/api')
App({
  onLaunch() {
    // 登录
    wx.login({
      success: res => {
        console.log(res)
        this.globalData.code = res.code;
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        login({
          code: res.code
        }).then(result => {
          console.log(result);
          wx.setStorageSync('token', result.data.token)
        })

      }
    })
  },
  globalData: {
    userInfo: null,
    _request
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