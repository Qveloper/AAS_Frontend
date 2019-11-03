<template>
<!-- begin:: Topbar -->
<div class="kt-header__topbar">

  <!--begin: Search -->
  <div v-if="getCredential.username === ''" class="kt-header__topbar-item kt-header__topbar-item--search">
    <div class="kt-header__topbar-wrapper">
      <div class="kt-quick-search kt-quick-search--inline kt-quick-search--result-compact" id="kt_quick_search_inline" style="width: 250px;">
        <label style="color: white;">Username</label>
        <form class="kt-quick-search__form">
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">
                <!-- <i class="flaticon2-search-1"></i> -->
              </span>
            </div>
            <input type="text" class="form-control kt-quick-search__input" ref="username" value="0ffed3d0-bf32-4da3-83d0-8816bffe96a1">
          </div>
        </form>
      <!-- <div data-toggle="dropdown" data-offset="0,10px"></div>
      <div class="dropdown-menu dropdown-menu-fit dropdown-menu-right dropdown-menu-anim dropdown-menu-lg">
        <div class="kt-quick-search__wrapper kt-scroll ps" data-scroll="true" data-height="325" data-mobile-height="200" style="height: 325px; overflow: hidden;">
        <div class="ps__rail-x" style="left: 0px; bottom: 0px;"><div class="ps__thumb-x" tabindex="0" style="left: 0px; width: 0px;"></div></div><div class="ps__rail-y" style="top: 0px; right: 0px;"><div class="ps__thumb-y" tabindex="0" style="top: 0px; height: 0px;"></div></div></div>
      </div> -->
      </div>
    </div>
  </div>
  <!--end: Search -->
  <!--begin: Search -->
  <div v-if="getCredential.username === ''" class="kt-header__topbar-item kt-header__topbar-item--search">
    <div class="kt-header__topbar-wrapper">
      <div class="kt-quick-search kt-quick-search--inline kt-quick-search--result-compact" id="kt_quick_search_inline" style="width: 200px;">
        <label style="color: white;">Password</label>
        <form class="kt-quick-search__form">
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">
                <!-- <i class="flaticon2-search-1"></i> -->
              </span>
            </div>
            <input type="password" class="form-control kt-quick-search__input" ref="password" value="IIViEXDGUJRy">
          </div>
        </form>
      </div>
    </div>
  </div>
  <!--begin: Login Button -->
  <div v-if="getCredential.username === ''" class="kt-header__topbar-item dropdown" style="margin-top: 25px;">
    <div class="kt-header__topbar-wrapper" style="width: 70px; height: 45px;">
      <a class="btn btn-danger btn-elevate btn-pill btn-elevate-air" style="color:white; font-size:14px;" v-on:click="login">
        Login
      </a>
    </div>
  </div>
  <!--end: Login Button -->
  <div v-else class="kt-header__topbar-item kt-header__topbar-item--user">
    <div class="kt-header__topbar-wrapper" data-toggle="dropdown" data-offset="20px,10px">
      <!-- <img alt="Pic" src="../../../assets/media/users/300_21.jpg" /> -->

      <div class="kt-header__topbar-item dropdown">
        <div class="kt-header__topbar-wrapper" data-toggle="dropdown" data-offset="20px,10px">
          <div class="kt-widget-15__author" style="font-style:italic; font-size: 15px; color: white; text-align: right;">
            <div class="kt-widget-15__detail">
              <a class="kt-widget-15__name">Welcome,</a>
              <div class="kt-widget-15__desc">
                Su-yeon!
              </div>
            </div>
          </div>
          <div class="kt-widget-15__photo" style="margin-left: 15px;">
            <img alt="Pic" src="../../../assets/media/users/300_21.jpg" />
          </div>
        </div>
      </div>
    </div>
    <div class="dropdown-menu dropdown-menu-fit dropdown-menu-right dropdown-menu-anim dropdown-menu-md">
    </div>
  </div>
    <!-- end: Login -->

  <!--begin: Quick Panel Toggler -->
  <!-- <div class="kt-header__topbar-item" data-toggle="kt-tooltip" title="Quick panel" data-placement="top">
    <div class="kt-header__topbar-wrapper">
      <span class="kt-header__topbar-icon" id="kt_quick_panel_toggler_btn"><i class="flaticon-grid-menu"></i></span>
    </div>
  </div> -->
  <!--end: Quick Panel Toggler -->

  <!--begin: Notifications -->
  <!-- <div class="kt-header__topbar-item dropdown">
    <div class="kt-header__topbar-wrapper" data-toggle="dropdown" data-offset="20px,10px">
      <span class="kt-header__topbar-icon"><i class="flaticon-alarm"></i></span>
      <span class="kt-badge kt-badge--danger">3</span>
    </div>
    <div class="dropdown-menu dropdown-menu-fit dropdown-menu-right dropdown-menu-anim dropdown-menu-xl">
    </div>
  </div> -->
  <!--end: Notifications -->

  <!--begin: Languages -->
  <!-- <div class="kt-header__topbar-item kt-header__topbar-item--langs">
    <div class="kt-header__topbar-wrapper" data-toggle="dropdown" data-offset="20px,10px">
      <span class="kt-header__topbar-icon">
        <img class="" src="../../../assets/media/flags/020-flag.svg" alt="" />
      </span>
    </div>
    <div class="dropdown-menu dropdown-menu-fit dropdown-menu-right dropdown-menu-anim">
    </div>
  </div> -->
  <!--end: Languages -->

  <!--begin: User -->
  <!-- <div class="kt-header__topbar-item kt-header__topbar-item--user">
    <div class="kt-header__topbar-wrapper" data-toggle="dropdown" data-offset="20px,10px">
      <img alt="Pic" src="../../../assets/media/users/300_21.jpg" />
    </div>
    <div class="dropdown-menu dropdown-menu-fit dropdown-menu-right dropdown-menu-anim dropdown-menu-md">
    </div>
  </div> -->
  <!--end: User -->
