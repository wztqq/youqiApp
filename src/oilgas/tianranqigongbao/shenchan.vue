<template>
  <div class="child1" style="background-color: #E6E8EC;">
    <div :class="[{tanchuang:true},{tanchuang_one: show}]">
      <div style="width: 100%;height: 100%;overflow: auto;margin: 50px auto">
        <div class="table-title">鄂尔多斯</div>
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
    <img
      @click.prevent="tanchuangShow()"
      class="map"
      src="../../assets/img/oilgas/shenchan.png"
    />
    <!-- 天然气月产量分析 && 天然气产量与储量关联分析 -->
    <div class="module">
      <van-tabs type="card" class="subtabs" @click="onClick(1, $event)">
        <van-tab v-for="item in tablist_one" :title="item"></van-tab>
      </van-tabs>
      <div class="chart-item" v-if="selectOne === 0">
        <barline-chart :optionObj="optionObjGasCLXF"></barline-chart>
      </div>
      <div class="chart-item" v-if="selectOne === 1">
        <barline-chart :optionObj="optionObjGasGLXF"></barline-chart>
      </div>
    </div>
    <!-- 天然气月产量气田分布 && 天然气月产量企业分布 -->
    <div class="module">
      <van-tabs type="card" class="subtabs" @click="onClick(2, $event)">
        <van-tab v-for="item in tablist_two" :title="item"></van-tab>
      </van-tabs>
      <div class="chart-item" v-if="selectTwo === 0">
        <div class="fontSize_div">
          <div class="fontSize">22</div>
          <div class="fontSize">亿立方米</div>
        </div>
        <dount-Chart class="has-text" :optionObj="optionObjGasQTFB"></dount-Chart>
      </div>
      <div class="chart-item" v-if="selectTwo === 1">
        <pieChart :optionObj="optionObjGasQYFB"></pieChart>
      </div>
    </div>
    <!-- 天然气月产量预测分析 -->
    <div class="module">
      <h4>天然气月产量预测分析</h4>
      <doubleline-chart :optionObj="optionObjGasYCFX"></doubleline-chart>
    </div>
  </div>
