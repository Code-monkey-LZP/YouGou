 import { getSetting, chooseAddress, openSetting, showModal, showToast } from "../../utils/asyncWx.js";
 import regeneratorRuntime from '../../lib/runtime/runtime';
 
 Page({
   data: {
     address: {},
     cart: [],
     totalPrice: 0,
     totalNum: 0
   },
   onShow() {
     // 1.获取缓存中的收货地址信息
     const address = wx.getStorageSync("address");
     // 1.获取缓存中的购物车数据
     let cart = wx.getStorageSync("cart") || [];
     //过滤后的购物车数据
     cart=cart.filter(v=>v.checked);
     this.setData({ address });
     // 总价格 总数量
     let totalPrice = 0;
     let totalNum = 0;
     cart.forEach(v => {
         totalPrice += v.num * v.goods_price;
         totalNum += v.num;
     })
    
     this.setData({
       cart,
       totalPrice,
       totalNum,
       address
     });
   },
 })