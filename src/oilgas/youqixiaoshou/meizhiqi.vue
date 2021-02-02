<template>
    <div class="child4" style="background-color: #E6E8EC;">
        <img
                class="map"
                src="../../assets/img/地图.png"
        />
        <!--地图定位-->
        <img :src="item.src" class="clickbtn" v-for="(item,index) in posList"
             :style="{'left':be_click_left(item.left),'top':be_click_top(item.top)}"
             @click="showDes(index)">

        <!--地图上展示信息-->
        <div class="lay-content"
             v-for="(item,index) in desList"
             :ref="`list${index}`"
             v-show="desIndex==index&&showFlag"
             :style="{'left':be_click_left(item.left),'top':be_click_top(item.top)}">
            <div>{{item.name}}</div>
            <div>12月天然气销售量：{{item.num}}万立方米</div>
            <div>12月累计天然气销售量：{{item.pro}}万立方米</div>
        </div>

        <div style="background-color: #fff;padding-top: 18px;margin-top: 6px;">
            <div class="scFristqh">
                <el-tabs v-model="activeNamePie" @tab-click="handlePieClick">
                    <el-tab-pane :label=tabListOne[0] name="1"></el-tab-pane>
                    <el-tab-pane :label=tabListOne[1] name="2" :laze="true"></el-tab-pane>
                </el-tabs>
            </div>
            <div class="tabs-content">

                <div v-show="activeNamePie==='1'">
                    <div class="fontSize_div">
                        <div class="fontSize">{{pie_one}}</div>
                        <div class="fontSize" style="font-size: 14px">万立方米</div>
                    </div>
                    <div id="echartsTone" style="width:100%;height:240px;"></div>
                </div>
                <div v-show="activeNamePie==='2'">
                    <div class="fontSize_div">
                        <div class="fontSize">{{pie_two}}</div>
                        <div class="fontSize" style="font-size: 14px">万立方米</div>
                    </div>
                    <div id="echartsTtwo" style="width:100%;height:240px;" ref="second"></div>

                </div>
            </div>
        </div>
        <div style="background-color: #fff;padding-top: 18px;margin-top: 6px;">
            <div class="scFristqh">
                <el-tabs v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane :label=tabListTwo[0] name="1"></el-tab-pane>
                    <el-tab-pane :label=tabListTwo[1] name="2" :laze="true"></el-tab-pane>
                </el-tabs>
            </div>
            <div class="tabs-content">

                <div v-show="activeName==='1'">

                    <div id="echarts3" style="width:100%;height:240px;"></div>
                </div>
                <div v-show="activeName==='2'">

                    <div id="echarts4" style="width:100%;height:240px;" ref="second"></div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'child4',
        data() {
            return {
                posList: [
                    //鄂尔多斯
                    {
                        left: '0.4',
                        top: '1.03',
                        src: require('../../assets/img/YouqiGongying/mzq.png')
                    },
                    // 赤峰
                    {
                        left: '0.72',
                        top: '0.81',
                        src: require('../../assets/img/YouqiGongying/mzq.png')
                    }

                ],//地图弹窗位置
                desList: [
                    {
                        left: '0.143',
                        top: '0.682',
                        name: '汇能煤制气',
                        num: '8',
                        pro: '65'
                    },
                    {
                        left: '0.498',
                        top: '0.529',
                        name: '大唐煤制气',
                        num: '9',
                        pro: '63'
                    }
                ],//地图上方信息展示
                activeName: '1',
                activeNamePie: '1',
                activeTabName: '1',
                screenWidth: document.body.clientWidth, // 屏幕宽
                screenLeft: "",
                pie_num: [128, 76, 52],
                pie: 128,
                showFlag: false,
                desIndex: null,
                tabListOne: ['12月按用途消费结构分析', '12月按行业消费结构分析'],
                tabListOne_copy: ['12月按用途消费结构分析', '12月按行业消费结构分析'],
                tabListOne_New:['按用途消费结构分析','按行业消费结构分析'],
                tabListTwo: ['调峰煤制气变化趋势分析', '气价煤价对比分析'],
                tabListTwo_copy: ['调峰煤制气变化趋势分析', '气价煤价对比分析'],
                title: ['汇能', '大唐'],
                pie_one: 190,
                pie_oneAry: [190, 80, 110],
                seriesOne: [
                    [
                        {
                            value: 90,
                            name: "终端消费",
                        },
                        {
                            value: 20,
                            name: "化工",
                        },
                        {
                            value: 40,
                            name: "火力发电",
                        },
                        {
                            value: 40,
                            name: "供热",
                        },
                    ],
                    [
                        {
                            value: 30,
                            name: "终端消费",
                        },
                        {
                            value: 20,
                            name: "化工",
                        },
                        {
                            value: 15,
                            name: "火力发电",
                        },
                        {
                            value: 15,
                            name: "供热",
                        },
                    ],
                    [
                        {
                            value: 40,
                            name: "终端消费",
                        },
                        {
                            value: 30,
                            name: "化工",
                        },
                        {
                            value: 20,
                            name: "火力发电",
                        },
                        {
                            value: 20,
                            name: "供热",
                        },
                    ]
                ],
                pie_two: 230,
                pie_twoAry: [230, 100, 130],
                seriesTwo: [
                    [
                        {
                            value: 90,
                            name: "工业",
                        },
                        {
                            value: 40,
                            name: "建筑业",
                        },
                        {
                            value: 40,
                            name: "商业",
                        },
                        {
                            value: 40,
                            name: "交通",
                        },
                        {
                            value: 20,
                            name: "生活消费",
                        },
                    ],
                    [
                        {
                            value: 30,
                            name: "工业",
                        },
                        {
                            value: 20,
                            name: "建筑业",
                        },
                        {
                            value: 10,
                            name: "商业",
                        },
                        {
                            value: 10,
                            name: "交通",
                        },
                        {
                            value: 30,
                            name: "生活消费",
                        },
                    ],
                    [
                        {
                            value: 50,
                            name: "工业",
                        },
                        {
                            value: 20,
                            name: "建筑业",
                        },
                        {
                            value: 20,
                            name: "商业",
                        },
                        {
                            value: 10,
                            name: "交通",
                        },
                        {
                            value: 40,
                            name: "生活消费",
                        },
                    ]
                ],
                seriesThree: [
                    [4, 4, 7, 17, 8, 17, 20, 13, 8, 12],
                    [2, 1, 3, 7, 3, 16, 6, 6, 4, 4],
                    [2, 3, 4, 10, 5, 11, 14, 7, 4, 8]
                ]
            };
        },
        mounted() {
            this.AnYongTuXiaoFeiJieGouFenXi_pie('echartsTone', this.seriesOne[0])
            this.TiaoFengMeiZhiYueBianHuaQuShi('echarts3', this.seriesThree[0])
        },
        methods: {
            // 用于点击的div块绑定函数
            be_click_left(a) {
                return this.screenWidth * a + 'px'
            },
            be_click_top(a) {
                return 314.5 * a + 'px'
            },
            //按用途消费结构分析
            AnYongTuXiaoFeiJieGouFenXi_pie(name, series) {
                let echarts = require("echarts");
                let myChart = echarts.init(document.getElementById(name));
                myChart.setOption({
                    tooltip: {
                        trigger: "item",
                        formatter: "{a} <br/>{b}: {c}万立方米 ({d}%)",
                    },
                    legend: {
                        orient: "horizontal",
                        bottom: 30,
                        left: "center",
                        itemGap: 15,
                        data: ["终端消费", "化工", "火力发电", "供热"],
                        itemWidth: 15,
                        itemHeight: 10,
                    },
                    grid: {
                        bottom: 40,
                    },
                    series: [
                        {
                            name: "按用途消费结构",
                            type: "pie",
                            radius: ["40%", "55%"],
                            center: ["50%", "40%"],
                            label: {
                                formatter: "{per|{d}%\n}",
                                padding: [0, -20, 5],
                                rich: {
                                    per: {
                                        fontSize: 12,
                                        color: "#9FA0A5",
                                    },
                                },
                            },
                            labelLine: {
                                length: 15,
                                length2: 30,
                            },
                            data: series,
                            color: ["#64B9EC", "#13D99E", "#ED6046", "#FF9712"],
                        },
                    ],
                });
            },
            //按行业消费结构分析
            AnHangYeXiaoFeiJieGouFenXi(name, series) {
                var echarts = require("echarts");
                var myChart = echarts.init(document.getElementById(name));
                myChart.setOption({
                    tooltip: {
                        trigger: "item",
                        formatter: "{a} <br/>{b}: {c}万立方米 ({d}%)",
                    },
                    legend: {
                        orient: "horizontal",
                        bottom: 30,
                        left: "center",
                        itemGap: 10,
                        data: ["工业", "建筑业", "商业", "交通", "生活消费"],
                        itemWidth: 15,
                        itemHeight: 10,
                    },
                    grid: {
                        bottom: 40,
                    },
                    series: [
                        {
                            name: "按行业结构分析",
                            type: "pie",
                            radius: ["40%", "55%"],
                            center: ["50%", "40%"],
                            label: {
                                formatter: "{per|{d}%}",
                                padding: [0, -30, 20],
                                rich: {
                                    per: {
                                        fontSize: 12,
                                        color: "#9FA0A5",
                                    },
                                    b: {
                                        fontSize: 12,
                                        color: "#9FA0A5",
                                    },
                                },
                            },
                            labelLine: {
                                length: 15,
                                length2: 50,
                            },
                            data: series,
                            color: [
                                "#44c2fd",
                                "#22ffc2",
                                "#ffc522",
                                "#ff1a40",
                                "#0000ff",
                            ],
                        },
                    ],
                });
            },
            //调峰煤制气月变化趋势
            TiaoFengMeiZhiYueBianHuaQuShi(name, series) {
                var echarts = require("echarts");
                var myChart = echarts.init(document.getElementById(name));
                myChart.setOption({
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        },
                        formatter(params) {
                            return params[0].name + '</br>' + params[0].seriesName + ':' + params[0].value + '万立方米'
                        }
                    },
                    grid: {
                        top: '5%',
                        left: '3%',
                        right: '20%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: {
                        name: '万立方米',
                        type: 'value',
                        boundaryGap: [0, 0.01],
                        axisTick: {
                            show: false
                        },
                        splitLine: {
                            lineStyle: {
                                color: 'rgba(255,255,255,0.4)'
                            }
                        },
                        axisLabel: {
                            interval: 0,
                            fontSize: 12,
                        },
                        axisLine: {
                            lineStyle: {
                                color: "#9B9DA1", // 颜色
                                width: 1, // 粗细
                            },
                        },
                    },
                    yAxis: {
                        type: 'category',
                        data: [
                            "1月",
                            "2月",
                            "3月",
                            "4月",
                            "5月",
                            "6月",
                            "7月",
                            "8月",
                            "9月",
                            "10月"
                        ],
                        axisTick: {
                            show: false
                        },
                        splitLine: {
                            lineStyle: {
                                color: 'rgba(255,255,255,0.4)'
                            }
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
                    },
                    series: [
                        {
                            name: '调峰煤制气',
                            type: 'bar',
                            barWidth: 10,
                            data: series,
                            itemStyle: {
                                normal: {
                                    color: new this.$echarts.graphic.LinearGradient(
                                        0, 0, 1, 0,
                                        [
                                            {offset: 0, color: '#4572FF'},                   //柱图渐变色
                                            {offset: 1, color: '#65FCFA'},                   //柱图渐变色
                                        ]
                                    )
                                }
                            },
                            showBackground: true,
                            backgroundStyle: {
                                color: '#f7f7f7'

                            },
                        }
                    ]
                });
            },
            //气价与煤价对比分析
            YouMeiDengJiaQuXian(name, arry) {
                var echarts = require("echarts");
                var myChart = echarts.init(document.getElementById(name));
                myChart.setOption({
                    tooltip: {
                        trigger: "axis",
                        formatter(params) {
                            return params[0].name + '</br>' + params[0].seriesName + ':' +params[0].value + '元/吨标煤'  +
                                '</br>' + params[1].seriesName + ':' + params[1].value + '元/吨标煤'
                        }
                    },
                    legend: {
                        data: ["煤价", "气价"],
                        right: '10'
                    },
                    xAxis: {
                        type: "category",
                        boundaryGap: false,
                        data: [
                            "1月",
                            "2月",
                            "3月",
                            "4月",
                            "5月",
                            "6月",
                            "7月",
                            "8月",
                            "9月",
                            "10月",
                            "11月",
                            "12月",
                        ],
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
                    yAxis: {
                        name: "元/吨标煤",
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
                    },
                    series: [
                        {
                            name: "煤价",
                            type: "line",
                            symbol: "none",
                            itemStyle: {
                                color: "#a3ff6f",
                            },
                            data: [12, 20, 15, 13, 15, 7, 16, 18, 15, 6, 12, 14],
                        },
                        {
                            name: "气价",
                            type: "line",
                            symbol: "none",
                            itemStyle: {
                                color: "#ff913e",
                            },
                            data: [11, 18, 16, 12, 16, 9, 15, 15, 13, 16, 13, 15],
                        },
                    ],
                });
            },


            handlePieClick(tab, event) {
                if (tab.index == 1) {
                    if (this.desIndex == null) {
                        this.$nextTick(() => {
                            this.AnHangYeXiaoFeiJieGouFenXi('echartsTtwo', this.seriesTwo[0])
                        })
                    } else {
                        this.$nextTick(() => {
                            this.AnHangYeXiaoFeiJieGouFenXi('echartsTtwo', this.seriesTwo[this.desIndex + 1])
                        })
                    }


                }

            },
            handleClick(tab) {
                if (tab.index == 1) {
                    this.$nextTick(() => {
                        this.YouMeiDengJiaQuXian("echarts4");
                    })

                }
            },

            // 点击地图的点联动
            showDes(index) {
                if (this.desIndex == index) {
                    if (this.$refs[`list${index}`][0].style.display == 'none') {
                        this.showFlag = true;
                        this.desIndex = index;
                        this.tabListOne = [this.title[index] + this.tabListOne_New[0], this.title[index] +
                        this.tabListOne_New[1]]
                        this.tabListTwo = [this.title[index] + this.tabListTwo_copy[0], this.tabListTwo_copy[1]];
                        this.pie_one = this.pie_oneAry[index + 1]
                        this.pie_two = this.pie_twoAry[index + 1]
                        this.AnYongTuXiaoFeiJieGouFenXi_pie('echartsTone', this.seriesOne[index + 1])
                        this.TiaoFengMeiZhiYueBianHuaQuShi('echarts3', this.seriesThree[index + 1])
                        if (this.activeNamePie == 2) {
                            this.AnHangYeXiaoFeiJieGouFenXi('echartsTtwo', this.seriesTwo[index + 1])
                        }

                    } else {
                        this.tabListOne = this.tabListOne_copy;
                        this.tabListTwo = this.tabListTwo_copy;
                        this.pie_one = this.pie_oneAry[0]
                        this.pie_two = this.pie_twoAry[0]
                        this.showFlag = false;
                        this.desIndex = null;
                        this.AnYongTuXiaoFeiJieGouFenXi_pie('echartsTone', this.seriesOne[0])
                        this.TiaoFengMeiZhiYueBianHuaQuShi('echarts3', this.seriesThree[0])
                        if (this.activeNamePie == 2) {
                            this.AnHangYeXiaoFeiJieGouFenXi('echartsTtwo', this.seriesTwo[0])
                        }


                    }
                } else {
                    this.desIndex = index;
                    this.showFlag = true;
                    this.tabListOne = [this.title[index] + this.tabListOne_New[0], this.title[index] +
                    this.tabListOne_New[1]]
                    this.tabListTwo = [this.title[index] + this.tabListTwo_copy[0], this.tabListTwo_copy[1]];
                    this.pie_one = this.pie_oneAry[index + 1]
                    this.pie_two = this.pie_twoAry[index + 1]
                    this.AnYongTuXiaoFeiJieGouFenXi_pie('echartsTone', this.seriesOne[index + 1])
                    this.TiaoFengMeiZhiYueBianHuaQuShi('echarts3', this.seriesThree[index + 1])
                    if (this.activeNamePie == 2) {
                        this.AnHangYeXiaoFeiJieGouFenXi('echartsTtwo', this.seriesTwo[index + 1])
                    }

                }


            },
        }
    }
