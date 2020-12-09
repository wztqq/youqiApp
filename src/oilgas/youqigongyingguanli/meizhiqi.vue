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
            <div>10月天然气供应量：{{item.num}}万立方米</div>
            <div>累计天然气供应量：{{item.pro}}万立方米</div>
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
                    <div id="echartsTone" style="width:100%;height:240px;"></div>
                </div>
                <div v-show="activeNamePie==='2'">
                    <div class="fontSize_div">
                        <div class="fontSize">{{pie}}</div>
                        <div class="fontSize" style="font-size: 14px">万吨</div>
                    </div>
                    <div id="echartsTtwo" style="width:100%;height:240px;" ref="second"></div>

                </div>
            </div>
        </div>
        <div style="background-color: #fff;padding-top: 18px;margin-top: 6px;">
            <div class="title">
                煤制气供应企业分析
            </div>
            <div class="content">
                <div id="echartsSeventeen" style="width: 100%;height: 240px"></div>
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
                tabListOne: ['煤制气供应量变化趋势分析', '煤制气供应方式分析'],
                tabListOne_copy: ['煤制气供应量变化趋势分析', '煤制气供应方式分析'],
                title: ['汇能', '大唐'],
                MeiZhiQi_OneSerData: [
                    [{
                        actur: [3, 7, 9, 6, 9, 8, 13, 17, 17, 13],
                        plan: [11, 13, 12, 19, 13, 18, 13, 12, 12, 19],
                        change: [13, 5, 2, -7, 12, -5, 2, 9, -5, 3]
                    }],
                    //汇能
                    [{
                        actur: [4, 6, 8, 5, 9, 8, 13, 14, 17, 13],
                        plan: [12, 13, 12, 16, 13, 16, 13, 12, 12, 19],
                        change: [11, 5, 2, -8, 11, -5, 2, 8, -5, 3]
                    }],
                    //大唐
                    [{
                        actur: [5, 6, 8, 5, 9, 7, 11, 17, 16, 13],
                        plan: [11, 13, 12, 17, 13, 15, 13, 12, 12, 19],
                        change: [12, 6, 2, -8, 10, -2, 1, 8, -5, 3]
                    }]
                ],
                MeiZhiQi_TwoSerData: [
                    [
                        {
                            value: 19,
                            name: "管道气",
                        },
                        {
                            value: 31,
                            name: "CNG",
                        },
                        {
                            value: 78,
                            name: "LNG",
                        }
                    ],
                    [
                        {
                            value: 19,
                            name: "管道气",
                        },
                        {
                            value: 31,
                            name: "CNG",
                        },
                        {
                            value: 78,
                            name: "LNG",
                        }
                    ],
                    [
                        {
                            value: 8,
                            name: "管道气",
                        },
                        {
                            value: 12,
                            name: "CNG",
                        },
                        {
                            value: 31,
                            name: "LNG",
                        }
                    ],
                ]


            };
        },
        mounted() {
            //煤制气供应量变化趋势
            this.MeiZhiQi_One("echartsTone", this.MeiZhiQi_OneSerData[0]);
            this.MeiZhiQiGongYingQiYeFenXi_twobar('echartsSeventeen')

        },
        methods: {
            // 用于点击的div块绑定函数
            be_click_left(a) {
                return this.screenWidth * a + 'px'
            },
            be_click_top(a) {
                return 314.5 * a + 'px'
            },
            MeiZhiQi_One(name, series) {
                let echarts = require("echarts");
                let myChart = echarts.init(document.getElementById(name));
                myChart.setOption({
                    tooltip: {
                        trigger: "axis",
                        formatter: '{a0}{b0}: {c0}万吨<br /> {a1}{b1}: {c1}万吨<br /> {a2}{b2}: {c2}%',
                        axisPointer: {
                            type: "cross",
                            crossStyle: {
                                color: "#999",
                            },
                        },
                    },
                    legend: {
                        data: ['煤制气月供应量', '计划月进量', '同比变化']
                    },
                    xAxis: [
                        {
                            type: "category",
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
                            name: "万吨 / 月",
                            type: "value",
                            min: 0,
                            interval: 5,
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
                        {
                            show: false,
                            name: "%",
                            type: "value",
                            min: -20,
                            interval: 5,
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
                    series: [
                        {
                            name: "煤制气月供应量",
                            type: "bar",
                            barWidth: 10,
                            itemStyle: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {offset: 0, color: "#63edd4"},
                                    {offset: 1, color: "rgba(14, 137, 238, 1)"},
                                ]),
                            },
                            data: series[0].actur,
                        },
                        {
                            name: "计划月进量",
                            type: "bar",
                            barWidth: 10,
                            itemStyle: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {offset: 0, color: "#FFE6A3"},
                                    {offset: 1, color: "#FF8B2E"},
                                ]),
                            },
                            data: series[0].plan,
                        },
                        {
                            name: "同比变化",
                            type: "line",
                            itemStyle: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {offset: 0, color: "#BB5FF0"},
                                    {offset: 1, color: "#BB5FF0"},
                                ]),
                            },
                            yAxisIndex: 1,
                            data: series[0].change,
                        }
                    ],
                });
            },

            // 煤制气供应方式分析
            GongYingFangShiFenXi_pie(name, series) {
                let echarts = require("echarts");
                let myChart = echarts.init(document.getElementById(name));
                myChart.setOption({
                    tooltip: {
                        trigger: "item",
                        formatter: "{a} <br/>{b}: {c}万立方米 ({d}%)",
                    },
                    legend: {
                        orient: "horizontal",
                        bottom: 20,
                        left: "center",
                        itemGap: 10,
                        data: ["管道气", "CNG", "LNG"],
                        itemWidth: 15,
                        itemHeight: 10,
                    },
                    grid: {
                        bottom: 40,
                    },
                    series: [
                        {
                            name: "供应方式分析",
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
                            color: ["#64B9EC", "#13D99E", "#ED6046"],
                        },
                    ],
                });
            },

            //煤制气供应企业分析
            MeiZhiQiGongYingQiYeFenXi_twobar(name, arry) {
                let echarts = require("echarts");
                let myChart = echarts.init(document.getElementById(name));
                myChart.setOption({
                    tooltip: {
                        trigger: "axis",
                        formatter(params) {
                            return params[0].name + '</br>' + params[0].seriesName + ':' + params[0].value + '万立方米' + '</br>' +
                                params[1].seriesName + ':' +
                                params[1].value + '万立方米'
                        }
                    },
                    legend: {
                        itemWidth: 10,
                        itemHeight: 5,
                        top: 0,
                        right: 30,
                        itemGap: 20,
                        data: ["大唐煤制气", "汇能煤制气"],
                    },
                    xAxis: [
                        {
                            type: "category",
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
                            name:"万立方米/ 月",
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
                    ],
                    series: [
                        {
                            name: "大唐煤制气",
                            type: "bar",
                            barWidth:6,
                            itemStyle: {
                                color: "#74A5FF",
                            },
                            data: [29, 19, 18, 14.5, 25.7, 22.5, 18, 22, 29, 19, 17, 12],
                        },
                        {
                            name: "汇能煤制气",
                            type: "bar",
                            barWidth: 6,
                            itemStyle: {
                                color: "#74FFF8",
                            },
                            data: [24, 15.5, 14.5, 12, 16, 22, 14, 18, 23, 19, 18, 13],
                        },
                    ],
                });
            },
            // 煤制气供应方式分析
            handlePieClick(tab, event) {
                if (tab.index == 1) {
                    if (this.desIndex == null) {
                        this.$nextTick(() => {
                            this.GongYingFangShiFenXi_pie("echartsTtwo", this.MeiZhiQi_TwoSerData[0]);
                        })

                    } else {
                        this.$nextTick(() => {
                            this.GongYingFangShiFenXi_pie("echartsTtwo", this.MeiZhiQi_TwoSerData[this.desIndex + 1]);
                        })
                    }

                }

            },

            // 点击地图的点联动
            showDes(index) {
                if (this.desIndex == index) {
                    if (this.$refs[`list${index}`][0].style.display == 'none') {
                        this.showFlag = true;
                        this.desIndex = index;
                        this.tabListOne = [this.title[index] + this.tabListOne_copy[0], this.title[index] +
                        this.tabListOne_copy[1]]
                        this.pie=this.pie_num[index+1]
                        this.MeiZhiQi_One("echartsTone", this.MeiZhiQi_OneSerData[index + 1]);
                        this.GongYingFangShiFenXi_pie("echartsTtwo", this.MeiZhiQi_TwoSerData[index + 1])
                    } else {
                        this.MeiZhiQi_One("echartsTone", this.MeiZhiQi_OneSerData[0]);
                        this.GongYingFangShiFenXi_pie("echartsTtwo", this.MeiZhiQi_TwoSerData[0]);
                        this.tabListOne = this.tabListOne_copy;
                        this.pie=this.pie_num[0]
                        this.showFlag = false;
                        this.desIndex = null;

                    }
                } else {
                    this.desIndex = index;
                    this.showFlag = true;
                    this.tabListOne = [this.title[index] + this.tabListOne_copy[0], this.title[index] +
                    this.tabListOne_copy[1]]
                    this.pie=this.pie_num[index+1]
                    this.MeiZhiQi_One("echartsTone", this.MeiZhiQi_OneSerData[index + 1])
                    this.GongYingFangShiFenXi_pie("echartsTtwo", this.MeiZhiQi_TwoSerData[index + 1]);
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
