<template>
  <div id="Indicators-monitoring">
    <!-- 指标监测 -->
    <div class="Indicators-monitoring-GDP">
      <div>单位GDP能耗降低率</div>
      <div id="Indicators-monitoring-GDP-bar"></div>
      <div>
        <div>
          <p>
            <span></span>单位地区GDP二氧化碳排放降低率
          </p>
          <div>
            <div>
              <p></p>
              <p>目标值</p>
              <p>与目标值差值</p>
            </div>
            <div>
              <div class="Indicators-monitoring-GDP-table1">
                <p>年度完成值</p>
                <p>
                  12.1
                  <span>%</span>
                </p>
                <p>未达标</p>
              </div>
              <div class="Indicators-monitoring-GDP-tab1">
                <div>
                  <li>
                    <p>战略</p>
                    <p>7.6%</p>
                  </li>
                  <li>
                    <p>十三五</p>
                    <p>7.6%</p>
                  </li>
                  <li>
                    <p>年度</p>
                    <p>7.6%</p>
                  </li>
                </div>
                <div>
                  <li>-4.5%</li>
                  <li>-4.5%</li>
                  <li>-4.5%</li>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p>
            <span></span>煤电供电标准煤耗
          </p>
          <div>
            <div>
              <p></p>
              <p>目标值</p>
              <p>与目标值差值</p>
            </div>
            <div>
              <div class="Indicators-monitoring-GDP-table2">
                <p>年度完成值</p>
                <p>
                  12.1
                  <span>%</span>
                </p>
                <p>未达标</p>
              </div>
              <div class="Indicators-monitoring-GDP-tab2">
                <div>
                  <li>
                    <p>战略</p>
                    <p>7.6%</p>
                  </li>
                  <li>
                    <p>十三五</p>
                    <p>7.6%</p>
                  </li>
                  <li>
                    <p>年度</p>
                    <p>7.6%</p>
                  </li>
                </div>
                <div>
                  <li>-4.5%</li>
                  <li>-4.5%</li>
                  <li>-4.5%</li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p>非化石能源消费比重</p>
        <div>
          <div>
            <div>
              <div>
                <div>
                  <img src="../assets/img/Indicatorsmonitoring/003-1.png" alt />
                </div>

                <p>9.2%</p>
              </div>
              <div>
                <li>
                  <p>同比</p>
                  <p>
                    <img src="../assets/img/Indicatorsmonitoring/003-2.png" alt />1.1%
                  </p>
                </li>
                <li>
                  <p>环比</p>
                  <p>
                    <img src="../assets/img/Indicatorsmonitoring/003-3.png" alt />1.1%
                  </p>
                </li>
                <li>
                  <p>比2020年目标</p>
                  <p>2.1%</p>
                </li>
              </div>
            </div>
            <div>
              <p>
                全国占比
                <span>7%</span>
              </p>
              <div id="Indicators-monitoring-GDP-bar-plan"></div>
            </div>
          </div>
          <div id="Indicators-monitoring-GDP-bar-consume"></div>
        </div>
      </div>
    </div>
    <div class="Indicators-monitoring-consume">
      <div>
        <p>能源消费总量</p>
        <div class="timeTab">
          <span :class="{'activeSp2':div3Type==1}" @click="changeTab3(1)">年</span>
          <span :class="{'activeSp2':div3Type==2}" @click="changeTab3(2)">季度</span>
        </div>
      </div>
      <div id="Indicators-monitoring-consume-bar"></div>
    </div>
    <div class="Indicators-monitoring-technologicalStrength">
        <div id="Indicators-monitoring-technologicalStrength-bar">

        </div>
    </div>
    <div class="Indicators-monitoring-EconomicContributions">
        <div id="Indicators-monitoring-EconomicContributions-bar">

        </div>
    </div>
    <div class="Indicators-monitoring-coalconsumption">
        <div>
            <p>煤炭消费总量</p>
            <div>
                <div>
                    <div>
                    <div>
                        <div>
                        <img src="../assets/img/Indicatorsmonitoring/004-1.png" alt />
                        </div>

                        <p>9.2%</p>
                    </div>
                    <div>
                        <li>
                        <p>同比</p>
                        <p>
                            <img src="../assets/img/Indicatorsmonitoring/003-2.png" alt />1.1%
                        </p>
                        </li>
                        <li>
                        <p>环比</p>
                        <p>
                            <img src="../assets/img/Indicatorsmonitoring/003-3.png" alt />1.1%
                        </p>
                        </li>
                        <li>
                        <p>比2020年目标</p>
                        <p>2.1%</p>
                        </li>
                    </div>
                    </div>
                    <div>
                    <p>
                        全国占比
                        <span>7%</span>
                    </p>
                    <div id="Indicators-monitoring-coalconsumption-bar-plan"></div>
                    </div>
                </div>
                <div id="Indicators-monitoring-coalconsumption-bar-consume"></div>
            </div>
        </div>
    </div>
    <div class="Indicators-monitoring-EnergieverbrauchAvg">
        <p>人均能源消耗指数</p>
        <div id="Indicators-monitoring-EnergieverbrauchAvg-bar">
            
        </div>
    </div>
    <div  class="Indicators-monitoring-EnergieverbrauchAvgpie">
        <p>人均能源消耗指数</p>
        <div id="Indicators-monitoring-EnergieverbrauchAvgpie-echarts">

        </div>
    </div>
    <div class="Indicators-monitoring-Coalconversion">
        <p>煤炭区内转化</p>
        <div id="Indicators-monitoring-Coalconversion-bar">

        </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 2,
      div3Type: 1,
    };
  },
  mounted() {
    this.IndicatorsmonitoringGDPbar();
    this.IndicatorsmonitoringGDPbarplan();
    this.IndicatorsmonitoringGDPbarconsume();
    this.Indicatorsmonitoringconsumebar();
    this.IndicatorsmonitoringtechnologicalStrengthbar()
    this.IndicatorsmonitoringEconomicContributionsbar()
    this.Indicatorsmonitoringcoalconsumptionbarplan();
    this.Indicatorsmonitoringcoalconsumptionbarconsume();
    this.IndicatorsmonitoringEnergieverbrauchAvgbar()
    this.IndicatorsmonitoringEnergieverbrauchAvgpieecharts()
    this.IndicatorsmonitoringCoalconversionbar()
  },
  methods: {
    changeTab3(id) {
      this.div3Type = id;
    },
    IndicatorsmonitoringGDPbar() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(
        document.getElementById("Indicators-monitoring-GDP-bar")
      );
      // 指定图表的配置项和数据
      // var length=data.a("length")
      var option = {
        color: [
          "#1AC5A0",
          "#1533ED",
          "rgba(56, 222, 126, 1)",
          "#1498ED",
          "#6386ED",
          "#880FED",
          "#4A36ED",
        ],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
            shadowStyle: {
              width: 1,
              color: "rgba(150,150,150,0.3)", // 阴影颜色
            },
          },
          textStyle: {
            //图例文字的样式
            // color: '#7492AA',
            fontSize: 10,
          },
          // formatter:data.a("formatterTool")
        },
        legend: {
          show: true,
          itemWidth: 6, // 设置宽度
          itemHeight: 3, // 设置高度
          // itemGap: 8 ,// 设置间距
          textStyle: {
            //图例文字的样式
            color: "#7492AA",
            fontSize: 8,
          },
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            data: [2016, 1017, 2018, 2019, 2020],
            splitLine: {
              //取消网格线
              show: false,
            },
            axisTick: {
              //取消刻度线
              show: false,
            },
            axisLine: {
              show: true, //取消坐标轴
              lineStyle: {
                color: "#AAB4C6",
                width: 1,
              },
            },
            axisLabel: {
              textStyle: {
                color: "#AAB4C6",
                fontSize: 10,
              },
              interval: 0,
            },
          },
        ],

        yAxis: [
          {
            name: "吨标煤/万元",
            nameTextStyle: {
              //y轴上方单位的颜色
              color: "#AAB4C6",
              fontSize: 10,
            },

            min: 0.2,
            max: 1.4,
            interval: 0.2,
            type: "value",
            scale: true,
            // max: data.a("max"),
            // min: data.a("min"),
            // splitNumber : data.a("split"),
            boundaryGap: [0.2, 0.2],
            splitLine: {
              //取消网格线
              show: true,
              lineStyle: {
                type: "solid",
                color: "rgb(73,98,112)",
              },
            },
            axisTick: {
              //取消刻度线
              show: false,
            },
            axisLine: {
              show: true, //取消坐标轴
              lineStyle: {
                width: 1,
                color: "#AAB4C6",
              },
            },
            // axisLabel: {
            //     formatter:data.a("formatter"),
            //     textStyle: {
            //         color:"#AAB4C6",//坐标值得具体的颜色
            //         fontSize:12
            //         }
            //     }
          },
          {
            type: "value",
            name: "%",
            nameTextStyle: {
              //y轴上方单位的颜色
              color: "#AAB4C6",
              fontSize: 10,
            },
            min: 0,
            max: 24,
            interval: 4,
            axisTick: {
              //取消刻度线
              show: false,
            },
            axisLine: {
              show: true, //取消坐标轴
              lineStyle: {
                width: 1,
                color: "#AAB4C6",
              },
            },
            splitLine: {
              //取消网格线
              show: false,
              lineStyle: {
                type: "solid",
                color: "rgb(73,98,112)",
              },
            },
            axisLabel: {
              // formatter:data.a("formatter"),
              textStyle: {
                color: "#AAB4C6", //坐标值得具体的颜色
                fontSize: 10,
              },
            },
          },
        ],

        series: [
          {
            name: "单位GDP能耗年度目标值",
            type: "bar",
            barWidth: "15%",
            data: [25, 15, 63, 15, 12],
            color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0.3, color: "#39ADFF" },
              { offset: 1, color: "#447AF7" },
            ]),
          },
          {
            name: "单位GDP能耗",
            type: "bar",
            barWidth: "15%",
            data: [15, 25, 31, 152, 63],
            color: "#DE5A63",
          },

          {
            name: "单位GDP能耗降低率",
            yAxisIndex: 1,
            symbol: "circle",
            symbolSize: 8,
            data: [0.12, 0.23, 0.62, 0.61, 0.12],
            type: "line",
            color: "#2AC491",
            itemStyle: {
              borderWidth: 1,
              borderColor: "#2AC491",
              color: "rgba(56, 222, 126, 1)",
            },
            lineStyle: {
              width: 2,
              shadowBlur: 8,
              shadowOffsetY: 2,
              color: "#2AC491",
            },
          },
        ],
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
    IndicatorsmonitoringGDPbarplan() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(
        document.getElementById("Indicators-monitoring-GDP-bar-plan")
      );
      // 指定图表的配置项和数据
      var option = {
        grid: {
          left: "2%",
          right: "2%",
          bottom: "3%",
          top: "3%",
        },
        xAxis: {
          show: false,
          type: "value",
        },
        yAxis: [
          {
            type: "category",
            inverse: true,
            splitLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLine: {
              show: false,
            },
          },
        ],
        series: [
          {
            name: "值",
            type: "bar",
            zlevel: 1,
            itemStyle: {
              normal: {
                barBorderRadius: 5,
                color: "rgba(37, 208, 150, 1)",
              },
            },
            barWidth: 8,
            data: [12],
          },
          {
            name: "背景",
            type: "bar",
            barWidth: 8,
            barGap: "-100%",
            data: [100],
            itemStyle: {
              normal: {
                color: "rgba(211, 246, 234, 1)",
                barBorderRadius: 5,
              },
            },
          },
        ],
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
    IndicatorsmonitoringGDPbarconsume() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(
        document.getElementById("Indicators-monitoring-GDP-bar-consume")
      );
      // 指定图表的配置项和数据
      var option = {
        color: ["#2adecf"],
        textStyle: {
          color: "rgb(222,222,222)",
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        grid: {
          left: "3%",
          right: "8%",
          bottom: "3%",
          top: "15%",
          containLabel: true,
        },
        legend: {
          left: "right",
          show: true,
          data: ["煤炭消费比重"],
          itemWidth: 6,
          itemHeight: 3,
          textStyle: {
            fontSize: 8,
            color: "#7492AA",
          },
        },
        xAxis: [
          {
            name: "月",
            show: true,
            nameTextStyle: {
              // padding:[27,0,0,-10]
            },
            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            axisTick: {
              show: false,
            },
            // x轴的字体样式
            axisLabel: {
              show: true,
              interval: 0,
              textStyle: {
                color: "#AAB4C6",
                fontSize: "8",
              },
            },
            // 控制网格线是否显示
            splitLine: {
              show: false,
              //  改变轴线颜色
              lineStyle: {
                // 使用深浅的间隔色
                color: ["red"],
              },
            },
            // x轴的颜色和宽度
            axisLine: {
              show: true,
              lineStyle: {
                color: "#AAB4C6",
                // width:1   //这里是坐标轴的宽度,可以去掉
              },
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            // interval:25,
            name: "",
            axisTick: {
              show: false,
            },
            // x轴的字体样式
            axisLabel: {
              show: true,
              formatter: "{value}%",
              interval: 0,
              textStyle: {
                color: "#AAB4C6",
                fontSize: "8",
              },
            },
            // 控制网格线是否显示
            splitLine: {
              show: true,
              //  改变轴线颜色
              lineStyle: {
                // 使用深浅的间隔色
                width: 0.5,
              },
            },
            // x轴的颜色和宽度
            axisLine: {
              show: true,
              lineStyle: {
                color: "#AAB4C6",
                width: 1, //这里是坐标轴的宽度,可以去掉
              },
            },
          },
        ],
        series: [
          {
            name: "煤炭消费比重",
            type: "bar",
            // barGap: '0%',
            barWidth: "20%",
            // barCategoryGap: '60%',
            stack: 1,
            itemStyle: {
              normal: {
                color: "rgba(69, 105, 255, 1)",
              },
            },
            data: [15, 18, 62, 34, 12, 25, 36, 55, 85, 12, 16, 96],
            zlevel: 11,
          },
        ],
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
    Indicatorsmonitoringconsumebar() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(
        document.getElementById("Indicators-monitoring-consume-bar")
      );
      // 指定图表的配置项和数据
      var option = {
        // backgroundColor: "00ff00", //背景色

        tooltip: {
          show: true,
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        grid: {
            top:'12%',
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        title: {
          show: false,
          text: "离散率七天日平均分析",
          left: "center",
          textStyle: {
            //文字颜色
            color: "#ccc",
            //字体大小
            fontSize: 12,
          },
        },

        xAxis: [
          {
            type: "category",
            name: "",
            data: [2016, 2017, 2018, 2019, 2020],
            //刻度线是否显示
            axisTick: {
              show: false,
            },
            // x轴的字体样式
            axisLabel: {
              show: true,
              interval: 0,
              textStyle: {
                color: "#AAB4C6",
                fontSize: "8",
              },
            },
            // 控制网格线是否显示
            splitLine: {
              show: false,
              //  改变轴线颜色
              lineStyle: {
                // 使用深浅的间隔色
                color: ["rgba(220, 220, 220, 1)"],
              },
            },
            // x轴的颜色和宽度
            axisLine: {
              show: true,
              lineStyle: {
                color: "rgba(220, 220, 220, 1)",
                width: 1, //这里是坐标轴的宽度,可以去掉
              },
            },
          },
        ],
        yAxis: [
          {
            boundaryGap: true,
            type: "value",
            name: "亿吨标煤",
            nameTextStyle: {
              fontSize: 5,
            },
            // max: 5,
            // min: 0,
            interval: 1,
            //刻度线是否显示
            axisTick: {
              show: false,
            },
            // y轴的字体样式
            axisLabel: {
              show: true,
              textStyle: {
                color: "#AAB4C6",
                fontSize: "5",
              },
            },
            // 控制网格线是否显示
            splitLine: {
              show: true,
              //  改变轴线颜色
              lineStyle: {
                // 使用深浅的间隔色
                color: ["rgba(220, 220, 220, 1)"],
              },
            },
            // y轴的颜色和宽度
            axisLine: {
              show: true,
              lineStyle: {
                color: "rgba(220, 220, 220, 1)",
                width: 1, //这里是坐标轴的宽度,可以去掉
              },
            },
          },
          {
            type: "value",
            name: "%",
            nameTextStyle: {
              fontSize: 10,
            },
            // max: 10,
            // min: 0,
            interval: 2,
            axisTick: {
              show: false,
            },
            // y轴的字体样式
            axisLabel: {
              show: true,
              textStyle: {
                color: "rgba(220, 220, 220, 1)",
                fontSize: "5",
              },
            },
            // 控制网格线是否显示
            splitLine: {
              show: true,
              //  改变轴线颜色
              lineStyle: {
                // 使用深浅的间隔色
                color: ["rgba(220, 220, 220, 1)"],
              },
            },
            // y轴的颜色和宽度
            axisLine: {
              show: true,
              lineStyle: {
                color: "rgba(220, 220, 220, 1)",
                width: 1, //这里是坐标轴的宽度,可以去掉
              },
            },
          },
        ],
        legend: {
          left: "center",
          show: true,
          itemGap: 5,
          data: ["年度目标值", "降低率", "消费总量"],

          itemWidth: 6,
          itemHeight: 3,
          textStyle: {
            fontSize: 8,
            color: "#7492AA",
          },
        },
        series: [
          {
            name: "消费总量",
            type: "bar",
            barWidth: "20%",
            itemStyle: {
              normal: {
                //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "rgba(0, 153, 255, 1)" },
                  { offset: 0.5, color: "rgba(0, 153, 255, 1)" },
                  { offset: 1, color: "rgba(57, 248, 255, 1)" },
                ]),
              },
            },
            data: [1.1, 2.4, 3.7, 2.4, 1.8],

            markLine: {
              symbol: "none", //开始标预警线
              data: [
                {
                  name: "2.25",
                  yAxis: 2.25,
                },
              ],
              label: {
                position: "start",
                fontSize: 8,
                color: "#DE5A63",
                formatter: "2.25",
                padding: [-10, 0, 0, 0],
              },
              lineStyle: {
                type: "dotted",
                color: "#DE5A63 ",
                width: 1,
              },
            },
          },
          {
            name: "年度目标值",
            type: "line",
            yAxisIndex: 0,
            symbol: "none",
            lineStyle: {
              type: "dotted",
              color: "#DE5A63 ",
              width: 1,
            },
          },

          {
            name: "降低率",
            yAxisIndex: 1,
            type: "line",
            data: [2.2, 5, 9, 7, 5],
            symbol: "circle",
            symbolSize: 5,
            lineStyle: {
              color: "#F7AA5A",
              width: 1,
              type: "solid",
            },
            itemStyle: {
              borderWidth: 2,
              borderColor: "#F7AA5A",
              color: "white",
            },
          },
        ],
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
    IndicatorsmonitoringtechnologicalStrengthbar() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(
        document.getElementById("Indicators-monitoring-technologicalStrength-bar")
      );
      // 指定图表的配置项和数据
      var option = {
            // backgroundColor: '#000',
            title: {
                text: '科技投入强度',
                textStyle: {
                    fontWeight: '600',
                    fontSize: 12,
                    color: '#000'
                },
                top: '3%',
                left: '0%'
            },
            grid: {
                top: '26%',
                left: '2%', //grid 组件离容器左侧的距离。
                right: '8%', //grid 组件离容器右侧的距离。
                bottom: '5%', //grid 组件离容器下侧的距离。
                containLabel: true //grid 区域是否包含坐标轴的刻度标签[ default: false ]
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                splitLine: {
                    show: false,
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(218, 218, 218, 1)'
                    }
                },
                axisLabel: {
                    margin: 10,
                    textStyle: {
                        color: 'rgba(218, 218, 218, 1)',
                        fontSize: 8
                    }
                },
                data: ['2015', '2016', '2017', '2018']
            },
            yAxis: {
                type: 'value', //坐标轴类型。'value' 数值轴，适用于连续数据;'category' 类目轴，适用于离散的类目数据，为该类型时必须通过 data 设置类目数据;'time' 时间轴;'log' 对数轴.
                name: '%', //坐标轴名称。
                axisTick: {
                    show: false //是否显示坐标轴刻度
                },
                axisLine: {
                    show: false, //是否显示坐标轴刻度
                    lineStyle: {
                        color: 'rgba(218, 218, 218, 1)' //坐标轴线线的颜色
                    }
                },
                axisLabel: {
                    // margin: 10, //刻度标签与轴线之间的距离
                    textStyle: {
                        fontSize: 8 ,//文字的字体大小
                        color:'rgba(218, 218, 218, 1)'
                    }
                },
                splitLine: {

                    lineStyle: {
                        color: 'rgba(220, 220, 220, .3)' //分隔线颜色设置
                    }
                }
            },
            series: [{
                // name: '历年最高水位',
                type: 'line',
                smooth: true,
                symbol: 'circle',
                symbolSize: 5,
                showSymbol: false,
                lineStyle: {
                    normal: {
                        width: 1
                    }
                },
                areaStyle: {
                    normal: {
                        color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(187, 95, 240, 0.3)'
                        }, {
                            offset: 0.8,
                            color: 'rgba(187, 95, 240, 0)'
                        }], false),
                        shadowColor: 'rgba(187, 95, 240, 0)',
                        shadowBlur: 10
                    }
                },
                itemStyle: {
                    normal: {
                        color: 'rgb(187, 95, 240,1)',
                        borderColor: 'rgba(187, 95, 240,1)',
                        borderWidth: 3
                    }
                },
                data: [152, 289, 283, 296]
            }, ]
        };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
    IndicatorsmonitoringEconomicContributionsbar() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(
        document.getElementById("Indicators-monitoring-EconomicContributions-bar")
      );
      // 指定图表的配置项和数据
      var option = {
            // backgroundColor: '#000',
            title: {
                text: '科技进步对能源经济增长的贡献率',
                textStyle: {
                    fontWeight: '600',
                    fontSize: 12,
                    color: '#000'
                },
                top: '3%',
                left: '0%'
            },
            grid: {
                top: '26%',
                left: '2%', //grid 组件离容器左侧的距离。
                right: '8%', //grid 组件离容器右侧的距离。
                bottom: '5%', //grid 组件离容器下侧的距离。
                containLabel: true //grid 区域是否包含坐标轴的刻度标签[ default: false ]
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                splitLine: {
                    show: false,
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(218, 218, 218, 1)'
                    }
                },
                axisLabel: {
                    margin: 10,
                    textStyle: {
                        color: 'rgba(218, 218, 218, 1)',
                        fontSize: 8
                    }
                },
                data: ['2015', '2016', '2017', '2018']
            },
            yAxis: {
                type: 'value', //坐标轴类型。'value' 数值轴，适用于连续数据;'category' 类目轴，适用于离散的类目数据，为该类型时必须通过 data 设置类目数据;'time' 时间轴;'log' 对数轴.
                name: '%', //坐标轴名称。
                axisTick: {
                    show: false //是否显示坐标轴刻度
                },
                axisLine: {
                    show: false, //是否显示坐标轴刻度
                    lineStyle: {
                        color: 'rgba(218, 218, 218, 1)' //坐标轴线线的颜色
                    }
                },
                axisLabel: {
                    // margin: 10, //刻度标签与轴线之间的距离
                    textStyle: {
                        fontSize: 8 ,//文字的字体大小
                        color:'rgba(218, 218, 218, 1)'
                    }
                },
                splitLine: {

                    lineStyle: {
                        color: 'rgba(220, 220, 220, .3)' //分隔线颜色设置
                    }
                }
            },
            series: [{
                // name: '历年最高水位',
                type: 'line',
                smooth: true,
                symbol: 'circle',
                symbolSize: 5,
                showSymbol: false,
                lineStyle: {
                    normal: {
                        width: 1
                    }
                },
                areaStyle: {
                    normal: {
                        color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(69, 105, 255, 0.3)'
                        }, {
                            offset: 0.8,
                            color: 'rgba(69, 105, 255, 0)'
                        }], false),
                        shadowColor: 'rgba(69, 105, 255, 0)',
                        shadowBlur: 10
                    }
                },
                itemStyle: {
                    normal: {
                        color: 'rgba(69, 105, 255, 1)',
                        borderColor: 'rgba(69, 105, 255, 1)',
                        borderWidth: 3
                    }
                },
                data: [152, 289, 283, 296]
            }, ]
        };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
    Indicatorsmonitoringcoalconsumptionbarplan() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(
        document.getElementById("Indicators-monitoring-coalconsumption-bar-plan")
      );
      // 指定图表的配置项和数据
      var option = {
        grid: {
          left: "2%",
          right: "2%",
          bottom: "3%",
          top: "3%",
        },
        xAxis: {
          show: false,
          type: "value",
        },
        yAxis: [
          {
            type: "category",
            inverse: true,
            splitLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLine: {
              show: false,
            },
          },
        ],
        series: [
          {
            name: "值",
            type: "bar",
            zlevel: 1,
            itemStyle: {
              normal: {
                barBorderRadius: 5,
                color: "rgba(255, 139, 46, 1)",
              },
            },
            barWidth: 6,
            data: [12],
          },
          {
            name: "背景",
            type: "bar",
            barWidth: 6,
            barGap: "-100%",
            data: [100],
            itemStyle: {
              normal: {
                color: "rgba(255, 238, 217, 1)",
                barBorderRadius: 5,
              },
            },
          },
        ],
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
    Indicatorsmonitoringcoalconsumptionbarconsume() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(
        document.getElementById("Indicators-monitoring-coalconsumption-bar-consume")
      );
      // 指定图表的配置项和数据
      var option = {
        color: ["#2adecf"],
        textStyle: {
          color: "rgb(222,222,222)",
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        grid: {
          left: "3%",
          right: "8%",
          bottom: "3%",
          top: "15%",
          containLabel: true,
        },
        legend: {
          left: "right",
          show: true,
          data: ["煤炭消费比重"],
          itemWidth: 6,
          itemHeight: 3,
          textStyle: {
            fontSize: 8,
            color: "#7492AA",
          },
        },
        xAxis: [
          {
            name: "月",
            show: true,
            nameTextStyle: {
              // padding:[27,0,0,-10]
            },
            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            axisTick: {
              show: false,
            },
            // x轴的字体样式
            axisLabel: {
              show: true,
              interval: 0,
              textStyle: {
                color: "#AAB4C6",
                fontSize: "8",
              },
            },
            // 控制网格线是否显示
            splitLine: {
              show: false,
              //  改变轴线颜色
              lineStyle: {
                // 使用深浅的间隔色
                color: ["red"],
              },
            },
            // x轴的颜色和宽度
            axisLine: {
              show: true,
              lineStyle: {
                color: "#AAB4C6",
                // width:1   //这里是坐标轴的宽度,可以去掉
              },
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            // interval:25,
            name: "",
            axisTick: {
              show: false,
            },
            // x轴的字体样式
            axisLabel: {
              show: true,
              formatter: "{value}%",
              interval: 0,
              textStyle: {
                color: "#AAB4C6",
                fontSize: "8",
              },
            },
            // 控制网格线是否显示
            splitLine: {
              show: true,
              //  改变轴线颜色
              lineStyle: {
                // 使用深浅的间隔色
                width: 0.5,
              },
            },
            // x轴的颜色和宽度
            axisLine: {
              show: true,
              lineStyle: {
                color: "#AAB4C6",
                width: 1, //这里是坐标轴的宽度,可以去掉
              },
            },
          },
        ],
        series: [
          {
            name: "煤炭消费比重",
            type: "bar",
            // barGap: '0%',
            barWidth: "20%",
            // barCategoryGap: '60%',
            stack: 1,
            itemStyle: {
              normal: {
                color: "rgba(255, 139, 46, 1)",
              },
            },
            data: [15, 18, 62, 34, 12, 25, 36, 55, 85, 12, 16, 96],
            zlevel: 11,
          },
        ],
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
    IndicatorsmonitoringEnergieverbrauchAvgbar() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(
        document.getElementById("Indicators-monitoring-EnergieverbrauchAvg-bar")
      );
      // 指定图表的配置项和数据
      var option = {
            textStyle: {
                color: '#015868'
            },
            grid: {
                left: '2%',
                right: "5%",
                bottom: '5%',
                top: "18%",
                containLabel: true
            },
            legend: {
                // left:350,      //可设定图例在左、右、居中
                // y: 0,     //可设定图例在上、下、居中
                // left: "250",
                
                right:'2%',
                textStyle: {
                    color: "rgba(131, 171, 205, 1)",
                    fontSize: 10
                },
                itemHeight: 3, //图例高度
                itemWidth: 20, //图例宽
                itemGap: 10, //图例间距
                // data: data.a("legend"),
                icon: "rect"
            },
            tooltip: {
                show: true,
                showContent: true,
                textStyle: {
                    fontSize: 12,
                    normal: {
                        rich: {
                            a: {
                                color: "blue"
                            }
                        },
                    }
                },
                // formatter: data.a("tool"),
                trigger: 'axis',
                backgroundColor: 'rgb(12,39,39,0.3)', //tooltip背景色
                borderColor: 'rgb(47,70,82)', //tooltip边框颜色
                borderWidth: 1,
                axisPointer: {
                    type: 'line',
                    lineStyle: {
                        type: "dashed "
                    }
                },
            },
            xAxis: {
                type: 'category',
                data: [2016,2017,2018,2019,2020],
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "#AAB4C6",
                    }
                },
                boundaryGap: false, //坐标轴两边留白    true false 是否留白
                axisLabel: {
                    color: '#AAB7C3',
                    interval: 0, //坐标值间隔    强制显示所有文字
                    textStyle: {
                        fontSize: 10

                    }
                }
            },
            yAxis: [{
                name: '克标准煤/人',
                nameTextStyle: {
                    fontSize: 10
                },
                // boundaryGap: [],
                // min: 0,
                // max: 100,
                // splitNumber: 5,
                axisLabel: {
                    // formatter: data.a("formatter"),
                    color: '#AAB7C3',
                    interval: 0,
                    textStyle: {
                        fontSize: 10

                    }
                },
                show: true,
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "#AAB4C6",
                    }
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#AAB4C6',
                        width: 2
                    }
                },
            }],
            series: [{
                    name: '全区人均能源消耗',
                    data:[15,25,16,85,123],
                    type: 'line',
                    symbol: 'circle',
                    showSymbol: true,
                    symbolSize: 10,
                    smooth: true,
                    emphasis: {
                        itemStyle: {
                            borderColor: "#fff",
                            borderWidth: 0.7,

                        }
                    },
                    color: '#FBAF5D',
                    itemStyle: {
                        normal: {
                            lineStyle: {
                                color: '#F9C93B',
                                width: 2,
                                // shadowBlur: 8,
                                // shadowOffsetY: 2
                            },
                        }
                    },
                    areaStyle: { //折线图下方的颜色
                        normal: {
                            color: {
                                type: 'linear', //线性渐变 radial径向渐变
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                    offset: 0,
                                    color: "rgba(249, 200, 51, 0.63)" // 0% 处的颜色
                                }, {
                                    offset: 1,
                                    color: "rgba(249, 200, 51, 0)" // 100% 处的颜色
                                }],
                            }
                        }
                    },

                },
                {

                    name: '城乡居民人均生活能耗',
                    data: [154,85,36,45,92],
                    type: 'line',
                    symbol: 'circle',
                    showSymbol: true,
                    smooth: true,
                    symbolSize: 10,
                    color: '#0EABF3',

                    lineStyle: {
                        color: '#1E8DF7',
                        width: 2,
                        // shadowBlur: 8,
                        // shadowOffsetY: 2

                    },
                    areaStyle: { //折线图下方的颜色
                        normal: {
                            color: {
                                type: 'linear', //线性渐变 radial径向渐变
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                    offset: 0,
                                    color: "rgba(30, 142, 247, 0.63)" // 0% 处的颜色
                                }, {
                                    offset: 0.7,
                                    color: "rgba(30, 142, 247, 0)" // 100% 处的颜色
                                }],
                                globalCoord: false // 缺省为 false
                            }
                        }
                    },
                },
            ],
            // textStyle: {
            //     color: 'rgb(179,202,232)'
            // }
        };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
    IndicatorsmonitoringEnergieverbrauchAvgpieecharts() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(
        document.getElementById("Indicators-monitoring-EnergieverbrauchAvgpie-echarts")
      );
      // 指定图表的配置项和数据
      var data = [
        {
            name:'公共预算',
            value:335,
            icon: 'rect'
        },
        {
            name:'国土基金',
            value:310,
            icon:'rect'
        },
        {
            name:'专项基金',
            value:234,
            icon:'rect'
        }
    ];
        var numdata = 869    
        var getVlue=function(name){
            var curData = null;
            curData = data.filter(function(item){
                return item.name === name;
            })
            return curData && curData[0].value;
        }
        var option = {
            color:['#3E84FF', '#3ED3FE', '#FFBA27'],
            tooltip: {
                trigger: 'item',
                formatter: "{b}: {c} ({d}%)"
            },
            legend:{
                show: true,
                orient: 'vertical',
                top: '30%',
                left: '55%',
                itemWidth: 6,
                itemHeight: 6,
                data:data,
                formatter: function(param){
                    return param + '{cusStyle|'+ parseInt(getVlue(param)/numdata*100)+ '%' +'}'
                },
                textStyle:{
                    rich:{
                        cusStyle:{
                            fontSize: 12,
                            padding:[0, 0, 0, 20]
                        }
                    }
                }
            },
            series: [
                {
                    name:'',
                    type:'pie',
                    radius: ['50%', '70%'],
                    center:['30%','50%'],
                    avoidLabelOverlap: false,
                    symbol:'rect',
                    symbolSize:[8, 8],
                    label: {
                        normal: {
                            show: false
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data:data
                }
            ]
        };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
    IndicatorsmonitoringCoalconversionbar() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(
        document.getElementById("Indicators-monitoring-Coalconversion-bar")
      );
      // 指定图表的配置项和数据
      var option = {
            // backgroundColor: '#000',
            title: {
                text: '科技投入强度',
                textStyle: {
                    fontWeight: '600',
                    fontSize: 12,
                    color: '#000'
                },
                top: '3%',
                left: '0%'
            },
            grid: {
                top: '26%',
                left: '2%', //grid 组件离容器左侧的距离。
                right: '8%', //grid 组件离容器右侧的距离。
                bottom: '5%', //grid 组件离容器下侧的距离。
                containLabel: true //grid 区域是否包含坐标轴的刻度标签[ default: false ]
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                splitLine: {
                    show: false,
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(218, 218, 218, 1)'
                    }
                },
                axisLabel: {
                    margin: 10,
                    textStyle: {
                        color: 'rgba(218, 218, 218, 1)',
                        fontSize: 8
                    }
                },
                data: ['2015', '2016', '2017', '2018']
            },
            yAxis: {
                type: 'value', //坐标轴类型。'value' 数值轴，适用于连续数据;'category' 类目轴，适用于离散的类目数据，为该类型时必须通过 data 设置类目数据;'time' 时间轴;'log' 对数轴.
                name: '%', //坐标轴名称。
                axisTick: {
                    show: false //是否显示坐标轴刻度
                },
                axisLine: {
                    show: false, //是否显示坐标轴刻度
                    lineStyle: {
                        color: 'rgba(218, 218, 218, 1)' //坐标轴线线的颜色
                    }
                },
                axisLabel: {
                    // margin: 10, //刻度标签与轴线之间的距离
                    textStyle: {
                        fontSize: 8 ,//文字的字体大小
                        color:'rgba(218, 218, 218, 1)'
                    }
                },
                splitLine: {

                    lineStyle: {
                        color: 'rgba(220, 220, 220, .3)' //分隔线颜色设置
                    }
                }
            },
            series: [{
                // name: '历年最高水位',
                type: 'line',
                smooth: true,
                symbol: 'circle',
                symbolSize: 5,
                showSymbol: false,
                lineStyle: {
                    normal: {
                        width: 1
                    }
                },
                areaStyle: {
                    normal: {
                        color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(187, 95, 240, 0.3)'
                        }, {
                            offset: 0.8,
                            color: 'rgba(187, 95, 240, 0)'
                        }], false),
                        shadowColor: 'rgba(187, 95, 240, 0)',
                        shadowBlur: 10
                    }
                },
                itemStyle: {
                    normal: {
                        color: 'rgb(187, 95, 240,1)',
                        borderColor: 'rgba(187, 95, 240,1)',
                        borderWidth: 3
                    }
                },
                data: [152, 289, 283, 296]
            }, ]
        };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
  },
  
};
</script>

