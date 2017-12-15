import wepy from 'wepy'
/**
 * request post请求简单封装
 * promise
 * @param {*} url 
 * @param {*} data 
 * @param {*} success 
 * @param {*} fail 
 */
const $post = (url, data = {}, loading = false) => {
  //发起请求
  return new Promise((resolve, reject) => {
     //启动加载动画
     loading && wepy.showLoading({
      title: '数据加载中...',
    });
    wepy.request({
      url: `https://www.us800.cn${url}`,
      data,
      header: {
        'content-type': 'application/x-www-form-urlencoded' 
      },
      method: 'POST',
      success(res) {
        const {data} = res;
        const {result} = data;
        loading && wepy.hideLoading();
        //服务器返回错误
        if (result === 'err') {
          //错误
          reject(result);
        }else {
          resolve(data);
        }
      },
      fail(err) {
        //结束加载动画
        loading && wepy.hideLoading();
        reject(err);
      }
    });
  })
}

export {$post};