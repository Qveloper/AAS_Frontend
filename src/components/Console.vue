<template>
  <div>
    <!-- partial:partials/_header.html -->
    <Header/>
    <!-- partial -->
    <div class="page-body">
      <!-- partial:partials/_sidebar.html -->
      <Sidebar/>
      <!-- partial -->
      <Content/>
      <!-- page content ends -->
    </div>
    <!--page body ends -->
    <!-- endbuild -->
  </div>
</template>

<script>
/* eslint-disable */
import Header from './Common/Header';
import Sidebar from './Common/Sidebar';
import Content from './Common/Content';

export default {
  name: 'Console',
  components: {
    Header, 
    Sidebar, 
    Content
  }
};
</script>

<style scoped>
</style>
