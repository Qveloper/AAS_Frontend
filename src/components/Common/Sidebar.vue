<template>
  <div>
      <div class="sidebar">
        <div class="user-profile" style="padding-top:20px;">
          <div class="info-wrapper">
            <p class="user-name" style="margin-bottom:10px;">Preview</p>
          </div>
          <div>
            <video-player :options="videoOptions"/>
          </div>
        </div>
        <ul class="navigation-menu">
          <li class="nav-category-divider" @click="test">Option</li>
          <li>
            <a>
              <span class="link-title">자막 끝 구분</span>
              <i class="mdi mdi-wrap link-icon"></i>
            </a>
            <div class="form-group" style="padding: 0px 30px 0px 30px;">
              <div class="radio">
                <label class="radio-label mr-4">
                  <input name="sample" type="radio" checked>문장 <i class="input-frame"></i>
                </label>
              </div>
              <div class="radio">
                <label class="radio-label">
                  <input name="sample" type="radio">음성 길이 <i class="input-frame"></i>
                </label>
              </div>
            </div>
          </li>
        </ul>
      </div>
  </div>
</template>

<script>
/* eslint-disable */
import VideoPlayer from "./VideoPlayer";
import webvtt from 'node-webvtt';
import {mapGetters} from 'vuex'

export default {
  name: 'Sidebar',
  components: {
		VideoPlayer
	},
	data() {
		return {
			videoOptions: {
				autoplay: false,
        controls: true,
        fluid: true,
				sources: [
					{
						src: "/static/video_player/video/test.mp4",
						type: "video/mp4"
					}
        ],
        html5: {
          nativeTextTracks: false
        }
			}
		};
  },
  computed: {
    ...mapGetters (['getSubtitles']),
  },
  methods: {
    test() {
      let webVTT = {
        valid: true,
        cues: this.getSubtitles,
      }
      const compile = webvtt.compile(webVTT);
      console.log(compile)
    }
  }
};
</script>

<style scoped>
</style>