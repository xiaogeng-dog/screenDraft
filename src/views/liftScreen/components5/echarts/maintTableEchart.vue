<template>
  <div class="mtt-echart" ref="echart"></div>
</template>

<script>
export default {
  name: "speciallistChart",

  data() {
    return {
      echart: null,
      echartImg: {
        first: require("@/assets/imgs/first.png"),
        second: require("@/assets/imgs/second.png"),
        third: require("@/assets/imgs/third.png"),
      },
    };
  },
  props: {
    echartsInfo: Array,
  },
  watch: {
    echartsInfo: {
      handler() {
        this.initEcharts();
      },
      deep: true,
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
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        grid: {
          top: "3%",
          left: "8%",
          right: "7%",
          bottom: "0%",
        },
        xAxis: {
          type: "value",
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            show: false,
          },
          splitLine: {
            show: false,
          },
        },
        yAxis: {
          type: "category",
          axisTick: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          axisLabel: {
            show: false,
          },
          splitLine: {
            show: false,
          },
          inverse: true,
          data: this.echartsInfo.yAxisData.slice(0, 5),
        },
        series: [
          {
            name: "2011",
            barWidth: "30%",
            label: {
              show: true,
              formatter: (value) => {
                if (value.dataIndex <= 2) {
                  return `{${value.dataIndex + 1}|}  ${value.name}`;
                } else {
                  return ` ${value.dataIndex + 1}   ${value.name}`;
                }
              },
              rich: {
                1: {
                  width: 14,
                  height: 14,
                  align: "center",
                  backgroundColor: {
                    image: this.echartImg.first,
                  },
                },
                2: {
                  width: 14,
                  height: 14,
                  align: "center",
                  backgroundColor: {
                    image: this.echartImg.second,
                  },
                },
                3: {
                  width: 14,
                  height: 14,
                  align: "center",
                  backgroundColor: {
                    image: this.echartImg.third,
                  },
                },
              },
              color: "#FFFFFF",
              position: "insideLeft",
              fontWeight: 400,
            },
            tooltip: {
              show: false,
            },
            type: "bar",
            data: [0, 0, 0, 0, 0],
          },
          {
            name: "????????????",
            barWidth: "30%",
            barGap: "60%",
            barCategoryGap: "100%",
            label: {
              show: true,
              formatter: "{c}???",
              color: "#BEBEBE",
              position: "right",
              fontWeight: 400,
              fontSize: 10,
            },
            itemStyle: {
              // ??????????????????
              barBorderRadius: 5,
              color: (value) => {
                console.log(value);
                if (value.dataIndex <= 2) {
                  return new this.$echarts.graphic.LinearGradient(1, 0, 0, 0, [
                    {
                      offset: 0,
                      color: "#FFFAA5",
                    },
                    {
                      offset: 1,
                      color: "#FF9608",
                    },
                  ]);
                } else {
                  return new this.$echarts.graphic.LinearGradient(1, 0, 0, 0, [
                    {
                      offset: 0,
                      color: "#5ACAFF",
                    },
                    {
                      offset: 1,
                      color: "#A6E1FF",
                    },
                  ]);
                }
              },
            },
            type: "bar",
            data: this.echartsInfo.xAxisData.slice(0, 5),
          },
        ],
      };
      echart.setOption(option);
    },
  },
};
</script>

<style lang="scss" scoped>
.mtt-echart {
  width: 100%;
  height: 100%;
}
</style>
