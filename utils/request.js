const GET = 'get';
const POST = 'post';

const baseURL = 'http://101.34.52.34:8080'; // 接口请求地址

module.exports = function (options) {
    return new Promise(function (resolve, reject) {
        let token = wx.getStorageSync('token') ? wx.getStorageSync('token') : ''
        let header = {
            'content-type': 'application/json',
            'token': token
        };
        wx.request({
            url: baseURL + options.url,
            method: options.method,
            data: options.method === POST ? JSON.stringify(options.data) : options.data,
            header: header,
            success(res) {
                // 请求到接口前页面展示loading
                wx.showLoading({
                    title: '加载中...',
                    success: function () {
                        // 请求成功
                        // 判断状态码，根据后端定义来判断
                        if (res.data.code == 200) {
                            resolve(res.data);
                        } else {
                            // 其他异常
                            reject(res);
                            wx.showToast({
                                title: res.data.message,
                                icon: 'none'
                            })
                        }
                        // resolve(res.data)
                    }
                })
            },
            fail: function (err) {
                // 请求失败
                reject(err)
                wx.showToast({
                    title: '网络繁忙，请稍后重试~',
                    icon: 'none'
                })
            },
            complete: function () {
                // 配对使用（loading消失）
                wx.hideLoading();
            }
        })
    })
}