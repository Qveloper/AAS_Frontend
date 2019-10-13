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
                          <col width="25%"/>
                          <col width="70%"/>
                        </colgroup>
                        <tbody>
                          <tr v-for="(subtitle, index) in getSubtitles" :key="index">
                            <td class="actions">
                              <i class="mdi mdi-arrow-right-drop-circle-outline" style="color:#696ffb; font-size:20px;"></i>
                            </td>
                            <td class="d-flex align-items-center">
                              <span>{{subtitle.start}} ~ {{subtitle.end}}</span>
                            </td>
                            <td>
                              <div class="col-md-9 showcase_content_area" style="max-width:100%;">
                                <input type="text" @keyup.ctrl.219="chunkUp" @keyup.ctrl.221="chunkDown" v-bind:value="subtitle.text" v-bind:index="index" @input="updateValue" v-on:focus="focusOn" v-on:focusout="focusOut" class="form-control form-control-lg" id="inputType12" style="font-style:italic; font-weight:bold;">
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

export default {
  name: 'Content',
  data() {
    return {
      tag: '',
      tags: ['test'],
    };
  },
  computed: {
    ...mapGetters (['getRecognizeResult', 'getSubtitles']),
  },
  methods: {
    focusOn: function (event) {
      event.target.parentElement.parentElement.parentElement.style.backgroundColor="#dee2e6"
    },
    focusOut: function (event) {
      event.target.parentElement.parentElement.parentElement.style.backgroundColor="#ffffff"
    },
    updateValue (e) {
      let currentIndex = parseInt(e.currentTarget.getAttribute('index'))
      let currentInitData = this.getSubtitles[currentIndex].initData
      if (currentInitData) {
        e.currentTarget.style.fontWeight='normal'
        e.currentTarget.style.fontStyle='normal'
        currentInitData = false
      }
      this.$store.commit(Constant.SET_SUBTITLE, {index: currentIndex, text: e.target.value, initData: currentInitData})
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
  }
};
</script>

<style scoped>
</style>