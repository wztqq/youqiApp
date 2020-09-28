<template>
  <div id="Project-Management">
    <div class="Project-Management-header">
      <van-tabs v-model="activeName">
        <van-tab title="拟建项目" name="a"></van-tab>
        <van-tab title="在建项目" name="b"></van-tab>
        <van-tab title="以建项目" name="c"></van-tab>
      </van-tabs>
    </div>
    <div class="Project-Management-main1" v-show="itemTabName == true">
      <div class="Project-Management-map">
        <!-- <iframe src="http://192.168.124.6:8099/toApp.html" frameborder="0" scrolling="no" allowtransparency="true" name="ht" style="height: 100%;width: 100%"></iframe> -->
      </div>
      <div class="Project-Management-plan">
        <div>
          <van-tabs v-model="activeName1">
            <van-tab :title="itemName[1]" name="a"></van-tab>
            <van-tab :title="itemName[2]" name="b"></van-tab>
          </van-tabs>
        </div>
        <div v-show="activeName1 == 'b'">
          <div>
            <p>当前投资额</p>
            <p>
              6,532
              <span>亿元</span>
            </p>
            <p>
              <span>同比</span> +0.25%
              <span>
                <i class="fa fa-line-chart" aria-hidden="true"></i>
              </span>
            </p>
          </div>
          <div id="Project-Management-plan-echarts2"></div>
          <div>
            <p>本年度计划投资额</p>
            <p>
              8,000
              <span>亿元</span>
            </p>
          </div>
        </div>
        <div v-show="activeName1 == 'a'">
          <div>
            <div id="Project-Management-plan-echarts1"></div>
            <div>
              <p>同比</p>
              <p>3.85%</p>
              <p>
                <i class="fa fa-sort-asc" aria-hidden="true"></i>
              </p>
            </div>
          </div>
          <div>
            <p>项目核准率</p>
            <p>平均投资收益率</p>
            <p>平均能耗节约率</p>
            <p>单位投资排放率</p>
            <p>平均达产年限</p>
          </div>
          <div>
            <p>
              87.2
              <span>%</span>
            </p>
            <p>
              93.1
              <span>%</span>
            </p>
            <p>
              65.4
              <span>%</span>
            </p>
            <p>
              223
              <span>吨/万元</span>
            </p>
            <p>
              2
              <span>年</span>
            </p>
          </div>
        </div>
      </div>
      <div class="Project-Management-bar">
        <div>
          <van-tabs v-model="activeName2">
            <van-tab :title="itemName[3]" name="a"></van-tab>
            <van-tab :title="itemName[4]" name="b"></van-tab>
          </van-tabs>
        </div>
        <div id="Project-Management-bar-echarts1"></div>
      </div>
      <div class="Project-Management-per">
        <div>
          <p>{{itemName[5]}}</p>
          <li>
            <p>
              <span style="background:#1B65F9"></span>&nbsp;煤炭
            </p>
            <p>
              <span style="background:#418BFF"></span>&nbsp;电力
            </p>
            <p>
              <span style="background:#2DC3FF"></span>&nbsp;石油
            </p>
            <p>
              <span style="background:#17E5FB"></span>&nbsp;天然气
            </p>
          </li>
        </div>
        <div>
          <div>
            <div>
              <p>
                83
                <span>%</span>
              </p>
              <p>拟开工项目</p>
            </div>
            <div id="Project-Management-per-planEcharts1"></div>
          </div>
          <div>
            <div>
              <p>推动项目</p>
              <p>
                83
                <span>%</span>
              </p>
            </div>
            <div id="Project-Management-per-planEcharts2"></div>
          </div>
          <div>
            <img src="../assets/img/ProjectManagement/001.png" alt />
          </div>
        </div>
        <div>
          <van-tabs v-model="activeName3">
            <van-tab title="推动项目" name="a"></van-tab>
            <van-tab title="拟开工项目" name="b"></van-tab>
          </van-tabs>
        </div>
        <div>
          <div id="Project-Management-per-Charts"></div>
          <div>
            <vue-good-table
              :columns="columns"
              max-height="2.8rem"
              styleClass="vgt-table condensed"
              :rows="rows"
            />
          </div>
        </div>
      </div>
      <div class="Project-Management-main">
        <div>
          <p>{{itemName[0]}}</p>
          <div>
            <van-dropdown-menu>
              <van-dropdown-item v-model="value1" :options="option1" />
            </van-dropdown-menu>
          </div>
        </div>
        <div>
          <vue-good-table
            :columns="columns1"
            max-height="4.8rem"
            styleClass="vgt-table condensed"
            :rows="rows1"
          />
        </div>
      </div>
    </div>
    <div class="Project-Management-main2" v-show="itemTabName == false">
      <div class="Project-Management-map"></div>
      <div id="Project-Management-main2-bar">
        <div id="Project-Management-main2-bar1"></div>
      </div>
      <div class="Project-Management-main2-classify">
        <div>
          <p>企业分类统计</p>
          <div>
            <van-tabs v-model="activeName3">
              <van-tab title="推动项目" name="a"></van-tab>
              <van-tab title="拟开工项目" name="b"></van-tab>
            </van-tabs>
          </div>
        </div>
        <div>
          <div>
            <li>
              101
              <span>家</span>
            </li>
            <li>
              101
              <span>家</span>
            </li>
            <li>
              101
              <span>家</span>
            </li>
            <li>
              101
              <span>家</span>
            </li>
          </div>
        </div>
      </div>
      <div class="Project-Management-main2-search">
        <div>企业查询</div>
        <div>
          <div>
            <van-dropdown-menu>
              <van-dropdown-item v-model="value2" :options="option2" />
            </van-dropdown-menu>
          </div>
          <div>
            <van-search v-model="value" placeholder="请输入搜索关键词" />
          </div>
          <div>
            <van-button type="info">模糊查询</van-button>
          </div>
        </div>
        <div>
          <vue-good-table :columns="columns2" max-height="3.9rem" :rows="rows2" />
        </div>
      </div>
      <div class="Project-Management-main2-message">
        <p>企业信息</p>
        <div>
          <p>
            企业名称：
            <span>包头市明奥电力科技有限责任公司</span>
          </p>
          <p>
            成立日期：
            <span>2007-12-13</span>
          </p>
          <p>
            注册编号：
            <span>150103000002613</span>
          </p>
          <p>
            注册资本：
            <span>1000万元人民币</span>
          </p>
          <p>
            公司类型：
            <span>有限责任公司</span>
          </p>
          <p>
            法人代表：
            <span>张珍玉</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: "a",
      activeName1: "a",
      activeName2: "a",
      activeName3: "a",
      itemTabName: true,
      itemName: [
        "重大拟建项目工作进程",
        "拟建项目总体概况",
        "拟建工业项目固定投资",
        "拟开工项目投资",
        "推动中项目投资",
        "拟建项目分布",
      ],
      barTitleName: "拟开工项目投资",
      columns: [
        {
          label: "",
          field: "name",
          sortable: false,
        },
        {
          label: "项目数量",
          field: "age",
          type: "number",
          sortable: false,
        },
        {
          label: "占地面积",
          field: "createdAt",
          sortable: false,
        },
        {
          label: "总设计产量",
          field: "score",
          type: "percentage",
          sortable: false,
        },
      ],
      rows: [
        { id: 1, name: "John", age: 20, createdAt: "", score: 0.03343 },
        {
          id: 2,
          name: "Jane",
          age: 24,
          createdAt: "2011-10-31",
          score: 0.03343,
        },
        {
          id: 3,
          name: "Susan",
          age: 16,
          createdAt: "2011-10-30",
          score: 0.03343,
        },
        {
          id: 4,
          name: "Chris",
          age: 55,
          createdAt: "2011-10-11",
          score: 0.03343,
        },
      ],
      columns1: [
        {
          label: "项目名称",
          field: "name",
          sortable: false,
        },
        {
          label: "企业主体",
          field: "age",
          // type: 'number',
          sortable: false,
        },
        {
          label: "行业类型",
          field: "createdAt",
          sortable: false,
        },
      ],
      rows1: [
        {
          name: "阿拉善风光热综合新能源基地",
          age: "呼和浩特市闽高煤炭科技有限公司",
          createdAt: "煤炭",
        },
        {
          name: "阿拉善风光热综合新能源基地",
          age: "呼和浩特市闽高煤炭科技有限公司",
          createdAt: "煤炭",
        },
        {
          name: "阿拉善风光热综合新能源基地",
          age: "呼和浩特市闽高煤炭科技有限公司",
          createdAt: "煤炭",
        },
        {
          name: "阿拉善风光热综合新能源基地",
          age: "呼和浩特市闽高煤炭科技有限公司",
          createdAt: "煤炭",
        },
        {
          name: "阿拉善风光热综合新能源基地",
          age: "呼和浩特市闽高煤炭科技有限公司",
          createdAt: "煤炭",
        },
        {
          name: "阿拉善风光热综合新能源基地",
          age: "呼和浩特市闽高煤炭科技有限公司",
          createdAt: "煤炭",
        },
        {
          name: "阿拉善风光热综合新能源基地",
          age: "呼和浩特市闽高煤炭科技有限公司",
          createdAt: "煤炭",
        },
        {
          name: "阿拉善风光热综合新能源基地",
          age: "呼和浩特市闽高煤炭科技有限公司",
          createdAt: "煤炭",
        },
        {
          name: "阿拉善风光热综合新能源基地",
          age: "呼和浩特市闽高煤炭科技有限公司",
          createdAt: "煤炭",
        },
        {
          name: "阿拉善风光热综合新能源基地",
          age: "呼和浩特市闽高煤炭科技有限公司",
          createdAt: "煤炭",
        },
      ],
      columns2: [
        {
          label: "按字母",
          field: "name",
          sortable: false,
        },
        {
          label: "企业名称",
          field: "age",
          // type: 'number',
          sortable: false,
        },
      ],
      rows2: [
        {
          name: "B",
          age: "呼和浩特市闽高煤炭科技有限公司",
        },
        {
          name: "B",
          age: "呼和浩特市闽高煤炭科技有限公司",
        },
        {
          name: "B",
          age: "呼和浩特市闽高煤炭科技有限公司",
        },
        {
          name: "B",
          age: "呼和浩特市闽高煤炭科技有限公司",
        },
        {
          name: "B",
          age: "呼和浩特市闽高煤炭科技有限公司",
        },
        {
          name: "B",
          age: "呼和浩特市闽高煤炭科技有限公司",
        },
        {
          name: "B",
          age: "呼和浩特市闽高煤炭科技有限公司",
        },
        {
          name: "B",
          age: "呼和浩特市闽高煤炭科技有限公司",
        },
        {
          name: "B",
          age: "呼和浩特市闽高煤炭科技有限公司",
        },
        {
          name: "B",
          age: "呼和浩特市闽高煤炭科技有限公司",
        },
      ],

      value1: 0,
      option1: [
        { text: "煤炭生意", value: 0 },
        { text: "电力行业", value: 1 },
        { text: "石油行业", value: 2 },
        { text: "天然气行业", value: 3 },
      ],
      value2: 0,
      option2: [
        { text: "煤炭", value: 0 },
        { text: "电力", value: 1 },
        { text: "石油", value: 2 },
        { text: "煤制油", value: 3 },
        { text: "煤制气", value: 4 },
        { text: "天然气", value: 5 },
      ],
    };
  },
  watch: {
    activeName(val) {
      if (val == "a") {
        (this.itemName = [
          "重大拟建项目工作进程",
          "拟建项目总体概况",
          "拟建工业项目固定投资",
          "拟开工项目投资",
          "推动中项目投资",
          "拟建项目分布",
        ]),
          (this.itemTabName = true);
      } else if (val == "b") {
        this.itemName = [
          "重大在建项目工作进程",
          "在建项目总体概况",
          "在建工业项目固定投资",
          "新建项目投资",
          "续建项目投资",
          "在建项目分布",
        ];
        this.itemTabName = true;
      } else if (val == "c") {
        this.itemTabName = false;
      }
      this.$nextTick(() => {
        window.dispatchEvent(new Event("resize"));
      });
      if (this.activeName2 == "a") {
        if (val == "a") {
          this.barTitleName = "拟开工项目投资";
          this.ProjectManagementBarEcharts1();
        } else if (val == "b") {
          this.barTitleName = "新建项目投资";
          this.ProjectManagementBarEcharts1();
        }
      } else if (this.activeName2 == "b") {
        if (val == "a") {
          this.barTitleName = "推动中项目投资";
          this.ProjectManagementBarEcharts1();
        } else if (val == "b") {
          this.barTitleName = "续建项目投资";
          this.ProjectManagementBarEcharts1();
        }
      }
    },
    activeName2(val) {
      // console.log(val,'1111111111')
      if (this.activeName == "a") {
        if (val == "a") {
          this.barTitleName = "拟开工项目投资";
          this.ProjectManagementBarEcharts1();
        } else if (val == "b") {
          this.barTitleName = "推动中项目投资";
          this.ProjectManagementBarEcharts1();
        }
      } else if (this.activeName == "b") {
        if (val == "a") {
          this.barTitleName = "新建项目投资";
          this.ProjectManagementBarEcharts1();
        } else if (val == "b") {
          this.barTitleName = "续建项目投资";
          this.ProjectManagementBarEcharts1();
        }
      }
    },
  },
  methods: {
    ProjectManagementPlanEcharts1() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(
        document.getElementById("Project-Management-plan-echarts1")
      );
      // 指定图表的配置项和数据
      let num = 0;
      var option = {
        // backgroundColor: '#111',
        title: [
          {
            text: "拟建项目",
            x: "center",
            top: "22%",
            textStyle: {
              color: "#000",
              fontSize: 12,
              fontWeight: "600",
            },
          },
          {
            text: "6052",
            x: "center",
            top: "50%",
            textStyle: {
              fontSize: "16",
              color: "#000",
              fontFamily: "Lato",
              foontWeight: "600",
            },
          },
        ],
        polar: {
          radius: ["82%", "98%"],
          center: ["50%", "50%"],
        },
        angleAxis: {
          max: 100,
          show: false,
        },
        radiusAxis: {
          type: "category",
          show: true,
          axisLabel: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
        },
        series: [
          {
            name: "",
            type: "bar",
            roundCap: true,
            barWidth: 60,
            showBackground: true,
            backgroundStyle: {
              color: "rgba(66, 66, 66, .3)",
            },
            data: [80],
            coordinateSystem: "polar",

            itemStyle: {
              normal: {
                color: "#01a6ff",
              },
            },
          },
        ],
      };
      function numb() {
        num = num + 5;
        myChart.setOption(option, true);
      }
      setInterval(function () {
        numb();
      }, 100);
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
    ProjectManagementPlanEcharts2() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(
        document.getElementById("Project-Management-plan-echarts2")
      );
      // 指定图表的配置项和数据
      var option = {
        // backgroundColor: '#000',
        angleAxis: {
          show: false,
          max: (100 * 360) / 270, //-45度到225度，二者偏移值是270度除360度
          type: "value",
          startAngle: 225, //极坐标初始角度
          splitLine: {
            show: false,
          },
        },
        barMaxWidth: 12, //圆环宽度
        radiusAxis: {
          show: false,
          type: "category",
        },
        //圆环位置和大小
        polar: {
          center: ["50%", "50%"],
          radius: ["80%", "98%"],
        },
        series: [
          {
            type: "bar",
            data: [
              {
                //上层圆环，显示数据
                value: 75,
                itemStyle: {
                  color: {
                    //图形渐变颜色方法，四个数字分别代表，右，下，左，上，offset表示0%到100%
                    type: "linear",
                    x: 0,
                    y: 0,
                    x2: 1, //从左到右 0-1
                    y2: 0,
                    colorStops: [
                      {
                        offset: 0,
                        color: "rgb(6,178,166)",
                      },
                      {
                        offset: 1,
                        color: "rgb(6,178,166)",
                      },
                    ],
                  },
                },
              },
            ],
            barGap: "-100%", //柱间距离,上下两层圆环重合
            coordinateSystem: "polar",
            roundCap: true, //顶端圆角
            z: 2, //圆环层级，同zindex
          },
          {
            //下层圆环，显示最大值
            type: "bar",
            data: [
              {
                value: 100,
                itemStyle: {
                  color: "rgb(216,229,252)",
                },
              },
            ],
            barGap: "-100%",
            coordinateSystem: "polar",
            roundCap: true,
            z: 1,
          },
          //仪表盘
          {
            name: "AQI",
            type: "gauge",
            startAngle: 225, //起始角度，同极坐标
            endAngle: -45, //终止角度，同极坐标
            axisLine: {
              show: false,
            },
            splitLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              show: false,
            },
            splitLabel: {
              show: false,
            },
            pointer: {
              show: false,
            },
            title: {
              offsetCenter: [-20, -10],
              color: "#FFFFFF",
              fontSize: 30,
              fontWeight: 500,
              rich: {
                a: {
                  fontWeight: "normal",
                  fontSize: 12,
                  color: "rgb(154,170,193)",
                  padding: [0, 0, 40, 40],
                },
                b: {
                  fontWeight: "normal",
                  fontSize: 22,
                  color: "rgb(6,178,166)",
                  padding: [0, 0, 10, 40],
                },
                c: {
                  fontWeight: "normal",
                  fontSize: 12,
                  color: "rgb(6,178,166)",
                  padding: [0, 0, 10, 0],
                },
              },
            },
            detail: {
              color: "#fff",
              fontSize: 16,
              offsetCenter: [25, 20],
            },
            data: [
              {
                value: 75,
                name:
                  "{a|" +
                  "当年投资完成率" +
                  "}" +
                  "\n" +
                  "{b|" +
                  75 +
                  "}" +
                  "{c|" +
                  "%" +
                  "}",
              },
            ],
          },
        ],
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
    ProjectManagementBarEcharts1() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(
        document.getElementById("Project-Management-bar-echarts1")
      );
      // 指定图表的配置项和数据
      // var index = 0;
      // var colorList = ['#f36c6c', '#e6cf4e', '#20d180', '#0093ff'];
      var dataName = this.barTitleName;
      var option = {
        title: {
          top: "1%",
          left: 10,
          text: dataName,
          textStyle: {
            align: "center",
            color: "#000",
            fontSize: 12,
          },
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        legend: {
          top: 5,
          right: 10,
          itemWidth: 10,
          itemHeight: 6,
          // padding: [5, 10],
          textStyle: {
            fontSize: 10,
            color: "#96A4F4",
            padding: [3, 0, 0, 0],
          },
          // data: data.legend
        },
        grid: {
          left: "15%",
          top: "18%",
          right: "12%",
          bottom: "5%",
        },
        xAxis: {
          type: "value",
          splitLine: {
            show: false,
            // lineStyle: {

            //     color: '#f00',
            //     width: 1,
            //     type: 'dashed'
            // }
          },
          minorSplitLine: {
            show: false,
          },
          axisLabel: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          axisLine: {
            show: false,
          },
        },
        yAxis: [
          {
            type: "category",
            // inverse: true,
            name: "地区",
            // padding:[-10],
            axisLine: {
              show: false,
              lineStyle: {
                // color: '#333',
                // width: 1,
                // type: 'dashed'
              },
            },
            nameTextStyle: {
              padding: [0, 0, -10, -70],
              fontSize: 10,
              color: "rgb(91, 125, 162)",
            },
            splitLine: {
              show: false,
              // lineStyle: {

              //     color: '#333',
              //     width: 1,
              //     type: 'dashed'
              // }
            },
            axisTick: {
              show: false,
            },
            axisPointer: {
              label: {
                show: true,
                margin: 30,
              },
            },
            data: [
              "全区",
              "呼和浩特",
              "包头",
              "乌海",
              "赤峰",
              "通辽",
              "鄂尔多斯",
              "呼伦贝尔",
              "巴彦淖尔",
            ],
            axisLabel: {
              margin: 50,
              fontSize: 10,
              align: "left",
              color: "#333333",
            },
          },
          {
            type: "category",
            name: "亿元",
            // inverse: true,
            nameTextStyle: {
              padding: [0, 0, -10, 50],
              fontSize: 10,
              color: "rgb(91, 125, 162)",
            },
            axisLine: {
              show: false,
            },
            splitLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisPointer: {
              label: {
                show: true,
                margin: 30,
              },
            },
            data: [198, 182, 196, 152, 165, 852, 851, 585, 8585],
            axisLabel: {
              margin: 10,
              fontSize: 12,
              color: "#333333",
              fontWeight: "bold",
              align: "left",
            },
          },
        ],
        series: [
          {
            z: 2,
            name: "煤炭",
            type: "bar",
            barCategoryGap: "60%",
            barWidth: 12,
            stack: "总量",
            showBackground: true,
            data: [1.66, 1.86, 1.82, 1.8, 1.53, 1.47, 1.3, 1.25, 1.1],
            color: "rgb(69,114,255)",
          },
          {
            z: 2,
            name: "电力",
            type: "bar",
            barWidth: 12,
            stack: "总量",
            barCategoryGap: "60%",
            // showBackground: true,
            data: [1.66, 1.86, 1.82, 1.8, 1.53, 1.47, 1.3, 1.25, 1.1],
            color: "rgb(37,187,178)",
          },
          {
            z: 2,
            name: "石油",
            type: "bar",
            stack: "总量",
            barWidth: 12,
            barCategoryGap: "60%",
            // showBackground: true,
            data: [1.66, 1.86, 1.82, 1.8, 1.53, 1.47, 1.3, 1.25, 1.1],
            color: "rgb(43,238,196)",
          },
          {
            z: 2,
            name: "天然气",
            type: "bar",
            stack: "总量",
            barWidth: 12,
            barCategoryGap: "60%",
            // showBackground: true,
            itemStyle: {
              // borderWidth: '10,10',
              // borderColor: 'rgba(255, 255, 255, 1)', //同背景色一样
              barBorderRadius: [0, 80, 80, 0],
            },
            data: [1.66, 1.86, 1.82, 1.8, 1.53, 1.47, 1.3, 1.25, 1.1],
            color: "rgb(101,251,249)",
          },
        ],
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
    ProjectManagementperplanEcharts2() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(
        document.getElementById("Project-Management-per-planEcharts2")
      );
      // 指定图表的配置项和数据
      var data = [10];

      var option = {
        title: {
          text: "完成度",
          show: false,
        },
        grid: {
          left: 1,
          right: 1,
          bottom: "1",
          top: 1,
          // containLabel: true
        },
        xAxis: {
          show: false,
        },
        yAxis: [
          {
            show: false,
            data: [],
          },
          {
            show: false,
            data: [],
          },
        ],
        series: [
          {
            name: "test",
            type: "bar",
            stack: "总量1",
            yAxisIndex: 1,
            z: 999,
            barWidth: 6,
            itemStyle: {
              normal: {
                color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 1,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: "rgba(237,109,46,0)", // 0% 处的颜色
                    },
                    {
                      offset: 0.5,
                      color: "rgba(237,109,46,0)",
                    },
                    {
                      offset: 0.5,
                      color: "#E74E25",
                    },
                    {
                      offset: 1,
                      color: "#E74E25", // 100% 处的颜色
                    },
                  ],
                  global: false, // 缺省为 false
                },

                label: {
                  show: false,
                  position: "insideRight",
                },
              },
            },
            data: [5],
          },
          {
            name: "test",
            type: "bar",
            stack: "总量",
            z: 999,
            barWidth: 6,
            itemStyle: {
              normal: {
                color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 1,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: "rgba(237,109,46,0)", // 0% 处的颜色
                    },
                    {
                      offset: 0.5,
                      color: "rgba(237,109,46,0)",
                    },
                    {
                      offset: 0.5,
                      color: "#E74E25",
                    },
                    {
                      offset: 1,
                      color: "#E74E25", // 100% 处的颜色
                    },
                  ],
                  global: false, // 缺省为 false
                },

                label: {
                  show: false,
                  position: "insideRight",
                },
              },
            },
            data: [5],
          },
          {
            name: "条",
            type: "bar",
            stack: "总量",
            z: 999,
            yAxisIndex: 0,
            data: data,
            barWidth: 6,
            itemStyle: {
              normal: {
                color: "rgba(231, 78, 37, 1)",
                // barBorderRadius:[100,0,100,0],
              },
            },

            label: {
              normal: {
                show: false,
                position: "inside",
                formatter: "{c}%",
              },
            },
          },
          {
            name: "test",
            type: "bar",
            stack: "总量",
            z: 999,
            barWidth: 6,
            itemStyle: {
              normal: {
                color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 1,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: "rgba(231, 78, 37, 1)", // 0% 处的颜色
                    },
                    {
                      offset: 0.5,
                      color: "rgba(231, 78, 37, 1)",
                    },
                    {
                      offset: 0.5,
                      color: "rgba(240, 244, 249, 1)",
                    },
                    {
                      offset: 1,
                      color: "rgba(240, 244, 249, 1)", // 100% 处的颜色
                    },
                  ],
                  global: false, // 缺省为 false
                },

                label: {
                  show: false,
                  position: "insideRight",
                },
              },
            },
            data: [5],
          },
          {
            name: "框",
            type: "bar",
            stack: "总量1",
            z: 9,
            yAxisIndex: 1,
            barGap: "-100%",
            data: [100],
            barWidth: 6,
            itemStyle: {
              normal: {
                color: "rgba(240, 244, 249, 1)",

                // borderColor: '#d87a7f',
                // borderWidth: 5,
                // barBorderRadius:[100,0,0,0],
              },
            },
          },
        ],
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
    ProjectManagementperplanEcharts1() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(
        document.getElementById("Project-Management-per-planEcharts1")
      );
      // 指定图表的配置项和数据
      var data = [-10];

      var option = {
        title: {
          text: "完成度",
          show: false,
        },
        grid: {
          left: 1,
          right: 1,
          bottom: 1,
          top: 1,
          // containLabel: true
        },
        xAxis: {
          show: false,
        },
        yAxis: [
          {
            show: false,
            data: [],
          },
          {
            show: false,
            data: [],
          },
        ],
        series: [
          {
            name: "test",
            type: "bar",
            stack: "总量1",
            yAxisIndex: 1,
            z: 999,
            barWidth: 6,
            itemStyle: {
              normal: {
                color: {
                  type: "linear",
                  x: 1,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: "rgba(237,109,46,0)", // 0% 处的颜色
                    },
                    {
                      offset: 0.5,
                      color: "rgba(237,109,46,0)",
                    },
                    {
                      offset: 0.5,
                      color: "rgba(2, 172, 252, 1)",
                    },
                    {
                      offset: 1,
                      color: "rgba(2, 172, 252, 1)", // 100% 处的颜色
                    },
                  ],
                  global: false, // 缺省为 false
                },

                label: {
                  show: false,
                  position: "insideRight",
                },
              },
            },
            data: [-5],
          },
          {
            name: "test",
            type: "bar",
            stack: "总量",
            z: 999,
            barWidth: 6,
            itemStyle: {
              normal: {
                color: {
                  type: "linear",
                  x: 1,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: "rgba(237,109,46,0)", // 0% 处的颜色
                    },
                    {
                      offset: 0.5,
                      color: "rgba(237,109,46,0)",
                    },
                    {
                      offset: 0.5,
                      color: "rgba(2, 172, 252, 1)",
                    },
                    {
                      offset: 1,
                      color: "rgba(2, 172, 252, 1)", // 100% 处的颜色
                    },
                  ],
                  global: false, // 缺省为 false
                },

                label: {
                  show: false,
                  position: "insideRight",
                },
              },
            },
            data: [-5],
          },
          {
            name: "条",
            type: "bar",
            stack: "总量",
            z: 999,
            yAxisIndex: 0,
            data: data,
            barWidth: 6,
            itemStyle: {
              normal: {
                color: "rgba(2, 172, 252, 1)",
                // barBorderRadius:[100,0,100,0],
              },
            },

            label: {
              normal: {
                show: false,
                position: "inside",
                formatter: "{c}%",
              },
            },
          },
          {
            name: "test",
            type: "bar",
            stack: "总量",
            z: 999,
            barWidth: 6,
            itemStyle: {
              normal: {
                color: {
                  type: "linear",
                  x: 1,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: "rgba(2, 172, 252, 1)", // 0% 处的颜色
                    },
                    {
                      offset: 0.5,
                      color: "rgba(2, 172, 252, 1)",
                    },
                    {
                      offset: 0.5,
                      color: "rgba(240, 244, 249, 1)",
                    },
                    {
                      offset: 1,
                      color: "rgba(240, 244, 249, 1)", // 100% 处的颜色
                    },
                  ],
                  global: false, // 缺省为 false
                },

                label: {
                  show: false,
                  position: "insideRight",
                },
              },
            },
            data: [-5],
          },
          {
            name: "框",
            type: "bar",
            stack: "总量1",
            z: 9,
            yAxisIndex: 1,
            barGap: "-100%",
            data: [-100],
            barWidth: 6,
            itemStyle: {
              normal: {
                color: "rgba(240, 244, 249, 1)",

                // borderColor: '#d87a7f',
                // borderWidth: 5,
                // barBorderRadius:[100,0,0,0],
              },
            },
          },
        ],
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
    ProjectManagementperCharts() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(
        document.getElementById("Project-Management-per-Charts")
      );
      // 指定图表的配置项和数据
      // var legend = ['特色产业扶贫', '生态补偿扶贫', '劳务协助扶贫', '社会保障兜底扶贫'];
      var data = [1, 2, 3, 4];
      var option = {
        // backgroundColor: '#05274C',
        color: ["#19e5fd", "#2cc5ff", "#428aff", "#1b65f8"],
        tooltip: {
          //提示框
          trigger: "item",
          triggerOn: "mousemove",
          backgroundColor: "rgba(1,70,86,1)",
          borderColor: "rgba(0,246,255,1)",
          borderWidth: 0.5,
          textStyle: {
            fontSize: 14,
          },
        },
        title: [
          {
            // text: 18653,
            // subtext: '救助人口',
            textStyle: {
              fontSize: 10,
              color: "#fff",
            },
            subtextStyle: {
              fontSize: 10,
              color: "#fff",
            },
            textAlign: "center",
            x: "50%",
            y: "47%",
          },
        ],
        series: [
          {
            color: ["#19e5fd", "#2cc5ff", "#428aff", "#1b65f8"],
            type: "pie",
            radius: ["35%", "50%"],
            labelLine: {
              normal: {
                length: 5,
                length2: 30,
                lineStyle: {
                  type: "solid",
                },
              },
            },
            label: {
              normal: {
                formatter: (params) => {
                  console.log(params);
                  return "{c|" + params.percent.toFixed(0) + "%}";
                },
                borderWidth: 0,
                borderRadius: 4,
                padding: [0, -25],
                height: 20,
                fontSize: 10,
                align: "center",
                color: "#3494BD",
                // length:'10px',
                rich: {
                  c: {
                    fontSize: 10,
                    lineHeight: 10,
                    color: "#000",
                  },
                },
              },
            },
            data: data,
          },
        ],
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
    ProjectManagementmain2bar() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(
        document.getElementById("Project-Management-main2-bar1")
      );
      // 指定图表的配置项和数据
      var option = {
        title: {
          top: "2%",
          left: 10,
          text: "行业企业数量分析",
          textStyle: {
            align: "center",
            color: "#000",
            fontSize: 12,
          },
        },
        tooltip: {
          show: true,
          trigger: "item",
          backgroundColor: "rgba(0,0,0,0.5)",
          axisPointer: {
            lineStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "#FFD56E",
                  },
                  {
                    offset: 0.5,
                    color: "#fff",
                  },
                  {
                    offset: 1,
                    color: "#FFD56E",
                  },
                ],
                global: false,
              },
            },
          },
        },
        grid: {
          top: "20%",
          left: "15%",
          right: "10%",
          bottom: "15%",
          //   containLabel: true
        },
        xAxis: [
          {
            type: "category",
            data: ["煤炭", "电力", "石油", "煤制油", "煤制气", "天然气"],
            axisTick: {
              show: false, // 是否显示坐标轴轴线
            },
            axisLabel: {
              color: "#282828",
              textStyle: {
                color: "#646d7c",
                fontSize: 10,
                padding: 7,
              },
            },
            splitLine: {
              show: false,
            },
            boundaryGap: true,
            axisLine: {
              //坐标轴轴线相关设置。
              show: true,
              inside: false,
              lineStyle: {
                color: "#3c4356",
              },
            },
          },
        ],

        yAxis: [
          {
            type: "value",
            axisLabel: {
              //坐标轴刻度标签的相关设置。
              show: true,
              textStyle: {
                color: "#646d7c",
                fontSize: 10,
              },
            },
            axisLine: {
              show: true,
            },
            axisTick: {
              show: false,
            },
            splitLine: {
              lineStyle: {
                color: "rgba(131,101,101,0.2)",
                type: "dashed",
              },
            },
            show: true,
          },
        ],
        series: [
          {
            type: "bar",
            barMaxWidth: 10,
            // barGap: '100%',
            data: [152, 165, 851, 351, 8546, 1264],
            itemStyle: {
              normal: {
                color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: "#ff7a66",
                    },
                    {
                      offset: 1,
                      color: "#ff717f",
                    },
                  ],
                },
                barBorderRadius: [30, 30, 0, 0],
              },
            },
          },
        ],
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
  },
  mounted() {
    this.ProjectManagementPlanEcharts1();
    this.ProjectManagementPlanEcharts2();
    this.ProjectManagementBarEcharts1();
    this.ProjectManagementperplanEcharts2();
    this.ProjectManagementperplanEcharts1();
    this.ProjectManagementperCharts();
    this.ProjectManagementmain2bar();
  },
};
</script>
<style lang="scss">
#Project-Management {
  width: 100%;
  position: relative;
  .Project-Management-header {
    width: 94%;
    height: 0.6rem;
    // border: 1px solid red;
    border-radius: 0.14rem;
    overflow: hidden;
    position: absolute;
    top: 0.2rem;
    // margin: auto;
    left: 3%;
    .van-tab {
      height: 0.58rem !important;
      line-height: 0.58rem !important;
      background: rgba(197, 205, 210, 0.6);
      color: #fff;
      font-size: 12px;
      font-weight: 600;
    }
    .van-tab--active {
      font-size: 12px;
      font-weight: 600;
      background: rgba(128, 139, 148, 0.6);
      height: 0.58rem !important;
      line-height: 0.58rem !important;
      border-radius: 0.14rem;
    }
  }
  .Project-Management-main1 {
    width: 100%;
    background: rgb(220, 220, 220);
    .Project-Management-map {
      width: 100%;
      height: 6.28rem;
      // border: 1px solid red;
      background: #fff;
    }
    .Project-Management-plan {
      width: 100%;
      height: 4.35rem;
      // border: 1px solid yellow;
      padding-top: 0.15rem;
      background: #fff;
      margin-top: 0.15rem;
      > div:first-child {
        width: 94%;
        height: 0.54rem;
        overflow: hidden;
        margin: auto;
        margin-top: 0.2rem;
        .van-tab {
          height: 0.54rem !important;
          line-height: 0.54rem !important;
          background: #fff;
          color: rgb(35, 107, 214);
          font-size: 12px;
          border-radius: 0.02rem;
          border: 1px solid rgb(35, 107, 214);
          // font-weight: 600;
        }
        .van-tab--active {
          font-size: 12px;
          // font-weight: 600;
          background: rgb(35, 107, 214);
          color: #fff;
          height: 0.54rem !important;
          line-height: 0.54rem !important;
          border-radius: 0.02rem;
        }
      }
      > div:last-child {
        width: 94%;
        height: 3.26rem;
        // border: 1px solid red;
        margin: auto;
        padding-top: 0.4rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        // text-align: center;
        > div:first-child {
          width: 2.2rem;
          > div:first-child {
            width: 2.12rem;
            height: 2.12rem;
            // border: 1px solid red;
            margin: auto;
          }
          > div:last-child {
            margin-top: 0.2rem;
            display: flex;
            justify-content: space-around;
            align-items: center;
            text-align: center;
            > p:nth-child(2) {
              font-size: 18px;
            }
            > p:first-child {
              font-size: 12px;
              color: rgb(173, 180, 198);
            }
            > p:last-child {
              font-size: 12px;
              color: red;
            }
          }
        }
        > div:nth-child(2) {
          > p {
            color: #636d74;
            line-height: 0.5rem;
            font-size: 13px;
          }
        }
        > div:last-child {
          line-height: 0.5rem;
          font-size: 14px;
          font-weight: 600;
          p {
            > span {
              font-size: 12px;
              font-weight: 400;
            }
          }
        }
      }
      > div:nth-child(2) {
        width: 94%;
        height: 3.26rem;
        // border: 1px solid red;
        margin: auto;
        padding-top: 0.4rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        > div {
          height: 2.4rem;
        }
        > #Project-Management-plan-echarts2 {
          width: 2.4rem;
          height: 2.4rem;
          // border: 1px solid red;
        }
        > div:first-child {
          > p {
            line-height: 0.7rem;
          }
          > p:first-child {
            font-size: 10px;
            color: #626d74;
          }
          > p:nth-child(2) {
            font-size: 18px;
            > span {
              font-size: 10px;
              color: #626d74;
            }
          }
          > p:last-child {
            font-size: 14px;
            color: #626d74;
            > span:first-child {
              font-size: 12px;
            }
            > span:last-child {
              font-size: 12px;
              color: red;
            }
          }
        }
        > div:last-child {
          > p {
            line-height: 0.7rem;
          }
          > p:first-child {
            color: #626d74;
            font-size: 10px;
          }
          > p:nth-child(2) {
            font-size: 18px;
            > span {
              font-size: 10px;
              color: #626d74;
            }
          }
        }
      }
    }
    .Project-Management-bar {
      width: 100%;
      height: 6.2rem;
      // border: 1px solid yellow;
      padding-top: 0.05rem;
      background: #fff;
      margin-top: 0.15rem;
      > div:first-child {
        width: 94%;
        height: 0.54rem;
        overflow: hidden;
        margin: auto;
        margin-top: 0.2rem;
        .van-tab {
          height: 0.54rem !important;
          line-height: 0.54rem !important;
          background: #fff;
          color: rgb(35, 107, 214);
          font-size: 12px;
          border-radius: 0.02rem;
          border: 1px solid rgb(35, 107, 214);
          // font-weight: 600;
        }
        .van-tab--active {
          font-size: 12px;
          // font-weight: 600;
          background: rgb(35, 107, 214);
          color: #fff;
          height: 0.54rem !important;
          line-height: 0.54rem !important;
          border-radius: 0.02rem;
        }
      }
      > div:last-child {
        width: 94%;
        height: 5.2rem;
        // border: 1px solid red;
        margin: auto;
      }
    }
    .Project-Management-per {
      width: 100%;
      height: 6rem;
      // border: 1px solid red;
      background: #fff;
      margin-top: 0.15rem;
      > div:first-child {
        width: 94%;
        height: 0.88rem;
        // border: 1px solid yellow;
        // margin-top: .2rem;
        padding-top: 0.2rem;
        margin: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        > p {
          font-size: 14px;
          font-weight: 600;
        }
        > li {
          width: 3.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 12px;
          > p {
            > span {
              display: inline-block;
              width: 8px;
              height: 8px;
              background: red;
              background-size: 10px 10px;
              margin-bottom: 1px;
              // padding-left: 10px;
            }
          }
        }
      }
      > div:nth-child(2) {
        width: 94%;
        height: 1.4rem;
        // border: 1px solid red;
        margin: auto;
        position: relative;
        margin-top: 0.2rem;
        > div:last-child {
          width: 0.4rem;
          height: 0.5rem;
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          margin: auto;
          img {
            width: 100%;
          }
        }
        > div:first-child {
          width: 46%;
          height: 1.4rem;
          // background: yellow;
          float: left;
          > div:first-child {
            display: flex;
            justify-content: space-between;
            align-items: center;
            text-align: center;
            margin-top: 0.12rem;
            > p:first-child {
              font-size: 18px;
              font-weight: 600;
              > span {
                font-size: 14px;
              }
            }
            > p:last-child {
              font-size: 12px;
              color: #7e88a2;
            }
          }
          #Project-Management-per-planEcharts1 {
            width: 100%;
            height: 0.3rem;
            // border: 1px solid red;
          }
        }
        > div:nth-child(2) {
          width: 46%;
          height: 1.4rem;
          // background: yellow;
          float: right;
          > div:first-child {
            display: flex;
            justify-content: space-between;
            align-items: center;
            text-align: center;
            margin-top: 0.12rem;
            > p:last-child {
              font-size: 18px;
              font-weight: 600;
              > span {
                font-size: 14px;
              }
            }
            > p:first-child {
              font-size: 12px;
              color: #7e88a2;
            }
          }
          #Project-Management-per-planEcharts2 {
            width: 100%;
            height: 0.3rem;
            // border: 1px solid red;
          }
        }
      }
      > div:nth-child(3) {
        width: 45%;
        height: 0.46rem;
        // border: 1px solid red;
        border-radius: 0.01rem;
        overflow: hidden;
        margin-left: 3%;
        // position: absolute;
        // top: .2rem;
        // margin: auto;
        // left: 3%;
        .van-tab {
          height: 0.46rem !important;
          line-height: 0.46rem !important;
          background: #fff;
          color: rgba(158, 198, 255, 1);
          font-size: 12px;
          font-weight: 600;
          border: 1px solid rgba(158, 198, 255, 1);
        }
        .van-tab--active {
          font-size: 12px;
          font-weight: 600;
          background: rgba(158, 198, 255, 1);
          height: 0.46rem !important;
          line-height: 0.46rem !important;
          border-radius: 0.01rem;
          color: rgba(14, 97, 166, 1);
        }
      }
      > div:last-child {
        width: 94%;
        margin: auto;
        height: 3rem;
        // border: 1px solid red;
        display: flex;
        justify-content: space-around;
        align-items: center;
        text-align: center;
        > div:first-child {
          width: 2.8rem;
          height: 2.8rem;
          // border: 1px solid yellow;
          // margin-top: .2rem;
        }
        > div:last-child {
          width: 4rem;
          height: 2.8rem;
          // border: 1px solid red;
        }
        > div:last-child /deep/ table.vgt-table {
          font-size: 8px;
          text-align: center;
        }
        > div:last-child /deep/ th {
          text-align: center;
        }
        > div:last-child /deep/ td {
          text-align: center;
        }
      }
    }
    .Project-Management-main {
      width: 100%;
      height: 6.1rem;
      // border: 1px solid red;
      background: #fff;
      margin-top: 0.15rem;
      > div:first-child {
        width: 94%;
        height: 1.08rem;
        margin: auto;
        // border: 1px solid yellow;
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-align: center;
        > p {
          font-size: 14px;
          font-weight: 600;
        }
        > div {
          width: 1.7rem;
          height: 0.46rem;
          border: 1px solid rgba(182, 188, 197, 1);
          .van-dropdown-menu__bar {
            width: 1.5rem;
            height: 0.42rem;
          }
          .van-ellipsis {
            font-size: 12px;
          }
        }
      }
      > div:last-child {
        width: 94%;
        margin: auto;
        height: 5rem;
        // border: 1px solid red;
        > div:last-child /deep/ table.vgt-table {
          font-size: 8px;
          text-align: center;
        }
        > div:last-child /deep/ th {
          text-align: center;
        }
        > div:last-child /deep/ td {
          text-align: center;
        }
      }
    }
  }
  .Project-Management-main2 {
    width: 100%;
    background: rgba(220, 220, 220, 1);
    // border: 1px solid red;
    // height: 5rem;
    // background: red;
    .Project-Management-map {
      width: 100%;
      height: 6.28rem;
      background: #fff;
    }
    #Project-Management-main2-bar {
      width: 100%;
      height: 4.4rem;
      margin-top: 0.2rem;
      background: #fff;
      > div {
        width: 7.5rem;
        height: 4.4rem;
        margin: auto;
      }
    }
    .Project-Management-main2-classify {
      width: 100%;
      height: 5.6rem;
      background: #fff;
      margin-top: 0.15rem;
      > div:first-child {
        width: 94%;
        padding-top: 0.2rem;
        height: 1.2rem;
        margin: auto;
        // border: 1px solid red;
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-align: center;
        > p {
          font-size: 14px;
          font-weight: 600;
        }
        > div {
          width: 45%;
          height: 0.54rem;
          overflow: hidden;
          //   margin: auto;
          //   margin-top: 0.2rem;
          .van-tab {
            height: 0.54rem !important;
            line-height: 0.54rem !important;
            background: #fff;
            color: rgb(35, 107, 214);
            font-size: 12px;
            border-radius: 0.02rem;
            border: 1px solid rgb(35, 107, 214);
            // font-weight: 600;
          }
          .van-tab--active {
            font-size: 12px;
            // font-weight: 600;
            background: rgb(35, 107, 214);
            color: #fff;
            height: 0.54rem !important;
            line-height: 0.54rem !important;
            border-radius: 0.02rem;
          }
        }
      }
      > div:last-child {
        width: 6.63rem;
        height: 2.61rem;
        //   border: 1px solid red;
        margin: auto;
        background: url("../assets/img/ProjectManagement/002.png");
        background-size: 100% 100%;
        > div {
          float: right;
          > li {
            margin-right: 0.4rem;
            line-height: 0.6525rem;
            font-weight: 600;
            > span {
              font-size: 12px;
            }
          }
        }
      }
    }
    .Project-Management-main2-search {
      width: 100%;
      height: 6.12rem;
      background: #fff;
      margin-top: 0.15rem;
      > div:first-child {
        width: 94%;
        // height: 0.8rem;
        // line-height: 0.8rem;
        padding-top: 0.25rem;
        margin: auto;
        font-size: 14px;
        font-weight: 600;
      }
      > div:nth-child(2) {
        width: 94%;
        margin: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-align: center;
        > div:first-child {
          width: 1.4rem;
          height: 0.54rem;
          border: 1px solid rgba(182, 188, 197, 1);
          .van-dropdown-menu__bar {
            width: 1.2rem;
            height: 0.5rem;
          }
          .van-ellipsis {
            font-size: 12px;
          }
        }
        > div:nth-child(1) {
          .van-search {
            margin: 0;
            padding: 0;
          }
        }
        > div:last-child {
          width: 1.1rem;
          height: 0.54rem;
          .van-button {
            width: 1.1rem;
            height: 0.54rem;
            height: 0.54rem;
            font-size: 12px;
          }
          .van-button--normal {
            padding: 0;
          }
        }
      }
      > div:last-child {
        width: 94%;
        margin: auto;
        margin-top: 0.1rem;
        height: 4rem;
        border: 1px solid rgba(105, 120, 131, 1);
        > div:last-child /deep/ table.vgt-table {
          font-size: 8px;
          text-align: center;
        }
        > div:last-child /deep/ th {
          text-align: center;
        }
        > div:last-child /deep/ td {
          text-align: center;
        }
      }
    }
    .Project-Management-main2-message {
      width: 100%;
      height: 5.05rem;
      background: white;
      margin-top: 0.15rem;
      > p {
        width: 94%;
        margin: auto;
        font-size: 14px;
        font-weight: 600;
        padding: 0.36rem 0 0.26rem 0;
      }
      > div {
        width: 88%;
        margin: auto;
        > p {
          font-size: 14px;
          color: rgba(58, 70, 100, 1);
          line-height: 0.58rem;
        }
      }
    }
  }
}
</style>