import React, { Component } from 'react'
import { View, Text, ScrollView } from '@tarojs/components'
import Taro, { getCurrentInstance } from '@tarojs/taro'
import { AtCheckbox } from 'taro-ui'
import { CuNavigation } from "@/CuNavigation";

import './index.scss'

const app = Taro.getApp()
export default class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hidden: true,
      listCurID: '',
      list: [],
      listCur: '',
      checkedList: ['list1']
    }
    this.checkboxOption = [{
      value: 'list1',
      label: 'iPhone X',
      desc: '部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。'
    }, {
      value: 'list2',
      label: 'HUAWEI P20'
    }, {
      value: 'list3',
      label: 'OPPO Find X',
      desc: '部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。',
      disabled: true
    }, {
      value: 'list4',
      label: 'vivo NEX',
      desc: '部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。',
      disabled: true
    }]
  }

  $instance = getCurrentInstance()
  $dom = Taro.createSelectorQuery()

  componentWillMount() {
    let list = [{}];
    for (let i = 0; i < 26; i++) {
      list[i] = String.fromCharCode(65 + i);
    }
    this.setState({
      list,
      listCur: list[0]
    })

  }

  componentDidMount() {
    let that = this;
    //这两句大概知道什么意思，但是emmm,这个boxTop和barTop具体是什么数值，不是很理解
    setTimeout(() => {
      Taro.createSelectorQuery()
        .select(".indexBar-box")
        .boundingClientRect((res) => {
          that.boxTop = res.top
        })
        .exec();
      Taro.createSelectorQuery().select('.indexes').boundingClientRect(function (res) {
        that.barTop = res.top
      }).exec()
    }, 10)

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

  //获取文字信息
  getCur = (e) => {
    console.log('getCur', e)
    let { list } = this.state
    this.setState({
      listCur: list[e.target.id],
      hidden: false
    })
  }

  setCur = (e) => {
    console.log('setCur', e)
    let { listCur } = this.state
    this.setState({
      listCur,
      hidden: true
    })

  }

  //滑动选择Item
  tMove = (e) => {
    e.stopPropagation()
    let y = e.touches[0].clientY,
      offsettop = this.boxTop,
      that = this;
    //判断选择区域,只有在选择区才会生效
    if (y > offsettop) {
      // 这个num计算结果怎么就是字母列表的下标呢，我没想明白，望大佬指教
      let num = parseInt((y - offsettop) / 16);
      let { list } = that.state
      that.setState({
        listCur: list[num],
      })
    };
  }

  //触发全部开始选择
  tStart = () => {
    this.setState({
      hidden: false,
    })
  }

  //触发结束选择
  tEnd = (e) => {
    console.log('tEnd', e)
    let { listCur } = this.state
    this.setState({
      hidden: true,
      listCurID: listCur
    })
  }

  //源码中有这个函数，但是这个页面中根本没有用到，删了没影响，我也不明白作者为什么写这个
  indexSelect = (e) => {
    let that = this;
    let barHeight = this.barHeight;
    let { list } = this.state;
    let scrollY = Math.ceil(list.length * e.detail.y / barHeight);
    for (let i = 0; i < list.length; i++) {
      if (scrollY < i + 1) {
        that.setState({
          listCur: list[i]
        })
        that.movableY = i * 20
        return false
      }
    }
  }

  handleChange(value) {
    this.setState({
      checkedList: value
    })
  }

  render() {
    let { hidden, list, listCur, listCurID } = this.state
    return (
      <View className='index'>
        <CuNavigation color="#fff" bgColor="linear-gradient(45deg, #D43f3b, #Ec008c)">
          索引列表
</CuNavigation>
        <View>
          <ScrollView scroll-y className="indexes" scrollIntoView={`indexes-${listCurID}`} style={{ height: 'calc(100vh - 50px)' }}
            scrollWithAnimation="true" enableBackToTop="true">
            {list.map((item, index) => {
              return (
                <View className={`indexItem-${item}`} id={`indexes-${item}`} key={index}>
                  <View className="padding">{item}</View>
                  <AtCheckbox
                    options={this.checkboxOption}
                    selectedList={this.state.checkedList}
                    onChange={this.handleChange.bind(this)}
                  />
                </View>
              )
            })}
          </ScrollView>
          <View className="indexBar" style={{ height: 'calc(100vh - 50px)' }}>
            <View className="indexBar-box" catchMove onTouchStart={this.tStart} onTouchEnd={this.tEnd} onTouchMove={this.tMove}>
              {list.map((item, index) => {
                return (
                  <View className="indexBar-item" style={{ fontSize: '16px', lineHeight: 1 }} key={index} id={`${index}`} onTouchStart={this.getCur} onTouchEnd={this.setCur}>
                    { item}
                  </View>
                )
              })}

            </View >
          </View >
          {/* 选择显示 */}
          {!hidden && <View className="indexToast">
            {listCur}
          </View>}
        </View>
      </View >
    )
  }
}
