<template>
    <div class="child1" style="background-color: #E6E8EC;">
        <img
                class="map"
                src="../../assets/img/地图.png"
        />
        <!--地图定位-->
        <img :class="item.cls" :src="item.src" alt="图片未显示" v-for="(item,index) in posList"
             :style="{'left':be_click_left(item.left),'top':be_click_top(item.top)}" @click="showDes(index)">
        <!--地图上展示信息-->
        <div class="lay-content"
             v-for="(item,index) in desList"
             v-show="showAll||index==desIndex"
             :style="{'left':be_click_left(item.left),'top':be_click_top(item.top)}">
            <div>{{item.name}}</div>
            <div>10月供应：{{item.num1}}万吨</div>
            <div>累计供应：{{item.num2}}万吨</div>

        </div>

        <!--饼图-->
        <div style="background-color: #fff;padding-top: 18px;margin-top: 6px;">
            <div class="scFristqh">
                <el-tabs v-model="activeNamePie" @tab-click="handlePieClick">
                    <el-tab-pane :label=tabList[0] name="1"></el-tab-pane>
                    <el-tab-pane :label=tabList[1] name="2" :laze="true"></el-tab-pane>
                </el-tabs>
            </div>
            <div class="tabs-content">

                <div v-show="activeNamePie==='1'">
                    <div id="echartsOne" style="width:100%;height:240px;"></div>
                </div>
                <div v-show="activeNamePie==='2'">
                    <div id="echartsThree" style="width:100%;height:240px;" ref="second"></div>

                </div>
            </div>
        </div>
        <div style="background-color: #fff;padding-top: 18px;margin-top: 6px;">
            <div class="scFristqh">
                <el-tabs v-model="activeName" @tab-click="handle">
                    <el-tab-pane :label=tabList_two[0] name="1"></el-tab-pane>
                    <el-tab-pane :label=tabList_two[1] name="2" :laze="true"></el-tab-pane>
                </el-tabs>
            </div>
            <div class="tabs-content">

                <div v-show="activeName==='1'">
                    <div class="fontSize_div">
                        <div class="fontSize">{{pie_one}}</div>
                        <div class="fontSize" style="font-size: 14px">万吨</div>
                    </div>
                    <div id="echartsFour" style="width:100%;height:240px;"></div>
                </div>
                <div v-show="activeName==='2'">
                    <div class="fontSize_div">
                        <div class="fontSize">{{pie_two}}</div>
                        <div class="fontSize" style="font-size: 14px">万吨</div>
                    </div>
                    <div id="echartsTwo" style="width:100%;height:240px;"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'child1',
        data() {
            return {
                posList: [
                    //吉祥油田区域
                    {
                        left: '0.333',
                        top: '0.918',
                        src: require('../../assets/img/YouqiGongying/y_gy.png'),
                        cls: 'clickbtn'

                    },
                    //包尔油田区域
                    {
                        left: '0.503',
                        top: '0.918',
                        src: require('../../assets/img/YouqiGongying/y_gy.png'),
                        cls: 'clickbtn'
                    },
                    //二连油田区域
                    {
                        left: '0.603',
                        top: '0.748',
                        src: require('../../assets/img/YouqiGongying/y_gy.png'),
                        cls: 'clickbtn1'
                    },
                    //海拉尔油田区域
                    {
                        left: '0.673',
                        top: '0.548',
                        src: require('../../assets/img/YouqiGongying/y_gy.png'),
                        cls: 'clickbtn2'
                    },
                    //科尔沁油田区域
                    {
                        left: '0.743',
                        top: '0.748',
                        src: require('../../assets/img/YouqiGongying/y_gy.png'),
                        cls: 'clickbtn2'
                    },
                    //科尔康油田区域
                    {
                        left: '0.783',
                        top: '0.838',
                        src: require('../../assets/img/YouqiGongying/y_gy.png'),
                        cls: 'clickbtn'
                    }
                ],//地图弹窗位置
                desList: [
                    {
                        left: '0.023',
                        top: '0.882',
                        name: '吉祥油田区域',
                        num1: '0.7',
                        num2: '4.2',
                    },

                    {
                        left: '0.243',
                        top: '0.742',
                        name: '包尔油田区域',
                        num1: '0.7',
                        num2: '4.2',
                    },

                    {
                        left: '0.373',
                        top: '0.582',
                        name: '二连油田区域',
                        num1: '0.7',
                        num2: '4.2',
                    },
                    {
                        left: '0.383',
                        top: '0.392',
                        name: '海拉尔油田区域',
                        num1: '0.7',
                        num2: '4.2',
                    },
                    {
                        left: '0.693',
                        top: '0.592',
                        name: '科尔沁油田区域',
                        num1: '0.7',
                        num2: '4.2',
                    },
                    {
                        left: '0.693',
                        top: '0.912',
                        name: '科尔康油田区域',
                        num1: '0.7',
                        num2: '4.2',
                    }

                ],//地图上方信息展示
                activeName: '1',
                activeNamePie: '1',
                screenWidth: document.body.clientWidth, // 屏幕宽
                screenLeft: "",
                pie_one: 7.5,
                pie_oneAry: [7.5, 0.715, 0.73, 2.25, 1.875, 0.84, 1.055],
                pie_two: 7.5,
                pie_twoAry: [7.5, 1.1, 1.01, 1.5, 1.71, 1.37, 1.01],
                showAll: true,
                desIndex: null,
                YuanYou_OneSerData: [
                    [{
                        actur: [3, 7, 9, 6, 9, 8, 13, 17, 17, 13],
                        plan: [11, 13, 12, 19, 13, 18, 13, 12, 12, 19],
                        change: [13, 5, 2, -7, 12, -5, 2, 9, -5, 3],
                    }],
                    [{
                        actur: [4, 8, 10, 6, 9, 10, 11, 16, 14, 13],
                        plan: [11, 12, 11, 16, 19, 13, 12, 17, 19, 20],
                        change: [13, 5, 2, -7, 12, -5, 2, 9, -5, 3],
                    }],
                    [{
                        actur: [3, 6, 8, 6, 7, 8, 11, 16, 12, 18],
                        plan: [10, 12, 11, 16, 14, 17, 12, 19, 11, 19],
                        change: [13, 5, 2, -7, 12, -5, 2, 9, -5, 3],
                    }],
                    [{
                        actur: [3, 7, 9, 6, 9, 8, 13, 17, 17, 13],
                        plan: [11, 13, 12, 19, 13, 18, 13, 12, 12, 19],
                        change: [13, 5, 2, -7, 12, -5, 2, 9, -5, 3],
                    }],
                    [{
                        actur: [4, 8, 10, 6, 9, 10, 11, 16, 14, 13],
                        plan: [11, 12, 11, 16, 19, 13, 12, 17, 19, 20],
                        change: [13, 5, 2, -7, 12, -5, 2, 9, -5, 3],
                    }],
                    [{
                        actur: [3, 6, 8, 6, 7, 8, 11, 16, 12, 18],
                        plan: [10, 12, 11, 16, 14, 17, 12, 19, 11, 19],
                        change: [13, 5, 2, -7, 12, -5, 2, 9, -5, 3],
                    }],
                    [{
                        actur: [3, 7, 9, 6, 9, 8, 13, 17, 17, 13],
                        plan: [11, 13, 12, 19, 13, 18, 13, 12, 12, 19],
                        change: [13, 5, 2, -7, 12, -5, 2, 9, -5, 3],
                    }]
                ],
                YuanYou_TwoSerData: [
                    [
                        {
                            inside: [3, 3.2, 5.1, 12.2, 5.8, 14.3, 16.3, 9, 5.2],
                            outside: [2, 2.2, 4.1, 11.2, 4.8, 13.3, 15.3, 8, 4.2]
                        }
                    ],
                    [
                        {
                            inside: [4, 4.2, 6.1, 14.2, 8.8, 16.3, 19.3, 9, 5.2],
                            outside: [2, 3.2, 4.1, 11.2, 4.8, 13.3, 15.3, 8, 4.2]
                        }
                    ],
                    [
                        {
                            inside: [3, 6.2, 5.1, 16.2, 7.8, 16.3, 18.3, 11, 6.2],
                            outside: [2, 4.2, 4.1, 11.2, 4.8, 13.3, 15.3, 8, 4.2]
                        }
                    ],
                    [
                        {
                            inside: [3, 3.2, 5.1, 12.2, 5.8, 14.3, 16.3, 9, 5.2],
                            outside: [2, 2.2, 4.1, 11.2, 4.8, 13.3, 15.3, 8, 4.2]
                        }
                    ],
                    [
                        {
                            inside: [4, 4.2, 6.1, 14.2, 8.8, 16.3, 19.3, 9, 5.2],
                            outside: [2, 3.2, 4.1, 11.2, 4.8, 13.3, 15.3, 8, 4.2]
                        }
                    ],
                    [
                        {
                            inside: [3, 6.2, 5.1, 16.2, 7.8, 16.3, 18.3, 11, 6.2],
                            outside: [2, 4.2, 4.1, 11.2, 4.8, 13.3, 15.3, 8, 4.2]
                        }
                    ],
                    [
                        {
                            inside: [3, 3.2, 5.1, 12.2, 5.8, 14.3, 16.3, 9, 5.2],
                            outside: [2, 2.2, 4.1, 11.2, 4.8, 13.3, 15.3, 8, 4.2]
                        }
                    ],
                ],
                YuanYou_ThreeSerData: [
                    [{
                        name: '中石油',
                        value: 7
                    },
                        {
                            name: '中石化',
                            value: 0.5
                        }
                    ],
                    [{
                        name: '中石油',
                        value: 0.65
                    },
                        {
                            name: '中石化',
                            value: 0.065
                        }
                    ],
                    [{
                        name: '中石油',
                        value: 0.68
                    },
                        {
                            name: '中石化',
                            value: 0.05
                        }
                    ],
                    [{
                        name: '中石油',
                        value: 2.1
                    },
                        {
                            name: '中石化',
                            value: 0.15
                        }
                    ],
                    [{
                        name: '中石油',
                        value: 1.75
                    },
                        {
                            name: '中石化',
                            value: 0.125
                        }
                    ],
                    [{
                        name: '中石油',
                        value: 0.76
                    },
                        {
                            name: '中石化',
                            value: 0.08
                        }
                    ],
                    [{
                        name: '中石油',
                        value: 1.01
                    },
                        {
                            name: '中石化',
                            value: 0.045
                        }
                    ]
                ],
                YuanYou_FourLengend: [
                    ['海拉尔油田区域', '二连油田区域', '科尔沁油田区域', '其他'],
                    ['吉祥油田', '达尔其油田'],
                    ['包尔油田', '赛罕油田'],
                    ['乌里雅斯太油田', '宝力格油田', '新苏木油田', '哈达图油田', '乌兰诺尔油田', '锡林油田'],
                    ['苏德尔特油田', '贝尔油田', '苏仁诺尔油田', '巴彦塔拉油田', '呼和诺仁油田'],
                    ['科尔沁油田', '交利格油田', '广发油田'],
                    ['科尔康油田', '龙筒湾油田'],

                ],
                YuanYou_FourSerData: [
                    [
                        {
                            name: '海拉尔油田区域',
                            value: 1.7
                        },
                        {
                            name: '二连油田区域',
                            value: 1.5
                        },
                        {
                            name: '科尔沁油田区域',
                            value: 1.3
                        },
                        {
                            name: '其他',
                            value: 3
                        }
                    ],
                    [
                        {
                            name: '吉祥油田',
                            value: 0.6
                        },
                        {
                            name: '达尔其油田',
                            value: 0.5
                        }
                    ],
                    [
                        {
                            name: '包尔油田',
                            value: 0.56
                        },
                        {
                            name: '赛罕油田',
                            value: 0.45
                        }
                    ],
                    [
                        {
                            name: '乌里雅斯太油田',
                            value: 0.3
                        },
                        {
                            name: '宝力格油田',
                            value: 0.2
                        },
                        {
                            name: '新苏木油田',
                            value: 0.45
                        },
                        {
                            name: '哈达图油田',
                            value: 0.05
                        },
                        {
                            name: '乌兰诺尔油田',
                            value: 0.25
                        },
                        {
                            name: '锡林油田',
                            value: 0.25
                        }
                    ],
                    [
                        {
                            name: '苏德尔特油田',
                            value: 0.33
                        },
                        {
                            name: '贝尔油田',
                            value: 0.35
                        },
                        {
                            name: '苏仁诺尔油田',
                            value: 0.4
                        },
                        {
                            name: '巴彦塔拉油田',
                            value: 0.29
                        },
                        {
                            name: '呼和诺仁油田',
                            value: 0.34
                        }
                    ],
                    [
                        {
                            name: '科尔沁油田',
                            value: 0.46
                        },
                        {
                            name: '交利格油田',
                            value: 0.44
                        },
                        {
                            name: '广发油田',
                            value: 0.4
                        }
                    ],
                    [
                        {
                            name: '科尔康油田',
                            value: 0.46
                        },
                        {
                            name: '龙筒湾油田',
                            value: 0.55
                        }
                    ]
                ],
                tabList: ['原油月供应量趋势分析', '原油区内区外供应分析'],
                tabList_copy: ['原油月供应量趋势分析', '原油区内区外供应分析'],
                tabList_two: ['原油供应结构企业占比分析', '油田供应分布分析'],
                tabList_two_copy: ['原油供应结构企业占比分析', '油田供应分布分析'],
                city: ['吉祥', '包尔', '二连', '海拉尔', '科尔沁', '科尔康']

            };
        },
        mounted() {
            //原油月供应量趋势分析
            this.YuanYou_One("echartsOne", this.YuanYou_OneSerData[0]);
            this.ZhuYaoQiYeZhanBi_pie('echartsFour', this.YuanYou_FourLengend[0], this.YuanYou_FourSerData[0])


        },
        methods: {
            // 用于点击的div块绑定函数
            be_click_left(a) {
                return this.screenWidth * a + 'px'
            },
            be_click_top(a) {
                return 314.5 * a + 'px'
            },
            //原油月供应量趋势分析
            YuanYou_One(name, series) {
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
                        data: ['原油月产量', '计划月产量', '同比变化']
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
                            name: "原油月产量",
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
            //区内区外供应对比分析
            QuNeiQuwaiGingYingDuiBi_twobar(name, series) {
                let echarts = require("echarts");
                let myChart = echarts.init(document.getElementById(name));
                myChart.setOption({
                    tooltip: {
                        trigger: "axis",
                        formatter(params) {
                            return params[0].name + '</br>' + params[0].seriesName + ':' + params[0].value + '万吨' + '</br>' +
                                params[1].seriesName + ':' +
                                params[1].value + '万吨'
                        }
                    },

                    legend: {
                        data: ["区内供应量", "区外供应量"],
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
                            name: "万吨 / 月",
                            type: "value",
                            min: 0,
                            max: 20,
                            interval: 2,
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
                            name: "区内供应量",
                            type: "bar",
                            barWidth: 4,
                            itemStyle: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {offset: 0, color: "#44c2fd"},
                                    {offset: 1, color: "#5f59f7"},
                                ]),
                            },
                            data: series[0].inside,
                        },
                        {
                            name: "区外供应量",
                            type: "bar",
                            barWidth: 4,
                            itemStyle: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {offset: 0, color: "#ffc700"},
                                    {offset: 1, color: "#ff9200"},
                                ]),
                            },
                            data: series[0].outside,
                        },
                    ],
                });
            },

            // 原油月供应量趋势分析tab切换
            handlePieClick(tab, event) {
                if (tab.index == 1) {
                    if (this.desIndex == null) {
                        this.$nextTick(() => {
                            this.QuNeiQuwaiGingYingDuiBi_twobar("echartsThree", this.YuanYou_TwoSerData[0]);
                        })

                    } else {
                        this.$nextTick(() => {
                            this.QuNeiQuwaiGingYingDuiBi_twobar("echartsThree", this.YuanYou_TwoSerData[this.desIndex + 1]);
                        })
                    }

                }
            },
            //原油供应结构
            handle(tab, event) {
                if (tab.index == 1) {
                    if (this.desIndex == null) {
                        this.$nextTick(() => {
                            this.drawLine("echartsTwo", this.YuanYou_ThreeSerData[0]);
                        })

                    } else {
                        this.$nextTick(() => {
                            this.drawLine("echartsTwo", this.YuanYou_ThreeSerData[this.desIndex + 1]);
                        })
                    }

                }
            },
            //原油供应结构企业占比分析
            drawLine(name, series) {
                var echarts = require("echarts");
                var myChart = echarts.init(document.getElementById(name));
                myChart.setOption({
                    tooltip: {
                        trigger: "item",
                        formatter: "{a} <br/>{b}: {c}亿立方米 ({d}%)",
                    },
                    legend: {
                        orient: "horizontal",
                        bottom: 10,
                        left: "center",
                        itemGap: 10,
                        data: ['中石油', '中石化'],
                        itemWidth: 15,
                        itemHeight: 10,
                    },
                    series: [
                        {
                            name: "原油月供应结构企业占比",
                            type: "pie",
                            radius: ["40%", "55%"],
                            center: ["50%", "40%"],
                            label: {
                                formatter: "{b|{b}} \n\n{per|{d}%}",
                                padding: [0, -50],
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
                                "#d527b7",
                                "#0000ff",
                            ],
                        },
                    ],
                });
            },
            //油田供应分布分析
            ZhuYaoQiYeZhanBi_pie(name, lengend, series) {
                let echarts = require("echarts");
                let myChart = echarts.init(document.getElementById(name));
                myChart.setOption({
                    tooltip: {
                        trigger: "item",
                        formatter: "{a} <br/>{b}: {c}万吨"
                    },
                    legend: {
                        orient: "horizontal",
                        bottom: 10,
                        left: "center",
                        itemGap: 10,
                        data: lengend,
                        itemWidth: 15,
                        itemHeight: 10
                    },
                    grid: {
                        bottom: 40
                    },
                    series: [
                        {
                            name: "原油供应结构企业占比",
                            type: "pie",
                            radius: ["40%", "55%"],
                            center: ["50%", "40%"],
                            label: {
                                formatter: "{per|{d}%\n}",
                                padding: [0, -40, 5],
                                rich: {
                                    per: {
                                        fontSize: 12,
                                        color: "#9B9DA1"
                                    }
                                }
                            },
                            labelLine: {
                                length: 15,
                                length2: 30
                            },
                            data: series,
                            itemStyle: {
                                normal: {
                                    color: function (params) {
                                        //自定义颜色
                                        let colorList = [
                                            '#31D9E5', '#23F5B1', '#FFA416', '#EF755F', '#CF5FEF', '#4210FF',
                                        ];
                                        return colorList[params.dataIndex]
                                    }
                                }


                            },

                        }
                    ]
                });
            },
            // 点击地图的点联动
            showDes(index) {
                if (this.desIndex == index) {
                    this.showAll = true;
                    this.desIndex = null;
                    this.tabList = this.tabList_copy;
                    this.tabList_two = this.tabList_two_copy
                    this.YuanYou_One("echartsOne", this.YuanYou_OneSerData[0]);
                    this.pie_one = this.pie_oneAry[0]
                    this.pie_two = this.pie_twoAry[0]
                    if(this.activeName==2){
                        this.drawLine("echartsTwo", this.YuanYou_ThreeSerData[0]);
                    }
                    if(this.activeNamePie==2){
                        this.QuNeiQuwaiGingYingDuiBi_twobar("echartsThree", this.YuanYou_TwoSerData[0]);
                    }
                    this.ZhuYaoQiYeZhanBi_pie('echartsFour', this.YuanYou_FourLengend[0], this.YuanYou_FourSerData[0])
                } else {
                    this.desIndex = index;
                    this.showAll = false;
                    this.pie_one = this.pie_oneAry[index + 1]
                    this.pie_two = this.pie_twoAry[index + 1]
                    this.tabList = [this.city[index] + this.tabList_copy[0], this.city[index] + this.tabList_copy[1]]
                    if(this.activeName==2){
                        this.drawLine("echartsTwo", this.YuanYou_ThreeSerData[index + 1]);
                    }
                    this.tabList_two = [this.city[index] + this.tabList_two_copy[0], this.city[index] + this.tabList_two_copy[1]]
                    this.YuanYou_One("echartsOne", this.YuanYou_OneSerData[index + 1]);
                    if(this.activeNamePie==2){
                        this.QuNeiQuwaiGingYingDuiBi_twobar("echartsThree", this.YuanYou_TwoSerData[index + 1]);
                    }
                    this.ZhuYaoQiYeZhanBi_pie('echartsFour', this.YuanYou_FourLengend[index + 1], this.YuanYou_FourSerData[index + 1])
                }


            },
        }
    }
</script>

<style scoped lang="scss">
    .child1 {
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
            position: absolute;
            z-index: 2;
            width: 20px;
        }
        .clickbtn1 {
            width: 35px;
            position: absolute;
            height: 35px;
            z-index: 2;
        }
        .clickbtn2 {
            width: 30px;
            position: absolute;
            height: 30px;
            z-index: 2;
        }

    }

</style>
