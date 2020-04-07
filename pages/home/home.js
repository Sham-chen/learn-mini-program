import request from "../../service/network"

// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.request({
    //   url: '添加微信 -- coderwhy002',
    //   data: {
    //     type: 'sell',
    //     page: 1
    //   },
    //   success: (result) => {
    //     console.log(result);
    //   },
    // });

    // wx.request({
    //   url: '添加微信 -- coderwhy002',
    //   method: 'post',
    //   data: {
    //     name: 'Sham',
    //     age: 25
    //   },
    //   success: function (res) {
    //     console.log(res);
    //   }
    // })
    request({
      url: '添加微信 -- coderwhy002'
    }).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})