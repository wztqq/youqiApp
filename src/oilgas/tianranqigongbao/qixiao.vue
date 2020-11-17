<template>
  <div>
    <div id="confess_content" style="background-color: #dadbdb">

      <!-- banner -->
      <img class="map"
        src="../../assets/img/gasmap/yafei_map.png"
        alt="图片未显示"/>

      <!-- 月产量分析 && 管线明细 -->
      <div class="chart">
        <div class="tab_oil">
          <span v-for="(item, index) in tablist_one"
            :key="index"
            @click="tabButton_one(index)"
            v-bind:class="[
              { tab_oil_two: index == selected_one },
              { tab_oil_one: true },
            ]">{{ item }}</span>
        </div>
        <div class="chart-item" v-if="selected_one === 0">
          <div class="fontSize_div">
            <div class="fontSize">28453</div>
            <div class="fontSize">亿立方米</div>
          </div>
          <dount-chart class="echarts" :optionObj="optionObjTFJGFX"></dount-chart>
        </div>
        <div class="chart-item" id="table" v-if="selected_one === 1">
          <p class="unit">单位： 万立方米</p>
          <table class="table_one">
            <tr>
              <th :width="th.width" v-for="(th,index) in tableTh_one" :key="index">{{th.value}}</th>
            </tr>
            <tr v-for="(tr,index) in listData_one" :key="index">
              <td>{{index+1}}</td>
              <td v-for="(td,index) in tr" :key="index">{{td}}</td>
            </tr>
          </table>
        </div>
      </div>

      <!-- 月调峰同比分析 -->
      <!-- <div class="chart module">
        <h4>月调峰同比分析</h4>
        <barline-chart :optionObj="optionObjYTF"></barline-chart>
      </div> -->

      <!-- 盟市日供应分析 && 消费结构分析 -->
      <div class="chart">
        <div class="tab_oil">
          <span v-for="(item, index) in tablist_two"
            :key="index"
            @click="tabButton_two(index)"
            v-bind:class="[
              { tab_oil_two: index == selected_two },
              { tab_oil_one: true },
            ]">{{ item }}</span>
        </div>
        <div class="chart-item" v-if="selected_two === 0">
          <barlChart :optionObj="optionObjRJGFX"></barlChart>
        </div>
        <div class="chart-item" v-if="selected_two === 1">
          <div class="fontSize_div">
            <div class="fontSize">9.5</div>
            <div class="fontSize">亿立方米</div>
          </div>
          <dount-chart class="echarts" :optionObj="optionObjXFJGFX"></dount-chart>
        </div>
      </div>

      <!-- 盟市地方3天储气能力 && 盟市城燃5%储气能力 -->
      <div class="chart">
        <div class="tab_oil">
          <span v-for="(item, index) in tablist_three"
            :key="index"
            @click="tabButton_three(index)"
            v-bind:class="[
              { tab_oil_two: index == selected_three },
              { tab_oil_one: true },
            ]">{{ item }}</span>
        </div>
        <div class="chart-item" v-if="selected_three === 0">
          <div class="fontSize_div">
            <div class="fontSize">0.508</div>
            <div class="fontSize">亿立方米</div>
          </div>
          <dount-chart class="echarts" :optionObj="optionObjMS3T"></dount-chart>
        </div>
        <div class="chart-item" v-if="selected_three === 1">
          <div class="fontSize_div">
            <div class="fontSize">0.8543</div>
            <div class="fontSize">亿立方米</div>
          </div>
          <dount-chart class="echarts" :optionObj="optionObjMS5"></dount-chart>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "qixiao",
  components: {
    dountChart: () => import("@/components/dount_chart"),
    barlineChart: () => import("@/components/barLine_chart"),
    doublelineChart: () => import("@/components/doubleLine_chart"),
    pieChart: () => import("@/components/pie_chart"),
    barlChart: () => import("@/components/bar_line_chart"),
  },
  data() {
    return {
      selected_one: 0,
      selected_two: 0,
      selected_three: 0,
      tablist_one: ["月产量分析", "管线明细"],
      tablist_two: ["日供气量和合同量对比分析", "消费结构分析"],
      tablist_three: ["盟市地方3天储气能力", "盟市城燃5%储气能力"],
      tableTh_one: [
        {
          value: "序号",
          width: 60,
        },
        {
          value: "管道名称",
          width: 300,
        },
        {
          value: "日进气量",
          width: 100,
        },
        {
          value: "日出气量",
          width: 100,
        },
        {
          value: "管存量",
          width: 90,
        },
      ],
      listData_one: [
        {
          guanxian: "长乌临输气管道",
          jinqi: "790",
          chuqi: "790",
          cunliang: "1600"
        },
        {
          guanxian: "苏东准输气管",
          jinqi: "1500",
          chuqi: "1500",
          cunliang: "1200"
        },
        {
          guanxian: "长呼输气管道",
          jinqi: "50",
          chuqi: "50",
          cunliang: "150"
        },
        {
          guanxian: "长呼复输气管道",
          jinqi: "50",
          chuqi: "50",
          cunliang: "400"
        },
      ],
      optionObjTFJGFX: {
        legendData: ["苏里格气田", "大牛地气田", "靖边气田", "胜利井气田", "乌审旗气田"],
        seriesName: "月产量分析",
        unit: "亿立方米",
        seriesData: [
          { value: 5440, name: "苏里格气田" },
          { value: 5033, name: "大牛地气田" },
          { value: 3801, name: "靖边气田" },
          { value: 2193, name: "胜利井气田" },
          { value: 11986, name: "乌审旗气田" },
        ],
      },
      optionObjXFJGFX: {
        legendData: ["居民用气", "民生用气", "商业", "甲醛化肥企业", "可中断企业", "不可中断企业", "LNG企业用户"],
        seriesName: "消费结构分析",
        unit: "亿立方米",
        seriesData: [
          { value: 0.9, name: "居民用气" },
          { value: 0.9, name: "民生用气" },
          { value: 0.7, name: "商业" },
          { value: 0.4, name: "甲醛化肥企业" },
          { value: 2.2, name: "可中断企业" },
          { value: 2.2, name: "不可中断企业" },
          { value: 2.2, name: "LNG企业用户" },
        ],
      },
      optionObjRJGFX: {
        legendData: ["日供气量", "合同量"],
        yLeftName: "亿立方米",
        yRightName: "",
        xData: ["11月1日", "11月2日", "11月3日", "11月4日", "11月5日", "11月6日", "11月7日"],
        seriesLeftData: [0.05, 0.05, 0.07, 0.03, 0.04, 0.05, 0.05],
        barWidth: 10,
        lineWidth: 2,
        symbolSize: 0,
        warnData: [0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, ]
      },
      optionObjYTF: {
        legendData: ["天然气月产量", "同比变化"],
        yLeftName: "亿立方米",
        yRightName: "%",
        xData: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
        seriesLeftData: [6, 13, 18, 13, 13, 18, 13, 9, 13, 18, 13, 9],
        seriesRightData: [-0.5, 1, 2, 0.9, 0.9, 1.9, 0.9, 0.85, 1, 2.2, 1.4, 0.3],
        barWidth: 10,
        lineWidth: 2,
        symbolSize: 8,
        leftMin: 0,
        leftMax: 25,
        leftInterval: 5,
        rightMin: -2,
        rightMax: 3,
        rightInterval: 1
      },
      optionObjMS3T: {
        legendData: ["巴彦淖尔", "包头", "呼和浩特", "鄂尔多斯", "乌海", "通辽"],
        seriesName: "盟市地方3天储气能力",
        unit: "亿立方米",
        seriesData: [
          { value: 0.095, name: "巴彦淖尔" },
          { value: 0.064, name: "包头" },
          { value: 0.031, name: "呼和浩特" },
          { value: 0.064, name: "鄂尔多斯" },
          { value: 0.127, name: "乌海" },
          { value: 0.127, name: "通辽" },
        ],
      },
      optionObjMS5: {
        legendData: ["巴彦淖尔", "包头", "呼和浩特", "鄂尔多斯", "乌海", "通辽"],
        seriesName: "盟市城燃5%储气能力",
        unit: "亿立方米",
        seriesData: [
          { value: 0.1598, name: "巴彦淖尔" },
          { value: 0.1076, name: "包头" },
          { value: 0.052, name: "呼和浩特" },
          { value: 0.1077, name: "鄂尔多斯" },
          { value: 0.2136, name: "乌海" },
          { value: 0.2136, name: "通辽" },
        ],
      },
    };
  },
  mounted() {

  },
  methods: {
    tabButton_one(index) {
      this.selected_one = index;
    },
    tabButton_two(index) {
      this.selected_two = index;
    },
    tabButton_three(index) {
      this.selected_three = index;
    },
  },
};
</script>

