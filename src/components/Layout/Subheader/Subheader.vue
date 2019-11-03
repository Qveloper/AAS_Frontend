<template>
<!-- begin:: Subheader -->
<div class="kt-subheader   kt-grid__item" id="kt_subheader">
  <div class="kt-container ">
    <div class="kt-subheader__main">
      <h3 class="kt-subheader__title">Dashboard</h3>
      <span class="kt-subheader__separator kt-hidden"></span>
      <div class="kt-subheader__breadcrumbs">
        <a href="#" class="kt-subheader__breadcrumbs-home"><i class="flaticon2-shelter"></i></a>
        <span class="kt-subheader__breadcrumbs-separator"></span>
        <a href="" class="kt-subheader__breadcrumbs-link">
          Dashboard </a>
        <span class="kt-subheader__breadcrumbs-separator"></span>
        <a href="" class="kt-subheader__breadcrumbs-link">
          Default Dashboard </a>

        <!-- <span class="kt-subheader__breadcrumbs-link kt-subheader__breadcrumbs-link--active">Active link</span> -->
      </div>
    </div>
    <div class="kt-subheader__toolbar">
      <div class="kt-subheader__wrapper">
        <a href="#" class="btn btn-icon btn btn-label btn-label-brand btn-bold" data-toggle="kt-tooltip" title="Reports" data-placement="top"><i class="flaticon2-writing"></i></a>
        <a href="#" class="btn btn-icon btn btn-label btn-label-brand btn-bold" data-toggle="kt-tooltip" title="Calendar" data-placement="top"><i class="flaticon2-hourglass-1"></i></a>
        <div class="dropdown dropdown-inline" data-toggle="kt-tooltip" title="Quick actions" data-placement="top">
          <ul class="kt-nav kt-nav--active-bg" role="tablist">
              <li class="kt-nav__item">
                <a class="btn btn btn-label btn-label-brand btn-bold">
                <!-- <a href="#" class="btn btn btn-label btn-label-brand btn-bold"> -->
                <i class="flaticon2-add-1" ref="uploadVideoButton" v-bind:class="{'button-on': getState.login, 'button-off': !getState.login}"></i>
                <label for="video_file" style="margin-bottom:0; line-height:1;">
                  Upload Video
                </label>
                  <input type="file" id="video_file" style="display:none;" v-bind:disabled="!getState.login" v-on:change="uploadVideo($event)">
                </a>
                          <!-- </a> -->
              </li>
          </ul>
          <!-- <input type="file" id="video_file" style="display:none;" v-bind:disabled="!getState.login" v-on:change="uploadVideo($event)"> -->
          <!-- <div class="dropdown-menu dropdown-menu-sm dropdown-menu-right">
            <ul class="kt-nav kt-nav--active-bg" role="tablist">
              <li class="kt-nav__item">
                <a href="" class="kt-nav__link">
                  <i class="kt-nav__link-icon flaticon2-psd"></i>
                  <span class="kt-nav__link-text">Document</span>
                </a>
              </li>
              <li class="kt-nav__item">
                <a class="kt-nav__link" role="tab">
                  <i class="kt-nav__link-icon flaticon2-supermarket"></i>
                  <span class="kt-nav__link-text">Message</span>
                </a>
              </li>
              <li class="kt-nav__item">
                <a href="" class="kt-nav__link">
                  <i class="kt-nav__link-icon flaticon2-shopping-cart"></i>
                  <span class="kt-nav__link-text">Product</span>
                </a>
              </li>
              <li class="kt-nav__item">
                <a class="kt-nav__link" role="tab">
                  <i class="kt-nav__link-icon flaticon2-chart2"></i>
                  <span class="kt-nav__link-text">Report</span>
                  <span class="kt-nav__link-badge">
                    <span class="kt-badge kt-badge--danger kt-badge--inline kt-badge--rounded">pdf</span>
                  </span>
                </a>
              </li>
              <li class="kt-nav__item">
                <a href="" class="kt-nav__link">
                  <i class="kt-nav__link-icon flaticon2-sms"></i>
                  <span class="kt-nav__link-text">Post</span>
                </a>
              </li>
              <li class="kt-nav__item">
                <a href="" class="kt-nav__link">
                  <i class="kt-nav__link-icon flaticon2-avatar"></i>
                  <span class="kt-nav__link-text">Customer</span>
                </a>
              </li>
            </ul>
          </div> -->
        </div>
        <div class="dropdown dropdown-inline" data-toggle="kt-tooltip" title="Quick actions" data-placement="top">
          <a href="#" class="btn btn btn-label btn-label-brand btn-bold" data-toggle="dropdown" data-offset="0 0" aria-haspopup="true" aria-expanded="false">
            Reports
          </a>
          <div class="dropdown-menu dropdown-menu-right">
            <ul class="kt-nav kt-nav--active-bg" id="kt_nav_1" role="tablist">
              <li class="kt-nav__item">
                <a href="" class="kt-nav__link">
                  <i class="kt-nav__link-icon flaticon2-psd"></i>
                  <span class="kt-nav__link-text">Products</span>
                </a>
              </li>
              <li class="kt-nav__item">
                <a class="kt-nav__link" role="tab" id="kt_nav_link_1">
                  <i class="kt-nav__link-icon flaticon2-supermarket"></i>
                  <span class="kt-nav__link-text">Customers</span>
                  <span class="kt-nav__link-badge">
                    <span class="kt-badge kt-badge--success kt-badge--inline kt-badge--rounded">6</span>
                  </span>
                </a>
              </li>
              <li class="kt-nav__item">
                <a href="" class="kt-nav__link">
                  <i class="kt-nav__link-icon flaticon2-shopping-cart"></i>
                  <span class="kt-nav__link-text">Orders</span>
                </a>
              </li>
              <li class="kt-nav__item">
                <a href="" class="kt-nav__link">
                  <i class="kt-nav__link-icon flaticon2-shopping-cart"></i>
                  <span class="kt-nav__link-text">Reports</span>
                </a>
              </li>
              <li class="kt-nav__item">
                <a class="kt-nav__link" role="tab" id="kt_nav_link_2">
                  <i class="kt-nav__link-icon flaticon2-chart2"></i>
                  <span class="kt-nav__link-text">Console</span>
                  <span class="kt-nav__link-badge">
                    <span class="kt-badge kt-badge--danger kt-badge--inline kt-badge--rounded">new</span>
                  </span>
                </a>
              </li>
              <li class="kt-nav__item">
                <a href="" class="kt-nav__link">
                  <i class="kt-nav__link-icon flaticon2-sms"></i>
                  <span class="kt-nav__link-text">Settings</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- end:: Subheader -->
</template>

<script>
/* eslint-disable */
import backendAPI from '../../../api/backendAPI'
import Constant from '../../../constant'
import {mapGetters} from 'vuex'

export default {
  name: 'Subheader',
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
      selectModel: '49668e87-a75e-4413-b2c0-ea10308108c9',
    }
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
      console.log('UploadVideo() is called.')
      let params = {
        username: this.getCredential.username,
        password: this.getCredential.password,
        // customization_id: this.getCustomIdBySelectedModel(this.$refs.selectModel.value).customization_id
        customization_id: this.selectModel
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
          // customization_id: this.getCustomIdBySelectedModel(this.$refs.selectModel.value).customization_id
          customization_id: this.selectModel
        });
      }
    },
    modalOff: function() {
      this.createModel = false;
      this.deleteModel = false;
      this.clearInputTxt();
    }
  }
}
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
</style>
