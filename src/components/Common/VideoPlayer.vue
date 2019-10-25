<template>
  <div>
    <video ref="videoPlayer" class="video-js"></video>
  </div>
</template>

<script>
/* eslint-disable */
import Constant from '../../constant';
import videojs from 'video.js';
import {mapGetters} from 'vuex'

export default {
  name: "VideoPlayer",
  computed: {
    ...mapGetters (['getVideoPlayer']),
  },
  props: {
    options: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      player: null
    }
  },
  mounted() {
    this.player = videojs(this.$refs.videoPlayer, this.options, function onPlayerReady() {
      console.log('onPlayerReady', this);
    })
    this.$refs.videoPlayer.addEventListener('timeupdate', timeupdate.bind(this), false);

    function timeupdate() {
      let loopStart = this.getVideoPlayer.currentTime.start
      let loopEnd = this.getVideoPlayer.currentTime.end
      let loopEnabled = this.getVideoPlayer.loop

      if(loopEnabled) {
        if (this.getVideoPlayer.videoPlayerObject.currentTime() < loopStart || this.getVideoPlayer.videoPlayerObject.currentTime() >= loopEnd ) {
          this.getVideoPlayer.videoPlayerObject.pause()
          this.getVideoPlayer.videoPlayerObject.currentTime(loopStart)
        }
      }
    }
    this.$store.commit(Constant.SET_VIDEO_PLAYER_OBJECT, this.player);
  },
  beforeDestroy() {
    if (this.player) {
      this.player.dispose()
    }
  }
}
</script>