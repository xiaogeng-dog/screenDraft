<template>
  <div class="num-container">
    <div class="health-title">
      <body-title :titleInfo="specialistNumInfo">{{
        specialistNumInfo.title
      }}</body-title>
    </div>
    <div class="echarts">
      <speciallist-chart :echartsInfo="echartsInfo"></speciallist-chart>
    </div>
  </div>
</template>

<script>
import SpeciallistChart from "../echarts/speciallistChart.vue";
import BodyTitle from "./bodyTitle.vue";

export default {
  components: { BodyTitle, SpeciallistChart },
  name: "specialistNum",
  props: {
    specialistNumInfo: Object,
  },
  data() {
    return {
      echartsInfo: this.specialistNumInfo.echartsInfo,
    };
  },
};
</script>

<style lang="scss" scoped>
.num-container {
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
