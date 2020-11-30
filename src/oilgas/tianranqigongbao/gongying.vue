<template>
    <div class="child2" style="background-color: #E6E8EC;">
        <div id="banner">
            <img class="map"
                 src="../../assets/img/oilgas/gongying.png"
                 alt="图片未显示"/>
        </div>
        <!--地图定位-->
        <div>
            <div class="clickbtn" v-for="(item,index) in posList"
                 :style="{'left':be_click_left(item.left),'top':be_click_top(item.top)}"
                 @click="showDes(index)"
            ></div>
        </div>
        <div>
            <div v-for="(item,index) in desList"
                 :style="{'left':be_click_left(item.left),'top':be_click_top(item.top)}"
                 class="des_list"
                 :ref="`list${index}`"
                 v-show="desIndex==index&&showFlag"
            >
                <div>{{item.name}}</div>
                <div>日供气量：{{item.num}}万立方米</div>
            </div>
        </div>


        <div style="background-color: #fff;padding-top: 18px;margin-top: 6px;">
            <div class="scFristqh">
                <el-tabs v-model="supplyActiveName" @tab-click="supplyHandleClick">
                    <el-tab-pane label="天然气日供气量趋势分析" name="1"></el-tab-pane>
                    <el-tab-pane label="供气量与合同量对比分析" name="2"></el-tab-pane>
                </el-tabs>
            </div>
            <div class="tabs-content">
                <div id="supplyLine" style="width: 100%;height: 240px" v-show="supplyActiveName==='1'"></div>
                <div id="supplyLineTwo" style="width: 100%;height: 240px" v-show="supplyActiveName==='2'"></div>
            </div>
        </div>
        <div style="background-color: #fff;padding-top: 18px;margin-top: 6px;">
            <div class="scFristqh">
                <el-tabs v-model="activeNamePie" @tab-click="handlePieClick">
                    <el-tab-pane label="供气对象性质分析" name="1"></el-tab-pane>
                    <el-tab-pane label="供气单位结构分析" name="2"></el-tab-pane>
                </el-tabs>
            </div>
            <div class="tabs-content">

                <div  v-show="activeNamePie==='1'">
                    <div class="fontSize_div">
                        <div class="fontSize">1800</div>
                        <div class="fontSize" style="font-size: 14px">万立方米</div>
                    </div>
                    <div id="supplyPieOne" style="width:100%;height:240px;"></div>
                </div>
                <div v-show="activeNamePie==='2'">
                    <div class="fontSize_div">
                        <div class="fontSize">100</div>
                        <div class="fontSize" style="font-size: 14px">亿立方米</div>
                    </div>
                    <div id="supplyPieTwo" style="width:100%;height:240px;"  ref="second"></div>
                </div>
            </div>
        </div>
        <div style="background-color: #fff;padding-top: 18px;margin-top: 6px;">
            <div class="scFristqh">
                <el-tabs v-model="activeNameBar" @tab-click="supplyBarClick">
                    <el-tab-pane label="不同气田的日供应量级占比" name="1"></el-tab-pane>
                    <el-tab-pane label="未来30日供气量预测" name="2"></el-tab-pane>
                </el-tabs>
            </div>
            <div class="content">
                <div v-show="activeNameBar==='1'">
                    <div class="fontSize_div">
                        <div class="fontSize">1012</div>
                        <div class="fontSize" style="font-size: 14px">万立方米</div>
                    </div>
                    <div id="supplyBarTwo" style="width: 100%;height: 240px" ></div>

                </div>

                <div id="supplyLineThree" style="width: 100%;height: 240px" v-show="activeNameBar==='2'"></div>
            </div>
        </div>
    </div>
