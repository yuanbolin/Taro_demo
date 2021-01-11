import React, { Component } from 'react'
import { View, Text, ScrollView } from '@tarojs/components'
import Taro, { getCurrentInstance } from '@tarojs/taro'
import { AtNavBar,AtButton  } from 'taro-ui'

import { store } from '../../store'
import './index.scss'
import Test from '../../../component/test/test'
import Test2 from '../../../component/test2/test2'
import TabBar from '../../../component/tabBar/index'

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
        <View className='navBar' style={{ height: 42 + store.getState().StatusBar }}>
          <AtNavBar
            customStyle={{ paddingTop: store.getState().StatusBar ,background:'red'}}
            color='#000'
            fixed
          >
            <View className='navBar_title'>全赞</View>
          </AtNavBar>
        </View>
        <AtButton type='primary' onClick={()=>{
          Taro.navigateTo({
            url:'../message/index?id=2'
          })
        }}>按钮文案</AtButton>
        <ScrollView

          style='width: 200px; background: red;'
        >
          {arr.map((item, index) => {
            return (<View key={index} style='height: 50px; background: blue;' direction='all'>带走我{index}</View>)
          })}
        </ScrollView>
        <Test />
        {this.state.flag && <Test2 />}
        <TabBar/>
      </View>
    )
  }
}
