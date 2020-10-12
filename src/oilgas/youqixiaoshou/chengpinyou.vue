<template>
  <div style="position: relative; width: 100%; background-color: #dadbdb">
    <!-- 界面上标题切换按钮(库存管理，油气运输) -->
    <!-- 界面计算div块位置放到中间 -->
    <div id="tab_button" :style="{ left: screenLeft }">
      <span
        v-for="(item, index) in tablist"
        :key="index"
        @click="tabButton(index)"
        v-bind:class="[
          { tab_button_two: index == selected },
          { tab_button_one: true },
          { tab_button_three: index == selected },
        ]"
        >{{ item }}</span
      >
    </div>
    <!-- 储运管理的主要内容 -->
    <div id="confess_content" v-show="a" style="background-color: #dadbdb">
      <img
        class="map"
        @click.prevent="tanchuangShow()"
        src="../../assets/img/industryAnalysis/地图.png"
      />
      <!-- 上月成品油消费量 -->
      <div class="chart">
        <div
          style="
            font: bold 13px '微软雅黑';
            color: #3a6dda;
            position: relative;
            top: 30px;
            left: 30px;
          "
        >
          上月成品油消费量
        </div>
        <div class="echarts" id="echartsSix"></div>
      </div>
      <!-- 汽油柴油消费结构分析 -->
      <div class="chart">
        <div id="tab_oil">
          <span
            v-for="(item, index) in tablist_one"
            :key="index"
            @click="tabButton_one(index)"
            v-bind:class="[
              { tab_oil_two: index == selected_one },
              { tab_oil_one: true },
            ]"
            >{{ item }}</span
          >
        </div>
        <div class="echarts" id="echartsOne"></div>
      </div>
      <!-- 成品油消费地区分布==区内区外消费量对比 -->
      <div class="chart">
        <div id="tab_oil">
          <span
            v-for="(item, index) in tablist_two"
            :key="index"
            @click="tabButton_two(index)"
            v-bind:class="[
              { tab_oil_two: index == selected_two },
              { tab_oil_one: true },
            ]"
            >{{ item }}</span
          >
        </div>
        <div class="echarts" id="echartsTwo"></div>
      </div>
      <!-- 汽油柴油消费量预测 -->
      <div class="chart">
        <div id="tab_oil">
          <span
            v-for="(item, index) in tablist_three"
            :key="index"
            @click="tabButton_two(index)"
            v-bind:class="[
              { tab_oil_two: index == selected_two },
              { tab_oil_one: true },
            ]"
            >{{ item }}</span
          >
        </div>
        <div class="echarts" id="echartsThree"></div>
      </div>
      <!-- 煤制柴油消费结构分析==煤制石脑油消费结构分析 -->
      <div class="chart">
        <div id="tab_oil">
          <span
            v-for="(item, index) in tablist_four"
            :key="index"
            @click="tabButton_two(index)"
            v-bind:class="[
              { tab_oil_two: index == selected_two },
              { tab_oil_one: true },
            ]"
            >{{ item }}</span
          >
        </div>
        <div class="echarts" id="echartsFour"></div>
      </div>
    </div>

    <div id="confess" v-show="1" style="background-color: #dadbdb">
      <!-- 煤制油产品地区消费分析==油煤等价曲线 -->
      <div class="chart">
        <div id="tab_oil">
          <span
            v-for="(item, index) in tablist_five"
            :key="index"
            @click="tabButton_two(index)"
            v-bind:class="[
              { tab_oil_two: index == selected_two },
              { tab_oil_one: true },
            ]"
            >{{ item }}</span
          >
        </div>
        <div class="echarts" id="echartsFive"></div>
      </div>
      <!-- 煤制气产品地区消费分布 -->
      <div class="chart">
        <div
          style="
            font: bold 13px '微软雅黑';
            color: #3a6dda;
            position: relative;
            top: 30px;
            left: 30px;
          "
        >
          煤制气产品地区消费分布
        </div>
        <div class="echarts" id="echartsNine"></div>
      </div>
      <!-- 按用途消费结构分析==按行业消费结构分析 -->
      <div class="chart">
        <div id="tab_oil">
          <span
            v-for="(item, index) in tablist_six"
            :key="index"
            @click="tabButton_two(index)"
            v-bind:class="[
              { tab_oil_two: index == selected_two },
              { tab_oil_one: true },
            ]"
            >{{ item }}</span
          >
        </div>
        <div class="echarts" id="echartsSeven"></div>
      </div>
      <!-- 调峰煤制气月变化趋势==气价与煤价对比分析 -->
      <div class="chart">
        <div id="tab_oil">
          <span
            v-for="(item, index) in tablist_seven"
            :key="index"
            @click="tabButton_two(index)"
            v-bind:class="[
              { tab_oil_two: index == selected_two },
              { tab_oil_one: true },
            ]"
            >{{ item }}</span
          >
        </div>
        <div class="echarts" id="echartsEight"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "FuncFormsBase",
  data() {
    return {
      screenWidth: document.body.clientWidth, //屏幕宽
      screenLeft: "",
      show: 0, //控制弹窗显示
      closeLeft: 0, //关闭按钮居中
      //按钮切换标题
      tablist: ["成品油销售", "煤制油销售", "煤制气销售"],
      tablist_one: ["汽油消费结构分析", "柴油消费结构分析"],
      tablist_two: ["成品油消费地区分析", "区内区外消费量对比"],
      tablist_three: ["汽油消费量预测", "柴油消费量预测"],
      tablist_four: ["煤制柴油消费结构分析", "煤制石脑油消费结构分析"],
      tablist_five: ["煤制油产品地区消费分布", "油煤等价曲线"],
      tablist_six: ["按用途消费结构分析", "按行业消费结构分析"],
      tablist_seven: ["调峰煤制气月变化趋势", "气价与煤价对比分析"],
      selected: "0",
      selected_one: "0",
      selected_two: "0",
      selected_three: "0",
      //三个页面是否显示的三个参数
      a: 1,
      b: 0,
      c: 0,
      //页面里三个按钮
      i: 0, //判断是否点击
      j: 0,
      g: 0,
      //第二个页面的三个按钮
      p_i: 0,
      p_j: 0,
      p_g: 0,

      //第一个界面的表数据

      //第二个界面的表数据
    };
  },
  mounted() {
    this.drawLine("echartsOne");
    this.drawLine("echartsTwo");
    this.drawLine1("echartsThree");
    this.drawLine1("echartsFour");
    this.drawLine2("echartsFive");
    this.drawLine3("echartsSix");
    this.drawLine2("echartsSeven");
    this.drawLine2("echartsEight");
    this.drawLine4("echartsNine");
    this.screenLeft = (this.screenWidth - 343) / 2 + "px";
  },
  methods: {
    //油气APP柱线图
    drawLine(echart) {
      var echarts = require("echarts");
      var myChart = echarts.init(document.getElementById(echart));
      //库存变化趋势分析图
      myChart.setOption({
        legend: [
          {
            data: ["原油月供应量"],
            icon: "rect",
            itemWidth: 20,
            itemHeight: 10,
            top: "0%",
            left: "30%",
            textStyle: {
              color: "#6E7AA5",
              fontSize: 10,
              fontFamily: "微软雅黑",
            },
          },
          {
            data: ["同比变化"],
            icon: "rect",
            itemWidth: 20,
            itemHeight: 10,
            top: "0%",
            left: "60%",
            textStyle: {
              color: "#6E7AA5",
              fontSize: 10,
              fontFamily: "微软雅黑",
            },
          },
        ],
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            data: [1, 2, 3, 4, 5, 6],
            splitLine: {
              //取消网格线
              show: false,
            },
            axisTick: {
              //取消刻度线
              show: false,
            },
            axisLine: {
              lineStyle: {
                type: "solid",
                color: "#004F8F", //左边线的颜色
                width: "2", //坐标线的宽度
              },
            },
            axisLabel: {
              textStyle: {
                color: "#6E7AA5", //坐标值得具体的颜色
              },
            },
          },
        ],

        yAxis: [
          {
            type: "value",
            scale: true,
            //max: 25,
            min: 0,
            boundaryGap: [0.2, 0.2],
            splitLine: {
              //取消网格线
              show: false,
            },
            axisTick: {
              //取消刻度线
              show: false,
            },
            axisLine: {
              lineStyle: {
                type: "solid",
                color: "#004F8F", //左边线的颜色
                width: "2", //坐标线的宽度
              },
            },
            axisLabel: {
              textStyle: {
                color: "#6E7AA5", //坐标值得具体的颜色
              },
            },
          },
        ],

        series: [
          {
            name: "原油月供应量",
            type: "bar",
            barWidth: "25%",
            data: [1, 2, 3, 4, 5, 6],
            color: "rgb(6,239,220)",
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#07EBC4" }, //柱图渐变色
                  { offset: 0.5, color: "#04DEEA" },
                  { offset: 1, color: "#02C7FE" }, //柱图渐变色
                ]),
              },
            },
          },

          {
            name: "同比变化",
            data: [1, 2, 3, 4, 5, 6],
            type: "line",
            color: "#FFA93A",
            symbol: "none", //拐点样式
          },
        ],
      });
    },
    //油气APP饼图
    drawLine1(echart) {
      var echarts = require("echarts");
      var myChart = echarts.init(document.getElementById(echart));
      //库存变化趋势分析图
      myChart.setOption({
        //库存企业结构图
        legend: {
          // orient: 'vertical',
          top: 600,
          itemGap: 23,
          data: ["汽油", "柴油", "煤油"],
        },
        tooltip: {
          trigger: "item",
          formatter: "{d}%",
        },
        series: [
          {
            type: "pie",
            radius: ["45%", "55%"],
            labelLine: {
              //设置延长线的长度
              normal: {
                length: 20, //设置延长线的长度
                length2: 20, //设置第二段延长线的长
              },
            },
            itemStyle: {
              normal: {
                label: {
                  formatter: "{per|{d}%}",
                  alignTo: "labelLine",
                  rich: {
                    per: {
                      color: "black",
                      padding: [2, 3],
                      borderRadius: 2,
                      fontSize: 20,
                    },
                    h: {
                      fontSize: 20,
                      lineHeight: 20,
                    },
                  },
                },
              },
            },
            data: [
              { value: 40, name: "汽油" },
              { value: 50, name: "柴油" },
              { value: 10, name: "煤油" },
            ],
            color: ["rgb(237,96,70)", "rgb(22,222,161)"],
          },
        ],
      });
    },
    //油气APP横向柱状图
    drawLine2(echart) {
      var echarts = require("echarts");
      var myChart = echarts.init(document.getElementById(echart));
      //库存变化趋势分析图
      myChart.setOption({
        color: "red",
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        grid: {
          show: false,
          left: "5%",
          right: "2%",
          top: "15%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "value",
            boundaryGap: (0, 0.1), //防止最大值顶头
            axisTick: {
              alignWithLabel: false, //结合标签对齐
              show: false,
            },
            axisLabel: {
              show: false,
            },
            axisLine: {
              show: false,
            },
            splitLine: {
              show: false,
            },
          },
        ],
        yAxis: [
          {
            type: "category",
            data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月"],
            boundaryGap: (0, 0.1), //防止最大值顶头
            splitLine: {
              show: false,
            },
            axisLabel: {
              show: true,
            },
            axisTick: {
              alignWithLabel: true, //结合标签对齐
              show: false,
            },
            axisLine: {
              show: false,
            },
          },
        ],
        series: [
          {
            type: "bar",
            showBackground: true,
            backgroundStyle: {
              color: "rgba(247, 247, 247, 1)",
            },
            barWidth: 20,
            barGap: "100%",
            data: [1, 2, 3, 4, 5, 6, 7],
            itemStyle: {
              normal: {
                color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 1,
                  y2: 0,
                  colorStops: [
                    {
                      offset: 0,
                      // color: '#7e68ff' // 0% 处的颜色
                      color: "rgb(0,233,241)",
                    },
                    {
                      offset: 1,
                      // color: '#5669e4' // 100% 处的颜色
                      color: "rgb(0,233,241)",
                    },
                  ],
                },
              },
            },
          },
        ],
      });
    },
    //油气APP汽油消费量预测图
    drawLine3(echart) {
      var echarts = require("echarts");
      var myChart = echarts.init(document.getElementById(echart));
      myChart.setOption({
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "line",
            label: {
              backgroundColor: "#6a7985",
            },
          },
        },
        legend: {
          show: true,
          icon: "rect",
          itemHeight: 10,
          itemWidth: 10,
          top: "top",
          right: 0,
          // orient: 'horizontal',
          data: ["汽油消费量实际值", "汽油消费量预测值"],
        },
        grid: {
          show: false,
          left: "5%",
          right: "2%",
          top: "15%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            axisLine: { show: true },
            splitLine: true,
            axisTick: {
              show: false,
            },
            data: [1, 2, 3, 4, 5, 6],
          },
        ],
        yAxis: [
          {
            name: "万吨/年",
            type: "value",
            axisTick: {
              show: false,
            },
          },
        ],
        series: [
          {
            name: "汽油消费量预测值",
            type: "line",
            smooth: true,
            data: [1, 9, 3, 4, 5, 6],
            stack: "a",
            // sampling: 'average',
            itemStyle: {
              color: "rgb(18,216,158)",
            },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "rgb(18,216,158)",
                },
                {
                  offset: 1,
                  color: "#ffffff",
                },
              ]),
              opacity: 0.4,
            },
          },
          {
            name: "汽油消费量实际值",
            type: "line",
            smooth: true,
            itemStyle: {
              normal: {
                color: "red",
                lineStyle: {
                  width: 2,
                  type: "dotted", //'dotted'虚线 'solid'实线
                },
              },
            },
            data: [6, 10, 4, 3, 2, 1],
            symbol: "none",
          },
        ],
      });
    },
    //油气APP折叠图
    drawLine4(echart) {
      var echarts = require("echarts");
      var myChart = echarts.init(document.getElementById(echart));
      myChart.setOption({
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        legend: {
          left: "70%",
          y: " center",
          data: ["工程车辆", "城市交通", "工业"],
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        yAxis: {
          type: "value",
        },
        xAxis: {
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
            "10月",
            "11月",
            "12月",
          ],
        },
        series: [
          {
            name: "工程车辆",
            type: "bar",
            stack: "总量",
            data: [
              320,
              302,
              301,
              334,
              390,
              330,
              320,
              320,
              302,
              301,
              334,
              390,
              330,
              320,
            ],
            itemStyle: {
              normal: { color: "rgb(0,138,255)" },
            },
          },
          {
            name: "城市交通",
            type: "bar",
            stack: "总量",
            data: [
              120,
              132,
              101,
              134,
              90,
              230,
              210,
              120,
              132,
              101,
              134,
              90,
              230,
              210,
            ],
            itemStyle: {
              normal: { color: "rgb(3,240,255)" },
            },
          },
          {
            name: "工业",
            type: "bar",
            stack: "总量",
            data: [
              220,
              182,
              191,
              234,
              290,
              330,
              310,
              220,
              182,
              191,
              234,
              290,
              330,
              310,
            ],
            itemStyle: {
              normal: { color: "rgb(127,236,21)" },
            },
          },
        ],
      });
    },
  },

  //主要按钮
  tabButton(id) {
    this.selected = id;
    if (0 == id) {
      this.a = 1;
      this.b = 0;
      this.c = 0;
      this.$nextTick(function () {
        //加载echarts并替换数据
        this.drawLine("echartsOne", this.echarts.data_one);
        this.drawLine("echartsTwo", this.echarts.data_two);
      });
    }
    if (1 == id) {
      this.a = 0;
      this.b = 1;
      this.c = 0;
      this.$nextTick(function () {
        this.drawLine_one("echartsThree", this.bardata);
      });
    }
    if (2 == id) {
      this.a = 0;
      this.b = 0;
      this.c = 1;
      console.log("生产天然气");
    }
  },

  /* 第一个页面的点击按钮 */
  //内容里的第一个按钮
  tabButton_one(id) {
    this.selected_one = id;
    if (this.i == 0 && id == 1) {
      this.drawLine("echartsOne", this.echarts.data_three);
      this.i = 1;
    }
    if (this.i == 1 && id == 0) {
      this.drawLine("echartsOne", this.echarts.data_one);
      this.i = 0;
    }
  },
  //内容里的第二个按钮
  tabButton_two(id) {
    this.selected_two = id;
    if (this.j == 0 && id == 1) {
      this.drawLine("echartsTwo", this.echarts.data_four);
      this.j = 1;
    }
    if (this.j == 1 && id == 0) {
      this.drawLine("echartsTwo", this.echarts.data_two);
      this.j = 0;
    }
  },

  //内容里的第一个按钮
  tabButton_one(id) {
    this.selected_one = id;
    if (this.i == 0 && id == 1) {
      this.drawLine("echartsOne", this.echarts.data_three);
      this.i = 1;
    }
    if (this.i == 1 && id == 0) {
      this.drawLine("echartsOne", this.echarts.data_one);
      this.i = 0;
    }
  },
  //内容里的第二个按钮
  tabButton_two(id) {
    this.selected_two = id;
    if (this.j == 0 && id == 1) {
      this.drawLine("echartsTwo", this.echarts.data_four);
      this.j = 1;
    }
    if (this.j == 1 && id == 0) {
      this.drawLine("echartsTwo", this.echarts.data_two);
      this.j = 0;
    }
  },
  //内容里的第三个按钮
  tabButton_three(id) {
    this.selected_three = id;
    if (this.g == 0 && id == 1) {
      this.g = 1;
    }
    if (this.g == 1 && id == 0) {
      this.g = 0;
    }
  },
};
</script>

