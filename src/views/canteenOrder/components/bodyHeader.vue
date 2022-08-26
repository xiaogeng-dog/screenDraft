<template>
  <div class="container">
    <div class="header-container">
      <img :src="leftImageUrl" alt="" />
      <div class="header-title"><slot /></div>
    </div>
    <img src="@/assets/images/标题Box-BG.png" alt="" />
  </div>
</template>

<script>
export default {
  props: {
    leftImageUrl: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  height: 0.375rem;
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .header-container {
    width: 95%;
    height: 0.2375rem;
    display: flex;
    & > img {
      width: 0.25rem;
      height: 0.25rem;
      // margin: 0.1875rem;
    }
    .header-title {
      height: 0.2625rem;
      font-size: 0.2125rem;
      font-family: "PingFangSC-Medium", "PingFang SC";
      font-weight: 500;
      color: #f5fdff;
      line-height: 0.2625rem;
      margin-left: 0.125rem;
    }
  }
  img {
    width: 95%;
    display: block;
    height: 0.125rem;
  }
}
</style>