<template>
  <div class="com-container">
    <div class="left">
      <div class="base">
        <div class="num">
          {{ parseInt(leftTop.AllliftNum).toLocaleString() }} <span>台</span>
        </div>
        <img src="~@/assets/image/line.png" alt="" />
        <div class="title">电梯总数</div>
      </div>
      <div class="base">
        <div class="num1">
          {{ parseInt(leftTop.maintNum).toLocaleString() }} <span>家</span>
        </div>
        <img src="~@/assets/image/line.png" alt="" />
        <div class="title">维保单位</div>
      </div>

      <div class="base" v-if="isProvince">
        <div class="num">
          {{ parseInt(leftTop.country).toLocaleString() }} <span>个</span>
        </div>
        <img src="~@/assets/image/line.png" alt="" />
        <div class="title">对接省份</div>
      </div>
    </div>
    <div class="middle"></div>
    <div class="right">
      <div class="base">
        <div class="num">
          {{ parseInt(leftTop.workOrder).toLocaleString() }} <span>件</span>
        </div>
        <img src="~@/assets/image/line.png" alt="" />
        <div class="title">工单总数</div>
      </div>

      <div class="base">
        <div class="num1">
          {{ parseInt(leftTop.companyNum).toLocaleString() }} <span>家</span>
        </div>
        <img src="~@/assets/image/line.png" alt="" />
        <div class="title">使用单位</div>
      </div>
      <div class="base" v-if="isProvince">
        <div class="num">
          {{ parseInt(leftTop.city).toLocaleString() }} <span>个</span>
        </div>
        <img src="~@/assets/image/line.png" alt="" />
        <div class="title">对接地市</div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  handleGetBaseinfo,
  handleProvinceBaseinfo,
} from "@/service/dataScreen/left";

export default {
  name: "LeftTop",
  props: {
    code: String,
    isProvince: Boolean,
  },
  data() {
    return {
      leftTop: {
        AllliftNum: 0,
        maintNum: 0,
        city: 0,
        companyNum: 0,
        country: 0,
        workOrder: 0,
      },
    };
  },
  watch: {
    code: {
      handler() {
        if (this.code != "") {
          this.handleProvinceBaseinfo(this.code);
        } else {
          this.handleGetBaseinfo();
        }
      },
      immediate: true,
    },
  },
  methods: {
    handleGetBaseinfo() {
      handleGetBaseinfo().then((res) => {
        if (res.code == 0) {
          this.leftTop.AllliftNum = res.data.liftNum;
          this.leftTop.maintNum = res.data.maintUnitNum;
          this.leftTop.city = res.data.cityNum;
          this.leftTop.companyNum = res.data.userUnitNum;
          this.leftTop.country = res.data.provinceNum;
          this.leftTop.workOrder = res.data.liftFormNum;
        }
      });
    },
    handleProvinceBaseinfo(code) {
      handleProvinceBaseinfo(code).then((res) => {
        if (res.code == 0) {
          this.leftTop.AllliftNum = res.data[0].liftNum;
          this.leftTop.maintNum = res.data[0].maintUnitNum;
          this.leftTop.city = res.data[0].cityNum || 0;
          this.leftTop.companyNum = res.data[0].userUnitNum;
          this.leftTop.country = res.data[0].provinceNum || 1;
          this.leftTop.workOrder = res.data[0].liftFormNum;
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
  .base {
    width: 85%;
    //   height: 0.5625rem;
    display: flex;
    flex-direction: column;

    .num1 {
      font-size: 0.275rem;
      font-family: DINAlternate-Bold, DINAlternate;
      font-weight: 500;
      color: #23f8c8;
      line-height: 0.3rem;

      & span {
        font-size: 14px;
      }
    }
    .num {
      font-size: 0.2625rem;
      font-family: DINAlternate-Bold, DINAlternate;
      font-weight: bold;
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
    background: url("~@/assets/image/baseNum.png") no-repeat;
    background-size: 100%;

    opacity: 1;
  }
}
</style>
