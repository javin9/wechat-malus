var app = getApp();
Page({
  data: {
    userInfo: {},
    userListInfo: [
      {
        icon: '../../images/iconfont-dingdan.png',
        text: '我的联系方式',
        isunread: true,
        unreadNum: 2,
      },
      {
        icon: '../../images/iconfont-shouhuodizhi.png',
        text: '收货地址管理',
      },
      {
        icon: '../../images/iconfont-kefu.png',
        text: '联系客服',
      },
      {
        icon: '../../images/iconfont-help.png',
        text: '常见问题',
      },
    ],
  },

  onLoad: function () {
    var that = this;
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      console.log(userInfo);
      //更新数据
      that.setData({
        userInfo: userInfo,
      });
    });
  },
});
