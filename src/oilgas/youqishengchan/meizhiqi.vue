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
            <div>10月粉煤加工量：{{item.num}}万吨</div>
            <div>10月天然气产量：{{item.pro}}万立方米</div>
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
                    <div id="echartsTthree" style="width:100%;height:240px;"></div>
                </div>
                <div v-show="activeName==='2'">
                    <div id="echartsTfour" style="width:100%;height:240px;" ref="second"></div>

                </div>
            </div>
        </div>
        <div style="background-color: #fff;padding-top: 18px;margin-top: 6px;">
            <div class="scFristqh">
                <el-tabs v-model="activeTabName" @tab-click="handleClickTab">
                    <el-tab-pane :label=tabListThree[0] name="1"></el-tab-pane>
                    <el-tab-pane :label=tabListThree[1] name="2" :laze="true"></el-tab-pane>
                </el-tabs>
            </div>
            <div class="tabs-content">

                <div v-show="activeTabName==='1'">
                    <div id="echartsTfive" style="width:100%;height:240px;"></div>
                </div>
                <div v-show="activeTabName==='2'">
                    <div id="echartsTsix" style="width:100%;height:240px;" ref="second"></div>

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
                        num: '87',
                        pro: '10'
                    },
                    {
                        left: '0.498',
                        top: '0.529',
                        name: '大唐煤制气',
                        num: '98',
                        pro: '5'
                    }
                ],//地图上方信息展示
                activeName: '1',
                activeNamePie: '1',
                activeTabName: '1',
                screenWidth: document.body.clientWidth, // 屏幕宽
                screenLeft: "",
                pie_num: [1.3, 0.56, 0.03, 0.03, 0.03],
                pie: 1.3,
                showFlag: false,
                desIndex: null,
                pie_PieTwo: 8,
                pieTwo: [196, 176.4, 3.92, 5.88, 9.8],
                tabListOne: ['粉煤月进量分析', '水资源用量'],
                tabListTwo: ['天然气产量变化趋势', '平均负荷率变化趋势'],
                tabListThree: ['单位产品原料煤耗', '单位产品综合能耗'],
                tabListOne_copy: ['粉煤月进量分析', '水资源用量'],
                tabListTwo_copy: ['天然气产量变化趋势', '平均负荷率变化趋势'],
                tabListThree_copy: ['单位产品原料煤耗', '单位产品综合能耗'],
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
                    [86, 82, 84, 75, 79, 83, 79, 86, 82, 84],
                    [83, 82, 85, 77, 76, 81, 76, 85, 81, 82],
                    [84, 82, 83, 77, 79, 81, 76, 83, 85, 84],
                ],
                MeiZhiQi_ThreeSerData: [
                    [{
                        actur: [3, 7, 9, 6, 9, 8, 13, 17, 17, 13],
                        plan: [11, 13, 12, 19, 13, 18, 13, 12, 12, 19],
                        change: [13, 5, 2, -7, 12, -5, 2, 9, -5, 3],
                    }],
                    //汇能
                    [{
                        actur: [4, 6, 8, 4, 6, 8, 12, 17, 17, 13],
                        plan: [11, 12, 11, 18, 12, 17, 13, 11, 11, 19],
                        change: [12, 5, 2, -6, 11, -5, 2, 8, -5, 3],
                    }],
                    //大唐
                    [{
                        actur: [5, 7, 8, 6, 7, 9, 13, 16, 16, 13],
                        plan: [10, 13, 11, 12, 11, 17, 11, 12, 12, 19],
                        change: [12, 5, 3, -6, 11, -5, 2, 9, -5, 3],
                    }],
                ],
                MeiZhiQi_FourSerData: [
                    [{
                        actur: [80, 90, 85, 81, 92, 78, 85, 96, 78, 93],
                        plan: [82, 85, 75, 67, 71, 76, 67, 73, 75, 80],
                        change: [8, 9, 10, 3, -4, 8, -6, 1, 10, -5]
                    }],
                    [{
                        actur: [81, 92, 83, 81, 91, 79, 82, 94, 78, 93],
                        plan: [82, 82, 73, 66, 70, 72, 67, 73, 75, 80],
                        change: [8, 9, 9, 3, -4, 8, -6, 1, 10, -5]
                    }],
                    [{
                        actur: [79, 91, 86, 82, 92, 78, 85, 95, 78, 93],
                        plan: [82, 85, 73, 68, 72, 78, 69, 71, 75, 80],
                        change: [8, 9, 10, 3, -4, 8, -6, 1, 10, -5]
                    }],],
                MeiZhiQi_FiveSerData: [
                    [{
                        one: [4, 4, 7, 17, 8, 21, 23, 13, 8],
                        two: [2, 2, 2, 2, 2, 2, 2, 2, 2],
                        three: [18, 18, 18, 18, 18, 18, 18, 18, 18]
                    }],
                    [{
                        one: [5, 5, 8, 17, 9, 22, 23, 13, 8],
                        two: [3, 3, 3, 3, 3, 3, 3, 3, 3],
                        three: [16, 16, 16, 16, 16, 16, 16, 16, 16]
                    }],
                    [{
                        one: [5, 6, 8, 19, 4, 20, 21, 12, 10],
                        two: [4, 4, 4, 4, 4, 4, 4, 4, 4],
                        three: [17, 17, 17, 17, 17, 17, 17, 17, 17]
                    }]
                ],
                MeiZhiQi_SixSerData: [[
                    {
                        one: [5, 6, 7, 12, 9, 23, 21, 13, 8],
                        two: [4, 4, 4, 4, 4, 4, 4, 4, 4],
                        three: [18, 18, 18, 18, 18, 18, 18, 18, 18]
                    }
                ],
                    [{
                        one: [5, 5, 4, 18, 12, 22, 20, 9, 8],
                        two: [3, 3, 3, 3, 3, 3, 3, 3, 3],
                        three: [16, 16, 16, 16, 16, 16, 16, 16, 16]
                    }],
                    [{
                        one: [5, 6, 9, 11, 5, 22, 13, 16, 12],
                        two: [4, 4, 4, 4, 4, 4, 4, 4, 4],
                        three: [17, 17, 17, 17, 17, 17, 17, 17, 17]
                    }]
                ]

            };
        },
        mounted() {
            //粉煤月进量
            this.MeiZhiQi_One("echartsTone", this.MeiZhiQi_OneSerData[0]);
            // 天然气
            this.MeiZhiQi_Three("echartsTthree", this.MeiZhiQi_ThreeSerData[0]);
            // 单位产品原料煤耗
            this.MeiZhiQi_Five("echartsTfive", this.MeiZhiQi_FiveSerData[0]);


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

                console.log(series)
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
                        data: ['粉煤月进量', '计划月进量', '同比变化']
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
                            name: "粉煤月进量",
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
            MeiZhiQi_Two(name, series) {
                let echarts = require("echarts");
                let myChart = echarts.init(document.getElementById(name));
                myChart.setOption({
                    tooltip: {
                        trigger: "axis",
                        formatter: '{a}{b}: {c}万吨',
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月'],
                        axisTick: {
                            show: true,
                        },
                        axisLine: {
                            lineStyle: {
                                color: "#9B9DA1", // 颜色
                                width: 1, // 粗细
                            },
                        },
                        axisLabel: {
                            show: true,
                            interval: 0,//设置间隔
                            fontSize: 12,
                            padding: [0, 0, 0, 0],
                        },
                    },
                    yAxis: {
                        name: '万吨/月',
                        type: 'value',
                        axisTick: {
                            show: true,
                            interval: 1,
                        },
                        axisLine: {
                            lineStyle: {
                                color: "#9B9DA1", // 颜色
                                width: 1, // 粗细
                            },
                        },
                        axisLabel: {
                            show: true,
                            interval: 0,//设置间隔
                            fontSize: 12,
                            padding: [0, 0, 0, 0],
                        },
                    },
                    series: [{
                        name: '水资源用量',
                        data: series,
                        type: 'line',
                        symbol: 'none',
                        smooth: true,
                        areaStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient
                                (0, 0, 0, 1, [
                                    {
                                        offset: 0,
                                        color: 'rgba(0, 136, 212, 0.3)'
                                    },
                                    {
                                        offset: 0.8,
                                        color: 'rgba(0, 136, 212, 0)'
                                    }
                                ], false),
                                shadowColor: 'rgba(0, 0, 0, 0.1)',
                                shadowBlur: 10
                            }
                        },
                        //控制线条的颜色
                        itemStyle: {
                            normal: {
                                color: 'rgb(0,136,212)',
                                borderColor: 'rgba(0,136,212,0.2)',
                                borderWidth: 3
                            }
                        },
                    }]
                });
            },
            // 天然气
            MeiZhiQi_Three(name, series) {
                let echarts = require("echarts");
                let myChart = echarts.init(document.getElementById(name));
                myChart.setOption({
                    tooltip: {
                        trigger: "axis",
                        formatter: '{a0}{b0}: {c0}万立方米<br /> {a1}{b1}: {c1}万立方米<br /> {a2}{b2}: {c2}%',
                        axisPointer: {
                            type: "cross",
                            crossStyle: {
                                color: "#999",
                            },
                        },
                    },
                    legend: {
                        data: ['煤制气月产量', '计划月产量', '同比变化']
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
                            name: "万立方米 / 月",
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
                            name: "煤制气月产量",
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
                            name: "计划月产量",
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
            //负荷率
            MeiZhiQi_Four(name, series) {
                let echarts = require("echarts");
                let myChart = echarts.init(document.getElementById(name));
                myChart.setOption({
                    tooltip: {
                        trigger: "axis",
                        formatter: '{a0}{b0}: {c0}%</br>{a1}{b1}: {c1}%</br>{a2}{b2}: {c2}%'
                    },
                    legend: {
                        data: ['平均负荷率', '计划负荷率', '同比变化']
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月'],
                        axisTick: {
                            show: true,
                        },
                        axisLine: {
                            lineStyle: {
                                color: "#9B9DA1", // 颜色
                                width: 1, // 粗细
                            },
                        },
                        axisLabel: {
                            show: true,
                            interval: 0,//设置间隔
                            fontSize: 12,
                            padding: [0, 0, 0, 0],
                        },
                    },
                    yAxis: [{
                        name: '%',
                        type: 'value',
                        min: '0',
                        axisTick: {
                            show: true,
                            interval: 1,
                        },
                        axisLine: {
                            lineStyle: {
                                color: "#9B9DA1", // 颜色
                                width: 1, // 粗细
                            },
                        },
                        axisLabel: {
                            show: true,
                            interval: 0,//设置间隔
                            fontSize: 12,
                            padding: [0, 0, 0, 0],
                        },
                    },
                        {
                            show: false,
                            name: '%',
                            type: 'value',
                            min: -20,
                            axisTick: {
                                show: true,
                                interval: 1,
                            },
                            axisLine: {
                                lineStyle: {
                                    color: "#9B9DA1", // 颜色
                                    width: 1, // 粗细
                                },
                            },
                            axisLabel: {
                                show: true,
                                interval: 0,//设置间隔
                                fontSize: 12,
                                padding: [0, 0, 0, 0],
                            },
                        }
                    ],
                    series: [{
                        name: '平均负荷率',
                        data: series[0].actur,
                        type: 'line',
                        symbol: 'none',
                        smooth: true,
                        areaStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient
                                (0, 0, 0, 1, [
                                    {
                                        offset: 0,
                                        color: 'rgba(241, 158, 194, 0.3)'
                                    },
                                    {
                                        offset: 0.8,
                                        color: 'rgba(241, 158, 194, 0)'
                                    }
                                ], false),
                                shadowColor: 'rgba(0, 0, 0, 0.1)',
                                shadowBlur: 10
                            }
                        },
                        //控制线条的颜色
                        itemStyle: {
                            normal: {
                                color: '#BB5FF0',
                                borderColor: '#BB5FF0',
                                borderWidth: 3
                            }
                        },
                    },
                        {
                            name: '计划负荷率',
                            data: series[0].plan,
                            type: 'line',
                            symbol: 'none',
                            smooth: true,
                            //控制线条的颜色
                            itemStyle: {
                                normal: {
                                    color: '#F0765F',
                                    borderColor: '#F0765F',
                                    borderWidth: 3
                                }
                            },
                        },
                        {
                            name: '同比变化',
                            data: series[0].change,
                            type: 'line',
                            symbol: 'none',
                            smooth: true,
                            yAxisIndex: 1,
                            areaStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient
                                    (0, 0, 0, 1, [
                                        {
                                            offset: 0,
                                            color: 'rgba(241, 158, 194, 0.3)'
                                        },
                                        {
                                            offset: 0.8,
                                            color: 'rgba(241, 158, 194, 0)'
                                        }
                                    ], false),
                                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                                    shadowBlur: 10
                                }
                            },
                            //控制线条的颜色
                            itemStyle: {
                                normal: {
                                    color: 'rgb(241,158,194)',
                                    borderColor: 'rgba(241,158,194,0.2)',
                                    borderWidth: 3
                                }
                            },
                        }
                    ]
                });
            },


            MeiZhiQi_Five(name, series) {
                let echarts = require("echarts");
                let myChart = echarts.init(document.getElementById(name));
                myChart.setOption({
                    tooltip: {
                        trigger: "axis",
                        formatter: '{a0}{b0}: {c0}吨</br>{a1}{b1}: {c1}吨</br>{a2}{b2}: {c2}吨',
                    },
                    // grid: {
                    //   height: 160,
                    //   bottom: 50,
                    // },
                    legend: {
                        itemWidth: 10,
                        itemHeight: 5,
                        top: 5,
                        right: 30,
                        itemGap: 20,
                        data: ["单位产品原料能耗", "基准值", "先进值"],
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
                            name: "吨标煤/吨",
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
                    ],
                    series: [
                        {
                            name: "单位产品原料能耗",
                            type: "bar",
                            barWidth: 10,
                            itemStyle: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {offset: 0, color: "#63edd4"},
                                    {offset: 1, color: "rgba(14, 137, 238, 1)"},
                                ]),
                            },
                            data: series[0].one,
                        },
                        {
                            name: "基准值",
                            type: "line",
                            data: series[0].two,
                            color: "#F91B20",
                            lineStyle: {
                                type: "dotted",
                                width: 1,
                            },
                            smooth: true,
                            showSymbol: false,
                        },
                        {
                            name: "先进值",
                            type: "line",
                            showSymbol: false,
                            lineStyle: {
                                type: "dotted",
                                width: 1,
                            },
                            smooth: true,
                            color: "#16D9C3",
                            data: series[0].three

                        }

                    ],
                });

            },
            MeiZhiQi_Six(name, series) {
                let echarts = require("echarts");
                let myChart = echarts.init(document.getElementById(name));
                myChart.setOption({
                    tooltip: {
                        trigger: "axis",
                        formatter: '{a0}{b0}: {c0}吨</br>{a1}{b1}: {c1}吨</br>{a2}{b2}: {c2}吨',
                    },
                    // grid: {
                    //   height: 160,
                    //   bottom: 50,
                    // },
                    legend: {
                        itemWidth: 10,
                        itemHeight: 5,
                        top: 5,
                        right: 30,
                        itemGap: 20,
                        data: ["单位产品综合能耗", "基准值", "先进值"],
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
                            name: "吨标煤/吨",
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
                    ],
                    series: [
                        {
                            name: "单位产品综合能耗",
                            type: "bar",
                            barWidth: 10,
                            itemStyle: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {offset: 0, color: "#63edd4"},
                                    {offset: 1, color: "rgba(14, 137, 238, 1)"},
                                ]),
                            },
                            data: series[0].one,
                        },
                        {
                            name: "基准值",
                            type: "line",
                            data: series[0].two,
                            color: "#F91B20",
                            lineStyle: {
                                type: "dotted",
                                width: 1,
                            },
                            smooth: true,
                            showSymbol: false
                        },
                        {
                            name: "先进值",
                            type: "line",
                            showSymbol: false,
                            lineStyle: {
                                type: "dotted",
                                width: 1,
                            },
                            smooth: true,
                            color: "#16D9C3",
                            data: series[0].three

                        },

                    ],
                });
            },

            // 粉煤月进量tab
            handlePieClick(tab, event) {
                if (tab.index == 1) {
                    if (this.desIndex == null) {
                        this.$nextTick(() => {
                            this.MeiZhiQi_Two("echartsTtwo", this.MeiZhiQi_TwoSerData[0]);
                        })

                    } else {
                        this.$nextTick(() => {
                            this.MeiZhiQi_Two("echartsTtwo", this.MeiZhiQi_TwoSerData[this.desIndex + 1]);
                        })
                    }

                }

            },
            //天然气tab
            handleClick(tab, event) {
                if (tab.index == 1) {
                    if (this.desIndex == null) {
                        this.$nextTick(() => {
                            this.MeiZhiQi_Four("echartsTfour", this.MeiZhiQi_FourSerData[0]);
                        })

                    } else {
                        this.$nextTick(() => {
                            this.MeiZhiQi_Four("echartsTfour", this.MeiZhiQi_FourSerData[this.desIndex + 1]);
                        })
                    }

                }
            },
            handleClickTab(tab, event) {
                if (tab.index == 1) {
                    if (this.desIndex == null) {
                        this.$nextTick(() => {
                            this.MeiZhiQi_Six("echartsTsix", this.MeiZhiQi_SixSerData[0]);
                        })

                    } else {
                        this.$nextTick(() => {
                            this.MeiZhiQi_Six("echartsTsix", this.MeiZhiQi_SixSerData[this.desIndex + 1]);
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
                        this.tabListTwo = [this.title[index] + this.tabListTwo_copy[0], this.title[index] +
                        this.tabListTwo_copy[1]]
                        this.tabListThree = [this.title[index] + this.tabListThree_copy[0], this.title[index] +
                        this.tabListThree_copy[1]]
                        this.MeiZhiQi_One("echartsTone", this.MeiZhiQi_OneSerData[index + 1]);
                        if (this.activeNamePie == 2) {
                            this.MeiZhiQi_Two("echartsTtwo", this.MeiZhiQi_TwoSerData[index + 1]);
                        }
                        if (this.activeName == 2) {
                            this.MeiZhiQi_Four("echartsTfour", this.MeiZhiQi_FourSerData[index + 1]);
                        }
                        if (this.activeTabName == 2) {
                            this.MeiZhiQi_Six("echartsTsix", this.MeiZhiQi_SixSerData[index + 1]);
                        }

                        this.MeiZhiQi_Three("echartsTthree", this.MeiZhiQi_ThreeSerData[index + 1])

                        this.MeiZhiQi_Five("echartsTfive", this.MeiZhiQi_FiveSerData[index + 1]);

                    } else {
                        this.MeiZhiQi_One("echartsTone", this.MeiZhiQi_OneSerData[0]);
                        if (this.activeNamePie == 2) {
                            this.MeiZhiQi_Two("echartsTtwo", this.MeiZhiQi_TwoSerData[0]);
                        }
                        if (this.activeName == 2) {
                            this.MeiZhiQi_Four("echartsTfour", this.MeiZhiQi_FourSerData[0]);
                        }
                        if (this.activeTabName == 2) {
                            this.MeiZhiQi_Six("echartsTsix", this.MeiZhiQi_SixSerData[0]);
                        }
                        this.MeiZhiQi_Three("echartsTthree", this.MeiZhiQi_ThreeSerData[0]);
                        this.MeiZhiQi_Five("echartsTfive", this.MeiZhiQi_FiveSerData[0]);
                        this.tabListOne = this.tabListOne_copy;
                        this.tabListTwo = this.tabListTwo_copy;
                        this.tabListThree = this.tabListThree_copy;
                        this.showFlag = false;
                        this.desIndex = null;

                    }
                } else {
                    this.desIndex = index;
                    this.showFlag = true;
                    this.tabListOne = [this.title[index] + this.tabListOne_copy[0], this.title[index] +
                    this.tabListOne_copy[1]]
                    this.tabListTwo = [this.title[index] + this.tabListTwo_copy[0], this.title[index] +
                    this.tabListTwo_copy[1]]
                    this.tabListThree = [this.title[index] + this.tabListThree_copy[0], this.title[index] +
                    this.tabListThree_copy[1]]
                    this.MeiZhiQi_One("echartsTone", this.MeiZhiQi_OneSerData[index + 1]);
                    this.MeiZhiQi_Three("echartsTthree", this.MeiZhiQi_ThreeSerData[index + 1])
                    this.MeiZhiQi_Five("echartsTfive", this.MeiZhiQi_FiveSerData[index + 1]);
                    if (this.activeNamePie == 2) {
                        this.MeiZhiQi_Two("echartsTtwo", this.MeiZhiQi_TwoSerData[index + 1]);
                    }
                    if (this.activeName == 2) {
                        this.MeiZhiQi_Four("echartsTfour", this.MeiZhiQi_FourSerData[index + 1]);
                    }
                    if (this.activeTabName == 2) {
                        this.MeiZhiQi_Six("echartsTsix", this.MeiZhiQi_SixSerData[index + 1]);
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
