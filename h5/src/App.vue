<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepalive"/>
    </keep-alive>
    <router-view v-if="!$route.meta.keepalive"/>
  </div>
</template>

<style>
@import "./common/font/font.css";
*{padding: 0;margin: 0;}
</style>