<style scoped>
/* 弹出框 */
.tanchuang {
  position: absolute;
  width: 100%;
  height: 314.5px;
  background-color: #4c4c4c;
  z-index: 3;
  display: none;
}
.tanchuang_one {
  position: absolute;
  width: 100%;
  height: 314.5px;
  background-color: #4c4c4c;
  z-index: 3;
  display: block;
  overflow: auto;
}
#close {
  width: 35px;
  height: 35px;
  position: fixed;
  top: 295px;
}

#tab_button {
  width: 343px;
  height: 29px;
  background-color: rgba(0, 0, 0, 0.15);
  position: fixed;
  top: 100px;
  z-index: 2;
  border-radius: 5px;
}

/* 按钮切换 */
.tab_button_one {
  width: 113px;
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
  width: 113px;
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
}
.tab_button_three {
  width: 113px;
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
}

/* 关于地图内容的调整期 */
.map {
  width: 100%;
  height: 314.5px;
  background-color: #dadbdb;
}

/* 储情分析内容 */
.chart {
  width: 100%;
  height: 289px;
  background-color: white;
  padding: 10px 0;
  position: relative;
}

.echarts {
  width: 100%;
  height: 242px;
  margin: 20px auto;
  /* background-image: url(../../assets/img/industryAnalysis/椭圆.png); */
  background-repeat: no-repeat;
  background-position: 50% 37%;
  background-size: 65px 65px;
}

.echarts_one {
  width: 100%;
  height: 242px;
  margin: 20px auto;
}

/* 文字块 */
.fontSize_div {
  position: absolute;
  width: 100%;
  height: 100%;
  text-align: center;
  top: 22%;
}

.fontSize {
  position: relative;
  top: 90px;
  font: 20px bolder microsoft-yahei;
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

/* 表格 */
#table {
  width: 100%;
  padding-top: 30px;
}

.table_one {
  font-family: PingFang SC;
  width: 100%;
  border-collapse: collapse;
  margin: 50px auto;
}

.table_one th,
.table_one td {
  font-size: 7px;
  border: 1px solid #b9bec9;
  padding: 3px 7px 2px 7px;
  text-align: center;
}
.table_one th {
  background-color: #d8dbde;
}

/* 主要内容隐藏 */
.content {
  display: none;
}
</style>
