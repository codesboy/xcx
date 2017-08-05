// news.js
var listdata = require('../../data/local-data.js');
Page({

    /**
     * 页面的初始数据
     */
    data: {
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        // 数据绑定
        this.setData({
            lists: listdata.lists
        });
    },

})