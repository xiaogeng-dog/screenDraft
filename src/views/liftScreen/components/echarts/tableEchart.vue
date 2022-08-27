<template>
  <div class="mtt-echart" ref="echart"></div>
</template>

<script>
export default {
  name: "tableEchart",

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
    echartsInfo: Object,
  },
  watch: {
    // echartsInfo() {},
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
        legend: {
          show: false,
        },
        grid: {
          left: "23%",
          right: "16%",
          // containLabel: true,
          top: 0,
          bottom: 0,
        },
        xAxis: {
          show: false,
          type: "value",
        },
        yAxis: [
          {
            type: "category",
            inverse: true,
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisPointer: {
              label: {
                show: true,
                margin: 30,
              },
            },
            data: this.echartsInfo.map((item) => item.name),
            axisLabel: {
              margin: 80,
              fontSize: 14,
              // fontWeight: "blod",
              align: "left",
              color: "#85C3FF",
              rich: {
                a1: {
                  width: 16,
                  height: 16,
                  align: "center",
                  backgroundColor: {
                    image: this.echartImg.first,
                  },
                },
                a2: {
                  width: 16,
                  height: 16,
                  align: "center",
                  backgroundColor: {
                    image: this.echartImg.second,
                  },
                },
                a3: {
                  width: 16,
                  height: 16,
                  align: "center",
                  backgroundColor: {
                    image: this.echartImg.third,
                  },
                },
                b: {
                  color: "#D3E6F8",
                },
              },
              formatter: (params) => {
                var index = this.echartsInfo
                  .map((item) => item.name)
                  .indexOf(params);
                index = index + 1;
                if (index - 1 < 3) {
                  return ["{a" + index + "|}" + "  " + params].join("\n");
                } else {
                  return [" {b|" + index + "}" + "   " + params].join("\n");
                }
              },
            },
          },
          {
            type: "category",
            inverse: true,
            axisTick: "none",
            axisLine: "none",
            show: true,
            data: this.echartsInfo.map((item) => item.num),
            axisLabel: {
              show: true,
              fontSize: 14,
              color: "#D3E6F8",
              formatter: (val) => {
                return parseInt(val).toLocaleString();
              },
            },
          },
        ],
        series: [
          {
            z: 2,
            name: "保有量",
            type: "bar",
            barWidth: 10,
            zlevel: 1,
            showBackground: true,
            backgroundStyle: {
              borderRadius: 5,
              color: "#313F58",
            },
            data: this.echartsInfo.map((item, i) => {
              return {
                value: item.num,
                itemStyle: {
                  color: "#18A4FA",
                },
              };
            }),
            itemStyle: {
              barBorderRadius: 5,
            },
            label: {
              show: false,
              position: "right",
              color: "#D3E6F8",
              fontSize: 14,
              offset: [10, 0],
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
.mtt-echart {
  width: 100%;
  height: 100%;
}
</style>
