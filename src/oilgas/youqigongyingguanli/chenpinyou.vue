<template>
    <div class="child2" style="background-color: #E6E8EC;">
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
                 <div>人数：{{item.num}}人</div>
                 <div>12月汽油供应量：{{item.num1}}万吨</div>
                 <div>12月柴油供应量：{{item.num2}}万吨</div>
                 <div>12月煤油供应量：{{item.num3}}万吨</div>
             </div>

        <div style="background-color: #fff;padding-top: 18px;margin-top: 6px;">
            <div class="scFristqh">
                <el-tabs v-model="activeNamePie" @tab-click="handlePieClick">
                    <el-tab-pane label="成品油月供应量趋势分析" name="1"></el-tab-pane>
                    <el-tab-pane label="成品油调入量和调出量对比分析" name="2" :laze="true"></el-tab-pane>
                </el-tabs>
            </div>
            <div class="tabs-content">

                <div v-show="activeNamePie==='1'">
                    <div id="echartsEleven" style="width:100%;height:240px;"></div>
                </div>
                <div v-show="activeNamePie==='2'">
                    <div id="echartsTwelve" style="width:100%;height:240px;" ref="second"></div>

                </div>
            </div>
        </div>
        <div style="background-color: #fff;padding-top: 18px;margin-top: 6px;">
            <div class="scFristqh">
                <el-tabs v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane label="供油对象结构分析" name="1"></el-tab-pane>
                    <el-tab-pane label="成品油供应地区分析" name="2" :laze="true"></el-tab-pane>
                </el-tabs>
            </div>
            <div class="tabs-content">

                <div v-show="activeName==='1'">
                    <div class="fontSize_div">
                        <div class="fontSize">1010</div>
                        <div class="fontSize" style="font-size: 14px">万吨</div>
                    </div>
                    <div id="echartsThirteenth" style="width:100%;height:240px;"></div>
                </div>
                <div v-show="activeName==='2'">
                    <div class="fontSize_div">
                        <div class="fontSize">1010</div>
                        <div class="fontSize" style="font-size: 14px">万吨</div>
                    </div>
                    <div id="echartsFourteen" style="width:100%;height:240px;" ref="second"></div>

                </div>
            </div>
        </div>
        <div style="background-color: #fff;padding-top: 18px;margin-top: 6px;">
            <div class="scFristqh">
                <el-tabs v-model="active" @tab-click="handleThree">
                    <el-tab-pane label="汽油供应标号结构分析" name="1"></el-tab-pane>
                    <el-tab-pane label="柴油供应标号结构分析" name="2" :laze="true"></el-tab-pane>
                </el-tabs>
            </div>
            <div class="tabs-content">

                <div v-show="active==='1'">
                    <div class="fontSize_div">
                        <div class="fontSize">610</div>
                        <div class="fontSize" style="font-size: 14px">万吨</div>
                    </div>
                    <div id="echarts5" style="width:100%;height:240px;"></div>
                </div>
                <div v-show="active==='2'">
                    <div class="fontSize_div">
                        <div class="fontSize">400</div>
                        <div class="fontSize" style="font-size: 14px">万吨</div>
                    </div>
                    <div id="echarts6" style="width:100%;height:240px;" ref="second"></div>

                </div>
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
                    //呼和浩特
                    {
                        left: '0.49',
                        top: '0.98',
                        src:require('../../assets/img/produce-fx/producelogo.png')
                    }

                ],//地图弹窗位置
                desList: [
                    {
                        left: '0.243',
                        top: '0.612',
                        name: '呼和浩特石化公司',
                        num: '1209',
                        num1: '231',
                        num2: '46',
                        num3: '122'
                    }
                ],//地图上方信息展示
                active:'1',
                activeName: '1',
                activeNamePie: '1',
                screenWidth: document.body.clientWidth, // 屏幕宽
                screenLeft: "",
                pie_num: [1.3, 0.56, 0.03, 0.03, 0.03],
                pie: 1.3,
                showFlag: false,
                desIndex: null,
                pie_PieTwo: 8,
                pieTwo: [196, 176.4, 3.92, 5.88, 9.8],

            };
        },
        mounted() {
            //原油加工量变化趋势
            this.ChenPinYou_One("echartsEleven");
            // 供油对象
            this.GongYouDuiXiangJieGouFenXi_pie("echartsThirteenth");
            // 汽油
            this.qiyou_pie("echarts5");


        },
        methods: {
            // 用于点击的div块绑定函数
            be_click_left(a) {
                return this.screenWidth * a + 'px'
            },
            be_click_top(a) {
                return 314.5 * a + 'px'
            },
            //成品油月供应量趋势分析
            ChenPinYou_One(name, arry) {
                let echarts = require("echarts");
                let myChart = echarts.init(document.getElementById(name));
                myChart.setOption({
                    tooltip: {
                        trigger: "axis",
                        formatter: '{a0}{b0}: {c0}万吨<br /> {a1}{b1}: {c1}万吨<br /> {a2}{b2}: {c2}万吨',
                        axisPointer: {
                            type: "cross",
                            crossStyle: {
                                color: "#999",
                            },
                        },
                    },
                    legend: {
                        data: ['汽油', '柴油', '航油']
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
                                "9月"
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
                            name: "万吨",
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
                            name: "汽油",
                            type: "bar",
                            barWidth: 5,
                            itemStyle: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {offset: 0, color: "#63edd4"},
                                    {offset: 1, color: "rgba(14, 137, 238, 1)"},
                                ]),
                            },
                            data: [3, 3.2, 5.1, 12.2, 5.8, 14.3, 16.3, 9, 5.2],
                        },
                        {
                            name: "柴油",
                            type: "bar",
                            barWidth: 5,
                            itemStyle: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {offset: 0, color: "#FFE6A3"},
                                    {offset: 1, color: "#FF8B2E"},
                                ]),
                            },
                            data: [2, 2.2, 4.1, 11.2, 4.8, 13.3, 15.3, 8, 4.2],
                        },
                        {
                            name: "航油",
                            type: "bar",
                            barWidth: 5,
                            itemStyle: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {offset: 0, color: "#BB5FF0"},
                                    {offset: 1, color: "#BB5FF0"},
                                ]),
                            },
                            data: [2.5, 2.7, 4.6, 11.7, 5.3, 13.8, 15.8, 8.5, 4.7],
                        }
                    ],
                });
            },
            //成品油调入量和调出量
            ChenPinYou_Two(name, arry) {
                let echarts = require("echarts");
                let myChart = echarts.init(document.getElementById(name));
                myChart.setOption({
                    tooltip: {
                        trigger: "axis",
                        formatter: '{a0}{b0}: {c0}万吨<br /> {a1}{b1}: {c1}万吨<br /> {a2}{b2}: {c2}万吨',
                        axisPointer: {
                            type: "cross",
                            crossStyle: {
                                color: "#999",
                            },
                        },
                    },
                    legend: {
                        data: ['区外调入量', '呼炼供应量', '调出量']
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
                            name: "万吨",
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
                            name: "区外调入量",
                            type: "bar",
                            barWidth: 10,
                            stack: '1',
                            itemStyle: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {offset: 0, color: "#63edd4"},
                                    {offset: 1, color: "rgba(14, 137, 238, 1)"},
                                ]),
                            },
                            data: [9, 11, 15, 16, 13, 15, 13, 14, 13, 15],
                        },
                        {
                            name: "呼炼供应量",
                            type: "bar",
                            barWidth: 10,
                            stack: '1',
                            itemStyle: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {offset: 0, color: "#FFE6A3"},
                                    {offset: 1, color: "#FF8B2E"},
                                ]),
                            },
                            data: [11, 13, 12, 17, 13, 16, 13, 12, 12, 18],
                        },
                        {
                            name: "调出量",
                            type: "bar",
                            barWidth: 10,
                            itemStyle: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {offset: 0, color: "#BB5FF0"},
                                    {offset: 1, color: "#BB5FF0"},
                                ]),
                            },
                            data: [4, 5, 2, -7, 5, -5, 2, 9, -5, 3],
                        }
                    ],
                });
            },
            //供油对象结构分析饼图
            GongYouDuiXiangJieGouFenXi_pie(name, arry) {
                let echarts = require("echarts");
                let myChart = echarts.init(document.getElementById(name));
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
                        data: [ "商业","交通", "工业", "农业"],
                        itemWidth: 10,
                        itemHeight: 5,
                        textStyle: {
                            color: "#9FA0A5"
                        },
                    },
                    series: [
                        {
                            name: "供油对象结构分析",
                            type: "pie",
                            radius: ["40%", "55%"],
                            center: ["50%", "40%"],
                            label: {
                                formatter: "{d}%",
                                padding: [0, -10],
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
                                    value: 331,
                                    name: "商业",
                                },
                                {
                                    value: 310,
                                    name: "交通",
                                },
                                {
                                    value: 234,
                                    name: "工业",
                                },
                                {
                                    value: 135,
                                    name: "农业",
                                },

                            ],
                            color: ["#FF6060", "#15E9EC", "#FFD350", "#01A6FF"],
                        },
                    ],
                });
            },
            //成品油供应地区分析
            gongying_pie(name, arry) {
                let echarts = require("echarts");
                let myChart = echarts.init(document.getElementById(name));
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
                        data: [ "呼和浩特","包头", "鄂尔多斯", "其他"],
                        itemWidth: 10,
                        itemHeight: 5,
                        textStyle: {
                            color: "#9FA0A5"
                        },
                    },
                    series: [
                        {
                            name: "成品油供应地区分析",
                            type: "pie",
                            radius: ["40%", "55%"],
                            center: ["50%", "40%"],
                            label: {
                                formatter: "{d}%",
                                padding: [0, -10],
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
                                    value: 200,
                                    name: "呼和浩特",
                                },
                                {
                                    value: 300,
                                    name: "包头",
                                },
                                {
                                    value: 350,
                                    name: "鄂尔多斯",
                                },
                                {
                                    value: 160,
                                    name: "其他",
                                },

                            ],
                            color: ["#FF6060", "#15E9EC", "#FFD350", "#01A6FF"],
                        },
                    ],
                });
            },
            //汽油供应
            qiyou_pie(name, arry) {
                let echarts = require("echarts");
                let myChart = echarts.init(document.getElementById(name));
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
                        data: [ "89#汽油","92#汽油", "95#汽油"],
                        itemWidth: 10,
                        itemHeight: 5,
                        textStyle: {
                            color: "#9FA0A5"
                        },
                    },
                    series: [
                        {
                            name: "汽油供应标号结构",
                            type: "pie",
                            radius: ["40%", "55%"],
                            center: ["50%", "40%"],
                            label: {
                                formatter: "{d}%",
                                padding: [0, -10],
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
                                    value: 160,
                                    name: "89#汽油",
                                },
                                {
                                    value: 190,
                                    name: "92#汽油",
                                },
                                {
                                    value: 260,
                                    name: "95#汽油",
                                }

                            ],
                            color: ["#FF6060", "#15E9EC", "#FFD350", "#01A6FF"],
                        },
                    ],
                });
            },
            //柴油供应
            chaiyou_pie(name, arry) {
                let echarts = require("echarts");
                let myChart = echarts.init(document.getElementById(name));
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
                        data: [ "-35#柴油","-20#柴油", "0#柴油"],
                        itemWidth: 10,
                        itemHeight: 5,
                        textStyle: {
                            color: "#9FA0A5"
                        },
                    },
                    series: [
                        {
                            name: "柴油供应标号结构分析",
                            type: "pie",
                            radius: ["40%", "55%"],
                            center: ["50%", "40%"],
                            label: {
                                formatter: "{d}%",
                                padding: [0, -10],
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
                                    name: "-35#柴油",
                                },
                                {
                                    value: 100,
                                    name: "-20#柴油",
                                },
                                {
                                    value: 210,
                                    name: "0#柴油",
                                }

                            ],
                            color: ["#FF6060", "#15E9EC", "#FFD350", "#01A6FF"],
                        },
                    ],
                });
            },

            // 成品油产量变化趋势切换
            handlePieClick(tab, event) {
                this.$nextTick(() => {
                    this.ChenPinYou_Two("echartsTwelve")
                });
            },
            //供油对象结构分析tab切换
            handleClick(){
                this.$nextTick(() => {
                    this.gongying_pie("echartsFourteen");
                });
            },
            //汽油
            handleThree(){
                this.$nextTick(() => {
                    this.chaiyou_pie("echarts6");
                });
            },

            //点击地图上的点进行切换
            showDes(index) {
                if (this.desIndex == index) {
                    if (this.$refs[`list${index}`][0].style.display == 'none') {
                        this.showFlag = true;
                        this.desIndex = index;
                    } else {
                        this.showFlag = false;
                        this.desIndex = null;
                    }
                } else {
                    this.desIndex = index;
                    this.showFlag = true;
                }


            },
        }
    }
</script>

<style scoped lang="scss">
    .child2 {
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
