<template>
  <div class="left5-container">
    <div class="left5-header">
      <area-header>电梯增量情况</area-header>
    </div>

    <div class="left5-item">
      <left5-item :leftTop="leftTop"></left5-item>
    </div>
    <div class="left5-item">
      <echart-header>2022年电梯【本周】增量</echart-header>
      <div class="echarts">
        <left1-echart :echartsInfo="weekAddEchartsInfo"></left1-echart>
      </div>
    </div>
    <div class="left5-item">
      <echart-header>2022年电梯【月度】增量</echart-header>
      <div class="echarts">
        <left2-echart :echartsInfo="monAddEchartsInfo"></left2-echart>
      </div>
    </div>
    <div class="left5-item">
      <echart-header>往年电梯年度增量</echart-header>
      <div class="echarts">
        <left3-echart :echartsInfo="yearAddEchartsInfo"></left3-echart>
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

import {
  addRunLiftByTime,
  getLiftByweek,
  getLiftFormOrderYear,
  getLiftOrderMonth,
  getBastStatisticByProvince,
} from "@/service/dataScreen/operationMonitor";

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
    code: String,
    isProvince: Boolean,
  },
  watch: {
    code: {
      handler() {
        if (this.code != "") {
          this.addRunLiftByTime(this.code);
          this.getLiftByweek(this.code);
          this.getLiftFormOrderYear(this.code);
          this.getLiftOrderMonth(this.code);
          this.getBastStatisticByProvince(this.code);
        } else {
          this.addRunLiftByTime();
          this.getLiftByweek();
          this.getLiftFormOrderYear();
          this.getLiftOrderMonth();
          this.getBastStatisticByProvince();
        }
      },
      immediate: true,
    },
  },
  data() {
    return {
      leftTop: {
        dayLiftNUM: 0,
        monthLiftNum: 0,
        weekLiftNum: 0,
        yearLiftNum: 0,
      },
      weekAddEchartsInfo: {
        dataInfo: [23, 27.3, 27.1, 7.6, 12.5, 21.5, 23.5],
        xAxisData: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
      },
      monAddEchartsInfo: {
        dataInfo: [23, 27.3, 27.1, 7.6, 12.5, 21.5, 23.5],
        xAxisData: ["1月", "2月", "3月", "4月", "5月", "6月", "7月"],
      },
      yearAddEchartsInfo: {
        dataInfo: [23, 27.3, 27.1, 7.6, 12.5, 21.5, 23.5],
        xAxisData: ["1月", "2月", "3月", "4月", "5月", "6月", "7月"],
      },
    };
  },
  methods: {
    addRunLiftByTime(code = "") {
      addRunLiftByTime().then((res) => {
        if (res.code == "0") {
          this.leftTop = res.data[0];
        }
      });
    },
    getLiftByweek(code = "") {
      getLiftByweek().then((res) => {
        if (res.code == "0") {
          console.log(res);
        }
      });
    },
    getLiftFormOrderYear(code = "") {
      getLiftFormOrderYear().then((res) => {
        if (res.code == "0") {
          this.yearAddEchartsInfo.dataInfo = [];
          this.yearAddEchartsInfo.xAxisData = [];

          res.data.forEach((ele) => {
            this.yearAddEchartsInfo.dataInfo.push(ele.yearFormNum);
            this.yearAddEchartsInfo.xAxisData.push(ele.responseName);
          });
        }
      });
    },
    getLiftOrderMonth(code = "") {
      getLiftOrderMonth().then((res) => {
        if (res.code == "0") {
          this.monAddEchartsInfo.dataInfo = [];
          this.monAddEchartsInfo.xAxisData = [];

          res.data.forEach((ele) => {
            this.monAddEchartsInfo.dataInfo.push(ele.monthLiftNum);
            this.monAddEchartsInfo.xAxisData.push(
              ele.responseName.slice(4, 6) + "月"
            );
          });
        }
      });
    },
    getBastStatisticByProvince(code = "") {
      getBastStatisticByProvince().then((res) => {
        if (res.code == "0") {
          console.log(res);
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.left5-header {
  height: 0.5rem;
}
.left5-container {
  background: rgba(32, 36, 49, 0.6);
  height: calc(100% - 0.225rem);

  display: flex;
  flex-direction: column;

  .left5-item {
    flex: 1;
    .echarts {
      width: 100%;
      height: calc(100% - 0.4rem);
    }
  }
}
</style>
