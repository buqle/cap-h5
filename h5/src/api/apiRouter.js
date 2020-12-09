let route=''
//判断开发环境or生产环境请求前缀
if (process.env.NODE_ENV == 'development') {
    route=`api`;//
}else {
    //route=`http://ht.yao4pl.com/medicinal-supplier/weChat`//正式
    route=`http://acquacap.com/acquacap`//
}
export {route}