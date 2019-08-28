<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
// eslint-disable-next-line
import 'expose-loader?$!expose-loader?jQuery!jquery';
import 'video.js/dist/video-js.css';
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'popper.js';
// import './assets/vendors/js/core';
// import './assets/vendors/apexcharts/apexcharts.min';
// import './assets/vendors/chartjs/Chart.min';
// import './assets/js/charts/chartjs.addon';
import './assets/js/template';
// import './assets/js/dashboard';

export default {
  name: 'App',
};
</script>

<style lang="scss">
@import './assets/vendors/iconfonts/mdi/css/materialdesignicons.css';
@import './assets/css/shared/style.css';
@import './assets/css/demo_1/style.css';
</style>
