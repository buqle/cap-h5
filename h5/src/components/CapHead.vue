<template>
  <div w-1 class="top">
    <div class="top-bar" auto>
      <div class="head" flex align-items h-1>
        <img v-lazy="logo" @click="back">
        <span @click="show=!show">
          <van-icon :name="!show?'wap-nav':'cross'" size="6vw"/>
        </span>
      </div>
      <transition name="fade">
        <div class="nav" v-show="show">
          <router-link
              tag="p"
              v-for="(item,index) in nav"
              :key="index"
              :to="item.path"
              :class="{active:$route.path==item.path}"
              cursor-p
          >
            <span @click="show=false">{{item.title}}</span>
          </router-link>

        </div>

      </transition>






    </div>
  </div>

</template>

<script>
import logo from '@/assets/logo.png'
export default {
name: "CapHead",
  data() {
    return {
      show:false,
      logo,
      nav:[
        {
          title:'Featured Insights',
          path:'/featured-insights',
        },
        {
          title:'Press Release',
          path:'/press-release',
        },
        {
          title:'Careers',
          path: '/careers',
        },
        {
          title:'About',
          path: '/overview',
        },
      ]
    };
  },
  methods:{
    back(){
      this.show=false
      this.$router.push({path:'/'})

    }
  }
}
</script>

<style scoped>
.top{
  position: fixed;
  top: 0;
  height: 8vh;
z-index: 9999;
}
.top-bar{
  height:8vh;width: 654px;position: relative;
}
.nav{position: absolute;top:8vh;right: 0;background: #fff;padding: 10px 10px 30px 20px;}
.nav p{padding: 18px 0;}
.head span{    flex: 1 1 0;
  text-align: right;
  padding-right: 4vw;}
.head img{width: 286px;height: 70%;}
.head p{font-family: cursive;
  font-size: 5vw;margin-left: 10px;}
.fade-enter-active, .fade-leave-active { transition: opacity 0.5s; } .fade-enter, .fade-leave-to { opacity: 0; }
</style>