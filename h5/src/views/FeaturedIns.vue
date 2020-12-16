<template>
  <div class="ins">
    <div  v-show="show2" style="height:16vh;justify-content: center" flex align-items >
      <van-loading  size="12vw">加载中...</van-loading>
    </div>
    <img v-lazy="feat" w-1/>

    <div w-1 class="ske" v-show="show">
      <van-skeleton title :row="3" v-for="(item,index ) in 3" :key="index"/>
    </div>

    <dl c-38 fz-24 class="ins-cont" auto v-for="[label, value] in newsList" :key="label"  v-show="!show">
      <dt>
       <h4 fz-28>
         <template v-if="value.title&&value.title.length>=40">
           {{value.title|readMore(40,'...')}}
         </template>
         <template v-else>
           {{value.title}}
         </template>
       </h4>
        <p fz-24>
          <template v-if="value.brief&&value.brief.length>=150">
            {{value.brief|readMore(150,'...')}}
          </template>
          <template v-else>
            {{value.brief}}
          </template>
        </p>
        <b title fz-28 @click="goList(value.title)">Read More</b>
      </dt>
      <dd>
        <img  alt="" v-lazy="value.img">
      </dd>
      <van-divider :style="{borderColor: '#000',paddingTop: '3vh',margin:0}"></van-divider>
    </dl>

  </div>
</template>

<script>
import feat from '@/assets/feat.jpg'
export default {
name: "FeaturedIns",
  data(){
    return{
      newsList:[],
      mapkey:[10,20,30],
      banner:[],
      show:true,
      show2:true,
      feat
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

<style scoped>
.ins{padding-bottom: 16vh;}
</style>