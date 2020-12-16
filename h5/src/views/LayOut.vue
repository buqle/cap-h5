<template>
  <div>
    <cap-head></cap-head>
    <transition  name="fade" mode="out-in" appear>
    <router-view class="view"/>
    </transition>
    <cap-footer></cap-footer>
  </div>
</template>

<script>
import CapHead from '@/components/CapHead'
import CapFooter from '@/components/CapFooter'
export default {
name: "LayOut",
  components:{
    CapHead,CapFooter
  },

  beforeCreate(){
    console.log(this.$route.params)
      if(this.$route.params.tit=='overview'){
        this.$router.push({name:'about',params:{titles:'overview'}})
      }else if(this.$route.params.tit=='contact'){
        this.$router.push({name:'about',params:{titles:'contact'}})
      }
    window.scrollTo(0,0);
  },
  watch:{
    '$route'(){
      window.scrollTo(0,0);
    }
  }
}
</script>

<style scoped>
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-activ {
  transition: opacity 1s cubic-bezier(1, 0.9, 0.9, 1);
}
.view{margin-top: 8vh;padding-bottom: 14vh;}
</style>