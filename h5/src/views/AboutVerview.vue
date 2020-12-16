<template>
<div class="about">
  <div class="about-tab top" w-1>
    <div fz-24 c-38 w-89 auto>
      <span @click="$router.push('/overview')">Overview</span>
      <span @click="$router.push('/contact')">Contact</span>
    </div>
  </div>
  <img src="@/assets/about.jpg" w-1 style="margin: 10vw 0 6vw 0;"/>
  <div class="about-warp" auto fz-24>
    <div class="overview-one">
      <p fz-24>
        ACQUACAP is one of the world’s leading global investment business. We serve institutional investors around the world. We strive to create great value for our investors through our diversified solutions. Our efforts have supported the development of hundreds of enterprises and local economies.
      </p>
      <img src="@/assets/a-1.jpg" alt="" width="100%">
    </div>
    <div class="overview-two">
      <h4 center>What We Do</h4>
      <p>
        We invest various alternative asset classes on behalf of large institutions and pension funds. Our mission is to create great value for our investors by carefully managing their capital.
      </p>

    </div>

    <div class="over-view2">
      <h4 c-ye  fz-28>Investing Globally</h4>
      <p fz-24>The classes in which we invest include private equity, growth equity, hedge funds, debt, real estate and other alternative assets.
      </p>
    </div>
    <div class="over-view2">
      <h4 c-ye  fz-28>Tailored Solutions</h4>
      <p  fz-24>We are constantly innovating into new strategies and solutions to provide better tailored services for our investors.
      </p>
    </div>
    <div class="over-view2">
      <h4 c-ye fz-28>Better Performance</h4>
      <p fz-24>We have always been seeking superior returns across an expanding range of asset classes and through all types of economic conditions.

      </p>
    </div>

    <dl class="overview-three">
      <dt>
        <img src="@/assets/a-2.jpg" alt="" w-100>
        <h4 center fz-50 style="padding: 30px 0 10px 0;">Principles</h4>
        <h4 center c-ye fz-30>
          Excellence · Integrity · Meticulosity

        </h4>
        <h4 center c-ye fz-30 class="b-h4">
          Innovation · Collaboration
        </h4>
        <p fz-24>
          They are the core of ACQUACAP and a fundamental strength of our business. They define our culture and everything we do is guided by these principles
        </p>
      </dt>
      <dd>
        <img src="@/assets/a-3.jpg" alt="" w-100>
      </dd>
    </dl>

    <dl class="overview-four">
      <dt title fz-50 center>Social Responsibility</dt>
      <dd>
        <p>
          ACQUACAP seek to make positive impact while serving our investors. We believe it is imperative to do good while doing well.
        </p>
      </dd>
    </dl>
    <div class="over-view2 over-view2s">
      <h4 fz-28 c-ye>Empowering Hundreds of Enterprises</h4>
      <p fz-24>With our excellent talent and flexible capital, we help companies solve numerous problems. In the meanwhile, we also provide resources that empower entrepreneurs to make a lasting economic impact.
      </p>
    </div>
    <div class="over-view2">
      <h4  c-ye fz-28>Participating in Community Work</h4>
      <p fz-24>Caring for the communities in which our people live and work is a long-term commitment that we take seriously. So we continue to contribute to the community through innovative projects and partnerships.
      </p>
    </div>
    <div class="over-view2">
      <h4  fz-28  c-ye>Reducing Environmental Impact</h4>
      <p  fz-24>We have a responsibility to leave a better planet for future generations. In our daily operations, we are committed to sustainable development. We strive to reduce carbon emissions and reduce office energy consumption through paperless offices and energy efficiency interventions.
      </p>
    </div>

  </div>
</div>
</template>

<script>
export default {
name: "AboutVerview",
  methods:{
    goView(query){
      //this.nav[3].path==r
      this.$router.push({name:'about',params:{titles:query}})
    }
  },
  watch:{
    '$route.params.titles'(val){
      console.log(val)
      this.tit=val
    }
  }
}
</script>

<style>
.about-warp{width: 90vw;}
.about-tab{padding: 30px 0;}
.about-tab span{margin-right: 40px;display: inline-block;}
p{line-height: 54px;}
.overview-one p{margin-bottom: 34px;}
.overview-two{margin-bottom: 60px;}
.overview-two h4{padding: 50px 0 40px 0;font-size: 50px;}
.over-view2{padding-bottom: 50px;}
.over-view2 h4{padding-bottom: 10px;}
.b-h4{padding: 20px 0;}
.overview-three dd{padding: 60px 0;}
.overview-four{margin-bottom: 50px;}
.overview-four dt{padding-bottom: 30px;}
.about-tab{top:8vh;}
.contact dt{padding-bottom: 30px;font-size: 38px;}
.contact dd h4{padding-top: 50px;}
</style>