<template>
  <div class="mtt-echart" ref="echart"></div>
</template>

<script>
export default {
  name: "speciallistChart",

  data() {
    return {
      echart: null,
      myRate1: 88,
    };
  },
  props: {
    echartsInfo: Object,
  },
  mounted() {
    document.fonts.ready.then(() => {
      this.initEcharts();
      window.addEventListener("resize", () => {
        this.echart.resize();
      });
    });
  },
  methods: {
    initEcharts() {
      var echart = this.$echarts.init(this.$refs.echart);
      this.echart = echart;
      const option = {
        title: [],
        tooltip: {
          show: true,
        },
        series: [
          {
            type: "gauge",
            center: ["50%", "75%"], // 默认全局居中
            radius: "50%",
            clockwise: true,
            // 轴线
            axisLine: {
              show: false,
            },
            progress: {
              show: false,
              width: 10,
            },
            axisTick: {
              show: false,
              lineStyle: {
                color: "#03B7C9",
                width: 1,
              },
              length: -15,
              splitNumber: 10,
            },
            // 分割线
            splitLine: {
              show: false,
              length: -20,
              lineStyle: {
                color: "#03B7C9",
              },
            },
            axisLabel: {
              show: false,
              distance: -20,
              textStyle: {
                color: "#03B7C9",
                fontSize: "15",
                fontWeight: "bold",
              },
            },
            pointer: {
              //仪表盘指针
              show: 0,
            },
            title: {
              offsetCenter: [0, "75%"],
              color: "#FFFFFF",
              fontStyle: "normal",
              fontFamily: "screenFont",
              fontWeight: 400,
              fontSize: 14,
            },
            detail: {
              show: true,
              color: "#fff",
              fontWeight: 400,
              fontFamily: "Arial",
              fontSize: 20,
              offsetCenter: [0, 0],
              formatter: function (value) {
                return value + "%";
              },
            },
            data: [
              {
                name: "门诊预约率",
                value: this.myRate1,
              },
            ],
          },
          {
            type: "gauge",
            center: ["28%", "38%"], // 默认全局居中
            radius: "50%",
            clockwise: true,
            // 轴线
            axisLine: {
              show: false,
            },
            progress: {
              show: false,
              width: 10,
            },
            axisTick: {
              show: false,
              lineStyle: {
                color: "#03B7C9",
                width: 1,
              },
              length: -15,
              splitNumber: 10,
            },
            // 分割线
            splitLine: {
              show: false,
              length: -20,
              lineStyle: {
                color: "#03B7C9",
              },
            },
            axisLabel: {
              show: false,
              distance: -20,
              textStyle: {
                color: "#03B7C9",
                fontSize: "15",
                fontWeight: "bold",
              },
            },
            pointer: {
              //仪表盘指针
              show: 0,
            },
            title: {
              offsetCenter: [0, "75%"],
              color: "#FFFFFF",
              fontStyle: "normal",
              fontFamily: "screenFont",
              fontWeight: 400,
              fontSize: 14,
            },
            detail: {
              show: true,
              color: "#fff",
              fontWeight: 400,
              fontFamily: "Arial",
              fontSize: 20,
              offsetCenter: [0, 0],
              formatter: function (value) {
                return value + "%";
              },
            },
            data: [
              {
                name: "县域就诊率",
                value: this.myRate1,
              },
            ],
          },
          {
            type: "gauge",
            center: ["72%", "38%"], // 默认全局居中
            radius: "50%",
            clockwise: true,
            // 轴线
            axisLine: {
              show: false,
            },
            progress: {
              show: false,
              width: 10,
            },
            axisTick: {
              show: false,
              lineStyle: {
                color: "#03B7C9",
                width: 1,
              },
              length: -15,
              splitNumber: 10,
            },
            // 分割线
            splitLine: {
              show: false,
              length: -20,
              lineStyle: {
                color: "#03B7C9",
              },
            },
            axisLabel: {
              show: false,
              distance: -20,
              textStyle: {
                color: "#03B7C9",
                fontSize: "15",
                fontWeight: "bold",
              },
            },
            pointer: {
              //仪表盘指针
              show: 0,
            },
            title: {
              offsetCenter: [0, "75%"],
              color: "#FFFFFF",
              fontStyle: "normal",
              fontFamily: "screenFont",
              fontWeight: 400,
              fontSize: 14,
            },
            detail: {
              show: true,
              color: "#fff",
              fontWeight: 400,
              fontFamily: "Arial",
              fontSize: 20,
              offsetCenter: [0, 0],
              formatter: function (value) {
                return value + "%";
              },
            },
            data: [
              {
                name: "基层就诊率",
                value: this.myRate1,
              },
            ],
          },
        ],
      };
      echart.setOption(option);
    },
  },
};
</script>

<style lang="scss" scoped>
@font-face {
  font-family: screenFont;
  src: url(../../../assets/font/YouSheBiaoTiHei.ttf);
}
.mtt-echart {
  width: 100%;
  height: 100%;
  background: url("~@/assets/imgs/table.png") no-repeat;
  background-size: 70% 100%;
  background-position: center center;
  position: relative;
}
</style>
