<template>
    <div class="child1">
        <div id="confess_content" style="background-color: #dadbdb">

            <!-- banner -->
            <img class="map" @click="hidePos"
                 src="../../assets/img/地图.png"
                 alt="图片未显示"/>
            <ul
                    :style="{'left':be_click_left(0),'top':be_click_top(0.41),width:be_click_left(0.85)}"
                    style="position:absolute;font-size: 0.12rem;clear: both"
            >
                <li v-for="(item) in bannerData" class="list-item">{{item.label}}:{{item.value}}</li>
            </ul>
            <!--地图定位-->
            <div>
                <img :src="item.src" alt="图片未显示" v-for="(item,index) in posList" :class="item.cls"
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
                <div>管道名称：{{item.name}}</div>
                <div>起点：{{item.one}}</div>
                <div>终点：{{item.two}}</div>
                <div>总里程：{{item.three}}公里</div>
                <div>输送介质：{{item.four}}</div>
                <div>{{item.five}}</div>
                <div>{{item.six}}</div>
                <div>管存量：{{item.seven}}</div>
            </div>
            <!-- 原油日进油量 -->
            <div class="chart module" v-show="oilShow">
                <h4>原油日进油量</h4>
                <div class="chart-item">
                    <div id="echartsNine" style="width: 100%;height: 239px"></div>
                </div>
            </div>
            <div style="background-color: #fff;padding-top: 18px;margin-top: 6px;" v-show="gasShow">
                <div class="scFristqh tabNew">
                    <el-tabs v-model="activeNamePie" @tab-click="handlePieClick">
                        <el-tab-pane label="天然气日进气量" name="1"></el-tab-pane>
                        <el-tab-pane label="天然气日出气量" name="2" :laze="true"></el-tab-pane>
                        <el-tab-pane label="天然气日管存量" name="3" :laze="true"></el-tab-pane>
                    </el-tabs>
                </div>
                <div class="tabs-content">

                    <div v-show="activeNamePie==='1'">
                        <div id="echartsTen" style="width: 100%;height: 239px"></div>
                    </div>
                    <div v-show="activeNamePie==='2'">
                        <div id="echartsEleven" style="width: 100%;height: 239px"></div>

                    </div>
                    <div v-show="activeNamePie==='3'">
                        <div id="echartsEle" style="width: 100%;height: 239px"></div>
                    </div>
                </div>
            </div>
            <!--<div class="chart module" v-show="gasShow">-->
            <!--<h4>天然气日管存量</h4>-->
            <!--<div class="chart-item">-->
            <!--<div id="echartsEle" style="width: 100%;height: 239px"></div>-->
            <!--</div>-->
            <!--</div>-->
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
                activeNamePie: '1',
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
                    },
                    {
                        left: '0.319',
                        top: '1.01',
                    },
                    {
                        left: '0.409',
                        top: '1.06',
                    },
                    {
                        left: '0.549',
                        top: '0.79',
                    },
                    {
                        left: '0.649',
                        top: '0.54',
                    },
                    {
                        left: '0.829',
                        top: '0.44',
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
                    },
                    {
                        left: '0.339',
                        top: '0.941',
                    },
                    {
                        left: '0.519',
                        top: '0.961',
                    },
                    {
                        left: '0.649',
                        top: '0.76',
                    },
                    {
                        left: '0.719',
                        top: '0.51',
                    },
                    {
                        left: '0.889',
                        top: '0.52',
                    }
                ],
                posList: [
                    {
                        left: '0.303',
                        top: '0.969',
                        src: require('../../assets/img/长庆气田-乌海-临河天然气管道.png'),
                        cls: 'imgS'
                    },
                    {
                        left: '0.354',
                        top: '1.03',
                        src: require('../../assets/img/苏东准管道.png'),
                        cls: 'imgS'
                    },
                    {
                        left: '0.386',
                        top: '1.01',
                        src: require('../../assets/img/长呼复.png'),
                        cls: 'imgS'
                    },
                    {
                        left: '0.412',
                        top: '0.998',
                        src: require('../../assets/img/长庆气田—呼和浩特天然气管道.png'),
                        cls: 'imgS'
                    },
                    {
                        left: '0.312',
                        top: '0.986',
                        src: require('../../assets/img/长庆输油气银巴线.png'),
                        cls: 'imgS1'
                    },
                    {
                        left: '0.432',
                        top: '0.986',
                        src: require('../../assets/img/5-长呼线（原油）.png'),
                        cls: 'imgS'
                    },
                    {
                        left: '0.562',
                        top: '0.796',
                        src: require('../../assets/img/阿尔善—赛汉塔拉原油.png'),
                        cls: 'imgS'
                    },
                    {
                        left: '0.662',
                        top: '0.536',
                        src: require('../../assets/img/11-呼伦贝尔油田原油管道-从下往上流.png'),
                        cls: 'imgS3'
                    },
                    {
                        left: '0.842',
                        top: '0.466',
                        src: require('../../assets/img/1-漠大线（原油管线）.png'),
                        cls: 'imgS3'
                    }
                ],//地图弹窗位置
                desList: [
                    {
                        left: '0.143',
                        top: '0.562',
                        name: '长庆气田-乌海-临河输气管道',
                        one: '鄂尔多斯市乌审旗掏利首站',
                        two: '巴彦淖尔市临河区末站',
                        three: '480',
                        four: '天然气',
                        five: '昨日进气量：790万立方米',
                        six: '昨日出气量：790万立方米',
                        seven: '150万立方米'
                    },
                    {
                        left: '0.143',
                        top: '0.562',
                        name: '苏-东-淮天然气管道',
                        one: '鄂尔多斯市乌审旗掏利首站',
                        two: '巴彦淖尔市临河区末站',
                        three: '320',
                        four: '天然气',
                        five: '昨日进气量：1500万立方米',
                        six: '昨日出气量：1500万立方米',
                        seven: '180万立方米'
                    },
                    {
                        left: '0.143',
                        top: '0.562',
                        name: '长庆气田-呼和浩特天然气管道复线',
                        one: '鄂尔多斯市乌审旗掏利首站',
                        two: '巴彦淖尔市临河区末站',
                        three: '500',
                        four: '天然气',
                        five: '昨日进气量：1500万立方米',
                        six: '昨日出气量：1500万立方米',
                        seven: '2100万立方米'
                    },
                    {
                        left: '0.143',
                        top: '0.562',
                        name: '长庆气田-呼和浩特天然气输气管道',
                        one: '鄂尔多斯市乌审旗掏利首站',
                        two: '巴彦淖尔市临河区末站',
                        three: '490',
                        four: '天然气',
                        five: '昨日进气量：780万立方米',
                        six: '昨日出气量：780万立方米',
                        seven: '1500万立方米'
                    },
                    {
                        left: '0.143',
                        top: '0.562',
                        name: '中俄漠大二线管道',
                        one: '大兴安岭地区漠河首站',
                        two: '大庆市林源末站',
                        three: '955',
                        four: '原油',
                        five: '昨日进油量：89万吨',
                        six: '昨日出油量：89万吨',
                        seven: '85万吨'
                    },
                    {
                        left: '0.083',
                        top: '0.562',
                        name: '长庆气田-呼和浩特石化原油管道',
                        one: '陕西省定边县房庄运行储备库',
                        two: '内蒙古呼和浩特是赛罕区金桥开发去呼和浩特石化炼油厂',
                        three: '561.9',
                        four: '原油',
                        five: '昨日进油量：92万吨',
                        six: '昨日出油量：90万吨',
                        seven: '88万吨'
                    },
                    {
                        left: '0.053',
                        top: '0.562',
                        name: '阿尔善-赛罕塔拉原油管道',
                        one: '鄂尔多斯市乌审旗掏利首站',
                        two: '巴彦淖尔市临河区末站',
                        three: '361.6',
                        four: '原油',
                        five: '昨日进油量：100万吨',
                        six: '昨日出油量：100万吨',
                        seven: '86万吨'
                    },
                    {
                        left: '0.143',
                        top: '0.562',
                        name: '呼伦贝尔油田原油管道',
                        one: '鄂尔多斯市乌审旗掏利首站',
                        two: '巴彦淖尔市临河区末站',
                        three: '934.9',
                        four: '原油',
                        five: '昨日进油量：80万吨',
                        six: '昨日出油量：70万吨',
                        seven: '56万吨'
                    },
                    {
                        left: '0.143',
                        top: '0.562',
                        name: '中俄漠大线管道',
                        one: '鄂尔多斯市乌审旗掏利首站',
                        two: '巴彦淖尔市临河区末站',
                        three: '280',
                        four: '原油',
                        five: '昨日进油量：90万吨',
                        six: '昨日出油量：90万吨',
                        seven: '88万吨'
                    }


                ],//地图上方信息展示
                screenWidth: document.body.clientWidth, // 屏幕宽
                bannerData: [
                    {
                        label: "累计管输量",
                        value: '7000万吨'
                    },
                    {
                        label: "昨日进油量",
                        value: '89万吨'
                    },
                    {
                        label: "累计管输量",
                        value: "200亿立方米"
                    },
                    {
                        label: "昨日进气量",
                        value: "1.77亿立方米"
                    },
                ],
                selected_one: 0,
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
                showFlag: false,
                oilShow: true,
                gasShow: true
            };
        },
        mounted() {
            this.YunShu_One("echartsNine", this.oneseries[0]);
            this.YunShu_Two('echartsTen', this.twoseries[0]);
            // this.YunShu_Four('echartsEle',this.fourseries[0])
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
                            rotate: 50
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
                    grid: {
                        left: '15%'
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
                    grid: {
                        left: '15%'
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
                            rotate: 50
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
                    grid: {
                        left: '15%'
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
                            rotate: 50
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
                    grid: {
                        left: '15%'
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
                            rotate: 50
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
                if (index >= 4) {
                    this.oilShow = true;
                    this.gasShow = false;
                    this.YunShu_One("echartsNine", this.oneseries[index - 4]);
                } else {
                    this.oilShow = false;
                    this.gasShow = true;
                    this.YunShu_Two('echartsTen', this.twoseries[index + 1]);
                    if (this.activeNamePie == 2) {
                        this.YunShu_Three('echartsEleven', this.threeseries[index + 1])
                    }
                    if (this.activeNamePie == 3) {
                        this.YunShu_Four('echartsEle', this.fourseries[index + 1])
                    }
                }
            },
            hidePos() {
                this.activeIndex = -1;
                this.oilShow = true;
                this.gasShow = true;
                this.YunShu_One("echartsNine", this.oneseries[0]);
                this.YunShu_Two('echartsTen', this.twoseries[0]);
                if (this.activeNamePie == 2) {
                    this.YunShu_Three('echartsEleven', this.threeseries[0])
                }
                if (this.activeNamePie == 3) {
                    this.YunShu_Four('echartsEle', this.fourseries[0])
                }

            },
            handlePieClick(tab) {
                if (tab.index == 1) {
                    this.$nextTick(() => {
                        this.YunShu_Three('echartsEleven', this.threeseries[0])
                    })
                }
                if (tab.index == 2) {
                    this.$nextTick(() => {
                        this.YunShu_Four('echartsEle', this.fourseries[0])
                    })
                }
            }
        }

    };
</script>

<style lang="scss" scoped>
    .child1 {
        .lay-content {
            border: 1px solid rgba(37, 54, 104, 0.6);
            position: absolute;
            font-size: 0.12rem;
            border-radius: 0.04rem;
            background-color: rgba(37, 54, 104, 0.5);;
            color: #fff;
        }
        .list-item {
            float: left;
        }
        .list-item:nth-child(1):after, .list-item:nth-child(3):after {
            content: '';
            height: 10px;
            width: 2px;
            border: 1px solid #40a9ff;
            margin: 0 5px;
        }
        .map {
            margin-top: 93px;
            /*height: 309px;*/
            width: 100%;
            /* background-size: cover;
             background: url(../../assets/img/oilgas/shenchan.png) no-repeat;*/
        }
        .map2 {
            left: 125px;
            top: 175px;
            width: 168.5px;
            height: 188px;
            position: absolute;
            z-index: 0;
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
        .scFristqh.tabNew /deep/ .el-tabs__item {
            /* color: #236BD7;
             font-size: 13px;
             height: 28px;
             line-height: 28px;
             width: 170px;
             text-align: center;
             padding: 0;
             border-radius: 3px;*/
            width: 114px;
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

        .scFristqh.tabNew /deep/ .el-tabs__item.is-active {
            /*background-color: #236BD7;
            color: #fff;*/
            width: 114px;
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
        }

    }

    #confess_content {
        .imgS {
            position: absolute;
            width: 10%;
        }
        .imgS1 {
            position: absolute;
            width: 5%;
        }
        .imgS2 {
            position: absolute;
            width: 12%;
        }
        .imgS3 {
            position: absolute;
            width: 7%;
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
