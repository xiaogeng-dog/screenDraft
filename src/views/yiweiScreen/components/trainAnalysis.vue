<template>
  <div class="num-container">
    <div class="health-title">
      <body-title :titleInfo="trainAnalysisInfo">{{
        trainAnalysisInfo.title
      }}</body-title>
    </div>
    <div class="echarts">
      <train-chart></train-chart>
    </div>
  </div>
</template>

<script>
import trainChart from "@/views/yiweiScreen/echarts/trainChart";
import BodyTitle from "./bodyTitle.vue";
import TrainChart from "../echarts/trainChart.vue";

export default {
  components: { BodyTitle, trainChart, TrainChart },
  name: "specialistNum",
  props: {
    trainAnalysisInfo: Object,
  },
  data() {
    return {
      echartsInfo: this.trainAnalysisInfo.echartsInfo,
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
