<template>
  <div class="mtt-echart" ref="echart"></div>
</template>

<script>
import chinaMap from "../../../assets/map/js.json";

export default {
  name: "monAdd",
  data() {
    return {
      echart: null
    };
  },
  props: {
    echartsInfo: Object
  },
  mounted() {
    this.initEcharts();
    window.addEventListener("resize", () => {
      this.echart.resize();
    });
  },
  methods: {
    initEcharts() {
      // 动态计算柱形图的高度（定一个max）
      function lineMaxHeight() {
        const maxValue = Math.max(
          ...customerBatteryCityData.map(item => item.value)
        );
        return 0.9 / maxValue;
      }
      // 柱状体的主干
      function lineData() {
        return customerBatteryCityData.map(item => {
          console.log(item);
          return {
            coords: [
              center[item.name],
              [
                center[item.name][0],
                center[item.name][1] + item.value * lineMaxHeight()
              ]
            ]
          };
        });
      }
      // 柱状体的顶部
      function scatterData() {
        return customerBatteryCityData.map(item => {
          return [
            center[item.name][0],
            center[item.name][1] + item.value * lineMaxHeight()
          ];
        });
      }
      // 柱状体的底部
      function scatterData2() {
        return customerBatteryCityData.map(item => {
          return {
            name: item.name,
            value: center[item.name]
          };
        });
      }
      var customerBatteryCityData = [
        { name: "南京市", value: 70 },
        { name: "无锡市", value: 20 },
        { name: "徐州市", value: 70 },
        { name: "常州市", value: 70 },
        { name: "苏州市", value: 120 },
        { name: "南通市", value: 70 },
        { name: "连云港市", value: 70 },
        { name: "淮安市", value: 0 },
        { name: "盐城市", value: 70 },
        { name: "扬州市", value: 10 },
        { name: "镇江市", value: 70 },
        { name: "泰州市", value: 150 },
        { name: "宿迁市", value: 60 }
      ];
      var center = {
        南京市: [118.767413, 32.041544],
        无锡市: [120.301663, 31.574729],
        徐州市: [117.184811, 34.261792],
        常州市: [119.946973, 31.772752],
        苏州市: [120.619585, 31.299379],
        南通市: [120.864608, 32.016212],
        连云港市: [119.178821, 34.600018],
        淮安市: [119.021265, 33.597506],
        盐城市: [120.139998, 33.377631],
        扬州市: [119.421003, 32.393159],
        镇江市: [119.452753, 32.204402],
        泰州市: [119.915176, 32.484882],
        宿迁市: [118.275162, 33.963008]
      };
      this.$echarts.registerMap("js", chinaMap);
      var echart = this.$echarts.init(this.$refs.echart);

      this.echart = echart;
      const option = {
        // backgroundColor: "#131C38",
        tooltip: {
          trigger: "item",
          show: true,
          enterable: true,
          textStyle: {
            fontSize: 20,
            color: "#fff"
          },
          backgroundColor: "rgba(0,2,89,0.8)",
          formatter: "{b}<br />{c}"
        },
        geo: [
          {
            map: "js",
            aspectScale: 0.9,
            roam: false, // 是否允许缩放
            zoom: 1.2, // 默认显示级别
            layoutSize: "95%",
            layoutCenter: ["55%", "50%"],
            itemStyle: {
              normal: {
                areaColor: {
                  type: "linear-gradient",
                  x: 0,
                  y: 400,
                  x2: 0,
                  y2: 0,
                  colorStops: [
                    {
                      offset: 0,
                      color: "rgba(37,108,190,0.3)" // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "rgba(15,169,195,0.3)" // 50% 处的颜色
                    }
                  ],
                  global: true // 缺省为 false
                },
                borderColor: "#4ecee6",
                borderWidth: 1
              },
              emphasis: {
                areaColor: {
                  type: "linear-gradient",
                  x: 0,
                  y: 300,
                  x2: 0,
                  y2: 0,
                  colorStops: [
                    {
                      offset: 0,
                      color: "rgba(37,108,190,1)" // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "rgba(15,169,195,1)" // 50% 处的颜色
                    }
                  ],
                  global: true // 缺省为 false
                }
              }
            },
            emphasis: {
              itemStyle: {
                areaColor: "#0160AD"
              },
              label: {
                show: 0,
                color: "#fff"
              }
            },
            zlevel: 3
          },
          {
            map: "js",
            aspectScale: 0.9,
            roam: false, // 是否允许缩放
            zoom: 1.2, // 默认显示级别
            layoutSize: "95%",
            layoutCenter: ["55%", "50%"],
            itemStyle: {
              normal: {
                borderColor: "rgba(192,245,249,.6)",
                borderWidth: 2,
                shadowColor: "#2C99F6",
                shadowOffsetY: 0,
                shadowBlur: 120,
                areaColor: "rgba(29,85,139,.2)"
              }
            },
            zlevel: 2,
            silent: true
          },
          {
            map: "js",
            aspectScale: 0.9,
            roam: false, // 是否允许缩放
            zoom: 1.2, // 默认显示级别
            layoutSize: "95%",
            layoutCenter: ["55%", "51.5%"],
            itemStyle: {
              // areaColor: '#005DDC',
              areaColor: "rgba(0,27,95,0.4)",
              borderColor: "#004db5",
              borderWidth: 1
            },
            zlevel: 1,
            silent: true
          }
        ],
        series: [
          // map
          {
            geoIndex: 0,
            // coordinateSystem: 'geo',
            showLegendSymbol: true,
            type: "map",
            roam: true,
            label: {
              normal: {
                show: false,
                textStyle: {
                  color: "#fff"
                }
              },
              emphasis: {
                show: false,
                textStyle: {
                  color: "#fff"
                }
              }
            },

            itemStyle: {
              normal: {
                borderColor: "#2ab8ff",
                borderWidth: 1.5,
                areaColor: "#12235c"
              },
              emphasis: {
                areaColor: "#2AB8FF",
                borderWidth: 0,
                color: "red"
              }
            },
            map: "js", // 使用
            data: customerBatteryCityData
            // data: this.difficultData //热力图数据   不同区域 不同的底色
          },
          // 柱状体的主干
          {
            type: "lines",
            zlevel: 5,
            effect: {
              show: false,
              // period: 4, //箭头指向速度，值越小速度越快
              // trailLength: 0.02, //特效尾迹长度[0,1]值越大，尾迹越长重
              // symbol: 'arrow', //箭头图标
              // symbol: imgDatUrl,
              symbolSize: 5 // 图标大小
            },
            lineStyle: {
              width: 20, // 尾迹线条宽度
              color: "rgb(22,255,255, .6)",
              opacity: 1, // 尾迹线条透明度
              curveness: 0 // 尾迹线条曲直度
            },
            label: {
              show: 0,
              position: "end",
              formatter: "245"
            },
            silent: true,
            data: lineData()
          },
          // 柱状体的顶部
          {
            type: "scatter",
            coordinateSystem: "geo",
            geoIndex: 0,
            zlevel: 5,
            label: {
              show: true,
              formatter: function() {
                return `顶部label`;
              },
              position: "top"
            },
            symbol: "circle",
            symbolSize: [20, 10],
            itemStyle: {
              color: "rgb(22,255,255, 1)",
              opacity: 1
            },
            silent: true,
            data: scatterData()
          },
          // 柱状体的底部
          {
            type: "scatter",
            coordinateSystem: "geo",
            geoIndex: 0,
            zlevel: 4,
            label: {
              // 这儿是处理的
              formatter: "{b}",
              position: "bottom",
              color: "#fff",
              fontSize: 12,
              distance: 10,
              show: true
            },
            symbol: "circle",
            symbolSize: [20, 10],
            itemStyle: {
              // color: '#F7AF21',
              color: "rgb(22,255,255, 1)",
              opacity: 1
            },
            silent: true,
            data: scatterData2()
          },
          // 底部外框
          {
            type: "scatter",
            coordinateSystem: "geo",
            geoIndex: 0,
            zlevel: 4,
            label: {
              show: false
            },
            symbol: "circle",
            symbolSize: [40, 20],
            itemStyle: {
              color: {
                type: "radial",
                x: 0.5,
                y: 0.5,
                r: 0.5,
                colorStops: [
                  {
                    offset: 0,
                    color: "rgb(22,255,255, 0)" // 0% 处的颜色
                  },
                  {
                    offset: 0.75,
                    color: "rgb(22,255,255, 0)" // 100% 处的颜色
                  },
                  {
                    offset: 0.751,
                    color: "rgb(22,255,255, 1)" // 100% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "rgb(22,255,255, 1)" // 100% 处的颜色
                  }
                ],
                global: false // 缺省为 false
              },

              opacity: 1
            },
            silent: true,
            data: scatterData2()
          }
        ]
      };
      echart.setOption(option, true);
    }
  }
};
</script>

<style lang="scss" scoped>
.mtt-echart {
  width: 100%;
  height: 100%;
}
</style>
