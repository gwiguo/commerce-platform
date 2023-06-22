const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    value: "test",
    article_list: [],
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    //   console.log(app.globalData.article_list);
    //如果有携带参数，说明是从首页搜索跳转过来的，需要对文章进行过滤
    // if (app.globalData.search_text) {
    wx.showLoading({
      title: '加载中...',
      mask:true
    })
    let temp_list = [];
    app.globalData.my_collect.forEach(my_collect_article_id=>{
        for (let i = 0; i < app.globalData.article_list.length; i++) {
            const article = app.globalData.article_list[i];            
            if(my_collect_article_id == article['_id']){
                temp_list.push(article);
                break;
            }
        }
    })
    this.setData(
      {
        article_list: temp_list
      },
      () => {
        wx.hideLoading();
      }
    );
  },
  goArticleDetail(event) {
    wx.navigateTo({
      url: "/pages/article-detail/index?id=" + event.currentTarget.dataset.id,
    });
  },
});
