import React, { Component } from 'react'
import { View, Text, ScrollView } from '@tarojs/components'
import Taro, { getCurrentInstance } from '@tarojs/taro'
import { CuNavigation } from "@/CuNavigation";

import { store } from '../../store'
import './index.scss'
import Test from '../../../component/test/test'
import Test2 from '../../../component/test2/test2'

const app = Taro.getApp()
export default class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      flag: false
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

  Move = (e) => {
    console.log(e)
  }

  render() {
    let arr = []
    for (let i = 0; i < 40; i++) {
      arr.push(i)
    }
    return (
      <View className='index' catchMove={this.Move}  >
        <CuNavigation isBack={false} color="#fff" bgColor="linear-gradient(45deg, #D43f3b, #Ec008c)">
          全赞
</CuNavigation>
        <Test />
        {this.state.flag && <Test2 />}
      </View>
    )
  }
}
