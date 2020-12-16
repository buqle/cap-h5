<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepalive"/>
    </keep-alive>
    <router-view v-if="!$route.meta.keepalive"/>
  </div>
</template>

<style>
*{padding: 0;margin: 0;}
</style>
