<template>
  <div class="num-container">
    <div class="health-title">
      <body-title :titleInfo="referAnalysisInfo">{{
        referAnalysisInfo.title
      }}</body-title>
    </div>
    <div class="echarts">
      <refer-chart :echartsInfo="echartsInfo"></refer-chart>
    </div>
  </div>
</template>

<script>
import BodyTitle from "./bodyTitle.vue";
import referChart from "@/views/yiweiScreen/echarts/referChart";
export default {
  components: { BodyTitle, referChart },
  name: "specialistNum",
  props: {
    referAnalysisInfo: Object,
  },
  data() {
    return {
      echartsInfo: this.referAnalysisInfo.echartsInfo,
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
