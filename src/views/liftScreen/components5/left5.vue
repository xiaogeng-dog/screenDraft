<template>
  <div class="left5-container">
    <area-header>电梯增量情况</area-header>
    <div class="left5-item">
      <left5-item :leftTop="leftTop"></left5-item>
    </div>
    <div class="left5-item">
      <echart-header>2022年电梯【本周】增量</echart-header>
      <div class="echarts">
        <left1-echart :echartsInfo="echartsInfo"></left1-echart>
      </div>
    </div>
    <div class="left5-item">
      <echart-header>2022年电梯【月度】增量</echart-header>
      <div class="echarts">
        <left2-echart :echartsInfo="echartsInfo"></left2-echart>
      </div>
    </div>
    <div class="left5-item">
      <echart-header>2018～2022年工单年度增量</echart-header>
      <div class="echarts">
        <left3-echart :echartsInfo="echartsInfo"></left3-echart>
      </div>
    </div>
  </div>
</template>

<script>
import EchartHeader from "@/views/liftScreen/components/EchartHeader";
import areaHeader from "../components/areaHeader.vue";
import left5Item from "./Left5Item.vue";

import left1Echart from "./echarts/left1Echart.vue";
import left2Echart from "./echarts/left2Echart.vue";
import left3Echart from "./echarts/left3Echart.vue";

export default {
  name: "left5",
  components: {
    areaHeader,
    left5Item,
    EchartHeader,
    left1Echart,
    left2Echart,
    left3Echart,
  },
  props: {
    leftTop: Object,
    echartsInfo: Object,
  },
};
</script>

<style lang="scss" scoped>
.left5-container {
  background: rgba(32, 36, 49, 0.6);
  height: calc(100% - 0.225rem);

  display: flex;
  flex-direction: column;

  .left5-item {
    flex: 1;
    .echarts {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
