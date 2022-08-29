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
          valueFormatter: (value) => {
            return value;
          },
        },
        grid: {
          top: "15%",
          left: "12%",
          right: "5%",
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
            fontSize: 12,
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
            name: "故障",
            data: this.echartsInfo.dataInfo,
            type: "line",
            smooth: true,
            lineStyle: {
              color: "#87C1FF",
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
