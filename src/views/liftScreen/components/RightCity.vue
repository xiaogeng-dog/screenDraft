<template>
  <div class="rc-container">
    <area-header>电梯数量</area-header>
    <table-temp
      :tableTitle="tableTitle"
      :tableContent="tableContent"
    ></table-temp>
    <div class="echarts">
      <right-city-echart :menusPieInfo="menusPieInfo"></right-city-echart>
    </div>
  </div>
</template>

<script>
import areaHeader from "./areaHeader.vue";
import TableTemp from "./tableTemp.vue";

import rightCityEchart from "./echarts/rightCityEchart.vue";

export default {
  name: "RightCity",
  props: {
    tableTitle: Array,
    tableContent: Array,
    menusPieInfo: Array,
  },
  components: {
    areaHeader,
    TableTemp,
    rightCityEchart,
  },
};
</script>

<style lang="scss" scoped>
.rc-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  .echarts {
    width: 100%;
    flex: 1;
  }
}
</style>
