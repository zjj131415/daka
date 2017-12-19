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

/**
 * 单个图片上传函数
 * @param {*} filePath 
 */
const $upload = (filePath) => new Promise((resolve, reject) => {
  wepy.uploadFile({
    url: 'https://www.us800.cn/plupload/upload.jsp',
    filePath,
    name: 'file',
    success(res) {
      const {data} = res;
      const {result} = data;
      if (result === 'err') {
        reject(result);
      }else {
        resolve(data);
      }
    },
    fail(err) {
      reject(err);
    }
  })
})


const $uploadImg = (count = 1, ) => new Promise((resolve, reject) => {
  wepy.chooseImage({
    count,
    sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
    sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
    success(res) {
      const tempFilePaths = res.tempFilePaths;
      const imgUrls = [];
      if (tempFilePaths instanceof Array) {
        for(let i = 0; i < tempFilePaths.length; i++) {
          $upload(tempFilePaths[i])
          .then(data => {
            console.log(data)
            imgUrls.push(data);
          })
          .catch(err => {
            reject(err)
          })
        }
        resolve(imgUrls)
      }
    }
  })
})

export {$post, $uploadImg};