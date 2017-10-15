import wepy from 'wepy'

export default class testMixin extends wepy.mixin {
  data = {
    mixin: 'This is mixin data.'
  }
  methods = {
    tap () {
      this.mixin = 'mixin data was changed'
      console.log('mixin method tap')
    }
  }

  globalData = {
    userInfo: null
  }

  $getUserInfo(cb) {
    const that = this
    if (this.globalData.userInfo) {
      return this.globalData.userInfo
    }
    wepy.getUserInfo({
      success (res) {
        that.globalData.userInfo = res.userInfo
        cb && cb(res.userInfo)
      }
    })
  }

  onShow() {
    console.log('mixin onShow')
  }

  onLoad() {
    console.log('mixin onLoad')
  }
}
