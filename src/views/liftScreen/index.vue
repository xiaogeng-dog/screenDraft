<template>
  <div class="screen-container">
    <div class="screen-header">
      <body-title>中国特检院智慧电梯全景视图</body-title>
    </div>
    <div class="screen-menu">
      <BodyMenu
        :menu="menu"
        :checkedMenu="checkedMenu"
        @changeMenu="changeMenu"
      ></BodyMenu>
    </div>
    <div class="screen-main">
      <div class="main-left" v-if="checkedMenu == 1">
        <div class="main-left-top">
          <LeftTop :code="checkedCityCode" :isProvince="isProvince"></LeftTop>
        </div>
        <div class="main-left-bottom">
          <left-bottom :code="checkedCityCode" :checkedMenu="checkedMenu" />
        </div>
      </div>
      <div class="main-left" v-if="checkedMenu == 2">
        <div class="main-left-top">
          <LeftTop2 :code="checkedCityCode" :isProvince="isProvince"></LeftTop2>
        </div>
        <div class="main-left-bottom">
          <left-bottom :code="checkedCityCode" :checkedMenu="checkedMenu" />
        </div>
      </div>
      <div class="main-left" v-if="checkedMenu == 3 || checkedMenu == 4">
        <div class="table1">
          <Table1></Table1>
        </div>
        <div class="table2">
          <Table2 :echartsInfo="areadistributionInfo"></Table2>
        </div>
      </div>
      <div class="main-left" v-if="checkedMenu == 5">
        <left5 :code="checkedCityCode" :isProvince="isProvince" />
      </div>
      <div class="main-left" v-if="checkedMenu == 6">
        <area-header>综合情况统计</area-header>
        <div
          style="
            width: 100%;
            height: calc(100% - 0.825rem);
            margin-bottom: 0.325rem;
            background: #20243199;
          "
        >
          <bar-data-set-charts
            :legendData="barDataSet.legendData"
            :yAxisData="barDataSet.yAxisData"
            :seriesData="barDataSet.seriesData"
          ></bar-data-set-charts>
        </div>
      </div>
      <div class="main-middle" v-if="checkedMenu != 6">
        <div class="map">
          <echarts-map
            :checkedMenu="checkedMenu"
            @goToProvince="checkCity"
            @goback="goback"
            :isProvince="isProvince"
          ></echarts-map>
        </div>
      </div>

      <div class="main-middle" v-if="checkedMenu == 6">
        <div class="echarts-section">
          <area-header>电梯使用单位综合统计</area-header>
          <line-bar-charts
            :legendData="lineChartData1.legendData"
            :xAxisData="lineChartData1.xAxisData"
            :seriesData="lineChartData1.seriesData"
          ></line-bar-charts>
        </div>
        <div class="echarts-section" @click="handleOpenTable">
          <area-header>电梯维保单位综合统计</area-header>
          <line-bar-charts
            :legendData="lineChartData2.legendData"
            :xAxisData="lineChartData2.xAxisData"
            :seriesData="lineChartData2.seriesData"
          ></line-bar-charts>
        </div>
      </div>
      <div class="main-right" v-if="isProvince && checkedMenu == 1">
        <div class="main-right-top">
          <right-province :isProvince="true" :code="checkedCityCode" />
        </div>
        <div class="main-right-bottom">
          <right-province :isProvince="false" :code="checkedCityCode" />
        </div>
      </div>
      <div class="main-right" v-if="!isProvince">
        <right-city :code="checkedCityCode" />
      </div>
      <div class="main-right" v-if="isProvince && checkedMenu == 2">
        <right2 :code="checkedCityCode" :isProvince="isProvince"></right2>
      </div>
      <div class="main-right" v-if="isProvince && checkedMenu == 3">
        <div class="table4">
          <Table4></Table4>
        </div>
        <div class="table5">
          <Table5></Table5>
        </div>
        <div class="table6">
          <Table6></Table6>
        </div>
      </div>
      <div class="main-right" v-if="isProvince && checkedMenu == 4">
        <div class="table3">
          <Table3></Table3>
        </div>
      </div>
      <div class="main-right" v-if="isProvince && checkedMenu == 5">
        <right5 :code="checkedCityCode" :isProvince="isProvince" />
      </div>
      <div class="main-right" v-if="isProvince && checkedMenu == 6">
        <div class="main-right-top">
          <area-header>场所类型统计</area-header>
          <pie-charts :pieChartData="pieChartData"></pie-charts>
        </div>
        <div class="main-right-bottom">
          <area-header>使用年限统计</area-header>
          <line-charts
            :xAxisData="lineChartData3.xAxisData"
            :seriesData="lineChartData3.seriesData"
          ></line-charts>
        </div>
      </div>
    </div>
    <table-modal :isTableShow="isTableShow"></table-modal>
  </div>
