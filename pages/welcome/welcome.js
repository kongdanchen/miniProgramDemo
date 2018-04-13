// pages/welcome.js


var initData = {
  hiddenFlag: false,
  profile: {
    nickName: "孔丹晨 - init",
    avatarUrl: "/image/profilePhoto.jpg"
  },
  items: [{
      name: "item1"
    },
    {
      name: "item2"
    },
    {
      name: "item3"
    },
    {
      name: "item4"
    },
  ]
};
//[object Function]
// 这里应该是对page函数的直接调用，里面是传进去的参数
// Page() 函数用来注册一个页面。接受一个 object 参数 
Page({

  /* 直接搭建data对象并写入数据 */
  data: initData,
  /* 传入从 bindgetuserinfo中获取到的回调信息*/
  getProfile: function (res) {
    // 将想要展示的数据以对象的形式传给页面
    this.setData({
      "profile": res.detail.userInfo
    });
  }

});