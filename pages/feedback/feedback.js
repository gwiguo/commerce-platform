Page({
  /**
   * 页面的初始数据
   */
  data: {
    feedback_text: "",
    fileList: [],
    isDisabledSubmitBtn: true,
  },    
  input_text(event) {
    this.feedback_text = event.detail;
  },
  input_change(event){      
      //  文本框的值改变时触发该函数，trim()函数可以把字符串前后的空格都去掉
      //  如果经过trim()函数的处理后布尔值为真，说明确实输入了内容，则允许提交  
      if(event.detail.trim()){
          this.setData({
              isDisabledSubmitBtn:false
          })
      }else{
        this.setData({
            isDisabledSubmitBtn:true
        })          
      }
  },
  submit(){
    wx.showLoading({
        title:"反馈中..."
    });
    // 设置一个一秒钟后触发的定时器来模拟与后端交互
    setTimeout(()=>{ 	
        wx.hideLoading();	
        wx.showToast({
            title:'反馈成功~',
            icon:'none'
        })  
        this.setData({
            feedback_text:"",            
            isDisabledSubmitBtn:true
        })
    },1000) 
  }
});
