<template>
  <div class="lb-container">
    <echart-header>2018～2022年工单年度增量</echart-header>
    <div class="echarts">
      <areadistribution :echartsInfo="echartsInfo"></areadistribution>
    </div>
  </div>
</template>

<script>
import EchartHeader from "@/views/liftScreen/components/EchartHeader";

import areadistribution from "../baicomponents/echarts/areadistribution";

export default {
  name: "table2",
  components: {
    EchartHeader,
    areadistribution,
  },
  props: {
    echartsInfo: Object,
  },
  data() {
    return {};
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