<template>
  <div class="video-box">
    <div class="video-header">
      <img :src="iconUrl" class="icon" />
      <div class="place-name">{{ videoItemInfo.title }}</div>
    </div>
    <div v-if="isConnected" class="video-content">
      <div class="state-text" :style="{ color: color }">{{ textState }}</div>
    </div>
    <video ref="video" autoplay muted v-else></video>
  </div>
</template>

<script>
export default {
  name: "videoBox",
  props: {
    url: {
      type: String,
    },
    videoItemInfo: {
      type: Object,
      default() {
        return {
          title: "默认标题",
          videoStaus: 1,
        };
      },
    },
  },
  data() {
    return {
      isConnected: true,
    };
  },
  computed: {
    iconUrl() {
      let urlList = [
        require("@/assets/images/icon-online.png"),
        require("@/assets/images/icon-outline.png"),
        require("@/assets/images/icon-warning.png"),
      ];
      return urlList[this.videoItemInfo.videoStaus];
    },
    textState() {
      let textList = ["", "设备已离线", "告警设备"];
      return textList[this.videoItemInfo.videoStaus];
    },
    color() {
      let colorList = ["", "#FFB700", "#FA571B"];
      return colorList[this.videoItemInfo.videoStaus];
    },
  },
  mounted() {
    // this.play()
  },
  // watch: {
  //   url (newVal) {
  //     let video = this.$refs['video']
  //     if (video) {
  //       video.pause()
  //       video.removeAttribute('src') // empty source
  //       video.load()
  //       this.play()
  //     }
  //   }
  // },
  // methods: {
  //   play () {
  //     var video = this.$refs['video']
  //     if (Hls.isSupported()) {
  //       var hls = new Hls()
  //       hls.loadSource(this.url)
  //       hls.attachMedia(video)
  //       hls.on(Hls.Events.MANIFEST_PARSED, function () {
  //         video.play()
  //       })
  //     } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
  //       video.src = this.url
  //       video.addEventListener('loadedmetadata', function () {
  //         video.play()
  //       })
  //     }
  //   }
  // }
};
</script>

<style lang="scss" scoped>
.video-box {
  width: 95%;
  height: 28%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  .video-header {
    width: 95%;
    display: flex;
    .icon {
      height: 0.25rem;
      width: 0.3875rem;
    }
    .place-name {
      height: 0.275rem;
      font-size: 0.2rem;
      margin-left: 0.0625rem;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #fefffe;
      line-height: 0.275rem;
    }
  }
  .video-content {
    height: 85%;
    width: 95%;

    background: url("~@/assets/images/video-bk.png") no-repeat;
    background-size: 100% 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    .state-text {
      font-weight: bold;
      font-size: 0.25rem;
    }
  }
}
</style>

