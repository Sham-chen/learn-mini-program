const TOKEN = 'token'
App({
  globalData: {
    token: ""
  },
  onLaunch: function () {
    const token = wx.getStorageSync(TOKEN);
    if (token && token.length !== 0) {
      this.check_token(token)
    } else {
      this.login()
    }
  },
  check_token(token) {
    console.log('执行了token验证操作')
    wx.request({
      url: 'http://123.207.32.32:3000/auth',
      method: 'post',
      header: {
        token
      },
      success: res => {
        if (!res.data.errCode) {
          console.log('token有效');
          this.globalData.token = token
        } else {
          this.login()
        }
      }
    })
  },
  login() {
    console.log('执行了login操作');
    wx.login({
      success: res => {
        const code = res.code
        wx.request({
          url: "http://123.207.32.32:3000/login",
          method: 'post',
          data: {
            code
          },
          success: res => {
            const token = res.data.token
            this.globalData.token = token
            wx.setStorageSync(TOKEN, token);
          }
        })
      }
    })
  }
})