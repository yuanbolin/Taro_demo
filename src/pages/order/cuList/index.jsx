import React, { Component } from 'react'
import { View, Text, ScrollView } from '@tarojs/components'
import Taro, { getCurrentInstance } from '@tarojs/taro'
import { CuTag } from "taro-color-ui";
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
    }
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
    console.log('getCur',e)
    let { list } = this.state
    this.setState({
      listCur: list[e.target.id],
      hidden: false
    })
  }

  setCur = (e) => {
    console.log('setCur',e)
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
    console.log('tEnd',e)
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



  render() {
    let { hidden, list, listCur, listCurID } = this.state
    return (
      <View className='index'>
        <CuNavigation color="#fff" bgColor="linear-gradient(45deg, #D43f3b, #Ec008c)">
          索引列表
</CuNavigation>
        <View>
          <View className="cu-bar bg-white search fixed">
            <View className="search-form round">
              <text className="cuIcon-search"></text>
              <input type="text" placeholder="输入搜索的关键词" confirm-type="search"></input>
            </View>
            <View className="action">
              <button className="cu-btn bg-gradual-green shadow-blur round">搜索</button>
            </View>
          </View>
          <ScrollView scroll-y className="indexes" scrollIntoView={`indexes-${listCurID}`} style={{ height: 'calc(100vh - 50px)' }}
            scrollWithAnimation="true" enableBackToTop="true">
            {list.map((item, index) => {
              return (
                <View className={`indexItem-${item}`} id={`indexes-${item}`} key={index}>
                  <View className="padding">{item}</View>
                  <View className="cu-list menu-avatar no-padding">
                    <View className="cu-item">
                      <View className="cu-avatar round lg">{item}</View>
                      <View className="content">
                        <View className="text-grey">{item}<text className="text-abc">{list[0]}</text>君</View>
                        <View className="text-gray text-sm">
                          有2个主子需要伺候
								</View>
                      </View>
                    </View>
                  </View>
                </View>
              )
            })}
          </ScrollView>
          <View className="indexBar" style={{ height: 'calc(100vh - 50px)' }}>
            <View className="indexBar-box" catchMove  onTouchStart={this.tStart} onTouchEnd={this.tEnd} onTouchMove={this.tMove}>
              {list.map((item, index) => {
                return (
                  <View className="indexBar-item" style={{fontSize:'16px',lineHeight:1}}  key={index} id={`${index}`} onTouchStart={this.getCur} onTouchEnd={this.setCur}>
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
