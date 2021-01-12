import Taro from '@tarojs/taro'
import { baseUrl, noConsole } from './common'


export default (options = { method: 'GET', data: {} }) => {
  if (!noConsole) {
    console.log(`${new Date().toLocaleString()}【 M=${options.url} 】P=${JSON.stringify(options.data)}`)
  }
   //获取token
   let token = Taro.getStorageSync('token');
   token = token ? `${token}` : '';
   let headerConfig = {
     AppletToken: token,
     'content-type': 'application/JSON'
   };
  return Taro.request({
    url: baseUrl + options.url,
    data: {
      ...options.data
    },
    header: Object.assign(headerConfig, model.config),
    // mode:'cors',
    method: options.method.toUpperCase(),
  }).then(res => {
    const { statusCode, data } = res
    if (statusCode >= 200 && statusCode < 300) {
      if (!noConsole) {
        console.log(`${new Date().toLocaleString()}【 M=${options.url} 】【接口响应：】`, res.data)
      }
      if (data.status !== 'ok') {
        Taro.showToast({
          title: `${res.data.error.message}~` || res.data.error.code,
          icon: 'none',
          mask: true,
        })
      }
      return data
    }
    throw new Error(`网络请求错误，状态码${statusCode}`)
  })
}
