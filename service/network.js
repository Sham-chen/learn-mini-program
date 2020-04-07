export default function request(options) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: options.url,
      methods: options.method || 'get',
      data: options.data || {},
      success: function (res) {
        console.log(res);
      },
      fail: function (err) {
        console.log(err);
      }
    })
  })
}