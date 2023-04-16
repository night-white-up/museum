// pages/item/item.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      img:'https://www.xzmuseum.com/upload/202301/13/202301131021326965.jpg',
       info1:'夏代晚期（公元前18世纪-前16世纪\n高19厘米，口径16.9厘米，重0.96千克, \n20世纪50年代自上海冶炼废铜中挑选而来',
       info2:'陶亭上下两层，上层一侧拱门内上方墨书“万善堂”三字，另一侧拱门内右壁墨书竖题“香首邓爱泉等仝远”，左侧壁上墨书有“万历二十六年八月十五日立”，上方横书“吉祥如意”等字。明万历二十六年即1598年。'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
      console.log(options)
    wx.setNavigationBarTitle({
        title:`详情:${options.title}`
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})