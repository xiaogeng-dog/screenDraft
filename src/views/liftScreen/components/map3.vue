<template>
  <div class="mtt-echart" ref="echart"></div>
</template>

<script>
import chinaMap from "../../../assets/map/china1.json";

export default {
  name: "monAdd",
  data() {
    return {
      echart: null,
      liftNum: [
        { name: "北京", value: 199 },
        { name: "天津", value: 42 },
        { name: "河北", value: 102 },
        { name: "山西", value: 81 },
        { name: "内蒙古", value: 47 },
        { name: "辽宁", value: 67 },
        { name: "吉林", value: 82 },
        { name: "黑龙江", value: 123 },
        { name: "上海", value: 24 },
        { name: "江苏", value: 92 },
        { name: "浙江", value: 114 },
        { name: "安徽", value: 109 },
        { name: "福建", value: 116 },
        { name: "江西", value: 91 },
        { name: "山东", value: 119 },
        { name: "河南", value: 137 },
        { name: "湖北", value: 116 },
        { name: "湖南", value: 114 },
        { name: "重庆", value: 91 },
        { name: "四川", value: 125 },
        { name: "贵州", value: 62 },
        { name: "云南", value: 83 },
        { name: "西藏", value: 9 },
        { name: "陕西", value: 80 },
        { name: "甘肃", value: 56 },
        { name: "青海", value: 10 },
        { name: "宁夏", value: 18 },
        { name: "新疆", value: 180 },
        { name: "广东", value: 123 },
        { name: "广西", value: 59 },
        { name: "海南", value: 14 }
      ],
      // 省份行政中心坐标
      geoCoordMap: {
        台湾: [121.5135, 25.0308],
        黑龙江: [127.9688, 45.368],
        内蒙古: [110.3467, 41.4899],
        吉林: [125.8154, 44.2584],
        北京: [116.4551, 40.2539],
        辽宁: [123.1238, 42.1216],
        河北: [114.4995, 38.1006],
        天津: [117.4219, 39.4189],
        山西: [112.3352, 37.9413],
        陕西: [109.1162, 34.2004],
        甘肃: [103.5901, 36.3043],
        宁夏: [106.3586, 38.1775],
        青海: [101.4038, 36.8207],
        新疆: [87.9236, 43.5883],
        西藏: [91.11, 29.97],
        四川: [103.9526, 30.7617],
        重庆: [108.384366, 30.439702],
        山东: [117.1582, 36.8701],
        河南: [113.4668, 34.6234],
        江苏: [118.8062, 31.9208],
        安徽: [117.29, 32.0581],
        湖北: [114.3896, 30.6628],
        浙江: [119.5313, 29.8773],
        福建: [119.4543, 25.9222],
        江西: [116.0046, 28.6633],
        湖南: [113.0823, 28.2568],
        贵州: [106.6992, 26.7682],
        云南: [102.9199, 25.4663],
        广东: [113.12244, 23.009505],
        广西: [108.479, 23.1152],
        海南: [110.3893, 19.8516],
        上海: [121.4648, 31.2891]
      },
      colorList: [
        "#4ab2e5",
        "#4fb6d2",
        "#52b9c7",
        "#5abead",
        "#f34e2b",
        "#f56321",
        "#f56f1c",
        "#f58414",
        "#f58f0e",
        "#f5a305",
        "#e7ab0b",
        "#dfae10",
        "#d5b314",
        "#c1bb1f",
        "#b9be23",
        "#a6c62c",
        "#96cc34",
        "#4ab2e5",
        "#4fb6d2",
        "#52b9c7",
        "#5abead",
        "#f5a305",
        "#e7ab0b",
        "#dfae10",
        "#d5b314",
        "#c1bb1f",
        "#b9be23",
        "#a6c62c",
        "#96cc34"
      ]
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
    convertData(data) {
      var res = [];
      for (var i = 0; i < data.length; i++) {
        var geoCoord = this.geoCoordMap[data[i].name];
        if (geoCoord) {
          res.push({
            name: data[i].name,
            value: geoCoord.concat(data[i].value),
            itemStyle: { color: this.colorList[i] }
          });
        }
      }
      return res;
    },
    //  飞线的主干
    lineData() {
      let lineArret = [];
      this.liftNum.map((item, index) => {
        lineArret.push({
          coords: [this.geoCoordMap[item.name], this.geoCoordMap["江苏"]],
          lineStyle: { color: this.colorList[index] }
        });
      });
      return lineArret;
    },
    initEcharts() {
      this.$echarts.registerMap("china", chinaMap);
      var echart = this.$echarts.init(this.$refs.echart);

      this.echart = echart;
      const option = {
        tooltip: {
          trigger: "item",
          formatter: function(params) {
            console.log(params);
            return params.name + " : " + params.value[2];
          }
        },
        geo: {
          map: "china",
          aspectScale: 0.75, //长宽比
          zoom: 1.1,
          roam: false,
          itemStyle: {
            normal: {
              areaColor: {
                type: "radial",
                x: 0.5,
                y: 0.5,
                r: 0.8,
                colorStops: [
                  {
                    offset: 0,
                    color: "#09132c" // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "#274d68" // 100% 处的颜色
                  }
                ],
                globalCoord: true // 缺省为 false
              },
              shadowColor: "rgb(58,115,192)",
              shadowOffsetX: 10,
              shadowOffsetY: 11
            },
            emphasis: {
              areaColor: "#2AB8FF",
              borderWidth: 0,
              color: "green",
              label: {
                show: false
              }
            }
          },
          regions: [
            {
              name: "南海诸岛",
              itemStyle: {
                areaColor: "rgba(0, 10, 52, 1)",

                borderColor: "rgba(0, 10, 52, 1)",
                normal: {
                  opacity: 0,
                  label: {
                    show: false,
                    color: "#009cc9"
                  }
                }
              }
            }
          ]
        },
        series: [
          {
            type: "map",
            roam: false,
            label: {
              normal: {
                show: true,
                textStyle: {
                  color: "#1DE9B6"
                }
              },
              emphasis: {
                textStyle: {
                  color: "rgb(183,185,14)"
                }
              }
            },

            itemStyle: {
              normal: {
                borderColor: "rgb(147, 235, 248)",
                borderWidth: 1,
                areaColor: {
                  type: "radial",
                  x: 0.5,
                  y: 0.5,
                  r: 0.8,
                  colorStops: [
                    {
                      offset: 0,
                      color: "#09132c" // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "#274d68" // 100% 处的颜色
                    }
                  ],
                  globalCoord: true // 缺省为 false
                }
              },
              emphasis: {
                areaColor: "rgb(46,229,206)",
                //    shadowColor: 'rgb(12,25,50)',
                borderWidth: 0.1
              }
            },
            zoom: 1.1,
            //     roam: false,
            map: "china" //使用
            // data: this.liftNum, //热力图数据   不同区域 不同的底色
          },
          {
            type: "effectScatter",
            coordinateSystem: "geo",
            showEffectOn: "render", //配置何时显示特效。'render' 绘制完成后显示特效。'emphasis' 高亮（hover）的时候显示特效。
            zlevel: 1,
            rippleEffect: {
              period: 15,
              scale: 5,
              brushType: "stroke"
            },
            hoverAnimation: true,
            label: {
              formatter: "{b}",
              position: "right",
              offset: [15, 0],
              color: "#1DE9B6",
              show: false
            },
            itemStyle: {
              color: function(value) {
                //随机颜色
                return (
                  "#" +
                  (
                    "00000" +
                    ((Math.random() * 16777215 + 0.5) >> 0).toString(16)
                  ).slice(-6)
                );
              },
              shadowBlur: 10,
              shadowColor: "#333"
            },
            symbolSize: 10,
            data: this.convertData(this.liftNum)
          },
          //地图线的动画效果
          {
            type: "lines",
            zlevel: 2,
            effect: {
              show: true,
              period: 4, //箭头指向速度，值越小速度越快
              trailLength: 0.4, //特效尾迹长度[0,1]值越大，尾迹越长重
              symbol: "arrow", //箭头图标
              symbolSize: 7 //图标大小
            },
            lineStyle: {
              normal: {
                color: function(value) {
                  //随机颜色
                  [
                    "#f21347",
                    "#f3243e",
                    "#f33736",
                    "#f34131",
                    "#f34e2b",
                    "#f56321",
                    "#f56f1c",
                    "#f58414",
                    "#f58f0e",
                    "#f5a305",
                    "#e7ab0b",
                    "#dfae10",
                    "#d5b314",
                    "#c1bb1f",
                    "#b9be23",
                    "#a6c62c",
                    "#96cc34",
                    "#89d23b",
                    "#7ed741",
                    "#77d64c",
                    "#71d162",
                    "#6bcc75",
                    "#65c78b",
                    "#5fc2a0",
                    "#5abead",
                    "#52b9c7",
                    "#4fb6d2",
                    "#4ab2e5"
                  ];
                  return (
                    "#" +
                    (
                      "00000" +
                      ((Math.random() * 16777215 + 0.5) >> 0).toString(16)
                    ).slice(-6)
                  );
                },
                width: 1, //线条宽度
                opacity: 0.1, //尾迹线条透明度
                curveness: 0.3 //尾迹线条曲直度
              }
            },
            data: this.lineData()
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
