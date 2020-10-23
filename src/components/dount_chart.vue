<template>
  <div :id="elId" style="width: 100%; height: 100%"></div>
</template>
<script>
import echarts from "echarts";
import uuidv1 from 'uuid/v1' 
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
        seriesName:""
        seriesData:[], 
      }
    */
  },
  data() {
    return {
      chartBar: null,
    };
  },
  created() {
    this.elId = uuidv1()
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
      this.chartBar = echarts.init(document.getElementById(this.elId));
      let option = {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        // title: {
        //   zlevel: 0,
        //   text: ["{value|" + this.optionObj.total + "}", "{name|亿m³}"].join("\n"),
        //   x: "center",
        //   y: "center",
        //   // textAlign: "center",
        //   textStyle: {
        //     rich: {
        //       value: {
        //         color: "#4D607C",
        //         fontSize: 24,
        //         fontWeight: "bold",
        //         lineHeight: 36,
        //       },
        //       name: {
        //         color: "#4D607C",
        //         lineHeight: 22,
        //         fontSize: 18,
        //         fontWeight: "bold",
        //       },
        //     },
        //   },
        // },
        legend: {
          itemWidth: 10,
          itemHeight: 6,
          textStyle: {
            color: "#9C9DA2",
          },
          x: "center",
          top: '75%',
          data: this.optionObj.legendData,
        },
        series: [
          {
            name: this.optionObj.seriesName,
            type: "pie",
            radius: ["35%", "50%"],
            center: ["50%", "40%"],
            labelLine: {
              normal: {
                length: 10,
                length2: 80,
              },
            },
            label: {
              normal: {
                show: true,
                color: "#9C9DA2",
                fontSize: 14,
                formatter: "{d}%",
                rich: {
                  c: {
                    color: "#9C9DA2",
                    fontWeight: "bold",
                    fontSize: 40,
                    align: "center",
                    verticalAlign: "bottom",
                  },
                },
                padding: [0, -50, 25, -50],
              },
            },

            data: this.optionObj.seriesData,
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
              normal: {
                color: function (params) {
                  var colorList = [
                    {
                      c1: " #11D59C", 
                      c2: "#24F6B2",
                    },
                    {
                      c1: " #FF860D",
                      c2: "#FFA516",
                    },
                    {
                      c1: "#969BF2",
                      c2: "#31D9E5",
                    },
                    {
                      c1: "#FF10B9",
                      c2: "#D05FF0",
                    },
                    {
                      c1: "#EB5539",
                      c2: "#F0765F",
                    },
                    {
                      c1: "#4310FF",
                      c2: "#7FA6FF",
                    },
                  ];
                  return new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                      offset: 0,
                      color: colorList[params.dataIndex].c1,
                    },
                    {
                      offset: 1,
                      color: colorList[params.dataIndex].c2,
                    },
                  ]);
                },
              },
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