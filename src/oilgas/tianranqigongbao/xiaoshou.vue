<template>
  <div>
    <div id="confess_content" style="background-color: #dadbdb">

      <!-- banner -->
      <div id="banner">
        <img class="map"
          src="../../assets/img/gasmap/sale_map.png"
          alt="图片未显示"/>
        <div class="banner">
          <h4>***盟市</h4>
          <p>昨日天然气消费量：100亿立方米</p>
          <p>累计天然气消费量：1000亿立方米</p>
        </div>
      </div>

      <!-- 天然气日消费量分析 && 用气单位结构分析 -->
      <div class="module">
        <van-tabs type="card" class="subtabs" @click="onClick(1, $event)">
          <van-tab v-for="item in tablist_one" :title="item"></van-tab>
        </van-tabs>
        <div class="chart-item" v-if="selectOne === 0">
          <barline-chart :optionObj="optionObjBarGasXF"></barline-chart>
        </div>
        <div class="chart-item" v-if="selectOne === 1">
          <div class="fontSize_div">
            <div class="fontSize">0.508</div>
            <div class="fontSize">亿立方米</div>
          </div>
          <dount-chart class="has-text" :optionObj="optionObjYQDW"></dount-chart>
        </div>
      </div>

      <!-- 盟市消费结构分析 && 销售单位结构分析 -->
      <div class="module">
        <van-tabs type="card" class="subtabs" @click="onClick(2, $event)">
          <van-tab v-for="item in tablist_two" :title="item"></van-tab>
        </van-tabs>
        <div class="chart-item" v-if="selectTwo === 0">
          <div class="fontSize_div">
            <div class="fontSize">3000</div>
            <div class="fontSize">万立方米</div>
          </div>
          <dount-chart class="has-text" :optionObj="optionObjMS"></dount-chart>
        </div>
        <div class="chart-item" v-if="selectTwo === 1">
          <div class="fontSize_div">
            <div class="fontSize">3000</div>
            <div class="fontSize">万立方米</div>
          </div>
          <dount-chart class="has-text" :optionObj="optionObjXS"></dount-chart>
        </div>
      </div>

      <!-- 日消费量预测 && 日消费缺口预测 -->
      <div class="module">
        <van-tabs type="card" class="subtabs" @click="onClick(3, $event)">
          <van-tab v-for="item in tablist_three" :title="item"></van-tab>
        </van-tabs>
        <div class="chart-item" v-if="selectThree === 0">
          <doublebar-chart :optionObj="optionObjXFYC"></doublebar-chart>
        </div>
        <div class="chart-item" v-if="selectThree === 1">
          <bothway-chart :optionObj="optionObjXFQKYC"></bothway-chart>
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
    doublebarChart: () => import("@/components/doublebar_chart"),
    bothwayChart: () => import("@/components/bothway_chart"),
  },
  data() {
    return {
      selectOne: 0,
      selectTwo: 0,
      selectThree: 0,
      tablist_one: ["天然气日消费量分析", "用气单位结构分析"],
      tablist_two: ["盟市消费结构分析", "销售单位结构分析"],
      tablist_three: ["日消费量预测", "日消费缺口预测"],
      optionObjBarGasXF: {
        legendData: ["天然气月产量", "同比变化"],
        yLeftUnit: "亿立方米",
        yRightUnit: "%",
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
      optionObjYQDW: {
        legendData: ["工业用户", "商业", "建筑业", "生活消费", "供暖"],
        seriesName: "用气单位结构分析",
        unit: "亿立方米",
        seriesData: [
          { value: 335, name: "工业用户" },
          { value: 310, name: "商业" },
          { value: 234, name: "建筑业" },
          { value: 135, name: "生活消费" },
          { value: 738, name: "供暖" },
        ],
      },
      optionObjMS: {
        legendData: ["阿拉善盟", "呼和浩特", "锡林郭勒", "呼伦贝尔", "鄂尔多斯", "其他"],
        seriesName: "盟市消费结构分析",
        unit: "万立方米",
        seriesData: [
          { value: 335, name: "阿拉善盟" },
          { value: 310, name: "呼和浩特" },
          { value: 234, name: "锡林郭勒" },
          { value: 135, name: "呼伦贝尔" },
          { value: 738, name: "鄂尔多斯" },
          { value: 738, name: "其他" },
        ],
      },
      optionObjMSS: {
        legendData: ["阿拉善盟", "呼和浩特", "锡林郭勒", "呼伦贝尔", "鄂尔多斯", "其他"],
        seriesName: "盟市消费结构分析",
        seriesData: [
          { value: 335, name: "阿拉善盟" },
          { value: 310, name: "呼和浩特" },
          { value: 234, name: "锡林郭勒" },
          { value: 135, name: "呼伦贝尔" },
          { value: 738, name: "鄂尔多斯" },
          { value: 738, name: "其他" },
        ],
      },
      optionObjXS: {
        legendData: ["洁源燃气", "中燃燃气", "荣洁燃气", "兴胜燃气"],
        seriesName: "销售单位结构分析",
        unit: "万立方米",
        seriesData: [
          { value: 335, name: "洁源燃气" },
          { value: 310, name: "中燃燃气" },
          { value: 234, name: "荣洁燃气" },
          { value: 135, name: "兴胜燃气" },
        ],
      },
      optionObjXFYC: {
        legendData: ["天然气日消费量", "天然气日消费量预测值"],
        xData: ["1月1日", "1月2日", "1月3日", "1月4日", "1月5日", "1月6日", "1月7日"],
        yLeftName: "亿立方",
        yRightName: "%",
        seriesLeftData: [120, 132, 101, 134, 90, 230, 210],
        seriesRightData:[220, 182, 191, 234, 290, 330, 310]
      },
      optionObjXFQKYC: {
        legendData: ["差值"],
        yName: "日期",
        seriesName: "差值",
        yData: ["1月1日", "1月2日", "1月3日", "1月4日", "1月5日", "1月6日", "1月7日"],
        // yLeftName: "亿立方",
        // yRightName: "%",
        seriesData: [5, 6, -5, -6, 3.8, 4, 4],
      },
    };
  },

  methods: {
    onClick(type, value){
      if(type === 1) {
        this.selectOne = value;
      }else if(type === 2){
        this.selectTwo = value;
      }else if(type === 3) {
        this.selectThree = value;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
#confess_content {
  width: 100%;

  #banner {
    position: relative;
  }

  .banner {
    width: 220px;
    height: 80px;
    background: url("../../assets/img/gasmap/sale_banner.png");
    position: absolute;
    top: 150px;
    left: 15px;
    // z-index: 1;
    h4 {
      color: #fff;
      font: bolder 12px MicrosoftYaHei;
      padding-top: 15px;
      padding-left: 30px;
    }

    p {
      font: 500 12px MicrosoftYaHei;
      padding-top: 5px;
      padding-left: 30px;
      color: #fff;
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
.has-text {
  background-image: url("../../assets/img/industryAnalysis/椭圆.png");
}
</style>