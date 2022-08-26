<template>
  <div class="screen-container">
    <div class="screen-header">
      <title-header>5G远程云医院综合监管大屏</title-header>
    </div>
    <div class="top-num">
      <top-num :topNumInfo="topNumInfo"></top-num>
    </div>
    <div class="screen-body">
      <div class="body-item">
        <health-records-statistics
          :healthRecordsInfo="healthRecordsInfo"
        ></health-records-statistics>
      </div>
      <div class="body-item">
        <service-analysis
          :serviceAnalysisInfo="serviceAnalysisInfo"
        ></service-analysis>
      </div>
      <div class="body-item">
        <age-analysis :ageAnalysisInfo="ageAnalysisInfo"></age-analysis>
      </div>
      <div class="body-item">
        <specialist-num :specialistNumInfo="specialistNumInfo"></specialist-num>
      </div>
      <div class="body-item">
        <train-analysis :trainAnalysisInfo="trainAnalysisInfo"></train-analysis>
      </div>
      <div class="body-item">
        <outpatient-analysis
          :outAnalysisInfo="outAnalysisInfo"
        ></outpatient-analysis>
      </div>
      <div class="body-item">
        <order-analysis :orderAnalysisInfo="orderAnalysisInfo"></order-analysis>
      </div>
      <div class="body-item">
        <refer-analysis :referAnalysisInfo="referAnalysisInfo"></refer-analysis>
      </div>
      <div class="body-item">
        <meeting-analysis
          :meetingAnalysisInfo="meetingAnalysisInfo"
        ></meeting-analysis>
      </div>
    </div>
  </div>
</template>

<script>
import "../../utils/flexible.js";
import titleHeader from "@/views/yiweiScreen/components/titleHeader.vue";
import topNum from "@/views/yiweiScreen/components/topNum";

