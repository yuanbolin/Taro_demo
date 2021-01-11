import React, { Component } from 'react'
import { View, Text, ScrollView } from '@tarojs/components'
import Taro, { getCurrentInstance } from '@tarojs/taro'
import { AtNavBar, AtButton } from 'taro-ui'

import { store } from '../../store'
import './index.scss'
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
  }

  componentWillUnmount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }
  handleClick = (e) => {
    console.log(e)
    Taro.navigateBack()
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
            customStyle={{ paddingTop: store.getState().StatusBar,color:'red' }}
            onClickLeftIcon={this.handleClick}
            color='#000'
            fixed
            leftIconType='chevron-left'
          >
            <View>详情</View>
          </AtNavBar>
        </View>
        <AtButton type='secondary'>按钮文案</AtButton>
      </View>
    )
  }
}
