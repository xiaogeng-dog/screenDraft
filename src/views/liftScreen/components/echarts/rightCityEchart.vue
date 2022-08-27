<template>
  <div class="rt-container">
    <div class="echart" ref="echartPie"></div>
  </div>
</template>

<script>
export default {
  name: "rightTop",
  props: {
    menusPieInfo: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      echartPie: null,
    };
  },
  mounted() {
    this.initEchart();
    window.addEventListener("resize", () => {
      this.echartPie.resize();
    });
  },
  methods: {
    initEchart() {
      var echartPie = this.$echarts.init(this.$refs.echartPie);
      this.echartPie = echartPie;
      const options = {
        color: ["#2079D4", "#5CD8A7", "#6EC7EE", "#7E62E2"],
        tooltip: {
          trigger: "item",
        },
        graphic: {
          //图形中间文字
          type: "text",
          left: "center",
          top: "center",
          style: {
            text: "电梯分布",
            textAlign: "center",
            fill: "#fff",
            fontSize: 18,
            fontWeight: 600,
          },
        },
        series: [
          {
            name: "菜品",
            type: "pie",
            radius: ["47%", "70%"],

            label: {
              formatter: "{b}",
              fontSize: 16,
              color: "#F6FDFF",
              fontWeight: 400,
            },
            labelLine: {
              smooth: true,
              showAbove: true,
              lineStyle: {
                color: "#F1F7FC",
                width: 2,
                type: "dotted",
              },
            },
            data: this.menusPieInfo,
          },
          {
            name: "decorationTwo",
            type: "pie",
            color: ["rgba(253,223,79,0.53)", "rgba(255,255,255,0)"],
            radius: ["44%", "43%"],
            hoverAnimation: false,
            tooltip: {
              show: false,
            },
            lable: {
              normal: {
                show: false,
              },
              emphasis: {
                show: false,
              },
            },
            labelLine: {
              normal: {
                show: false,
              },
            },
            data: new Array(100).fill(20).map(() => {
              return {
                name: "",
                value: 20,
              };
            }),
          },
        ],
      };
      echartPie.setOption(options);
    },
  },
};
</script>

<style lang="scss" scoped>
.rt-container {
  width: 100%;
  height: 100%;

  .echart {
    width: 100%;
    height: 100%;
    margin: 0 auto;
  }
}
</style>
