<template>
  <router-view style="display: flex; flex: 1;"/>
</template>

<script>
// eslint-disable-next-line
import 'expose-loader?$!expose-loader?jQuery!jquery';
import 'video.js/dist/video-js.css';
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
@import url('https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700');
@import './assets/plugins/custom/fullcalendar/fullcalendar.bundle.css';
@import './assets/plugins/global/plugins.bundle.css';
@import './assets/css/style.bundle.css';
@import './assets/css/pages/inbox/inbox.css';
</style>
