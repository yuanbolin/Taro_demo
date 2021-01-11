import React from 'react'
import { View } from '@tarojs/components'
import Taro, { eventCenter, getCurrentInstance } from '@tarojs/taro'

export default class Test extends React.Component {
  $instance = getCurrentInstance()

  componentWillMount () {
    const onReadyEventId = this.$instance.router.onReady  //onShow onHide
    eventCenter.on(onReadyEventId, () => {
      console.log('onReady')

      // onReady 触发后才能获取小程序渲染层的节点
      Taro.createSelectorQuery().select('#only')
        .boundingClientRect()
        .exec(res => console.log(res, 'res'))
    })
  }

  render () {
    return (
      <View id="only">
      </View>
    )
  }
}