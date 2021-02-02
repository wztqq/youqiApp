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
            <div>12月石脑油销售量：{{item.num2}}万吨</div>
            <div>12月柴油销售量：{{item.num3}}万吨</div>
            <div>12月液化气销售量：{{item.num4}}万吨</div>
            <div>12月累计销售量：{{item.num5}}万吨</div>
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
                    <div class="fontSize_div">
                        <div class="fontSize">{{pie_one}}</div>
                        <div class="fontSize" style="font-size: 14px">万吨</div>
                    </div>
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
                        <div class="fontSize">270</div>
                        <div class="fontSize" style="font-size: 14px">万吨</div>
                    </div>
                    <div id="echartsSeventeen" style="width:100%;height:240px;"></div>
                </div>
                <div v-show="activeName==='2'">

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
                        num4: '10',
                        num5: '110'
                    },
                    {
                        left: '0.198',
                        top: '0.629',
                        name: '伊泰煤制油',
                        num2: '80',
                        num3: '40',
                        num4: '10',
                        num5: '130'
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
                tabListOne: ['12月柴油的消费结构分析', '12月石脑油的消费结构分析'],
                tabListTwo: ['12月煤制油产品地区消费分布', '煤油等价曲线'],
                tabListOne_copy: ['12月柴油的消费结构分析', '12月石脑油的消费结构分析'],
                tabListOne_New: ['柴油的消费结构分析', '石脑油的消费结构分析'],
                title: ['神华', '伊泰'],
                seriesOne: [
                    [{
                        one: [2200, 3300, 3700, 2900, 3000, 2500, 3900, 3900, 3800, 4300, 4300, 4430],
                        two: [2000, 3000, 3500, 2500, 2300, 2300, 3300, 3400, 3500, 4000, 4100, 4030],
                        three: [200, 300, 550, 250, 430, 230, 330, 340, 350, 400, 410, 430]
                    }],
                    [{
                        one: [2100, 3200, 3700, 2900, 3000, 2500, 3800, 3900, 3800, 4300, 4300, 4430],
                        two: [2000, 3000, 3500, 2500, 2300, 2300, 3200, 3400, 3500, 4200, 4100, 4030],
                        three: [200, 300, 450, 350, 430, 210, 330, 340, 390, 420, 410, 430]
                    }],
                    [{
                        one: [2200, 3300, 3700, 2900, 3020, 2560, 3900, 3900, 3880, 4300, 4300, 4430],
                        two: [2000, 3000, 3200, 2500, 2300, 2320, 3303, 3460, 3500, 4000, 4100, 4030],
                        three: [270, 320, 570, 220, 430, 230, 330, 340, 350, 400, 410, 430]
                    }]
                ],
                seriesTwo: [
                    [
                        {
                            value: 90,
                            name: "乙醇原料",
                        },
                        {
                            value: 20,
                            name: "调和汽油",
                        },
                        {
                            value: 40,
                            name: "重整原料",
                        },
                    ],
                    [
                        {
                            value: 40,
                            name: "乙醇原料",
                        },
                        {
                            value: 30,
                            name: "调和汽油",
                        },
                        {
                            value: 20,
                            name: "重整原料",
                        },
                    ],
                    [
                        {
                            value: 30,
                            name: "乙醇原料",
                        },
                        {
                            value: 20,
                            name: "调和汽油",
                        },
                        {
                            value: 10,
                            name: "重整原料",
                        },
                    ],
                ],
                pie_one:150,
                pie_oneAry:[150,90,60]


            };
        },
        mounted() {
            this.MeiZhiChaiYouXiaoFeiJieGouFenXi_bar("echartsFifteen", this.seriesOne[0]);
            this.MeiZhiYouChanPinDiQuXiaoFeiFenBu("echartsSeventeen");


        },
        methods: {
            // 用于点击的div块绑定函数
            be_click_left(a) {
                return this.screenWidth * a + 'px'
            },
            be_click_top(a) {
                return 314.5 * a + 'px'
            },
            //煤制柴油消费结构分析
            MeiZhiChaiYouXiaoFeiJieGouFenXi_bar(name, series) {
                let echarts = require("echarts");
                let myChart = echarts.init(document.getElementById(name));
                myChart.setOption({
                    tooltip: {
                        trigger: "axis",
                        formatter(params) {
                            return params[0].name + '</br>' + params[0].seriesName + ':' + params[0].value + '万吨' + '</br>' +
                                params[1].seriesName + ':' +
                                params[1].value + '万吨' + '</br>' +
                                params[2].seriesName + ':' +
                                params[2].value + '万吨'+ '</br>' +
                                    '总量:'+(params[0].value+params[1].value+params[2].value)+'万吨'

                        },
                    },
                    legend: {
                        itemWidth: 10,
                        itemHeight: 5,
                        top: 0,
                        right: 30,
                        itemGap: 20,
                        data: ["工程车辆", "城市交通", "工业"],
                    },
                    grid: {
                        right: '5%',
                        left: '16%',
                    },
                    xAxis: [
                        {
                            type: "category",
                            data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
                            interval: 0,
                            axisPointer: {
                                type: "shadow",
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
                    ],
                    yAxis: [
                        {
                            name: "万吨",
                            type: "value",
                            min: 0,
                            interval: 1000,
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

                    series: [{
                        name: "工业",
                        type: 'bar',
                        itemStyle: {
                            normal: {
                                color: '#7FEC15',
                                barBorderRadius: [20, 20, 20, 20]
                            }
                        },
                        silent: true,
                        barWidth: 10,
                        barGap: '-1',
                        data: series[0].one
                    },
                        {
                            name: "城市交通",
                            type: 'bar',
                            itemStyle: {
                                normal: {
                                    color: '#07EEFF',
                                }
                            },
                            silent: true,
                            barWidth: 10,
                            barGap: '-1',
                            data: series[0].two
                        },
                        {
                            name: "工程车辆",
                            type: 'bar',
                            itemStyle: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {offset: 0, color: "#63edd4"},
                                    {offset: 1, color: "rgba(14, 137, 238, 1)"},
                                ]),
                                // barBorderRadius: [20, 20, 20, 20]
                            },
                            barWidth: 10,
                            data: series[0].three
                        }]
                });
            },
            //煤制石脑油消费结构分析
            MeiZhiShiNaoYouXiaoFeiJieGongFenXi_pie(name, series) {
                let echarts = require("echarts");
                let myChart = echarts.init(document.getElementById(name));
                myChart.setOption({
                    tooltip: {
                        trigger: "item",
                        formatter: "{a} <br/>{b}: {c}万吨 ({d}%)",
                    },
                    legend: {
                        orient: "horizontal",
                        bottom: 30,
                        left: "center",
                        itemGap: 15,
                        data: ["乙醇原料", "调和汽油", "重整原料"],
                        itemWidth: 15,
                        itemHeight: 10,
                    },
                    grid: {
                        bottom: 40,
                    },
                    series: [
                        {
                            name: "煤制石脑油消费结构分析",
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
            //煤制油产品地区消费分布
            MeiZhiYouChanPinDiQuXiaoFeiFenBu(name, arry) {
                var echarts = require("echarts");
                var myChart = echarts.init(document.getElementById(name));
                myChart.setOption({
                    tooltip: {
                        trigger: "item",
                        formatter: "{a} <br/>{b}: {c}万吨 ({d}%)",
                    },
                    legend: {
                        orient: "horizontal",
                        bottom: 10,
                        left: "center",
                        itemGap: 10,
                        data: ["呼和浩特", "乌海", "通辽", "兴安", "包头", "鄂尔多斯"],
                        itemWidth: 15,
                        itemHeight: 10,
                    },
                    series: [
                        {
                            name: "煤制油产品地区消费分布",
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
                            data: [
                                {
                                    value: 90,
                                    name: "呼和浩特",
                                },
                                {
                                    value: 40,
                                    name: "乌海",
                                },
                                {
                                    value: 40,
                                    name: "通辽",
                                },
                                {
                                    value: 40,
                                    name: "兴安",
                                },
                                {
                                    value: 20,
                                    name: "包头",
                                },
                                {
                                    value: 40,
                                    name: "鄂尔多斯",
                                },
                            ],
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
            //油煤等价曲线
            YouMeiDengJiaQuXian(name, arry) {
                var echarts = require("echarts");
                var myChart = echarts.init(document.getElementById(name));
                myChart.setOption({
                    tooltip: {
                        trigger: "axis",
                        formatter(params) {
                            return params[0].name + '</br>' + params[0].seriesName + ':' + params[0].value + '元/吨标煤' +
                                '</br>' + params[1].seriesName + ':' + params[1].value + '元/吨标煤'
                        }
                    },
                    legend: {
                        data: ["煤价", "油价"],
                        right:'10'
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
                            itemStyle:{
                                color: "#a3ff6f",
                            },
                            data: [12, 8, 15, 20, 19, 7, 16, 18, 15, 6, 12, 14],
                        },
                        {
                            name: "油价",
                            type: "line",
                            symbol: "none",
                            itemStyle:{
                                color: "#ff913e",
                            },
                            data: [11, 12, 19, 20, 17, 9, 15, 15, 13, 16, 13, 15],
                        },
                    ],
                });
            },

            handlePieClick(tab, event) {
                if (tab.index == 1) {
                    if (this.desIndex == null) {
                        this.$nextTick(() => {
                            this.MeiZhiShiNaoYouXiaoFeiJieGongFenXi_pie("echartsSixteen",this.seriesTwo[0]);
                        })

                    } else {
                        this.$nextTick(() => {
                            this.MeiZhiShiNaoYouXiaoFeiJieGongFenXi_pie("echartsSixteen",this.seriesTwo[this.desIndex+1]);
                        })
                    }

                }
            },
            handleClick(tab, event) {
                if (tab.index == 1) {
                    if (this.desIndex == null) {
                        this.$nextTick(() => {
                            this.YouMeiDengJiaQuXian("echartsEighteenth");
                        })

                    } else {
                        this.$nextTick(() => {
                            this.YouMeiDengJiaQuXian("echartsEighteenth");
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
                        this.tabListOne = [this.title[index] + this.tabListOne_New[0], this.title[index] +
                        this.tabListOne_New[1]]
                        this.pie_one=this.pie_oneAry[index+1]
                        this.MeiZhiChaiYouXiaoFeiJieGouFenXi_bar("echartsFifteen", this.seriesOne[index+1]);
                        if(this.activeNamePie==2){
                            this.MeiZhiShiNaoYouXiaoFeiJieGongFenXi_pie("echartsSixteen",this.seriesTwo[index+1]);
                        }


                    } else {

                        this.pie_one = this.pie_oneAry[0]
                        this.tabListOne = this.tabListOne_copy;
                        this.MeiZhiChaiYouXiaoFeiJieGouFenXi_bar("echartsFifteen", this.seriesOne[0]);
                        if(this.activeNamePie==2){
                            this.MeiZhiShiNaoYouXiaoFeiJieGongFenXi_pie("echartsSixteen",this.seriesTwo[0]);
                        }
                        this.showFlag = false;
                        this.desIndex = null;

                    }
                } else {
                    this.desIndex = index;
                    this.showFlag = true;
                    this.tabListOne = [this.title[index] + this.tabListOne_New[0], this.title[index] +
                    this.tabListOne_New[1]]
                    this.pie_one=this.pie_oneAry[index+1]
                    this.MeiZhiChaiYouXiaoFeiJieGouFenXi_bar("echartsFifteen", this.seriesOne[index+1]);
                    if(this.activeNamePie==2){
                        this.MeiZhiShiNaoYouXiaoFeiJieGongFenXi_pie("echartsSixteen",this.seriesTwo[index+1]);
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
