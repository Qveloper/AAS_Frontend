<template>
  <div>
<!-- begin:: Page -->
<!--[html-partial:include:{"file":"partials/_header/base-mobile.html"}]/-->
<BaseMobile/>
<div class="kt-grid kt-grid--hor kt-grid--root">
  <div class="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--ver kt-page">
    <div class="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor kt-wrapper" id="kt_wrapper">
      <!--[html-partial:include:{"file":"partials/_header/base.html"}]/-->
      <Header/>
      <div class="kt-container  kt-container--fluid  kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor kt-grid--stretch">
        <div class="kt-body kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor kt-grid--stretch" id="kt_body">
          <div v-if="getProgressBar" class="modal-mask"></div>
          <div class="kt-content kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor" id="kt_content">
            <!-- <Subheader/> -->
            <!--[html-partial:include:{"file":"partials/_content/base.html"}]/-->
            <Content/>
            <router-view/>
          </div>
        </div>
      </div>
      <!--[html-partial:include:{"file":"partials/_footer/base.html"}]/-->
      <Footer/>
    </div>
  </div>
</div>
  <loading :active.sync="getIsLoading"
        :can-cancel="false"
        :loader="'dots'"
        :color="'#696ffb'"></loading>
  </div>
</template>

<script>
/* eslint-disable */
import Header from './Layout/Header/Header'
// import Subheader from './Layout/Subheader/Subheader';
import Footer from './Layout/Footer/Footer'
import Content from './Layout/Content/Content'
import BaseMobile from './Layout/Header/_base-mobile';

// vue-loading-overlay
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

import {mapGetters} from 'vuex'

export default {
  name: 'Console',
  components: {
    BaseMobile,
    Header,
    // Subheader,
    Content,
    Footer,
    Loading
  },
  computed: {
    ...mapGetters (['getIsLoading', 'getProgressBar']),
  },
};
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}
</style>
