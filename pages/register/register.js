var types = ['default', 'primary', 'warn'];
var app = getApp();
Page({
  data:{
    name:"soul",
    loading:false,
    disabled:false,
    primarySize:'default',
    userInfo:{}
  },
  bindUpload: function(){
    wx.chooseImage({
      success: function(res) {
        console.log(res);
        var tempFilePaths = res.tempFilePaths
        wx.uploadFile({
          url: 'http://example.weixin.qq.com/upload', //仅为示例，非真实的接口地址
          filePath: tempFilePaths[0],
          name: 'file',
          formData:{
            'user': 'test'
          },
          success: function(res){
            var data = res.data
            //do something
          },
          complete:function(){
            wx.showToast({
              title:'成功',
              icon:"success",
              duration:2000
            })
          },
          fail: function() {
            // fail
          } 
        })
      }
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