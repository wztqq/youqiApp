<template>
  <div style="position: relative; width: 100%; background-color: #DADBDB;">
    <div :class="[{tanchuang:true},{tanchuang_one: show}]">
      <div style="width: 100%;height: 100%;overflow: auto;">
        <table class="table_one_t">
          <tr>
            <th v-for="(th,index) in tableTh" :key="index">{{th}}</th>
          </tr>
          <tr v-for="(tr,index) in listData" :key="index">
            <td v-for="(td,index) in tr" :key="index">{{td}}</td>
          </tr>
        </table>
      </div>
      <img
        id="close"
        :style="{'left':closeLeft}"
        src="../../assets/img/industryAnalysis/关闭.png"
        alt="图片未显示"
        @click="tanchuangClose()"
      />
    </div>
    <div id="tab_button" :style="{'left':screenLeft}">
      <span
        v-for="(item,index) in tablist"
        :key="index"
        @click="tabButton(index)"
        v-bind:class="[{tab_button_two:index == selected},{tab_button_one:true}]"
      >{{item}}</span>
    </div>
    <!-- 储情分析的主要内容 -->
    <div id="confess_content" v-if="a" style="background-color: #DADBDB;">
      <img
        class="map"
        @click.prevent="tanchuangShow()"
        src="../../assets/img/industryAnalysis/地图.png"
        alt="图片未显示"
      />
      <div class="chart">
        <div class="tab_oil">
          <span
            v-for="(item,index) in tablist_one"
            :key="index"
            @click="tabButton_one(index)"
            v-bind:class="[{tab_oil_two:index == selected_one},{tab_oil_one:true}]"
          >{{item}}</span>
        </div>
        <div class="fontSize_div">
          <div class="fontSize">1770</div>
          <div class="fontSize">万吨</div>
        </div>
        <!-- <div class="echarts" id="echartsOne"></div> -->
        <div class="echarts" id="echartsOne"></div>
      </div>
      <div class="chart">
        <div style="width: 100%;height: 8px;background-color: #DADBDB;margin-bottom: 10px;"></div>
        <div class="tab_oil">
          <span
            v-for="(item,index) in tablist_two"
            :key="index"
            @click="tabButton_two(index)"
            v-bind:class="[{tab_oil_two:index == selected_two},{tab_oil_one:true}]"
          >{{item}}</span>
        </div>
        <div class="fontSize_div">
          <div class="fontSize">0.66</div>
          <div class="fontSize">立方米</div>
        </div>
        <div class="echarts" id="echartsTwo"></div>
      </div>
      <div class="chart">
        <div style="width: 100%;height: 8px;background-color: #DADBDB;margin-bottom: 10px;"></div>
        <div class="tab_oil">
          <span
            v-for="(item,index) in tablist_three"
            :key="index"
            @click="tabButton_three(index)"
            v-bind:class="[{tab_oil_two:index == selected_three},{tab_oil_one:true}]"
          >{{item}}</span>
          <div id="table">
            <div style="font: bold 13px '微软雅黑';color: #3A6DDA;position: relative;top: 30px;">
              油田采储排名
              <span style="color: #FF9311 ;font-style: italic;">Top</span>
            </div>
            <table :class="[{table_one:!g},{table_two:g}]">
              <tr>
                <th v-for="(th,index) in tableTh_one" :key="index">{{th}}</th>
              </tr>
              <tr v-for="(tr,index) in listData_one" :key="index">
                <td>{{index+1}}</td>
                <td v-for="(td,index) in tr" :key="index">{{td}}</td>
              </tr>
            </table>
            <table :class="[{table_one:g},{table_two:!g}]">
              <tr>
                <th v-for="th,index in tableTh_two" :key="index">{{th}}</th>
              </tr>
              <tr v-for="(tr,index) in listData_two" :key="index">
                <td>{{index+1}}</td>
                <td v-for="td,index in tr" :key="index">{{td}}</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>

    <div id="produce_content" v-show="b">
      <img
        class="map"
        @click.prevent="tanchuangShow()"
        src="../../assets/img/industryAnalysis/地图.png"
        alt="图片未显示"
      />
      <div class="chart">
        <div style="width: 100%;height: 8px;background-color: #DADBDB;margin-bottom: 10px;"></div>
        <div class="tab_oil">
          <span
            v-for="(item,index) in tablist_four"
            :key="index"
            @click="tabButton_four(index)"
            v-bind:class="[{tab_oil_two:index == selected_four},{tab_oil_one:true}]"
          >{{item}}</span>
        </div>
        <div class="echarts_one" id="echartsThree"></div>
      </div>
      <div class="chart">
        <div style="width: 100%;height: 8px;background-color: #DADBDB;margin-bottom: 10px;"></div>
        <div class="tab_oil">
          <span
            v-for="(item,index) in tablist_five"
            :key="index"
            @click="tabButton_five(index)"
            v-bind:class="[{tab_oil_two:index == selected_five},{tab_oil_one:true}]"
          >{{item}}</span>
        </div>
        <div class="echarts_one" id="echartsFour"></div>
      </div>
      <div class="chart">
        <div style="width: 100%;height: 8px;background-color: #DADBDB;margin-bottom: 10px;"></div>
        <div class="tab_oil">
          <span
            v-for="(item,index) in tablist_six"
            :key="index"
            @click="tabButton_six(index)"
            v-bind:class="[{tab_oil_two:index == selected_six},{tab_oil_one:true}]"
          >{{item}}</span>
          <div class="echarts_one" id="echartsFive"></div>
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
      screenWidth: document.body.clientWidth, // 屏幕宽
      screenLeft: "",
      show: 0, //控制弹窗显示
      closeLeft: 0, //关闭按钮居中
      tableTh: [
        "名称",
        "所属盟市",
        "面积",
        "经纬度",
        "远景资源量",
        "预测资源量",
        "控制储量",
        "探明储量"
      ],
      listData: [
        {
          name: "乌里雅斯太油田",
          leaguerea: "锡林郭勒盟",
          area: "5.5万平方公里",
          latitude: "43°23′10″~45°24′27″",
          vision: "3256",
          prediction: "1456",
          control: "1300",
          proved: "1200"
        },
        {
          name: "宝力格油田",
          leaguerea: "锡林郭勒盟",
          area: "4314.12平方公里",
          latitude: "41°10′10″~43°24′10″",
          vision: "2687",
          prediction: "1856",
          control: "1399",
          proved: "780"
        },
        {
          name: "新苏木油田",
          leaguerea: "锡林郭勒盟",
          area: "5万平方公里",
          latitude: "46°16′10″~46°24′15″",
          vision: "3100",
          prediction: "2756",
          control: "2678",
          proved: "2670"
        },
        {
          name: "哈达图油田",
          leaguerea: "锡林郭勒盟",
          area: "432平方公里",
          latitude: "43°17′10″~45°24′15″",
          vision: "2890",
          prediction: "1956",
          control: "1780",
          proved: "870"
        },
        {
          name: "锡林油田",
          leaguerea: "锡林郭勒盟",
          area: "234平方公里",
          latitude: "44°17′10″~40°24′15″",
          vision: "3200",
          prediction: "2056",
          control: "1890",
          proved: "960"
        },
        {
          name: "乌兰诺尔油田",
          leaguerea: "锡林郭勒盟",
          area: "5.5万平方公里",
          latitude: "47°18′10″~46°24′15″",
          vision: "3199",
          prediction: "2099",
          control: "2000",
          proved: "677"
        }
      ],
      tablist: ["储情分析", "生产-原油天然气", "生产-炼化煤化企业"],
      tablist_one: ["原油剩余技术储量", "原油剩余经济储量"],
      tablist_two: ["天然气剩余技术储量", "天然气剩余经济储量"],
      tablist_three: ["油田采储比排名", "气田采储比排名"],
      tablist_four: ["原油产量分析", "天然气产量分析"],
      tablist_five: ["本年度原油生产自给率", "本年度天然气生产自给率"],
      tablist_six: ["本年度原油生产企业分布", "本年度天然气生产企业分布"],
      selected: "0",
      selected_one: "0",
      selected_two: "0",
      selected_three: "0",
      selected_four: "0",
      selected_five: "0",
      selected_six: "0",
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
      //第一个页面的图表数据
      echarts: {
        data_three: [
          {
            value: 70,
            name: "油田1"
          },
          {
            value: 80,
            name: "油田2"
          },
          {
            value: 110,
            name: "油田3"
          },
          {
            value: 40,
            name: "油田4"
          },
          {
            value: 100,
            name: "油田5"
          },
          {
            value: 60,
            name: "油田6"
          }
        ],
        data_two: [
          {
            value: 0.1,
            name: "油田1"
          },
          {
            value: 0.2,
            name: "油田2"
          },
          {
            value: 0.12,
            name: "油田3"
          },
          {
            value: 0.18,
            name: "油田4"
          },
          {
            value: 0.1,
            name: "油田5"
          },
          {
            value: 0.06,
            name: "油田6"
          }
        ],
        data_one: [
          {
            value: 177,
            name: "油田1"
          },
          {
            value: 200,
            name: "油田2"
          },
          {
            value: 160,
            name: "油田3"
          },
          {
            value: 260,
            name: "油田4"
          },
          {
            value: 240,
            name: "油田5"
          },
          {
            value: 140,
            name: "油田6"
          }
        ],
        data_four: [
          {
            value: 0.1,
            name: "油田1"
          },
          {
            value: 0.06,
            name: "油田2"
          },
          {
            value: 0.04,
            name: "油田3"
          },
          {
            value: 0.12,
            name: "油田4"
          },
          {
            value: 0.05,
            name: "油田5"
          },
          {
            value: 0.03,
            name: "油田6"
          }
        ]
      },
      //第二个页面的柱状图数据
      bardata_one: [
        [50, 50, 251, 400, 300, 250, 375, 500, 375, 250, 275, 520],
        [250, 200, 374, "-", 375, "-", 175, 200, 175, "-", 260, 230],
        ["-", "-", "-", 100, "-", 125, "-", "-", "-", 150, "-", "-"]
      ],
      bardata_two: [
        [40, 60, 234, 300, 300, 230, 375, 460, 385, 230, 275, 420],
        [230, 220, 354, "-", 375, "-", 175, 210, 175, "-", 260, 230],
        ["-", "-", "-", 120, "-", 145, "-", "-", "-", 160, "-", "-"]
      ],

      tableTh_one: ["序号", "油田", "盟区", "采储比"],
      listData_one: [
        {
          oilfield: "吉祥油田",
          leaguerea: "巴彦淖尔市",
          ratio: "11.5"
        },
        {
          oilfield: "达尔其油田",
          leaguerea: "巴彦淖尔市",
          ratio: "11.2"
        },
        {
          oilfield: "包尔油田",
          leaguerea: "乌兰察布市",
          ratio: "11"
        },
        {
          oilfield: "汗赛油田",
          leaguerea: "锡林郭勒盟",
          ratio: "10.5"
        },
        {
          oilfield: "乌里雅斯太油田",
          leaguerea: "锡林郭勒盟",
          ratio: "10.5"
        }
      ],
      tableTh_two: ["序号", "气田", "盟区", "采储比"],
      listData_two: [
        {
          oilfield: "苏格里气田",
          leaguerea: "鄂尔多斯市",
          ratio: "11.5"
        },
        {
          oilfield: "靖边气田",
          leaguerea: "鄂尔多斯市",
          ratio: "11.2"
        },
        {
          oilfield: "胜利井气田",
          leaguerea: "鄂尔多斯市",
          ratio: "11"
        },
        {
          oilfield: "乌审旗气田",
          leaguerea: "鄂尔多斯市",
          ratio: "10.5"
        },
        {
          oilfield: "大牛地气田",
          leaguerea: "鄂尔多斯市",
          ratio: "10.1"
        }
      ]
    };
  },
  mounted() {
    this.drawLine("echartsOne", this.echarts.data_one);
    this.drawLine("echartsTwo", this.echarts.data_two);
    this.screenLeft = (this.screenWidth - 343) / 2 + "px";
    //this.drawLine_one('echartsThree')
  },
  methods: {
    //取消图片默认样式
    tanchuangShow() {
      this.show = 1;
      this.$nextTick(function() {
        this.closeLeft = (this.screenWidth - 35) / 2 + "px";
      });
    },
    tanchuangClose() {
      this.show = 0;
    },
    // 储情分析环形图
    drawLine(name, arry) {
      var echarts = require("echarts");
      var myChart = echarts.init(document.getElementById(name));
      myChart.setOption({
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: "horizontal",
          bottom: 30,
          left: "center",
          itemGap: 10,
          data: ["油田1", "油田2", "油田3", "油田4", "油田5", "油田6"],
          itemWidth: 15,
          itemHeight: 10
        },
        grid: {
          bottom: 40
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
                  color: "#9FA0A5"
                }
              }
            },
            labelLine: {
              length: 15,
              length2: 30
            },
            data: arry,
            color: [
              "#44c2fd",
              "#22ffc2",
              "#ffc522",
              "#ff1a40",
              "#d527b7",
              "#0000ff"
            ]
          }
        ]
      });
    },
    drawLine_one(name, arry) {
      let echarts = require("echarts");
      let myChart = echarts.init(document.getElementById(name));
      myChart.setOption({
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          },
          formatter: function(params) {
            var tar;
            if (params[1].value !== "-") {
              tar = params[1];
            } else {
              tar = params[0];
            }
            return tar.name + "<br/>" + tar.seriesName + " : " + tar.value;
          }
        },
        // legend: {
        //     data: ['支出', '收入']
        // },
        grid: {
          left: "3%",
          right: "5%",
          bottom: "10%",
          containLabel: true
        },
        xAxis: {
          type: "category",
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: "#ddd", // 颜色
              width: 1 // 粗细
            }
          },
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
            "12月"
          ]
        },
        yAxis: {
          name: "万吨",
          min: 0,
          max: 1000,
          interval: 250,
          type: "value",
          axisLabel: {
            fontSize: 12
          },
          axisLine: {
            lineStyle: {
              color: "#ddd", // 颜色
              width: 1 // 粗细
            }
          },
          axisTick: {
            show: false
          }
        },
        series: [
          {
            name: "辅助",
            type: "bar",
            stack: "总量",
            barWidth: 10,
            itemStyle: {
              barBorderColor: "rgba(0,0,0,0)",
              color: "rgba(0,0,0,0)"
            },
            emphasis: {
              itemStyle: {
                barBorderColor: "rgba(0,0,0,0)",
                color: "rgba(0,0,0,0)"
              }
            },
            data: arry[0]
          },
          {
            name: "收入",
            type: "bar",
            stack: "总量",
            barWidth: 10,
            itemStyle: {
              barBorderRadius: 30,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "#7497FF"
                },
                {
                  offset: 0,
                  color: "#74B2FF"
                }
              ])
            },
            label: {
              show: true,
              position: "top"
            },
            data: arry[1]
          },
          {
            name: "支出",
            type: "bar",
            stack: "总量",
            barWidth: 10,
            itemStyle: {
              barBorderRadius: 30,
              color: "#FF5140"
            },
            label: {
              show: true,
              position: "bottom"
            },
            data: arry[2]
          }
        ]
      });
    },
    drawPie(name, arry) {
      let echarts = require("echarts");
      let myChart = echarts.init(document.getElementById(name));
      myChart.setOption({
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          bottom: "center",
          right: 30,
          itemGap: 30,
          data: ["煤油", "汽油", "柴油"],
          itemWidth: 15,
          itemHeight: 10,
          textStyle: {
            color: "#9FA0A5",
            fontSize: 12
          }
        },
        series: [
          {
            name: "原油剩余技术储量",
            type: "pie",
            radius: ["40%", "55%"],
            center: ["50%", "50%"],
            label: {
              formatter: "{b|{b}} \n\n\n {per|{d}%\n}",
              padding: [0, -40, -15],
              rich: {
                per: {
                  fontSize: 12,
                  color: "#9FA0A5"
                },
                b: {
                  fontSize: 12
                }
              }
            },
            labelLine: {
              length: 15,
              length2: 30
            },
            data: [
              {
                value: 40,
                name: "煤油"
              },
              {
                value: 20,
                name: "汽油"
              },
              {
                value: 40,
                name: "柴油"
              }
            ],
            color: ["#96F0F2", "#14DBA0", "#FF9A13"]
          }
        ]
      });
    },
    drawPie_one(name, arry) {
      let echarts = require("echarts");
      let myChart = echarts.init(document.getElementById(name));
      myChart.setOption({
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          bottom: "center",
          right: 30,
          itemGap: 30,
          data: ["中石油", "中石化"],
          itemWidth: 15,
          itemHeight: 10
        },
        series: [
          {
            name: "原油剩余技术储量",
            type: "pie",
            radius: ["40%", "55%"],
            center: ["50%", "50%"],
            label: {
              formatter: "{b|{b}} \n\n\n {per|{d}%\n}",
              padding: [0, -40, -15],
              rich: {
                per: {
                  fontSize: 12,
                  color: "#9FA0A5"
                },
                b: {
                  fontSize: 12
                }
              }
            },
            labelLine: {
              length: 15,
              length2: 30
            },
            data: [
              {
                value: 23,
                name: "中石化"
              },
              {
                value: 77,
                name: "中石油"
              }
            ],
            color: ["#96F0F2", "#97C5FF"]
          }
        ]
      });
    },
    //主要按钮
    tabButton(id) {
      this.selected = id;
      //this.tabButton_one_t(id)
      if (0 == id) {
        this.a = 1;
        this.b = 0;
        this.c = 0;
        this.$nextTick(function() {
          this.drawLine("echartsOne", this.echarts.data_one);
          this.drawLine("echartsTwo", this.echarts.data_two);
        });
      }
      if (1 == id) {
        this.a = 0;
        this.b = 1;
        this.c = 0;
        this.$nextTick(function() {
          this.drawLine_one("echartsThree", this.bardata_one);
          this.drawPie("echartsFour");
          this.drawPie_one("echartsFive");
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

    /* 第二个页面的三个点击按钮 */
    //内容里的第一个按钮
    tabButton_four(id) {
      this.selected_four = id;
      if (this.p_i == 0 && id == 1) {
        this.drawLine_one("echartsThree", this.bardata_two);
        this.p_i = 1;
      }
      if (this.p_i == 1 && id == 0) {
        this.drawLine_one("echartsThree", this.bardata_one);
        this.p_i = 0;
      }
    },
    //内容里的第二个按钮
    tabButton_five(id) {
      this.selected_five = id;
      if (this.p_j == 0 && id == 1) {
        this.drawPie("echartsFour", this.echarts.data_four);
        this.p_j = 1;
      }
      if (this.P_j == 1 && id == 0) {
        this.drawPie("echartsFour", this.echarts.data_two);
        this.p_j = 0;
      }
    },
    //内容里的第三个按钮
    tabButton_six(id) {
      this.selected_six = id;
      if (this.p_g == 0 && id == 1) {
        this.p_g = 1;
      }
      if (this.p_g == 1 && id == 0) {
        this.p_g = 0;
      }
    }
  }
};
</script>

<style scoped>
/* 弹出框 */
.main /deep/ #tab_button {
  position: fixed;
  top: 98px;
}
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
}

.table_one_t {
  font-family: PingFang SC;
  border-collapse: collapse;
  width: 800px;
  margin: 50px auto;
}

.table_one_t th,
.table_one_t td {
  font-size: 14px;
  border: 1px solid #b9bec9;
  padding: 3px 7px 2px 7px;
  text-align: center;
  background-color: white;
}

.table_one_t th {
  background-color: #d8dbde;
}

#close {
  width: 35px;
  height: 35px;
  position: absolute;
  top: 205px;
}

#tab_button {
  width: 343px;
  height: 29px;
  background-color: rgba(0, 0, 0, 0.15);
  position: absolute;
  top: 20px;
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
  background-image: url(../../assets/img/industryAnalysis/椭圆.png);
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
}

.fontSize {
  position: relative;
  top: 90px;
  font: 20px bolder microsoft-yahei;
}

/* 按钮样式调整 */
.tab_oil {
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

.table_two {
  font-family: PingFang SC;
  width: 100%;
  border-collapse: collapse;
  margin: 50px auto;
  display: none;
}

.table_one th,
.table_one td {
  font-size: 14px;
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
