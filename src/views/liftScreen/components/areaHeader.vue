<template>
  <div class="container">
    <div class="header-container">
      <img :src="imageUrl" alt="" />
      <div class="header-title"><slot /></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "areaHeader",
  props: {
    imageUrl: {
      type: String,
      default: require("@/assets/image/header-icon.png"),
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  height: 0.5rem;
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: url("~@/assets/image/area-header.png") no-repeat;
  background-size: 100% 100%;
  .header-container {
    width: 100%;
    padding-left: 0.175rem;
    height: 0.2375rem;
    display: flex;
    align-items: center;
    & > img {
      width: 0.3rem;
      height: 0.3rem;
      // margin: 0.1875rem;
    }
    .header-title {
      margin-left: 0.3375rem;

      font-size: 0.225rem;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #e7f3ff;
    }
  }
}
</style>
