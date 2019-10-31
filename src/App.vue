<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
// eslint-disable-next-line
import 'expose-loader?$!expose-loader?jQuery!jquery';
import 'video.js/dist/video-js.css';
// import '../static/js/template';
import './assets/plugins/global/plugins.bundle';
import './assets/js/scripts.bundle';
import './assets/plugins/custom/fullcalendar/fullcalendar.bundle';
import './assets/js/pages/dashboard';
import './assets/js/pages/custom/inbox/inbox';

export default {
  name: 'App',
};
</script>

<style lang="scss">
// @import '../static/vendors/iconfonts/mdi/css/materialdesignicons.css';
// @import '../static/css/shared/style.css';
// @import '../static/css/demo_1/style.css';
@import url('https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700');
@import './assets/plugins/custom/fullcalendar/fullcalendar.bundle.css';
@import './assets/plugins/global/plugins.bundle.css';
@import './assets/css/style.bundle.css';
@import './assets/css/pages/inbox/inbox.css';
</style>
