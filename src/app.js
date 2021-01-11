import React, {Component} from 'react'
import {Provider} from 'react-redux'
import Taro, {getCurrentInstance} from '@tarojs/taro'

import {store, globalData} from './store'
import './app.scss'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: "yuanbolin"
    }
  }

  // 对应 onLaunch
  onLaunch() {
    Taro.getSystemInfo({
      success: e => {
        console.log(e)
        globalData.StatusBar = e.statusBarHeight == '' ? 0 : e.statusBarHeight;
        if (process.env.TARO_ENV == 'weaapp') {
          let custom = wx.getMenuButtonBoundingClientRect();
          globalData.Custom = custom;
          globalData.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
        }
        globalData.Custom = 0;
        globalData.CustomBar = 0;
        store.dispatch(globalData)
        console.log(store.getState())
      }
    })
  }

  componentDidMount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  componentDidCatchError() {
  }

  // this.props.children 是将要会渲染的页面
  render() {
    // 在入口组件不会渲染任何内容，但我们可以在这里做类似于状态管理的事情
    /* this.props.children 是将要被渲染的页面 */
    return (
      <Provider store={store}>
        {this.props.children}
      </Provider>
    )
  }
}

export default App
