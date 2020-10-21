<template>
    <div class="child1" style="background-color: #E6E8EC;">
        <div class="map"></div>
        <!--柱状图-->
        <div style="background-color: #fff;padding-top: 18px;margin-top: 6px;">
            <div class="scFristqh">
                <el-tabs v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane label="天然气月产量分析" name="1"></el-tab-pane>
                    <el-tab-pane label="天然气产量与储量关联分析" name="2" :laze="true"></el-tab-pane>
                </el-tabs>
            </div>
            <div class="tabs-content">
                <div id="barOne" style="width:100%;height:200px;" v-show="activeName==='1'"></div>
                <div id="barTwo" style="width:100%;height:200px;" v-show="activeName==='2'" ref="second"></div>
            </div>
        </div>
        <!--饼图-->
        <div style="background-color: #fff;padding-top: 18px;margin-top: 6px;">
            <div class="scFristqh">
                <el-tabs v-model="activeNamePie" @tab-click="handlePieClick">
                    <el-tab-pane label="天然气月产量气田分布" name="1"></el-tab-pane>
                    <el-tab-pane label="天然气月产量企业分布" name="2" :laze="true"></el-tab-pane>
                </el-tabs>
            </div>
            <div class="tabs-content">

                <div>
                    <div class="fontSize_div">
                        <div class="fontSize">20</div>
                        <div class="fontSize" style="font-size: 14px">亿立方米</div>
                    </div>
                    <div id="PieOne" style="width:100%;height:240px;" v-show="activeNamePie==='1'"></div>
                </div>

                <div id="PieTwo" style="width:100%;height:240px;" v-show="activeNamePie==='2'" ref="second"></div>
            </div>
        </div>
        <div style="background-color: #fff;padding-top: 18px;margin-top: 6px;">
            <div class="title">
                天然气月产量预测分析
            </div>
            <div class="content">
                <div id="line" style="width: 100%;height: 167px"></div>
            </div>
        </div>
    </div>
