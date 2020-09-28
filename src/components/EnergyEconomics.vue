<template>
  <div class="Energy-Economics">
    <div class="energy-map">地图</div>
    <!-- 能源生产、消费与经济增长趋势 -->
    <div class="div1 itemDiv">
      <div class="div1_title item_title">
        <h3>能源生产、消费与经济增长趋势</h3>
        <div class="btn-tab">
          <span :class="{'activeSp':div1Type==1}" @click="changeTab(1)">增量图</span>
          <span :class="{'activeSp':div1Type==2}" @click="changeTab(2)">总量图</span>
        </div>
      </div>
      <lineEcharts
        :echartId="div1EchartObj.echartId"
        :seriesData="div1EchartObj.seriesData"
        :legendData="div1EchartObj.legendData"
        :otherOptions="div1EchartObj.otherOptions"
        :xAxisData="div1EchartObj.xAxisData"
      />
    </div>
    <!-- 能源弹性系数与经济增长趋势-->
    <div class="itemDiv">
      <div class="item_title">
        <h3>能源弹性系数与经济增长趋势</h3>
        <div class="btn-tab">
           <span :class="{'activeSp':div2Type==1}" @click="changeTab2(1)">增量图</span>
          <span :class="{'activeSp':div2Type==2}" @click="changeTab2(2)">总量图</span>
        </div>
      </div>
      <lineEcharts
        :echartId="div2EchartObj.echartId"
        :seriesData="div2EchartObj.seriesData"
        :legendData="div2EchartObj.legendData"
        :otherOptions="div2EchartObj.otherOptions"
        :xAxisData="div2EchartObj.xAxisData"
      />
    </div>
    <!-- 能源工业总产值对GDP的贡献率-->
    <div class="itemDiv">
      <div class="item_title">
        <h3>能源工业总产值对GDP的贡献率</h3>
        <!-- <div class="btn-tab">
          <span class="pieSp">饼图</span>
          <span class="lineSp activeSp">折线</span>
        </div> -->
      </div>
      <div class="changeWap">
        <van-dropdown-menu class="itemSelt">
          <van-dropdown-item v-model="seltValue1" :options="SeltArr1" />
        </van-dropdown-menu>
        <div class="timeTab">
          <span :class="{'activeSp2':div3Type==1}" @click="changeTab3(1)">年</span>
          <span :class="{'activeSp2':div3Type==2}" @click="changeTab3(2)">季度</span>
          <span :class="{'activeSp2':div3Type==3}" @click="changeTab3(3)">月</span>
        </div>
      </div>
      <lineEcharts
        :echartId="div3EchartObj.echartId"
        :seriesData="div3EchartObj.seriesData"
        :legendData="div3EchartObj.legendData"
        :otherOptions="div3EchartObj.otherOptions"
        :xAxisData="div3EchartObj.xAxisData"
        :echartColor="div3EchartObj.echartColor"
      />
    </div>
    <!-- 能源效率-->
    <div class="itemDiv">
      <div class="item_title">
        <h3>能源效率</h3>
        <!-- <div class="btn-tab">
          <span class="pieSp">饼图</span>
          <span class="lineSp activeSp">折线</span>
        </div> -->
      </div>
      <div class="changeWap">
        <van-dropdown-menu class="itemSelt itemSelt2">
          <van-dropdown-item v-model="seltValue2" :options="SeltArr2" />
        </van-dropdown-menu>
      </div>
      <lineEcharts
        :echartId="div4EchartObj.echartId"
        :seriesData="div4EchartObj.seriesData"
        :legendData="div4EchartObj.legendData"
        :otherOptions="div4EchartObj.otherOptions"
        :xAxisData="div4EchartObj.xAxisData"
        :echartColor="div4EchartObj.echartColor"
      />
    </div>
    <!-- 现代能源产能占比-->
    <div class="itemDiv div5">
      <div class="item_title">
        <h3>现代能源产能占比</h3>
      </div>
      <div class="div5_echarts_wap">
        <div class="div5_div1">煤炭</div>
        <div class="div5_div2">电力</div>
        <img class="div5_img1" src="../assets/img/line.png" alt />
        <img class="div5_img2" src="../assets/img/line.png" alt />
        <div class="echarts" id="barEchart"></div>
      </div>
      <ul class="div5_ul">
        <li>
          <span class="colorIcon"></span>
          <span class="div5_text1">绿色矿山</span>
          <img src="../assets/img/rightIcon.png" alt />
          <p class="div5_text2">是指矿产资源开发全过程，既要严格实施科学有序的开采，又要对矿区及周边环境的扰动控制在环境可控制的范围内。</p>
        </li>
        <li>
          <span class="colorIcon" style="background-color:#FFD350"></span>
          <span class="div5_text1">智能矿山</span>
          <img src="../assets/img/rightIcon.png" alt />
          <p class="div5_text2">指采用现代高新技术和全套矿山自动化设备等来提高矿山生产率和经济效益，通过对生产过程的动态实时监控,将矿山生产维持在最佳状态和最优水平。</p>
        </li>
        <li>
          <span class="colorIcon" style="background-color:#01A6FF"></span>
          <span class="div5_text1">智慧电厂</span>
          <img src="../assets/img/rightIcon.png" alt />
          <p
            class="div5_text2"
          >是指在广泛采用现代数字信息处理和通信技术基础上,集成智能传感与执行、智能控制和管理决策等技术,达到安全、高效、环保运行并与智能电网相互协调的发电厂。</p>
        </li>
        <li>
          <span class="colorIcon" style="background-color:#FF6060"></span>
          <span class="div5_text1">智能电网</span>
          <img src="../assets/img/rightIcon.png" alt />
          <p class="div5_text2">以物理电网为基础，将现代先进的传感测量技术、通讯技术、信息技术、计算机技术和控制技术与物理电网高度集成而形成的新型电网。</p>
        </li>
      </ul>
    </div>
    <!-- 行业平均利润率-->
    <div class="itemDiv">
      <div class="item_title">
        <h3>行业平均利润率</h3>
        <!-- <div class="btn-tab">
          <span class="pieSp">饼图</span>
          <span class="lineSp activeSp">折线</span>
        </div> -->
      </div>
      <lineEcharts
        :echartId="div6EchartObj.echartId"
        :seriesData="div6EchartObj.seriesData"
        :legendData="div6EchartObj.legendData"
        :otherOptions="div6EchartObj.otherOptions"
        :xAxisData="div6EchartObj.xAxisData"
        :echartColor="div6EchartObj.echartColor"
      />
    </div>
    <!-- 能源工业总产值与财政收入 -->
    <div class="div1 itemDiv">
      <div class="div1_title item_title">
        <h3>能源工业总产值与财政收入</h3>
      </div>
      <lineEcharts
        :echartId="div7EchartObj.echartId"
        :seriesData="div7EchartObj.seriesData"
        :legendData="div7EchartObj.legendData"
        :otherOptions="div7EchartObj.otherOptions"
        :xAxisData="div7EchartObj.xAxisData"
        :echartColor="div7EchartObj.echartColor"
      />
    </div>
  </div>
