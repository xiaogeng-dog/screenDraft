<template>
  <div class="mtt-echart" ref="echart"></div>
</template>

<script>
export default {
  name: "speciallistChart",

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
            return value + "万";
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
            formatter: (value, index) => {
              if (value == 0) {
                return value;
              } else {
                return value + "万";
              }
            },
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
            label: {
              show: true,
              formatter: "{c}万",
              color: "#FFFFFF",
              position: "top",
            },
            itemStyle: {
              // 修改柱子圆角
              barBorderRadius: 5,
              color: new this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [
                {
                  offset: 1,
                  color: "#54C7EA",
                },
                {
                  offset: 0,
                  color: "#3462BF",
                },
              ]),
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
