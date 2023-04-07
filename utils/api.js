const request = require('../utils/request')
// 登录
export function login(data) {
    return request({
        url: `/api/v1/user/getToken?code=${data.code}`,
        method: 'POST',
    })
}
// 获取题目类型
export function getTypeList() {
    return request({
        url: '/api/v1/InterviewKind/list',
        method: 'GET',
    })
}
// 根据类型查看题目
export function getQuestionList(data) {
    return request({
        url: `/api/v1/question/type/${data.id}`,
        method: 'GET',
    })
}
// 查看题目详情
export function getQuestionDetail(data) {
    return request({
        url: `/api/v1/question/detail/${data.id}`,
        method: 'GET',
    })
}
// 点击收藏
export function collectQuestion(data) {
    return request({
        url: `/api/v1/user/like/${data.id}`,
        method: 'POST',
    })
}
// 取消收藏
export function cancelCollect(data) {
    return request({
        url: `/api/v1/user/unlike/${data.id}`,
        method: 'GET',
    })
}
// 收藏列表 
export function getLikeList(data) {
    return request({
        url: `/api/v1/user/myLike`,
        method: 'GET',
    })
}
// export function product(data){
//   return request({
//     url:'/cart/updateNum',
//     method:'post',
//     data
//   })
// }