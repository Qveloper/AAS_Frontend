<template>
  <div>
    <!-- partial:partials/_header.html -->
    <Header/>
    <!-- partial -->
    <div class="page-body">
      <div v-if="getProgressBar" class="modal-mask"></div>
      <!-- partial:partials/_sidebar.html -->
      <Sidebar/>
      <!-- partial -->
      <Content/>
      <!-- page content ends -->
    </div>
    <!--page body ends -->
    <!-- endbuild -->
    <loading :active.sync="getIsLoading"
        :can-cancel="false"
        :loader="'dots'"
        :color="'#696ffb'"></loading>
  </div>
</template>

<script>
/* eslint-disable */
import Header from './Common/Header';
import Sidebar from './Common/Sidebar';
import Content from './Common/Content';

// vue-loading-overlay
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

import {mapGetters} from 'vuex'

export default {
  name: 'Console',
  components: {
    Header, 
    Sidebar, 
    Content,
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