<style lang="scss" scoped>
#Indicators-monitoring {
  width: 100%;
  background: rgba(179, 179, 179, 1);
  .Indicators-monitoring-GDP {
    width: 100%;
    background: #fff;
    margin-top: 0.1rem;
    // height: 8.12rem;
    // border: 1px solid red;
    > div:first-child {
      width: 94%;
      height: 1rem;
      line-height: 1rem;
      font-size: 12px;
      font-weight: 600;
      margin: auto;
    }
    > #Indicators-monitoring-GDP-bar {
      width: 7rem;
      height: 3.74rem;
      border-bottom: 1px solid rgba(179, 179, 179, 1);
      margin: auto;
    }
    > div:nth-child(3) {
      width: 7rem;
      height: 3.36rem;
      // border: 1px solid yellowgreen;
      margin: auto;
      display: flex;
      justify-content: space-around;
      align-items: center;
      text-align: center;
      > div {
        width: 3.3rem;
        height: 3.34rem;
        // background: violet;
        > p {
          font-size: 10px;
          color: rgba(45, 54, 80, 1);
          line-height: 0.58rem;
          height: 0.58rem;
          text-align: left;
        }
        > div {
          width: 3.3rem;
          height: 2.5rem;
          // border: 1px solid red;
          > div:first-child {
            height: 0.4rem;
            line-height: 0.4rem;
            display: flex;
            justify-content: space-around;
            align-items: center;
            text-align: center;
            > p {
              flex: 1;
              color: rgba(156, 157, 162, 1);
              font-size: 8px;
            }
          }
          > div:last-child {
            width: 100%;
            height: 1.6rem;
            // border: 1px solid yellow;
            display: flex;
            justify-content: space-around;
            align-items: center;
            text-align: center;
            > .Indicators-monitoring-GDP-table1 {
              flex: 1;
              height: 0.8rem;
              // border: 1px solid springgreen;
              background: url("../assets/img/Indicatorsmonitoring/001-1.png")
                no-repeat bottom;
              background-size: 80%;
              > p:first-child {
                font-size: 10px;
                color: rgba(156, 157, 162, 1);
              }
              > p:nth-child(2) {
                color: rgba(253, 124, 129, 1);
                font-size: 14px;
                margin-top: 0.08rem;
                > span {
                  font-size: 10px;
                }
              }
              > p:last-child {
                color: rgba(253, 124, 129, 1);
                font-size: 10px;
                margin-top: 0.08rem;
              }
            }
            > .Indicators-monitoring-GDP-tab1 {
              flex: 2;
              height: 2rem;
              // border: 1px solid blue;
              background: url("../assets/img/Indicatorsmonitoring/002-1.png")
                no-repeat 10%;
              background-size: 90%;
              display: flex;
              justify-content: space-around;
              align-items: center;
              text-align: center;
              > div {
                flex: 1;
                // width: 50%;
                // background: brown;
                // height: 2rem;
              }
              > div:first-child {
                > li {
                  display: flex;
                  justify-content: space-around;
                  align-items: center;
                  text-align: center;
                  line-height: 0.54rem;
                  > p:first-child {
                    color: rgba(153, 153, 153, 1);
                    font-size: 8px;
                  }
                  > p:last-child {
                    font-size: 12px;
                  }
                }
              }
              > div:last-child {
                > li {
                  line-height: 0.54rem;
                  color: rgba(253, 124, 129, 1);
                  font-size: 12px;
                }
              }
            }
            > .Indicators-monitoring-GDP-table2 {
              flex: 1;
              height: 0.8rem;
              // border: 1px solid springgreen;
              background: url("../assets/img/Indicatorsmonitoring/001-2.png")
                no-repeat bottom;
              background-size: 80%;
              > p:first-child {
                font-size: 10px;
                color: rgba(156, 157, 162, 1);
              }
              > p:nth-child(2) {
                color: rgba(46, 208, 150, 1);
                font-size: 14px;
                margin-top: 0.08rem;
                > span {
                  font-size: 10px;
                }
              }
              > p:last-child {
                color: rgba(46, 208, 150, 0);
                font-size: 10px;
                margin-top: 0.08rem;
              }
            }
            > .Indicators-monitoring-GDP-tab2 {
              flex: 2;
              height: 2rem;
              // border: 1px solid blue;
              background: url("../assets/img/Indicatorsmonitoring/002-2.png")
                no-repeat 10%;
              background-size: 90%;
              display: flex;
              justify-content: space-around;
              align-items: center;
              text-align: center;
              > div {
                flex: 1;
                // width: 50%;
                // background: brown;
                // height: 2rem;
              }
              > div:first-child {
                > li {
                  display: flex;
                  justify-content: space-around;
                  align-items: center;
                  text-align: center;
                  line-height: 0.54rem;
                  > p:first-child {
                    color: rgba(153, 153, 153, 1);
                    font-size: 8px;
                  }
                  > p:last-child {
                    font-size: 12px;
                  }
                }
              }
              > div:last-child {
                > li {
                  line-height: 0.54rem;
                  color: rgba(46, 208, 150, 1);
                  font-size: 12px;
                }
              }
            }
          }
        }
      }
    }
    > div:last-child {
      width: 94%;
      height: 2.8rem;
      // border: 1px solid red;
      margin: auto;
      > p {
        font-size: 14px;
        font-weight: 600;
      }
      > div {
        width: 100%;
        margin-top: 0.15rem;
        height: 2.4rem;
        // border: 1px solid yellow;
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-align: center;
        > div:first-child {
          // display: flex;
          // justify-content: space-around;
          // align-items: center;
          // text-align: center;
          > div:first-child {
            width: 3.4rem;
            height: 1.6rem;
            // border: 1px solid blue;
            display: flex;
            justify-content: space-around;
            align-items: center;
            text-align: center;
            > div:first-child {
              width: 1rem;
              // border: 1px solid blueviolet;
              > div {
                width: 0.8rem;
                height: 0.8rem;
                background: rgba(212, 255, 205, 1);
                margin: auto;
                position: relative;
                > img {
                  width: 0.5rem;
                  height: 0.5rem;
                  position: absolute;
                  top: 0;
                  bottom: 0;
                  left: 0;
                  right: 0;
                  margin: auto;
                }
              }
              > p {
                font-weight: 600;
                margin-top: 0.1rem;
                font-size: 18px;
              }
            }
            > div:last-child {
              width: 1.8rem;
              height: 1.6rem;
              > li {
                line-height: 0.5rem;
                display: flex;
                justify-content: space-between;
                align-items: center;
                text-align: center;
                > p:first-child {
                  color: rgba(44, 54, 80, 1);
                  font-size: 10px;
                }
                > p:last-child {
                  color: rgba(44, 54, 80, 1);
                  font-size: 10px;
                  > img {
                    width: 0.17rem;
                    margin-right: 0.15rem;
                  }
                }
              }
            }
          }
          > div:last-child {
            width: 3.4rem;
            height: 0.8rem;
            // border: 1px solid red;
            > p {
              font-size: 10px;
              color: rgba(143, 153, 178, 1);
              text-align: left;
              > span {
                display: inline-block;
                margin-left: 0.1rem;
              }
            }
            > div {
              width: 3.4rem;
              height: 0.4rem;
              // border: 1px solid fuchsia;
            }
          }
        }
        > div:last-child {
          width: 3.6rem;
          height: 2rem;
          // border: 1px solid red;
        }
      }
    }
  }
  .Indicators-monitoring-consume {
    width: 100%;
    height: 4.1rem;
    background: #fff;
    margin-top: 0.15rem;
    > div:first-child {
      width: 94%;
      height: 1rem;
    //   border: 1px solid red;
      margin: auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      text-align: center;
      > p {
        font-size: 14px;
        font-weight: 600;
      }
      .timeTab {
        width: 2.5rem;
        line-height: 0.48rem;
        margin-left: 0.15rem;
        text-align: center;
        display: flex;
        border: 1px solid #e6e8eb;
        span {
          flex: 1;
          width: 0.3rem;
          font-size: 0.19rem;
          color: #9c9da2;
          padding: 0 0.08rem;
        }
        span:nth-child(2) {
          border-left: 1px solid #e6e8eb;
          border-right: 1px solid #e6e8eb;
        }
        .activeSp2 {
          background-color: #38aefe;
          color: #fff;
        }
      }
    }
    > div:last-child {
      width: 6.8rem;
      height: 3rem;
      margin: auto;
    }
  }
  .Indicators-monitoring-technologicalStrength{
      width: 100%;
      height: 3.76rem;
      background: #fff;
      margin-top: .15rem;
      >div{
          width: 7rem;
          height: 3.76rem;
        //   border: 1px solid red;
          margin: auto;
      }
  }
  .Indicators-monitoring-EconomicContributions{
      width: 100%;
      height: 3.76rem;
      background: #fff;
      margin-top: .15rem;
      >div{
          width: 7rem;
          height: 3.76rem;
        //   border: 1px solid red;
          margin: auto;
      }
  }
  .Indicators-monitoring-coalconsumption{
      width: 100%;
      margin-top: .15rem;
      background: #fff;
      padding-top: .3rem;
      > div{
      width: 94%;
      height: 2.8rem;
      
      // border: 1px solid red;
      margin: auto;
      > p {
        font-size: 14px;
        font-weight: 600;
      }
      > div {
        width: 100%;
        margin-top: 0.15rem;
        height: 2.4rem;
        // border: 1px solid yellow;
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-align: center;
        > div:first-child {
          // display: flex;
          // justify-content: space-around;
          // align-items: center;
          // text-align: center;
          > div:first-child {
            width: 3.4rem;
            height: 1.6rem;
            // border: 1px solid blue;
            display: flex;
            justify-content: space-around;
            align-items: center;
            text-align: center;
            > div:first-child {
              width: 1rem;
              // border: 1px solid blueviolet;
              > div {
                width: 0.8rem;
                height: 0.8rem;
                background: rgba(212, 255, 205, 1);
                margin: auto;
                position: relative;
                > img {
                  width: 0.5rem;
                  height: 0.5rem;
                  position: absolute;
                  top: 0;
                  bottom: 0;
                  left: 0;
                  right: 0;
                  margin: auto;
                }
              }
              > p {
                font-weight: 600;
                margin-top: 0.1rem;
                font-size: 18px;
              }
            }
            > div:last-child {
              width: 1.8rem;
              height: 1.6rem;
              > li {
                line-height: 0.5rem;
                display: flex;
                justify-content: space-between;
                align-items: center;
                text-align: center;
                > p:first-child {
                  color: rgba(44, 54, 80, 1);
                  font-size: 10px;
                }
                > p:last-child {
                  color: rgba(44, 54, 80, 1);
                  font-size: 10px;
                  > img {
                    width: 0.17rem;
                    margin-right: 0.15rem;
                  }
                }
              }
            }
          }
          > div:last-child {
            width: 3.4rem;
            height: 0.8rem;
            // border: 1px solid red;
            > p {
              font-size: 10px;
              color: rgba(143, 153, 178, 1);
              text-align: left;
              > span {
                display: inline-block;
                margin-left: 0.1rem;
              }
            }
            > div {
              width: 3.4rem;
              height: 0.4rem;
              // border: 1px solid fuchsia;
            }
          }
        }
        > div:last-child {
          width: 3.6rem;
          height: 2rem;
          // border: 1px solid red;
        }
      }
    }
  }
  .Indicators-monitoring-EnergieverbrauchAvg{
      width: 100%;
      height: 4.32rem;
      background: #fff;
      margin-top: .15rem;
      >p{
          width: 94%;
          margin: auto;
          line-height: .9rem;
          font-size: 14px;
          font-weight: 600;
      }
      >div{
            width: 94%;
            height: 3.42rem;
            margin: auto;
            // border: 1px solid red;
      }
  }
  .Indicators-monitoring-EnergieverbrauchAvgpie{
      width: 100%;
      height: 3.8rem;
      margin-top: .15rem;
      background: #fff;
      >p{
          width: 94%;
          margin: auto;
          line-height: .80rem;
          font-size: 14px;
          font-weight: 600;
      }
      >div{
            width: 94%;
            height: 3.02rem;
            margin: auto;
            // border: 1px solid red;
      }
  }
  .Indicators-monitoring-Coalconversion{
      width: 100%;
      height: 3.8rem;
      margin-top: .15rem;
      background: #fff;
      >p{
          width: 94%;
          margin: auto;
          line-height: .80rem;
          font-size: 14px;
          font-weight: 600;
      }
      >div{
            width: 94%;
            height: 3.02rem;
            margin: auto;
            // border: 1px solid red;
      }
  }
}
</style>