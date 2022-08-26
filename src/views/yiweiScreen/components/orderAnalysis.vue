<template>
  <div class="order-container">
    <div class="health-title">
      <body-title :titleInfo="orderAnalysisInfo">{{
        orderAnalysisInfo.title
      }}</body-title>
    </div>
    <div class="echarts">
      <order-charts :echartsInfo="echartsInfo"></order-charts>
    </div>
  </div>
</template>

<script>
import bodyTitle from "@/views/yiweiScreen/components/bodyTitle";
import OrderCharts from "../echarts/orderCharts.vue";

export default {
  name: "orderAnalysis",
  components: {
    bodyTitle,
    OrderCharts,
  },
  props: {
    orderAnalysisInfo: Object,
  },
  data() {
    return {
      echartsInfo: this.orderAnalysisInfo.echartsInfo,
    };
  },
};
</script>

<style lang="scss" scoped>
.order-container {
  width: 100%;
  height: 100%;
  background: rgba($color: #000000, $alpha: 0.17);
  .health-title {
    width: 100%;
    height: 0.5rem;
  }
}
.echarts {
  width: 100%;
  height: calc(100% - 0.5rem);
}
</style>
