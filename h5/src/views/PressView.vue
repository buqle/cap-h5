<template>
  <div class="ins">
    <img src="@/assets/press-ban.jpg" w-1>
    <dl c-38 fz-24 class="ins-cont" auto v-for="(item,index) in arr" :key="index">
      <dt>
        <h4 fz-28>{{item.tit}}</h4>
        <p fz-24>{{item.cont}}</p>
      </dt>
      <dd>
        <img :src="item.img">
      </dd>
    </dl>

  </div>
</template>

<script>
import press1 from "@/assets/press-img2.jpg";
import press2 from "@/assets/press.jpg";
export default {
name: "PressView",
  data(){
    return{
      arr:[
        {
          tit:'Change the Future of Our Children',
          cont:'We worked with child welfare agencies to design innovative solutions using our expertise in data analysis and marketing. At the same time, we enlisted innovators from other fields to work with us on ways to safely reduce the number of homeless children.',
          img:press1
        },
        {
          tit:'Business Will Never Be the Same as Before',
          cont:'While uncertainty from the COVID-19 crisis continues to circulate around the world, one thing has become clear: business has forever changed. Is it too late to change? ACQUACAP recently discussed with the media the long-term impact of the COVID-19 on the company\'s operations.',
          img:press2
        }
      ]
    }
  }
}
</script>

<style scoped>
.ins{padding-bottom: 90px;}
.ins-cont h4{padding: 80px 0 40px 0;}
.ins-cont p{line-height: 46px;margin-bottom: 50px;}
</style>