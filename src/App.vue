<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
// eslint-disable-next-line
import 'expose-loader?$!expose-loader?jQuery!jquery';
import 'video.js/dist/video-js.css';
import '../static/js/template';

export default {
  name: 'App',
};
</script>

<style lang="scss">
@import '../static/vendors/iconfonts/mdi/css/materialdesignicons.css';
@import '../static/css/shared/style.css';
@import '../static/css/demo_1/style.css';
</style>
