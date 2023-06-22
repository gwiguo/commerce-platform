const app = getApp();

Page({
  data: {
      article_info:{},
      article_list:app.globalData.article_list,
      is_show_content:false,
      is_like:false
  },
  onLoad(options) { 
    wx.showLoading({
      title: '加载中...',
      mask:true
    });
    this.setData({
        article_info:this.data.article_list.filter(item=>item['_id']==options.id)[0]
    },()=>{
        if(app.globalData.my_collect.includes(this.data.article_info['_id'])){
            this.setData({
                is_like:true
            })
        }else{
            this.setData({
                is_like:false
            })
        }
        this.setData({
            ['article_info.content'] : decodeURIComponent(this.data.article_info.content),
            is_show_content:true
        },()=>{
            wx.hideLoading();
        })
    });
  },
  like(){
      // 先判断一下这篇文章在不在我的收藏里，不在的话才添加到我的收藏，防止重复添加   
      if(!app.globalData.my_collect.includes(this.data.article_info['_id'])){
          app.globalData.my_collect.push(this.data.article_info['_id']);
          this.setData({
              is_like:true
          })
      }
  },
  disLike(){ 
    // 先判断一下这篇文章在不在我的收藏里，在的话才移除，防止报错  
    if(app.globalData.my_collect.includes(this.data.article_info['_id'])){
        app.globalData.my_collect.splice(app.globalData.my_collect.indexOf(this.data.article_info['_id'],1))
        this.setData({
            is_like:false
        })
    }
  },
  onUnload(){
    //   console.log('onUnload');
  }
})
