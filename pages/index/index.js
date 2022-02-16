//获取应用实例
import { slideImages, venuesItems, choiceItems } from './data';
var app = getApp();
Page({
  data: {
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    loadingHidden: false, // loading
  },

  //事件处理函数
  swiperchange: function (e) {
    //console.log(e.detail.current)
  },

  onLoad: function () {
    console.log('onLoad');
    var that = this;
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo,
      });
    });

    //sliderList https://nimg.ws.126.net/?url=http%3A%2F%2Fdingyue.ws.126.net%2FOGwkh5IGt5v4YdC3vNhB8GhlPoREona6KFwo%3D83yqIycQ1554361252055.jpg&thumbnail=660x2147483647&quality=80&type=jpg
    that.setData({
      images: slideImages,
      venuesItems,
      choiceItems,
    });

    setTimeout(function () {
      that.setData({
        loadingHidden: true,
      });
    }, 1500);
    // wx.request({
    //     url: '/wemall/slider/list',
    //     method: 'GET',
    //     data: {},
    //     header: {
    //         'Accept': 'application/json'
    //     },
    //     success: function(res) {
    //         that.setData({
    //             images: res.data
    //         })
    //     }
    // })

    //venuesList 主体管
    // wx.request({
    //   url: '/wemall/venues/venuesList',
    //   method: 'GET',
    //   data: {},
    //   header: {
    //     Accept: 'application/json',
    //   },
    //   success: function (res) {
    //     that.setData({
    //       venuesItems: res.data.data,
    //     });
    //     setTimeout(function () {
    //       that.setData({
    //         loadingHidden: true,
    //       });
    //     }, 1500);
    //   },
    // });

    //choiceList
    // wx.request({
    //   url: '/wemall/goods/choiceList',
    //   method: 'GET',
    //   data: {},
    //   header: {
    //     Accept: 'application/json',
    //   },
    //   success: function (res) {
    //     that.setData({
    //       choiceItems: res.data.data.dataList,
    //     });
    //     setTimeout(function () {
    //       that.setData({
    //         loadingHidden: true,
    //       });
    //     }, 1500);
    //   },
    // });
  },
});
