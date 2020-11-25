<template>
    <div class="child1" style="background-color: #E6E8EC;">
        <img
                class="map"
                src="../../assets/img/oilgas/shenchan.png"
        />
        <!--地图定位-->
        <div>
            <div class="clickbtn" v-for="(item,index) in posList"
                 :style="{'left':be_click_left(item.left),'top':be_click_top(item.top)}"
                 @click="changePie(index)"
            ></div>
        </div>
        <!--地图上展示信息-->
        <div class="lay-content"
             v-for="(item,index) in desList"
             v-show="showAll||index==desIndex"
             :style="{'left':be_click_left(item.left),'top':be_click_top(item.top)}">
            <div>{{item.name}}</div>
            <div>气田个数：{{item.num}}</div>
            <div>上月产量：{{item.pro}}万立方米</div>
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

                <div v-show="activeNamePie==='1'">
                    <div class="fontSize_div">
                        <div class="fontSize">{{pie}}</div>
                        <div class="fontSize" style="font-size: 14px">亿立方米</div>
                    </div>
                    <div id="PieOne" style="width:100%;height:240px;" ></div>
                </div>
                <div v-show="activeNamePie==='2'">
                    <div class="fontSize_div">
                        <div class="fontSize">20</div>
                        <div class="fontSize" style="font-size: 14px">亿立方米</div>
                    </div>
                    <div id="PieTwo" style="width:100%;height:240px;" ref="second"></div>

                </div>
            </div>
        </div>
        <!--柱状图-->
        <div style="background-color: #fff;padding-top: 18px">
            <div class="scFristqh">
                <el-tabs v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane label="天然气月产量分析" name="1"></el-tab-pane>
                    <el-tab-pane label="天然气产量与储量关联分析" name="2" :laze="true"></el-tab-pane>
                </el-tabs>
            </div>
            <div class="tabs-content">
                <div id="barOne" style="width:100%;height:240px;" v-show="activeName==='1'"></div>
                <div id="barTwo" style="width:100%;height:240px;" v-show="activeName==='2'" ref="second"></div>
            </div>
        </div>
        <div style="background-color: #fff;padding-top: 18px;margin-top: 6px;">
            <div class="title">
                天然气月产量预测分析
            </div>
            <div class="content">
                <div id="line" style="width: 100%;height: 240px"></div>
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
                    //苏里格气田区域
                    {
                        left: '0.444',
                        top: '1.021'
                    },
                    {
                        left: '0.496',
                        top: '0.810'
                    },
                    {
                        left: '0.664',
                        top: '0.751'
                    },
                    {
                        left: '0.764',
                        top: '0.515'
                    }
                ],//地图弹窗位置
                desList: [
                    {
                        left: '0.143',
                        top: '0.882',
                        name: '苏里格气田区域',
                        num: '5',
                        pro: '11900'
                    },
                    {
                        left: '0.198',
                        top: '0.629',
                        name: '包尔气田区域',
                        num: '1',
                        pro: '560'
                    },
                    {
                        left: '0.588',
                        top: '0.798',
                        name: '二连气田区域',
                        num: '2',
                        pro: '700'
                    },
                    {
                        left: '0.458',
                        top: '0.418',
                        name: '海拉尔气田区域',
                        num: '2',
                        pro: '840'
                    }
                ],//地图上方信息展示
                activeName: '1',
                activeNamePie: '1',
                screenWidth: document.body.clientWidth, // 屏幕宽
                screenLeft: "",
                show: 0, //控制弹窗显示
                closeLeft: 0, //关闭按钮居中
                //气田图例
                lengendGas: [
                    ['苏里格气区', '包尔气区', '二连气区', '海拉尔气区'],
                    ['苏格里气田', '大牛地气田', '胜利井气田', '靖边气田', '乌审旗气田'],
                    ['包尔气田'],
                    ['哈达图气田', '宝力格气田'],
                    ['贝尔气田', '苏仁诺尔气田']
                ],
                dataGas: [
                    [
                        {
                            value: 0.34,
                            name: '苏里格气区'
                        },
                        {
                            value: 0.02,
                            name: '包尔气区'
                        },
                        {
                            value: 0.02,
                            name: '二连气区'
                        },
                        {
                            value: 0.4,
                            name: '海拉尔气区'
                        }
                    ],
                    [
                        {
                            value: 1122,
                            name: '苏格里气田'
                        },
                        {
                            value: 673,
                            name: '大牛地'
                        },
                        {
                            value: 1571,
                            name: '胜利井气田'
                        },
                        {
                            value: 1122,
                            name: '靖边气田'
                        },

                        {
                            value: 1122,
                            name: '乌审旗气田'
                        },

                    ],
                    [
                        {
                            value: 264,
                            name: '包尔气田'
                        }

                    ],
                    [
                        {
                            value: 230,
                            name: '哈达图气田'
                        },
                        {
                            value: 100,
                            name: '宝力格气田'
                        }

                    ],
                    [
                        {
                            value: 213,
                            name: '贝尔气田'
                        },
                        {
                            value: 183,
                            name: '苏仁诺尔气田'
                        }

                    ]
                ],
                pie_num: [1.3, 0.56, 0.03, 0.03, 0.03],
                pie: 1.3,
                showAll:true,
                desIndex:null
            };
        },
        mounted() {
            //天然气月产量分析
            this.drawBarOne();
            this.drawPie(this.lengendGas[0], '万立方米', this.dataGas[0], this.pie_num[0]);
            this.drawLine()

        },
        methods: {
            // 用于点击的div块绑定函数
            be_click_left(a) {
                return this.screenWidth * a + 'px'
            },
            be_click_top(a) {
                return 314.5 * a + 'px'
            },
            //天然气月产量分析柱状图
            drawBarOne() {
                let myChart = this.$echarts.init(document.getElementById('barOne'));
                // 指定图表的配置项和数据
                myChart.setOption({
                    tooltip: {
                        trigger: "axis",
                        formatter: '{a0}{b0}: {c0}亿立方米<br /> {a1}{b1}: {c1}亿立方米<br /> {a2}{b2}: {c2}%',
                        axisPointer: {
                            type: "cross",
                            crossStyle: {
                                color: "#999",
                            },
                        },
                    },
                    legend: {
                        data: ['计划月产量', '实际月产量', '同比变化']
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
                            name: "亿立方米",
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
                            max: 30,
                            interval: 10,
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
                            name: "计划月产量",
                            type: "bar",
                            barWidth: 6,
                            itemStyle: {
                                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {offset: 0, color: "#63edd4"},
                                    {offset: 1, color: "rgba(14, 137, 238, 1)"},
                                ]),
                            },
                            data: [3, 4, 6, 7, 8, 7, 5, 6, 4, 7, 8, 7],
                        },
                        {
                            name: "实际月产量",
                            type: "bar",
                            barWidth: 6,
                            itemStyle: {
                                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {offset: 0, color: "#FFE6A3"},
                                    {offset: 1, color: "#FF8B2E"},
                                ]),
                            },
                            data: [8, 10, 14, 11, 13, 17, 8, 11, 13, 12, 13, 12],
                        },
                        {
                            name: "同比变化",
                            type: "line",
                            itemStyle: {
                                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {offset: 0, color: "#BB5FF0"},
                                    {offset: 1, color: "#BB5FF0"},
                                ]),
                            },
                            yAxisIndex: 1,
                            data: [20, 15, -13, -12, -11, -4, 5, 8, 12, -1, 6, 8],
                        }
                    ],
                });
            },
            //天然气产量与储量关联分析
            drawBarTwo() {
                let myChart = this.$echarts.init(document.getElementById('barTwo'));
                // 指定图表的配置项和数据
                let option = {
                    tooltip: {
                        trigger: 'axis',
                        formatter: '{a0}{b0}: {c0}亿立方米<br /> {a1}{b1}: {c1}亿立方米',
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
                            name: '亿立方米',
                            min: 0,
                            interval: 20,
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
                            name: '天然气月产量',
                            type: 'bar',
                            barWidth: 10,
                            data: [10, 20, 30, 80, 60, 70, 60, 50, 40, 30, 35, 40],
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
                            data: [60, 55, 62, 64, 68, 72, 66, 64, 68, 71, 73, 71],
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
            drawPie(lengendData, unit, seriesData, pie_num) {
                let myChart = this.$echarts.init(document.getElementById('PieOne'));
                let option = {
                    tooltip: {
                        trigger: "item",
                        formatter: "{a} <br/>{b}: {c}" + unit + " ({d}%)"
                    },
                    legend: {
                        orient: "horizontal",
                        bottom: 10,
                        left: "center",
                        itemGap: 10,
                        data: lengendData,
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
                            data: seriesData,
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
                this.pie = pie_num

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
                        orient: "horizontal",
                        bottom: 10,
                        left: "center",
                        itemGap: 10,
                        data: ["中石油", "中石化"],
                        itemWidth: 15,
                        itemHeight: 10
                    },
                    series: [
                        {
                            name: "天然气月产量企业分布",
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
                            // return params[0].name + '</br>' + params[0].seriesName + ':' + params[0].value + '亿立方米' + '</br>' +
                            //     params[1].seriesName + ':' +
                            //     params[1].value + '亿立方米'
                            if (params.length && params.length > 1) {
                                return params[0].name + '</br>' + params[0].seriesName + ':' + params[0].value + '亿立方米' + '</br>' +
                                    params[1].seriesName + ':' +
                                    params[1].value + '亿立方米'
                            } else if (params.length === 1) {
                                return params[0].name + '</br>' + params[0].seriesName + ':' + params[0].value + '亿立方米'
                            }
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
                            name: '亿立方米',
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
            },
            //点击地图上的点进行切换
            changePie(index) {
                if(this.desIndex ==index ){
                    this.showAll=true;
                    this.desIndex=null;
                    this.drawPie(this.lengendGas[0], '万立方米', this.dataGas[0], this.pie_num[0]);
                }else{
                    this.desIndex=index;
                    this.showAll=false;
                    this.drawPie(this.lengendGas[index + 1], '万立方米', this.dataGas[index + 1], this.pie_num[index + 1]);
                }

            }
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
            width: 13px;
            height: 13px;
            position: absolute;
            z-index: 2;
        }

    }

</style>
