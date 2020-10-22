<template>
    <div class="child1" style="background-color: #E6E8EC;">
        <div class="map-box" @click.prevent="showLayer">
            <div class="map-layer" v-show="show">
                <div class="des">
                    气田
                </div>
                <div class="des">
                    日供气量:1000万方
                </div>
            </div>
            <img
                    class="map"
                    src="../../assets/img/oilgas/gongying.png"
            />
        </div>


        <div style="background-color: #fff;padding-top: 18px;margin-top: 6px;">
            <div class="scFristqh">
                <el-tabs v-model="supplyActiveName" @tab-click="supplyHandleClick">
                    <el-tab-pane label="天然气日供气量趋势分析" name="1"></el-tab-pane>
                    <el-tab-pane label="供气量与合同量对比分析" name="2" ></el-tab-pane>
                </el-tabs>
            </div>
            <div class="tabs-content">
                <div id="supplyLine" style="width: 100%;height: 167px" v-show="supplyActiveName==='1'"></div>
                <div id="supplyLineTwo" style="width: 100%;height: 167px" v-show="supplyActiveName==='2'"></div>
            </div>
        </div>
        <div style="background-color: #fff;padding-top: 18px;margin-top: 6px;">
            <div class="scFristqh">
                <el-tabs v-model="activeNamePie" @tab-click="handlePieClick">
                    <el-tab-pane label="供气对象性质分析" name="1"></el-tab-pane>
                    <el-tab-pane label="供气单位结构分析" name="2" ></el-tab-pane>
                </el-tabs>
            </div>
            <div class="tabs-content">

                <div>
                    <div class="fontSize_div">
                        <div class="fontSize">20</div>
                        <div class="fontSize" style="font-size: 14px">亿立方米</div>
                    </div>
                    <div id="supplyPieOne" style="width:100%;height:240px;" v-show="activeNamePie==='1'"></div>
                </div>

                <div id="supplyPieTwo" style="width:100%;height:240px;" v-show="activeNamePie==='2'" ref="second"></div>
            </div>
        </div>
        <div style="background-color: #fff;padding-top: 18px;margin-top: 6px;">
            <div class="scFristqh">
                <el-tabs v-model="activeNameBar" @tab-click="supplyBarClick">
                    <el-tab-pane label="供气量与合同量差额分析" name="1"></el-tab-pane>
                    <el-tab-pane label="未来30日供气量预测" name="2" ></el-tab-pane>
                </el-tabs>
            </div>
            <div class="content">
                <div id="supplyBarTwo" style="width: 100%;height: 180px" v-show="activeNameBar==='1'"></div>
                <div id="supplyLineThree" style="width: 100%;height: 180px" v-show="activeNameBar==='2'"></div>
            </div>
        </div>
    </div>
