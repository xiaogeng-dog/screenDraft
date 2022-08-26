<template>
  <div class="mtt-container">
    <div class="mtt-box">
      <div class="mtt-box-top">
        <div class="mtt-header">
          <div class="mtt-header-left" />
          <div class="mtt-header-middle">
            <div class="mtt-middle-title">今日就餐（人）</div>
            <div class="mtt-middle-num">
              {{ mealsNum.today.toLocaleString() }}
            </div>
          </div>
          <div class="mtt-header-right">
            <div v-for="(item, index) in mealsNum.yesterdayInfo" :key="index">
              <img :src="item.icon" alt="" />
              <div class="mtt-right-title">
                <div>{{ item.title }}</div>
                <div class="mtt-right-title1">(人/次)</div>
              </div>
              <div
                class="mtt-right-num"
                :style="{ color: index === 'yesterday' ? '#56FFD9' : '' }"
              >
                {{ item.num }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mtt-box-bottom">
        <div class="mtt-bottom-top">
          <div v-for="(item, index) in diningFlow" :key="index">
            <div class="mtt-bottom-title">
              <img :src="item.icon" alt="" />
              {{ item.title }}
            </div>
            <div class="mtt-bottom-num" :style="{ color: item.color }">
              {{ item.num }}
              <div class="mtt-bottom-num1">人</div>
            </div>
          </div>
        </div>
        <div class="mtt-echart" ref="echart"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "mealTimeTop",
  data() {
    return {
      echart: null,
      echartsInfo: {
        xAxisData: [
          "11:15",
          "11:30",
          "11:45",
          "12:00",
          "12:15",
          "12:30",
          "12:45",
          "13:00",
        ],
        dataInfo: [82, 62, 80, 70, 42, 62, 60],
      },
    };
  },
  props: {
    mealsNum: {
      type: Object,
      default() {
        return {};
      },
    },
    diningFlow: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  mounted() {
    this.initEcharts();
    window.addEventListener("resize", () => {
      this.echart.resize();
    });
  },
  methods: {
    initEcharts() {
      var echart = this.$echarts.init(this.$refs.echart);
      this.echart = echart;
      const option = {
        title: {
          text: "午餐时段人流分析表",
          textStyle: {
            color: "#98E2FF",
            fontSize: 13,
            fontWeight: 500,
          },
          left: "center",
        },
        tooltip: {
          trigger: "axis",
        },
        legend: {
          data: ["人次"],
          right: "10%",
          icon: "circle",
          textStyle: {
            color: "#fff",
          },
          tooltip: {
            show: true,
          },
          itemWidth: 8,
          itemHeight: 8,
          zlevel: 100,
        },
        grid: {
          top: "20%",
          left: "7%",
          right: "7%",
          bottom: "12%",
        },
        xAxis: {
          type: "category",
          data: this.echartsInfo.xAxisData,
          name: "日",
          nameTextStyle: {
            color: "#FFFFFF",
            fontWeight: 400,
          },
          nameGap: 10,
          axisLine: {
            lineStyle: {
              color: "rgba(142, 198, 235, 0.2)",
            },
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            color: "rgba(255, 255, 255, 0.6)",
          },
        },
        yAxis: {
          type: "value",
          axisLabel: {
            color: "rgba(255, 255, 255, 0.6)",
          },
          splitLine: {
            lineStyle: {
              type: "dashed",
              color: "rgba(142, 198, 235, 0.2)",
            },
          },
        },
        series: [
          {
            name: "人次",
            data: this.echartsInfo.dataInfo,
            type: "bar",
            barWidth: "17%",
            itemStyle: {
              // 修改柱子圆角
              barBorderRadius: 5,
              color: new this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [
                {
                  offset: 0,
                  color: "#4BCEFF",
                },
                {
                  offset: 1,
                  color: "#1582CE",
                },
              ]),
            },
          },
          {
            name: "人次",
            data: this.echartsInfo.dataInfo,
            type: "line",
            lineStyle: {
              color: "#00CCA9",
            },
            areaStyle: {
              color: "rgba(25, 177, 143, 0.2)",
            },
            symbolSize: 7,
            itemStyle: {
              color: "#44D7B6",
            },
          },
        ],
      };
      echart.setOption(option);
    },
  },
};
</script>

<style lang="scss" scoped>
.mtt-container {
  width: 100%;
  height: 100%;
  position: relative;
  .mtt-box {
    width: 90%;
    height: 90%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .mtt-box-top {
      width: 100%;
      height: 30%;
      .mtt-header {
        height: 85%;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .mtt-header-left,
        .mtt-header-middle,
        .mtt-header-right {
          height: 100%;
        }
        .mtt-header-left {
          width: 20%;
          background: url("~@/assets/images/图标-今日就餐人数.png") no-repeat;
          background-size: 100% 100%;
        }
        .mtt-header-middle {
          width: 20%;
          display: flex;
          border-right: 1px dashed rgba(255, 255, 255, 0.29);
          flex-direction: column;
          justify-content: space-around;
          .mtt-middle-title,
          .mtt-middle-num {
            width: 100%;
            text-align: center;
          }
          .mtt-middle-title {
            height: 0.35rem;
            font-size: 0.25rem;
            font-family: "PingFangSC-Regular", "PingFang SC";
            font-weight: 400;
            color: #ffffff;
            line-height: 0.35rem;
          }
          .mtt-middle-num {
            height: 0.775rem;
            font-size: 0.55rem;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: #43b8ff;
            line-height: 0.775rem;
          }
        }
        .mtt-header-right {
          width: 55%;
          display: flex;
          flex-wrap: wrap;
          & > div {
            width: 49%;
            height: 49%;
            display: flex;
            justify-content: space-around;
            align-items: center;
            & > img {
              width: 0.375rem;
              height: 0.375rem;
            }
          }
          .mtt-right-title {
            width: 40%;
            height: 0.4875rem;
            text-align: center;
            font-size: 0.2rem;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #ffffff;
            & div {
              height: 49%;
            }
            .mtt-right-title1 {
              font-size: 0.125rem;
              color: rgba(255, 255, 255, 0.5);
            }
          }
          .mtt-right-num {
            width: 0.775rem;
            height: 0.5rem;
            font-size: 0.425rem;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: #ffd6ba;
            line-height: 0.5rem;
          }
        }
      }
    }
    .mtt-box-bottom {
      width: 100%;
      height: 69%;
      .mtt-bottom-top {
        width: 100%;
        height: 29%;
        border-top: 1px dashed rgba(255, 255, 255, 0.29);
        display: flex;
        & > div {
          flex: 1;
          margin-top: 0.1875rem;
        }
        .mtt-bottom-title {
          width: 70%;
          height: 0.3125rem;
          font-size: 0.225rem;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #ffffff;
          display: flex;
          justify-content: center;
          & img {
            width: 0.3rem;
            height: 0.3rem;
            margin-right: 0.125rem;
          }
        }
        .mtt-bottom-num {
          width: 70%;
          height: 0.5rem;
          font-size: 0.4rem;
          text-align: center;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          display: flex;
          align-items: flex-end;
          margin: 0 0.5625rem;
          .mtt-bottom-num1 {
            width: 12px;
            height: 17px;
            font-size: 12px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: rgba(255, 255, 255, 0.29);
            line-height: 17px;
            margin-left: 0.125rem;
          }
        }
      }
      .mtt-echart {
        width: 100%;
        height: 70%;
        // border: 1px solid white;
      }
    }
  }
}
</style>