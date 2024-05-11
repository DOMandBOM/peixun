import request from '@/utils/request'

// 导航菜单信息
export const getNavList = () => {
  return request('/web-api/dunsi/article-type/listMenu')
}

// 文章列
export const getContentList = (articleTypeId, data = null) => {
  return request.post('/web-api/dunsi/article/page', { articleTypeId, ...data })
}

// 文章详情
export const getContent = (id) => {
  return request('/web-api/dunsi/article/get', { params: { id } })
}

// 提交
export const getSubmit = (data) => {
  return request.post('/web-api/dunsi/student/create', data)
}

// 获取工种
export const getSelect = () => {
  return request('/web-api/work/type/page', {
    params: {
      pageNo: 1,
      pageSize: 100
    }
  })
}

// 获取栏目子级列表
export const getSonList = (parentId) => {
  return request('/web-api/dunsi/article-type/page', { params: { parentId } })
}

// 获取上下文章
export const getUpNext = (id) => {
  return request('/web-api/dunsi/article/list/NeighboringArticle', { params: { id } })
}

// 首页接口
export const getHome = (articleTypeId, size = 10) => {
  return request('/web-api/dunsi/article-type/get-list', { params: { articleTypeId, size } })
}
// 获取验证码
export const getYz = () => {
  return request('/web-api/dunsi/captcha/get', { responseType: 'blob' })
}

// 登录查询证书
export const getLoginZs = (obj) => {
  return request.post('/web-api/dunsi/certificate/search', obj)
}
// 学校介绍
export const jsSchool = () => {
  return request('/web-api/dunsi/article/topArticle/10')
}
