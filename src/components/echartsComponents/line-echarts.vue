<template>
  <div class="echarts" :id="echartId"></div>
</template>
<script>
export default {
  props: {
    // 图表元素id名
    echartId: {
      type: String,
      default: () => {
        return "222";
      },
    },
    // 图表线的颜色
    echartColor: {
      type: Array,
      default: () => {
        return ["#73A0FA", "#73DEB3", "#FFB761"];
      },
    },
    // 图表legend信息
    legendData: {
      type: Array,
      default: () => {
        return [];
      },
    },
    // 图表数据
    seriesData: {
      type: Array,
      default: () => {
        return [];
      },
    },
    // 图表x轴信息
    xAxisData: {
      type: Array,
      default: () => {
        return [];
      },
    },
    // 图表其他信息
    otherOptions: {
      type: Object,
      default: () => {
        return {
          smooth: true,
          showSymbol: false,
          yAxis: {},
        };
      },
    },
  },
  data() {
    return {
      newSeriseData: [],
      yAxis: [],
    };
  },
  watch: {
    //   监听echarts数据变化重新渲染数据
    seriesData: {
      handler() {
        this.lineOption();
      },
      deep: true,
    },
  },
  mounted() {
    this.lineOption();
  },
  methods: {
    getOptions() {
      this.newSeriseData = [];
      this.seriesData.map((item) => {
        this.newSeriseData.push({
          name: item.name,
          type: "line",
          yAxisIndex: item.yAxisIndex ? item.yAxisIndex : 0,
          smooth: this.otherOptions.smooth,
          showSymbol: this.otherOptions.showSymbol,
          data: item.data, //data数据
          areaStyle: item.areaStyle ? item.areaStyle : null,
        });
        // this.newSeriseData.push(item.areaStyle)
      });

      this.yAxis = [];
      let yLeft = {
        type: "value",
        name: this.otherOptions.yName ? this.otherOptions.yName : "%",
        nameTextStyle: {
          color: "#9C9DA2",
          padding: [0, 0, 0, "-20"],
        },
        axisLabel: {
          color: "#9C9DA2",
          textStyle: {
            fontSize: 12,
          },
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: "#F3F4F4",
          },
        },
        axisTick: {
          show: false,
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: "#F3F4F4",
          },
        },
      };
      this.yAxis.push(yLeft);
      // 判断y轴是否为双轴
      if (
        this.otherOptions.yAxis &&
        Object.keys(this.otherOptions.yAxis).length != 0
      ) {
        this.yAxis.push(this.otherOptions.yAxis);
      }
    },
    lineOption() {
      this.getOptions();
      const option = {
        color: this.echartColor,
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            crossStyle: {
              color: "#999",
            },
            lineStyle: {
              type: "dashed",
            },
          },
        },
        grid: {
          //   right: "5%",
          top: "25%",
          bottom: "15%",
        },
        legend: {
          data: this.legendData,
          orient: "horizontal",
          icon: "rect",
          show: true,
          right: 0,
          itemGap: 5,
          itemWidth: 20,
          itemHeight: 5,
          top: "4%",
          textStyle: {
            fontSize: 10,
            color: "#9C9DA2",
          },
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: this.xAxisData,
          splitLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          axisLabel: {
            color: "#9C9DA2",
            textStyle: {
              fontSize: 12,
            },
          },
        },
        yAxis: this.yAxis,
        series: this.newSeriseData,
      };
      var myChart = this.$echarts.init(document.getElementById(this.echartId));
      myChart.setOption(option);
      window.addEventListener("resize", () => {
        myChart.resize();
      });
    },
  },
};
</script>
<style scoped>
.echarts {
  width: 100%;
  height: 4.5rem;
}
</style>