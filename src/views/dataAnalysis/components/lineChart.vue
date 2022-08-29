<template>
  <div class="myEchart-div" ref="myEchart2"></div>
</template>

<script>
import { markRaw } from "vue";
export default {
  name: "lineBarChart",
  props: {
    xAxisData: {
      default() {
        return [];
      },
      type: Array,
    },
    seriesData: {
      default() {
        return [];
      },
      type: Array,
    },
  },
  mounted() {
    this.initLineCharts();
    window.addEventListener("resize", () => {
      this.echart.resize();
    });
  },
  data() {
    return {
      chartOptions: {
        tooltip: {
          trigger: "axis",
        },
        grid: {
          top: "15%",
          left: "10%",
          right: "7%",
          bottom: "16%",
        },
        legend: {
          icon: "circle",
          top: "5%",
          right: "10%",
          textStyle: {
            color: "#E7E8E9",
          },
        },
        xAxis: {
          type: "category",
          data: this.xAxisData,
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
            color: "#FFFFFF",
            interval: 0, //使x轴文字显示全
          },
        },
        yAxis: {
          type: "value",
          name: "数量",
          nameTextStyle: {
            color: "#FFF",
          },
          axisLabel: {
            color: "#FFFFFF",
          },
          splitLine: {
            lineStyle: {
              type: "dashed",
              color: "rgba(142, 198, 235, 0.2)",
            },
          },
          splitNumber: 5,
          minInterval: 1,
        },
        series: [
          {
            name: "电梯总量",
            data: this.seriesData,
            type: "line",
            smooth: true,
            lineStyle: {
              color: "#87C1FF",
            },
            areaStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 1,
                    color: "rgba(23,153,229,0)", // 0% 处的颜色
                  },
                  {
                    offset: 0,
                    color: "#46BAFF", // 100% 处的颜色
                  },
                ],
                global: false, // 缺省为 false
              },
            },
            symbol: "none",
          },
        ],
      },
    };
  },
  methods: {
    initLineCharts() {
      this.echart = markRaw(this.$echarts.init(this.$refs.myEchart2));
      this.echart.setOption(this.chartOptions);
    },
  },
};
</script>

<style>
.myEchart-div {
  width: 100%;
  height: 100%;
}
</style>
