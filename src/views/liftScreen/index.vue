<template>
  <div class="screen-container">
    <div class="screen-header">
      <body-title>中国特检院智慧电梯全景视图</body-title>
    </div>
    <div class="screen-menu">
      <BodyMenu :menu="menu"></BodyMenu>
    </div>
    <div class="screen-main">
      <div class="main-left">
        <div class="main-left-top">
          <LeftTop :leftTop="leftTop"></LeftTop>
        </div>
        <div class="main-left-bottom">
          <left-bottom
            :leftBottomAdd="leftBottomAdd"
            :echartsInfo="monAddEchartsInfo"
          />
        </div>
      </div>
      <div class="main-middle"></div>
      <div class="main-right">
        <div class="main-right-top">
          <right-top :rightInfo="rightTopInfo" />
        </div>
        <div class="main-right-bottom">
          <right-top :rightInfo="rightBottomInfo" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BodyTitle from "@/views/liftScreen/components/BodyTitle.vue";
import BodyMenu from "@/views/liftScreen/components/BodyMenu";

import LeftTop from "@/views/liftScreen/components/LeftTop";
import LeftBottom from "@/views/liftScreen/components/LeftBottom";

import RightTop from "./components/RightTop.vue";

import "../../utils/flexible.js";

export default {
  name: "liftScreen",
  components: {
    BodyTitle,
    BodyMenu,
    LeftTop,
    LeftBottom,
    RightTop,
  },
  data() {
    return {
      menu: [
        {
          id: 1,
          title: "数据总览",
        },
        {
          id: 2,
          title: "应届救援",
        },
        {
          id: 3,
          title: "维护保养",
        },
        {
          id: 4,
          title: "使用单位",
        },
        {
          id: 5,
          title: "运行监控",
        },
        {
          id: 6,
          title: "统计分析",
        },
      ],
      leftTop: {
        AllliftNum: 7880,
        maintNum: 12368,
        city: 67,
        companyNum: 9368,
        country: 18,
        workOrder: 15.8,
      },
      leftBottomAdd: {
        yesAdd: 80,
        monAdd: 234,
        yearAdd: 3654,
      },
      monAddEchartsInfo: {
        dataInfo: [23, 27.3, 27.1, 7.6, 12.5, 21.5, 23.5],
        xAxisData: ["1月", "2月", "3月", "4月", "5月", "6月", "7月"],
      },
      rightTopInfo: {
        title: "【省】电梯保有量情况",
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
      },
      rightBottomInfo: {
        title: "【市】电梯保有量情况",
        protectNum: [
          {
            name: "石家庄",
            num: 542323,
          },
          {
            name: "西藏",
            num: 42313,
          },
          {
            name: "内蒙古",
            num: 36344,
          },
          {
            name: "乌海",
            num: 32414,
          },
          {
            name: "沈阳",
            num: 30212,
          },
          {
            name: "大连",
            num: 12453,
          },
          {
            name: "鞍山",
            num: 8765,
          },
          {
            name: "抚顺",
            num: 7655,
          },
          {
            name: "本溪",
            num: 6545,
          },
          {
            name: "丹东",
            num: 4356,
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.screen-container {
  width: 100%;
  height: 100%;

  background: url("~@/assets/image/BGBOX.png") no-repeat #2d313d;
  background-size: 100%;

  .screen-header {
  }

  .screen-menu {
    margin-top: 0.2rem;
    width: 100%;
    height: 0.5rem;
  }
  .screen-main {
    width: 100%;
    height: 100%;
    display: flex;

    .main-left,
    .main-right {
      width: 6.625rem;
      height: calc(100% - 1.25rem);
    }

    .main-left {
      padding-left: 0.375rem;

      .main-left-top {
        width: 6.25rem;
        height: 3rem;
        background: #20243199;
      }
      .main-left-bottom {
        width: 6.25rem;
        height: calc(100% - 3.75rem);
        background: #20243199;
        margin-top: 0.375rem;
      }
    }
    .main-middle {
      flex: 1;
    }
    .main-right {
      padding-right: 0.375rem;

      .main-right-top {
        width: 6.25rem;
        height: calc(100% / 2 - 0.325rem);
        margin-bottom: 0.325rem;
        background: #20243199;
      }
      .main-right-bottom {
        width: 6.25rem;
        height: calc(100% / 2 - 0.325rem);
        background: #20243199;
      }
    }
  }
}
</style>
