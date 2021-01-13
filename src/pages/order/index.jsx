import React, { Component } from 'react'
import { View, Text, ScrollView } from '@tarojs/components'
import Taro, { getCurrentInstance } from '@tarojs/taro'
import { CuButton } from "taro-color-ui";
import { CuNavigation } from "@/CuNavigation";

import './index.scss'

const app = Taro.getApp()
export default class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  $instance = getCurrentInstance()
  $dom = Taro.createSelectorQuery()

  componentWillMount() {
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  onPullDownRefresh() {
    // Taro.startPullDownRefresh 开始   Taro.stopPullDownRefresh 结束
    console.log('用户下拉')
  }

  onReachBottom() {
    //h5支持
    console.log('用户上拉')
  }
  render() {
    return (
      <View className='index'>
        <CuNavigation isBack={false} color="#fff" bgColor="linear-gradient(45deg, #D43f3b, #Ec008c)">
          订单
</CuNavigation>
        <CuButton onClick={() => Taro.navigateTo({ url: '/pages/order/cuIndexes/index' })}>colorUI索引列表</CuButton>
        <CuButton onClick={() => Taro.navigateTo({ url: '/pages/order/taroIndexes/index' })}>taroUI索引列表</CuButton>
      </View>
    )
  }
}
