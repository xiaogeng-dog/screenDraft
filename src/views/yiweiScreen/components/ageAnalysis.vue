<template>
  <div class="num-container">
    <div class="health-title">
      <body-title :titleInfo="ageAnalysisInfo">{{
        ageAnalysisInfo.title
      }}</body-title>
    </div>
    <div class="echarts">
      <age-chart></age-chart>
    </div>
  </div>
</template>

<script>
import BodyTitle from "./bodyTitle.vue";
import ageChart from "@/views/yiweiScreen/echarts/ageChart";
export default {
  components: { BodyTitle, ageChart },
  name: "specialistNum",
  props: {
    ageAnalysisInfo: Object,
  },
  data() {
    return {
      echartsInfo: this.ageAnalysisInfo.echartsInfo,
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
