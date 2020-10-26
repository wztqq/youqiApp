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
              backgroundColor: "#999",
            },
          },
        },
        legend: {
          data: this.optionObj.legendData,
          x: "right",
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          width:"90%",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: this.optionObj.xData,
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
        yAxis: [
          {
            name: this.optionObj.yLeftName,
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
                // fontSize:'16'
              },
            },
          },
          // {
          //   name: this.optionObj.yRightName,
          //   type: "value",
          //   axisLine: {
          //     lineStyle: {
          //       color: "#9B9DA1",
          //     },
          //   },
          // },
        ],
        series: [
          {
            name: this.optionObj.legendData[0],
            type: "line",
            symbol: "circle",
            symbolSize: 6,
            itemStyle: {
              normal: {
                color: "#12DFBD",
                lineStyle: {
                  // 系列级个性化折线样式
                  type: "solid",
                  color: "#12DFBD",
                },
              },
            },
            areaStyle: {
              color: "rgba(27,202,201,0.1)",
            },
            data: this.optionObj.seriesLeftData,
          },
          {
            name: this.optionObj.legendData[1],
            type: "line",
            stack: "总量",
            symbol: "circle",
            symbolSize: 6,
            itemStyle: {
              normal: {
                color: "#FBAF5D",
                lineStyle: {
                  // 系列级个性化折线样式
                  type: "solid",
                  color: "#FBAF5D",
                },
              },
            },
            data: this.optionObj.seriesRightData,
          },
        ],
      };
      this.chartBar.clear();
      this.chartBar.setOption(option);
    },
  },
};
</script>