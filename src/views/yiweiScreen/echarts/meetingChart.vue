<template>
  <div class="rt-container">
    <div class="echart" ref="echartPie"></div>
  </div>
</template>

<script>
export default {
  name: "nightingaleChart",
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
        color: ["#045ED7", "#008CE5", "#06BBF2", "#2EF0FE", "#042FCA"],
        tooltip: {
          trigger: "item",
        },
        series: [
          {
            name: "健康档案建档类型",
            type: "pie",
            radius: ["45%", "75%"],

            label: {
              formatter: "{b}{c}",
              color: "#fff",
              fontWeight: 400,
              fontSize: "11px",
              fontFamily: "Microsoft YaHei",
            },
            labelLine: {
              length2: "45px",
            },
            data: this.menusPieInfo,
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
