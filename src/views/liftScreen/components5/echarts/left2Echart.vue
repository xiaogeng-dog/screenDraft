<template>
  <div class="mtt-echart" ref="echart"></div>
</template>

<script>
export default {
  name: "monAdd",
  data() {
    return {
      echart: null,
    };
  },
  props: {
    echartsInfo: Object,
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
          valueFormatter: (value) => {
            return value + "间";
          },
        },
        grid: {
          top: "20%",
          left: "10%",
          right: "7%",
          bottom: "14%",
        },
        xAxis: {
          type: "category",
          data: this.echartsInfo.xAxisData,
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
          },
        },
        yAxis: {
          type: "value",
          splitNumber: 2,
          axisLabel: {
            color: "#FFFFFF",
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
            name: "新增电梯",
            data: this.echartsInfo.dataInfo,
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
