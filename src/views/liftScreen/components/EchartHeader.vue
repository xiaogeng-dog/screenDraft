<template>
  <div class="e-container">
    <div class="e-header">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "EchartHeader",
};
</script>

<style lang="scss" scoped>
.e-container {
  width: 100%;
  margin-top: 0.25rem;
  .e-header {
    width: 4.125rem;
    height: 0.15rem;

    margin: 0 auto;

    background: url("~@/assets/image/echart-header.png") no-repeat;
    background-size: 100% 100%;

    text-align: center;
    font-size: 0.2rem;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #bef3ff;
    line-height: 0.15rem;
  }
}
</style>
