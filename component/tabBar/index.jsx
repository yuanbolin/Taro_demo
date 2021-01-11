import React from 'react'
import { View } from '@tarojs/components'
import Taro, { eventCenter, getCurrentInstance } from '@tarojs/taro'
import { AtTabBar } from 'taro-ui'

export default class Test extends React.Component {
  $instance = getCurrentInstance()

  constructor() {
    super(...arguments)
    this.state = {
      current: 0
    }
  }
  componentWillMount() {
    const onReadyEventId = this.$instance.router.onReady  //onShow onHide
    eventCenter.on(onReadyEventId, () => {
      console.log('onReady')

      // onReady 触发后才能获取小程序渲染层的节点
      Taro.createSelectorQuery().select('#only')
        .boundingClientRect()
        .exec(res => console.log(res, 'res'))
    })
  }

  handleClick(value) {
    this.setState({
      current: value
    })
  }

  render() {
    return (
      <AtTabBar
        color='#ea6bb8'
        tabList={[
          { title: '待办事项', iconType: 'bullet-list', text: 'new' },
          { title: '拍照', iconType: 'camera' },
          { title: '文件夹', iconType: 'folder', text: '100', max: 99 }
        ]}
        fixed
        onClick={this.handleClick.bind(this)}
        current={this.state.current}
      />
    )
  }
}