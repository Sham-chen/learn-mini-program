// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    counter: 0,
    age: 0,
    name: '',
    isShow: true
  },
  //方法
  handleIncrement(event) {
    console.log(event);
    const detail = event.detail
    this.setData({
      counter: this.data.counter + 1,
      name: detail.name,
      age: detail.age
    })
  },
  handleTabClick(event) {
    console.log(event);
  },
  handleSelCpn() {
    // console.log('-----------');
    const my_sel = this.selectComponent('.sel-class')
    // my_sel.setData({
    //   counter: my_sel.data.counter + 10
    // })
    my_sel.incrementCounter(10)
  },
  handleSlotShow() {
    this.setData({
      isShow: !this.data.isShow
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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