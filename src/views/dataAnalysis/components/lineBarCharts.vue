<template>
  <div class="myEchart-div" ref="myEchart4"></div>
</template>

<script>
import { markRaw } from "vue";
export default {
  name: "lineBarChart",
  props: {
    legendData: {
      default() {
        return [];
      },
      type: Array,
    },
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
    debugger;
    let maxT1 =
      this.seriesData[0].length > 0 ? this.getMaxValue(this.seriesData[0]) : 0;
    let maxT2 =
      this.seriesData[1].length > 0 ? this.getMaxValue(this.seriesData[1]) : 0;
    this.max1 = maxT1 > maxT2 ? maxT1 : maxT2;
    this.max2 = this.getMaxValue(this.seriesData[2]);
    this.initLineBarCharts();
    window.addEventListener("resize", () => {
      this.echart.resize();
    });
  },
  data() {
    return {
      echart: null,
      max1: 0,
      max2: 0,
      chartOptions: {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            crossStyle: {
              color: "#999",
            },
          },
        },
        grid: {
          right: "8%",
        },
        legend: {
          itemWidth: 14,
          itemHeight: 14,
          top: "3%",
          textStyle: {
            color: "#84C2FD",
          },
          data: this.legendData,
        },
        xAxis: [
          {
            type: "category",
            axisLabel: {
              color: "#fff",
              interval: 0,
              rotate: 20,
              formatter: function (value) {
                if (value.length > 5) {
                  return value.substring(0, 5) + "...";
                }
                return value;
              },
            },
            axisTick: {
              alignWithLabel: true,
            },
            axisPointer: {
              type: "shadow",
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "#7F7F86",
              },
            },
            // prettier-ignore
            data: this.xAxisData,
          },
        ],
        yAxis: [
          {
            type: "value",
            name: "数量",
            nameTextStyle: {
              color: "#fff",
            },
            position: "left",
            alignTicks: true,
            axisLabel: {
              color: "#fff",
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "#7F7F86",
              },
            },
            splitLine: {
              lineStyle: {
                type: "dashed",
                color: "rgba(142, 198, 235, 0.2)",
              },
            },
            min: 0,
            max: this.max1,
            splitNumber: 5,
            // interval: (this.max1 - 0) / 5,
          },
          {
            type: "value",
            name: "百分比",
            nameTextStyle: {
              color: "#fff",
            },
            position: "right",
            alignTicks: true,
            axisLine: {
              show: true,
              lineStyle: {
                color: "#7F7F86",
              },
            },
            splitLine: {
              lineStyle: {
                type: "dashed",
                color: "rgba(142, 198, 235, 0.2)",
              },
            },
            axisLabel: {
              color: "#fff",
              formatter: "{value} %",
            },
            min: 0,
            max: this.max2,
            splitNumber: 5,
            // interval: (this.max2 - 0) / 5,
          },
        ],
        series: [
          {
            name: this.legendData[0],
            type: "bar",
            itemStyle: {
              color: "#3DB6F9",
            },
            label: {
              show: true,
              position: "top",
              textStyle: {
                color: "#E7E8E9",
              },
            },
            tooltip: {
              valueFormatter: function (value) {
                return value;
              },
            },
            data: this.seriesData[0],
          },
          {
            name: this.legendData[1],
            type: "bar",
            itemStyle: {
              color: "#17AE92",
            },
            label: {
              show: true,
              position: "top",
              textStyle: {
                color: "#E7E8E9",
              },
            },
            tooltip: {
              valueFormatter: function (value) {
                return value;
              },
            },
            data: this.seriesData[1],
          },
          {
            name: this.legendData[2],
            type: "line",
            yAxisIndex: 1,
            symbol: "circle",
            symbolSize: 8, //小圆点的大小
            itemStyle: {
              normal: {
                color: "#63B8FB", //折线点的颜色
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
                lineStyle: {
                  color: "#3989BC",
                },
              },
            },
            tooltip: {
              valueFormatter: function (value) {
                return value + "%";
              },
            },
            data: this.seriesData[2],
          },
        ],
      },
    };
  },
  methods: {
    getMaxValue(arr) {
      const max = Math.max(...arr);
      return Math.ceil(max / 9.5) * 10;
    },
    getMinValue(arr) {
      const min = Math.min(...arr);
      return Math.floor(min / 12) * 10;
    },
    initLineBarCharts() {
      this.echart = markRaw(this.$echarts.init(this.$refs.myEchart4));

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
