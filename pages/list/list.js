// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      list:[
         {
           img:'https://www.xzmuseum.com/upload/202301/13/202301131021326965.jpg',
           text:'谷纹玉璧',
           time:'西汉'
         },
         {
          img:'https://www.xzmuseum.com/upload/202301/13/202301131021159671.jpg',
          text:'玉兽首',
          time:'西汉'
        },
        {
          img:'https://www.xzmuseum.com/upload/202301/13/202301131021084865.jpg',
          text:'鎏金铜架玉枕',
          time:'西汉'
        },
        {
          img:'https://www.xzmuseum.com/upload/202301/13/202301131019498071.jpg',
          text:'金缕玉衣',
          time:'西汉'
        },
        {
          img:'https://www.xzmuseum.com/upload/202301/13/202301131020447372.jpg',
          text:'“食官监”玉枕',
          time:'西汉'
        },
        {
          img:'https://www.xzmuseum.com/upload/202301/13/202301131020103646.jpg',
          text:'镶玉漆棺',
          time:'西汉'
        }
      ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    wx.setNavigationBarTitle({
        title:options.title
    })
    
  },
  itemclick(e){
    let data=e.currentTarget.dataset['item']
      wx.navigateTo({
        url: `/pages/item/item?title=${data.text}&data=${JSON.stringify(data)}`
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