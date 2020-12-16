<template>
<dl class="footer" w-1>
  <dt w-1></dt>
  <dd fz-24 c-38 auto>© 2020 ACQUACAP</dd>
</dl>
</template>

<script>
export default {
name: "CapFooter.vue"
}
</script>

<style scoped>
.footer{position: fixed;bottom: 0;background: #fff;height: 10vh;left: 0;}
.footer dt{height: 11px;background: #383838;}
dd{width: 630px;padding-top: 4vh;}
</style>