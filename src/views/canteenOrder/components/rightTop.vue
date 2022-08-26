<template>
  <div class="rt-container">
    <body-header :leftImageUrl="leftImageUrl">近7天最受欢迎菜品</body-header>
    <div class="echart" ref="echartPie"></div>
  </div>
</template>

<script>
import bodyHeader from "@/views/canteenOrder/components/bodyHeader";
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
  components: {
    bodyHeader,
  },
  data() {
    return {
      leftImageUrl: require("@/assets/images/ICON-菜品.png"),
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
        color: ["#14A6EF", "#DDD600", "#EE8A55", "#55EE8A"],
        tooltip: {
          trigger: "item",
        },
        graphic: {
          //图形中间文字
          type: "text",
          left: "center",
          top: "center",
          style: {
            text: "菜品类型",
            textAlign: "center",
            fill: "#fff",
            fontSize: 15,
            fontWeight: 600,
          },
        },
        series: [
          {
            name: "菜品",
            type: "pie",
            radius: ["47%", "70%"],

            label: {
              formatter: "{b}\n{c}",
              color: "#fff",
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
  height: 45%;
  background: url("~@/assets/images/边框背景-01(1).png") no-repeat;
  background-size: 100% 100%;
  .echart {
    width: 95%;
    height: 90%;
    margin: 0 auto;
  }
}
</style>
