import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Button, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import { CuNavigation } from "@/CuNavigation";

import { add, minus, asyncAdd } from '../../actions/counter'
import './index.scss'

class Cart extends Component {
  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='index'>
        <CuNavigation isBack={false} color="#fff" bgColor="linear-gradient(45deg, #D43f3b, #Ec008c)">
          购物车
</CuNavigation>
        <AtButton type='primary' onClick={this.props.add}>+</AtButton>
        <AtButton type='primary' onClick={this.props.dec}>-</AtButton>
        <AtButton type='primary' onClick={this.props.asyncAdd}>async</AtButton>
        <View><Text>{this.props.counter.num}</Text></View>
        <View><Text>Hello, World</Text></View>
      </View>
    )
  }
}

export default connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  add() {
    dispatch(add())
  },
  dec() {
    dispatch(minus())
  },
  asyncAdd() {
    dispatch(asyncAdd())
  }
}))(Cart)