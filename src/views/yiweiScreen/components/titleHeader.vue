<template>
  <div class="container">
    <div class="header-container">
      <!-- 标题 -->
      <div class="header-title"><slot /></div>
    </div>
    <!-- 日期 -->
    <div class="header-time">{{ nowDate }}</div>
  </div>
</template>

<script>
import "moment/locale/zh-cn";
import moment from "moment";
export default {
  name: "titleHeader",
  data() {
    return {
      nowDate: "",
      timeInterval: null,
    };
  },
  mounted() {
    this.nowDate = moment().format("YYYY年MM月DD日 dddd HH:mm:ss");
    // 开启日期定时器
    this.timeInterval = setInterval(() => {
      this.nowDate = moment().format("YYYY年MM月DD日 dddd HH:mm:ss");
    }, 1000);
  },
  beforeUnmount() {
    clearInterval(this.timeInterval);
  },
};
</script>

<style lang="scss" scoped>
@font-face {
  font-family: screenFont;
  src: url(~@/assets/font/YouSheBiaoTiHei.ttf);
}
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .header-container {
    width: 100%;
    height: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background: url(~@/assets/imgs/header.png) no-repeat;
    background-size: 100% 100%;

    .header-title {
      font-size: 0.4rem;
      font-family: "screenFont";
      font-weight: 400;
      color: #ffffff;
      opacity: 1;

      text-align: center;
    }
  }
  .header-time {
    font-size: 0.125rem;
    font-family: MicrosoftYaHei;
    color: #bebebe;
    opacity: 1;
  }
}
</style>
