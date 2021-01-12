import React, { Component } from 'react'
import { View, Text, Image } from '@tarojs/components'
import Taro, { getCurrentInstance } from '@tarojs/taro'
import { CuNavigation } from "@/CuNavigation";

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
    return (
      <View className='index' catchMove={this.Move}  >
        <CuNavigation isBack={false} color="#fff" bgColor="linear-gradient(45deg, #D43f3b, #Ec008c)">
          全赞
</CuNavigation>
        <Test />
        {this.state.flag && <Test2 />}
        <View className='at-article'>
          <View className='at-article__h1'>
            这是一级标题这是一级标题
  </View>
          <View className='at-article__info'>
            2017-05-07&nbsp;&nbsp;&nbsp;这是作者
  </View>
          <View className='at-article__content'>
            <View className='at-article__section'>
              <View className='at-article__h2'>这是二级标题</View>
              <View className='at-article__h3'>这是三级标题</View>
              <View className='at-article__p'>
                这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本落。这是文本段落。1234567890123456789012345678901234567890 ABCDEFGHIJKLMNOPQRSTUVWXYZ
      </View>
              <View className='at-article__p'>
                这是文本段落。这是文本段落。
      </View>
              <Image
                className='at-article__img'
                src='https://jdc.jd.com/img/400x400'
                mode='widthFix' />
            </View>
          </View>
        </View>
      </View>
    )
  }
}
