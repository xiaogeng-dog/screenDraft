<template>
  <div class="health-container">
    <div class="health-title">
      <body-title :titleInfo="meetingAnalysisInfo"
        >{{ meetingAnalysisInfo.title }}
      </body-title>
    </div>
    <div class="echarts">
      <meeting-chart :menusPieInfo="echartsInfo"></meeting-chart>
    </div>
  </div>
</template>

<script>
import bodyTitle from "@/views/yiweiScreen/components/bodyTitle";
import meetingChart from "@/views/yiweiScreen/echarts/meetingChart";
export default {
  name: "healthRecordsStatistics",
  components: {
    bodyTitle,
    meetingChart,
  },
  props: {
    meetingAnalysisInfo: Object,
  },
  data() {
    return {
      echartsInfo: this.meetingAnalysisInfo.echartsInfo,
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
