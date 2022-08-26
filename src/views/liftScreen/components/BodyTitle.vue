<template>
  <div class="container">
    <div class="header-container">
      <div class="header-weather">
        <iframe
          scrolling="no"
          src="https://tianqiapi.com/api.php?style=tg&skin=pitaya&color=bebebe&fontsize=10"
          frameborder="0"
          width="460"
          height="45"
          allowtransparency="true"
        ></iframe>
      </div>
      <!-- 标题 -->
      <div class="header-title"><slot /></div>
      <!-- 日期 -->
      <div class="header-time">
        <div>{{ nowDate }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import "moment/locale/zh-cn";
import moment from "moment";
export default {
  name: "BodyTitle",
  data() {
    return {
      nowDate: "",
      timeInterval: null,
    };
  },
  mounted() {
    this.nowDate = moment().format("YYYY-MM-DD ddddd HH:mm:ss");
    // 开启日期定时器
    this.timeInterval = setInterval(() => {
      this.nowDate = moment().format("YYYY-MM-DD dddd HH:mm:ss");
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
    position: relative;
    width: 100%;
    height: 0.5625rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    background: url(~@/assets/image/HeaderBoxBG.png) no-repeat;
    background-size: 100% 100%;

    .header-title {
      font-size: 0.4rem;
      display: inline-block;
      font-family: "screenFont";
      font-weight: 400;
      color: #ffffff;
      opacity: 1;
      vertical-align: middle;
      // line-height: 0.5rem;

      text-align: center;
    }
    .header-time {
      position: absolute;
      top: 0.1875rem;
      right: 2rem;
      font-size: 0.125rem;
      font-family: Helvetica, MicrosoftYaHei;
      color: rgba(255, 255, 255, 0.8);
      opacity: 1;
    }
    .header-weather {
      position: absolute;
      left: 0;
      top: 0;
      color: #ffffff;
    }
  }
}
</style>
