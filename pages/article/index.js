const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    value: "test",
    article_list: [],
    banner_list:[]
  },
  onShow() {
    //如果有携带参数，说明是从首页搜索跳转过来的，需要对文章进行过滤
    wx.showLoading({
      title: '加载中...',
      mask:true
    })
    this.setData(
      {
        article_list: app.globalData.article_list.filter((item) =>{
            return item.title.includes(app.globalData.search_text);
        }        
        ),
      },
      () => {
          this.setData({
            banner_list:this.data.article_list.slice(0,3)
          })
        wx.hideLoading();
      }
    );
  },
  goArticleDetail(event) {
    // 跳转到文章详情页的时候把该文章的id传递过去，详情页才知道要显示哪篇文章的数据展示
    wx.navigateTo({
      url: "/pages/article-detail/index?id=" + event.currentTarget.dataset.id,
    });
  },
});
