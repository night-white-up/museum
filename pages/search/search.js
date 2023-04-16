// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current:1,
    tablist:[
      {
        "text":"首页",
        "iconPath": "/pages/images/home.png",
        "selectedIconPath":"/pages/images/home.png",
        "badge":false,
         "path":'/pages/index/index'
      },
      {
        "text":"搜索",
        "iconPath": "/pages/images/search.png",
        "selectedIconPath":"/pages/images/search.png",
        "path":"/pages/search/search"
      }
   ],
    list:[
      {
        img:'https://www.xzmuseum.com/upload/photos1/567.jpg',
        title:'镶嵌十字方滑',
        type:'青铜',
        time:'夏商'
      },
      {
        img:'https://www.xzmuseum.com/upload/photos1/567.jpg',
        title:'镶嵌十字方滑',
        type:'青铜',
        time:'夏商'
      },
      {
        img:'https://www.xzmuseum.com/upload/photos1/567.jpg',
        title:'镶嵌十字方滑',
        type:'青铜',
        time:'夏商'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const app = getApp();
      this.setData({tablist:app.globalData})
  },
  tabswitch(index, item){
    console.log(index)
    wx.navigateTo({
      url:index.detail.item.path,
    })
  },
  bindselectresult(re){
    console.log('搜索',re)
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