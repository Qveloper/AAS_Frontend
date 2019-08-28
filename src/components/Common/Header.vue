<template>
  <div>
      <nav class="t-header">
      <div class="t-header-brand-wrapper" style="justify-content:center; padding-left:0px;">
        <a href="index.html">
          <img class="logo" src="../../assets/images/aas_logo.svg" alt="" style="width:120px;">
          <img class="logo-mini" src="../../assets/images/aas_logo.svg" alt="" style="width:100px;">
          <!-- <h1 class="logo mb-4" style="color:#000000; margin-bottom:0 !important;">AAS</h1>
          <h1 class="logo-mini mb-4" style="color:#000000; margin-bottom:0 !important;">AAS</h1> -->
        </a>
      </div>
      <div class="t-header-content-wrapper">
        <div class="t-header-content">
          <button class="t-header-toggler t-header-mobile-toggler d-block d-lg-none" v-on:click="toggleSidebar">
            <i class="mdi mdi-menu"></i>
          </button>
          <ul class="nav ml-auto" style="margin-left:0 !important; margin-right:auto !important;">
            <li class="nav-item dropdown">
              <div class="nav-link" style="padding-bottom:0;">
                <label for="video_file" style="margin-bottom:0; line-height:1;">
                  <i class="mdi mdi-camcorder-box" style="font-size:35px;"></i>
                </label>
                <input type="file" id="video_file" style="display:none;">
              </div>
              <div class="item-wrapper" style="font-size: 10px;">
                <p>Upload Video</p>
              </div>
            </li>
            <li class="nav-item dropdown" style="padding-left:20px;">
              <div class="nav-link" style="padding-bottom:0; margin-bottom:2px; line-height:1;">
                <i class="mdi mdi-download" style="font-size:35px;"></i>
              </div>
              <div class="item-wrapper" style="font-size: 10px;">
                <p>Export XML</p>
              </div>
            </li>
            <li class="nav-item dropdown" style="padding-left:20px;">
              <div class="nav-link">
                <p>CustomModel </p>
                <div class="col-md-9 showcase_content_area">
                  <select class="custom-select">
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
            </li>
            <li class="nav-item dropdown" style="padding-left:20px;">
              <div class="nav-link">
                <p>Credential</p>
                <!-- <div class="col-md-9 showcase_content_area"> -->
                  <input type="text" class="form-control" id="inputType8" readonly="readonly" value="0ffed3d0-bf32-4da3-83d0-8816bffe96a1">
                <!-- </div> -->
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
/* eslint-disable */

export default {
  name: 'Header',
  methods: {
    toggleSidebar: function (event) {
        if($(".page-body").attr('class') == "page-body") {
            $(".page-body").attr('class', 'page-body sidebar-collpased');
        } else {
            $(".page-body").attr('class', 'page-body');    
        }
    }
  }
};
</script>

<style scoped>
</style>