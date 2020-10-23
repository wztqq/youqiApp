<template>
    <div class="child1" style="background-color: #E6E8EC;">
        <div :class="[{tanchuang:true},{tanchuang_one: show}]">
            <div style="width: 100%;height: 100%;overflow: auto;margin: 50px auto">
                <div class="table-title">鄂尔多斯</div>
                <table class="table_one_t">
                    <tr>
                        <th v-for="(th,index) in tableTh" :key="index">{{th}}</th>
                    </tr>
                    <tr v-for="(tr,index) in listData" :key="index">
                        <td v-for="(td,index) in tr" :key="index">{{td}}</td>
                    </tr>
                </table>
            </div>
            <img
                    id="close"
                    :style="{'left':closeLeft}"
                    src="../../assets/img/industryAnalysis/关闭.png"
                    alt="图片未显示"
                    @click="tanchuangClose()"
            />
        </div>
        <img
                @click.prevent="tanchuangShow()"
                class="map"
                src="../../assets/img/oilgas/shenchan.png"
        />
        <!--柱状图-->
        <div style="background-color: #fff;padding-top: 18px">
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
                screenWidth: document.body.clientWidth, // 屏幕宽
                screenLeft: "",
                show: 0, //控制弹窗显示
                closeLeft: 0, //关闭按钮居中
                tableTh: [
                    "名称",
                    "企业人数",
                    "面积",
                    "经纬度",
                    "远景资源量",
                    "预测资源量",
                    "控制储量",
                    "探明储量"
                ],
                listData: [
                    {
                        name: "苏里格气田",
                        leaguerea: "2000",
                        area: "5.5万平方公里",
                        latitude: "43°23′10″~45°24′27″",
                        vision: "3256",
                        prediction: "1456",
                        control: "1300",
                        proved: "1200"
                    },
                    {
                        name: "大牛地气田",
                        leaguerea: "1300",
                        area: "4314.12平方公里",
                        latitude: "41°10′10″~43°24′10″",
                        vision: "2687",
                        prediction: "1856",
                        control: "1399",
                        proved: "780"
                    },
                    {
                        name: "靖边气田",
                        leaguerea: "1300",
                        area: "5万平方公里",
                        latitude: "46°16′10″~46°24′15″",
                        vision: "3100",
                        prediction: "2756",
                        control: "2678",
                        proved: "2670"
                    },
                    {
                        name: "胜利井气田",
                        leaguerea: "2100",
                        area: "432平方公里",
                        latitude: "43°17′10″~45°24′15″",
                        vision: "2890",
                        prediction: "1956",
                        control: "1780",
                        proved: "870"
                    },
                    {
                        name: "乌审旗气田",
                        leaguerea: "1980",
                        area: "234平方公里",
                        latitude: "44°17′10″~40°24′15″",
                        vision: "3200",
                        prediction: "2056",
                        control: "1890",
                        proved: "960"
                    }
                ]
            };
        },
        mounted() {
            //天然气月产量分析
            this.drawBarOne();
            this.drawPie();
            this.drawLine()

        },
        methods: {
            //取消图片默认样式
            tanchuangShow() {
                this.show = 1;
                this.$nextTick(function () {
                    this.closeLeft = (this.screenWidth - 35) / 2 + "px";
                });
            },
            tanchuangClose() {
                this.show = 0;
            },
            //天然气月产量分析柱状图
            drawBarOne() {
                let myChart = this.$echarts.init(document.getElementById('barOne'));
                // 指定图表的配置项和数据
                let option = {
                    tooltip: {
                        trigger: 'axis',
                        formatter(params) {
                            return params[0].name + '</br>' + params[0].seriesName + ':' + params[0].value + '亿立方米' + '</br>' +
                                params[1].seriesName + ':' +
                                params[1].value + '%'
                        }
                    },
                    legend: {
                        data: ['天然气月产量', '同比变化'],
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
                        },
                        {
                            type: 'value',
                            name: '%',
                            min: -2,
                            max: 3,
                            interval: 1,
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
                            data: [2.0, 4.9, 7.0, 23.2, 10, 2, 6, 9, 15, 12, 5, 2],
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
                            name: '同比变化',
                            type: 'line',
                            yAxisIndex: 1,
                            smooth: true,
                            data: [-2, 0, 1, 2, -1.5, -2.5, 2.5, 2.3, 2, 3, -3, 3],
                            itemStyle: {
                                color: '#FBAF5D'
                            }
                        }
                    ]
                };


                // 使用刚指定的配置项和数据显示图表。
                myChart.setOption(option);
            },
            //天然气产量与储量关联分析
            drawBarTwo() {
                let myChart = this.$echarts.init(document.getElementById('barTwo'));
                // 指定图表的配置项和数据
                let option = {
                    tooltip: {
                        trigger: 'axis',
                        formatter(params) {
                            return params[0].name + '</br>' + params[0].seriesName + ':' + params[0].value + '亿立方米' + '</br>' +
                                params[1].seriesName + ':' +
                                params[1].value + '亿立方米'
                        }
                    },
                    legend: {
                        data: ['天然气月产量', '储量'],
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
                        },
                        {
                            type: 'value',
                            name: '',
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
                        }
                    ],
                    series: [
                        {
                            name: '天然气月产量',
                            type: 'bar',
                            barWidth: 20,
                            data: [2.0, 4.9, 7.0, 23.2, 10, 2, 6, 9, 15, 12, 5, 2],
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
                            name: '储量',
                            type: 'line',
                            smooth: true,
                            yAxisIndex: 1,
                            data: [20.0, 40.9, 70.0, 230.2, 100, 200, 60, 90, 150, 120, 50, 20],
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
                        formatter: "{a} <br/>{b}: {c}亿立方米 ({d}%)"
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
                                value: 5.7,
                                name: "苏里格气田"
                            },
                                {
                                    value: 2.5,
                                    name: "靖边气田"
                                },
                                {
                                    value: 4.4,
                                    name: "胜利井气田"
                                },
                                {
                                    value: 2.2,
                                    name: "其他"
                                },
                                {
                                    value: 4.8,
                                    name: "大牛地气田"
                                },
                                {
                                    value: 0.4,
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
                        formatter: "{a} <br/>{b}: {c}亿立方米 ({d}%)"
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
                            var p = ((tarValue / total) * 100).toFixed(1);
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
                                value: 17,
                                name: "中石油"
                            },
                                {
                                    value: 3,
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
            handleClick(tab, event) {
                if (tab.index == 1) {
                    this.$nextTick(() => {
                        // 天然气产量与储量关联分析
                        this.drawBarTwo()
                    })
                }

            },
            // 天然气月产量企业分布切换
            handlePieClick(tab, event) {
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
                        formatter(params) {
                            return params[0].name + '</br>' + params[0].seriesName + ':' + params[0].value + '亿立方米' + '</br>' +
                                params[1].seriesName + ':' +
                                params[1].value + '亿立方米'
                        }
                    },
                    legend: {
                        data: ['天然气月产量', '天然气月产量预测值'],
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
                        }
                    ],
                    series: [
                        {
                            name: '天然气月产量',
                            type: 'line',
                            smooth: true,
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
                                    color: 'rgba(249,200,51,0.23)'
                                }, {
                                    offset: 1,
                                    color: 'rgba(249,200,51,0.23)'
                                }])
                            },
                            data: [220, 182, 191, 234, 290, 330, 310, 220, 182, 191, 234, 290]
                        },
                        {
                            name: '天然气月产量预测值',
                            type: 'line',
                            smooth: true,
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
                                    color: 'rgba(30,142,247,0.23)'
                                }, {
                                    offset: 1,
                                    color: 'rgba(30,142,247,0.23)'
                                }])
                            },
                            data: [300, 132, 101, 134, 90, 230, 210, 120, 132, 101, 134, 90]
                        }
                    ]
                };
                // 使用刚指定的配置项和数据显示图表。
                myChart.setOption(option);
            }
        }
    }
</script>

<style scoped lang="scss">
    .child1 {

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

    }

</style>
