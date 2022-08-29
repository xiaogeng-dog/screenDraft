<template>
  <div class="com-container">
    <div class="left">
      <div class="base">
        <div class="num">
          {{ parseInt(leftTop.allFormNum).toLocaleString() }}
        </div>
        <img src="~@/assets/image/line.png" alt="" />
        <div class="title">工单总数/件</div>
      </div>
      <div class="base">
        <div class="num">
          {{ parseInt(leftTop.formAVG).toLocaleString() }}
        </div>
        <img src="~@/assets/image/line.png" alt="" />
        <div class="title">平均救援时间/分钟</div>
      </div>
    </div>
    <div class="middle"></div>
    <div class="right">
      <div class="base">
        <div class="num1">
          {{ parseInt(leftTop.tiringFormNum).toLocaleString() }}
        </div>
        <img src="~@/assets/image/line.png" alt="" />
        <div class="title">困人工单/件</div>
      </div>
      <div class="base">
        <div class="num1">
          {{ parseInt(leftTop.faultFormNum).toLocaleString() }}
        </div>
        <img src="~@/assets/image/line.png" alt="" />
        <div class="title">非困人工单/件</div>
      </div>
    </div>
  </div>
</template>

<script>
import { getBaseInfo } from "@/service/dataScreen/emergencyRescue";
export default {
  name: "LeftTop",
  props: {
    code: String,
    isProvince: Boolean,
  },
  watch: {
    code: {
      handler() {
        if (this.code != "") {
          this.getBaseInfo(this.code);
        } else {
          this.getBaseInfo();
        }
      },
      immediate: true,
    },
  },
  data() {
    return {
      leftTop: {
        faultFormNum: 0,
        tiringFormNum: 0,
        formAVG: 0,
        allFormNum: 0,
      },
    };
  },
  methods: {
    getBaseInfo(code = "") {
      getBaseInfo(code).then((res) => {
        if (res.code == 0) {
          this.leftTop.faultFormNum = res.data[0].faultFormNum;
          this.leftTop.tiringFormNum = res.data[0].tiringFormNum;
          this.leftTop.formAVG = res.data[0].formAVG;
          this.leftTop.allFormNum =
            res.data[0].faultFormNum + res.data[0].tiringFormNum;
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.com-container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0.4375rem 0;
  box-sizing: border-box;

  background: url("~@/assets/image/rt2-bg.png") no-repeat;
  background-position: center;
  .base {
    width: 1.25rem;
    //   height: 0.5625rem;
    display: flex;
    flex-direction: column;

    .num1 {
      font-size: 0.275rem;
      font-family: DINAlternate-Bold, DINAlternate;
      font-weight: 500;
      text-align: center;
      color: #e67d37;
      line-height: 0.3rem;

      & span {
        font-size: 14px;
      }
    }
    .num {
      font-size: 0.275rem;
      font-family: DINAlternate-Bold, DINAlternate;
      font-weight: bold;
      text-align: center;
      color: #9ce3ff;
      line-height: 0.3rem;
      background: linear-gradient(
        180deg,
        #61fcfe 0%,
        #18a4fa 100%,
        #afe1ff 100%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;

      & span {
        font-size: 14px;
      }
    }

    .title {
      margin-top: 0.0625rem;
      font-size: 0.175rem;
      white-space: nowrap;
      text-align: center;
      font-family: PingFangSC-Regular, PingFang SC;
      color: #ffffff;
      line-height: 16px;
    }
  }
  .left,
  .right {
    flex: 0.9;
    height: 100%;
    // border: 1px solid #fff;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  .middle {
    flex: 1.2;
    height: 2.0375rem;
    background: url("~@/assets/image/rt2.png") no-repeat;
    background-size: 100%;

    opacity: 1;
  }
}
</style>
