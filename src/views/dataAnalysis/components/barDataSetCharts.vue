<template>
  <div class="myEchart-div" ref="myEchart1"></div>
</template>

<script>
import { markRaw } from "vue";
export default {
  name: "BarDataSetCharts",
  props: {
    legendData: {
      default() {
        return [];
      },
      type: Array,
    },
    yAxisData: {
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
    this.initBarCharts();
    window.addEventListener("resize", () => {
      this.echart.resize();
    });
  },
  data() {
    return {
      echart: null,
      chartOptions: {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        grid: {
          top: "6%",
          left: "14%",
          right: "7%",
          bottom: "5%",
        },
        legend: {
          itemWidth: 14,
          itemHeight: 14,
          top: "2%",
          textStyle: {
            color: "#84C2FD",
          },
          data: this.legendData,
        },
        xAxis: {
          type: "value", //y轴字体设置
          axisLabel: {
            show: true,
            color: "white",
            fontSize: 12,
          },
          //y轴线设置不显示
          axisLine: {
            show: true,
          },
          //与x轴平行的线样式
          splitLine: {
            show: false,
            lineStyle: {
              color: "#17273B",
              width: 1,
              type: "dashd",
            },
          },
        },
        yAxis: {
          type: "category",
          axisLabel: {
            show: true,
            color: "#84C2FD",
            fontSize: 12,
          },
          inverse: true,
          data: this.yAxisData,
        },
        series: [
          {
            name: "电梯数量",
            type: "bar",
            label: {
              show: true,
              position: "right",
              textStyle: {
                fontSize: "0.18rem",
                color: "#35B2F9",
              },
            },
            itemStyle: {
              color: "#35B2F9",
              borderRadius: [0, 10, 10, 0],
            },
            data: this.seriesData[0],
          },
          {
            name: "故障数量",
            type: "bar",
            label: {
              show: true,
              position: "right",
              textStyle: {
                fontSize: "0.18rem",
                color: "#15CAA5",
              },
            },
            itemStyle: {
              color: "#15CAA5",
              borderRadius: [0, 10, 10, 0],
            },
            data: this.seriesData[1],
          },
          {
            name: "维保单位数量",
            type: "bar",
            label: {
              show: true,
              position: "right",
              textStyle: {
                fontSize: "0.18rem",
                color: "#FFAE23",
              },
            },
            itemStyle: {
              color: "#FFAE23",
              borderRadius: [0, 10, 10, 0],
            },
            data: this.seriesData[2],
          },
          {
            name: "使用单位数量",
            type: "bar",
            label: {
              show: true,
              position: "right",
              textStyle: {
                fontSize: "0.18rem",
                color: "#FF6723",
              },
            },
            itemStyle: {
              color: "#FF6723",
              borderRadius: [0, 10, 10, 0],
            },
            data: this.seriesData[3],
          },
        ],
      },
    };
  },
  methods: {
    initBarCharts() {
      this.echart = markRaw(this.$echarts.init(this.$refs.myEchart1));

      this.echart.setOption(this.chartOptions);
    },
  },
};
</script>

<style scoped>
.myEchart-div {
  width: 100%;
  height: 100%;
}
</style>
