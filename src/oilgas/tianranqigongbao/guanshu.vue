<template>
  <div>
    <div id="confess_content" style="background-color: #dadbdb">

      <!-- banner -->
      <img class="map"
        src="../../assets/img/gasmap/yafei_map.png"
        alt="图片未显示"/>
      <div class="banner">
        <h4>陕西四线输气管道</h4>
        <div class="main-items">
          <div class="item" v-for="(item, index) in bannerData" :key="index">
            <p class="label">{{item.label}}</p>
            <p>{{item.value}}</p>
          </div>
        </div>
      </div>
      <!-- 日调峰记录查询 && 调峰结构分析 -->
      <div class="chart table">
        <div id="table">
          <table class="table_one" style="width: 950px">
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

      <!-- 天然气日消费缺口预测 && 调峰计划建议 -->
      <div class="chart module">
        <div class="tab_oil">
          <span v-for="(item, index) in tablist_one"
            :key="index"
            @click="tabButton_one(index)"
            v-bind:class="[
              { tab_oil_two: index == selected_one },
              { tab_oil_one: true },
            ]">{{ item }}</span>
        </div>
        <div class="chart-item" :key="timer" v-if="selected_one === 0">
          <div class="fontSize_div">
            <div class="fontSize">3000</div>
            <div class="fontSize">万方</div>
          </div>
          <dount-chart class="echarts" :optionObj="optionObjLineQTGQ"></dount-chart>
        </div>
        <div class="chart-item" :key="timer" id="table" v-if="selected_one === 1">
          <pie-chart :optionObj="optionObjGQQY"></pie-chart>
        </div>
      </div>

      <!-- 接收端主要行业占比 -->
      <div class="chart module">
        <h4>接收端主要行业占比</h4>
        <div class="chart-item">
          <div class="fontSize_div">
            <div class="fontSize">3000</div>
            <div class="fontSize">万方</div>
          </div>
          <pie-chart class="echarts" :optionObj="optionObjJSD"></pie-chart>
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
    pieChart: () => import("@/components/pie_chart"),
    doublelineChart: () => import("@/components/doubleLine_chart"),
  },
  data() {
    return {
      bannerData: [
        {
          label: "总里程(公里)",
          value: 1114
        },
        {
          label: "区内里程(公里)",
          value: 27
        },
        {
          label: "输送能力",
          value: "250亿m³"
        },
        {
          label: "起止年限",
          value: "2016-2017"
        },
      ],
      timer: "",
      selected_one: 0,
      tablist_one: ["送气端主要气田供气占比", "送气端主要企业供气占比"],
      tableTh_one: [
        {
          value: "序号",
          width: 50,
        },
        {
          value: "管线",
          width: 300,
        },
        {
          value: "总里程(km)",
          width: 120,
        },
        {
          value: "区内里程(km)",
          width: 120,
        },
        {
          value: "运送能力",
          width: 120,
        },
        {
          value: "昨日进气量",
          width: 120,
        },
        {
          value: "昨日出气量",
          width: 120,
        }
      ],
      listData_one: [
        {
          guanxian: "长庆气田·乌海·临河输气管道",
          totalkm: "426",
          partlm: "426",
          nengli: "10万亿立方",
          jinqi: "790",
          chuqi: "790",
        },
        {
          guanxian: "苏·东·准输气管",
          totalkm: "147",
          partlm: "147",
          nengli: "12万亿立方",
          jinqi: "1500",
          chuqi: "1500",
        },
        {
          guanxian: "长庆气田·呼和浩特天然气输气管道",
          totalkm: "561.2",
          partlm: "561.2",
          nengli: "18万亿立方",
          jinqi: "50",
          chuqi: "50",
        },
        {
          guanxian: "长庆气田·呼和浩特天然气输气管道复线",
          totalkm: "468.2",
          partlm: "468.2",
          nengli: "21万亿立方",
          jinqi: "760",
          chuqi: "760",
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
      optionObjLineQTGQ: {
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
      optionObjJSD: {
        legendData: ["化肥", "甲醇", "城市燃气"],
        seriesName: "接收端主要行业占比",
        seriesData: [
          { value: 335, name: "化肥" },
          { value: 310, name: "甲醇" },
          { value: 234, name: "城市燃气" },
        ],
      },
      optionObjGQQY: {
        legendData: ["中石油", "中石化"],
        seriesName: "送气端主要企业供气占比",
        seriesData: [
          { value: 77, name: "中石油" },
          { value: 23, name: "中石化" },
        ],
      },
    };
  },
  mounted() {
    this.timer = new Date().getTime()
  },
  methods: {
    tabButton_one(index) {
      this.selected_one = index;
      this.timer = new Date().getTime()
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
  position: relative;
  /* 关于地图内容的调整期 */
  .map {
    width: 100%;
    margin-top: 93px;
    background-color: #dadbdb;
    overflow: hidden;
  }
  .banner {
    width: 240px;
    height: 150px;
    background: url("../../assets/img/gasmap/module_bg.png") no-repeat;
    position: absolute;
    top: 150px;
    left: 15px;
    background-size: cover;
    h4 {
      color: #fff;
      font: bolder 12px MicrosoftYaHei;
      padding-top: 10px;
      text-align: center;
    }
    .main-items {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      padding: 5px 15px;
      .item {
        width: calc(50% - 10px);
        padding: 5px;
        margin: 5px;
        background: #6a7181;
        opacity: .7;
        p {
          color: #fff;
          line-height: 1.2em;
          font-size: 11;
          text-align: center;
          font-weight: bold;
          &.label {
            color: #8fc8fa;
            font-size: 9px;
          }
        }
      }
    }
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
      padding: 10px 0 15px;
    }
    &.table {
      height: auto;
    }
    h4 {
      font: 500 13px 微软雅黑;
      color: #394564;
      line-height: 3em;
      padding-left: 15px;
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
  background: #fff;
  overflow-x: auto;
  margin: 0 15px;
  .table_one {
    font-family: PingFang SC;
    width: 100%;
    border-collapse: collapse;
    margin: 10px auto;
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
  background-image: url("../../assets/img/industryAnalysis/椭圆.png");
  background-repeat: no-repeat;
  background-position: 50% 37%;
  background-size: 65px 65px;
}
</style>
