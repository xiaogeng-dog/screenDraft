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
        legend: {
          show: false,
        },
        grid: {
          left: "22%",
          right: "16%",
          // containLabel: true,
          top: "5%",
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
              fontSize: 12,
              // fontWeight: "blod",
              align: "left",
              color: "#D5EAFF",
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
              fontSize: 12,
              color: "#79D6FF",
              formatter: (val) => {
                return parseInt(val).toLocaleString();
              },
            },
          },
        ],
        series: [
          {
            z: 2,
            name: "故障",
            type: "bar",
            barWidth: 8,
            zlevel: 1,
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