</template>

<script>
import BodyTitle from "@/views/liftScreen/components/BodyTitle.vue";
import BodyMenu from "@/views/liftScreen/components/BodyMenu";

import LeftTop from "@/views/liftScreen/components/LeftTop";
import LeftTop2 from "@/views/liftScreen/components/LeftTop2";
import LeftBottom from "@/views/liftScreen/components/LeftBottom";

import EchartsMap from "@/views/liftScreen/components/map";
// import MiddleBottom from "@/views/liftScreen/components/MiddleBottom";

import RightProvince from "./components/RightProvince.vue";
import RightCity from "./components/RightCity.vue";

import right2 from "./components2/right2.vue";
import right5 from "@/views/liftScreen/components5/right5";

import left5 from "./components5/left5.vue";

import "../../utils/flexible.js";

import areaHeader from "@/views/liftScreen/components/areaHeader";
import barDataSetCharts from "@/views/dataAnalysis/components/barDataSetCharts.vue";
import lineBarCharts from "@/views/dataAnalysis/components/lineBarCharts.vue";
import pieCharts from "@/views/dataAnalysis/components/pieCharts.vue";
import lineCharts from "@/views/dataAnalysis/components/lineChart.vue";

import tableModal from "@/views/dataAnalysis/components/tableModal.vue";

import Table1 from "@/views/liftScreen/baicomponents/table1";
import Table2 from "@/views/liftScreen/baicomponents/table2";
import Table3 from "@/views/liftScreen/baicomponents/table3";
import Table4 from "@/views/liftScreen/baicomponents/table4";
import Table5 from "@/views/liftScreen/baicomponents/table5";
import Table6 from "@/views/liftScreen/baicomponents/table6";

import {
  getPlaceTypeData,
  getProvinceStaticData,
  getYearData,
  getMaintData,
  getBrandData,
} from "@/service/dataScreen/dataAnalysis.js";

