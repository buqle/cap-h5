<template>
  <div class="home">
    <div  v-show="show2" style="height:16vh;justify-content: center" flex align-items >
      <van-loading  size="10vh">加载中...</van-loading>
    </div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="#f9b705" v-show="!show2">
      <van-swipe-item v-for="(item,index) in banner" :key="index">
        <img v-lazy="item" w-1/>
      </van-swipe-item>
    </van-swipe>
    <div w-1 class="ske" v-show="show">
      <van-skeleton title :row="3" v-for="(item,index ) in 3" :key="index"/>
    </div>
    <dl flex auto fz-15 c-38 class="list" v-for="[label, value] in newsList" :key="label"  v-show="!show">
      <dt flex flex-direction>
        <h4>
          {{value.title}}
        </h4>

        <p>
          {{value.brief}}
        </p>


        <span flex @click="goList(value.title)">
          <b title fz-18>Read More</b>
        </span>
      </dt>
      <dd>
        <img  alt="" v-lazy="value.img">
      </dd>
    </dl>

    <img  alt="" w-1  v-lazy="img4">

    <div class="we-do" w-674 auto>
      <h4 c-ye center>What We Do</h4>
      <pre c-38>ACQUACAP is a leading global investment business investing capital on behalf of large institutions and pension funds. We strive to create great value for our investors by carefully managing their capital. The classes in which we invest include private equity, hedge funds, real estate and other alternative assets. Our efforts have won the recognition of investors and, more importantly, have supported the development of hundreds of enterprises.</pre>
    </div>

    <dl class="join-cap">
      <dt fz-24 c-38>
        <h4 c-ye>Join ACQUACAP</h4>
        <p>Come to ACQUACAP,</p>
        <p>truly be your personal best with</p>
        <p>our best team.</p>
        <b title c-38>Apply</b><br>
        <b title c-38>Discover ACQUACAP</b>
      </dt>
      <dd>
        <img src="@/assets/img5.jpg" alt="" w-1>
      </dd>
    </dl>

  </div>
</template>

<script>
import img4 from "@/assets/img4.jpg";
export default {
  name: 'Home',
  components: {

  },
  data(){
    return{
      newsList:[],
      mapkey:[10,20,30],
      banner:[],
      img4,
      show:true,
      show2:true
    }
  },
  created(){

  this.bannerGet()
   this.newsst()
  },
  methods:{
    async bannerGet(){
      const data=await this.$api.list.getBanner()
      if(data.code==0){
        this.banner=data.data
        this.show2=false
      }else {
        this.$toast.fail('加载失败');
      }
    },

    async newsst(){
      const news=await this.$api.list.getNews()
      if(news.code==0){
        const result = new Map()
        let i=0;
        for(const key in news.data){
          result.set(this.mapkey[i],news.data[key])
          i++
        }
        this.newsList=result
        this.show=false
      }else {
        this.$toast.fail('加载失败');
      }
    },
    goList(tit){
      tit = tit
          .replace(/=/g, "%3D")
          .replace(/\+/g, "=")
          .replace(/[\s]/g, "-")
          .replace(/\?/g, "")
          .replace(/#/g, "?")
          .replace(/&/g, "&");
      this. $router.push({name:'featuredList',params:{

          tit

        }})
    }
  }
}
</script>
<style>
.we-do{}
.we-do h4{font-size: 48px;padding: 50px 0 10px 0;}
.we-do pre{

  line-height: 48px;font-size: 24px;
}
.list{width: 674px;-moz-box-shadow:0px 5px 10px #acb3b5; -webkit-box-shadow:0px 5px 10px #acb3b5; box-shadow:0px 5px 10px #acb3b5;margin: 50px auto;}
.list img{
  width: 262px;height:250px
}
.list dt{flex: 1 1 0;margin-right: 16px;margin-left: 20px;}
.list dt h4{word-wrap: break-word;
  white-space: normal;
  word-break: break-all;height: 22px;overflow: hidden;line-height: 22px;
  margin: 30px 0 20px 0;
}
.list dt p{line-height: 30px;word-wrap: break-word;
  white-space: normal;
  word-break: break-all;}
.list dt span{    flex: 1 1 0;
  align-self: flex-end;
  display: flex;
  align-items: flex-end;padding-bottom: 20px;}
.list dd{flex: 0 0 250px;}


.join-cap{position: relative;margin-top: 80px;}
.join-cap dt{position: absolute;left: 40px;bottom: 0;width: 464px;background: #fff;padding: 40px;}
.join-cap dt h4{font-size: 32px;margin-bottom: 16px;}
.join-cap dt p{line-height: 56px;}
.join-cap dt b{font-size: 28px;}
</style>
