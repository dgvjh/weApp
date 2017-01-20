var types = ['default', 'primary', 'warn'];
var app = getApp();
Page({
  data:{
    name:"soul",
    loading:false,
    disabled:false,
    primarySize:'default',
    userInfo:{},
    array:['中国','美国','韩国'],
    objectArray:[
      {
        id: 0,
        name: '中国'
      },
      {
        id: 1,
        name: '美国'
      },
      {
        id: 2,
        name: '韩国'
      }
    ]
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
              title:'上传成功',
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
  bindPickerChange: function(e){
    console.log('picker发送选择改变，携带值为', e.detail.value)
      this.setData({
        index: e.detail.value
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