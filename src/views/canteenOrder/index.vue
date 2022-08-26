<template>
  <div class="screen-container">
    <!-- 头部 -->
    <header class="screen-header">
      <div class="header-title">{{ nowDate }}</div>
      <div class="header-switch">
        <div
          v-for="(item, index) in buttonsInfo"
          :key="index"
          :class="{ 'button-active': isActive(item.routeAddr) }"
        >
          <router-link :to="item.routeAddr">{{ item.name }}</router-link>
        </div>
      </div>
    </header>
    <div class="screen-body">
      <section class="screen-left">
        <video-surveillance />
      </section>
      <section class="screen-middle">
        <div class="screen-middle-top">
          <meal-time-top :mealsNum="mealsNum" :diningFlow="diningFlow" />
        </div>
        <div class="screen-middle-bottom">
          <middle-bottom />
        </div>
      </section>
      <section class="screen-right">
        <right-top :menusPieInfo="menusPieInfo" />
        <right-bottom />
      </section>
    </div>
  </div>
</template>

<script>
import "../../utils/flexible.js";
import moment from "moment";
import "moment/locale/zh-cn";
import videoSurveillance from "@/views/canteenOrder/components/videoSurveillance";
import mealTimeTop from "@/views/canteenOrder/components/mealTimeTop";
import middleBottom from "@/views/canteenOrder/components/middleBottom";
import rightTop from "@/views/canteenOrder/components/rightTop";
import rightBottom from "@/views/canteenOrder/components/rightBottom";
export default {
  name: "index",
  components: {
    videoSurveillance,
    mealTimeTop,
    middleBottom,
    rightTop,
    rightBottom,
  },
  mounted() {
    setInterval(() => {
      this.nowDate = moment().format("YYYY-MM-DD HH:mm:ss dddd");
    }, 1000);
  },
  data() {
    return {
      nowDate: "",
      mealsNum: {
        today: 2845,
        yesterdayInfo: {
          yesterday: {
            title: "昨日就餐",
            num: 345,
            icon: require("@/assets/images/ICON-就餐.png"),
          },
          breakfast: {
            title: "早餐就餐",
            num: 345,
            icon: require("@/assets/images/ICON-早餐.png"),
          },
          lunch: {
            title: "中午就餐",
            num: 345,
            icon: require("@/assets/images/ICON-午餐.png"),
          },
          dinner: {
            title: "晚餐就餐",
            num: 345,
            icon: require("@/assets/images/ICON-早餐(1).png"),
          },
        },
      },
      diningFlow: [
        {
          icon: require("@/assets/images/ICON-tips03.png"),
          color: "#56FFD9",
          title: "本部员工",
          num: 345,
        },
        {
          icon: require("@/assets/images/ICON-tips03(1).png"),
          color: "#29BEF9",
          title: "省直单位员工",
          num: 218,
        },
        {
          icon: require("@/assets/images/ICON-tips03(2).png"),
          color: "#B468ED",
          title: "外包外协",
          num: 145,
        },
        // {
        //   icon: require("@/assets/images/ICON-tips03(3).png"),
        //   color: "#ED68A2",
        //   title: "访客",
        //   num: 108,
        // },
      ],
      menusPieInfo: [
        { value: 2263, name: "菜品名称展示-1" },
        { value: 1673, name: "菜品名称展示-2" },
        { value: 1432, name: "菜品名称展示-3" },
        { value: 1254, name: "菜品名称展示-4" },
      ],
      buttonsInfo: [
        {
          name: "进出",
          routeAddr: "",
        },
        {
          name: "会议",
          routeAddr: "",
        },
        {
          name: "食堂",
          routeAddr: "/canteenOrder",
        },
        {
          name: "公车",
          routeAddr: "",
        },
        {
          name: "视频",
          routeAddr: "",
        },
      ],
    };
  },
  computed: {
    isActive() {
      return (val) => {
        return this.$route.path === val;
      };
    },
  },
  methods: {
    moment,
  },
};
</script>

<style lang="scss" scoped>
@font-face {
  font-family: screenFont;
  src: url(../../assets/font/YouSheBiaoTiHei.ttf);
}
.button-active {
  background: url("~@/assets/images/button_checked.png") no-repeat !important;
  background-size: 100% 100% !important;
  color: #ffe820;
}
.screen-container {
  width: 100%;
  height: 100%;
  background: url(../../assets/images/BGBOX.png) no-repeat;
  background-size: 100% 100%;
  color: #fff;
  box-sizing: border-box;

  .screen-header {
    width: 100%;
    height: 0.875rem;
    position: relative;
    background: url(../../assets/images/HEADERTEXT-BOX.png) no-repeat;
    background-size: 100% 100%;
    .header-title {
      width: 4.375rem;
      height: 0.325rem;

      position: absolute;
      left: 0.65rem;
      top: 0.375rem;

      text-align: left;
      font-size: 0.25rem;
      line-height: 0.325rem;
      color: #b3ceff;
      font-family: "screenFont";
    }
    .header-switch {
      width: 4.375rem;
      height: 0.375rem;

      position: absolute;
      right: 0.65rem;
      top: 0.375rem;

      display: flex;
      justify-content: space-between;

      & div {
        width: 0.75rem;
        height: 0.375rem;

        background: url("~@/assets/images/buttonSty.png") no-repeat;
        background-size: 100% 100%;

        display: flex;
        justify-content: center;
      }
      .router-link-active {
        font-size: 0.2rem;
        font-family: "screenFont";
        color: #fff;
        line-height: 0.375rem;

        text-decoration: none;
      }
    }
  }
  .screen-body {
    width: 100%;
    height: calc(100% - 0.875rem);
    display: flex;
    justify-content: space-around;
    align-items: center;
    .screen-left {
      height: 93%;
      width: 26%;
    }
    .screen-middle {
      height: 93%;
      width: 41%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .screen-middle-top {
        height: 62%;
        width: 100%;
        background: url("~@/assets/images/边框背景-01(3).png") no-repeat;
        background-size: 100% 100%;
      }
      .screen-middle-bottom {
        height: 34%;
        width: 100%;
        background: url("~@/assets/images/边框背景-01(2).png") no-repeat;
        background-size: 100% 100%;
      }
    }
    .screen-right {
      height: 93%;
      width: 26%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }
}
// /* 约束屏幕尺寸 */
// @media screen and (max-width: 1024px) {
//   .screen-container {
//     font-size: 42px !important;
//   }
// }
// @media screen and (min-width: 1920px) {
//   .screen-container {
//     font-size: 80px !important;
//   }
// }
</style>
