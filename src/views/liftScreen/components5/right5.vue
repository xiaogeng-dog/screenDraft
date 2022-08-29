<template>
  <div class="r5-container">
    <div class="liftInfo-title">
      <area-header>电梯信息</area-header>
      <div class="liftInfo-info">
        <div class="liftInfo-info-item">
          <div class="liftInfo-info-num">
            {{ parseInt(missingData.maintUnitNum).toLocaleString() }}
          </div>
          <div class="liftInfo-info-name">
            <img src="~@/assets/image/warning.png" alt="" />
            <div class="queshi">
              维保单位 <br />
              缺失项
            </div>
          </div>
        </div>
        <div class="liftInfo-info-item">
          <div class="liftInfo-info-num">
            {{ parseInt(missingData.userUnitNum).toLocaleString() }}
          </div>
          <div class="liftInfo-info-name">
            <img src="~@/assets/image/warning.png" alt="" />
            <div class="queshi">
              使用单位 <br />
              缺失项
            </div>
          </div>
        </div>
        <div class="liftInfo-info-item">
          <div class="liftInfo-info-num">
            {{ parseInt(missingData.liftNum).toLocaleString() }}
          </div>
          <div class="liftInfo-info-name">
            <img src="~@/assets/image/warning.png" alt="" />
            <div class="queshi">
              电梯唯一识别码 <br />
              数据重读项
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="lift-maint">
      <area-header>电梯维保单位</area-header>
      <div class="maint-info">
        <div class="maint-title">
          <div class="title-left">
            <img src="~@/assets/image/maint.png" alt="" />
            <span
              >维保单位统计 <br />
              （家）</span
            >
          </div>
          <div class="maint-num">
            {{ parseInt(baseInfo.maintUnitNum).toLocaleString() }}
          </div>
        </div>
        <div class="echarts">
          <maint-table-echart :echartsInfo="echartsInfo"></maint-table-echart>
        </div>
      </div>
    </div>
    <div class="lift-company">
      <area-header>电梯使用单位</area-header>
      <div class="maint-info">
        <div class="maint-title">
          <div class="title-left">
            <img src="~@/assets/image/maint.png" alt="" />
            <span
              >使用单位统计 <br />
              （家）</span
            >
          </div>
          <div class="maint-num">
            {{ parseInt(baseInfo.userUnitNum).toLocaleString() }}
          </div>
        </div>
        <div class="echarts">
          <table-echart :echartsInfo="protectNum.slice(0, 5)"></table-echart>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import areaHeader from "@/views/liftScreen/components/areaHeader";

import tableEchart from "@/views/liftScreen/components/echarts/tableEchart";

import maintTableEchart from "@/views/liftScreen/components5/echarts/maintTableEchart";

