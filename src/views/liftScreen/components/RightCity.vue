<template>
  <div class="rc-container">
    <area-header>电梯数量</area-header>
    <table-temp
      :tableTitle="tableTitle"
      :tableContent="menusPieInfo"
    ></table-temp>
    <div class="echarts">
      <right-city-echart :menusPieInfo="menusPieInfo"></right-city-echart>
    </div>
  </div>
</template>

<script>
import areaHeader from "./areaHeader.vue";
import TableTemp from "./tableTemp.vue";

import rightCityEchart from "./echarts/rightCityEchart.vue";

import { handleCityRank } from "@/service/dataScreen/left";

export default {
  name: "RightCity",
  props: {
    code: {
      type: String,
      default: "0",
    },
  },
  watch: {
    code: {
      handler() {
        if (this.code != "") {
          this.handleCityRank(this.code);
        }
      },
      immediate: true,
    },
  },
  data() {
    return {
      menusPieInfo: [
        // { value: 2263, name: "淮安" },
        // { value: 1673, name: "无锡" },
        // { value: 1432, name: "镇江" },
        // { value: 1254, name: "南京" },
      ],
      tableTitle: ["序号", "区域", "电梯数量"],
    };
  },
  components: {
    areaHeader,
    TableTemp,
    rightCityEchart,
  },
  methods: {
    handleCityRank(code = "") {
      handleCityRank(code).then((res) => {
        if (res.code == 0) {
          this.menusPieInfo = [];
          res.data.forEach((element, index) => {
            this.menusPieInfo.push({
              id: index + 1,
              name: element.responseName,
              value: element.liftNum,
            });
          });
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.rc-container {
  display: flex;
  flex-direction: column;
  height: calc(100% - 0.225rem);

  background: rgba(32, 36, 49, 0.6);
  .echarts {
    width: 100%;
    flex: 1;
  }
}
</style>
