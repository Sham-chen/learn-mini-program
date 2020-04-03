//app.js
App({
  //onLaunch,onShow: options(path,query,scene,shareTicket,referrerInfo(appId,extraData))
  onLaunch: function (options) {
    console.log('小程序初始化完成 -- onLaunch');

    // wx.getUserInfo({
    //   success: (result) => {
    //     console.log(result);
    //   },
    // });

    // setTimeout(() => {
    //   const err = new Error()
    //   throw err
    // }, 2000);
  },
  onShow: function (options) {
    console.log('界面显示出来 -- onShow');

  },
  onHide: function () {
    console.log('界面隐藏时执行 -- onHide');

  },
  onError: function (msg) {
    console.log('小程序发生错误异常时执行 -- onError');

  },
  //options(path,query,isEntryPage)
  onPageNotFound: function (options) {

  },
  globalData: {

  }
});