import React, {
  Component
} from 'react'
import {
  Provider
} from 'react-redux'
import Taro, {
  getCurrentInstance
} from '@tarojs/taro'
import {
  SETGLOBAL
} from '@/global'

import configStore from './store/index'
import './app.scss'
const store = configStore()
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
        //顶部导航栏高度尺寸
        let globalData = {}
        globalData.StatusBar = e.statusBarHeight == '' ? 0 : e.statusBarHeight;
        if (process.env.TARO_ENV == 'weapp') {
          let custom = wx.getMenuButtonBoundingClientRect();
          globalData.Custom = custom;
          globalData.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
        } else {
          globalData.Custom = 0;
          globalData.CustomBar = 0;
        }
        store.dispatch(SETGLOBAL(globalData))
      }
    })
  }

  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  // this.props.children 是将要会渲染的页面
  render() {
    // 在入口组件不会渲染任何内容，但我们可以在这里做类似于状态管理的事情
    /* this.props.children 是将要被渲染的页面 */
    return ( <Provider store = {store} > {
        this.props.children
      } </Provider>
    )
  }
}

export default App
