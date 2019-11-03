<template>
  <div>
      <div class="page-content-wrapper">
        <div class="page-content-wrapper-inner">
          <div class="content-viewport">
            <div class="row" v-if="getRecognizeResult.length <= 0">
              <div class="col-12 py-5">
                <h4 style="text-align:center;">Welcome to AAS!</h4>
                <p class="text-gray" style="text-align:center;"><i class="mdi mdi-upload"></i> 비디오를 업로드 해 주세요.</p>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-12">
                <div class="grid">
                  <div class="item-wrapper">
                    <div class="table-responsive" v-if="!getRecognizeResult.length <= 0">
                      <table class="table table-hover">
                        <colgroup>
                          <col width="5%"/>
                          <col width="20%"/>
                          <col width="5%"/>
                          <col width="70%"/>
                        </colgroup>
                        <tbody>
                          <tr v-for="(subtitle, index) in getSubtitles" :key="index">
                            <td class="actions">
                              <i class="mdi mdi-arrow-right-drop-circle-outline" @click="playCurrentTime" v-bind:index="index" style="color:#696ffb; font-size:20px;"></i>
                            </td>
                            <td class="d-flex align-items-center">
                              <span>{{subtitle.start}} ~ {{subtitle.end}}</span>
                            </td>
                            <td class="actions">
                              <i v-if="!subtitle.initData" class="mdi mdi-undo-variant" v-bind:index="index" @click="resetSubtitle" style="color:#696ffb; font-size:20px;"></i>
                            </td>
                            <td style="padding-left:0px;">
                              <div class="col-md-9 showcase_content_area" style="max-width:100%;">
                                <input type="text" @keyup.ctrl.219="chunkUp" @keyup.ctrl.221="chunkDown" @keyup.ctrl.190="playCurrentTime" v-bind:value="subtitle.text" v-bind:index="index" @input="updateValue" v-on:focus="focusOn" v-on:focusout="focusOut" class="form-control form-control-lg" id="inputType12" :style="[ subtitle.initData ? { 'font-style':'italic', 'font-weight':'bold' } : { 'font-style':'normal', 'font-weight':'normal' }]">
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- content viewport ends -->
        <!-- partial:partials/_footer.html -->
        <footer class="footer">
            <div class="col-sm-6 text-center text-sm-left mt-3 mt-sm-0">
              <small class="text-muted d-block">Copyright © 2019 <a href="http://www.sk.co.kr" target="_blank">SK</a>. All rights reserved</small>
            </div>
        </footer>
        <!-- partial -->
      </div>
  </div>
</template>

<script>
/* eslint-disable */
import {mapGetters} from 'vuex'
import Constant from '../../constant'
import webvtt from 'node-webvtt';

export default {
  name: 'Content',
  data() {
    return {
      tag: '',
      tags: ['test'],
    };
  },
  computed: {
    ...mapGetters (['getRecognizeResult', 'getSubtitles', 'getVideoPlayer']),
  },
  methods: {
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
        }
        this.getRecognizeResult[currentIndex+1].unshift(targetValue)
      }
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
        }
        this.getRecognizeResult[currentIndex-1].push(targetValue)
      }
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
    }
  }
};
</script>

<style scoped>
</style>