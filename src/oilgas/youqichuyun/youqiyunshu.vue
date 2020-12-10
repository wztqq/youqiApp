<template>
    <div @click="hidePos">
        <div id="confess_content" style="background-color: #dadbdb">

            <!-- banner -->
            <img class="map"
                 src="../../assets/img/地图.png"
                 alt="图片未显示"/>
            <!--地图定位-->
            <div>
                <img :src="item.src" alt="图片未显示" v-for="(item,index) in posList" class="imgS"
                     :style="{'left':be_click_left(item.left),'top':be_click_top(item.top)}"
                     @click.stop="showDes(index)"
                     v-show="activeIndex===-1||activeIndex===index">
            </div>
            <!--起止点位置图标-->
            <div>
                <img src="../../assets/img/begin.gif" class="imgG"
                     v-for="(item,index) in beginList"
                     v-show="activeIndex===index"
                     :style="{'left':be_click_left(item.left),'top':be_click_top(item.top)}"
                >
                <img src="../../assets/img/end.gif" class="imgG"
                     v-for="(item,index) in endList"
                     v-show="activeIndex===index"
                     :style="{'left':be_click_left(item.left),'top':be_click_top(item.top)}"
                >
            </div>
            <!--地图上展示信息-->
            <div class="lay-content"
                 v-for="(item,index) in desList"
                 :ref="`list${index}`"
                 v-show="activeIndex ===index"
                 :style="{'left':be_click_left(item.left),'top':be_click_top(item.top)}">
                <div>{{item.name}}</div>
                <div>总里程：{{item.total}}公里</div>
                <div>区内里程：{{item.inside}}公里</div>
                <div>设计输量：{{item.num}}亿立方米/年</div>
                <div>起止年限：{{item.year}}</div>
                <div>管道末站压力：{{item.pa}}</div>
                <div>管道末站压力阈值：{{item.palimit}}</div>
            </div>
            <!-- 日调峰记录查询 && 调峰结构分析 -->
            <div class="chart table">
                <h4>主要管线运行情况</h4>
                <div id="table">
                    <table class="table_one">
                        <tr>
                            <th :width="th.width" v-for="(th,index) in tableTh_one" :key="index">{{th.value}}</th>
                        </tr>
                        <tr v-for="(tr,index) in listData_one" :key="index">
                            <td v-for="(td,index) in tr" :key="index">{{td}}</td>
                        </tr>
                    </table>
                </div>
            </div>
            <!-- 原油日进油量 -->
            <div class="chart module">
                <h4>原油日进油量</h4>
                <div class="chart-item">
                    <div id="echartsNine" style="width: 100%;height: 239px"></div>
                </div>
            </div>
            <div class="chart module">
                <h4>天然气日进出量</h4>
                <div class="chart-item">
                    <div id="echartsTen" style="width: 100%;height: 239px"></div>
                </div>
            </div>
            <div class="chart module">
                <h4>天然气日出气量</h4>
                <div class="chart-item">
                    <div id="echartsEleven" style="width: 100%;height: 239px"></div>
                </div>
            </div>
            <div class="chart module">
                <h4>天然气日管存量</h4>
                <div class="chart-item">
                    <div id="echartsEle" style="width: 100%;height: 239px"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "qixiao",
        components: {
            dountChart: () => import("@/components/dount_chart"),
            pieChart: () => import("@/components/pie_chart"),
            doublelineChart: () => import("@/components/doubleLine_chart"),
        },
        data() {
            return {
                activeIndex: -1,
                desIndex: null,
                beginList: [
                    {
                        left: '0.374',
                        top: '1.02',
                    },
                    {
                        left: '0.354',
                        top: '1.04',
                    },
                    {
                        left: '0.384',
                        top: '1.06',
                    },
                    {
                        left: '0.409',
                        top: '1.06',
                    }
                ],
                endList: [
                    {
                        left: '0.303',
                        top: '0.941',
                    },
                    {
                        left: '0.43',
                        top: '1.01',
                    },
                    {
                        left: '0.465',
                        top: '0.981',
                    },
                    {
                        left: '0.495',
                        top: '0.961',
                    }
                ],
                posList: [
                    {
                        left: '0.303',
                        top: '0.969',
                        src: require('../../assets/img/长庆气田-乌海-临河天然气管道.png')
                    },
                    {
                        left: '0.354',
                        top: '1.03',
                        src: require('../../assets/img/苏东准管道.png')
                    },
                    {
                        left: '0.386',
                        top: '1.01',
                        src: require('../../assets/img/长呼复.png')
                    },
                    {
                        left: '0.412',
                        top: '0.996',
                        src: require('../../assets/img/长庆气田—呼和浩特天然气管道.png')
                    }
                ],//地图弹窗位置
                desList: [
                    {
                        left: '0.143',
                        top: '0.462',
                        name: '长庆气田-乌海-临河输气管道',
                        total: '4583',
                        inside: '700',
                        num: '6.3',
                        year: '2008年',
                        pa: '1.5Mpa',
                        palimit: '2Mpa'
                    },
                    {
                        left: '0.143',
                        top: '0.462',
                        name: '苏-东-淮天然气管道',
                        total: '4583',
                        inside: '2000',
                        num: '35',
                        year: '2010年',
                        pa: '2Mpa',
                        palimit: '2Mpa'
                    },
                    {
                        left: '0.143',
                        top: '0.462',
                        name: '长庆气田-呼和浩特天然气管道复线',
                        total: '4583',
                        inside: '2000',
                        num: '35',
                        year: '2010年',
                        pa: '2Mpa',
                        palimit: '2Mpa'
                    },
                    {
                        left: '0.143',
                        top: '0.462',
                        name: '长庆气田-呼和浩特天然气输气管道',
                        total: '4583',
                        inside: '1583',
                        num: '17.5',
                        year: '2003年',
                        pa: '2Mpa',
                        palimit: '2Mpa'
                    }

                ],//地图上方信息展示
                screenWidth: document.body.clientWidth, // 屏幕宽
                bannerData: [
                    {
                        label: "总里程(公里)",
                        value: 1114
                    },
                    {
                        label: "区内里程(公里)",
                        value: 27
                    },
                    {
                        label: "输送能力",
                        value: "250亿立方米"
                    },
                    {
                        label: "起止年限",
                        value: "2016-2017"
                    },
                ],
                selected_one: 0,
                tableTh_one: [

                    {
                        value: "管道名称",
                    },
                    {
                        value: "总里程（km）",
                    },

                    {
                        value: "区内里程（km）",
                    },
                    {
                        value: "运送能力（万吨）",
                    },
                    {
                        value: "  管存量（万吨）",
                    }
                ],
                listData_one: [
                    {
                        name: "长庆油田—呼和浩特石化原油管道",
                        rigongying: "561.9",
                        xingzhi: "561.9",
                        faren: "500",
                        kejirenyuan: "500",
                    },
                    {
                        name: "阿尔善—赛罕塔拉原油管道",
                        rigongying: "361.6",
                        xingzhi: "361.6",
                        faren: "105",
                        kejirenyuan: "500",
                    },
                    {
                        name: "苏项联至嵯岗原油管道",
                        rigongying: "650",
                        xingzhi: "650",
                        faren: "620",
                        kejirenyuan: "650",
                    },
                    {
                        name: "中俄原油管道二线",
                        rigongying: "955",
                        xingzhi: "955",
                        faren: "1500",
                        kejirenyuan: "500",
                    },
                    {
                        name: "中俄原油管道（漠大线）",
                        rigongying: "9349",
                        xingzhi: "9349",
                        faren: "1500",
                        kejirenyuan: "500",
                    },
                    {
                        name: "长庆油田-呼和浩特石化原油管道",
                        rigongying: "5619",
                        xingzhi: "5619",
                        faren: "500",
                        kejirenyuan: "500",
                    },
                    {
                        name: "阿尔善—赛罕塔拉原油管道",
                        rigongying: "361.6",
                        xingzhi: "361.6",
                        faren: "105",
                        kejirenyuan: "500",
                    },
                    {
                        name: "苏项联至嵯岗原油管道",
                        rigongying: "650",
                        xingzhi: "650",
                        faren: "620",
                        kejirenyuan: "650",
                    },
                    {
                        name: "中俄原油管道二线",
                        rigongying: "955",
                        xingzhi: "955",
                        faren: "1500",
                        kejirenyuan: "500",
                    },
                ],
                oneseries: [
                    [444, 424, 444, 453, 423, 434, 426, 422, 453, 466, 462, 421, 423, 412, 432],
                    [442, 443, 424, 453, 422, 424, 446, 423, 452, 424, 422, 451, 424, 411, 432],
                    [446, 445, 442, 451, 421, 465, 422, 423, 451, 468, 469, 424, 424, 419, 432],
                    [414, 444, 443, 451, 483, 432, 421, 422, 452, 463, 412, 441, 423, 411, 432],
                    [444, 441, 442, 453, 443, 434, 426, 422, 423, 466, 412, 461, 425, 411, 431],
                    [454, 431, 462, 451, 453, 434, 426, 422, 473, 496, 472, 421, 425, 411, 431]
                ],
                twoseries: [
                    [4442, 4443, 4441, 4532, 4234, 4345, 4267, 4222, 4532, 4662, 4622, 4212, 4234, 4121, 4321],
                    [4422, 4433, 4241, 4532, 4224, 4245, 4467, 4232, 4522, 4242, 4222, 4512, 4244, 4111, 4321],
                    [4462, 4453, 4421, 4512, 4214, 4655, 4227, 4232, 4512, 4682, 4692, 4242, 4224, 4191, 4321],
                    [4142, 4443, 4431, 4512, 4834, 4325, 4217, 4228, 4522, 4632, 4122, 4412, 4234, 4121, 4321],
                    [4442, 4413, 4421, 4531, 4434, 4345, 4267, 4222, 4232, 4662, 4122, 4612, 4254, 4121, 4321]
                ],
                threeseries: [
                    [4462, 4453, 4421, 4512, 4214, 4655, 4227, 4232, 4512, 4682, 4692, 4242, 4224, 4191, 4321],
                    [4142, 4443, 4431, 4512, 4834, 4325, 4217, 4228, 4522, 4632, 4122, 4412, 4234, 4121, 4321],
                    [4442, 4413, 4421, 4531, 4434, 4345, 4267, 4222, 4232, 4662, 4122, 4612, 4254, 4121, 4321],
                    [4442, 4443, 4441, 4532, 4234, 4345, 4267, 4222, 4532, 4662, 4622, 4212, 4234, 4121, 4321],
                    [4422, 4433, 4241, 4532, 4224, 4245, 4467, 4232, 4522, 4242, 4222, 4512, 4244, 4111, 4321]
                ],
                fourseries: [
                    [4422, 4433, 4241, 4532, 4224, 4245, 4467, 4232, 4522, 4242, 4222, 4512, 4244, 4111, 4321],
                    [4462, 4453, 4421, 4512, 4214, 4655, 4227, 4232, 4512, 4682, 4692, 4242, 4224, 4191, 4321],
                    [4442, 4413, 4421, 4531, 4434, 4345, 4267, 4222, 4232, 4662, 4122, 4612, 4254, 4121, 4321],
                    [4442, 4443, 4441, 4532, 4234, 4345, 4267, 4222, 4532, 4662, 4622, 4212, 4234, 4121, 4321],
                    [4142, 4443, 4431, 4512, 4834, 4325, 4217, 4228, 4522, 4632, 4122, 4412, 4234, 4121, 4321]

                ],
                showFlag: false
            };
        },
        mounted() {
            this.YunShu_One("echartsNine",this.oneseries[0]);
            this.YunShu_Two('echartsTen',this.twoseries[0]);
            this.YunShu_Three('echartsEleven',this.threeseries[0])
            this.YunShu_Four('echartsEle',this.fourseries[0])
        },
        methods: {
            YunShu_One(name, series) {
                let echarts = require("echarts");
                let myChart = echarts.init(document.getElementById(name));
                myChart.setOption({
                    tooltip: {
                        trigger: 'axis',
                        formatter: "{a} <br/>{b}: {c}万吨",
                    },
                    xAxis: {
                        name: '日',
                        type: "category",
                        data: ['1月1日', '1月2日', '1月3日', '1月4日', '1月5日', '1月6日', '1月7日', '1月8日', '1月9日', '1月10日',
                            '1月11日', '1月12日',
                            '1月13日',
                            '1月14日',
                            '1月15日'],
                        interval: 0,
                        splitLine: {
                            interval: 1,
                            lineStyle: {
                                color: "yellow",
                            },
                        },
                        axisLabel: {
                            fontSize: 12,
                            rotate:50
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
                    grid:{
                        left:'15%'
                    },
                    yAxis: {
                        name: "万吨",
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
                            name: '原油日进油量',
                            data: series,
                            symbolSize: [0, 0],
                            //控制线条的颜色
                            itemStyle: {
                                normal: {
                                    color: 'rgb(0,136,212)',
                                    borderColor: 'rgba(0,136,212,0.2)',
                                    borderWidth: 12
                                }
                            },
                            type: "line",
                            lineStyle: {
                                color: "blue",
                                width: 1,
                            },
                        },
                    ],
                });
            },
            YunShu_Two(name, series) {
                let echarts = require("echarts");
                let myChart = echarts.init(document.getElementById(name));
                myChart.setOption({
                    tooltip: {
                        trigger: 'axis',
                        formatter: "{a} <br/>{b}: {c}万立方米",
                    },
                    grid:{
                      left:'15%'
                    },
                    xAxis: {
                        name: '日',
                        type: "category",
                        data: ['1月1日', '1月2日', '1月3日', '1月4日', '1月5日', '1月6日', '1月7日', '1月8日', '1月9日', '1月10日',
                            '1月11日', '1月12日',
                            '1月13日',
                            '1月14日',
                            '1月15日'],
                        interval: 0,
                        splitLine: {
                            interval: 1,
                            lineStyle: {
                                color: "yellow",
                            },
                        },
                        axisLabel: {
                            fontSize: 12,
                            rotate:50
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
                        name: '万立方米',
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
                            name: '天然气日进气量',
                            data: series,
                            symbolSize: [0, 0],
                            //控制线条的颜色
                            itemStyle: {
                                normal: {
                                    color: 'rgb(0,136,212)',
                                    borderColor: 'rgba(0,136,212,0.2)',
                                    borderWidth: 12
                                }
                            },
                            type: "line",
                            lineStyle: {
                                color: "#a0d911",
                                width: 1,
                            },
                        },
                    ],
                });
            },
            YunShu_Three(name, series) {
                let echarts = require("echarts");
                let myChart = echarts.init(document.getElementById(name));
                myChart.setOption({
                    tooltip: {
                        trigger: 'axis',
                        formatter: "{a} <br/>{b}: {c}万立方米",
                    },
                    grid:{
                        left:'15%'
                    },
                    xAxis: {
                        name: '日',
                        type: "category",
                        data: ['1月1日', '1月2日', '1月3日', '1月4日', '1月5日', '1月6日', '1月7日', '1月8日', '1月9日', '1月10日',
                            '1月11日', '1月12日',
                            '1月13日',
                            '1月14日',
                            '1月15日'],
                        interval: 0,
                        splitLine: {
                            interval: 1,
                            lineStyle: {
                                color: "yellow",
                            },
                        },
                        axisLabel: {
                            fontSize: 12,
                            rotate:50
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
                        name: '万立方米',
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
                            name: '天然气日出气量',
                            data: series,
                            symbolSize: [0, 0],
                            //控制线条的颜色
                            itemStyle: {
                                normal: {
                                    color: 'rgb(0,136,212)',
                                    borderColor: 'rgba(0,136,212,0.2)',
                                    borderWidth: 12
                                }
                            },
                            type: "line",
                            lineStyle: {
                                color: "#ff7875",
                                width: 1,
                            },
                        },
                    ],
                });
            },
            YunShu_Four(name, series) {
                let echarts = require("echarts");
                let myChart = echarts.init(document.getElementById(name));
                myChart.setOption({
                    tooltip: {
                        trigger: 'axis',
                        formatter: "{a} <br/>{b}: {c}万立方米",
                    },
                    grid:{
                        left:'15%'
                    },
                    xAxis: {
                        name: '日',
                        type: "category",
                        data: ['1月1日', '1月2日', '1月3日', '1月4日', '1月5日', '1月6日', '1月7日', '1月8日', '1月9日', '1月10日',
                            '1月11日', '1月12日',
                            '1月13日',
                            '1月14日',
                            '1月15日'],
                        interval: 0,
                        splitLine: {
                            interval: 1,
                            lineStyle: {
                                color: "yellow",
                            },
                        },
                        axisLabel: {
                            fontSize: 12,
                            rotate:50
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
                        name: '万立方米',
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
                            name: '天然气日管存量',
                            data: series,
                            symbolSize: [0, 0],
                            //控制线条的颜色
                            itemStyle: {
                                normal: {
                                    color: 'rgb(0,136,213)',
                                    borderColor: 'rgba(0,136,213,0.2)',
                                    borderWidth: 12
                                }
                            },
                            type: "line",
                            lineStyle: {
                                color: "green",
                                width: 1,
                            },
                        },
                    ],
                });
            },
            // 用于点击的div块绑定函数
            be_click_left(a) {
                return this.screenWidth * a + 'px'
            },
            be_click_top(a) {
                return 314.5 * a + 'px'
            },
            tabButton_one(index) {
                this.selected_one = index;
            },
            tabButton_two(index) {
                this.selected_two = index;
            },
            showDes(index) {
                this.activeIndex = index;
            },
            hidePos() {
                this.activeIndex = -1;
                this.listData_one = this.listData_flag;
            },
        }

    };
