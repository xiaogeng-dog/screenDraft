<template>
  <div class="r2-container">
    <div class="r2-item">
      <area-header>故障原因统计</area-header>
      <div class="echarts">
        <table-echart
          :echartsInfo="rightInfo.protectNum.slice(0, 8)"
        ></table-echart>
      </div>
    </div>
    <div class="r2-item">
      <area-header>发生时间统计</area-header>
      <div class="echarts">
        <right-echart2 :echartsInfo="echartsInfo"></right-echart2>
      </div>
    </div>
    <div class="r2-item">
      <area-header>使用年限统计</area-header>
      <div class="echarts">
        <right-echart3></right-echart3>
      </div>
    </div>
    <div class="r2-item">
      <area-header>月度困人统计</area-header>
      <div class="echarts">
        <right-echart4 :echartsInfo="echartsInfo4"></right-echart4>
      </div>
    </div>
  </div>
</template>

<script>
import areaHeader from "../components/areaHeader.vue";

import tableEchart from "./echarts/tableEchart.vue";
import rightEchart2 from "./echarts/rightEchart2.vue";
import rightEchart3 from "./echarts/rightEchart3.vue";
import rightEchart4 from "./echarts/rightEchart4.vue";

export default {
  name: "right2",

  props: {
    rightInfo: Object,
    echartsInfo: Object,
    echartsInfo4: Object,
  },

  components: {
    areaHeader,
    tableEchart,
    rightEchart2,
    rightEchart3,
    rightEchart4,
  },
};
</script>

<style lang="scss" scoped>
.r2-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .r2-item {
    height: calc(100% / 4 - 0.225rem);
    background: rgb(32, 36, 49, 0.6);
    margin-bottom: 0.225rem;

    .echarts {
      width: 100%;
      height: calc(100% - 0.5rem);
    }
  }
}
</style>