</template>
<script>

    export default {
        name: 'child2',
        data() {
            return {
                posList: [
                    //苏里格气田
                    {
                        left: '0.354',
                        top: '1.0'
                    },
                    //靖边气田
                    {
                        left: '0.4',
                        top: '1.0'
                    },
                    //乌审旗气田
                    {
                        left: '0.444',
                        top: '1.015'
                    },
                    //大牛地气田
                    {
                        left: '0.404',
                        top: '1.060'
                    },
                    //胜利井气田
                    {
                        left: '0.384',
                        top: '1.110'
                    },
                    //包尔气田
                    {
                        left: '0.50',
                        top: '0.851'
                    },
                    //宝力格气田
                    {
                        left: '0.68',
                        top: '0.751'
                    },
                    //哈达图气田
                    {
                        left: '0.72',
                        top: '0.708'
                    },
                    //贝尔气田
                    {
                        left: '0.74',
                        top: '0.589'
                    },
                    //苏仁诺尔气田
                    {
                        left: '0.68',
                        top: '0.559'
                    }
                ],//地图弹窗位置
                desList: [
                    {
                        name: '苏里格气田',
                        num: '22',
                        left: '0.244',
                        top: '0.845'
                    },
                    {
                        name: '靖边气田',
                        num: '22',
                        left: '0.244',
                        top: '0.845'
                    }
                    ,
                    {
                        name: '乌审旗气田',
                        num: '22',
                        left: '0.244',
                        top: '0.845'
                    }
                    ,
                    {
                        name: '大牛地气田',
                        num: '22',
                        left: '0.244',
                        top: '0.845'
                    },
                    {
                        name: '胜利井气田',
                        num: '22',
                        left: '0.244',
                        top: '0.845'
                    },
                    {
                        name: '包尔气田',
                        num: '22',
                        left: '0.40',
                        top: '0.711'
                    },
                    {
                        name: '宝力格气田',
                        num: '22',
                        left: '0.61',
                        top: '0.601'
                    },
                    {
                        name: '哈达图气田',
                        num: '22',
                        left: '0.61',
                        top: '0.561'
                    },
                    {
                        name: '贝尔气田',
                        num: '22',
                        left: '0.61',
                        top: '0.441'
                    },
                    {
                        name: '苏仁诺尔气田',
                        num: '22',
                        left: '0.56',
                        top: '0.411'
                    }
                ],//弹窗内容
                screenWidth: document.body.clientWidth, // 屏幕宽
                supplyActiveName: '1',
                activeNamePie: '1',
                activeNameBar: '1',
                show: false,
                desIndex: null,
                isShow: false,
                drawLineTotal: [
                    {
                        actual: [17, 18, 16, 25, 23, 25, 24],
                        plan: [13, 15, 18, 26, 18, 30, 22],
                        chain: [7, 8, 6, 15, 13, 15, 14]
                    },
                ],
                drawLineData: [
                    //苏里格气田
                    {
                        actual: [7, 8, 6, 15, 13, 15, 14],
                        plan: [3, 5, 8, 16, 8, 20, 22],
                        chain: [7, 8, 6, 15, 13, 15, 14]
                    },
                    //靖边气田
                    {
                        actual: [9, 7, 7, 7, 7, 15, 15],
                        plan: [3, 5, 8, 5, 8, 8, 22],
                        chain: [9, 7, 7, 7, 7, 15, 15]
                    },
                    //乌审旗气田
                    {
                        actual: [5, 5, 5, 12, 6, 21, 16],
                        plan: [3, 5, 8, 16, 8, 20, 22],
                        chain: [5, 5, 5, 12, 6, 21, 16]
                    },
                    //大牛地气田
                    {
                        actual: [3, 8, 7, 4, 11, 20, 11],
                        plan: [3, 5, 8, 16, 18, 20, 22],
                        chain: [3, 9, 7, 4, 11, 20, 11]
                    },
                    //胜利井气田
                    {
                        actual: [5, 6, 4, 8, 10, 23, 17],
                        plan: [3, 5, 8, 16, 8, 20, 22],
                        chain: [5, 6, 4, 8, 10, 23, 17]
                    },
                    //包尔气田
                    {
                        actual: [6, 9, 4, 17, 12, 10, 11],
                        plan: [3, 5, 8, 16, 8, 20, 22],
                        chain: [6, 9, 9, 17, 12, 17, 11]
                    },
                    //宝力格气田
                    {
                        actual: [2, 2, 8, 14, 7, 19, 13],
                        plan: [3, 5, 8, 16, 8, 20, 22],
                        chain: [2, 2, 8, 14, 7, 19, 13]
                    },
                    //哈达图气田
                    {
                        actual: [3, 4, 7, 11, 20, 9, 12],
                        plan: [3, 5, 8, 16, 8, 20, 22],
                        chain: [3, 4, 7, 11, 20, 9, 12]
                    },
                    //贝尔气田
                    {
                        actual: [2, 2, 8, 14, 7, 19, 13],
                        plan: [3, 5, 8, 16, 8, 20, 22],
                        chain: [2, 2, 8, 14, 7, 19, 13]
                    },
                    //苏仁诺尔气田
                    {
                        actual: [5, 6, 4, 8, 10, 23, 17],
                        plan: [3, 5, 8, 16, 8, 20, 22],
                        chain: [5, 6, 4, 8, 10, 23, 17]
                    }
                ],
                showFlag: false
            };
        },
        mounted() {
            this.drawLine(this.drawLineTotal, 0);
            this.drawPie();
            this.drawSupplyBar();

        },
        methods: {
            // 用于点击的div块绑定函数
            be_click_left(a) {
                return this.screenWidth * a + 'px'
            },
            be_click_top(a) {
                return 314.5 * a + 'px'
            },
            // 点击地图的点联动
            showDes(index) {
                if (this.desIndex == index) {
                    if (this.$refs[`list${index}`][0].style.display == 'none') {
                        this.showFlag = true
                        this.desIndex = index;
                        this.drawLine(this.drawLineData, index);
                    } else {
                        this.drawLine(this.drawLineTotal, 0);
                        this.showFlag = false;
                        this.desIndex = null;

                    }
                } else {
                    this.desIndex = index;
                    this.showFlag = true;
                    this.drawLine(this.drawLineData, index);
                }


            },
            //供气对象性质分析
            drawPie() {
                let myChart = this.$echarts.init(document.getElementById('supplyPieOne'));
                let option = {
                    tooltip: {
                        trigger: "item",
                        formatter: "{a} <br/>{b}: {c}万立方米 ({d}%)"
                    },
                    legend: {
                        orient: "horizontal",
                        bottom: 10,
                        left: "center",
                        itemGap: 10,
                        data: ["管道工厂", "甲醛厂", "合成氨", "液化工厂",'城燃企业公司'],
                        itemWidth: 15,
                        itemHeight: 10
                    },
                    grid: {
                        bottom: 40
                    },
                    series: [
                        {
                            name: "供气对象性质分析",
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
                                length2: 60
                            },
                            data: [{
                                value: 500,
                                name: "管道工厂"
                            },
                                {
                                    value: 420,
                                    name: "甲醛厂"
                                },
                                {
                                    value: 350,
                                    name: "合成氨"
                                },
                                {
                                    value: 330,
                                    name: "液化工厂"
                                },
                                {
                                    value: 200,
                                    name: "城燃企业公司"
                                }
                            ],
                            itemStyle: {
                                normal: {
                                    color: function (params) {
                                        //自定义颜色
                                        let colorList = [
                                            '#31D9E5', '#23F5B1', '#FFA416', '#EF755F','#5f59f7'
                                        ];
                                        return colorList[params.dataIndex]
                                    }
                                }


                            },

                        }
                    ]
                };
                // 使用刚指定的配置项和数据显示图表。
                myChart.setOption(option);

            },
            //供气单位结构分析
            drawPieTwo() {
                let myChart = this.$echarts.init(document.getElementById('supplyPieTwo'));
                let option = {
                    tooltip: {
                        trigger: "item",
                        formatter: "{a} <br/>{b}: {c}亿立方米 ({d}%)"
                    },
                    legend: {
                        orient: 'horizontal',
                        bottom: 10,
                        left: "center",
                        itemGap: 10,
                        data: ["中石油", "中石化"],
                        itemWidth: 15,
                        itemHeight: 10,
                    },
                    series: [
                        {
                            name: "供气单位结构分析",
                            type: "pie",
                            radius: ["40%", "55%"],
                            center: ["50%", "40%"],
                            label: {
                                formatter: "{per|{b}:{d}%\n}",
                                padding: [0, -60, 5],
                                rich: {
                                    per: {
                                        fontSize: 12,
                                        color: "#9B9DA1"
                                    }
                                }
                            },
                            labelLine: {
                                length: 15,
                                length2: 60
                            },
                            data: [{
                                value: 60,
                                name: "中石油"
                            },
                                {
                                    value: 40,
                                    name: "中石化"
                                },
                            ],
                            itemStyle: {
                                normal: {
                                    color: function (params) {
                                        //自定义颜色
                                        let colorList = [
                                            '#95F0F1', '#FF850D'
                                        ];
                                        return colorList[params.dataIndex]
                                    }
                                }


                            },

                        }
                    ]
                };
                // 使用刚指定的配置项和数据显示图表。
                myChart.setOption(option);
            },
            // 天然气日供气量趋势分析tab切换
            supplyHandleClick(tab, event) {
                if (tab.index == 1) {
                    this.$nextTick(() => {
                        // 天然气产量与储量关联分析
                        this.drawSupplyLineTwo()
                    })
                }

            },
            // 供气对象性质分析tab切换
            handlePieClick(tab, event) {
                if (tab.index == 1) {
                    this.$nextTick(() => {
                        // 天然气月产量企业分布
                        this.drawPieTwo()
                    })
                }

            },
            // 供气量与合同量差额分析tab切换
            supplyBarClick(tab, event) {
                if (tab.index == 1) {
                    this.$nextTick(() => {
                        // 未来30日供气量预测
                        this.drawSupplyLineThree()
                    })
                }
            },
            // 天然气日供气量趋势分析
            drawLine(serData, index) {
                let myChart = this.$echarts.init(document.getElementById('supplyLine'));
                let option = {
                    tooltip: {
                        trigger: 'axis',
                        formatter(params) {
                            return params[0].name + '</br>' + params[0].seriesName + ':' + params[0].value + '万立方米' +
                                '</br>' +
                                params[1].seriesName + ':' +
                                params[1].value + '万立方米' +
                                '</br>' +
                                params[2].seriesName + ':' +
                                params[2].value + '%'
                        }
                    },
                    legend: {
                        data: ['天然气日供气量', '计划日供气量', '环比变化'],
                        x: 'right'
                    },
                    /*  grid: {
                          left: '3%',
                          // right: '4%',
                          bottom: '3%',
                          containLabel: true
                      },*/
                    xAxis: [
                        {
                            type: 'category',
                            data: ['11月1日', '11月2日', '11月3日', '11月4日', '11月5日', '11月6日', '11月7日'],
                            axisLine: {
                                lineStyle: {
                                    color: '#9B9DA1'
                                }
                            }
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            name: '万立方米',
                            axisLine: {
                                lineStyle: {
                                    color: '#9B9DA1'
                                }
                            }

                        },
                        /*{
                            type: 'value',
                            name: '%',
                            axisLine: {
                                lineStyle: {
                                    color: '#9B9DA1'
                                }
                            }
                        }*/
                    ],
                    series: [
                        {
                            name: '天然气日供气量',
                            type: 'bar',
                            barWidth: 10,
                            itemStyle: {
                                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {offset: 0, color: "#44c2fd"},
                                    {offset: 1, color: "#5f59f7"},
                                ]),
                            },
                            data: serData[index].actual
                        },
                        {
                            name: '计划日供气量',
                            type: 'bar',
                            barWidth: 10,
                            itemStyle: {
                                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {offset: 0, color: "#ffc700"},
                                    {offset: 1, color: "#ff9200"},
                                ]),
                            },
                            data: serData[index].plan
                        },
                        {
                            name: '环比变化',
                            type: 'line',
                            smooth: true,
                            symbol: 'circle',
                            symbolSize: 6,
                            // yAxisIndex: 1,
                            itemStyle: {
                                normal: {
                                    color: '#FBAF5D',
                                    lineStyle: {        // 系列级个性化折线样式
                                        type: 'solid',
                                        color: '#FBAF5D'
                                    }
                                }
                            },
                            data: serData[index].chain
                        }
                    ]
                };
                // 使用刚指定的配置项和数据显示图表。
                myChart.setOption(option);
            },
            //供气量与合同量对比分析
            drawSupplyLineTwo() {
                let myChart = this.$echarts.init(document.getElementById('supplyLineTwo'));
                // 指定图表的配置项和数据
                let option = {
                    tooltip: {
                        trigger: 'axis',
                        formatter: '{a0}{b0}: {c0}万立方米<br /> {a1}{b1}: {c1}万立方米<br /> {a2}{b2}: {c2}万立方米',
                    },
                    legend: {
                        itemWidth: 10,
                        itemHeight: 6,
                        data: ['天然气日供气量', '合同量', '差值'],
                        x: 'right',
                        right: '20%'
                    },
                    xAxis: [
                        {
                            type: 'category',
                            data: ['11月1日', '11月2日', '11月3日', '11月4日', '11月5日', '11月6日', '11月7日'],
                            axisPointer: {
                                type: 'shadow'
                            },
                            axisLine: {
                                lineStyle: {
                                    color: '#9B9DA1'
                                }
                            }

                        }
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            name: '万立方米',
                            axisLabel: {
                                formatter: '{value}'
                            },
                            axisLine: {
                                lineStyle: {
                                    color: '#9B9DA1'
                                }
                            }
                        },
                    ],
                    series: [
                        {
                            name: '天然气日供气量',
                            type: 'bar',
                            barWidth: 10,
                            data: [35, 20, 50, 65, 80, 90, 85],
                            itemStyle: {
                                normal: {
                                    color: function (params) {
                                        if (params.value < 60) {
                                            return "#FE8463";
                                        } else {
                                            return "#9BCA63";
                                        }

                                    }
                                }
                            }
                        },
                        {
                            name: '合同量',
                            type: 'line',
                            data: [60, 60, 60, 60, 60, 60, 60],
                            itemStyle: {
                                color: '#FBAF5D'
                            }
                        },
                        {
                            name: '差值',
                            type: 'bar',
                            barWidth: 10,
                            data: [-25, -40, -10, 5, 20, 30, 25],
                            itemStyle: {
                                color: '#5f59f7'
                            }
                        },
                    ]
                };


                // 使用刚指定的配置项和数据显示图表。
                myChart.setOption(option);
            },
             // 不同气田的日供应量级占比
             drawSupplyBar() {
                 let myChart = this.$echarts.init(document.getElementById('supplyBarTwo'));
                 // 指定图表的配置项和数据
                 let option = {
                     tooltip: {
                         trigger: "item",
                         formatter: "{a} <br/>{b}: {c}万立方米 ({d}%)"
                     },
                     legend: {
                         orient: 'horizontal',
                         bottom: 10,
                         left: "center",
                         itemGap: 10,
                         data: ["苏里格气田", "大牛地气田",'靖边气田','胜利井气田','乌审旗气田','其他'],
                         itemWidth: 15,
                         itemHeight: 10
                     },
                     series: [
                         {
                             name: "不同气田的日供应量级占比",
                             type: "pie",
                             radius: ["40%", "55%"],
                             center: ["50%", "40%"],
                             label: {
                                 formatter: "{per|{d}%\n}",
                                 padding: [0, -60, 5],
                                 rich: {
                                     per: {
                                         fontSize: 12,
                                         color: "#9B9DA1"
                                     }
                                 }
                             },
                             labelLine: {
                                 length: 15,
                                 length2: 60
                             },
                             data: [{
                                 value: 118,
                                 name: "苏里格气田"
                             },
                                 {
                                     value: 240,
                                     name: "大牛地气田"
                                 },
                                 {
                                     value: 210,
                                     name: "靖边气田"
                                 },
                                 {
                                     value: 120,
                                     name: "胜利井气田"
                                 },
                                 {
                                     value: 112,
                                     name: "乌审旗气田"
                                 },
                                 {
                                     value: 240,
                                     name: "其他"
                                 },
                             ],
                             itemStyle: {
                                 normal: {
                                     color: function (params) {
                                         //自定义颜色
                                         let colorList = [
                                             '#95F0F1', '#FF850D','#FFA416', '#EF755F','#a0d911', '#52c41a', '#fa541c'
                                         ];
                                         return colorList[params.dataIndex]
                                     }
                                 }


                             },

                         }
                     ]
                 };
                 // 使用刚指定的配置项和数据显示图表。
                 myChart.setOption(option);
             },
            // 未来30日供气量预测
            drawSupplyLineThree() {
                let myChart = this.$echarts.init(document.getElementById('supplyLineThree'));
                let option = {
                    tooltip: {
                        trigger: 'axis',
                        formatter(params) {
                            // return params[0].name + '</br>' + params[0].seriesName + ':' + params[0].value + '亿立方米' + '</br>' +
                            //     params[1].seriesName + ':' +
                            //     params[1].value + '亿立方米'
                            if (params.length && params.length > 1) {
                                return params[0].name + '</br>' + params[0].seriesName + ':' + params[0].value +
                                    '万立方米' + '</br>' +
                                    params[1].seriesName + ':' +
                                    params[1].value + '万立方米'
                            } else if (params.length === 1) {
                                return params[0].name + '</br>' + params[0].seriesName + ':' + params[0].value + '万立方米'
                            }
                        }
                    },
                    legend: {
                        data: ['天然气日产量', '天然气日产量预测值'],
                        x: 'right'
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: [
                        {
                            type: 'category',
                            boundaryGap: false,
                            data: ['1月1日', '1月2日', '1月3日', '1月4日', '1月5日', '1月6日', '1月7日'],
                            axisLine: {
                                lineStyle: {
                                    color: '#9B9DA1'
                                }
                            }
                        }
                    ],
                    yAxis: [
                        {
                            name: '万立方米',
                            type: 'value',
                            axisLine: {
                                lineStyle: {
                                    color: '#9B9DA1'
                                }
                            }
                        },
                        /*{
                            name: '%',
                            type: 'value',
                            axisLine: {
                                lineStyle: {
                                    color: '#9B9DA1'
                                }
                            }
                        }*/
                    ],
                    series: [
                        {
                            name: '天然气日产量',
                            type: 'line',
                            smooth: true,
                            symbol: 'circle',
                            symbolSize: 6,
                            itemStyle: {
                                normal: {
                                    color: '#12DFBD',
                                    lineStyle: {        // 系列级个性化折线样式
                                        type: 'solid',
                                        color: '#12DFBD'
                                    }
                                }
                            },
                            data: [80, 90, 85, 81]
                        },
                        {
                            name: '天然气日产量预测值',
                            type: 'line',
                            stack: '总量',
                            symbol: 'circle',
                            symbolSize: 6,
                            itemStyle: {
                                normal: {
                                    color: '#FBAF5D',
                                    lineStyle: {        // 系列级个性化折线样式
                                        type: 'solid',
                                        color: '#FBAF5D'
                                    }
                                }
                            },
                            data: [82, 85, 75, 67, 71, 76, 67]
                        }
                    ]
                };
                // 使用刚指定的配置项和数据显示图表。
                myChart.setOption(option);
            },
            //点击地图显示供气量
            showLayer() {
                this.show = true
            }
        }
    }
</script>

<style scoped lang="scss">
    .child2 {
        .des_list {
            background-color: rgba(37, 54, 104, 0.5);
            position: absolute;
            padding: 0.08rem;
            font-size: 0.12rem;
            width: 2.6rem;
            color: #fff;
            border-radius: 0.04rem;
        }
        #banner {
            position: relative;
        }
        /* 关于地图内容的调整期 */
        .map {
            width: 100%;
            margin-top: 93px;
            background-color: #dadbdb;
            overflow: hidden;
        }
        .banner {
            width: 180px;
            height: 80px;
            background: url("../../assets/img/gasmap/sale_banner.png");
            position: absolute;
            top: 150px;
            left: 15px;
            display: none;
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
        .map {
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
            z-index: 3;
            display: none;
        }

        .tanchuang_one {
            position: absolute;
            width: 100%;
            height: 314.5px;
            background-color: #4c4c4c;
            z-index: 3;
            display: block;
        }

        .table_one_t {
            font-family: PingFang SC;
            border-collapse: collapse;
            width: 800px;

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
            width: 800px;
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