</div>

<!-- end:: Topbar -->
</template>

<script>
/* eslint-disable */
import backendAPI from '../../../api/backendAPI'
import Constant from '../../../constant'
import Modal from '../../Common/Modal'
import {mapGetters} from 'vuex'

export default {
  name: 'Header',
  computed: {
    ...mapGetters (['getCredential', 'getCustomModels', 'getState', 'getCustomIdBySelectedModel', 'getFileName', 'getSubtitles', 'getProgressBar', 'getSelectedModelStatus']),
  },
  data() {
    return {
      name: '',
      description: '',
      selectedBaseModel: 'ko-KR_BroadbandModel',
      createModel: false,
      deleteModel: false,
      progressWidth: window.innerWidth/3,
    }
  },
  watch: {
    getCredential: () => {
      this.uploadVideoButton();
    },
    name(newVal) {
      this.name = newVal;
    },
    description(newVal) {
      this.description = newVal;
    },
    selectedBaseModel(newVal) {
      this.selectedBaseModel = newVal;
    },
  },
  components: {
    Modal,
  },
  methods: {
    toggleSidebar: function (event) {
        if($(".page-body").attr('class') == "page-body") {
          $(".page-body").attr('class', 'page-body sidebar-collpased');
        } else {
          $(".page-body").attr('class', 'page-body');
        }
    },
    login: function (event) {
      let params = {
        username: this.$refs.username.value,
        password: this.$refs.password.value
      }
      this.$store.dispatch(Constant.FETCH_CUSTOM_MODELS, params);
    },
    uploadVideo: function (event) {
      let params = {
        username: this.getCredential.username,
        password: this.getCredential.password,
        customization_id: this.getCustomIdBySelectedModel(this.$refs.selectModel.value).customization_id
      }

      const formdata = new FormData();
      const targetFile = event.target.files[0];
      formdata.append('videofile', targetFile);

      let payload = {
        params: params,
        formdata: formdata
      };

      this.$store.dispatch(Constant.RECOGNIZE_VIDEO, payload);
      this.$store.commit(Constant.SET_FILENAME, targetFile.name.split('.').slice(0,-1) + '.xml');
    },
    createCustomModel: function (event) {
      let params = {
        username: this.getCredential.username,
        password: this.getCredential.password,
        name: this.name,
        base_model_name: this.selectedBaseModel,
        description: this.description,
      }
      this.$store.dispatch(Constant.CREATE_CUSTOM_MODEL, params);
      this.modalOff();
    },
    deleteCustomModel: function (event) {
      let params = {
        username: this.getCredential.username,
        password: this.getCredential.password,
        customization_id: this.getCustomIdBySelectedModel(this.$refs.selectModel.value).customization_id
      }
      this.$store.dispatch(Constant.DELETE_CUSTOM_MODEL, params);
      this.modalOff();
    },
    getCustomModel: () => {
      let params = {
        username: this.$refs.username.value,
        password: this.$refs.password.value,
      }
      this.$store.dispatch(Constant.FETCH_CUSTOM_MODELS, params);
    },
    exportXml: function () {
      if (this.getState.login && this.getState.videofile) {
        this.$store.dispatch(Constant.EXPORT_XML, { 
          username: this.getCredential.username,
          password: this.getCredential.password,
          subtitles: this.getSubtitles,
          customization_id: this.getCustomIdBySelectedModel(this.$refs.selectModel.value).customization_id
        });
      }
    },
    trainModel: function (event) {
      if (this.getState.login && this.getState.videofile) {
        this.$store.dispatch(Constant.TRAIN_MODEL, { 
          username: this.getCredential.username,
          password: this.getCredential.password,
          customization_id: this.getCustomIdBySelectedModel(this.$refs.selectModel.value).customization_id
        });
      }
    },
    clickCreateBtn: function() {
      this.createModel = true;
    },
    clickDeleteBtn: function() {
      this.deleteModel = true;
    },
    modalOff: function() {
      this.createModel = false;
      this.deleteModel = false;
      this.clearInputTxt();
    },
    clearInputTxt: function() {
      this.name = '';
      this.description = '';
      this.selectedBaseModel = 'ko-KR_BroadbandModel'
    },
    getProgressSize: function () {
      return window.innerWidth/4;
    },
    progressbar: function() {
      var options = {
        text: {
          color: '#FFFFFF',
          shadowEnable: true,
          shadowColor: '#000000',
          fontSize: 14,
          fontFamily: 'Helvetica',
          dynamicPosition: false,
          hideText: false
        },
        progress: {
          color: '#2dbd2d',
          backgroundColor: '#C0C0C0'
        },
        layout: {
          height: 35,
          width: 140,
          verticalTextAlign: 61,
          horizontalTextAlign: 43,
          zeroOffset: 0,
          strokeWidth: 30,
          progressPadding: 0,
          type: 'line'
        }
      }
    },
  }
};
</script>

<style scoped>
.button-on {
  color: #525c5d !important;
}
.button-off {
  color: #adb5bd !important;
}
.modal-header h3 {
  margin-top: 0;
  /* color: #42b983; */
  color:royalblue;
  font-size: 20px;
  font-weight: bold;
}
.modal-body-content {
  margin: 5px;
}
.modal-body p {
  color:rgba(0, 0, 0, 0.650);
  font-weight: bold;
}
.modal-footer h1 {
    font-size: 17px;
    color:#fff;
}
.modal-footer button {
    color: white;
    font-weight: bold;
    background: #4AAE9B;
    border: 1px solid #4AAE9B;
    /* background-color: #6255ff;
    border-color: #5648ff; */
    background-color:rgb(92, 142, 235);
    border-color: cornflowerblue;
    border-radius: 5px;
}
.modal-body select {
  width:min-content;
  font-size: 13px;
  /* padding: .8em .5em;
  font-family: inherit;
  border: 1px solid #999;
  border-radius: 0px; 
  -webkit-appearance: none; 
  -moz-appearance: none;  
  appearance: none;ß */
}
</style>

