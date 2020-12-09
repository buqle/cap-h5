import axios from '@/utils/featch'
import {route} from './apiRouter'
const list={
    //搜索－公用
    getBanner(){
        return new Promise((resolve,reject)=>{
            axios.get(`${route}/home/banners`)
                .then(res=>{
                    console.log(res);
                    resolve(res)
                }).catch(err=>{
                reject(err)
            })
        });
    },
    getNews(){
        return new Promise((resolve,reject)=>{
            axios.get(`${route}/home/news`)
                .then(res=>{
                    console.log(res);
                    resolve(res)
                }).catch(err=>{
                reject(err)
            })
        });
    },
}
export default list