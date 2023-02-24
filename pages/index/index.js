// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    navList: [{
        name: 'HTML',
        url: '/pages/html/html',
      },
      {
        name: 'CSS',
        url: '/pages/css/css',
      },
      {
        name: 'Js',
        url: '/pages/js/js',
      },
      {
        name: 'vue2.0',
        url: '/pages/vue/vue',
      },
      {
        name: 'vue3.0',
        url: '',
      },
      {
        name: 'react',
        url: '',
      },
      // {
      //   name: 'ES6',
      //   url: '/pages/es6/es6',
      // },
      {
        name: '小程序',
        url: '/pages/wx/wx',
      },
      {
        name: 'HTTP',
        url: '/pages/http/http',
      },
      {
        name: 'webpack',
        url: '/pages/webpack/webpack',
      },
      {
        name: '性能优化',
        url: '/pages/optimize/optimize',
      },
      {
        name: '常见手写',
        url: '',
      },
      {
        name: '其他',
        url: '/pages/other/other',
      },
    ]
  },
  // 事件处理函数
  goPage(e) {
    const url =  e.currentTarget.dataset.url;
    wx.navigateTo({
      url
    })
  },
  onLoad() {
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
})