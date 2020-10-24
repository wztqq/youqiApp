<template>
  <div style="width: 100%; height: 100%" :id="id"></div>
</template>
<script>
import echarts from "echarts";
export default {
  name: "barLineEchart",
  props: {
    id: {
      type: String,
      default: "chart",
    },
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
  created: function () {
    this.$nextTick(function () {
      this.getBarOption();
    });
  },
  watch: {
    id() {
      this.$nextTick(function () {
        this.getBarOption();
      });
    },
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
      this.chartBar = echarts.init(document.getElementById(this.id));
      let option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985",
            },
          },
        },
        legend: {
          right: 10,
          textStyle: {
            color: "#9C9DA2",
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
            stack: "总量",
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
            data: this.optionObj.seriesData2,
          },
          {
            name: this.optionObj.seriesName2,
            type: "line",
            stack: "总量",
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
            data: this.optionObj.seriesData1,
          },
          
        ],
      };
      this.chartBar.clear();
      this.chartBar.setOption(option);
    },
  },
};
</script>