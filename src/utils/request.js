import axios from 'axios'
// axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'
axios.defaults.headers['Content-Type'] = 'multipart/form-data' // 本地请求JSON格式数据，请求头改为multipart/form-datac
// 创建axios实例
const service = axios.create({
  // axios中请求配置有baseURL选项，表示请求URL公共部分
  // baseURL: import.meta.env.VITE_APP_BASE_API,
  // 超时
  timeout: 10000
})
export default service