</script>

<style lang="scss" scoped>
    #confess_content {
        .imgS {
            position: absolute;
            width: 10%;
        }
        .imgG {
            width: 2%;
            position: absolute;

        }
        .lay-content {
            border: 1px solid rgba(37, 54, 104, 0.6);
            position: absolute;
            font-size: 0.12rem;
            border-radius: 0.04rem;
            background-color: rgba(37, 54, 104, 0.5);;
            color: #fff;
            width: 3.4rem;
            padding: 0.08rem;
        }
        .clickbtn {
            width: 13px;
            height: 13px;
            position: absolute;
            z-index: 2;
        }

        width: 100%;
        position: relative;
        /* 关于地图内容的调整期 */
        .map {
            width: 100%;
            margin-top: 93px;
            background-color: #dadbdb;
            overflow: hidden;
        }
        .banner {
            width: 240px;
            height: 150px;
            background: url("../../assets/img/gasmap/module_bg.png") no-repeat;
            position: absolute;
            top: 150px;
            left: 15px;
            background-size: cover;
            h4 {
                color: #fff;
                font: bolder 12px MicrosoftYaHei;
                padding-top: 10px;
                text-align: center;
            }
            .main-items {
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
                padding: 5px 15px;
                .item {
                    width: calc(50% - 10px);
                    padding: 5px;
                    margin: 5px;
                    background: #6a7181;
                    background: rgba($color: #6a7181, $alpha: .7);
                    p {
                        color: #fff;
                        line-height: 1.5em;
                        font-size: 12px;
                        text-align: center;
                        font-weight: bold;
                        &.label {
                            color: #8fc8fa;
                            font-size: 9px;
                        }
                    }
                }
            }
        }
        .chart {
            width: 100%;
            height: 289px;
            background-color: white;
            padding: 10px 0;
            position: relative;
            .chart-item {
                height: calc(100% - 25px);
                // width: 100%;
            }
            &.module {
                margin: 10px 0;
                padding: 10px 0 15px;
            }
            &.table {
                height: auto;
            }
            h4 {
                font: 500 13px 微软雅黑;
                color: #394564;
                line-height: 3em;
                padding-left: 15px;
            }
        }
        /* 按钮样式调整 */
        .tab_oil {
            width: 345px;
            height: 31px;
            background-color: white;
            margin: 0px auto;
            border: 1px solid #3a6dda;
            border-radius: 5px;
            .tab_oil_one {
                width: 50%;
                height: 29px;
                font: 12px PingFangSC-Regular;
                color: #3a6dda;
                line-height: 29px;
                float: left;
                position: relative;
                top: 0;
                left: 0;
                text-align: center;
            }
            .tab_oil_two {
                width: 50%;
                height: 29px;
                background-color: #3a6dda;
                font: 12px PingFangSC-Regular;
                color: white;
                line-height: 29px;
                float: left;
                position: relative;
                top: 0;
                left: 0;
                text-align: center;
                border-radius: 4px;
            }
        }
    }

    /* 表格 */
    #table {
        width: calc(100% - 30px);
        background: #fff;
        overflow-x: auto;
        margin: 0 15px;
        .unit {
            text-align: right;
            font-size: 10px;
            padding-top: 10px;
        }
        .table_one {
            font-family: PingFang SC;
            width: 100%;
            border-collapse: collapse;
            margin: 5px auto 20px;
            th, td {
                font-size: 14px;
                border: 1px solid #b9bec9;
                padding: 3px 7px 2px 7px;
                text-align: center;
                vertical-align: middle;
            }

            th {
                background-color: #d8dbde;
            }
        }
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
        top: 75px;
        font: 16px bolder microsoft-yahei;
    }

    .echarts {
        // width: 100%;
        // height: 100%;
        // margin: 20px auto;
        background-image: url("../../assets/img/industryAnalysis/椭圆.png");
        background-repeat: no-repeat;
        background-position: 50% 37%;
        background-size: 65px 65px;
    }
</style>
