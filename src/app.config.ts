import routes from './routeConfig'
export default defineAppConfig({
  pages: Object.values(routes),
  // pages: [
  //   'pages/index/index',
  // ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: '#7a7a7a',
    selectedColor: '#333',
    borderStyle: 'white',
    backgroundColor: '#fff',
    list: [
      {
        pagePath: 'pages/commend/commend',
        text: '推荐',
        iconPath: './images/icon/home.png',
        selectedIconPath: './images/icon/home_selected.png'
      },
      {
        pagePath: 'pages/xd/xdIndex',
        text: '心动',
        iconPath: './images/icon/home.png',
        selectedIconPath: './images/icon/home_selected.png'
      },
      {
        pagePath: 'pages/xq/xqIndex',
        text: '星球',
        iconPath: './images/icon/home.png',
        selectedIconPath: './images/icon/home_selected.png'
      },
      {
        pagePath: 'pages/message/messageIndex',
        text: '消息',
        iconPath: './images/icon/home.png',
        selectedIconPath: './images/icon/home_selected.png'
      },
      {
        pagePath: 'pages/index/index',
        text: '我的',
        iconPath: './images/icon/home.png',
        selectedIconPath: './images/icon/home_selected.png'
      },
      // {
      //   pagePath: 'pages/person/personIndex',
      //   text: '我的',
      //   iconPath: './images/icon/home.png',
      //   selectedIconPath: './images/icon/home_selected.png'
      // },
    ]
  }
})
