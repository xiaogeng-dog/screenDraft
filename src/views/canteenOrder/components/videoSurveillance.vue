<template>
  <div class="vs-container">
    <body-header :leftImageUrl="leftImageUrl">视频监控</body-header>
    <div class="vs-video">
      <video-info
        v-for="(item, index) in videoInfo"
        :key="index"
        :videoItemInfo="item"
      ></video-info>
    </div>
  </div>
</template>

<script>
import BodyHeader from "./bodyHeader.vue";
import VideoInfo from "./videoInfo.vue";
export default {
  data() {
    return {
      leftImageUrl: require("@/assets/images/ICON-视频监控.png"),
      videoInfo: [
        {
          title: "江苏电信大楼·2楼食堂·摄像机01",
          videoStaus: 1,
        },
        {
          title: "江苏电信大楼·2楼食堂·摄像机01",
          videoStaus: 1,
        },
        {
          title: "江苏电信大楼·2楼食堂·摄像机01",
          videoStaus: 1,
        },
      ],
    };
  },
  components: {
    BodyHeader,
    VideoInfo,
  },
};
</script>

<style lang="scss" scoped>
.vs-container {
  width: 100%;
  height: 100%;
  background: url("~@/assets/images/边框背景-01(4).png") no-repeat;
  background-size: 100% 100%;
  .vs-video {
    height: calc(100% - 0.375rem);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
}
</style>
