<template>
  <div class="myEchart-div" ref="myEchart3"></div>
</template>

<script>
import { markRaw } from "vue";
export default {
  name: "pieChart",
  props: {
    pieChartData: {
      default() {
        return [];
      },
      type: Array,
    },
  },
  mounted() {
    this.initPieCharts();
    window.addEventListener("resize", () => {
      this.echart.resize();
    });
  },
  data() {
    return {
      echart: null,
      chartOptions: {
        tooltip: {
          trigger: "item",
        },
        legend: {
          orient: "horizontal",
          icon: "circle",
          bottom: "14%",
          textStyle: {
            color: "#E7E8E9",
          },
        },
        series: [
          {
            top: 0,
            name: "场所类型统计",
            type: "pie",
            radius: "50%",
            center: ["50%", "35%"],
            label: {
              color: "#E7E8E9",
            },
            data: this.pieChartData,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      },
    };
  },
  methods: {
    initPieCharts() {
      if (this.echart) {
        this.echart.dispose();
      }
      this.echart = this.$echarts.init(this.$refs.myEchart3);

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
