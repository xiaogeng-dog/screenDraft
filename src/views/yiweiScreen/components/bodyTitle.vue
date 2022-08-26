<template>
  <div class="body-container">
    <div class="title">
      <img :src="titleInfo.icon" alt="" />
      <slot></slot>
    </div>
    <div class="subhead" v-if="titleInfo.cumulativeFiling">
      <span class="subhead-left">累计建档：</span>
      <span class="subhead-right">{{
        parseInt(titleInfo.cumulativeFiling).toLocaleString()
      }}</span
      ><span class="subhead-left">次</span>
    </div>
    <div class="subhead" v-if="titleInfo.subTitle">
      <span class="subhead-left">{{ titleInfo.subTitle }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "bodyTitle",
  props: {
    titleInfo: Object,
  },
};
</script>

<style lang="scss" scoped>
@font-face {
  font-family: screenFont;
  src: url(../../../assets/font/YouSheBiaoTiHei.ttf);
}
.body-container {
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 0.3125rem;

  .title {
    display: flex;
    align-items: center;

    font-size: 0.3rem;
    font-family: "screenFont";
    line-height: 0.3rem;
    color: #ffffff;
    opacity: 1;
    & > img {
      margin-right: 0.1625rem;
      width: 0.275rem;
      height: 0.375rem;
    }
  }

  .subhead {
    .subhead-left {
      font-size: 0.2rem;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #ffffff;
      line-height: 0.2rem;
    }
    .subhead-right {
      font-size: 0.2rem;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #c4fffa;
      line-height: 0.2rem;
    }
  }
}
</style>
