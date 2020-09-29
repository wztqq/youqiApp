<template>
  <div style="position: relative; width: 100%; background-color: #dadbdb">
    <div class="map">
      <div id="tab_button">
        <div class="tab_button_two">原油</div>
        <div class="tab_button_one">成品油</div>
        <div class="tab_button_one">煤制油</div>
        <div class="tab_button_one">煤制气</div>
      </div>
      <!-- <img id='map_pic' src="../../assets/img/industryAnalysis/地图.png" alt="图片未加载"> -->
    </div>
    <!-- 储情分析的主要内容 -->
    <div id="confess_content">
      <div class="chart" style="position: relative">
        <div id="tab_oil">
          <div class="tab_oil_two">原油加工量变化趋势</div>
          <div class="tab_oil_one">原油月产量结构分析</div>
        </div>
        <div class="echarts" id="echartsTwo"></div>
      </div>
      <div class="chart" style="position: relative">
        <div class="table_one">
          <div>油气产量分布分析</div>
          <div class="echarts" id="echartsOne"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "FuncFormsBase",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
  mounted() {
    this.drawLine("echartsOne");
    this.oiltendency_bar("echartsTwo");
    //this.oilstructure_pie("echartsThree");
  },
  methods: {
    drawLine(name) {
      var echarts = require("echarts");
      var myChart = echarts.init(document.getElementById(name));
      myChart.setOption({
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)",
        },
        legend: {
          orient: "horizontal",
          bottom: 20,
          left: "center",
          itemGap: 10,
          data: ["油田1", "油田2", "油田3", "油田4", "油田5", "油田6"],
          itemWidth: 15,
		  itemHeight: 10,
		  textStyle:{
            color:'#9FA0A5',
            fontSize:10,
        }
        },
        grid: {
          bottom: 40,
        },
        series: [
          {
            name: "原油剩余技术储量",
            type: "pie",
            radius: ["40%", "55%"],
            center: ["50%", "40%"],
            label: {
              formatter: "{per|{d}%\n}",
              padding: [0, -40, 5],
              rich: {
                per: {
                  fontSize: 12,
                  color: "#9FA0A5",
                },
              },
            },
            labelLine: {
              length: 15,
              length2: 30,
            },
            data: [
              {
                value: 10,
                name: "油田1",
              },
              {
                value: 8,
                name: "油田2",
              },
              {
                value: 6,
                name: "油田3",
              },
              {
                value: 4,
                name: "油田4",
              },
              {
                value: 2,
                name: "油田5",
              },
              {
                value: 4,
                name: "油田6",
              },
            ],
            color: [
              "#44c2fd",
              "#22ffc2",
              "#ffc522",
              "#ff1a40",
              "#d527b7",
              "#0000ff",
            ],
          },
        ],
      });
    },
    oiltendency_bar(name) {
      var echarts = require("echarts");
      var myChart = echarts.init(document.getElementById(name));
      myChart.setOption({
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            crossStyle: {
              color: "#999",
            },
          },
        },
        // grid: {
        //   height: 160,
        //   bottom: 50,
        // },
        legend: {
          itemWidth: 10,
          itemHeight: 5,
          top: 5,
          right: 30,
          itemGap: 20,
          textStyle: {
            color: "#e3e3e3",
            fontSize: 10,
          },
          data: ["原油月产量", "同比变化"],
        },
        xAxis: [
          {
            type: "category",
            data: [
              "1月",
              "2月",
              "3月",
              "4月",
              "5月",
              "6月",
              "7月",
              "8月",
              "9月",
            ],
            axisPointer: {
              type: "shadow",
            },
            axisLabel: {
              fontSize: 12,
            },
            axisLine: {
              lineStyle: {
                color: "#ddd", // 颜色
                width: 1, // 粗细
              },
            },
            axisTick: {
              show: false,
            },
          },
        ],
        yAxis: [
          {
            name: "万吨 / 月",
            type: "value",
            min: 0,
            interval: 5,
            axisLabel: {
              fontSize: 12,
            },
            axisLine: {
              lineStyle: {
                color: "#ddd", // 颜色
                width: 1, // 粗细
              },
            },
            axisTick: {
              show: false,
            },
          },
        ],
        series: [
          {
            name: "原油月产量",
            type: "bar",
            barWidth: 10,
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "#63edd4" },
                { offset: 1, color: "rgba(14, 137, 238, 1)" },
              ]),
            },
            data: [4, 4, 7, 17, 8, 21, 23, 13, 8],
          },
          {
            name: "同比变化",
            type: "line",
            showSymbol: false,
            lineStyle: {
              type: "dotted",
              width: 2,
            },
            smooth: true,
            color: "#ffa500",
            data: [12, 14, 16, 21, 20.5, 22, 24, 20, 17.5],
          },
        ],
      });
	},
  },
};
</script>

<style>
#tab_button {
  width: 343px;
  height: 29px;
  background-color: rgba(0, 0, 0, 0.15);
  margin: 0px auto;
  border-radius: 5px;
}

/* 按钮切换 */
.tab_button_one {
  width: 85px;
  height: 25px;
  font: 12px PingFangSC-Regular;
  line-height: 25px;
  float: left;
  position: relative;
  top: 2px;
  left: 2px;
  text-align: center;
  color: white;
}

.tab_button_two {
  width: 85px;
  height: 25px;
  background-color: rgba(0, 0, 0, 0.3);
  font: 12px PingFangSC-Regular;
  line-height: 25px;
  float: left;
  position: relative;
  top: 2px;
  left: 2px;
  text-align: center;
  border-radius: 5px;
  color: white;
}

/* 关于地图内容的调整期 */
.map {
  width: 100%;
  height: 314.5px;
  background-color: #dadbdb;
  background-size: cover;
  padding: 15px 0 0 0;
  background-image: url(../../assets/img/youqigongyingguanli/map.png);
}

/* 储情分析内容 */
.chart {
  width: 100%;
  height: 289px;
  background-color: white;
  margin: 5px 0 0 0;
  padding: 10px 0 0 0;
}

.echarts {
  width: 100%;
  height: 242px;
  margin: 20px auto;
}

/* 按钮样式调整 */
#tab_oil {
  width: 345px;
  height: 31px;
  background-color: white;
  margin: 0px auto;
  border: 1px solid #3a6dda;
  border-radius: 5px;
}

/* 按钮切换 */
.tab_oil_one {
  width: 169.5px;
  height: 25px;
  font: 12px PingFangSC-Regular;
  color: #3a6dda;
  line-height: 25px;
  float: left;
  position: relative;
  top: 2px;
  left: 2px;
  text-align: center;
}

.tab_oil_two {
  width: 169.5px;
  height: 25px;
  background-color: #3a6dda;
  font: 12px PingFangSC-Regular;
  color: white;
  line-height: 25px;
  float: left;
  position: relative;
  top: 2px;
  left: 2px;
  text-align: center;
  border-radius: 5px;
}

.table_one {
  line-height: 25px;
}
</style>