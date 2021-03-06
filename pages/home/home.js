// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: 'Sham',
    age: '25',
    students: [
      { id: 111, name: 'rita', age: 25 },
      { id: 112, name: 'grace', age: 26 },
      { id: 113, name: 'angel', age: 27 }
    ],
    count: 0,
    list: []
  },
  //方法
  addClick() {
    this.setData({
      count: this.data.count + 1
    })
  },
  subtractClick() {
    this.setData({
      count: this.data.count - 1
    })
  },
  handleGetUserInfo(event) {
    console.log(event);
  },
  handleViewClick() {
    console.log('我被点击了');
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'http://123.207.32.32:8000/api/h3/recommend',
      success: (res) => {
        console.log(res);
        const data = res.data.data.list
        this.setData({
          list: data
        })
      }
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