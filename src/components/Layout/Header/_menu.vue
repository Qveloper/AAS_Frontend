
<template>
  <div class="kt-container  kt-container--fluid ">
    <!-- begin: Header Menu -->
    <button class="kt-header-menu-wrapper-close" id="kt_header_menu_mobile_close_btn"><i class="la la-close"></i></button>
    <div class="kt-header-menu-wrapper" id="kt_header_menu_wrapper" style="opacity: 1;">
      <div id="kt_header_menu" class="kt-header-menu kt-header-menu-mobile ">
      </div>
      <div v-if="getCredential.username !== ''" class="kt-header-toolbar">
        <div class="col-sm">
          <div v-if="getProgressBar" class="kt-spinner kt-spinner--lg kt-spinner--warning" style="margin-right: 30px;"></div>
        </div>
        <!-- <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> -->
        <select class="custom-select" v-model="selectedModel" ref="selectModel" style="width: 120%;">
          <option value="" selected="selected" disabled hidden>Baseline Model (Default)</option>
          <option v-for="customModel in getCustomModels" v-bind:value="customModel.name" v-bind:key="customModel.customization_id">{{customModel.name}}</option>
        </select>
        <a href="#" class="btn btn-bold btn-danger btn-upper" style="margin-left: 10px;" v-on:click="clickCreateBtn">
          <i class="flaticon2-plus" style="font-size:14px;">&nbsp;Create</i>
        </a>
        <a href="#" class="btn btn-bold btn-danger btn-upper" style="margin-left: 10px;" v-on:click="clickDeleteBtn">
          <i class="flaticon2-rubbish-bin" style="font-size:14px;">&nbsp;Delete</i>
        </a>
      </div>
    </div>
    <!-- end: Header Menu -->
    <modal :isShowing="createModel" :myWidth="'25%'" :myHeight="'60%'">
        <div slot="header">
          <h3>Create Custom Model</h3>
        </div>
        <span slot="body">
          <div class="modal-body-content">
            <label>Name</label>
            <br>
            <input type="text" v-model="name" placeholder="Name" style="margin-bottom: 5px;">
          </div>
          <div class="modal-body-content">
            <label>Description</label>
            <br>
            <input type="text" v-model="description" placeholder="Description" style="margin-bottom: 5px;">
          </div>
          <div class="modal-body-content">
            <label>Base Model</label>
            <br>
            <select name="basemodel" class="custom-select" v-model="selectedBaseModel">
              <option value="ko-KR_BroadbandModel">ko-KR_BroadbandModel</option>
              <option value="ko-KR_NarrowbandModel">ko-KR_NarrowbandModel</option>
            </select>
          </div>
        </span>
        <span slot="footer">
          <button class="modal-default-button" v-if="name !== ''" v-on:click="createCustomModel">
            Create
          </button>
          <button class="modal-default-button" v-on:click="modalOff()">
            Close
          </button>
        </span>
      </modal>

      <modal :isShowing="deleteModel" :myWidth="'30%'" :myHeight="'40%'">
        <div slot="header">
          <h3>Delete Custom Model</h3>
        </div>
        <span slot="body">
          <div>
            <p>선택한 모델을 삭제하시겠습니까?</p>
          </div>
        </span>
        <span slot="footer">
          <button class="modal-default-button" v-on:click="deleteCustomModel">Delete</button>
          <button class="modal-default-button" v-on:click="modalOff()">Close</button>
        </span>
      </modal>
  </div>
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
    ...mapGetters (['getCredential', 'getCustomModels', 'getState', 'getCustomIdBySelectedModel', 'getProgressBar', 'getSelectedModelName']),
  },
  data() {
    return {
      name: '',
      description: '',
      selectedBaseModel: 'ko-KR_BroadbandModel',
      createModel: false,
      deleteModel: false,
      selectedModel: '',
    }
  },
  watch: {
    name(newVal) {
      this.name = newVal;
    },
    description(newVal) {
      this.description = newVal;
    },
    selectedBaseModel(newVal) {
      this.selectedBaseModel = newVal;
    },
    selectedModel(newVal) {
      this.selectedModel = newVal;
      this.$store.commit(Constant.SET_SELECTED_MODEL_NAME, newVal);
    }
  },
  components: {
    Modal,
  },
  methods: {
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
  font-size: 22px;
  font-weight: bold;
}
.modal-body-content {
  margin: 5px;
}
.modal-body p {
  color:rgba(0, 0, 0, 0.650);
  font-weight: bold;
  font-size: 15px;
}
.modal-body label {
  color:rgba(0, 0, 0, 0.650);
  font-weight: bold;
  font-size: 15px;
}
.modal-footer h1 {
    font-size: 17px;
    color:#fff;
}
.modal-footer button {
    color: white;
    font-weight: bold;
    width: 80px;
    height: 30px;
    font-size: 16px;
    background: #4AAE9B;
    border: 1px solid #4AAE9B;
    /* background-color: #6255ff;
    border-color: #5648ff; */
    background-color:rgb(92, 142, 235);
    border-color: cornflowerblue;
    border-radius: 5px;
}
</style>
