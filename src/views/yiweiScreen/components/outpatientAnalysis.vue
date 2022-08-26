<template>
  <div class="num-container">
    <div class="health-title">
      <body-title :titleInfo="outAnalysisInfo">{{
        outAnalysisInfo.title
      }}</body-title>
    </div>
    <div class="echarts">
      <outpatient-chart :echartsInfo="echartsInfo"></outpatient-chart>
    </div>
  </div>
</template>

<script>
import outpatientChart from "@/views/yiweiScreen/echarts/outpatientChart";
import BodyTitle from "./bodyTitle.vue";
import OutpatientChart from "../echarts/outpatientChart.vue";

export default {
  components: { BodyTitle, outpatientChart, OutpatientChart },
  name: "specialistNum",
  props: {
    outAnalysisInfo: Object,
  },
  data() {
    return {
      echartsInfo: this.outAnalysisInfo.echartsInfo,
    };
  },
};
</script>

<style lang="scss" scoped>
.num-container {
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
