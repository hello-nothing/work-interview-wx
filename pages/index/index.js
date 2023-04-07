// index.js
// 获取应用实例
const {
  getTypeList
} = require('../../utils/api')
Page({
  data: {
    navList: []
  },
  // 事件处理函数
  goPage(e) {
    const url = e.currentTarget.dataset.url;
    const id = e.currentTarget.dataset.id;
    console.log(id)
    wx.navigateTo({
      url: `/pages/question/question?id=${id}`
    })
  },
  onShow: function (options) {
    const data = wx.getStorageSync('typeList')
    if (data) {
      this.setData({
        navList: JSON.parse(data)
      })
    } else {
      this.getTypeList()
    }
  },
  getTypeList() {
    getTypeList().then(res => {
      console.log(res)
      this.setData({
        navList: res.data
      })
      wx.setStorageSync('typeList', JSON.stringify(res.data))
    })
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