import healthRecordsStatistics from "@/views/yiweiScreen/components/healthRecordsStatistics";
import specialistNum from "@/views/yiweiScreen/components/specialistNum";
import orderAnalysis from "@/views/yiweiScreen/components/orderAnalysis";
import referAnalysis from "@/views/yiweiScreen/components/referAnalysis";
import meetingAnalysis from "@/views/yiweiScreen/components/meetingAnalysis";
import outpatientAnalysis from "@/views/yiweiScreen/components/outpatientAnalysis";
import trainAnalysis from "@/views/yiweiScreen/components/trainAnalysis";
import ageAnalysis from "@/views/yiweiScreen/components/ageAnalysis";
import serviceAnalysis from "@/views/yiweiScreen/components/serviceAnalysis";
export default {
  name: "index",
  components: {
    titleHeader,
    topNum,
    healthRecordsStatistics,
    specialistNum,
    orderAnalysis,
    referAnalysis,
    meetingAnalysis,
    outpatientAnalysis,
    trainAnalysis,
    ageAnalysis,
    serviceAnalysis,
  },
  data() {
    return {
      nowDate: "",
      topNumInfo: [
        {
          id: 1,
          name: "县域总人口数",
          num: 55555555,
          image: require("@/assets/imgs/people.png"),
          color: "linear-gradient(180deg, #1388F0 0%, #2457FF 100%)",
        },
        {
          id: 2,
          name: "共享设备数",
          num: 12499,
          image: require("@/assets/imgs/setting.png"),
          color: "linear-gradient(180deg, #1388F0 0%, #2457FF 100%)",
        },
        {
          id: 3,
          name: "医疗机构数",
          num: 12499,
          image: require("@/assets/imgs/hospital.png"),
          color: "linear-gradient(180deg, #6646DA 0%, #5122DD 100%)",
        },
        {
          id: 4,
          name: "电子病历调阅数",
          num: 12499,
          image: require("@/assets/imgs/case.png"),
          color: "linear-gradient(180deg, #6646DA 0%, #5122DD 100%)",
        },
        {
          id: 5,
          name: "健康档案数",
          num: 12499,
          image: require("@/assets/imgs/file.png"),
          color: "linear-gradient(180deg, #AE46DA 0%, #8522DD 100%)",
        },
        {
          id: 6,
          name: "健康档案调阅数",
          num: 12499,
          image: require("@/assets/imgs/record.png"),
          color: "linear-gradient(180deg, #AE46DA 0%, #8522DD 100%)",
        },
      ],
      healthRecordsInfo: {
        title: "健康档案建档类型统计",
        icon: require("@/assets/imgs/bodyicon.png"),
        cumulativeFiling: "99999",
        echartsInfo: [
          { value: 20, name: "rose 1" },
          { value: 22, name: "rose 2" },
          { value: 28, name: "rose 3" },
          { value: 35, name: "rose 4" },
          { value: 40, name: "rose 5" },
        ],
      },
      specialistNumInfo: {
        title: "专家门诊总人次统计",
        icon: require("@/assets/imgs/bodyicon.png"),
        subTitle: "专家门诊总人次",
        echartsInfo: {
          dataInfo: [23, 27.3, 27.1, 7.6, 12.5, 21.5, 23.5],
          xAxisData: ["1月", "2月", "3月", "4月", "5月", "6月", "7月"],
        },
      },
      orderAnalysisInfo: {
        title: "预约分析",
        icon: require("@/assets/imgs/bodyicon.png"),
        subTitle: "预约趋势统计",
        echartsInfo: {
          dataInfo: [23, 27.3, 27.1, 7.6, 12.5, 21.5, 23.5],
          xAxisData: ["1月", "2月", "3月", "4月", "5月", "6月", "7月"],
        },
      },
      referAnalysisInfo: {
        title: "转诊分析统计",
        icon: require("@/assets/imgs/bodyicon.png"),
        subTitle: "转诊分析统计",
        echartsInfo: {
          dataInfo: [23, 27.3, 27.1, 7.6, 12.5, 21.5, 23.5],
          xAxisData: ["1月", "2月", "3月", "4月", "5月", "6月", "7月"],
        },
      },
      meetingAnalysisInfo: {
        title: "会议类型分析统计",
        icon: require("@/assets/imgs/bodyicon.png"),
        echartsInfo: [
          { value: 20, name: "rose 1" },
          { value: 22, name: "rose 2" },
          { value: 28, name: "rose 3" },
          { value: 35, name: "rose 4" },
          { value: 40, name: "rose 5" },
        ],
      },
      outAnalysisInfo: {
        title: "门诊总人次统计",
        icon: require("@/assets/imgs/bodyicon.png"),
        cumulativeFiling: "99999",
        echartsInfo: {
          dataInfo: [23, 27.3, 27.1, 7.6, 12.5, 21.5, 23.5],
          xAxisData: ["1月", "2月", "3月", "4月", "5月", "6月", "7月"],
        },
      },
      trainAnalysisInfo: {
        title: "培训统计",
        icon: require("@/assets/imgs/bodyicon.png"),
        echartsInfo: {
          dataInfo: [23, 27.3, 27.1, 7.6, 12.5, 21.5, 23.5],
          xAxisData: ["1月", "2月", "3月", "4月", "5月", "6月", "7月"],
        },
      },
      ageAnalysisInfo: {
        title: "健康档案人口年龄分布统计",
        icon: require("@/assets/imgs/bodyicon.png"),
        echartsInfo: {
          dataInfo: [23, 27.3, 27.1, 7.6, 12.5, 21.5, 23.5],
          xAxisData: ["1月", "2月", "3月", "4月", "5月", "6月", "7月"],
        },
      },
      serviceAnalysisInfo: {},
    };
  },
};
</script>

<style lang="scss" scoped>
.screen-container {
  width: 100%;
  height: 100%;

  background: url(~@/assets/imgs/bc.png) no-repeat;
  background-size: 100% 100%;

  box-sizing: border-box;

  .screen-header {
    width: 100%;
    height: 0.8625rem;
  }

  .top-num {
    width: 100%;
    height: 1.25rem;
  }

  .screen-body {
    width: 100%;
    height: calc(100% - 2.1125rem);
    overflow: auto;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    .body-item {
      width: 32%;
      height: 32%;
      // border: 1px solid red;
    }
  }
}
</style>
