//index.js
//获取应用实例
const app = getApp()
var API = require('../../utils/api.js')

Page({
  data: {
    currentData: 1,
    tabs: [
      "热映", "待映"
    ],
  },
  onLoad: function () {
    API.ajax('', function (res) {
      console.log(res)
      that.setData({
        list: res.data
      })
    });
  },
  choose(e) {
    var that = this;
    if (this.data.currentData === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentData: e.target.dataset.index
      })
    }
  }
})
