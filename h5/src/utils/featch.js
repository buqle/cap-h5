import axios from 'axios';
import qs from 'qs';
//instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
//发送
/*axios.interceptors.request.use(config=>{
  return config
},err=>{
  return Promise.reject(err) //承诺被拒绝
});*/

//响应
//axios.interceptors.response.use(respone=>respone,err=>Promise.resolve(err.response))//承诺被接受

//检查状态码
function checkStatus(res) {
    if(res.status==0||res.status==304){
        return res
    }
    return{
        code:0,
        msg:res.data.msg||res.statusText,
        data:res.data.data
    }
}
/*setTimeout(function () {

});
setTimeout(()=>foo='');*/

//检查code
function checkCode(res) {

    if(res.code!=0){
        throw  new Error(res.msg)//创建自定义错误
    }
    return res
}

export default {
    get(url,params){
        if(!url){
            return
        }else {
            return axios({
                method:'get',
                url,
                params,
                //timeout:300000
            }).then(checkStatus).then(checkCode)
        }
    },

    post(url,data){
        if(!url){
            return
        }else {
            return axios({
                method:'post',
                url:url,
                data:qs.stringify(data),//将对象 序列化成URL的形式，以&进行拼接
                //timeout:300000
                headers:{
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).then(checkStatus).then(checkCode)
        }
    }
}
