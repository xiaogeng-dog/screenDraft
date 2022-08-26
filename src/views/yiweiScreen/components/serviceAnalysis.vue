<template>
  <div class="num-container">
    <!-- <div class="mtt-title">
      <span class="title1" style="color: #fff; font-size: 11px">医疗服务</span>
    </div> -->
    <div class="echarts">
      <service-chart></service-chart>
    </div>
  </div>
</template>

<script>
import ServiceChart from "../echarts/serviceChart.vue";
export default {
  components: { ServiceChart },
  name: "specialistNum",
  props: {
    serviceAnalysisInfo: Object,
  },
  data() {
    return {
      echartsInfo: this.serviceAnalysisInfo.echartsInfo,
    };
  },
};
</script>

<style lang="scss" scoped>
.num-container {
  width: 100%;
  height: 100%;
  background: rgba($color: #000000, $alpha: 0.17);
  position: relative;
  .health-title {
    width: 100%;
    height: 0.5rem;
  }
}
.echarts {
  width: 100%;
  height: 100%;
}
.mtt-title {
  color: "#fff" !important;
  position: absolute;
  top: 0;
  right: 40%;
  width: 1.5rem;
  height: 0.125rem;
  background: url("~@/assets/imgs/Centertips.png") no-repeat;
  background-size: 100% 100%;
  .title1 {
    margin: 0 auto;
    padding: 0.625rem;
  }
}
</style>
