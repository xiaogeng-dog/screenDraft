<template>
  <div class="lb-container">
    <area-header
      >{{ checkedMenu == 1 ? "电梯增量情况" : "工单增量情况" }}
    </area-header>
    <div class="year-add">
      <div class="add-container">
        <div class="add-num">
          <span>+</span>
          {{ leftBottomAdd.yesAdd }}
          <span>{{ checkedMenu == 1 ? "台" : "件" }}</span>
        </div>
        <div class="add-title">昨<span>日</span>新增</div>
      </div>
      <div class="add-container">
        <div class="add-num">
          <span>+</span>
          {{ leftBottomAdd.monAdd }}
          <span>{{ checkedMenu == 1 ? "台" : "件" }}</span>
        </div>
        <div class="add-title">当<span>月</span>新增</div>
      </div>
      <div class="add-container">
        <div class="add-num">
          <span>+</span>
          {{ leftBottomAdd.yearAdd }}
          <span>{{ checkedMenu == 1 ? "台" : "件" }}</span>
        </div>
        <div class="add-title">当<span>年</span>新增</div>
      </div>
    </div>
    <echart-header>{{
      checkedMenu == 1 ? "2022年电梯月度增量" : "2022年工单月度增量"
    }}</echart-header>
    <div class="echarts">
      <monadd-echart :echartsInfo="echartsInfo"></monadd-echart>
    </div>
    <echart-header>{{
      checkedMenu == 1 ? "往年电梯年度增量" : "往年工单年度增量"
    }}</echart-header>
    <div class="echarts">
      <yearadd-echart :echartsInfo="echartsInfo1"></yearadd-echart>
    </div>
  </div>
</template>

<script>
import areaHeader from "@/views/liftScreen/components/areaHeader";
import EchartHeader from "@/views/liftScreen/components/EchartHeader";

import monaddEchart from "@/views/liftScreen/components/echarts/monaddEchart";
import yearaddEchart from "@/views/liftScreen/components/echarts/yearaddEchart";

import {
  handleGetThreeAdd,
  handleGetMonthAdd,
  handleGetYearAdd,
} from "@/service/dataScreen/left";

import {
  handleGetThreeAdd2,
  handleGetMonthAdd2,
  handleGetYearAdd2,
} from "@/service/dataScreen/emergencyRescue";
export default {
  name: "LeftBottom",
  components: {
    areaHeader,
    EchartHeader,
    monaddEchart,
    yearaddEchart,
  },
  props: {
    code: String,
    checkedMenu: Number,
  },
  watch: {
    code: {
      handler() {
        if (this.code != "") {
          switch (this.checkedMenu) {
            case 1:
              this.handleGetThreeAdd(this.code);
              this.handleGetMonthAdd(this.code);
              this.handleGetYearAdd(this.code);
              break;
            case 2:
              this.handleGetThreeAdd2(this.code);
              this.handleGetMonthAdd2(this.code);
              this.handleGetYearAdd2(this.code);
              break;
          }
        } else {
          switch (this.checkedMenu) {
            case 1:
              this.handleGetThreeAdd();
              this.handleGetMonthAdd();
              this.handleGetYearAdd();
              break;
            case 2:
              this.handleGetThreeAdd2();
              this.handleGetMonthAdd2();
              this.handleGetYearAdd2();
              break;
          }
        }
      },
      immediate: true,
    },
  },
  data() {
    return {
      leftBottomAdd: {
        yesAdd: 0,
        monAdd: 0,
        yearAdd: 0,
      },
      echartsInfo: {
        dataInfo: [0, 0, 0, 0, 0, 0, 0],
        xAxisData: ["1月", "2月", "3月", "4月", "5月", "6月", "7月"],
      },
      echartsInfo1: {
        dataInfo: [0, 0, 0, 0, 0, 0, 0],
        xAxisData: ["1月", "2月", "3月", "4月", "5月", "6月", "7月"],
      },
    };
  },
  mounted() {
    console.log(11);
  },
  methods: {
    handleGetThreeAdd(code = "") {
      handleGetThreeAdd(code).then((res) => {
        if (res.code == 0) {
          this.leftBottomAdd.yesAdd = res.data[0].dayLiftNUM;
          this.leftBottomAdd.monAdd = res.data[0].monthLiftNum;
          this.leftBottomAdd.yearAdd = res.data[0].yearLiftNum;
        }
      });
    },
    handleGetMonthAdd(code = "") {
      handleGetMonthAdd(code).then((res) => {
        if (res.code == 0) {
          this.echartsInfo.dataInfo = [];
          this.echartsInfo.xAxisData = [];
          res.data.forEach((element) => {
            this.echartsInfo.dataInfo.push(element.monthLiftNum);
            this.echartsInfo.xAxisData.push(element.responseName.slice(4, 6));
          });
        }
      });
    },
    handleGetYearAdd(code = "") {
      handleGetYearAdd(code).then((res) => {
        if (res.code == 0) {
          this.echartsInfo1.dataInfo = [];
          this.echartsInfo1.xAxisData = [];
          res.data.forEach((element) => {
            this.echartsInfo1.dataInfo.push(element.yearLiftNum);
            this.echartsInfo1.xAxisData.push(element.responseName);
          });
        }
      });
    },

    handleGetThreeAdd2(code = "") {
      handleGetThreeAdd2(code).then((res) => {
        if (res.code == 0) {
          this.leftBottomAdd.yesAdd = res.data[0].dayFormNUM;
          this.leftBottomAdd.monAdd = res.data[0].monthFormNum;
          this.leftBottomAdd.yearAdd = res.data[0].yearFormNum;
        }
      });
    },
    handleGetMonthAdd2(code = "") {
      handleGetMonthAdd2(code).then((res) => {
        if (res.code == 0) {
          this.echartsInfo.dataInfo = [];
          this.echartsInfo.xAxisData = [];
          res.data.forEach((element) => {
            this.echartsInfo.dataInfo.push(element.monthFormNum);
            this.echartsInfo.xAxisData.push(element.responseName.slice(4, 6));
          });
        }
      });
    },
    handleGetYearAdd2(code = "") {
      handleGetYearAdd2(code).then((res) => {
        if (res.code == 0) {
          this.echartsInfo1.dataInfo = [];
          this.echartsInfo1.xAxisData = [];
          res.data.forEach((element) => {
            this.echartsInfo1.dataInfo.push(element.yearFormNum);
            this.echartsInfo1.xAxisData.push(element.responseName);
          });
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.lb-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  .echarts {
    width: 100%;
    flex: 1;
  }
  .year-add {
    width: 5.375rem;
    height: 1rem;

    margin: 0 auto;
    margin-top: 0.0625rem;

    display: flex;

    background: url("~@/assets/image/add-bg.png") no-repeat;
    background-size: 100% 100%;
    .add-container {
      flex: 1;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .add-num {
        font-size: 0.25rem;
        font-family: DINAlternate-Bold, DINAlternate;
        font-weight: bold;
        color: #9ce3ff;
        text-align: center;

        background: linear-gradient(
          180deg,
          #61fcfe 0%,
          #18a4fa 100%,
          #afe1ff 100%
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

        & span {
          font-size: 0.175rem;
        }
      }

      .add-title {
        font-size: 0.175rem;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 300;
        color: #ffffff;
        text-align: center;

        & span {
          font-size: 0.25rem;
          font-weight: bold;
          color: #9ce3ff;
          background: linear-gradient(
            180deg,
            #61fcfe 0%,
            #18a4fa 100%,
            #afe1ff 100%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }
    }
  }
}
</style>