export default {
  name: "liftScreen",
  components: {
    BodyTitle,
    BodyMenu,
    LeftTop,
    LeftTop2,
    LeftBottom,
    RightProvince,
    RightCity,
    EchartsMap,
    right2,
    right5,
    left5,
    barDataSetCharts,
    lineBarCharts,
    pieCharts,
    lineCharts,
    tableModal,
    areaHeader,
    Table1,
    Table2,
    Table3,
    Table4,
    Table5,
    Table6,
  },
  data() {
    return {
      menu: [
        {
          id: 1,
          title: "数据总览",
        },
        {
          id: 2,
          title: "应急救援",
        },
        {
          id: 3,
          title: "维护保养",
        },
        {
          id: 4,
          title: "使用单位",
        },
        {
          id: 5,
          title: "运行监控",
        },
        {
          id: 6,
          title: "统计分析",
        },
      ],
      leftTop: {
        AllliftNum: 0,
        maintNum: 0,
        city: 0,
        companyNum: 0,
        country: 0,
        workOrder: 0,
      },

      areadistributionInfo: {
        dataInfo: [565, 785, 575, 575, 900],
        xAxisData: ["2018年", "2019年", "2020年", "2021年", "2022年"],
      },
      checkedCity: [
        {
          id: 1,
          name: "南京市",
        },
        {
          id: 2,
          name: "无锡市",
        },
        {
          id: 3,
          name: "徐州市",
        },
        {
          id: 4,
          name: "常州市",
        },
        {
          id: 5,
          name: "苏州市",
        },
        {
          id: 6,
          name: "南通市",
        },
      ],
      echart4Info: {
        dataInfo: [23, 27.3, 27.1, 7.6, 12.5, 21.5, 23.5],
        xAxisData: ["1月", "2月", "3月", "4月", "5月", "6月", "7月"],
      },
      checkedProvince: 1,
      checkedMenu: 1,
      isProvince: true,
      barDataSet: {},
      lineChartData1: {},
      lineChartData2: {},
      pieChartData: [],
      lineChartData3: {},
      isTableShow: false,

      // 选择城市后
      checkedCityCode: "",
    };
  },
  created() {
    this.getBarDataSet();
    this.getMaintenanceData();
    this.getPieCharts();
    this.getLineCharts3();
  },
  methods: {
    changeProvince(val) {
      this.checkedProvince = val.id;
    },
    goback() {
      this.isProvince = true;
      this.checkedCityCode = "";
    },
    checkCity(val) {
      if (this.checkedMenu === 1) {
        this.isProvince = false;
      }
      this.checkedCityCode = val;
    },
    changeMenu(val) {
      this.isProvince = true;
      this.checkedMenu = val.id;
      this.checkedCityCode = "";
    },
    getBarDataSet() {
      this.barDataSet = {
        legendData: ["电梯数量", "故障数量", "维保单位数量", "使用单位数量"],
        yAxisData: [],
        seriesData: [[], [], [], []],
      };
      getProvinceStaticData()
        .then((res) => {
          if (res && res.code == 0) {
            let resData = res.data;
            let yAxisData = [];
            let seriesData = [[], [], [], []];
            resData.forEach((r) => {
              yAxisData.push(r.responseName);
              seriesData[0].push(r.liftNum);
              seriesData[1].push(r.liftFormNum);
              seriesData[2].push(r.maintUnitNum);
              seriesData[3].push(r.userUnitNum);
            });
            this.barDataSet = {
              legendData: [
                "电梯数量",
                "故障数量",
                "维保单位数量",
                "使用单位数量",
              ],
              yAxisData: yAxisData,
              seriesData: seriesData,
            };
          }
        })
        .catch((e) => {
          console.log(e);
        });
    },
    getMaintenanceData() {
      this.lineChartData1 = {
        legendData: ["电梯数量", "故障数量", "故障率"],
        xAxisData: [],
        seriesData: [[], [], []],
      };
      this.lineChartData2 = {
        legendData: ["电梯数量", "故障数量", "故障率"],
        xAxisData: [],
        seriesData: [[], [], []],
      };
      getBrandData()
        .then((res) => {
          if (res && res.code == 200) {
            let resData = res.data;
            let xAxisData = [];
            let seriesData = [[], [], []];
            resData.forEach((r) => {
              xAxisData.push(r.liftBrand);
              seriesData[0].push(r.liftNum ? r.liftNum : 0);
              seriesData[1].push(r.faultNum ? r.faultNum : 0);
              seriesData[2].push(r.faultRate ? r.faultRate : 0);
            });
            this.lineChartData1 = {
              legendData: ["电梯数量", "故障数量", "故障率"],
              xAxisData: xAxisData,
              seriesData: seriesData,
            };
          }
        })
        .catch((e) => {
          console.log(e);
        });
      getMaintData()
        .then((res) => {
          if (res && res.code == 0) {
            let resData = res.data;
            let xAxisData = [];
            let seriesData = [[], [], []];
            resData.forEach((r) => {
              xAxisData.push(r.responseName);
              seriesData[0].push(r.liftNum);
              seriesData[1].push(r.liftFormNum ? r.liftFormNum : 0);
              seriesData[2].push(
                r.liftFormNum
                  ? ((r.liftFormNum / r.liftNum) * 100).toFixed(2)
                  : 0
              );
            });
            this.lineChartData2 = {
              legendData: ["电梯数量", "故障数量", "故障率"],
              xAxisData: xAxisData,
              seriesData: seriesData,
            };
          }
        })
        .catch((e) => {
          console.log(e);
        });
    },
    getPieCharts() {
      this.pieChartData = [];
      getPlaceTypeData()
        .then((res) => {
          if (res && res.code == 0) {
            let resData = res.data;
            resData.forEach((r) => {
              this.pieChartData.push({
                value: r.liftNum,
                name: r.responseName,
              });
            });
          }
        })
        .catch((e) => {
          console.log(e);
        });
    },
    getLineCharts3() {
      this.lineChartData3 = [];
      getYearData()
        .then((res) => {
          if (res && res.code == 0) {
            let resData = res.data;
            let xAxisData = [];
            let seriesData = [];
            resData.forEach((r) => {
              xAxisData.push(r.responseName);
              seriesData.push(r.liftNum ? r.liftNum : 0);
            });

            this.lineChartData3 = {
              xAxisData: xAxisData,
              seriesData: seriesData,
            };
          }
        })
        .catch((e) => {
          console.log(e);
        });
    },
    // 打开弹框
    handleOpenTable() {
      this.isTableShow = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.screen-container {
  width: 100%;
  height: 100%;
  background: url("~@/assets/image/BGBOX.png") no-repeat #2d313d;
  background-size: 100% 100%;
  .screen-menu {
    margin-top: 0.2rem;
    width: 100%;
    height: 0.5rem;
  }
  .screen-main {
    width: 100%;
    height: 100%;
    display: flex;

    .main-left,
    .main-right {
      width: 6.625rem;
      box-sizing: border-box;
      height: calc(100% - 1.25rem);
    }

    .main-left {
      padding-left: 0.375rem;

      .main-left-top {
        width: 6.25rem;
        height: 3rem;
        background: #20243199;
      }
      .main-left-bottom {
        width: 6.25rem;
        height: calc(100% - 3.75rem);
        background: #20243199;
        margin-top: 0.375rem;
      }
      .table1 {
        width: 6.25rem;
        height: calc(100% - 3.75rem);
        background-color: #20243199;
      }
      .table2 {
        width: 6.25rem;
        height: 3rem;
        background-color: #202431;
        opacity: 0.6;
        margin-top: 0.375rem;
      }
    }
    .main-middle {
      height: calc(100% - 1.25rem);

      box-sizing: border-box;
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      .echarts-section {
        width: calc(100% - 0.375rem);
        height: calc(100% / 2 - 0.325rem);
        margin-bottom: 0.325rem;
        background: #20243199;
      }
      .map {
        width: 100%;
        height: 8.1125rem;
      }
      .check-botton {
        width: 100%;
        height: 1.625rem;
      }
    }
    .main-right {
      padding-right: 0.375rem;

      .main-right-top {
        width: 6.25rem;
        height: calc(100% / 2 - 0.325rem);
        margin-bottom: 0.325rem;
        background: #20243199;
      }
      .main-right-bottom {
        width: 6.25rem;
        height: calc(100% / 2 - 0.325rem);
        background: #20243199;
      }

      .table3 {
        width: 6.25rem;
        height: 10.5rem;
        margin-bottom: 0.325rem;
        background: #20243199;
      }
      .table4 {
        width: 6.25rem;
        height: calc(100% / 3 - 0.325rem);
        background: #20243199;
        margin-bottom: 0.3rem;
      }
      .table5 {
        width: 6.25rem;
        height: calc(100% / 3 - 0.325rem);
        background: #20243199;
        margin-bottom: 0.3rem;
      }
      .table6 {
        width: 6.25rem;
        height: calc(100% / 3 - 0.325rem);
        background: #20243199;
      }
    }
  }
}
</style>
