import React, { Component } from 'react'
import { View, Text, Button } from '@tarojs/components'
import Taro, { getCurrentInstance } from '@tarojs/taro'

import Request from '../../utils/request'
import './index.scss'
import Home from '../home/index'
import Order from '../order/index'
import Cart from '../cart/index'
import My from '../my/index'

const app = Taro.getApp()
let tabList = [
  { title: '首页', icon: 'home', component: Home },
  { title: '订单', icon: 'order', component: Order },
  { title: '客服', icon: 'microphone', action: true, path: '/pages/service/index' },
  { title: '购物车', icon: 'cart', component: Cart },
  { title: '我的', icon: 'my', component: My },
]
let BarColor = 'red'
let BarBg = 'white'
export default class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      current: 0
    }
  }

  $instance = getCurrentInstance()
  $dom = Taro.createSelectorQuery()

  componentWillMount() {
  }

  componentDidMount() {
    window.onscroll = function (e) { //默认一个页面只能同时存在一个window.onscroll函数
    }
    setTimeout(() => {
      this.setState({
        flag: true
      })
    }, 2000)
    // console.log(this.$dom)
    // console.log(this.$instance)
    // console.log(process.env.TARO_ENV) //判断哪一端设备 小程序:weapp
    // console.log(app)
  }

  componentWillUnmount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  onPullDownRefresh() {
    this.setState({
      flag: false
    })
    // Taro.startPullDownRefresh 开始   Taro.stopPullDownRefresh 结束
    console.log('用户下拉')
  }

  onReachBottom() {
    //h5支持
    console.log('用户上拉')
  }

  //前往客服
  toService = (path) => {
    Taro.navigateTo({
      url: path
    })
  }

  //tabBar切换
  handleClick = (index) => {
    console.log(index)
    this.setState({
      current: index
    })
  }

  //接口实例
  requert = () => {
    Request({
      url: '/search/avatarjson',
      method: 'GET',
      data:{},
    })
  }

  render() {
    let { current } = this.state
    let Tab = tabList[current].component
    return (
      <View className='index'>
        <Tab />
        <View className="barBar_box">
          <View className={`cu-bar tabbar bg-${BarBg} shadow`}>
            {tabList.map((item, index) => {
              if (item.action) {
                return (
                  <View key={index} className="action text-gray add-action" onClick={() => this.toService(item.path)}>
                    <Button className={`cu-btn text-white cuIcon-${item.icon} bg-${BarColor} shadow`}></Button>
                    {item.title}
                  </View>
                )
              }
              return (
                <View key={index} className={`action text-${current == index ? BarColor : 'gray'}`} onClick={() => this.handleClick(index)}>
                  <View className={`cuIcon-${item.icon}`}></View>
                  {item.title}
                </View>
              )
            })}
          </View>
        </View>
      </View>
    )
  }
}
