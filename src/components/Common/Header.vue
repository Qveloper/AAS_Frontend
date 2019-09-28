<template>
  <div>
      <nav class="t-header">
      <div class="t-header-brand-wrapper" style="justify-content:center; padding-left:0px;">
        <a href="index.html">
          <img class="logo" src="../../../static/images/aas_logo.svg" alt="" style="width:120px;">
          <img class="logo-mini" src="../../../static/images/aas_logo.svg" alt="" style="width:100px;">
          <!-- <h1 class="logo mb-4" style="color:#000000; margin-bottom:0 !important;">AAS</h1>
          <h1 class="logo-mini mb-4" style="color:#000000; margin-bottom:0 !important;">AAS</h1> -->
        </a>
      </div>
      <div class="t-header-content-wrapper">
        <div class="t-header-content">
          <button class="t-header-toggler t-header-mobile-toggler d-block d-lg-none" v-on:click="toggleSidebar">
            <i class="mdi mdi-menu"></i>
          </button>
          <ul class="nav ml-auto" style="margin-left:0 !important; width:100%;">
            <li class="nav-item dropdown">
              <div class="nav-link" style="padding-bottom:0;">
                <label for="video_file" style="margin-bottom:0; line-height:1;">
                  <i class="mdi mdi-camcorder-box" id="upload_video_button" style="font-size:35px;" ref="uploadVideoButton" v-bind:class="{'button-on': getState.login, 'button-off': !getState.login}"></i>
                </label>
                <input type="file" id="video_file" style="display:none;" v-bind:disabled="!getState.login" v-on:change="uploadVideo($event)">
              </div>
              <div class="item-wrapper" style="font-size: 10px;">
                <p>Upload Video</p>
              </div>
            </li>
            <li class="nav-item dropdown" style="padding-left:20px;">
              <div class="nav-link" style="padding-bottom:0; margin-bottom:2px; line-height:1;" ref="exportXmlButton">
                <i class="mdi mdi-download" id="export_xml_button" style="font-size:35px;" v-on:click="exportXml" v-bind:class="{'button-on': getState.videofile, 'button-off': !getState.videofile}"></i>
              </div>
              <div class="item-wrapper" style="font-size: 10px;">
                <p>Export XML</p>
              </div>
            </li>
            <li class="nav-item dropdown" style="margin-left:auto; width:35%;" v-if="getCredential.username === ''">
              <div class="nav-link">
                <p>Username</p>
                <!-- <div class="col-md-9 showcase_content_area"> -->
                  <input type="text" class="form-control" ref="username" value="0ffed3d0-bf32-4da3-83d0-8816bffe96a1">
                <!-- </div> -->
              </div>
            </li>
            <li class="nav-item dropdown" style="padding-left:20px; width:20%;" v-if="getCredential.username === ''">
              <div class="nav-link">
                <p>Password</p>
                  <input type="password" class="form-control" ref="password" value="IIViEXDGUJRy">
              </div>
            </li>
            <li class="nav-item dropdown" style="padding-left:20px;" v-if="getCredential.username === ''">
              <i class="mdi mdi-arrow-right-bold-circle" style="font-size:35px;" v-on:click="login"></i>
            </li>
            <li class="nav-item dropdown" style="margin-left:auto; width:30%;" v-if="getCredential.username !== ''">
              <div class="nav-link">
                <p>CustomModel </p>
                <div class="col-md-9 showcase_content_area" style="max-width:100%">
                  <select class="custom-select" ref="selectModel">
                    <option v-for="customModel in getCustomModels" v-bind:value="customModel.name" v-bind:key="customModel.customization_id">{{customModel.name}}</option>
                  </select>
                </div>
              </div>
            </li>
            <li class="nav-item dropdown" style="margin-left:0px; padding-bottom:0;" v-if="getCredential.username !== ''">
              <div class="nav-link" style="padding-bottom:0;">
                <br>
                <i class="fas fa-plus-square" type=button style="font-size:20px;" v-on:click="modalOn"></i>
              </div>
            </li>
            <li class="nav-item dropdown" style="margin-left:0px; padding-bottom:0;" v-if="getCredential.username !== ''">
              <div class="nav-link" style="">
                <br>
                <i class="far fa-trash-alt" type=button aria-hidden="true" style="font-size:20px;" v-on:click="deleteCustomModel" ></i>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <modal v-show="createModel" :myWidth="'50%'" :myHeight="'50%'">
        <div slot="header">
          <h3>Create Custom Model</h3>
        </div>
        <span slot="body">
          <!-- <div class="input-group col-md-3"> -->
          <div class="modal-body-content">
            <p>Name</p>
            <input type="text" v-model="name" placeholder="Name">
          </div>
          <div class="modal-body-content">
            <p>Description</p>
            <input type="text"  v-model="description" placeholder="Description">
          </div>
          <div class="modal-body-content">
            <p>Base Model</p>
            <select name="basemodel" class="custom-select" v-model="selectedBaseModel">
              <option value="ko-KR_BroadbandModel">ko-KR_BroadbandModel</option>
              <option value="ko-KR_NarrowbandModel">ko-KR_NarrowbandModel</option>
            </select>
          </div>
        </span>
        <span slot="footer">
          <button v-on:click="createCustomModel">
            Create
          </button>
          <button v-on:click="modalOff()">
            Close
          </button>
        </span>
      </modal>
  </div>
</template>

<script>
/* eslint-disable */
import backendAPI from '../../api/backendAPI'
import Constant from '../../constant'
import Modal from './Modal'
import {mapGetters} from 'vuex'

export default {
  name: 'Header',
  computed: {
    ...mapGetters (['getCredential', 'getCustomModels', 'getState', 'getCustomIdBySelectedModel', 'getFileName', 'getSubtitles']),
  },
  data() {
    return {
      name: '',
      description: '',
      selectedBaseModel: 'ko-KR_BroadbandModel',
      createModel: false,
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
    }
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
      const header = {
        content_type: 'application/json',
      }
      let payload = {
        params: params,
        header: header
      }
      this.$store.dispatch(Constant.CREATE_CUSTOM_MODEL, payload);
      this.modalOff();
    },
    deleteCustomModel: function (event) {
      let params = {
        username: this.getCredential.username,
        password: this.getCredential.password,
        customization_id: this.getCustomIdBySelectedModel(this.$refs.selectModel.value).customization_id
      }
      this.$store.dispatch(Constant.DELETE_CUSTOM_MODEL, params);
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
        this.$store.dispatch(Constant.EXPORT_XML, this.getSubtitles);
      }
    },
    modalOn: function() {
      this.createModel = true;
    },
    modalOff: function() {
      this.createModel = false;
      this.clearInputTxt();
    },
    clearInputTxt: function() {
      this.name = '';
      this.description = '';
      this.selectedBaseModel = 'ko-KR_BroadbandModel'
    }
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

.modal-default-button {
  float: right;
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
.page {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
}
*
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
