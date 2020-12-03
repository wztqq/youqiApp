<template>
    <div>
        <div id="confess_content" style="background-color: #dadbdb">

            <!-- banner -->
            <img class="map"
                 src="../../assets/img/地图.png"
                 alt="图片未显示"/>

            <!--地图气田定位-->
            <!--<div>-->
                <!--<div class="clickbtn" v-for="(item,index) in posList"-->
                     <!--:style="{'left':be_click_left(item.left),'top':be_click_top(item.top)}"-->
                     <!--@click="show(index)"-->
                <!--&gt;</div>-->
            <!--</div>-->
            <div>
                <img :src="item.src" v-for="(item,index) in posList" class="clickbtn"
                     :style="{'left':be_click_left(item.left),'top':be_click_top(item.top)}"
                     @click="show(index)">
            </div>
            <div>
                <img :src="item.src" v-for="(item,index) in guanshuList" class="imgG"
                     :style="{'left':be_click_left(item.left),'top':be_click_top(item.top)}"
                    >
            </div>

            <!--盟市供应、消费量-->
            <div v-for="(item,index) in desListOne" :style="{top:be_click_top(item.top),left:be_click_left(item.left)}"
                 v-show="showAll"
                 ref="listOne"
                 style="display: flex;position: absolute">
                <div style="margin-right: 0.05rem;" class="bar_spy">
                    <div class="bar_num">{{item.supply}}</div>
                    <div class="bar"></div>
                </div>
                <div class="bar_cnm">
                    <div class="bar_num">{{item.consume}}</div>
                    <div class="bar"></div>
                </div>
            </div>

            <!--气田-->
            <div v-for="(item,index) in gasList" :style="{top:be_click_top(item.top),left:be_click_left(item.left)}"
                 class="des_list" v-show="index==desIndex">
                <div>气田名称:{{item.name}}</div>
                <div>资源量:{{item.num1}}万立方米</div>
                <div>探明储量:{{item.num2}}万立方米</div>
                <div>上月产量:{{item.num3}}万立方米</div>
                <div>储采比:{{item.num4}}年</div>
            </div>
            <!--储气-->
            <div v-for="(item,index) in storageList" :style="{top:be_click_top(item.top),left:be_click_left(item.left)}"
                 class="des_list" v-show="index+3==desIndex">
                <div>储气量:{{item.num1}}亿立方米</div>
                <div>日调用量:{{item.num2}}亿立方米</div>
            </div>
            <!--管道-->
            <div v-for="(item,index) in channelList" :style="{top:be_click_top(item.top),left:be_click_left(item.left)}"
                 class="des_list" v-show="index+9==desIndex">
                <div>{{item.name}}</div>
                <div>管存量:{{item.num1}}万立方米</div>
                <div>压力:{{item.num2}}Mpa</div>
                <div>昨日进气量:{{item.num3}}万立方米</div>
                <div>昨日出气量:{{item.num4}}万立方米</div>
            </div>

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
                gasList: [
                    //胜利井气田
                    {
                        name: '胜利井气田',//
                        num1: '2180',//资源量
                        num2: '2170',//储量
                        num3: '18',//月产量
                        num4: '35',//储采比
                        top: '0.62',
                        left: '0.23'
                    },
                    //苏里格气田
                    {
                        name: '苏里格气田',//
                        num1: '3432',//资源量
                        num2: '3332',//储量
                        num3: '19',//月产量
                        num4: '45',//储采比
                        top: '0.62',
                        left: '0.23'
                    },
                    //大牛地气田
                    {
                        name: '大牛地气田',//
                        num1: '3432',//资源量
                        num2: '2380',//储量
                        num3: '16',//月产量
                        num4: '34',//储采比
                        top: '0.62',
                        left: '0.23'
                    }

                ],//气田显示页面
                storageList: [
                    // 阿拉善盟储气
                    {
                        num1:'4.66',
                        num2:'17',
                        left: '0.01',
                        top: '0.99',

                    },
                    // 巴彦淖尔储气
                    {
                        num1:'4.66',
                        num2:'17',
                        left: '0.18',
                        top: '0.79',

                    },
                    // 鄂尔多斯储气
                    {
                        num1:'9.1',
                        num2:'22',
                        left: '0.18',
                        top: '0.79',
                    },
                    // 包头
                    {
                        num1:'4.66',
                        num2:'22',
                        left: '0.28',
                        top: '0.79',
                    },
                    // 呼和浩特储气
                    {
                        num1:'7.81',
                        num2:'19',
                        left: '0.52',
                        top: '0.91',
                    },
                    // 通辽储气
                    {
                        num1:'0.2',
                        num2:'5',
                        left: '0.62',
                        top: '0.69',
                    },
                ],//储气
                channelList:[
                    // 长庆气田-乌海
                    {
                        name:'长庆气田-乌海-临河输气管道',
                        num1:'355',
                        num2:'6.4',
                        num3:'790',
                        num4:'790',
                        left: '0.17',
                        top: '0.61',
                    },

                    // 苏-东-淮
                    {
                        name:'苏-东-淮天然气管道',
                         num1:'355',
                        num2:'6.4',
                        num3:'790',
                        num4:'790',
                        left: '0.17',
                        top: '0.61',
                    },
                    {
                        name:'长庆气田-呼和浩特天然气管道复线',
                        num1:'355',
                        num2:'6.4',
                        num3:'790',
                        num4:'790',
                        left: '0.17',
                        top: '0.61',
                    },
                    {
                        name:'长庆气田-呼和浩特天然气输气管道',
                        num1:'355',
                        num2:'6.4',
                        num3:'790',
                        num4:'790',
                        left: '0.17',
                        top: '0.61',
                    },
                ],//管道
                desListOne: [
                    // 乌海
                    {
                        supply: '435',
                        consume: '230',
                        top: '0.758',
                        left: '0.194'
                    },
                    // 鄂尔多斯
                    {
                        supply: '300',
                        consume: '600',
                        top: '0.825',
                        left: '0.346'
                    },
                    // 巴彦淖尔
                    {
                        supply: '480',
                        consume: '545',
                        top: '0.618',
                        left: '0.296'
                    },
                    // 呼和浩特
                    {
                        supply: '575',
                        consume: '675',
                        top: '0.735',
                        left: '0.466'
                    },
                    // 包头
                    {
                        supply: '567',
                        consume: '610',
                        top: '0.595',
                        left: '0.426'
                    },
                    // 通辽
                    {
                        supply: '567',
                        consume: '610',
                        top: '0.585',
                        left: '0.766'
                    }

                ],//供应总量，消费总量
                posList: [
                    //胜利井气田
                    {
                        left: '0.355',
                        top: '1.02',
                        src: require('../../assets/img/jing.png')
                    },
                    //苏里格气田
                    {
                        left: '0.385',
                        top: '1.03',
                        src: require('../../assets/img/jing.png')
                    },
                    //大牛地气田
                    {
                        left: '0.445',
                        top: '1.035',
                        src: require('../../assets/img/jing.png')
                    },
                    //阿拉善盟储气
                    {
                        left: '0.32',
                        top: '1.03',
                        src: require('../../assets/img/chuqiguan.png')
                    },
                    //巴彦淖尔储气
                    {
                        left: '0.35',
                        top: '0.94',
                        src: require('../../assets/img/chuqiguan.png')
                    },
                    //鄂尔多斯储气
                    {
                        left: '0.38',
                        top: '0.99',
                        src: require('../../assets/img/chuqiguan.png')
                    },
                    //包头储气
                    {
                        left: '0.43',
                        top: '0.92',
                        src: require('../../assets/img/chuqiguan.png')
                    },
                    //呼和浩特储气
                    {
                        left: '0.49',
                        top: '1.02',
                        src: require('../../assets/img/chuqiguan.png')
                    },
                    //通辽储气
                    {
                        left: '0.79',
                        top: '0.81',
                        src: require('../../assets/img/chuqiguan.png')
                    },
                    //长庆气田-乌海
                    {
                        left: '0.303',
                        top: '0.969',
                        src: require('../../assets/img/guandaotou.png')
                    },
                    //苏东淮
                    {
                        left: '0.374',
                        top: '1.08',
                        src: require('../../assets/img/guandaotou.png')
                    },
                    // 长呼复
                    {
                        left: '0.47',
                        top: '0.99',
                        src: require('../../assets/img/guandaotou.png')
                    },
                    // 长呼
                    {
                        left: '0.47',
                        top: '0.95',
                        src: require('../../assets/img/guandaotou.png')
                    }
                ],
                guanshuList:[
                    {
                        left: '0.303',
                        top: '0.969',
                        src: require('../../assets/img/长庆气田-乌海-临河天然气管道.png')
                    },
                    {
                        left: '0.354',
                        top: '1.03',
                        src: require('../../assets/img/苏东准管道.png')
                    },
                    {
                        left: '0.386',
                        top: '0.996',
                        src: require('../../assets/img/长呼复.png')
                    },
                    {
                        left: '0.412',
                        top: '0.9',
                        src: require('../../assets/img/长庆气田—呼和浩特天然气管道.png')
                    }
                ],
                selected_one: 0,
                selected_two: 0,
                selected_three: 0,
                screenWidth: document.body.clientWidth, // 屏幕宽
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
                    legendData: ["苏里格气田", "大牛地气田",  "胜利井气田"],
                    seriesName: "月产量分析",
                    unit: "亿立方米",
                    seriesData: [
                        {value: 5440, name: "苏里格气田"},
                        {value: 5033, name: "大牛地气田"},
                        // {value: 3801, name: "靖边气田"},
                        {value: 2193, name: "胜利井气田"},
                        // {value: 11986, name: "乌审旗气田"},
                    ],
                },
                optionObjXFJGFX: {
                    legendData: ["居民用气", "民生用气", "商业", "甲醛化肥企业", "可中断企业", "不可中断企业", "LNG企业用户"],
                    seriesName: "消费结构分析",
                    unit: "亿立方米",
                    seriesData: [
                        {value: 0.9, name: "居民用气"},
                        {value: 0.9, name: "民生用气"},
                        {value: 0.7, name: "商业"},
                        {value: 0.4, name: "甲醛化肥企业"},
                        {value: 2.2, name: "可中断企业"},
                        {value: 2.2, name: "不可中断企业"},
                        {value: 2.2, name: "LNG企业用户"},
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
                    warnData: [0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06,]
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
                        {value: 0.095, name: "巴彦淖尔"},
                        {value: 0.064, name: "包头"},
                        {value: 0.031, name: "呼和浩特"},
                        {value: 0.064, name: "鄂尔多斯"},
                        {value: 0.127, name: "乌海"},
                        {value: 0.127, name: "通辽"},
                    ],
                },
                optionObjMS5: {
                    legendData: ["巴彦淖尔", "包头", "呼和浩特", "鄂尔多斯", "乌海", "通辽"],
                    seriesName: "盟市城燃5%储气能力",
                    unit: "亿立方米",
                    seriesData: [
                        {value: 0.1598, name: "巴彦淖尔"},
                        {value: 0.1076, name: "包头"},
                        {value: 0.052, name: "呼和浩特"},
                        {value: 0.1077, name: "鄂尔多斯"},
                        {value: 0.2136, name: "乌海"},
                        {value: 0.2136, name: "通辽"},
                    ],
                },
                showFlag:false,
                showAll:true,
                desIndex:null
            };
        },
        mounted() {

        },
        methods: {
            // 用于点击的div块绑定函数
            be_click_left(a) {
                return this.screenWidth * a + 'px'
            },
            be_click_top(a) {
                return 314.5 * a + 'px'
            },
            tabButton_one(index) {
                this.selected_one = index;
            },
            tabButton_two(index) {
                this.selected_two = index;
            },
            tabButton_three(index) {
                this.selected_three = index;
            },
            show(index){

                if(this.desIndex==index||this.desIndex==index+5||this.desIndex==index+11){
                    if(this.$refs['listOne'][0].style.display=='none'){
                        this.showAll=true
                        this.desIndex=null;
                    }else{
                        this.showAll=false;
                        this.desIndex=index;
                    }

                }else{
                    this.desIndex=index
                    this.showAll=false
                }

            }
        },
    };
</script>

<style lang="scss" scoped>
    #confess_content {
        .imgG {
            width: 10%;
            position: absolute;

        }
        .clickbtn {
            width: 9px;
            height: 9px;
            position: absolute;
            z-index: 2;
        }
        .des_list {
            background-color: rgba(37, 54, 104, 0.5);
            position: absolute;
            font-size: 0.12rem;
            color: #fff;
            border-radius: 0.04rem;
        }
        .bar {
            height: 1.4rem;
            width: 0.4rem;
        }
        .bar_num {
            font-size: 0.12rem;
            border: 1px solid rgba(37, 54, 104, 0.5);
            margin-bottom: 0.05rem;
            background-color: rgba(37, 54, 104, 0.5);
            color: #fff;
            text-align: center;
        }
        .bar_spy, .bar_cnm {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .bar_spy .bar {
            background-image: linear-gradient(rgba(250, 219, 20, 0.6), rgba(250, 219, 20, 0.03));
        }
        .bar_cnm .bar {
            background-image: linear-gradient(rgba(160, 217, 17, 0.6), rgba(160, 217, 17, 0.03));

        }

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
