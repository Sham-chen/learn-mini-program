// pages/home/home.js
Page({
  handleShowToast() {
    wx.showToast({
      title: '添加成功',
      duration: 2000,
      icon: 'success',
      mask: true,
      success: function () {
        console.log('弹窗展示成功');
      },
      fail: function () {
        console.log('弹窗展示失败');
      },
      complete: function () {
        console.log('完成函数的调用');
      }
    })
  },
  handleShowModal() {
    wx.showModal({
      title: '标题',
      content: '内容',
      cancelText: '退出',
      cancelColor: 'red',
      success: function (res) {
        console.log(res);
        if (res.cancel) {
          console.log('用户点击了退出');
        }
        if (res.confirm) {
          console.log('用户点击了确定');
        }
      }
    })
  },
  handleShowLoading() {
    wx.showLoading({
      title: '加载ing',
      mask: true
    })
    setTimeout(() => {
      wx.hideLoading()
    }, 2000);
  },
  handleActionSheet() {
    wx.showActionSheet({
      itemList: ['相册', '拍照'],
      itemColor: 'red',
      success: function (res) {
        console.log(res);
        switch (res.tapIndex) {
          case 0:
            console.log('相册');
            break;
          default:
            break;
        }
      }
    })
  },
  onShareAppMessage: function (options) {
    return {
      title: 'hello Grace',
      path: '/pages/home/home',
      imageUrl: 'https://img03.sogoucdn.com/app/a/07/e58d89131f3a0882b804313208e0e983'
    }
  }
})