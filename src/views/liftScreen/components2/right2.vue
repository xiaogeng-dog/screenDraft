<template>
  <div class="r2-container">
    <div class="r2-item">
      <area-header>故障原因统计</area-header>
      <div class="echarts">
        <table-echart :echartsInfo="faultReason.slice(0, 6)"></table-echart>
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
        <right-echart3 :echartsInfo="trafficWay"></right-echart3>
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

import {
  faultCauseAnalysis,
  getLiftFormTimeAnalysis,
  usefulLifeCompositeAnalysis,
  monthlySleepinessAnalysis,
} from "@/service/dataScreen/emergencyRescue";
export default {
  name: "right2",
  props: {
    code: String,
    isProvince: Boolean,
  },
  watch: {
    code: {
      handler() {
        if (this.code != "") {
          this.faultCauseAnalysis(this.code);
          this.getLiftFormTimeAnalysis(this.code);
          this.usefulLifeCompositeAnalysis(this.code);
          this.monthlySleepinessAnalysis(this.code);
        } else {
          this.faultCauseAnalysis();
          this.getLiftFormTimeAnalysis();
          this.usefulLifeCompositeAnalysis();
          this.monthlySleepinessAnalysis();
        }
      },
      immediate: true,
    },
  },
  data() {
    return {
      faultReason: [],
      echartsInfo: {
        dataInfo: [23, 27.3, 27.1, 7.6, 12.5, 21.5, 23.5],
        xAxisData: ["1月", "2月", "3月", "4月", "5月", "6月", "7月"],
      },
      echartsInfo4: {
        dataInfo: [23, 27.3, 27.1, 7.6, 12.5, 21.5, 23.5],
        xAxisData: ["1月", "2月", "3月", "4月", "5月", "6月", "7月"],
      },
      trafficWay: [
        {
          name: "1~5年",
          value: 734,
        },
        {
          name: "5~10年",
          value: 734,
        },
        {
          name: "10~15年",
          value: 734,
        },
        {
          name: "15年以上",
          value: 734,
        },
      ],
    };
  },
  components: {
    areaHeader,
    tableEchart,
    rightEchart2,
    rightEchart3,
    rightEchart4,
  },
  methods: {
    faultCauseAnalysis(code = "") {
      faultCauseAnalysis(code).then((res) => {
        if (res.code == "0") {
          res.data.forEach((element) => {
            this.faultReason.push({
              name: element.responseName,
              num: element.liftFormNum,
            });
          });
        }
      });
    },
    getLiftFormTimeAnalysis(code = "") {
      getLiftFormTimeAnalysis(code).then((res) => {
        if (res.code == "0") {
          this.echartsInfo.dataInfo = [];
          this.echartsInfo.xAxisData = [];
          res.data.forEach((ele) => {
            this.echartsInfo.dataInfo.push(ele.liftFormNum);
            this.echartsInfo.xAxisData.push(ele.responseName);
          });
        }
      });
    },
    usefulLifeCompositeAnalysis(code = "") {
      usefulLifeCompositeAnalysis(code).then((res) => {
        if (res.code == "0") {
          this.trafficWay = [];
          res.data.forEach((element) => {
            this.trafficWay.push({
              name: element.responseName,
              value: element.liftFormNum,
            });
          });
        }
      });
    },
    monthlySleepinessAnalysis(code = "") {
      monthlySleepinessAnalysis(code).then((res) => {
        if (res.code == "0") {
          this.echartsInfo4.dataInfo = [];
          this.echartsInfo4.xAxisData = [];
          res.data.forEach((ele) => {
            this.echartsInfo4.dataInfo.push(ele.liftFormNum);
            this.echartsInfo4.xAxisData.push(ele.responseName + "月");
          });
        }
      });
    },
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
