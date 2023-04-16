// index.js
Page({
    data:{
      current:0,
      title:"测试",
      // tab切换
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
       indicatorDots:true,
       bannerlist:[ //bannaer列表
        {
          img:'https://www.xzmuseum.com/upload/202301/13/202301131021326965.jpg'
        },
          {
            img:'https://www.xzmuseum.com/upload/photos1/567.jpg'
          },
          {
            img:'https://www.xzmuseum.com/upload/photos1/1923.jpg'
          },
          
       ],
       list:[
         {
           img:'	https://www.xzmuseum.com/upload/201803/01/201803011046443065.jpg',
           text:'一楼陶勇'
         },
         {
          img:'https://www.xzmuseum.com/upload/202301/13/202301131011334319.jpg',
          text:'二楼陶瓷器'
         },
         {
          img:'https://www.xzmuseum.com/upload/202301/13/202301131019302633.jpg',
          text:'三玉石器'
         },
         {
          img:'https://www.xzmuseum.com/upload/202301/13/202301131029501900.jpg',
          text:'四楼铜铁器'
         },
         {
          img:'https://www.xzmuseum.com/upload/202301/13/202301131042539764.jpg',
          text:'五楼金银器'
         },
         {
          img:'https://www.xzmuseum.com/upload/202301/13/202301131057510248.jpg',
          text:'六楼玺印'
         },
         {
          img:'https://www.xzmuseum.com/upload/202301/13/202301131107009132.jpg',
          text:'七楼书画'
         },
         {
          img:'	https://www.xzmuseum.com/upload/202301/29/202301291109528421.jpg',
          text:'八楼汉画像'
         }
       ]
    },
    //当前页面点击
    lifetimes:function(e){
      let data=e.currentTarget.dataset['item'];
      wx.navigateTo({
        url: `/pages/list/list?title=${data.text}&data=${JSON.stringify(data)}`
      })
     
    },
    onLoad(){
      const app = getApp();
      this.setData({tablist:app.globalData})
      
    },
    onReady(){
     
      
      wx.getSetting({
        success: (res) => {
          console.log(JSON.stringify(res))
          // res.authSetting['scope.userLocation'] == undefined    表示 初始化进入该页面
          // res.authSetting['scope.userLocation'] == false    表示 非初始化进入该页面,且未授权
          // res.authSetting['scope.userLocation'] == true    表示 地理位置授权
          if (res.authSetting['scope.userLocation'] != undefined && res.authSetting['scope.userLocation'] != true) {
            wx.showModal({
              title: '请求授权当前位置',
              content: '需要获取您的地理位置，请确认授权',
              success: function (res) {
                if (res.cancel) {
                  wx.showToast({
                    title: '拒绝授权',
                    icon: 'none',
                    duration: 1000
                  })
                } else if (res.confirm) {
                  wx.openSetting({
                    success: function (dataAu) {
                      if (dataAu.authSetting["scope.userLocation"] == true) {
                        wx.showToast({
                          title: '授权成功',
                          icon: 'success',
                          duration: 1000
                        })
                        //再次授权，调用wx.getLocation的API
                        
                      } else {
                        wx.showToast({
                          title: '授权失败',
                          icon: 'none',
                          duration: 1000
                        })
                      }
                    }
                  })
                }
              }
            })
          } else if (res.authSetting['scope.userLocation'] == undefined) {
            //调用wx.getLocation的API
          }
          else {
            //调用wx.getLocation的API
          }
        }
      })
    },
    tabswitch(index, item){
      wx.navigateTo({
        url:index.detail.item.path,
      })
    }
})