</template>

<script>
import lineEcharts from "../components/echartsComponents/line-echarts";
export default {
  data() {
    return {
        div1Type:1,
        div2Type:2,
        div3Type:1,
      div1EchartObj: {
        echartId: "div1Echarts",
        legendData: ["能源消费增长率", "能源生产增长率", "全区经济增长率"],
        seriesData: [
          {
            name: "能源消费增长率",
            data: [13, 1, 4, 44, 45, 322, 76],
          },
          {
            name: "能源生产增长率",
            data: [13, 54, 34, 344, 35, 53],
          },
          {
            name: "全区经济增长率",
            data: [13, 2, 2, 32, 123, 23, 136],
          },
        ],
        xAxisData: ["2016", "2017", "2018", "2019", "2020"],
        otherOptions: {
          smooth: true,
          showSymbol: false,
        },
      },
      div2EchartObj: {
        echartId: "div2Echarts",
        legendData: ["能源消费弹性系数", "能源生产弹性系数", "全区经济增长率"],
        seriesData: [
          {
            name: "能源消费弹性系数",
            yAxisIndex: 1,
            data: [13, 1, 4, 44, 45, 322, 76],
          },
          {
            name: "能源生产弹性系数",
            data: [13, 54, 34, 344, 35, 53],
          },
          {
            name: "全区经济增长率",

            data: [13, 2, 2, 32, 123, 23, 136],
          },
        ],
        xAxisData: ["2016", "2017", "2018", "2019", "2020"],
        otherOptions: {
          smooth: true,
          showSymbol: false,
          yAxis: {
            type: "value",
            position: "right",
            axisTick: {
              show: false,
            },
            axisLabel: {
              textStyle: {
                color: "#9C9DA2",
                fontSize: 12,
              },
              formatter: "{value}",
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "#F3F4F4",
              },
            },
            splitLine: {
              show: false,
            },
          },
        },
      },
      div3EchartObj: {
        echartId: "div3Echarts",
        legendData: ["GDP贡献率"],
        echartColor: ["#0EABF3"],
        seriesData: [
          {
            name: "GDP贡献率",
            data: [13, 1, 4, 44, 45, 322, 76],
          },
        ],
        xAxisData: ["2016", "2017", "2018", "2019", "2020"],
        otherOptions: {
          smooth: false,
          showSymbol: true,
        },
      },
      div4EchartObj: {
        echartId: "div4Echarts",
        legendData: ["单位GDP能耗减少率", "自治区GDP增长率"],
        echartColor: ["#FBAF5D", "#0EABF3"],
        seriesData: [
          {
            name: "单位GDP能耗减少率",
            data: [13, 1, 4, 44, 45, 322, 76],
            areaStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "rgba(251, 175, 93,0.6)",
                    },
                    {
                      offset: 0.6,
                      color: "rgba(251, 175, 93,0.2)",
                    },
                    {
                      offset: 1,
                      color: "rgba(251, 175, 93, 0.01)",
                    },
                  ],
                  false
                ),
                shadowColor: "rgba(251, 175, 93, 0.4)",
                shadowBlur: 10,
              },
            },
          },
          {
            name: "自治区GDP增长率",
            data: [13, 2, 2, 32, 123, 23, 136],
            areaStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "rgba(56, 174, 254, 0.6)",
                    },
                    {
                      offset: 0.6,
                      color: "rgba(56, 174, 254, 0.2)",
                    },
                    {
                      offset: 1,
                      color: "rgba(56, 174, 254, 0.01)",
                    },
                  ],
                  false
                ),
                shadowColor: "rgba(56, 174, 254, 0.4)",
                shadowBlur: 10,
              },
            },
          },
        ],
        xAxisData: ["2016", "2017", "2018", "2019", "2020"],
        otherOptions: {
          smooth: true,
          showSymbol: false,
        },
      },
      div6EchartObj: {
        echartId: "div6Echarts",
        legendData: ["煤", "电", "油", "气", "能源行业平均利润率"],
        echartColor: ["#15E9EC", "#FFD350", "#01A6FF", "#FF6060", "#2673FF"],
        seriesData: [
          {
            name: "煤",
            data: [13, 1, 4, 44, 45, 322, 76],
            areaStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "rgba(21, 233, 236,0.6)",
                    },
                    {
                      offset: 0.6,
                      color: "rgba(21, 233, 236,0.2)",
                    },
                    {
                      offset: 1,
                      color: "rgba(21, 233, 236, 0.01)",
                    },
                  ],
                  false
                ),
                shadowColor: "rgba(21, 233, 236, 0.4)",
                shadowBlur: 10,
              },
            },
          },
          {
            name: "电",
            data: [13, 2, 2, 32, 123, 23, 136],
            areaStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "rgba(255, 211, 80, 0.6)",
                    },
                    {
                      offset: 0.6,
                      color: "rgba(255, 211, 80, 0.2)",
                    },
                    {
                      offset: 1,
                      color: "rgba(255, 211, 80, 0.01)",
                    },
                  ],
                  false
                ),
                shadowColor: "rgba(255, 211, 80, 0.4)",
                shadowBlur: 10,
              },
            },
          },
          {
            name: "油",
            data: [133, 52, 27, 382, 13, 223, 36],
            areaStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "rgba(1, 166, 255, 0.6)",
                    },
                    {
                      offset: 0.6,
                      color: "rgba(1, 166, 255, 0.2)",
                    },
                    {
                      offset: 1,
                      color: "rgba(1, 166, 255, 0.01)",
                    },
                  ],
                  false
                ),
                shadowColor: "rgba(1, 166, 255, 0.4)",
                shadowBlur: 10,
              },
            },
          },
          {
            name: "气",
            data: [43, 672, 247, 82, 243, 123, 326],
            areaStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "rgba(255, 96, 96, 0.6)",
                    },
                    {
                      offset: 0.6,
                      color: "rgba(255, 96, 96, 0.2)",
                    },
                    {
                      offset: 1,
                      color: "rgba(255, 96, 96, 0.01)",
                    },
                  ],
                  false
                ),
                shadowColor: "rgba(255, 96, 96, 0.4)",
                shadowBlur: 10,
              },
            },
          },
          {
            name: "能源行业平均利润率",
            data: [83, 72, 47, 342, 143, 173, 226],
            areaStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "rgba(38, 115, 255, 0.6)",
                    },
                    {
                      offset: 0.6,
                      color: "rgba(38, 115, 255, 0.2)",
                    },
                    {
                      offset: 1,
                      color: "rgba(38, 115, 255, 0.01)",
                    },
                  ],
                  false
                ),
                shadowColor: "rgba(38, 115, 255, 0.4)",
                shadowBlur: 10,
              },
            },
          },
        ],
        xAxisData: ["2016", "2017", "2018", "2019", "2020"],
        otherOptions: {
          smooth: true,
          showSymbol: false,
        },
      },
      div7EchartObj: {
        echartId: "div7Echarts",
        legendData: ["能源工业总产值", "自治区财政收入"],
        echartColor: ["#0EABF3", "#FBAF5D"],
        seriesData: [
          {
            name: "能源工业总产值",
            data: [13, 1, 4, 44, 45, 322, 76],
          },
          {
            name: "自治区财政收入",
            data: [123, 14, 47, 144, 85, 22, 96],
          },
        ],
        xAxisData: ["2016", "2017", "2018", "2019", "2020"],
        otherOptions: {
          smooth: false,
          showSymbol: true,
          yName:'亿元'
        },
      },
      seltValue1: 0,
      seltValue2: 0,
      SeltArr1: [
        { text: "煤炭工业", value: 0 },
        { text: "电力工业", value: 1 },
        { text: "石油工业", value: 2 },
      ],
      SeltArr2: [
        { text: "单位GDP能耗减少率", value: 0 },
        { text: "自治区GDP增长率", value: 1 },
      ],
    };
  },
  components: {
    lineEcharts,
  },
  mounted() {
   
    this.barOption();
  },
  methods: {
    barOption() {
      let myColor = ["#15E9EC", "#FFD350", "#01A6FF", "#FF6060"];
      let itemStyle = {
        normal: {
          barBorderRadius: 30,
          color: (params) => {
            var num = myColor.length;
            return myColor[params.dataIndex % num];
          },
        },
      };
      let label = {
        normal: {
          show: true,
          color: "#8F99B2",
          position: "outside",
          padding:[0,0,0,90],
          formatter:function(prames){
              return `${prames.value}亿吨标煤   ${prames.value}%`
          },
        },
      };
      let barWidth = 10;
      let option = {
        grid: {
          left: "5%",
          right: "3%",
          bottom: "2%",
          top: "2%",
          containLabel: true,
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "none",
          },
          formatter: function (params) {
            return (
              params[0].name +
              "<br/>" +
              "<span style='display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:rgba(36,207,233,0.9)'></span>" +
              params[0].seriesName +
              " : " +
              Number(
                (params[0].value.toFixed(4) / 10000).toFixed(2)
              ).toLocaleString() +
              " 万元<br/>"
            );
          },
        },
        // backgroundColor: 'rgb(20,28,52)',
        xAxis: {
          show: false,
          type: "value",
        },
        yAxis: [
          {
            show: false,
            type: "category",
            inverse: true,
            axisLabel: {
              show: true,
              textStyle: {
                color: "#fff",
              },
            },
            splitLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLine: {
              show: false,
            },
            // data: ["大米", "玉米", "蔬菜", "鸡蛋"],
          },
          {
            type: "category",
            inverse: true,
            axisTick: "none",
            axisLine: "none",
            show: true,
            axisLabel: {
              textStyle: {
                color: "#8F99B2",
                fontSize: "12",
              },
              padding: [3, 5, 8, 2],
              formatter: function (value) {
                return value;
              },
            },
            data: ["100亿吨标煤", "200亿吨标煤", "230亿吨标煤", "265亿吨标煤"],
          },
        ],
        series: [
          {
            name: "标煤",
            type: "bar",
            zlevel: 1,
            itemStyle: itemStyle,
            label: label,
            barWidth: barWidth,
            data: [20, 30, 60, 10],
          },
          {
            name: "背景",
            type: "bar",
            barWidth: 10,
            barGap: "-100%",
            data: [100, 100, 100, 100],
            itemStyle: {
              normal: {
                color: "#D9D9D9",
                barBorderRadius: 30,
              },
            },
          },
        ],
      };

      var myChart = this.$echarts.init(document.getElementById("barEchart"));
      myChart.setOption(option);
    window.addEventListener("resize", () => { 
       myChart.resize();
    });
    },
  
  //   能源生产、消费与经济增长趋势==》切换
    changeTab(id){
        this.div1Type=id
        if(id==2){
           this.div1EchartObj.seriesData=[ 
            {
                name: "能源消费增长率",
                data: [113, 13, 44, 54, 95, 22, 16],
            },
            {
                name: "能源生产增长率",
                data: [313, 154, 234, 44, 25, 93],
            },
            {
                name: "全区经济增长率",
                data: [113, 26, 122, 52, 83, 33, 66],
            },
            
            ]}else{
            this.div1EchartObj.seriesData=[
                
            {
                name: "能源消费增长率",
                data: [13, 1, 4, 44, 45, 322, 76],
            },
            {
                name: "能源生产增长率",
                data: [13, 54, 34, 344, 35, 53],
            },
            {
                name: "全区经济增长率",

                data: [13, 2, 2, 32, 123, 23, 136],
            },
            
            ]
        }
        
    },
  //  能源弹性系数与经济增长趋势==》切换
    changeTab2(id){
        this.div2Type=id
        if(id==2){
           this.div2EchartObj.seriesData=[ 
            {
                name: "能源消费弹性系数",
                yAxisIndex: 1,
                data: [113, 13, 44, 54, 95, 22, 16],
            },
            {
                name: "能源生产弹性系数",
                data: [313, 154, 234, 44, 25, 93],
            },
            {
                name: "全区经济增长率",
                data: [113, 26, 122, 52, 83, 33, 66],
            },
            
            ]}else{
            this.div2EchartObj.seriesData=[
                
            {
                name: "能源消费弹性系数",
                yAxisIndex: 1,
                data: [13, 1, 4, 44, 45, 322, 76],
            },
            {
                name: "能源生产弹性系数",
                data: [13, 54, 34, 344, 35, 53],
            },
            {
                name: "全区经济增长率",

                data: [13, 2, 2, 32, 123, 23, 136],
            },
            
            ]
        }
        
    },
  //   能源工业总产值对GDP的贡献率==》切换
    changeTab3(id){
        this.div3Type=id
    },




  },

};
</script>

