<template>
  <div class="screen-container">
    <div class="screen-header">
      <body-title>中国特检院智慧电梯全景视图</body-title>
    </div>
    <div class="screen-menu">
      <BodyMenu :menu="menu"></BodyMenu>
    </div>
    <div class="screen-main">
      <div class="main-left">
        <area-header>综合情况统计</area-header>
        <bar-data-set-charts
          :legendData="barDataSet.legendData"
          :yAxisData="barDataSet.yAxisData"
          :seriesData="barDataSet.seriesData"
        ></bar-data-set-charts>
      </div>
      <div class="main-middle">
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
      <div class="main-right">
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
import areaHeader from "@/views/liftScreen/components/areaHeader";
import barDataSetCharts from "@/views/dataAnalysis/components/barDataSetCharts.vue";
import lineBarCharts from "@/views/dataAnalysis/components/lineBarCharts.vue";
import pieCharts from "@/views/dataAnalysis/components/pieCharts.vue";
import lineCharts from "@/views/dataAnalysis/components/lineChart.vue";

import tableModal from "@/views/dataAnalysis/components/tableModal.vue";

import "../../utils/flexible.js";

export default {
  name: "DataAnalysis",
  components: {
    BodyTitle,
    BodyMenu,
    areaHeader,
    barDataSetCharts,
    lineBarCharts,
    pieCharts,
    lineCharts,
    tableModal,
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
          title: "应届救援",
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
      barDataSet: {},
      lineChartData1: {},
      lineChartData2: {},
      pieChartData: [],
      lineChartData3: {},
      isTableShow: false,
    };
  },
  created() {
    this.getBarDataSet();
    this.getMaintenanceData();
    this.getPieCharts();
    this.getLineCharts3();
  },
  computed: {},

  methods: {
    getBarDataSet() {
      this.barDataSet = {
        legendData: ["电梯数量", "故障数量", "维保单位数量", "使用单位数量"],
        yAxisData: ["南京", "徐州", "苏州", "盐城"],
        seriesData: [
          [450, 350, 550, 500],
          [80, 50, 50, 50],
          [200, 210, 230, 160],
          [260, 220, 230, 120],
        ],
      };
    },
    getMaintenanceData() {
      this.lineChartData1 = {
        legendData: ["电梯数量", "故障数量", "故障率"],
        xAxisData: [
          "日立",
          "上海三菱",
          "西子奥的斯",
          "通力",
          "其他",
          "其他",
          "其他",
          "其他",
        ],
        seriesData: [
          [6773, 8340, 3860, 9218, 4579, 3890, 2789, 1890],
          [4573, 6890, 2750, 7230, 3900, 2890, 1800, 900],
          [5, 16, 20, 25, 30, 20, 16, 8],
        ],
      };

      this.lineChartData2 = {
        legendData: ["电梯数量", "故障数量", "故障率"],
        xAxisData: [
          "日立",
          "上海三菱",
          "西子奥的斯",
          "通力",
          "其他",
          "其他",
          "其他",
          "其他",
        ],
        seriesData: [
          [7773, 8340, 3860, 9218, 4579, 3890, 2789, 1890],
          [5573, 6890, 2750, 7230, 3900, 2890, 1800, 900],
          [5, 16, 20, 25, 27, 20, 10, 8],
        ],
      };
    },
    getPieCharts() {
      this.pieChartData = [
        { value: 1048, name: "Search Engine" },
        { value: 735, name: "Direct" },
        { value: 580, name: "Email" },
        { value: 484, name: "Union Ads" },
        { value: 300, name: "Video Ads" },
      ];
    },
    getLineCharts3() {
      this.lineChartData3 = {
        xAxisData: ["0-6年", "6-15年", "15年以上"],
        seriesData: [25, 15, 35],
      };
    },
    // 打开弹框
    handleOpenTable() {
      this.isTableShow = true;
    },
  },
};
</script>

<style lang="less" scoped>
.screen-container {
  width: 100%;
  height: 100%;

  background: url("~@/assets/image/BGBOX.png") no-repeat #2d313d;
  background-size: 100%;

  .screen-header {
  }

  .screen-menu {
    margin-top: 0.2rem;
    width: 100%;
    height: 0.5rem;
  }
  .screen-main {
    width: 100%;
    height: 100%;
    display: flex;
    margin-top: 0.2rem;

    .main-left,
    .main-right {
      width: 6.625rem;
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
    }
    .main-middle {
      flex: 1;
      width: calc(100% - 15rem);
      height: calc(100% - 1.25rem);
      padding-left: 0.375rem;

      .echarts-section {
        width: calc(100% - 0.375rem);
        height: calc(100% / 2 - 0.325rem);
        margin-bottom: 0.325rem;
        background: #20243199;
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
    }
  }
}
</style>
