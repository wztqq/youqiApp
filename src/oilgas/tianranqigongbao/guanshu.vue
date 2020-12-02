<template>
    <div @click="hidePos">
        <div id="confess_content" style="background-color: #dadbdb">

            <!-- banner -->
            <img class="map"
                 src="../../assets/img/地图.png"
                 alt="图片未显示"/>
            <!--地图定位-->
            <div>
                <img :src="item.src" alt="图片未显示" v-for="(item,index) in posList" class="imgS"
                     :style="{'left':be_click_left(item.left),'top':be_click_top(item.top)}"
                     @click.stop="showDes(index)"
                     v-show="activeIndex===-1||activeIndex===index">
            </div>
            <!--起止点位置图标-->
            <div  >
                <img src="../../assets/img/begin.gif" class="imgG"
                     v-for="(item,index) in beginList"
                     v-show="activeIndex===index"
                     :style="{'left':be_click_left(item.left),'top':be_click_top(item.top)}"
                >
                <img src="../../assets/img/end.gif" class="imgG"
                     v-for="(item,index) in endList"
                     v-show="activeIndex===index"
                     :style="{'left':be_click_left(item.left),'top':be_click_top(item.top)}"
                >
            </div>
            <!--地图上展示信息-->
            <div class="lay-content"
                 v-for="(item,index) in desList"
                 :ref="`list${index}`"
                 v-show="activeIndex ===index"
                 :style="{'left':be_click_left(item.left),'top':be_click_top(item.top)}">
                <div>{{item.name}}</div>
                <div>总里程：{{item.total}}公里</div>
                <div>区内里程：{{item.inside}}公里</div>
                <div>设计输量：{{item.num}}亿立方米/年</div>
                <div>起止年限：{{item.year}}</div>
            </div>
            <!-- 日调峰记录查询 && 调峰结构分析 -->
            <div class="chart table">
                <h4>区内主要管线运行情况</h4>
                <div id="table">
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
            <!-- 天然气管道日进出气量统计 -->
            <div class="chart module">
                <h4>天然气管道日进出气量统计</h4>
                <div class="chart-item">
                    <div id="guanshuBar" style="width: 100%;height: 239px"></div>
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
                        <div class="fontSize">130</div>
                        <div class="fontSize">万立方米</div>
                    </div>
                    <dount-chart class="echarts" :optionObj="optionObjLineQTGQ"></dount-chart>
                </div>
                <div class="chart-item" :key="timer" v-if="selected_one === 1">
                    <div class="fontSize_div">
                        <div class="fontSize">3600</div>
                        <div class="fontSize">万立方米</div>
                    </div>
                    <pie-chart class="echarts" :optionObj="optionObjGQQY"></pie-chart>
                </div>
            </div>

            <!-- 接收端主要行业占比 -->
            <div class="chart module">
                <h4>接收端主要行业占比</h4>
                <div class="chart-item">
                    <div class="fontSize_div">
                        <div class="fontSize">3000</div>
                        <div class="fontSize">万立方米</div>
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
                activeIndex: -1,
                desIndex: null,
                beginList: [
                    {
                        left: '0.374',
                        top: '1.02',
                    },
                    {
                        left: '0.354',
                        top: '1.04',
                    },
                    {
                        left: '0.384',
                        top: '1.06',
                    },
                    {
                        left: '0.409',
                        top: '1.06',
                    }
                ],
                endList: [
                    {
                        left: '0.303',
                        top: '0.941',
                    },
                    {
                        left: '0.43',
                        top: '1.01',
                    },
                    {
                        left: '0.465',
                        top: '0.981',
                    },
                    {
                        left: '0.495',
                        top: '0.961',
                    }
                ],
                posList: [
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
                        top: '1.01',
                        src: require('../../assets/img/长呼复.png')
                    },
                    {
                        left: '0.412',
                        top: '0.996',
                        src: require('../../assets/img/长庆气田—呼和浩特天然气管道.png')
                    }
                ],//地图弹窗位置
                desList: [
                    {
                        left: '0.143',
                        top: '0.522',
                        name: '长庆气田-乌海-临河输气管道',
                        total: '4583',
                        inside: '700',
                        num: '6.3',
                        year: '2008年'
                    },
                    {
                        left: '0.143',
                        top: '0.522',
                        name: '苏-东-淮天然气管道',
                        total: '4583',
                        inside: '2000',
                        num: '35',
                        year: '2010年'
                    },
                    {
                        left: '0.143',
                        top: '0.522',
                        name: '长庆气田-呼和浩特天然气管道复线',
                        total: '4583',
                        inside: '2000',
                        num: '35',
                        year: '2010年'
                    },
                    {
                        left: '0.143',
                        top: '0.522',
                        name: '长庆气田-呼和浩特天然气输气管道',
                        total: '4583',
                        inside: '1583',
                        num: '17.5',
                        year: '2003年'
                    }

                ],//地图上方信息展示
                screenWidth: document.body.clientWidth, // 屏幕宽
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
                        value: "250亿立方米"
                    },
                    {
                        label: "起止年限",
                        value: "2016-2017"
                    },
                ],
                timer: "",
                selected_one: 0,
                tablist_one: ["送气端结构气田占比分析", "天然气管线管输量分布"],
                tableTh_one: [
                    {
                        value: "序号",
                    },
                    {
                        value: "管线",
                    },
                    {
                        value: "管存量（万立方米）",
                    },
                    {
                        value: "实际负荷率",
                    },
                    {
                        value: "昨日进气量（万立方米）",
                    },
                    {
                        value: "昨日出气量（万立方米）",
                    }
                ],
                listData_one: [
                    {
                        guanxian: "长乌临输气管道",
                        totalkm: "355",
                        partlm: "55%",
                        jinqi: "790",
                        chuqi: "790",
                    },
                    {
                        guanxian: "苏东准输气管",
                        totalkm: "147",
                        partlm: "60%",
                        jinqi: "1500",
                        chuqi: "1500",
                    },
                    {
                        guanxian: "长呼复输气管道复",
                        totalkm: "468.2",
                        partlm: "80%",
                        jinqi: "760",
                        chuqi: "760",
                    },
                    {
                        guanxian: "长呼输气管道",
                        totalkm: "561.2",
                        partlm: "55%",
                        jinqi: "50",
                        chuqi: "50",
                    }
                ],
                listData_flag: [
                    {
                        guanxian: "长乌临输气管道",
                        totalkm: "355",
                        partlm: "55%",
                        jinqi: "790",
                        chuqi: "790",
                    },
                    {
                        guanxian: "苏东准输气管",
                        totalkm: "147",
                        partlm: "60%",
                        jinqi: "1500",
                        chuqi: "1500",
                    },
                    {
                        guanxian: "长呼复输气管道复",
                        totalkm: "468.2",
                        partlm: "80%",
                        jinqi: "760",
                        chuqi: "760",
                    },
                    {
                        guanxian: "长呼输气管道",
                        totalkm: "561.2",
                        partlm: "55%",
                        jinqi: "50",
                        chuqi: "50",
                    }
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
                    legendData: ["苏里格气田", "大牛地气田",  "胜利井气田"],
                    seriesName: "送气端结构气田占比分析",
                    unit: "万立方米",
                    seriesData: [
                        {value: 90, name: "苏里格气田"},
                        {value: 20, name: "大牛地气田"},
                        {value: 20, name: "胜利井气田"}
                    ],
                },
                optionObjJSD: {
                    legendData: ["化肥", "甲醇", "城市燃气"],
                    seriesName: "接收端主要行业占比",
                    unit: "万立方米",
                    seriesData: [
                        {value: 700, name: "化肥"},
                        {value: 1300, name: "甲醇"},
                        {value: 1000, name: "城市燃气"},
                    ],
                },
                optionObjGQQY: {
                    legendData: ["长-乌-临", "苏-东-淮",'长-呼','长-呼复线'],
                    seriesName: "天然气管线管输量分布",
                    unit: "万立方米",
                    seriesData: [
                        {value: 1200, name: "长-乌-临"},
                        {value: 1000, name: "苏-东-淮"},
                        {value: 800, name: "长-呼"},
                        {value: 600, name: "长-呼复线"},
                    ],
                },
                showFlag: false
            };
        },
        mounted() {
            this.timer = new Date().getTime();
            this.drawBarOne();
        },
        methods: {
            //天然气管道日进出气量统计
            drawBarOne() {
                let myChart = this.$echarts.init(document.getElementById('guanshuBar'));
                // 指定图表的配置项和数据
                myChart.setOption({
                    tooltip: {
                        trigger: "axis",
                        formatter: '{a0}{b0}: {c0}万立方米<br /> {a1}{b1}: {c1}万立方米<br /> {a2}{b2}: {c2}万立方米',
                        axisPointer: {
                            type: "cross",
                            crossStyle: {
                                color: "#999",
                            },
                        },
                    },
                    legend: {
                        data: ['日进气量', '日出气量', '管存量']
                    },
                    xAxis: [
                        {
                            type: "category",
                            data: [
                                "11月20日",
                                "11月21日",
                                "11月22日",
                                "11月23日",
                                "11月24日",
                                "11月25日",
                                "11月26日"
                            ],
                            axisPointer: {
                                type: "shadow",
                            },
                            axisLabel: {
                                fontSize: 12,
                            },
                            axisLine: {
                                lineStyle: {
                                    color: "#9B9DA1", // 颜色
                                    width: 1, // 粗细
                                },
                            },
                            axisTick: {
                                show: false,
                            },
                        },
                    ],
                    yAxis: [
                        {
                            name: "万立方米",
                            type: "value",
                            axisLabel: {
                                fontSize: 12,
                            },
                            axisLine: {
                                lineStyle: {
                                    color: "#9B9DA1", // 颜色
                                    width: 1, // 粗细
                                },
                            },
                            axisTick: {
                                show: false,
                            },
                        }
                    ],
                    series: [
                        {
                            name: "日进气量",
                            type: "bar",
                            barWidth: 6,
                            itemStyle: {
                                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {offset: 0, color: "#FFE6A3"},
                                    {offset: 1, color: "#FF8B2E"},
                                ]),
                            },
                            data: [44,34,27,37,28,27,20]
                        },
                        {
                            name: "日出气量",
                            type: "bar",
                            barWidth: 6,
                            itemStyle: {
                                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {offset: 0, color: "#63edd4"},
                                    {offset: 1, color: "rgba(14, 137, 238, 1)"},
                                ]),
                            },
                            data: [36,37,35,34,32,41,40]
                        },
                        {
                            name: "管存量",
                            type: "bar",
                            barWidth: 6,
                            itemStyle: {
                                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {offset: 0, color: "#90ffe2"},
                                    {offset: 1, color: "#5affe1"},
                                ]),
                            },
                            data: [54,77,71,68,69,76,69]
                        },
                    ],
                });
            },
            // 用于点击的div块绑定函数
            be_click_left(a) {
                return this.screenWidth * a + 'px'
            },
            be_click_top(a) {
                return 314.5 * a + 'px'
            },
            tabButton_one(index) {
                this.selected_one = index;
                this.timer = new Date().getTime()
            },
            tabButton_two(index) {
                this.selected_two = index;
            },
            /*showDes(index){
                if(this.desIndex==index){
                    if(this.$refs[`list${index}`][0].style.display=='none'){
                        this.showFlag=true
                        this.desIndex=index;
                        this.listData_one=[this.listData_flag[index]]
                    }else{
                        this.listData_one=this.listData_flag
                        this.showFlag=false;
                        this.desIndex=null;

                    }
                }else{
                    this.desIndex=index;
                    this.showFlag=true;
                    this.listData_one=[this.listData_flag[index]];
                }

            }*/
            showDes(index) {
                this.activeIndex = index;
                this.listData_one = [this.listData_flag[index]];
            },
            hidePos() {
                this.activeIndex = -1;
                this.listData_one = this.listData_flag
            }
        },
    };
</script>

<style lang="scss" scoped>
    #confess_content {
        .imgS {
            position: absolute;
            width: 10%;
        }
        .imgG {
            width: 2%;
            position: absolute;

        }
        .lay-content {
            border: 1px solid rgba(37, 54, 104, 0.6);
            position: absolute;
            font-size: 0.12rem;
            border-radius: 0.04rem;
            background-color: rgba(37, 54, 104, 0.5);;
            color: #fff;
            width: 3.4rem;
            padding: 0.08rem;
        }
        .clickbtn {
            width: 13px;
            height: 13px;
            position: absolute;
            z-index: 2;
        }

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
                    background: rgba($color: #6a7181, $alpha: .7);
                    p {
                        color: #fff;
                        line-height: 1.5em;
                        font-size: 12px;
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
                vertical-align: middle;
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