<style lang="scss" scoped>
.Energy-Economics {
  font-size: 0.24rem;
  background-color: #dcdcdc;
  .energy-map {
    height: 8.2rem;
  }
  .itemDiv {
    margin-bottom: 0.2rem;
    background-color: #fff;
    padding: 0 0.25rem;
  }
  .item_title {
    display: flex;
    justify-content: space-between;
    padding: 0.24rem 0 0.44rem;

    h3 {
      font-size: 0.26rem;
      color: #3a4664;
      font-weight: bold;
      padding-top: 0.1rem;
    }
    .btn-tab {
      width: 2.2rem;
      line-height: 0.4rem;
      border: 1px solid #abbcd5;
      display: flex;
      border-radius: 0.2rem;
      overflow: hidden;
      span {
        flex: 1;
        text-align: center;
        color: #abbcd5;
      }
      .activeSp {
        background-color: #abbcd5;
        color: #fff;
      }
    }
  }
  .itemSelt {
    width: 1.9rem;
    height: 0.5rem;
    border: 1px solid #e6e8eb;
  }
  .itemSelt2 {
    width: 3rem;
  }
  .itemSelt /deep/ .van-dropdown-menu__bar {
    height: 0.46rem !important;
  }
  .itemSelt /deep/ .van-ellipsis {
    font-size: 0.19rem;
    color: #9c9da2;
  }
  .changeWap {
    display: flex;
    justify-content: flex-end;
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
  .pieSp {
    text-indent: 0.2rem;
    background: url("../assets/img/pieIcon.png") no-repeat left 0.12rem center;
    background-size: 0.2rem;
  }
  .lineSp {
    text-indent: 0.2rem;
    background: url("../assets/img/lineIcon.png") no-repeat left 0.12rem center;
    background-size: 0.2rem;
  }
 
  .div5 {
    min-height: 4.4rem;
    padding-bottom: 0.2rem;
    .div5_echarts_wap {
      height: 4.2rem;
      position: relative;
      .div5_div1 {
        position: absolute;
        top: 0.95rem;
        left: 0.1rem;
        color: #8f99b2;
        font-size: 0.2rem;
      }
      .div5_div2 {
        position: absolute;
        top: 2.88rem;
        left: 0.1rem;
        color: #8f99b2;
        font-size: 0.2rem;
      }

      .div5_img1 {
        top: 0.44rem;
        left: 0.6rem;
      }
      .div5_img2 {
        top: 2.4rem;
        left: 0.6rem;
      }
      img {
        width: 0.34rem;
        position: absolute;
      }
    }
    #barEchart {
            width: 92%;
    height: 4.5rem;
      position: absolute;
      left: 0.63rem;
    }
  }
  .div5_ul {
    li {
      display: flex;
      line-height: 1.2rem;
      font-size: 0.2rem;
      margin-bottom: 0.15rem;
      justify-content: center;
      .colorIcon {
        display: block;
        width: 0.28rem;
        height: 0.18rem;
        background: #15e9ec;
        border-radius: 0.05rem;
        margin-top: 0.5rem;
      }
      img {
        width: 0.28rem;
        height: 0.11rem;
        margin-top: 0.55rem;
        margin-right: 0.12rem;
      }
      .div5_text1 {
        color: #8f99b2;

        padding: 0 0.12rem;
      }
      .div5_text2 {
        width: 4.9rem;
        background: #e3eaf0;
        opacity: 0.84;
        color: #8f99b2;
        line-height: 0.35rem;
        padding: 0.07rem;
      }
    }
  }
}
</style>