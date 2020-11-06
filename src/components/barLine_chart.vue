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
      // optionObj: {
      //   legendData: ["天然气月产量", "同比变化"],
      //   yLeftUnit: "亿立方米",
      //   yRightUnit: "%",
      //   xData: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
      //   seriesLeftData: [6, 13, 18, 13, 13, 18, 13, 9, 13, 18, 13, 9],
      //   seriesRightData: [-0.5, 1, 2, 0.9, 0.9, 1.9, 0.9, 0.85, 1, 2.2, 1.4, 0.3],
      //   barWidth: 10,
      //   lineWidth: 2,
      //   symbolSize: 8,
      //   leftMin: 0,
      //   leftMax: 25,
      //   leftInterval: 5,
      //   rightMin: -2,
      //   rightMax: 3,
      //   rightInterval: 1
      // },
    },
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
      this.chartBar = echarts.init(this.$refs.chart);
      let yLeftName = this.optionObj.legendData[0]
      let yRightName = this.optionObj.legendData[1]
      let yLeftUnit = this.optionObj.yLeftUnit
      let yRightUnit = this.optionObj.yRightUnit
      let option = {
        tooltip: {
          trigger: "axis",
          formatter(params) {
            if(params.length && params.length > 1) {
              return  params[0].name + '</br>' + params[0].seriesName + ':' + params[0].value + yLeftUnit + '</br>' +
                      params[1].seriesName + ':' +
                      params[1].value + yRightUnit
            }else if(params.length === 1 && params[0].seriesName === yLeftName) {
              return  params[0].name + '</br>' + params[0].seriesName + ':' + params[0].value + yLeftUnit
            }else if(params.length === 1 && params[0].seriesName === yRightName) {
              return  params[0].name + '</br>' + params[0].seriesName + ':' + params[0].value + yRightUnit
            }
          }
        },
        legend: {
          itemWidth: 15,
          itemHeight: 10,
          data: this.optionObj.legendData,
          x: "right",
          textStyle: {
            color: "#383838",
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
              color: "#383838",
            },
          },
          axisLabel: {
            // 坐标轴label样式
            textStyle: {
              color: "#383838",
            },
          },
          data: this.optionObj.xData,
        },
        yAxis: [
          {
            type: "value",
            name: this.optionObj.yLeftUnit,
            min: this.optionObj.leftMin,
            max: this.optionObj.leftMax,
            interval: this.optionObj.leftInterval,
            axisTick: {
              show: false, // 去除坐标轴间隔
            },
            axisLine: {
              // 坐标轴样式
              lineStyle: {
                color: "#383838",
              },
            },
            axisLabel: {
              // 坐标轴label样式
              textStyle: {
                color: "#383838",
              },
            },
          },
          {
            type: "value",
            name: this.optionObj.yRightUnit,
            min: this.optionObj.rightMin,
            max: this.optionObj.rightMax,
            interval: this.optionObj.rightInterval,
            axisTick: {
              show: false, // 去除坐标轴间隔
            },
            axisLine: {
              // 坐标轴样式
              lineStyle: {
                color: "#383838",
              },
            },
            axisLabel: {
              // 坐标轴label样式
              textStyle: {
                color: "#383838",
                // fontSize:'16'
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
          },
          {
            name: this.optionObj.legendData[1],
            type: "line",
            yAxisIndex: 1,
            smooth: true,
            symbolSize: this.optionObj.symbolSize,
            data: this.optionObj.seriesRightData,
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