<style lang="scss" scoped>
#confess_content {
  width: 100%;
  /* 关于地图内容的调整期 */
  .map {
    width: 100%;
    margin-top: 93px;
    background-color: #dadbdb;
    overflow: hidden;
  }
  .chart {
    width: 100%;
    height: 289px;
    background-color: white;
    padding: 10px 0;
    position: relative;
    .chart-item {
      height: calc(100% - 25px);
      // width: 100%;
    }
    &.module {
      margin: 10px 0;
      padding: 0 15px 15px;
    }
    h4 {
      font: 500 13px 微软雅黑;
      color: #394564;
      line-height: 3em;
    }
  }
  /* 按钮样式调整 */
  .tab_oil {
    width: 345px;
    height: 31px;
    background-color: white;
    margin: 0px auto;
    border: 1px solid #3a6dda;
    border-radius: 5px;
    .tab_oil_one {
      width: 50%;
      height: 29px;
      font: 12px PingFangSC-Regular;
      color: #3a6dda;
      line-height: 29px;
      float: left;
      position: relative;
      top: 0;
      left: 0;
      text-align: center;
    }
    .tab_oil_two {
      width: 50%;
      height: 29px;
      background-color: #3a6dda;
      font: 12px PingFangSC-Regular;
      color: white;
      line-height: 29px;
      float: left;
      position: relative;
      top: 0;
      left: 0;
      text-align: center;
      border-radius: 4px;
    }
  }
}
/* 表格 */
#table {
  width: calc(100% - 30px);
  margin: 0 15px;
  overflow-x: auto;
  .unit {
    text-align: right;
    font-size: 10px;
    padding-top: 10px;
  }
  .table_one {
    font-family: PingFang SC;
    width: 100%;
    border-collapse: collapse;
    margin: 5px auto 20px;
    th, td {
      font-size: 14px;
      border: 1px solid #b9bec9;
      padding: 3px 7px 2px 7px;
      text-align: center;
    }

    th {
      background-color: #d8dbde;
    }
  }
}
/* 文字块 */
.fontSize_div {
  position: absolute;
  width: 100%;
  // height: 100%;
  text-align: center;
}
.fontSize {
  position: relative;
  top: 75px;
  font: 16px bolder microsoft-yahei;
}

.echarts {
  // width: 100%;
  // height: 100%;
  // margin: 20px auto;
  background-image: url(../../assets/img/industryAnalysis/椭圆.png);
  background-repeat: no-repeat;
  background-position: 50% 37%;
  background-size: 65px 65px;
}
</style>
