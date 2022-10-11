import COS from 'tencent-cos-sdk-nodejs-v5';
const cos = new COS({
    SecretId: 'mockid',
    SecretKey: 'mockKey'
})

cos.getService((err, data) => {
    console.log('err : ', err);
    console.log('data: ', data);
})