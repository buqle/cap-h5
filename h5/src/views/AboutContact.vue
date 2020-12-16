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
      <dl class="contact">
        <dt title>Contact</dt>
        <dd>
          <p fz-24>We are committed to creating value through customer oriented. Our global team is always ready to provide our investors with the highest quality multilingual support. If you have any questions, please don’t hesitate to tell us.</p>
          <h4 fz-28>Email: info@acquacap.com</h4>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
name: "AboutContact"
}
</script>

<style scoped>

</style>