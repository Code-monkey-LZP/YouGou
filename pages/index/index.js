// 0 引入用来发送请求的方法 ，一定要把路径补全
import { request } from "../../request/index.js"
Page({
  data: {
    // 轮播图数组
    swiperList: [],
    // 分类导航数组
    catesList: [],
    // 商品楼层数组
    floorList:[]
  },
  //页面开始加载 就会触发
  onLoad: function (options) {
    // 1 发送异步请求获取轮播图数据 优化的手段可以通过ES6的 promise来解决这个问题
    // var reqTask = wx.request({
    //   url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
    //   success: (result)=>{
    //     this.setData({
    //       swiperList:result.data.message
    //     })
    //   },
    // });
    // 调用
    this.getSwiperList();
    this.getCateList();
    this.getFloorList()
  },
  //获取轮播图数据
  getSwiperList() {
    request({ url: "https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata" })
      .then(result => {
        this.setData({
          swiperList: result.data.message
        })
      })
  },
  //获取分类导航数据
  getCateList() {
    request({ url: "https://api-hmugo-web.itheima.net/api/public/v1/home/catitems" })
      .then(result => {
        this.setData({
          catesList: result.data.message
        })
      })
  },
  //获取商品楼层数据
  getFloorList() {
    request({ url: "https://api-hmugo-web.itheima.net/api/public/v1/home/floordata" })
      .then(result => {
        this.setData({
          floorList: result.data.message
        })
      })
  },
});