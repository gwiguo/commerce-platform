const app = getApp();

Page({
  data: {
    value:"",
  },
  goArticle(event){
    app.globalData.search_text = event.detail;
    wx.switchTab({
      url: '/pages/article/index',
    })
  },
  onShow(){      
    app.globalData.search_text = "";
    this.setData({
        value:""
    })
  }
})