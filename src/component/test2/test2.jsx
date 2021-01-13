import React from 'react'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'

export default class Test extends React.Component {
  componentDidMount () {
    Taro.nextTick(() => {
      // 使用 Taro.nextTick 模拟 setData 已结束，节点已完成渲染
      Taro.createSelectorQuery().select('#only')
        .boundingClientRect()
        .exec(res => console.log(res, 'res'))
    })
  }

  render () {
    return (
      <View id="only" />
    )
  }
}