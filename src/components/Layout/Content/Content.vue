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
            <!-- <ul class="kt-nav">
                <li class="kt-nav__item">
                    <a href="#" class="kt-nav__link" data-action="list" data-type="inbox">
                        <i class="kt-nav__link-icon flaticon2-mail"></i>
                        <span class="kt-nav__link-text">Inbox</span>
                            <span class="kt-nav__link-badge">
                            <span class="kt-badge kt-badge--unified-success kt-badge--md kt-badge--rounded kt-badge--boldest">3</span>
                        </span>
                    </a>
                </li>
                <li class="kt-nav__item">
                    <a href="#" class="kt-nav__link" data-action="list" data-type="marked">
                        <i class="kt-nav__link-icon flaticon-star"></i>
                        <span class="kt-nav__link-text">Marked</span>
                    </a>
                </li>
                <li class="kt-nav__item kt-nav__item--active">
                    <a href="#" class="kt-nav__link" data-action="list" data-type="draft">
                        <i class="kt-nav__link-icon flaticon2-writing"></i>
                        <span class="kt-nav__link-text">Draft</span>
                            <span class="kt-nav__link-badge">
                            <span class="kt-badge kt-badge--unified-warning kt-badge--md kt-badge--rounded kt-badge--boldest">1</span>
                        </span>
                    </a>
                </li>
                <li class="kt-nav__item">
                    <a href="#" class="kt-nav__link" data-action="list" data-type="sent">
                        <i class="kt-nav__link-icon flaticon2-mail-1"></i>
                        <span class="kt-nav__link-text">Sent</span>
                    </a>
                </li>
                <li class="kt-nav__item">
                    <a href="#" class="kt-nav__link" data-action="list" data-type="trash">
                        <i class="kt-nav__link-icon flaticon2-rubbish-bin"></i>
                        <span class="kt-nav__link-text">Trash</span>
                    </a>
                </li>

                <li class="kt-nav__item kt-margin-t-30">
                    <a href="#" class="kt-nav__link">
                        <i class="kt-nav__link-icon fa fa-genderless kt-font-warning"></i>
                        <span class="kt-nav__link-text">Custom Work</span>
                    </a>
                </li>
                <li class="kt-nav__item">
                    <a href="#" class="kt-nav__link">
                        <i class="kt-nav__link-icon fa fa-genderless kt-font-success"></i>
                        <span class="kt-nav__link-text">Partnership</span>
                    </a>
                </li>
                <li class="kt-nav__item">
                    <a href="#" class="kt-nav__link">
                        <i class="kt-nav__link-icon fa fa-genderless kt-font-info"></i>
                        <span class="kt-nav__link-text">In Progres</span>
                    </a>
                </li>
                <li class="kt-nav__item">
                    <a href="#" class="kt-nav__link">
                        <i class="kt-nav__link-icon fa flaticon2-plus"></i>
                        <span class="kt-nav__link-text">Add Label</span>
                    </a>
                </li>
            </ul> -->
      </div>
    </div>
    <!--End::Aside-->
    <!--Begin:: Inbox List-->
    <div class="kt-grid__item kt-grid__item--fluid kt-portlet kt-inbox__list kt-inbox__list--shown" id="kt_inbox_list" style="display: flex;">
        <div class="kt-portlet__head">
            <div class="kt-inbox__toolbar kt-inbox__toolbar--extended">
                <div class="kt-inbox__actions kt-inbox__actions--expanded">
                    <div class="kt-inbox__check">
                        <!-- <label class="kt-checkbox kt-checkbox--single kt-checkbox--tick kt-checkbox--brand">
                            <input type="checkbox">
                            <span></span>
                        </label> -->
                        <!-- <button type="button" class="kt-inbox__icon" data-toggle="kt-tooltip" title="" data-original-title="Reload list">
                            <i class="flaticon2-refresh-button"></i>
                        </button> -->
                    </div>
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
                         <button class="kt-inbox__icon" ref="exportXmlButton" :disabled="!getState.videofile" data-toggle="kt-tooltip" title="Export XML" data-original-title="Export XML">
                          <!-- <i class="fa fa-backspace"></i> -->
                          <i class="flaticon2-download" id="export_xml_button" v-on:click="exportXml" v-bind:class="{'button-on': getState.videofile, 'button-off': !getState.videofile}"></i>
                        </button>
                        <!-- <button class="kt-inbox__icon" data-toggle="kt-tooltip" title="" data-original-title="Move">
                            <i class="flaticon2-expand"></i>
                        </button> -->
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
        <div class="kt-portlet__body kt-portlet__body--fit-x">
          <div class="kt-inbox__items" v-if="getRecognizeResult.length <= 0">
            <div class="col-12 py-5">
              <h4 style="text-align:center;">Welcome to AAS!</h4>
              <p class="text-gray" style="text-align:center;"><i class="mdi mdi-upload"></i> 비디오를 업로드 해 주세요.</p>
            </div>
          </div>
          <div v-else-if="!getRecognizeResult.length <= 0"></div>
            <div v-for="(subtitle, index) in getSubtitles" :key="index" class="kt-inbox__items" data-type="draft">
                <div class="kt-inbox__item" data-id="16" data-type="draft">
                    <div class="kt-inbox__info">
                        <div class="kt-inbox__actions">
                            <!-- <label class="kt-checkbox kt-checkbox--single kt-checkbox--tick kt-checkbox--brand">
                                <input type="checkbox">
                                <span></span>
                            </label> -->
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
                            <span class="kt-media kt-media--circle kt-media--sm kt-media--dark">
                                <span><img alt="Pic" src="../../../assets/media/users/300_21.jpg" /></span>
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
    <!--End:: Inbox List-->
</div>


</div>
</template>

<script>
/* eslint-disable */
import {mapGetters} from 'vuex'
import Constant from '../../../constant'
import backendAPI from '../../../api/backendAPI'
import VideoPlayer from '../../Common/VideoPlayer'
import webvtt from 'node-webvtt';

export default {
  name: 'Content',
  components: {
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
      progressWidth: window.innerWidth/3,
      selectModel: '49668e87-a75e-4413-b2c0-ea10308108c9',
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
    ...mapGetters (['getRecognizeResult', 'getSubtitles', 'getVideoPlayer', 'getCredential', 'getCustomModels', 'getState', 'getCustomIdBySelectedModel', 'getFileName', 'getSubtitles', 'getProgressBar', 'getSelectedModelStatus']),
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
        // customization_id: this.getCustomIdBySelectedModel(this.$refs.selectModel.value).customization_id,
        customization_id: this.selectModel
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
      this.$store.commit(Constant.SET_FILENAME, targetFile.name.split('.').slice(0,-1) + '.xml');
    },
    exportXml: function () {
      if (this.getState.login && this.getState.videofile) {
        this.$store.dispatch(Constant.EXPORT_XML, { 
          username: this.getCredential.username,
          password: this.getCredential.password,
          subtitles: this.getSubtitles,
          // customization_id: this.getCustomIdBySelectedModel(this.$refs.selectModel.value).customization_id,
          customization_id: this.selectModel
        });
      }
    },
    modalOff: function() {
      this.createModel = false;
      this.deleteModel = false;
      this.clearInputTxt();
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
        src: 'http://localhost:3000/uploads/' + videoUrl,
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
