<template>
  <div :id="id" style="width: 100%; height: 100%"></div>
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
  mounted: function () {
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
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        legend: {
          itemWidth: 10,
          itemHeight: 6,
          data: this.optionObj.legendData,
          x: "right",
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "value",
            splitLine: {
              show: false,
            },
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
        yAxis: [
          {
            type: "category",
            name: this.optionObj.yName,
            axisTick: {
              show: false,
            },
            data: this.optionObj.yData,
            axisLabel: {
              formatter: "{value}",
            },
            splitLine: {
              show: false,
            },
            axisLine: {
              lineStyle: {
                color: "#9B9DA1",
              },
            },
          },
        ],
        series: [
          {
            name: this.optionObj.seriesName,
            type: "bar",
            barWidth: 10,
            data: this.optionObj.seriesData,
            itemStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [
                  { offset: 0, color: "#4572FF" }, //柱图渐变色
                  { offset: 1, color: "#65FCFA" }, //柱图渐变色
                ]),
              },
            },
            showBackground: true,
            backgroundStyle: {
              color: "#f7f7f7",
            },
          },
        ],
      };
      this.chartBar.clear();
      this.chartBar.setOption(option);
    },
  },
};
</script>