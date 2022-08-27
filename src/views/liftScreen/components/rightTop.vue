<template>
  <div class="rt-container">
    <area-header>{{ rightInfo.title }}</area-header>
    <div class="table">
      <div class="pro-frontfive">
        <div class="pro-title">电梯保有量<span>前五</span></div>
        <div class="pro-table">
          <table-echart
            :echartsInfo="rightInfo.protectNum.slice(0, 5)"
          ></table-echart>
        </div>
      </div>
      <div class="pro-frontfive">
        <div class="pro-title1">电梯保有量<span>后五</span></div>
        <div class="pro-table">
          <table-echart2
            :echartsInfo="rightInfo.protectNum.slice(-5)"
          ></table-echart2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import areaHeader from "./areaHeader.vue";
import tableEchart from "./echarts/tableEchart.vue";
import tableEchart2 from "./echarts/tableEchart2.vue";

export default {
  name: "RightTop",
  components: {
    areaHeader,
    tableEchart,
    tableEchart2,
  },
  props: {
    rightInfo: Object,
  },
};
</script>

<style lang="scss" scoped>
.rt-container {
  width: 100%;
  height: 100%;
}
.table {
  width: 100%;
  height: calc(100% - 0.5rem);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  .pro-frontfive {
    display: flex;
    // justify-content: space-around;
    // align-content: center;
  }
  .pro-title,
  .pro-title1 {
    width: 0.575rem;
    height: 2.125rem;
    border: 0.0125rem solid;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 0.2rem;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #7e8f9f;
    text-align: center;
    writing-mode: vertical-lr;

    & span {
      color: #ffffffaa;
      font-weight: 500;
    }
  }
  .pro-title {
    background: rgba(54, 83, 120, 0.3);
    border-image: linear-gradient(
        180deg,
        rgba(81, 171, 245, 1),
        rgba(67, 162, 240, 0.2),
        rgba(38, 142, 227, 0.2),
        rgba(20, 130, 220, 1)
      )
      1 1;
  }

  .pro-title1 {
    background: rgba(60, 42, 17, 0.3);
    border-image: linear-gradient(
        180deg,
        rgba(255, 165, 12, 1),
        rgba(254, 165, 11, 0.2),
        rgba(252, 165, 10, 0.2),
        rgba(251, 165, 10, 1)
      )
      1 1;
  }
  .pro-table {
    height: 2.125rem;
    width: 5.125rem;
  }
}
</style>
