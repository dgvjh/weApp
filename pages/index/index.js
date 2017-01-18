//index.js
//获取应用实例
var app = getApp()
var types = ['default','primary','warn']
Page({
  data: {
    motto: 'Hello World',
    register: '注册',
    userInfo: {},
    login: '登录',
    defaultSize: 'default',
    primarySize: 'default',
    warnSize: 'default',
    disabled: false,
    plain: false,
    loading: false
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  bindRegister: function(){
    wx.navigateTo({
      url: '../register/register'
    })
  },
  bindLogin: function(){
    wx.navigateTo({
      url: '../login/login'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
