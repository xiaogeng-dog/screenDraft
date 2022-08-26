<template>
  <div class="health-container">
    <div class="health-title">
      <body-title :titleInfo="healthRecordsInfo"
        >{{ healthRecordsInfo.title }}
      </body-title>
    </div>
    <div class="echarts">
      <nightingale-chart :menusPieInfo="echartsInfo"></nightingale-chart>
    </div>
  </div>
</template>

<script>
import bodyTitle from "@/views/yiweiScreen/components/bodyTitle";
import NightingaleChart from "../echarts/nightingaleChart.vue";
export default {
  name: "healthRecordsStatistics",
  components: {
    bodyTitle,
    NightingaleChart,
  },
  props: {
    healthRecordsInfo: Object,
  },
  data() {
    return {
      echartsInfo: this.healthRecordsInfo.echartsInfo,
    };
  },
};
</script>

<style lang="scss" scoped>
.health-container {
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
