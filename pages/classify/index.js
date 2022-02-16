import { navLeftItems } from './data';
var app = getApp();
Page({
  data: {
    navLeftItems: [],
    navRightItems: [],
    curNav: 1,
    curIndex: 0,
  },
  onLoad() {
    var that = this;
    that.setData({
      navLeftItems,
      navRightItems: [],
    });
    // wx.request({
    //   url: '/wemall/goodstype/typebrandList',
    //   method: 'GET',
    //   data: {},
    //   header: {
    //     Accept: 'application/json',
    //   },
    //   success(res) {
    //     that.setData({
    //       navLeftItems: res.data,
    //       navRightItems: res.data,
    //     });
    //   },
    // });
  },

  //事件处理函数
  switchRightTab(e) {
    let id = e.target.dataset.id;
    let index = parseInt(e.target.dataset.index);
    this.setData({
      curNav: id,
      curIndex: index,
    });
  },
});
