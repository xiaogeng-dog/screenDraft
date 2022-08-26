<template>
  <div>
    <div id="treeChart" class="treeChart"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "eCharts",
  data() {
    return {
      treeList: {
        name: "海洋空间及气候态",
        children: [
          {
            name: "海洋空间及气候态",
            children: [
              {
                name: "海洋空间及气候态",
                children: [],
              },
              {
                name: "海洋空间及气候态",
                children: [],
              },
            ],
          },
          {
            name: "海洋学发展历史",
            children: [
              {
                name: "海洋空间及气候态",
                children: [],
              },
              {
                name: "描述科学假说理论之间的差别",
                children: [],
              },
              {
                name: "讨论与海洋相关的早起文明",
                children: [],
              },
              {
                name: "海洋空间及气候态",
                children: [],
              },
              {
                name: "海洋空间及气候态",
                children: [],
              },
              {
                name: "海洋空间及气候态",
                children: [],
              },
            ],
          },
          {
            name: "物理海洋现象",
            children: [
              {
                name: "bubbles泡沫",
                children: [],
              },
              {
                name: "xxxxxxxx毛细波",
                children: [],
              },
              {
                name: "xxxxxxxxxxxxxxxxxxxxs深水波",
                children: [],
              },
              {
                name: "xxxx内波",
                children: [],
              },
              {
                name: "xxxxxxxxxxx中尺度涡",
                children: [],
              },
              {
                name: "zzzzzzz潮汐",
                children: [],
              },
              {
                name: "xxxxx海啸",
                children: [],
              },
              {
                name: "Ei Nino 厄尔尼诺",
                children: [],
              },
              {
                name: "wind-driven circulation 风声环流",
                children: [],
              },
              {
                name: "milankovitch thermo-haline 温盐环流",
                children: [],
              },
            ],
          },
        ],
      },
    };
  },
  mounted() {
    this.showChart();
  },
  methods: {
    showChart() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("treeChart"));

      // 指定图表的配置项和数据
      let option = {
        tooltip: {
          trigger: "item",
          triggerOn: "mousemove",
        },
        series: [
          {
            type: "tree",
            id: 0,
            name: "tree1",
            data: [this.treeList],
            top: "0%",
            left: "5%",
            bottom: "0%",
            right: "50%",
            symbol: "none",
            // height: '780px',222
            edgeShape: "polyline",
            edgeForkPosition: "90%",
            initialTreeDepth: 3,
            lineStyle: {
              // 定义树图边的样式
              width: 2,
              color: "#3376FF",
            },
            label: {
              backgroundColor: "#fff",
              position: "right",
              // verticalAlign: 'middle',
              // align: 'right',
              color: "#3376FF",
              fontFamily: "MicrosoftYaHeiUI",
              fontSize: 16,
            },
            leaves: {
              // 三级
              label: {
                position: "right",
                verticalAlign: "middle",
                align: "left",
              },
            },
            emphasis: {
              focus: "descendant",
            },
            expandAndCollapse: true,
            animationDuration: 550,
            animationDurationUpdate: 750,
          },
        ],
      };
      // 使用刚指定的配置项和数据显示图表。
      option && myChart.setOption(option);
    },
  },
};
</script>

<style>
#treeChart {
  width: 75rem;
  height: 500px;
  padding: 1rem;
  border: 1px solid red;
}
</style>
