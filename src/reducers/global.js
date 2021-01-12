//全局参数
let globalData = {
  baseUrl: 'http://xxx', // 请求连接前缀
  isAuth: false,
  user: 'xx',
  noConsole: true // 输出日志信息
}
//添加setGlobal状态保护
export default function global(state = globalData, action) {
  if (action.type = 'setGlobal') {
    return {
      ...state,
      ...action.payload
    }
  }
  return state
}
