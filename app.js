const article_list = require("./mock/article_list.js");
App({
    globalData:{
        // 所有的文章
        article_list,
        // 输入框搜索文本
        search_text:"",
        // 我的收藏
        my_collect:[],
        // 用户是否登录
        is_login:false
    }
})
