<template>
  <div ref="chart" style="width: 100%; height: 100%"></div>
</template>
<script>
import echarts from "echarts";
export default {
  name: "barLineEchart",
  props: {
    optionObj: {
      type: Object,
      default: () => {},
    },
    /*
      optionObj:{
        title:'',
        legendData:['总面积'], //legend.data以及series.name
        yLeftName:'单位：个',//y轴单位名称
        yRightName:'单位：个',//y轴单位名称
        xData:[], //x轴
        seriesLeftData:[],//series数据
        seriesRightData:[],//series数据
        barWidth:10,//柱子宽度
        lineWidth:2,//折线宽度
        symbolSize:2,//折线折点大小,
        leftMin: 0,
        leftMax: 25,
        leftInterval: 5,
        rightMin: 0,
        rightMax: 250,
        rightInterval: 50
      }
    */
  },
  data() {
    return {
      chartBar: null,
    };
  },
  mounted: function () {
    this.$nextTick(function () {
      this.getBarOption();
    });
  },
  watch: {
    optionObj: {
      handler: function (newVal, oldVal) {
        if (newVal) {
          this.getBarOption();
        }
      },
      deep: true,
    },
  },
  methods: {
    getBarOption() {
      this.chartBar = null;
      // this.chartBar = echarts.init(document.getElementById(this.id));
      this.chartBar = echarts.init(this.$refs.chart);
      let option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985",
            },
          },
          formatter(params) {
            if (params.length && params.length > 1) {
              return (
                params[0].name +
                "</br>" +
                params[0].seriesName +
                ":" +
                params[0].value +
                "亿立方米" +
                "</br>" +
                params[1].seriesName +
                ":" +
                params[1].value +
                "亿立方米"
              );
            } else if (params.length === 1) {
              return (
                params[0].name +
                "</br>" +
                params[0].seriesName +
                ":" +
                params[0].value +
                "亿立方米"
              );
            }
          },
        },
        legend: {
          right: 10,
          textStyle: {
            color: "#383838",
            // fontSize: ""
          },
          // itemWidth: 10,
          // itemHeight: 10,
          data: this.optionObj.legendData,
        },
        xAxis: [
          {
            type: "category",
            axisTick: {
              show: false, // 去除坐标轴间隔
            },
            axisLine: {
              // 坐标轴样式
              lineStyle: {
                color: "#DADADA",
              },
            },
            axisLabel: {
              // 坐标轴label样式
              textStyle: {
                color: "#DADADA",
              },
              rotate: 30
            },
            boundaryGap: false,
            data: this.optionObj.xData,
          },
        ],
        yAxis: [
          {
            name: this.optionObj.yName,
            type: "value",
            axisTick: {
              show: false, // 去除坐标轴间隔
            },
            axisLine: {
              // 坐标轴样式
              lineStyle: {
                color: "#DADADA",
              },
            },
            axisLabel: {
              // 坐标轴label样式
              textStyle: {
                color: "#DADADA",
              },
            },
          },
        ],
        series: [
          {
            name: this.optionObj.seriesName1,
            type: "line",
            symbol: "circle",
            smooth: true,
            symbolSize: 6,
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                
                { offset: 0, color: "rgba(41,145,244, 0.7" },
                { offset: 1, color: "rgba(41,145,244, 0.1)" },
              ]),
            },
            lineStyle: {
              color: "#2991f4",
              width: 2,
            },
            color: "#2991f4",
            data: this.optionObj.seriesData1,
          },
          {
            name: this.optionObj.seriesName2,
            type: "line",
            smooth: true,
            symbol: "circle",
            symbolSize: 6,
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "rgba(247,200,87, 0.7)" },
                { offset: 1, color: "rgba(247,200,87, 0.1)" },
              ]),
            },
            lineStyle: {
              color: "#f8c94b",
              width: 2,
            },
            color: "#f8c94b",
            data: this.optionObj.seriesData2,
          },
          
        ],
      };
      this.chartBar.clear();
      this.chartBar.setOption(option);
      // window.addEventListener("resize", function() {
      //   this.chartBar.resize();  //页面大小变化后Echarts也更改大小
      // });
    },
  },
  // destroyed() {
  //   window.removeEventListener("resize", () => {
  //     this.chartBar.resize();
  //   })
  // }
};
</script>