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
          // formatter: "{a} <br/>{b}: {c}亿立方米",
          // formatter: function (params) {
          //   var str = "";
          //   for (var i = 0; i < params.length; i++) {
          //     if (params[i].seriesName === "日供气量(亿)") {
          //       str +=
          //         "<p>" +
          //         params[i].seriesName +
          //         ":" +
          //         params[i].value +
          //         "亿立方米" +
          //         "</p >";
          //     } else if (params[i].seriesName === "基准值") {
          //       str +=
          //         "<p>" +
          //         params[i].seriesName +
          //         ":" +
          //         params[i].value +
          //         "亿立方米" +
          //         "</p >";
          //     }
          //   }
          //   return str;
          // },
        },
        legend: {
          itemWidth: 10,
          itemHeight: 6,
          data: this.optionObj.legendData,
          x: "right",
          textStyle: {
            color: "#9C9DA2",
            // fontSize: ""
          },
        },
        xAxis: {
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
            rotate: 30,
          },
          // boundaryGap: false,
          data: this.optionObj.xData,
        },
        yAxis: [
          {
            type: "value",
            name: this.optionObj.yLeftName,
            min: this.optionObj.leftMin,
            max: this.optionObj.leftMax,
            interval: this.optionObj.leftInterval,
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
            name: this.optionObj.legendData[0],
            data: this.optionObj.seriesLeftData,
            type: "bar",
            barWidth: this.optionObj.barWidth,
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "#39F8FF" },
                { offset: 1, color: "#45BBFF" },
              ]),
            },
            markLine: {
              symbol:"none",
              name: "基准值",
              silent: true,
              lineStyle: {
                normal: {
                  color: "#01fef9", // 这儿设置安全基线颜色
                },
              },
              data: [
                {
                  
                  silent:false,
                  lineStyle:{               //警戒线的样式  ，虚实  颜色
                      type:"solid",
                      color:"#f9ae64"
                  },
                  yAxis: this.optionObj.warnData,
                },
              ],
              label: {
                normal: {
                  formatter: ''           // 这儿设置安全基线
                }
              },
            },
          },
          {
            name: this.optionObj.legendData[1],
            type: "line",
            smooth: true,
            symbolSize: this.optionObj.symbolSize,
            data: "",
            lineStyle: {
              color: "#FBAF5D",
              width: this.optionObj.lineWidth,
            },
            color: "#FBAF5D",
          },
        ],
      };
      this.chartBar.clear();
      this.chartBar.setOption(option);
    },
  },
};
</script>