</template>
<script>

  export default {
    name: 'child1',
    components: {
      dountChart: () => import("@/components/dount_chart"),
      pieChart: () => import("@/components/pie_chart"),
      barlineChart: () => import("@/components/barLine_chart"),
      doublelineChart: () => import("@/components/doubleLine_chart")
    },
    data() {
      return {
        selectOne: 0,
        selectTwo: 0,
        tablist_one: ['天然气月产量分析', '天然气产量与储量关联分析'],
        tablist_two: ['天然气月产量气田分布', '天然气月产量企业分布'],
        // 天然气月产量分析数据
        optionObjGasCLXF: {
          legendData: ["天然气月产量", "同比变化"],
          yLeftUnit: "亿立方米",
          yRightUnit: "%",
          xData: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
          seriesLeftData: [2.0, 4.9, 7.0, 23.2, 10, 2, 6, 9, 15, 12, 5, 2],
          seriesRightData: [-2, 0, 1, 2, -1.5, -2.5, 2.5, 2.3, 2, 3, -3, 3],
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
        // 天然气产量与储量关联分析数据
        optionObjGasGLXF: {
          legendData: ["天然气月产量", "储量"],
          yLeftUnit: "亿立方米",
          yRightUnit: "%",
          xData: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
          seriesLeftData: [2.0, 4.9, 7.0, 23.2, 10, 2, 6, 9, 15, 12, 5, 2],
          seriesRightData: [20.0, 40.9, 70.0, 230.2, 100, 200, 60, 90, 150, 120, 50, 20],
          barWidth: 10,
          lineWidth: 2,
          symbolSize: 8,
          leftMin: 0,
          leftMax: 25,
          leftInterval: 5,
          rightMin: 0,
          rightMax: 250,
          rightInterval: 50
        },
        // 天然气月产量气田分布数据
        optionObjGasQTFB: {
          legendData: ["苏里格气田", "靖边气田", "胜利井气田", "大牛地气田", "乌审旗气田", "其他"],
          seriesName: "天然气月产量气田分布",
          unit: "亿立方米",
          seriesData: [
            { value: 5.7, name: "苏里格气田" },
            { value: 2.5, name: "靖边气田" },
            { value: 4.4, name: "胜利井气田" },
            { value: 4.8, name: "大牛地气田" },
            { value: 2.4, name: "乌审旗气田" },
            { value: 2.2, name: "其他" },
          ],
        },
        // 天然气月产量企业分布数据
        optionObjGasQYFB: {
          legendData: ["中石油", "中石化"],
          seriesName: "天然气月产量企业分布",
          unit: "亿立方米",
          seriesData: [
            { value: 77, name: "中石油" },
            { value: 23, name: "中石化" },
          ],
        },
        // 天然气月产量预测分析数据
        optionObjGasYCFX: {
          yName: "亿立方米",
          legendData: ['天然气月产量', '天然气月产量预测值'],
          seriesName1: "天然气月产量",
          seriesName2: "天然气月产量预测值",
          xData: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
          seriesData1: [220, 182, 191, 234, 290, 330, 310, 220, 182, 191, 234, 290],
          seriesData2: [300, 132, 101, 134, 90, 230, 210, 120, 132, 101, 134, 90],
        },
        screenWidth: document.body.clientWidth, // 屏幕宽
        screenLeft: "",
        show: 0, //控制弹窗显示
        closeLeft: 0, //关闭按钮居中
        tableTh: [
          "名称",
          "企业人数",
          "面积",
          "经纬度",
          "远景资源量(万立方米)",
          "预测资源量(万立方米)",
          "控制储量(万立方米)",
          "探明储量(万立方米)"
        ],
        listData: [
          {
            name: "苏里格气田",
            leaguerea: "2000",
            area: "5.5万平方公里",
            latitude: "43°23′10″~45°24′27″",
            vision: "3256",
            prediction: "1456",
            control: "1300",
            proved: "1200"
          },
          {
            name: "大牛地气田",
            leaguerea: "1300",
            area: "4314.12平方公里",
            latitude: "41°10′10″~43°24′10″",
            vision: "2687",
            prediction: "1856",
            control: "1399",
            proved: "780"
          },
          {
            name: "靖边气田",
            leaguerea: "1300",
            area: "5万平方公里",
            latitude: "46°16′10″~46°24′15″",
            vision: "3100",
            prediction: "2756",
            control: "2678",
            proved: "2670"
          },
          {
            name: "胜利井气田",
            leaguerea: "2100",
            area: "432万平方公里",
            latitude: "43°17′10″~45°24′15″",
            vision: "2890",
            prediction: "1956",
            control: "1780",
            proved: "870"
          },
          {
            name: "乌审旗气田",
            leaguerea: "1980",
            area: "234万平方公里",
            latitude: "44°17′10″~40°24′15″",
            vision: "3200",
            prediction: "2056",
            control: "1890",
            proved: "960"
          }
        ]
      };
    },
    mounted() {

    },
    methods: {
      onClick(type, value){
        if(type === 1) {
          this.selectOne = value;
        }else if(type === 2){
          this.selectTwo = value;
        }
      },
      //取消图片默认样式
      tanchuangShow() {
        this.show = 1;
        this.$nextTick(function () {
          this.closeLeft = (this.screenWidth - 35) / 2 + "px";
        });
      },
      tanchuangClose() {
        this.show = 0;
      },

    }
  }
</script>

<style scoped lang="scss">
  .child1 {

    .has-text {
      background-image: url(../../assets/img/industryAnalysis/椭圆.png);
    }

    .tanchuang {
      position: absolute;
      width: 100%;
      height: 314.5px;
      background-color: #4c4c4c;
      z-index: 5;
      display: none;
      top: 93px;
    }

    .tanchuang_one {
      position: absolute;
      width: 100%;
      height: 314.5px;
      background-color: #4c4c4c;
      z-index: 5;
      display: block;
      top: 93px;
    }

    .table_one_t {
      font-family: PingFang SC;
      border-collapse: collapse;
      width: 1100px;

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

    .table-title {
      color: #246BD7;
      font-size: 14px;
      padding: 10px;
      width: 1100px;
      background-color: #fff;
    }

  }

</style>
