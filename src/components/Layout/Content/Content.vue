<template>
<!-- begin:: Content -->
<div class="kt-container  kt-grid__item kt-grid__item--fluid" style="margin-top: 30px;">
  <div class="kt-grid kt-grid--desktop kt-grid--ver-desktop  kt-inbox" id="kt_inbox">
    <!--Begin:: Inbox Aside-->
    <div class="kt-grid__item kt-portlet kt-inbox__aside" id="kt_inbox_aside" style="width: 40%; opacity: 1;">
        <!-- <button type="button" class="btn btn-brand  btn-upper btn-bold  kt-inbox__compose" data-toggle="modal" data-target="#kt_inbox_compose">
          <i class="flaticon2-send-1"></i>
          Preview
        </button> -->
        <h3 style="text-align: center;">Preview</h3>
        <div class="kt-inbox__nav">
          <video-player :options="videoOptions"/>
      </div>
    </div>
    <!--End::Aside-->
    <!--Begin:: Inbox List-->
    <div class="kt-grid__item kt-grid__item--fluid kt-portlet kt-inbox__list kt-inbox__list--shown" id="kt_inbox_list" style="display: flex;">
        <div class="kt-portlet__head">
            <div class="kt-inbox__toolbar kt-inbox__toolbar--extended">
                <div class="kt-inbox__actions kt-inbox__actions--expanded">
                    <span class="badge badge-pill badge-danger" style="width: 110px; height: 25px; text-align: center; font-weight: bolder; font-size: 12px; margin-right: 20px;">
                      <i class="fa fa-tools"></i>
                        &nbsp;Edit Tools&nbsp;&nbsp;
                      </span>
                    <div class="kt-inbox__panel">
                      <button class="kt-inbox__icon" data-toggle="kt-tooltip" title="Undo" data-original-title="Undo (All)">
                          <i class="fa fa-undo-alt" v-bind:class="{'button-on': getRecognizeResult.length > 0, 'button-off': getRecognizeResult.length <= 0}"></i>
                          <!-- <i class="flaticon2-rubbish-bin"></i> -->
                        </button>
                        <button class="kt-inbox__icon" data-toggle="kt-tooltip" title="Play Video" data-original-title="Play Video">
                            <i class="fa fa-play-circle" v-bind:class="{'button-on': getRecognizeResult.length > 0, 'button-off': getRecognizeResult.length <= 0}"></i>
                        </button>
                        <button class="kt-inbox__icon" data-toggle="kt-tooltip" title="Upload Video" data-original-title="Upload Video">
                          <label for="video_file" style="margin-bottom:0; line-height:1;"><i class="fa fa-video" ref="uploadVideoButton" v-bind:class="{'button-on': getState.login, 'button-off': !getState.login}"></i></label>
                          <input type="file" id="video_file" style="display:none;" v-bind:disabled="!getState.login" v-on:change="uploadVideo($event)">
                        </button>
                        <!-- <button class="kt-inbox__icon" data-toggle="kt-tooltip" title="" data-original-title="Move">
                            <i class="flaticon2-expand"></i>
                        </button> -->
                        <div class="btn-group show" data-toggle="kt-tooltip" title="Export" data-original-title="Export Subtitles">
                            <button type="button" class="kt-inbox__icon kt-inbox__icon--light" data-toggle="dropdown" aria-expanded="true">
                                <i class="flaticon2-download" v-bind:class="{'button-on': getState.videofile, 'button-off': !getState.videofile}"></i>
                            </button>
                            <div class="dropdown-menu dropdown-menu-left dropdown-menu-fit dropdown-menu-xs" x-placement="bottom-start" style="position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(0px, 30px, 0px);">
                                <ul class="kt-nav">
                                    <li class="kt-nav__item" value="text">
                                        <div class="kt-nav__link" v-on:click="exportText" :disabled="!getState.videofile">
                                            <span class="kt-nav__link-text">Text</span>
                                        </div>
                                    </li>
                                    <li class="kt-nav__item" value="xml">
                                        <div class="kt-nav__link" v-on:click="exportXml" :disabled="!getState.videofile">
                                            <span class="kt-nav__link-text">XML</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="kt-inbox__controls">
                    <div class="btn-group" data-toggle="kt-tooltip" title="" data-original-title="How To Use">
                        <button type="button" class="kt-inbox__icon" data-toggle="dropdown">
                            <i class="flaticon-more-1"></i>
                        </button>
                        <div class="dropdown-menu dropdown-menu-right dropdown-menu-fit dropdown-menu-md">
                            <!--begin::Nav-->
                          <ul class="kt-nav" style="margin-bottom: 15px;">
                              <li class="kt-nav__head">
                                  Keyboard Shortcut
                                  <i class="flaticon2-information" data-toggle="kt-tooltip" data-placement="right" title="" data-original-title="Click to learn more..."></i>
                              </li>
                              <li class="kt-nav__separator"></li>
                              <li class="kt-nav__item">
                                  <a href="#" class="kt-nav__link">
                                      <i class="kt-nav__link-icon fa fa-sign-out-alt"></i>
                                      <span class="kt-nav__link-text">자막 분리</span>
                                      <span class="kt-nav__link-badge">
                                        <span class="badge badge-pill badge-warning">Ctrl + ]</span>
                                      </span>
                                  </a>
                              </li>
                              <li class="kt-nav__item">
                                  <a href="#" class="kt-nav__link">
                                      <i class="kt-nav__link-icon fa fa-sign-in-alt"></i>
                                      <span class="kt-nav__link-text">자막 병합</span>
                                      <span class="kt-nav__link-badge">
                                        <span class="badge badge-pill badge-warning">Ctrl + [</span>
                                      </span>
                                  </a>
                              </li>
                              <li class="kt-nav__item">
                                  <a href="#" class="kt-nav__link">
                                      <i class="kt-nav__link-icon flaticon2-sort"></i>
                                      <span class="kt-nav__link-text">구간 이동</span>
                                      <span class="kt-nav__link-badge">
                                        <span class="badge badge-pill badge-warning">Tab / Shift+Tab</span>
                                      </span>
                                  </a>
                              </li>
                              <li class="kt-nav__item">
                                  <a href="#" class="kt-nav__link">
                                      <i class="kt-nav__link-icon fa fa-play-circle"></i>
                                      <span class="kt-nav__link-text">구간 재생</span>
                                      <span class="kt-nav__link-badge">
                                        <span class="badge badge-pill badge-warning">Ctrl + ></span>
                                      </span>
                                  </a>
                              </li>
                              <!-- <li class="kt-nav__separator"></li>
                              <li class="kt-nav__foot">
                                  <a class="btn btn-label-brand btn-bold btn-sm" href="#">Proceed</a>
                                  <a class="btn btn-clean btn-bold btn-sm" href="#" data-toggle="kt-tooltip" data-placement="right"                           title="" data-original-title="Click to learn more...">Learn more</a>
                              </li> -->
                          </ul>
                          <!--end::Nav-->
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="kt-portlet__body kt-portlet__body--fit-x" style="max-height: 500px; overflow: scroll;">
          <div v-if="!(getRecognizeResult.length > 0)" style="text-align: center; margin-top: 10%">
              <i class="fa fa-file-video" style="font-size: 50px;"></i>
              <h4>Welcome to AAS!</h4>
              <p>비디오를 업로드 해 주세요.</p>
          </div>
          <div v-else-if="getRecognizeResult.length > 0">
            <div v-for="(subtitle, index) in getSubtitles" :key="index" class="kt-inbox__items" data-type="draft">
                <div class="kt-inbox__item" data-id="16" data-type="draft" style="align-items: center;">
                    <div class="kt-inbox__info">
                      <span class="badge badge-pill badge-info" style="width: 30px; font-size: 12px; margin-right:25px;">{{index+1}}</span>
                        <div class="kt-inbox__actions">
                          <span class="kt-inbox__icon" data-toggle="kt-tooltip" data-placement="right" title="구간 재생" data-original-title="Play">
                            <i class="fa fa-play" @click="playCurrentTime" v-bind:index="index" style="color: #8a8a8a"></i>
                          </span>
                        </div>
                        <div class="kt-inbox__actions">
                          <span class="kt-inbox__icon" data-toggle="kt-tooltip" data-placement="right" title="구간 초기화" data-original-title="Reset">
                            <i v-if="!subtitle.initData" class="fa fa-undo-alt" v-bind:index="index" @click="resetSubtitle" style="color: #8a8a8a"></i>
                          </span>
                        </div>
                        <div class="kt-inbox__sender" data-toggle="view">
                            <span class="kt-media kt-media--circle kt-media--sm">
                                <!-- <span><img alt="Pic" src="../../../assets/media/users/300_21.jpg" /></span> -->
                            </span>
                            <a href="#" class="kt-inbox__author">{{subtitle.start.toFixed(2)}} ~ {{subtitle.end.toFixed(2)}}</a>
                        </div>
                    </div>
                    <div class="kt-inbox__details" data-toggle="view">
                        <div class="kt-inbox__message">
                          <span class="kt-inbox__subject">
                            <input type="text" @keyup.ctrl.219="chunkUp" @keyup.ctrl.221="chunkDown" @keyup.ctrl.190="playCurrentTime" v-bind:value="subtitle.text" v-bind:index="index" @input="updateValue" v-on:focus="focusOn" v-on:focusout="focusOut" class="form-control form-control-lg" id="inputType12" :style="[ subtitle.initData ? { 'font-style':'italic', 'font-weight':'bold' } : { 'font-style':'normal', 'font-weight':'normal' }]">
                          </span>
                            <!-- <span class="kt-inbox__subject">Verification of your card transaction - </span>
                            <span class="kt-inbox__summary">What you requested can't be arranged ahead of time but PalmLake said they'll do their best to accommodate you upon arrival....</span> -->
                        </div>
                    </div>
                    <div class="kt-inbox__datetime" data-toggle="view">
                        <!-- 25 May -->
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
    <!--End:: Inbox List-->
  </div>
  <modal v-if="this.exportType !== ''" :modalType="'default'" :myWidth="'25%'" :myHeight="'30%'">
    <div slot="header">
      <h3>Export</h3>
    </div>
    <span slot="body">
      <div>
        <p v-if="getRecognizeResult.length > 0"> {{ exportType }} 타입으로 Export 하시겠습니까?</p>
        <p v-else>자막 Export는 영상 업로드 후 수행 가능합니다.</p>
      </div>
    </span>
    <span slot="footer">
      <button v-if="getRecognizeResult.length > 0" class="modal-default-button" v-on:click="clikedExportBtn()">OK</button>
      <button class="modal-default-button" v-on:click="modalOff()">Close</button>
    </span>
  </modal>
</div>
</template>

<script>
/* eslint-disable */
import {mapGetters} from 'vuex'
import Constant from '../../../constant'
import Modal from '../../Common/Modal'
import backendAPI from '../../../api/backendAPI'
import VideoPlayer from '../../Common/VideoPlayer'
import webvtt from 'node-webvtt';

export default {
  name: 'Content',
  components: {
    Modal,
    VideoPlayer
  },
  data() {
    return {
      tag: '',
      tags: ['test'],
      name: '',
      description: '',
      selectedBaseModel: 'ko-KR_BroadbandModel',
      createModel: false,
      deleteModel: false,
      exportType: '',
      videoOptions: {
				autoplay: false,
        controls: true,
        fluid: true,
				sources: [
        ],
        html5: {
          nativeTextTracks: false
        }
			}
    };
  },
  computed: {
    ...mapGetters (['getRecognizeResult', 'getSubtitles', 'getVideoPlayer', 'getCredential', 'getCustomModels', 'getState', 'getCustomIdBySelectedModel', 'getFileName', 'getProgressBar', 'getSelectedModelName', 'getSelectedModelStatus']),
  },
  methods: {
    toggleSidebar: function (event) {
      if($(".page-body").attr('class') == "page-body") {
        $(".page-body").attr('class', 'page-body sidebar-collpased');
      } else {
        $(".page-body").attr('class', 'page-body');
      }
    },
    uploadVideo: function (event) {
      let params = {
        username: this.getCredential.username,
        password: this.getCredential.password,
      }
      if (this.getSelectedModelName !== '') {
        params.customization_id = this.getCustomIdBySelectedModel(this.getSelectedModelName).customization_id
      }

      const formdata = new FormData();
      const targetFile = event.target.files[0];
      formdata.append('videofile', targetFile);

      let payload = {
        params: params,
        formdata: formdata
      };

      this.$store.dispatch(Constant.RECOGNIZE_VIDEO, payload)
        .then(function(response) {
          this.initSubtitle(response.videoUrl)
        }.bind(this))
      // this.$store.commit(Constant.SET_FILENAME, targetFile.name.split('.').slice(0,-1) + '.xml');
      this.$store.commit(Constant.SET_FILENAME, targetFile.name.split('.').slice(0,-1) + '');
    },
    exportXml: function () {
      this.exportType = 'xml';
      // this.$store.commit(Constant.SET_MODAL_MESSAGE, this.exportType + ' 타입으로 Export 하시겠습니까?');
      this.$store.commit(Constant.SET_MODAL_IS_SHOWING, true);
      // if(exportType !== '') {
      //   let params = {
      //     username: this.getCredential.username,
      //     password: this.getCredential.password,
      //     subtitles: this.getSubtitles,
      //   }
      //   if(this.getSelectedModelName !== '') {
      //     params.customization_id = this.getCustomIdBySelectedModel(this.getSelectedModelName).customization_id
      //   }
      //   if (this.getState.login && this.getState.videofile) {
      //     this.$store.dispatch(Constant.EXPORT_XML, params);
      //   }
      // }
    },
    exportText: function () {
      this.exportType = 'text';
      // this.$store.commit(Constant.SET_MODAL_MESSAGE, this.exportType + ' 타입으로 Export 하시겠습니까?');
      this.$store.commit(Constant.SET_MODAL_IS_SHOWING, true);
      // if(exportType !== '') {
      //   let params = {
      //   username: this.getCredential.username,
      //   password: this.getCredential.password,
      //   subtitles: this.getSubtitles,
      //   }
      //   if(this.getSelectedModelName !== '') {
      //     params.customization_id = this.getCustomIdBySelectedModel(this.getSelectedModelName).customization_id
      //   }
      //   if (this.getState.login && this.getState.videofile) {
      //     this.$store.dispatch(Constant.EXPORT_TEXT, params);
      //   }
      // }
    },
    clikedExportBtn: function() {
      this.$store.commit(Constant.SET_MODAL_MESSAGE, '')
      this.$store.commit(Constant.SET_MODAL_IS_SHOWING, false);
      if(this.exportType !== '') {
        let params = {
        username: this.getCredential.username,
        password: this.getCredential.password,
        subtitles: this.getSubtitles,
        }
        if(this.getSelectedModelName !== '') {
          params.customization_id = this.getCustomIdBySelectedModel(this.getSelectedModelName).customization_id
        }
        if ((this.getState.login && this.getState.videofile)) {
          switch(this.exportType) {
            case 'text':
              this.$store.dispatch(Constant.EXPORT_TEXT, params);
              break;
            case 'xml':
              this.$store.dispatch(Constant.EXPORT_XML, params);
              break;
            default: break;
          }
        }
      }
      this.exportType = '';
    },
    modalOff: function() {
      this.exportType = '';
      this.$store.commit(Constant.SET_MODAL_IS_SHOWING, false);
    },
    focusOn: function (e) {
      e.target.parentElement.parentElement.parentElement.style.backgroundColor="#dee2e6"
      // Video Player 시점 조정
      let currentIndex = parseInt(e.currentTarget.getAttribute('index'))
      this.getVideoPlayer.videoPlayerObject.pause()
      this.getVideoPlayer.videoPlayerObject.currentTime(this.getSubtitles[currentIndex].start)
      this.$store.commit(Constant.SET_VIDEO_PLAYER_CURRENT_TIME, {
        start: this.getSubtitles[currentIndex].start,
        end: this.getSubtitles[currentIndex].end
      })
      this.$store.commit(Constant.SET_VIDEO_PLAYER_LOOP, true)
    },
    focusOut: function (event) {
      this.$store.commit(Constant.SET_VIDEO_PLAYER_LOOP, false)
      event.target.parentElement.parentElement.parentElement.style.backgroundColor="#ffffff"
    },
    updateValue (e) {
      let currentIndex = parseInt(e.currentTarget.getAttribute('index'))
      let currentInitData = this.getSubtitles[currentIndex].initData
      if (currentInitData) {
        currentInitData = false
      }
      this.$store.commit(Constant.SET_SUBTITLE, {index: currentIndex, text: e.target.value, initData: currentInitData})
      this.updateSubtitle(currentIndex)

    },
    chunkDown: function (e) {
      let currentIndex = parseInt(e.currentTarget.getAttribute('index'))
      let currentInitData = this.getSubtitles[currentIndex].initData
      // 초기 데이터(수정 전)이고, 맨 마지막 데이터가 아니면
      if (currentInitData && currentIndex < this.getRecognizeResult.length-1 ) {
        let targetValue;
        // 마지막 Chunk를 이동시킬 경우, 배열에서 해당 요소 제거
        if (this.getRecognizeResult[currentIndex].length === 1) {
          targetValue = this.getRecognizeResult[currentIndex][0]
          this.$store.commit(Constant.SPLICE_SUBTITLE, currentIndex)
          this.$store.commit(Constant.SPLICE_RECOGNIZE_RESULT, currentIndex)
          currentIndex += -1
        } else {
          targetValue = this.getRecognizeResult[currentIndex].pop()
          // 자막 시간 겹치는 것을 방지
          targetValue[1] += 0.001
        }
        this.getRecognizeResult[currentIndex+1].unshift(targetValue)
        console.log(targetValue)
      }
      this.updateSubtitle(currentIndex)
    },
    chunkUp: function (e) {
      let currentIndex = parseInt(e.currentTarget.getAttribute('index'))
      let currentInitData = this.getSubtitles[currentIndex].initData
      // 초기 데이터(수정 전)이고, 맨 첫 번째 데이터가 아니면
      if (currentInitData && currentIndex !== 0) {
        let targetValue;
        // 마지막 Chunk를 이동시킬 경우, 배열에서 해당 요소 제거
        if (this.getRecognizeResult[currentIndex].length === 1) {
          targetValue = this.getRecognizeResult[currentIndex][0]
          this.$store.commit(Constant.SPLICE_SUBTITLE, currentIndex)
          this.$store.commit(Constant.SPLICE_RECOGNIZE_RESULT, currentIndex)
        } else {
          targetValue = this.getRecognizeResult[currentIndex].shift()
          // 자막 시간 겹치는 것을 방지
          targetValue[2] -= 0.001
        }
        this.getRecognizeResult[currentIndex-1].push(targetValue)
        console.log(targetValue)
      }
      this.updateSubtitle(currentIndex)
    },
    resetSubtitle: function (e) {
      let currentIndex = parseInt(e.currentTarget.getAttribute('index'))
      let text = ''
      this.getRecognizeResult[currentIndex].forEach((element) => {
          text += element[0];
          text += ' ';
      });
      this.$store.commit(Constant.SET_SUBTITLE, {index: currentIndex, text: text, initData: true})
      this.updateSubtitle(currentIndex)
    },
    playCurrentTime: function (e) {
      if (this.getVideoPlayer.videoPlayerObject.paused()){
        this.getVideoPlayer.videoPlayerObject.play()
      } else {
        this.getVideoPlayer.videoPlayerObject.pause()
      }
    },
    updateSubtitle: function (currentIndex) {
      let webVTT = {
        valid: true,
        cues: this.getSubtitles,
      }
      const compile = webvtt.compile(webVTT);
      const uri = 'data:text/vtt;base64,' + btoa(unescape(encodeURIComponent(compile)))

      this.getVideoPlayer.videoPlayerObject.ready(function () {
        this.getVideoPlayer.videoPlayerObject.removeRemoteTextTrack(this.getVideoPlayer.videoPlayerObject.remoteTextTracks()[0])
        this.getVideoPlayer.videoPlayerObject.addRemoteTextTrack({
          src: uri,
          default: true,
          mode: 'showing',
          label: 'test'
        }, true)
        this.getVideoPlayer.videoPlayerObject.pause()
        this.getVideoPlayer.videoPlayerObject.currentTime(this.getSubtitles[currentIndex].start)
      }.bind(this))
    },
    initSubtitle: function (videoUrl) {
      let webVTT = {
        valid: true,
        cues: this.getSubtitles,
      }
      const compile = webvtt.compile(webVTT);
      const uri = 'data:text/vtt;base64,' + btoa(unescape(encodeURIComponent(compile)))

      this.getVideoPlayer.videoPlayerObject.src({
        src: 'http://' + window.location.hostname + ':3000/uploads/' + videoUrl,
        type: "video/mp4"
      })
      this.getVideoPlayer.videoPlayerObject.ready(function () {
        this.removeRemoteTextTrack(this.remoteTextTracks()[0])
        this.addRemoteTextTrack({
          src: uri,
          default: true,
          mode: 'showing',
          label: 'test'
        }, true)
      })
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
