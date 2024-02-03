import routes from './routeConfig'
export default defineAppConfig({
  pages: Object.values(routes),
  // pages: [
  //   'pages/index/index',
  //   'pages/person/personInfoPage'
  // ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
})
