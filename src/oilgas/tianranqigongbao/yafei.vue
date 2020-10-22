<template>
  <div>
    <div id="confess_content" style="background-color: #dadbdb">

      <!-- banner -->
      <img class="map"
        src="../../assets/img/gasmap/yafei_map.png"
        alt="图片未显示"/>

      <!-- 日调峰记录查询 && 调峰结构分析 -->
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
        <div class="chart-item" id="table" v-if="selected_one === 0">
          <table class="table_one" style="width: 800px">
            <tr>
              <th :width="th.width" v-for="(th,index) in tableTh_one" :key="index">{{th.value}}</th>
            </tr>
            <tr v-for="(tr,index) in listData_one" :key="index">
              <td>{{index+1}}</td>
              <td v-for="(td,index) in tr" :key="index">{{td}}</td>
            </tr>
          </table>
        </div>
        <div class="chart-item" v-if="selected_one === 1">
          <div class="fontSize_div">
            <div class="fontSize">0.508</div>
            <div class="fontSize">亿立方米</div>
          </div>
          <dount-chart class="echarts" :id="echartsTFJGFX" :optionObj="optionObjTFJGFX"></dount-chart>
        </div>
      </div>

      <!-- 月调峰同比分析 -->
      <div class="chart module">
        <h4>月调峰同比分析</h4>
        <barline-chart :id="echartsYTF" :optionObj="optionObjYTF"></barline-chart>
      </div>

      <!-- 天然气日消费缺口预测 && 调峰计划建议 -->
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
          <doubleline-chart :id="echartsQKYC" :optionObj="optionObjLineQKYC"></doubleline-chart>
        </div>
        <div class="chart-item" id="table" v-if="selected_two === 1">
          <table class="table_one">
            <tr>
              <th :width="th.width" v-for="(th,index) in tableTh_two" :key="index">{{th.value}}</th>
            </tr>
            <tr v-for="(tr,index) in listData_two" :key="index">
              <td>{{index+1}}</td>
              <td v-for="(td,index) in tr" :key="index">{{td}}</td>
            </tr>
          </table>
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
  },
  data() {
    return {
      echartsTFJGFX: "echartsTFJGFX",
      echartsYTF: "echartsYTF",
      echartsQKYC: "echartsQKYC",
      selected_one: 0,
      selected_two: 0,
      selected_three: "0",
      tablist_one: ["日调峰记录查询", "调峰结构分析"],
      tablist_two: ["天然气日消费缺口预测", "调峰计划建议"],
      tableTh_one: [
        {
          value: "序号",
          width: 60,
        },
        {
          value: "地区",
          width: 150,
        },
        {
          value: "调峰策略",
          width: 150,
        },
        {
          value: "响应等级",
          width: 150,
        },
        {
          value: "调峰对象",
          width: 300,
        },
        {
          value: "具体措施",
          width: 210,
        },
        {
          value: "时间",
          width: 120,
        },
      ],
      listData_one: [
        {
          area: "鄂尔多斯",
          pitchPlan: "优先策略",
          level: "红色",
          pitchObj: "LNG用户用气、可中断工业",
          measure: "停止供气",
          date: "2020.9.15",
        },
        {
          area: "包头",
          pitchPlan: "优先策略",
          level: "橙色",
          pitchObj: "可中断工业",
          measure: "停止供气",
          date: "2020.9.12",
        },
        {
          area: "巴彦淖尔",
          pitchPlan: "优先策略",
          level: "黄色",
          pitchObj: "LNG用户用气",
          measure: "减少供气量12%",
          date: "2020.9.15",
        },
        {
          area: "呼和浩特",
          pitchPlan: "优先策略",
          level: "蓝色",
          pitchObj: "可中断工业",
          measure: "减少供气量4%",
          date: "2020.9.20",
        },
      ],
      tableTh_two: [
        {
          value: "序号",
          width: 60,
        },
        {
          value: "地区",
          width: 120,
        },
        {
          value: "调峰策略",
          width: 120,
        },
        {
          value: "响应等级",
          width: 120,
        },
        {
          value: "时间",
          // width: 120,
        },
      ],
      listData_two: [
        {
          area: "鄂尔多斯",
          pitchPlan: "优先策略",
          level: "红色",
          date: "2020.9.15",
        },
        {
          area: "包头",
          pitchPlan: "优先策略",
          level: "橙色",
          date: "2020.9.12",
        },
        {
          area: "巴彦淖尔",
          pitchPlan: "优先策略",
          level: "黄色",
          date: "2020.9.15",
        },
        {
          area: "呼和浩特",
          pitchPlan: "优先策略",
          level: "蓝色",
          date: "2020.9.20",
        },
      ],
      optionObjTFJGFX: {
        legendData: ["LNG", "甲醇化肥", "可中断工业", "不可中断工业", "商业"],
        seriesName: "调峰结构分析",
        seriesData: [
          { value: 335, name: "LNG" },
          { value: 310, name: "甲醇化肥" },
          { value: 234, name: "可中断工业" },
          { value: 135, name: "不可中断工业" },
          { value: 738, name: "商业" },
        ],
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
      optionObjLineQKYC: {
        yName: "亿立方米",
        legendData: ["日需求量", "日供应量"],
        seriesName1: "日供应量",
        seriesName2: "日需求量",
        xData: ["1月1日", "1月3日", "1月5日", "1月7日", "1月9日", "1月11日", "1月13日", "1月15日", "1月17日", "1月19日"],
        seriesData1: [6, 13, 18, 13, 13, 18, 13, 9, 13, 9],
        seriesData2: [4, 8, 15, 9, 7, 11, 9, 11, 6, 5],
      }
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
  },
};
</script>

<style lang="scss" scoped>
#confess_content {
  width: 100%;
  /* 关于地图内容的调整期 */
  .map {
    width: 100%;
    height: 314.5px;
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
  .table_one {
    font-family: PingFang SC;
    width: 100%;
    border-collapse: collapse;
    margin: 20px auto;
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
  height: 100%;
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