</template>
<script>

    export default {
        name: 'child1',
        data() {
            return {
                activeName: '1',
                activeNamePie: '1',
                legendDataOne: ['天然气月产量', '同比变化'],
                legendDataTwo: ['天然气月产量', '储量'],
                xAxisDataOne: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                barOneSeriesDataOne: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
                barOneSeriesDataTwo: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]

            };
        },
        mounted() {
            //天然气月产量分析
            this.drawBar('barOne', this.legendDataOne, this.xAxisDataOne, '%', '同比变化', this.barOneSeriesDataOne, this.barOneSeriesDataTwo)
            this.drawPie();
            this.drawLine()

        },
        methods: {
            //天然气月产量分析柱状图
            drawBar(barId, legendData, xAxisData, barName, seriesName, seriesDataOne, seriesDataTwo) {
                let myChart = this.$echarts.init(document.getElementById(barId));
                // 指定图表的配置项和数据
                let option = {
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross',
                            crossStyle: {
                                color: '#999'
                            }
                        }
                    },
                    legend: {
                        data: legendData,
                        x:'right',
                        right:'20%'
                    },
                    xAxis: [
                        {
                            type: 'category',
                            data: xAxisData,
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
                            name: '亿立方',
                            min: 0,
                            max: 250,
                            interval: 50,
                            axisLabel: {
                                formatter: '{value}'
                            },
                            axisLine: {
                                lineStyle: {
                                    color: '#9B9DA1'
                                }
                            }
                        },
                        {
                            type: 'value',
                            name: barName,
                            min: 0,
                            max: 25,
                            interval: 5,
                            axisLabel: {
                                formatter: '{value}'
                            },
                            axisLine: {
                                lineStyle: {
                                    color: '#9B9DA1'
                                }
                            }
                        }
                    ],
                    series: [
                        {
                            name: '天然气月产量',
                            type: 'bar',
                            barWidth: 20,
                            data: seriesDataOne,
                            itemStyle: {
                                normal: {
                                    color: new this.$echarts.graphic.LinearGradient(
                                        0, 0, 0, 1,
                                        [
                                            {offset: 0, color: '#38F8FF'},                   //柱图渐变色
                                            {offset: 1, color: '#45BBFF'},                   //柱图渐变色
                                        ]
                                    )
                                }
                            }
                        },
                        {
                            name: seriesName,
                            type: 'line',
                            data: seriesDataTwo,
                            itemStyle: {
                                color: '#FBAF5D'
                            }
                        }
                    ]
                };


                // 使用刚指定的配置项和数据显示图表。
                myChart.setOption(option);
            },
            //天然气月产量气田分布
            drawPie() {
                let myChart = this.$echarts.init(document.getElementById('PieOne'));
                let option = {
                    tooltip: {
                        trigger: "item",
                        formatter: "{a} <br/>{b}: {c} ({d}%)"
                    },
                    legend: {
                        orient: "horizontal",
                        bottom: 10,
                        left: "center",
                        itemGap: 10,
                        data: ["苏里格气田", "靖边气田", "胜利井气田", "其他", "大牛地气田", "乌审旗气田"],
                        itemWidth: 15,
                        itemHeight: 10
                    },
                    grid: {
                        bottom: 40
                    },
                    series: [
                        {
                            name: "天然气月产量气田分布",
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
                            data: [{
                                value: 2000,
                                name: "苏里格气田"
                            },
                                {
                                    value: 900,
                                    name: "靖边气田"
                                },
                                {
                                    value: 1533.2,
                                    name: "胜利井气田"
                                },
                                {
                                    value: 766.6,
                                    name: "其他"
                                },
                                {
                                    value: 1700,
                                    name: "大牛地气田"
                                },
                                {
                                    value: 60,
                                    name: "乌审旗气田"
                                }],
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
                };
                // 使用刚指定的配置项和数据显示图表。
                myChart.setOption(option);

            },
            //天然气月产量企业分布
            drawPieTwo() {
                let myChart = this.$echarts.init(document.getElementById('PieTwo'));
                let option = {
                    tooltip: {
                        trigger: "item",
                        formatter: "{a} <br/>{b}: {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        right: 10,
                        top: 70,
                        bottom: 20,
                        itemGap: 10,
                        data: ["中石油", "中石化"],
                        itemWidth: 15,
                        itemHeight: 10,
                        // 使用回调函数
                        formatter: function (name) {
                            var data = option.series[0].data;
                            var total = 0;
                            var tarValue;
                            for (var i = 0, l = data.length; i < l; i++) {
                                total += data[i].value;
                                if (data[i].name == name) {
                                    tarValue = data[i].value;
                                }
                            }
                            var p = ((tarValue / total) * 100).toFixed(2);
                            return name + " " + " " + p + "%";
                        },
                    },
                    series: [
                        {
                            name: "天然气月产量企业分布",
                            type: "pie",
                            radius: ["40%", "55%"],
                            center: ["50%", "40%"],
                            label: {
                                show: false
                            },
                            data: [{
                                value: 6516,
                                name: "中石油"
                            },
                                {
                                    value: 1149,
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
            // 天然气月产量柱状图切换
            handleClick(tab,event) {
                if (tab.index == 1) {
                    this.$nextTick(() => {
                        // 天然气产量与储量关联分析
                        this.drawBar('barTwo', this.legendDataTwo, this.xAxisDataOne, '', '储量', this.barOneSeriesDataOne,
                            this.barOneSeriesDataTwo)
                    })
                }

            },
            // 天然气月产量企业分布切换
            handlePieClick(tab,event) {
                if (tab.index == 1) {
                    this.$nextTick(() => {
                        // 天然气月产量企业分布
                        this.drawPieTwo()
                    })
                }

            },
            // 天然气月产量预测分析
            drawLine() {
                let myChart = this.$echarts.init(document.getElementById('line'));
                let option = {
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross',
                            label: {
                                backgroundColor: '#999'
                            }
                        }
                    },
                    legend: {
                        data: ['天然气月产量', '天然气月产量预测值'],
                        x:'right'
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
                            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
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
                            axisLine: {
                                lineStyle: {
                                    color: '#9B9DA1'
                                }
                            }
                        }
                    ],
                    series: [
                        {
                            name: '天然气月产量',
                            type: 'line',
                            stack: '总量',
                            symbol: 'circle',
                            symbolSize: 6,
                            itemStyle: {
                                normal: {
                                    color: '#F9C832',
                                    lineStyle: {        // 系列级个性化折线样式
                                        type: 'solid',
                                        color: '#F9C832'
                                    }
                                }
                            },
                            areaStyle: {
                                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: 'rgba(249,199,51)'
                                }, {
                                    offset: 1,
                                    color: 'rgba(249,199,51,0.39)'
                                }])
                            },
                            data: [220, 182, 191, 234, 290, 330, 310, 220, 182, 191, 234, 290]
                        },
                        {
                            name: '天然气月产量预测值',
                            type: 'line',
                            stack: '总量',
                            symbol: 'circle',
                            symbolSize: 6,
                            itemStyle: {
                                normal: {
                                    color: '#1E8DF7',
                                    lineStyle: {        // 系列级个性化折线样式
                                        type: 'solid',
                                        color: '#1E8DF7'
                                    }
                                }
                            },
                            areaStyle: {
                                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: 'rgba(19,141,247)'
                                }, {
                                    offset: 1,
                                    color: 'rgba(19,141,247,0.23)'
                                }])
                            },
                            data: [120, 132, 101, 134, 90, 230, 210, 120, 132, 101, 134, 90]
                        }
                    ]
                };
                // 使用刚指定的配置项和数据显示图表。
                myChart.setOption(option);
            }
        }
    }
</script>

<style scoped>
    .map {
        height: 309px;
        width: 100%;
        background-size: cover;
        background: url(../../assets/img/oilgas/shenchan.png) no-repeat;
    }

    .scFristqh {
        margin-bottom: 22px;
        display: flex;
        justify-content: center;
    }

    .scFristqh /deep/ .el-tabs__item {
        color: #236BD7;
        font-size: 13px;
        height: 28px;
        line-height: 28px;
        width: 170px;
        text-align: center;
        padding: 0;
        border-radius: 3px;
    }

    .scFristqh /deep/ .el-tabs__item.is-active {
        background-color: #236BD7;
        color: #fff;
    }

    .scFristqh /deep/ .el-tabs {
        width: 342px;
        border: 1px solid #236BD7;
        border-radius: 3px;
    }

    .scFristqh /deep/ .el-tabs__header {
        margin: 0;
    }

    .scFristqh /deep/ .el-tabs__active-bar, .scFristqh /deep/ .el-tabs__nav-wrap::after {
        display: none;
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
        height: 100%;
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
</style>
