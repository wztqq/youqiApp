<template>
    <div class="child3" style="background-color: #E6E8EC;">
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
            <div>10月石脑油供应量：{{item.num2}}万吨</div>
            <div>10月柴油供应量：{{item.num3}}万吨</div>
            <div>10月液化气供应量：{{item.num4}}万吨</div>
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
                    <div id="echartsFifteen" style="width:100%;height:240px;"></div>
                </div>
                <div v-show="activeNamePie==='2'">
                    <div id="echartsSixteen" style="width:100%;height:240px;" ref="second"></div>

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
                    <div class="fontSize_div">
                        <div class="fontSize">48</div>
                        <div class="fontSize" style="font-size: 14px">万吨</div>
                    </div>
                    <div id="echartsSeventeen" style="width:100%;height:240px;"></div>
                </div>
                <div v-show="activeName==='2'">
                    <div class="fontSize_div">
                        <div class="fontSize">{{pie}}</div>
                        <div class="fontSize" style="font-size: 14px">万吨</div>
                    </div>
                    <div id="echartsEighteenth" style="width:100%;height:240px;" ref="second"></div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'child3',
        data() {
            return {
                posList: [
                    //神华
                    {
                        left: '0.36',
                        top: '1.08',
                        src: require('../../assets/img/YouqiGongying/mzy.png')
                    },
                    // 伊泰
                    {
                        left: '0.42',
                        top: '1.01',
                        src: require('../../assets/img/YouqiGongying/mzy.png')
                    }

                ],//地图弹窗位置
                desList: [
                    {
                        left: '0.143',
                        top: '0.629',
                        name: '神华煤制油',
                        num2: '70',
                        num3: '30',
                        num4: '10'
                    },
                    {
                        left: '0.198',
                        top: '0.629',
                        name: '伊泰煤制油',
                        num2: '80',
                        num3: '40',
                        num4: '10'
                    }
                ],//地图上方信息展示
                activeName: '1',
                activeNamePie: '1',
                activeTabName: '1',
                screenWidth: document.body.clientWidth, // 屏幕宽
                screenLeft: "",
                pie_num: [121, 63, 58],
                pie: 121,
                showFlag: false,
                desIndex: null,
                tabListOne: ['煤制油供应量变化趋势分析', '运输方式统计分析'],
                tabListTwo: ['煤制油供应企业分析', '产品结构分析'],
                tabListOne_copy: ['煤制油供应量变化趋势分析', '运输方式统计分析'],
                tabListTwo_copy: ['煤制油供应企业分析', '产品结构分析'],
                title: ['神华', '伊泰'],
                MeiZhiYou_OneSerData: [
                    [
                        {
                            actur: [3, 7, 9, 6, 9, 8, 13, 17, 17, 13],
                            plan: [11, 13, 12, 19, 13, 18, 13, 12, 12, 19],
                            change: [13, 5, 2, -7, 12, -5, 2, 9, -5, 3],
                        }
                    ],
                    [
                        {
                            actur: [4, 6, 8, 4, 9, 8, 12, 11, 14, 13],
                            plan: [9, 10, 12, 13, 16, 13, 13, 12, 12, 19],
                            change: [13, 5, 2, -7, 12, -5, 2, 9, -5, 3],
                        }
                    ],
                    [
                        {
                            actur: [3, 8, 7, 9, 10, 7, 11, 16, 17, 13],
                            plan: [11, 13, 11, 18, 13, 16, 19, 12, 12, 19],
                            change: [13, 5, 2, -7, 12, -5, 2, 9, -5, 3],
                        }
                    ]
                ],
                MeiZhiYou_TwoSerData: [
                    [{
                        actur: [29, 19, 18, 14.5, 25.7, 22.5, 18, 22, 29, 19, 17, 12],
                        plan: [24, 15.5, 14.5, 12, 16, 22, 14, 18, 23, 19, 18, 13],
                    }

                    ],
                    [
                        {
                            actur: [26, 19, 19, 16.5, 23.7, 22.5, 19, 21, 26, 19, 17, 12],
                            plan: [22, 15.5, 15.5, 12, 15, 24, 17, 18, 23, 19, 18, 13],
                        }],
                    [{
                        actur: [29, 16, 19, 14.5, 28.7, 22.5, 17, 20, 29, 19, 12, 12],
                        plan: [24, 15.5, 13.5, 12, 18, 19, 13, 18, 22, 19, 11, 11],
                    }]
                ],
                MeiZhiYou_FourSerData: [
                    [
                        {
                            name: '石脑油',
                            value: 65
                        },
                        {
                            name: '柴油',
                            value: 16
                        },
                        {
                            name: '液化气',
                            value: 20
                        },
                        {
                            name: '干气',
                            value: 20
                        }
                    ],
                    [
                        {
                            name: '石脑油',
                            value: 35
                        },
                        {
                            name: '柴油',
                            value: 8
                        },
                        {
                            name: '液化气',
                            value: 10
                        },
                        {
                            name: '干气',
                            value: 10
                        }
                    ],
                    [
                        {
                            name: '石脑油',
                            value: 30
                        },
                        {
                            name: '柴油',
                            value: 8
                        },
                        {
                            name: '液化气',
                            value: 10
                        },
                        {
                            name: '干气',
                            value: 10
                        }
                    ]
                ]


            };
        },
        mounted() {
            /// 煤制油
            this.MeiZhiYou_One("echartsFifteen", this.MeiZhiYou_OneSerData[0]);
            this.MeiZhiYou_Three('echartsSeventeen')


        },
        methods: {
            // 用于点击的div块绑定函数
            be_click_left(a) {
                return this.screenWidth * a + 'px'
            },
            be_click_top(a) {
                return 314.5 * a + 'px'
            },
            //煤制油供应量变化趋势分析
            MeiZhiYou_One(name, series) {
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
                        data: ['煤制油月供应量', '计划月加工量', '同比变化']
                    },
                    // grid: {
                    //   height: 160,
                    //   bottom: 50,
                    // },
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
                            name: "煤制油月供应量",
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
                            name: "计划月加工量",
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
            //运输方式统计
            MeiZhiYou_Two(name, series) {
                let echarts = require("echarts");
                let myChart = echarts.init(document.getElementById(name));
                myChart.setOption({
                    tooltip: {
                        trigger: "axis",
                        formatter: '{a0}{b0}: {c0}万吨<br /> {a1}{b1}: {c1}万吨',
                        axisPointer: {
                            type: "cross",
                            crossStyle: {
                                color: "#999",
                            },
                        },
                    },
                    legend: {
                        data: ['汽运', '管输']
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
                            name: "万吨 / 月",
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
                            name: "汽运",
                            type: "bar",
                            barWidth: 6,
                            itemStyle: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {offset: 0, color: "#63edd4"},
                                    {offset: 1, color: "rgba(14, 137, 238, 1)"},
                                ]),
                            },
                            data: series[0].actur,
                        },
                        {
                            name: "管输",
                            type: "bar",
                            barWidth: 6,
                            itemStyle: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {offset: 0, color: "#FFE6A3"},
                                    {offset: 1, color: "#FF8B2E"},
                                ]),
                            },
                            data: series[0].plan,
                        }
                    ],
                });
            },
            //企业分析
            MeiZhiYou_Three(name, series) {
                let echarts = require("echarts");
                let myChart = echarts.init(document.getElementById(name));
                myChart.setOption({
                    tooltip: {
                        trigger: "item",
                        formatter: "{b}: {c}万吨 ({d}%)",
                    },
                    legend: {
                        orient: "horizontal",
                        bottom: 30,
                        left: "center",
                        itemGap: 10,
                        data: ["神华煤制油", "伊泰煤制油"],
                        itemWidth: 15,
                        itemHeight: 10,
                    },
                    grid: {
                        bottom: 40,
                    },
                    series: [
                        {
                            name: "煤制油供应企业",
                            type: "pie",
                            radius: ["40%", "55%"],
                            center: ["50%", "40%"],
                            label: {
                                formatter: "{d}% ",
                                rich: {
                                    per: {
                                        fontSize: 12,
                                        color: "#9FA0A5",
                                    },
                                },
                            },
                            labelLine: {
                                length: 15,
                                length2: 50,
                            },
                            data: [
                                {
                                    name: '神华煤制油',
                                    value: 16
                                },
                                {
                                    name: '伊泰煤制油',
                                    value: 32
                                },

                            ],
                            color: [
                                "#15E9EC",
                                "#FFD350",
                                "#01A6FF",
                            ],
                        },
                    ],
                });
            },
            //产品结构分析
            MeiZhiYou_Four(name, series) {
                let echarts = require("echarts");
                let myChart = echarts.init(document.getElementById(name));
                myChart.setOption({
                    tooltip: {
                        trigger: "item",
                        formatter: "{b}: {c}万吨 ({d}%)",
                    },
                    legend: {
                        orient: "horizontal",
                        bottom: 30,
                        left: "center",
                        itemGap: 10,
                        data: ["柴油", "液化气", "石脑油"],
                        itemWidth: 15,
                        itemHeight: 10,
                    },
                    grid: {
                        bottom: 40,
                    },
                    series: [
                        {
                            name: "煤制油结构",
                            type: "pie",
                            radius: ["40%", "55%"],
                            center: ["50%", "40%"],
                            label: {
                                formatter: "{b} \n\n {d}% ",
                                padding: [0, -50, 5],
                                rich: {
                                    per: {
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
                                "#15E9EC",
                                "#FFD350",
                                "#01A6FF",
                            ],
                        },
                    ],
                });
            },

            // 煤制油产量tab
            handlePieClick(tab, event) {
                if (tab.index == 1) {
                    if (this.desIndex == null) {
                        this.$nextTick(() => {
                            this.MeiZhiYou_Two("echartsSixteen", this.MeiZhiYou_TwoSerData[0]);
                        })

                    } else {
                        this.$nextTick(() => {
                            this.MeiZhiYou_Two("echartsSixteen", this.MeiZhiYou_TwoSerData[this.desIndex + 1]);
                        })
                    }

                }
            },
            //油供应tab
            handleClick(tab, event) {
                if (tab.index == 1) {
                    if (this.desIndex == null) {
                        this.$nextTick(() => {
                            this.MeiZhiYou_Four("echartsEighteenth", this.MeiZhiYou_FourSerData[0]);
                        })

                    } else {
                        this.$nextTick(() => {
                            this.MeiZhiYou_Four("echartsEighteenth", this.MeiZhiYou_FourSerData[this.desIndex + 1]);
                        })
                    }

                }
            },


            //点击地图上的点进行切换
            // 点击地图的点联动
            showDes(index) {
                if (this.desIndex == index) {
                    if (this.$refs[`list${index}`][0].style.display == 'none') {
                        this.showFlag = true;
                        this.desIndex = index;
                        this.tabListOne = [this.title[index] + this.tabListOne_copy[0], this.title[index] +
                        this.tabListOne_copy[1]]
                        this.tabListTwo = [this.tabListTwo_copy[0], this.title[index] +
                        this.tabListTwo_copy[1]]
                        this.pie = this.pie_num[index + 1]
                        this.MeiZhiYou_One("echartsFifteen", this.MeiZhiYou_OneSerData[index + 1]);
                        if (this.activeNamePie == 2) {
                            this.MeiZhiYou_Two("echartsSixteen", this.MeiZhiYou_TwoSerData[index + 1]);
                        }
                        if (this.activeName == 2) {
                            this.MeiZhiYou_Four("echartsEighteenth", this.MeiZhiYou_FourSerData[index + 1])
                        }
                    } else {
                        this.MeiZhiYou_One("echartsFifteen", this.MeiZhiYou_OneSerData[0]);
                        if (this.activeNamePie == 2) {
                            this.MeiZhiYou_Two("echartsSixteen", this.MeiZhiYou_TwoSerData[0]);
                        }
                        if (this.activeName == 2){
                            this.MeiZhiYou_Four("echartsEighteenth", this.MeiZhiYou_FourSerData[0]);
                        }
                        this.pie = this.pie_num[0]
                        this.tabListOne = this.tabListOne_copy;
                        this.tabListTwo = this.tabListTwo_copy;
                        this.showFlag = false;
                        this.desIndex = null;

                    }
                } else {
                    this.desIndex = index;
                    this.showFlag = true;
                    this.tabListOne = [this.title[index] + this.tabListOne_copy[0], this.title[index] +
                    this.tabListOne_copy[1]]
                    this.tabListTwo = [this.tabListTwo_copy[0], this.title[index] +
                    this.tabListTwo_copy[1]]
                    this.pie = this.pie_num[index + 1]
                    this.MeiZhiYou_One("echartsFifteen", this.MeiZhiYou_OneSerData[index + 1]);
                    if(this.activeNamePie==2){
                        this.MeiZhiYou_Two("echartsSixteen", this.MeiZhiYou_TwoSerData[index + 1]);
                    }
                    if(this.activeName==2){
                        this.MeiZhiYou_Four("echartsEighteenth", this.MeiZhiYou_FourSerData[index + 1])
                    }
                }


            },
        }
    }
</script>

<style scoped lang="scss">
    .child3 {
        .lay-content {
            border: 1px solid rgba(37, 54, 104, 0.6);
            position: absolute;
            font-size: 0.12rem;
            border-radius: 0.04rem;
            background-color: rgba(37, 54, 104, 0.5);;
            color: #fff;
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
