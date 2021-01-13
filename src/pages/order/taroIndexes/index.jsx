import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtIndexes } from 'taro-ui'
export default class Index extends Component {
  onClick (item) {
    console.log(item)
  }
  render() {
    const list = [{
      title: 'A',
      key: 'A',
      items: [
        {
          'name': '阿坝'
          // 此处可加其他业务字段
        },
        {
          'name': '阿拉善'
        },
        {
          'name': '阿拉善'
        },
        {
          'name': '阿拉善'
        },
        {
          'name': '阿拉善'
        },
        {
          'name': '阿拉善'
        },
        {
          'name': '阿拉善'
        },
        {
          'name': '阿拉善'
        },
        {
          'name': '阿拉善'
        },
        {
          'name': '阿拉善'
        },
        {
          'name': '阿拉善'
        },
        {
          'name': '阿拉善'
        },
        {
          'name': '阿拉善'
        },
        {
          'name': '阿拉善'
        },
        {
          'name': '阿拉善'
        },
        {
          'name': '阿拉善'
        },
        {
          'name': '阿拉善'
        },
        {
          'name': '阿拉善'
        },
        {
          'name': '阿拉善'
        },
        {
          'name': '阿拉善'
        },
        {
          'name': '阿拉善'
        },
        {
          'name': '阿拉善'
        },
        {
          'name': '阿拉善'
        },
        {
          'name': '阿拉善'
        },
        {
          'name': '阿拉善'
        },
        {
          'name': '阿拉善'
        },
        {
          'name': '阿拉善'
        },
        {
          'name': '阿拉善'
        },
        {
          'name': '阿拉善'
        },
        {
          'name': '阿拉善'
        },
        {
          'name': '阿拉善'
        },
        {
          'name': '阿拉善'
        },
        {
          'name': '阿拉善'
        },
        {
          'name': '阿拉善'
        },
        {
          'name': '阿拉善'
        },
        {
          'name': '阿拉善'
        },
        {
          'name': '阿拉善'
        }]
      },
      {
        title: 'B',
        key: 'B',
        items: [
          {
            'name': '北京'
          },
          {
            'name': '保定'
          }]
      },
      {
        title: 'C',
        key: 'C',
        items: [
          {
            'name': '北京'
          },
          {
            'name': '保定'
          }]
      },
      {
        title: 'D',
        key: 'D',
        items: [
          {
            'name': '北京'
          },
          {
            'name': '保定'
          }]
      },
      {
        title: 'E',
        key: 'E',
        items: [
          {
            'name': '北京'
          },
          {
            'name': '保定'
          }]
      }
    ]
    //缺点列表子组件无法自定义
    return (
      <View style='height:100vh'>
        <AtIndexes
          list={list}
          onClick={this.onClick.bind(this)}
        >
          <View>自定义内容</View>
        </AtIndexes>
      </View>
    )
  }
}