</script>

<style scoped lang="scss">
    .child4 {
        .lay-content {
            border: 1px solid rgba(37, 54, 104, 0.6);
            position: absolute;
            font-size: 0.12rem;
            border-radius: 0.04rem;
            background-color: rgba(37, 54, 104, 0.5);;
            color: #fff;
            width: 113px;
        }
        .map {
            margin-top: 93px;
            /*height: 309px;*/
            width: 100%;
            /* background-size: cover;
             background: url(../../assets/img/oilgas/shenchan.png) no-repeat;*/
        }

        .scFristqh {
            margin-bottom: 22px;
            display: flex;
            justify-content: center;
        }

        .scFristqh /deep/ .el-tabs__item {
            /* color: #236BD7;
             font-size: 13px;
             height: 28px;
             line-height: 28px;
             width: 170px;
             text-align: center;
             padding: 0;
             border-radius: 3px;*/
            width: 169.5px;
            height: 25px;
            font: 12px PingFangSC-Regular;
            color: #3a6dda;
            line-height: 25px;
            float: left;
            position: relative;
            top: 2px;
            left: 2px;
            text-align: center;
            padding-left: 0;
        }

        .scFristqh /deep/ .el-tabs__item.is-active {
            /*background-color: #236BD7;
            color: #fff;*/
            width: 169.5px;
            height: 25px;
            background-color: #3a6dda;
            font: 12px PingFangSC-Regular;
            color: white;
            line-height: 25px;
            float: left;
            position: relative;
            top: 2px;
            left: 2px;
            text-align: center;
            border-radius: 5px;
        }

        .scFristqh /deep/ .el-tabs {
            /*width: 342px;
            border: 1px solid #236BD7;
            border-radius: 3px;*/
            width: 345px;
            height: 31px;
            background-color: white;
            margin: 0px auto;
            border: 1px solid #3a6dda;
            border-radius: 5px;
            z-index: 1;
        }

        .scFristqh /deep/ .el-tabs__header {
            margin: 0;
        }

        .scFristqh /deep/ .el-tabs__active-bar, .scFristqh /deep/ .el-tabs__nav-wrap::after {
            display: none;
        }

        .scFristqh /deep/ .el-tabs__nav-scroll {
            height: 31px;
        }

        #PieOne {
            background-image: url(../../assets/img/industryAnalysis/椭圆.png);
            background-repeat: no-repeat;
            background-position: 50% 37%;
            background-size: 65px 65px;
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
            top: 70px;
            color: #4D5F7B;
            font: 25px bolder MicrosoftYaHe
        }

        .title {
            font-size: 13px;
            color: #394564;
            padding-left: 14px;
            font-weight: bold;
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
        .clickbtn {
            width: 13px;
            height: 13px;
            position: absolute;
            z-index: 2;
        }

    }

</style>
