<template>
    <div class="child3" style="background-color: #E6E8EC;">
        <div class="map-box">
            <div class="map-content">
                <el-tabs :tab-position="tabPosition">
                    <el-tab-pane label="设施建设情况" class="des"></el-tab-pane>
                    <el-tab-pane label="本年度租赁情况" class="des"></el-tab-pane>
                </el-tabs>
            </div>
            <img
                    class="map"
                    src="../../assets/img/oilgas/chuqi.png"
            />
        </div>
        <div style="background-color: #fff;padding-top: 18px;margin-top: 6px;">
            <div class="title">
                本年度储气能力
            </div>
            <div class="content">
                <div class="fontSize_div">
                    <div class="fontSize">20</div>
                    <div class="fontSize" style="font-size: 14px">亿立方米</div>
                </div>
                <div id="gasPie" style="width: 100%;height: 240px"></div>
            </div>
        </div>
        <!--饼图-->
        <div style="background-color: #fff;padding-top: 18px;margin-top: 6px;">
            <div class="scFristqh">
                <el-tabs v-model="activeNamePie" @tab-click="handlePieClick">
                    <el-tab-pane label="地方政府3天" name="1"></el-tab-pane>
                    <el-tab-pane label="城燃5%" name="2" :laze="true"></el-tab-pane>
                </el-tabs>
            </div>
            <div class="tabs-content">
                <div v-show="activeNamePie==='1'">
                    <div class="fontSize_div">
                        <div class="fontSize">0.508</div>
                        <div class="fontSize" style="font-size: 14px">亿立方米</div>
                    </div>
                    <div id="gasPieTwo" style="width:100%;height:240px;"></div>
                </div>
                <div v-show="activeNamePie==='2'">
                    <div class="fontSize_div">
                        <div class="fontSize">0.854</div>
                        <div class="fontSize" style="font-size: 14px">亿立方米</div>
                    </div>
                    <div id="gasPieThree" style="width:100%;height:240px;"
                         ref="second"></div>
                    <div>
                    </div>
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
                activeNamePie: '1',
                tabPosition:'left'
            };
        },
        mounted() {
            this.drawPie('gasPieTwo');
            this.drawGasPie()

        },
        methods: {
            //本年度储气能力
            drawGasPie() {
                let myChart = this.$echarts.init(document.getElementById('gasPie'));
                let option = {
                    tooltip: {
                        trigger: "item",
                        formatter: "{a} <br/>{b}: {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        right: 0,
                        top: 70,
                        bottom: 20,
                        itemGap: 10,
                        data: ["城燃5%", "地方政府3天"],
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
                            name:'本年度储气能力',
                            type: "pie",
                            radius: ["40%", "55%"],
                            center: ["50%", "40%"],
                            label: {
                                show: false
                            },
                            data: [{
                                value: 6516,
                                name: "城燃5%"
                            },
                                {
                                    value: 1149,
                                    name: "地方政府3天"
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
            //地方政府3天
            drawPie(id) {
                let myChart = this.$echarts.init(document.getElementById(id));
                let option = {
                    tooltip: {
                        trigger: "item",
                        formatter: "{b}: {c} ({d}%)"
                    },
                    legend: {
                        orient: "horizontal",
                        bottom: 10,
                        left: "center",
                        itemGap: 10,
                        data: ["阿拉善盟", "呼和浩特", "锡林格勒", "呼伦贝尔", "鄂尔多斯", "其他"],
                        itemWidth: 15,
                        itemHeight: 10
                    },
                    grid: {
                        bottom: 40
                    },
                    series: [
                        {

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
                                name: "阿拉善盟"
                            },
                                {
                                    value: 900,
                                    name: "呼和浩特"
                                },
                                {
                                    value: 1533.2,
                                    name: "锡林格勒"
                                },
                                {
                                    value: 766.6,
                                    name: "呼伦贝尔"
                                },
                                {
                                    value: 1700,
                                    name: "鄂尔多斯"
                                },
                                {
                                    value: 60,
                                    name: "其他"
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
            // 地方政府3天tab切换
            handlePieClick(tab, event) {
                if (tab.index == 1) {
                    this.$nextTick(() => {
                        this.drawPie('gasPieThree');
                    })
                }

            },
        }
    }
</script>

<style scoped>
    .map {
        height: auto;
        width: 100%;
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

    #gasPieTwo, #gasPieThree {
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
    .child3 .map-box{
        position: relative;
    }
    .child3 .map-box /deep/ .des{
        font-size: 12px;
        color: #7D87A1;
    }
    .child3 .map-content{
        position: absolute;
        background: rgba(248, 251, 254, 0.77);
        border: 1px solid #D6E6F4;
        box-shadow: 0 0 35px 0 rgba(119, 148, 193, 0.45);
        border-radius: 3px;
        top:140px;
        left: 19px;
    }
    .child3 .map-box /deep/ .el-tabs__nav-wrap::after{
        display: none;
    }
    .child3 .map-box /deep/ .el-tabs--left .el-tabs__item.is-left{
        text-align: left;
    }
    .child3 .map-box /deep/ .el-tabs__item.is-active{
        background-color: #e8f2fe;
        color: #7D87A1;
    }
    .child3 .map-box /deep/ .el-tabs--left .el-tabs__header.is-left{
        margin-right: 0;
    }
    .child3 .map-box /deep/ .el-tabs__active-bar{
        display: none;
    }
    .child3 .map-box /deep/ .el-tabs__item{
        color: #7D87A1;
        height: 30px;
        line-height: 30px;
    }
</style>
