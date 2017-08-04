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
        // 数据绑定的方式一
        // this.setData({
        //     data: listdata.lists
        // });

        // 数据绑定的方式二
        this.data.lists=listdata.lists;
    },

})