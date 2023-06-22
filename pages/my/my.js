import Toast from '@vant/weapp/toast/toast';
const app = getApp();

Page({
  data: {
    coverUrl:"https://img.yejiefeng.com/poster/default.jpg",
    avatarUrl:"../../static/avatar.jpg",
    nickName:"闹够了没有",
    is_login:false
  },
  async login(){
    wx.showLoading({
        title:"登录中~",
        mask:true
    });
    this.setData({
        is_login:true,
    },()=>{
        app.globalData.is_login = true;
        setTimeout(()=>{
            wx.hideLoading();
        },500)        
    })
  },
  onTapAvatar(){

  },    
  goToFeedback(){
      wx.navigateTo({
        url: '/pages/feedback/feedback',
      })
  },
  goToCollect(){
      if(app.globalData.is_login){
        wx.navigateTo({
          url: '/pages/my-collect/index'
        })  
      }else{
        wx.showToast({
          title: '请先登录~',
          icon:"error"
        })
      }
  },
  showToast(){
    Toast.loading({
        message:'正在开发中~快了快了！',
        loadingType:"spinner",
        duration:1000
    });
  },
  onChooseAvatar(e){
    const { avatarUrl  } = e.detail;
    this.setData({
        avatarUrl
    })
  },
  chooseCover(){
      const _this = this;
      wx.chooseMedia({
          count:1, // 只能选1张图片
          mediaType:['image'], //只能选择图片
          sourceType:['album'], // 只能从相册选择
          success(e){
              _this.setData({
                  coverUrl:e.tempFiles[0].tempFilePath
              })
          }
      })
  }
})