</template>
<script>

    export default {
        name: 'child2',
        data() {
            return {
                supplyActiveName: '1',
                activeNamePie: '1',
                activeNameBar: '1',
                show: false
            };
        },
        mounted() {
            this.drawLine();
            this.drawPie();
            this.drawSupplyBar()

        },
        methods: {
            //供气对象性质分析
            drawPie() {
                let myChart = this.$echarts.init(document.getElementById('supplyPieOne'));
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
                        data: ["液化工厂", "合成氨企业", "燃气公司", "甲醇工厂"],
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
                                length2: 30
                            },
                            data: [{
                                value: 2000,
                                name: "液化工厂"
                            },
                                {
                                    value: 900,
                                    name: "合成氨企业"
                                },
                                {
                                    value: 1533.2,
                                    name: "燃气公司"
                                },
                                {
                                    value: 766.6,
                                    name: "甲醇工厂"
                                }],
                            itemStyle: {
                                normal: {
                                    color: function (params) {
                                        //自定义颜色
                                        let colorList = [
                                            '#31D9E5', '#23F5B1', '#FFA416', '#EF755F'
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
            drawLine() {
                let myChart = this.$echarts.init(document.getElementById('supplyLine'));
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
                        data: ['天然气日供气量', '同比变化'],
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
                            name: '亿立方',
                            axisLine: {
                                lineStyle: {
                                    color: '#9B9DA1'
                                }
                            }
                        },
                        {
                            type: 'value',
                            name: '%',
                            axisLine: {
                                lineStyle: {
                                    color: '#9B9DA1'
                                }
                            }
                        }
                    ],
                    series: [
                        {
                            name: '天然气日供气量',
                            type: 'line',
                            stack: '总量',
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
                            areaStyle: {
                                color: 'rgba(27,202,201,0.1)'
                            },
                            data: [220, 182, 191, 234, 290, 330, 310, 220, 182, 191, 234, 290]
                        },
                        {
                            name: '同比变化',
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
                            data: [120, 132, 101, 134, 90, 230, 210, 120, 132, 101, 134, 90]
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
                        axisPointer: {
                            type: 'cross',
                            crossStyle: {
                                color: '#999'
                            }
                        }
                    },
                    legend: {
                        data: ['天然气日供气量', '合同量'],
                        x: 'right',
                        right: '20%'
                    },
                    xAxis: [
                        {
                            type: 'category',
                            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
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
                            name: '天然气日供气量',
                            type: 'bar',
                            barWidth: 20,
                            data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
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
                            name: '合同量',
                            type: 'line',
                            symbolSize: 0,
                            data: [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
                            itemStyle: {
                                color: '#FBAF5D'
                            }
                        }
                    ]
                };


                // 使用刚指定的配置项和数据显示图表。
                myChart.setOption(option);
            },
            // 供气量与合同量差额分析
            drawSupplyBar() {
                let myChart = this.$echarts.init(document.getElementById('supplyBarTwo'));
                // 指定图表的配置项和数据
                let option = {
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    legend: {
                        data: ['差值'],
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
                            type: 'value',
                            axisLine: {
                                lineStyle: {
                                    color: '#9B9DA1'
                                }
                            },
                            splitLine: {
                                show: false
                            }
                        }
                    ],
                    yAxis: [
                        {
                            type: 'category',
                            name: '日期',
                            axisTick: {
                                show: false
                            },
                            data: ['1月1日', '1月2日', '1月3日', '1月4日', '1月5日', '1月6日', '1月7日'],
                            axisLabel: {
                                formatter: '{value}'
                            },
                            splitLine: {
                                show: false
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
                            name: '差值',
                            type: 'bar',
                            data: [320, -120, 341, -132, 390, -134, 420],
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
                        axisPointer: {
                            type: 'cross',
                            label: {
                                backgroundColor: '#999'
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
                            name: '亿立方',
                            type: 'value',
                            axisLine: {
                                lineStyle: {
                                    color: '#9B9DA1'
                                }
                            }
                        },
                        {
                            name: '%',
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
                            name: '天然气日产量',
                            type: 'line',
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
                            areaStyle: {
                                color: 'rgba(27,202,201,0.1)'
                            },
                            data: [120, 132, 101, 134, 90, 230, 210, 120, 132, 101, 134, 90]
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
                            data: [220, 182, 191, 234, 290, 330, 310, 220, 182, 191, 234, 290]
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

<style scoped>
    .map {
        width: 100%;
        height: auto;
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
    }

    .scFristqh /deep/ .el-tabs__header {
        margin: 0;
    }

    .scFristqh /deep/ .el-tabs__active-bar, .scFristqh /deep/ .el-tabs__nav-wrap::after {
        display: none;
    }
    .scFristqh /deep/ .el-tabs__nav-scroll{
        height: 31px;
    }

    #supplyPieOne {
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

    .map-box {
        position: relative;
    }

    .map-layer {
        position: absolute;
        width: 145px;
        height: 88px;
        background-image: url(../../assets/img/oilgas/gongyinglayer.png);
        top: 130px;
        left: 40px;
        padding: 15px 15px 15px 23px;
    }

    .map-layer .des {
        font-size: 10px;
        color: #fff;
        font-weight: bold;
    }
</style>