import {
  missingItemAnalysis,
  baseCountByProv,
  maintainCountByLiftAnalysis,
  userCountByAreaCodeAnalysis,
} from "@/service/dataScreen/operationMonitor";
export default {
  components: {
    areaHeader,
    tableEchart,
    maintTableEchart,
  },
  props: {
    code: String,
    isProvince: Boolean,
  },
  watch: {
    code: {
      handler() {
        if (this.code != "") {
          this.missingItemAnalysis(this.code);
          this.baseCountByProv(this.code);
          this.maintainCountByLiftAnalysis(this.code);
          this.userCountByAreaCodeAnalysis(this.code);
        } else {
          this.missingItemAnalysis();
          this.baseCountByProv();
          this.maintainCountByLiftAnalysis();
          this.userCountByAreaCodeAnalysis();
        }
      },
      immediate: true,
    },
  },
  data() {
    return {
      protectNum: [
        {
          name: "江苏省",
          num: 542323,
        },
        {
          name: "山东省",
          num: 42313,
        },
        {
          name: "辽宁省",
          num: 36344,
        },
        {
          name: "河南省",
          num: 32414,
        },
        {
          name: "广东省",
          num: 30212,
        },
        {
          name: "新疆",
          num: 12453,
        },
        {
          name: "西藏",
          num: 8765,
        },
        {
          name: "内蒙古",
          num: 7655,
        },
        {
          name: "山西省",
          num: 6545,
        },
        {
          name: "云南省",
          num: 4356,
        },
      ],
      missingData: {
        maintUnitNum: 0,
        userUnitNum: 0,
        liftNum: 0,
      },
      baseInfo: {
        maintUnitNum: 0,
        userUnitNum: 0,
      },
      echartsInfo: {
        yAxisData: [
          "奥的斯机电电梯有限公司杭州分公司",
          "日立电梯(中国)有限公司杭州工程",
          "通力电梯有限公司郑州分公司",
          "通力电梯有限公司南京分公司",
          "通力电梯有限公司杭州分公司",
        ],
        xAxisData: [18203, 23489, 29034, 104970, 131744].reverse(),
      },
    };
  },
  methods: {
    missingItemAnalysis(code = "") {
      missingItemAnalysis().then((res) => {
        if (res.code == "0") {
          this.missingData.maintUnitNum = res.data[0].maintUnitNum;
          this.missingData.userUnitNum = res.data[0].userUnitNum;
          this.missingData.liftNum = res.data[0].liftNum;
        }
      });
    },

    baseCountByProv(code = "") {
      baseCountByProv().then((res) => {
        if (res.code == "0") {
          this.baseInfo = res.data[0];
        }
      });
    },

    userCountByAreaCodeAnalysis(code = "") {
      userCountByAreaCodeAnalysis().then((res) => {
        if (res.code == "0") {
          this.protectNum = [];
          res.data.forEach((element) => {
            this.protectNum.push({
              name: element.responseName,
              num: element.userUnitNum,
            });
          });
        }
      });
    },
    maintainCountByLiftAnalysis(code = "") {
      maintainCountByLiftAnalysis().then((res) => {
        if (res.code == "0") {
          this.echartsInfo.xAxisData = [];
          this.echartsInfo.yAxisData = [];
          res.data.forEach((ele) => {
            this.echartsInfo.xAxisData.push(ele.liftNum);
            this.echartsInfo.yAxisData.push(ele.responseName);
          });
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.r5-container {
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  box-sizing: border-box;
  .liftInfo-title {
    margin-bottom: 0.25rem;
  }

  .liftInfo-info {
    width: 100%;
    height: 1.75rem;
    background: rgba(32, 36, 49, 0.6);

    display: flex;

    .liftInfo-info-item {
      flex: 1;
      height: 100%;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .liftInfo-info-num {
        font-size: 0.375rem;
        font-family: DINAlternate-Bold, DINAlternate;
        font-weight: bold;
        color: #e67d37;

        padding-bottom: 0.05rem;
        box-sizing: border-box;
      }
      .liftInfo-info-name {
        width: 100%;
        font-size: 0.175rem;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #ffffff;

        display: flex;
        justify-content: space-around;
        align-items: center;

        .queshi {
          flex: 1;
          margin-left: 0.1125rem;
        }

        & img {
          width: 0.375rem;
          height: 0.375rem;
          margin-left: 0.25rem;
        }
      }
    }
  }

  .lift-maint {
    flex: 1;
    margin-bottom: 0.375rem;
  }
  .lift-company {
    flex: 1;
    margin-bottom: 0.425rem;
  }
  .maint-info {
    width: 100%;
    height: calc(100% - 0.5rem);
    background: rgba(32, 36, 49, 0.6);

    display: flex;
    flex-direction: column;

    .echarts {
      flex: 1;
      width: 100%;
    }

    .maint-title {
      height: 1rem;
      width: 5.125rem;

      margin: 0 auto;
      background: url("~@/assets/image/add-bg.png") no-repeat;
      background-size: 100% 100%;

      display: flex;
      .title-left {
        flex: 1;
        display: flex;
        justify-content: flex-end;
        align-items: center;

        & img {
          width: 0.55rem;
          height: 0.7rem;
          margin-right: 0.1125rem;
        }
        & span {
          font-size: 0.2rem;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #effaff;
        }
      }
      .maint-num {
        text-align: center;
        flex: 1;
        font-size: 0.45rem;
        line-height: 1rem;
        font-family: DINAlternate-Bold, DINAlternate;
        font-weight: bold;
        color: #a9d5fe;
      }
    }
  }
}
</style>
