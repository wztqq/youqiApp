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
      <!-- 库存监控汽油柴油库存量变化趋势分析 -->
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
      <!-- 库存监控煤油原油库存量变化趋势分析 -->
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
      <!-- 库存监控汽油原油库存企业结构 -->
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
        <!-- 饼图中间字体 -->
        <div class="fontSize_div">
          <div class="fontSize">20</div>
          <div class="fontSize">万吨</div>
        </div>
        <div class="echarts" id="echartsThree"></div>
      </div>
      <!-- 库存监控煤油原油库存企业结构 -->
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
        <!-- 饼图中间字体 -->
        <div class="fontSize_div">
          <div class="fontSize">20</div>
          <div class="fontSize">万吨</div>
        </div>
        <div class="echarts" id="echartsFour"></div>
      </div>
    </div>

    <div id="confess" v-show="1" style="background-color: #dadbdb">
      <!-- 油气运输表数据 -->
      <div class="chart">
        <div id="table">
          <!-- 表头 -->
          <tr>
            <th v-for="(th, index) in tableTh_one" :key="index">{{ th }}</th>
          </tr>
          <!-- 表数据 -->
          <tr v-for="(tr, index) in listData_one" :key="index">
            <td>{{ index + 1 }}</td>
            <td v-for="(td, index) in tr" :key="index">
              {{ td }}
            </td>
          </tr>
        </div>
      </div>
      <!-- 油气运输日进油量 -->
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
          日进油量
        </div>
        <div class="echarts" id="echartsFive"></div>
      </div>
      <!-- 油气运输日出油量 -->
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
          日出油量
        </div>
        <div class="echarts" id="echartsSix"></div>
      </div>
      <!-- 管存量 -->
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
          管存量
        </div>
        <div class="echarts" id="echartsSeven"></div>
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
      // 表头
      tableTh_one: [
        "管道名称",
        "总里程(km)",
        "区内里程(km)",
        "运送能力",
        "管存量",
      ],
      // 表数据
      listData_one: [
        {
          name: "长庆油田-呼和浩特石化原油管道",
          totalMileage: "561.9",
          mileageArea: "561.9",
          transport: "500万吨",
          management: "500万吨",
        },
        {
          name: "阿尔善-赛罕塔拉原油管道",
          totalMileage: "361.6",
          mileageArea: "361.6",
          transport: "105万吨",
          management: "500万吨",
        },
        {
          name: "苏项联至嵯岗原油管道",
          totalMileage: "650",
          mileageArea: "650",
          transport: "620万吨",
          management: "500万吨",
        },
        {
          name: "中俄原油管道二线",
          totalMileage: "955",
          mileageArea: "955",
          transport: "1500万吨",
          management: "500万吨",
        },
        {
          name: "中俄原油管道(漠大线)",
          totalMileage: "934.9",
          mileageArea: "934.9",
          transport: "1500万吨",
          management: "500万吨",
        },
        {
          name: "长庆油田-呼和浩特石化原油管道",
          totalMileage: "561.9",
          mileageArea: "561.9",
          transport: "500万吨",
          management: "500万吨",
        },
        {
          name: "阿尔善-赛罕塔拉原油管道",
          totalMileage: "361.6",
          mileageArea: "361.6",
          transport: "105万吨",
          management: "500万吨",
        },
        {
          name: "苏项联至嵯岗原油管道",
          totalMileage: "650",
          mileageArea: "650",
          transport: "620万吨",
          management: "500万吨",
        },
        {
          name: "中俄原油管道二线",
          totalMileage: "955",
          mileageArea: "955",
          transport: "1500万吨",
          management: "500万吨",
        },
        {
          name: "中俄原油管道(漠大线)",
          totalMileage: "934.9",
          mileageArea: "934.9",
          transport: "1500万吨",
          management: "500万吨",
        },
      ],
      tablist: ["库存监控", "油气运输"],
      tablist_one: ["汽油库存量变化趋势分析", "柴油库存量变化趋势分析"],
      tablist_two: ["煤油库存量变化趋势分析", "原油库存量变化趋势分析"],
      tablist_three: ["汽油库存企业结构", "原油库存企业结构"],
      tablist_four: ["煤油库存企业结构", "原油库存企业结构"],
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
    // this.drawLine("echartsTwo", this.echarts.data_two);
    this.screenLeft = (this.screenWidth - 343) / 2 + "px";
    //this.drawLine_one('echartsThree')
  },
  methods: {
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
            data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月"],
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
            name: "同比变化",
            data: ["1", "2", "3", "4", "5", "6", "7"],
            type: "line",
            color: "red",
            symbol: "none", //拐点样式
          },
          {
            name: "原油月供应量",
            type: "bar",
            barWidth: "25%",
            data: ["1", "2", "3", "4", "5", "6", "7"],
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
        ],
      });
    },
    drawLine1(echart) {
      var echarts = require("echarts");
      var myChart = echarts.init(document.getElementById(echart));
      //库存变化趋势分析图
      myChart.setOption({
        //库存企业结构图
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)",
        },
        graphic: [
          {
            //环形图中间添加文字
            type: "text", //通过不同top值可以设置上下显示
            left: "center",
            top: "45%",
            style: {
              // text: '280'+'\n'+'万吨',
              textAlign: "center",
              fill: "red", //文字的颜色
              width: 30,
              height: 30,
              fontSize: 80,
              fontFamily: "Microsoft YaHei",
            },
          },
        ],

        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["45%", "55%"],
            labelLine: {
              //设置延长线的长度
              normal: {
                length: 80, //设置延长线的长度
                length2: 180, //设置第二段延长线的长
              },
            },
            itemStyle: {
              normal: {
                label: {
                  formatter: "{h|{b}}:  {per|{d}%}",
                  alignTo: "labelLine",
                  rich: {
                    per: {
                      color: "white",
                      padding: [2, 3],
                      borderRadius: 2,
                      fontSize: 60,
                    },
                    h: {
                      fontSize: 60,
                      lineHeight: 33,
                    },
                  },
                },
              },
            },
            data: [
              { value: 50, name: "中石化" },
              { value: 50, name: "中石油" },
            ],
            color: ["rgb(237,96,70)", "rgb(22,222,161)"],
          },
        ],
      });
    },

    drawLine2(echart) {
      var echarts = require("echarts");
      var myChart = echarts.init(document.getElementById(echart));
      //库存变化趋势分析图
      myChart.setOption({
        xAxis: {
          type: "category",
          data: [
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            15,
            16,
            17,
            18,
            19,
            20,
            21,
            22,
            23,
            24,
            25,
            26,
            27,
            28,
          ],
          interval: 0,
          splitLine: {
            interval: 1,
            lineStyle: {
              color: "red",
            },
          },
          axisTick: {
            show: false,
          },
          axisLine: {
            show: true,
          },
          axisLabel: {
            color: "#7EBAF7",
          },
        },
        yAxis: {
          name: "m³/h",
          type: "value",

          axisTick: {
            show: false,
          },
          axisLabel: {
            color: "#7EBAF7",
          },
          axisLine: {
            show: true,
          },
        },
        series: [
          {
            data: [
              1,
              2,
              3,
              4,
              5,
              6,
              7,
              8,
              9,
              10,
              20,
              14,
              23,
              16,
              15,
              26,
              78,
              43,
              21,
              54,
              21,
              54,
              21,
              54,
              21,
              54,
              21,
              54,
            ],
            symbol: "none",
            type: "line",
            lineStyle: {
              color: "blue",
              width: 1,
            },
            areaStyle: {
              type: "default",
              //渐变色实现
              color: new echarts.graphic.LinearGradient(
                0,
                0,
                0,
                1, //变化度
                //三种由深及浅的颜色
                [
                  {
                    offset: 0,
                    color: "blue",
                  },
                  {
                    offset: 1,
                    color: "white",
                  },
                ]
              ),
            },
          },
        ],
      });
    },
    drawLine3(echart) {
      var echarts = require("echarts");
      var myChart = echarts.init(document.getElementById(echart));
      myChart.setOption({
        xAxis: {
          type: "category",
          data: [
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            15,
            16,
            17,
            18,
            19,
            20,
            21,
            22,
            23,
            24,
            25,
            26,
            27,
            28,
          ],
          interval: 0,
          splitLine: {
            interval: 1,
            lineStyle: {
              color: "yellow",
            },
          },
          axisTick: {
            show: false,
          },
          axisLine: {
            show: true,
          },
          axisLabel: {
            color: "#7EBAF7",
          },
        },
        yAxis: {
          name: "m³/h",
          type: "value",

          axisTick: {
            show: false,
          },
          axisLabel: {
            color: "#7EBAF7",
          },
          axisLine: {
            show: true,
          },
        },
        series: [
          {
            data: [
              1,
              2,
              3,
              4,
              5,
              6,
              7,
              8,
              9,
              10,
              20,
              14,
              23,
              16,
              15,
              26,
              78,
              43,
              21,
              54,
              21,
              54,
              21,
              54,
              21,
              54,
              21,
              54,
            ],
            itemStyle: {
              normal: {
                borderColor: "yellow", //拐点边框颜色
                borderWidth: 1, //拐点边框大小
              },
            },
            type: "line",
            lineStyle: {
              color: "yellow",
              width: 1,
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
  /* 第二个页面的三个点击按钮 */
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
  width: 169px;
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
  width: 169px;
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
