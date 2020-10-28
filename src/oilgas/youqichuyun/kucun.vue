<template>
    <div style="position: relative; width: 100%; top: 93px; background-color: #dadbdb">
        <!-- 主要切换按钮 -->
        <div id="tab_button" :style="{left: screenLeft }">
            <span v-for="(item, index) in tablist" :key="index" @click="tabButton(index)"
                  v-bind:class="[{ tab_button_two: index == selected },{ tab_button_one: true },]">{{ item }}</span>
        </div>
        <!-- 油气生产的主要内容 -->
        <div id="produce_content" v-show="a">
            <img class="map" src="../../assets/img/produce-fx/producemap.png" alt="图片未显示"/>
            <!-- 弹窗 -->
            <div class="pagethree_tc" v-show="produce_tc">
                <ul>
                    <li>{{page_c1}}</li>
                    <li>上月汽油库存<span>{{page_c2}}</span>吨</li>
                    <li>上月柴油库存：<span>{{page_c3}}</span>吨</li>
                    <li>上月航煤库存：<span>{{page_c4}}</span>吨</li>
                    <li>上月原油库存：<span>{{page_c5}}</span>吨</li>
                </ul>
            </div>
            <!-- 动态点击切换按钮 -->
            <div class="clickbtn" :style="{'left':be_click_left(0.26),'top':be_click_top(0.7)}"
                 @click.prevent="tanchuang(produce_tc,arry1,1)"></div>
            <div class="clickbtn" :style="{'left':be_click_left(0.35),'top':be_click_top(0.74)}"
                 @click.prevent="tanchuang(produce_tc,arry2,2)"></div>
            <div class="clickbtn" :style="{'left':be_click_left(0.395),'top':be_click_top(0.678)}"
                 @click.prevent="tanchuang(produce_tc,arry3,3)"></div>
            <div class="clickbtn" :style="{'left':be_click_left(0.473),'top':be_click_top(0.621)}"
                 @click.prevent="tanchuang(produce_tc,arry4,4)"></div>
            <div class="clickbtn" :style="{'left':be_click_left(0.77),'top':be_click_top(0.226)}"
                 @click.prevent="tanchuang(produce_tc,arry5,5)"></div>
            <div class="clickbtn" :style="{'left':be_click_left(0.627),'top':be_click_top(0.546)}"
                 @click.prevent="tanchuang(produce_tc,arry6,6)"></div>
            <div class="chart">
                <div class="tab_oil">
                    <span v-for="(item, index) in tablist_one" :key="index" @click="tabButton_one(index)"
                          v-bind:class="[{ tab_oil_two: index == selected_one },{ tab_oil_one: true },]">{{ item }}</span>
                </div>
                <div class="echarts" id="echartsOne" v-show="i1"></div>
                <div class="echarts" id="echartsTwo" v-show="i2"></div>
            </div>
            <!-- 第二个切换按钮 -->
            <div class="chart">
                <div class="tab_oil">
                    <span v-for="(item, index) in tablist_two" :key="index" @click="tabButton_two(index)"
                          v-bind:class="[{ tab_oil_two: index == selected_two },{ tab_oil_one: true },]">{{ item }}</span>
                </div>

                <div class="echarts" id="echartsThree" v-show="i3"></div>
                <div class="echarts" id="echartsFour" v-show="i4"></div>
            </div>
            <!-- 第三个切换按钮 -->
            <div class="chart">
                <div class="tab_oil">
                    <span v-for="(item, index) in tablist_three" :key="index" @click="tabButton_three(index)"
                          v-bind:class="[{ tab_oil_two: index == selected_three },{ tab_oil_one: true },]">{{ item }}</span>
                </div>
                <div class="fontSize_div" v-show="a_1">
                    <div class="fontSize">{{pie_number1}}</div>
                    <div class="fontSizeOne">万吨</div>
                </div>
                <div class="echarts_two" id="echartsFive" v-show="i5"></div>
                <div class="echarts_two" id="echartsSix" v-show="i6"></div>
            </div>
            <!-- 第四个切换按钮 -->
            <div class="chart">
                <div class="tab_oil">
                    <span v-for="(item, index) in tablist_four" :key="index" @click="tabButton_four(index)"
                          v-bind:class="[{ tab_oil_two: index == selected_four },{ tab_oil_one: true },]">{{ item }}</span>
                </div>
                <div class="fontSize_div" v-show="a_1">
                    <div class="fontSize">{{pie_number2}}</div>
                    <div class="fontSizeOne">万吨</div>
                </div>
                <div class="echarts_two" id="echartsSeven" v-show="i7"></div>
                <div class="echarts_two" id="echartsEight" v-show="i8"></div>
            </div>
        </div>
        <!-- 第二个页面 -->
        <div id="produce_content" v-show="b">
            <div class="pagethree_tc" v-show="produce_tc">
                <ul>
                    <li>{{page_c1}}</li>
                    <li><span>{{page_c2}}</span>个</li>
                    <li><span>{{page_c3}}</span>万吨</li>
                    <li><span>{{page_c4}}</span>万吨</li>
                    <li><span>{{page_c5}}</span>万吨</li>
                </ul>
            </div>
            <img class="map" src="../../assets/img/produce-fx/producemap.png" alt="图片未显示"/>
            <div class="produce_logo" :style="{ left: logoposionleft1,top: logoposiontop1 }">
                <img src="../../assets/img/produce-fx/guankou.png" alt="图片未显示" @click='tanchuang(produce_tc,arry7,7)'>
            </div>
            <div class="produce_logo" :style="{ left: logoposionleft2,top: logoposiontop2 }">
                <img src="../../assets/img/produce-fx/guankou.png" alt="图片未显示" @click='tanchuang(produce_tc,arry7,7)'>
            </div>
            <div class="produce_logo" :style="{ left: logoposionleft3,top: logoposiontop3 }">
                <img src="../../assets/img/produce-fx/guankou.png" alt="图片未显示" @click='tanchuang(produce_tc,arry8,8)'>
            </div>
            <div class="produce_logo" :style="{ left: logoposionleft4,top: logoposiontop4 }">
                <img src="../../assets/img/produce-fx/guankou.png" alt="图片未显示" @click='tanchuang(produce_tc,arry8,8)'>
            </div>
            <div class="chart">
                <div style="width: 100%;height: 100%;overflow: auto;">
                    <table class="table_one_t">
                        <tr>
                            <th v-for="(th,index) in tableTh" :key='index'>{{th}}</th>
                        </tr>
                        <tr v-for="(tr,index) in listData_five" :key='index'>
                            <td v-for="(td,index) in tr" :key='index'> {{td}}</td>
                        </tr>
                    </table>
                </div>
            </div>
            <div class="chart">
                <div style=" width: 100%;height: 8px;background-color: #dadbdb;margin-bottom: 10px;"></div>
                <div style="font: bold 16px '微软雅黑'; width: 150px; position: relative;top: 10px;left: 20px;">日进油量</div>
                <div class="echarts" id="echartsNine"></div>
            </div>
            <div class="chart">
                <div style=" width: 100%;height: 8px;background-color: #dadbdb;margin-bottom: 10px;"></div>
                <div style="font: bold 16px '微软雅黑'; width: 150px; position: relative;top: 10px;left: 20px;">日出油量</div>
                <div class="echarts" id="echartsTen"></div>
            </div>
            <div class="chart">
                <div style=" width: 100%;height: 8px;background-color: #dadbdb;margin-bottom: 10px;"></div>
                <div style="font: bold 16px '微软雅黑'; width: 150px; position: relative;top: 10px;left: 20px;">管存量</div>
                <div class="echarts" id="echartsEleven"></div>
            </div>
        </div>


    </div>
</template>
<script>
    export default {
        name: "FuncFormsBase",
        data() {
            return {
                screenWidth: document.body.clientWidth, // 屏幕宽
                screenHeight: document.body.clientHeight,
                screenLeft: '',
                //首页地图点击事件
                show: 0, //控制弹窗显示
                Show: [],
                listData: [],
                // 首页表格数据
                tableTh: [
                    "管道名称",
                    "总里程（km）",
                    "区内里程（km）",
                    "运送能力（万吨）",
                    "管存量（万吨）",
                ],
                listData_five: [
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

                //地图工厂位置
                logoposionleft1: '',
                logoposiontop1: '',
                logoposionleft2: '',
                logoposiontop2: '',
                logoposionleft3: '',
                logoposiontop3: '',
                logoposionleft4: '',
                logoposiontop4: '',
                show: 0, //控制弹窗显示
                produce_tc: true,
                pie_number1: 20,
                pie_number2: 30,
                //弹窗数据
                page_c1: '',
                page_c2: '',
                page_c3: '',
                page_c4: '',
                page_c5: '',
                arry1: ['总库存', '1300', '1000', '895', '769'],
                arry2: ['总库存', '1300', '1000', '895', '769'],
                arry3: ['总库存', '1300', '1000', '895', '769'],
                arry4: ['总库存', '1300', '1000', '895', '769'],
                arry5: ['总库存', '1300', '1000', '895', '769'],
                arry6: ['总库存', '1300', '1000', '895', '769'],
                arry7: ['阿尔善—赛汉塔拉原油管道', '总里程：381', '区内历程：108', '输送能力：105吨', '起止年限：1988-1989'],
                arry8: ['中俄原油管道二线', '总里程：955', '区内历程：955', '输送能力：1500吨', '起止年限：1988-1989'],
                tablist: ["库存监管", "油气运输"],
                tablist_one: ["汽油库存量变化趋势分析", "柴油库存量变化趋势分析"],
                tablist_two: ["煤油库存量变化趋势分析", "原油库存量变化趋势分析"],
                tablist_three: ["汽油库存企业结构", "柴油库存企业结构"],
                tablist_four: ["煤油库存企业结构", "原油库存企业结构"],
                selected: "0",
                selected_one: "0",
                selected_two: "0",
                selected_three: "0",
                selected_four: "0",

                //2个页面是否显示的2个参数
                a: 1,
                b: 0,
                //第一个页面里四个按钮
                i1: 1,
                i2: 0,
                i3: 1,
                i4: 0,
                i5: 1,
                i6: 0,
                i7: 1,
                i8: 0,
                a_1: 1,
                xuan: 0,
            };
        },
        mounted() {
            this.KuCun_One("echartsOne");
            this.KuCun_Three("echartsThree");
            this.KuCun_Five("echartsFive");
            this.KuCun_Seven("echartsSeven");
            this.produce_tc = 0;
            this.screenLeft = (this.screenWidth - 345) / 2 + 'px'
        },
        methods: {
            //动态位置函数
            be_click_left(a) {
                return this.screenWidth * a + 'px'
            },
            be_click_top(a) {
                return 314.5 * a + 'px'
            },

            //取消图片默认样式
            tanchuangShow(a, b) {
                this.listData = b,
                    this.show = 1
                this.$nextTick(function () {
                    this.closeLeft = (this.screenWidth - 35) / 2 + 'px'
                })
            },
            tanchuangClose() {
                this.show = 0
            },
            //首页地图点击
            tanchuang(a, arry, b) {
                if (a) {
                    this.page_c1 = arry[0];
                    this.page_c2 = arry[1];
                    this.page_c3 = arry[2];
                    this.page_c4 = arry[3];
                    this.page_c5 = arry[4];
                    this.page_c6 = arry[5];
                    if (this.xuan == b) {
                        this.xuan = b
                        this.produce_tc = !a
                    }
                    this.xuan = b
                } else {
                    this.produce_tc = !a
                    this.xuan = b
                    this.page_c1 = arry[0];
                    this.page_c2 = arry[1];
                    this.page_c3 = arry[2];
                    this.page_c4 = arry[3];
                    this.page_c5 = arry[4];
                    this.page_c6 = arry[5];
                }
            },
//页面echarts图
//第一栏
            KuCun_One(name, arry) {
                let echarts = require("echarts");
                let myChart = echarts.init(document.getElementById(name));
                myChart.setOption({
                    tooltip: {
                        trigger: "axis",
                        formatter(params) {
                            return params[0].name + '</br>' + params[0].seriesName + ':' + params[0].value + '万吨' + '</br>' +
                                params[1].seriesName + ':' +
                                params[1].value + '%'
                        }
                    },
                    legend: {
                        itemWidth: 10,
                        itemHeight: 5,
                        top: 5,
                        right: 30,
                        itemGap: 20,
                        data: ["原油月产量", "同比变化"],
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
                            name: "万吨 / 月",
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
                    ],
                    series: [
                        {
                            name: "原油月产量",
                            type: "bar",
                            barWidth: 10,
                            itemStyle: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {offset: 0, color: "#63edd4"},
                                    {offset: 1, color: "rgba(14, 137, 238, 1)"},
                                ]),
                            },
                            data: [4, 4, 7, 17, 8, 21, 23, 13, 8],
                        },
                        {
                            name: "同比变化",
                            type: "line",
                            showSymbol: false,
                            lineStyle: {
                                type: "dotted",
                                width: 2,
                            },
                            smooth: true,
                            color: "#ffa500",
                            data: [12, 14, 16, 21, 20.5, 22, 24, 20, 17.5],
                        },
                    ],
                });
            },
            KuCun_Two(name, arry) {
                let echarts = require("echarts");
                let myChart = echarts.init(document.getElementById(name));
                myChart.setOption({
                    tooltip: {
                        trigger: "axis",
                        formatter(params) {
                            return params[0].name + '</br>' + params[0].seriesName + ':' + params[0].value + '万吨' + '</br>' +
                                params[1].seriesName + ':' +
                                params[1].value + '%'
                        }
                    },
                    legend: {
                        itemWidth: 10,
                        itemHeight: 5,
                        top: 5,
                        right: 30,
                        itemGap: 20,
                        data: ["原油月产量", "同比变化"],
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
                            name: "万吨 / 月",
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
                    ],
                    series: [
                        {
                            name: "原油月产量",
                            type: "bar",
                            barWidth: 10,
                            itemStyle: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {offset: 0, color: "#63edd4"},
                                    {offset: 1, color: "rgba(14, 137, 238, 1)"},
                                ]),
                            },
                            data: [4, 4, 7, 17, 8, 21, 23, 13, 8],
                        },
                        {
                            name: "同比变化",
                            type: "line",
                            showSymbol: false,
                            lineStyle: {
                                type: "dotted",
                                width: 2,
                            },
                            smooth: true,
                            color: "#ffa500",
                            data: [12, 14, 16, 21, 20.5, 22, 24, 20, 17.5],
                        },
                    ],
                });
            },
//第二栏
            KuCun_Three(name, arry) {
                let echarts = require("echarts");
                let myChart = echarts.init(document.getElementById(name));
                myChart.setOption({
                    tooltip: {
                        trigger: "axis",
                        formatter(params) {
                            return params[0].name + '</br>' + params[0].seriesName + ':' + params[0].value + '万吨' + '</br>' +
                                params[1].seriesName + ':' +
                                params[1].value + '%'
                        }
                    },
                    legend: {
                        itemWidth: 10,
                        itemHeight: 5,
                        top: 5,
                        right: 30,
                        itemGap: 20,
                        data: ["原油月产量", "同比变化"],
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
                            name: "万吨 / 月",
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
                    ],
                    series: [
                        {
                            name: "原油月产量",
                            type: "bar",
                            barWidth: 10,
                            itemStyle: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {offset: 0, color: "#63edd4"},
                                    {offset: 1, color: "rgba(14, 137, 238, 1)"},
                                ]),
                            },
                            data: [4, 4, 7, 17, 8, 21, 23, 13, 8],
                        },
                        {
                            name: "同比变化",
                            type: "line",
                            showSymbol: false,
                            lineStyle: {
                                type: "dotted",
                                width: 2,
                            },
                            smooth: true,
                            color: "#ffa500",
                            data: [12, 14, 16, 21, 20.5, 22, 24, 20, 17.5],
                        },
                    ],
                });
            },
            KuCun_Four(name, arry) {
                let echarts = require("echarts");
                let myChart = echarts.init(document.getElementById(name));
                myChart.setOption({
                    tooltip: {
                        trigger: "axis",
                        formatter(params) {
                            return params[0].name + '</br>' + params[0].seriesName + ':' + params[0].value + '万吨' + '</br>' +
                                params[1].seriesName + ':' +
                                params[1].value + '%'
                        }
                    },
                    legend: {
                        itemWidth: 10,
                        itemHeight: 5,
                        top: 5,
                        right: 30,
                        itemGap: 20,
                        data: ["原油月产量", "同比变化"],
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
                            name: "万吨 / 月",
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
                    ],
                    series: [
                        {
                            name: "原油月产量",
                            type: "bar",
                            barWidth: 10,
                            itemStyle: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {offset: 0, color: "#63edd4"},
                                    {offset: 1, color: "rgba(14, 137, 238, 1)"},
                                ]),
                            },
                            data: [4, 4, 7, 17, 8, 21, 23, 13, 8],
                        },
                        {
                            name: "同比变化",
                            type: "line",
                            showSymbol: false,
                            lineStyle: {
                                type: "dotted",
                                width: 2,
                            },
                            smooth: true,
                            color: "#ffa500",
                            data: [12, 14, 16, 21, 20.5, 22, 24, 20, 17.5],
                        },
                    ],
                });
            },
//第三栏
            KuCun_Five(name, arry) {
                let echarts = require("echarts");
                let myChart = echarts.init(document.getElementById(name));
                myChart.setOption({
                    tooltip: {
                        trigger: "item",
                        formatter: "{a} <br/>{b}: {c}万吨 ({d}%)",
                    },
                    legend: {
                        orient: "horizontal",
                        bottom: 20,
                        left: "center",
                        itemGap: 10,
                        data: ["中石油", "中石化"],
                        itemWidth: 15,
                        itemHeight: 10,
                    },
                    grid: {
                        bottom: 40,
                    },
                    series: [
                        {
                            name: "汽油库存企业结构",
                            type: "pie",
                            radius: ["40%", "55%"],
                            center: ["50%", "40%"],
                            label: {
                                formatter: "{per|{d}%\n}",
                                padding: [0, -40, 5],
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
                            data: [
                                {
                                    value: 12,
                                    name: "中石油",
                                },
                                {
                                    value: 8,
                                    name: "中石化",
                                },
                            ],
                            color: [
                                "#15E9EC",
                                "#FFD350",
                                "#01A6FF",
                            ],
                        },
                    ],
                });
            },
            KuCun_Six(name, arry) {
                let echarts = require("echarts");
                let myChart = echarts.init(document.getElementById(name));
                myChart.setOption({
                    tooltip: {
                        trigger: "item",
                        formatter: "{a} <br/>{b}: {c}万吨 ({d}%)",
                    },
                    legend: {
                        orient: "horizontal",
                        bottom: 20,
                        left: "center",
                        itemGap: 10,
                        data: ["中石油", "中石化"],
                        itemWidth: 15,
                        itemHeight: 10,
                    },
                    grid: {
                        bottom: 40,
                    },
                    series: [
                        {
                            name: "柴油库存企业结构",
                            type: "pie",
                            radius: ["40%", "55%"],
                            center: ["50%", "40%"],
                            label: {
                                formatter: "{per|{d}%\n}",
                                padding: [0, -40, 5],
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
                            data: [
                                {
                                    value: 12,
                                    name: "中石油",
                                },
                                {
                                    value: 8,
                                    name: "中石化",
                                },
                            ],
                            color: [
                                "#15E9EC",
                                "#FFD350",
                                "#01A6FF",
                            ],
                        },
                    ],
                });
            },
//第四栏
            KuCun_Seven(name, arry) {
                let echarts = require("echarts");
                let myChart = echarts.init(document.getElementById(name));
                myChart.setOption({
                    tooltip: {
                        trigger: "item",
                        formatter: "{a} <br/>{b}: {c}万吨 ({d}%)",
                    },
                    legend: {
                        orient: "horizontal",
                        bottom: 20,
                        left: "center",
                        itemGap: 10,
                        data: ["中石油", "中石化"],
                        itemWidth: 15,
                        itemHeight: 10,
                    },
                    grid: {
                        bottom: 40,
                    },
                    series: [
                        {
                            name: "煤油库存企业结构",
                            type: "pie",
                            radius: ["40%", "55%"],
                            center: ["50%", "40%"],
                            label: {
                                formatter: "{per|{d}%\n}",
                                padding: [0, -40, 5],
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
                            data: [
                                {
                                    value: 18,
                                    name: "中石油",
                                },
                                {
                                    value: 12,
                                    name: "中石化",
                                },
                            ],
                            color: [
                                "#15E9EC",
                                "#FFD350",
                                "#01A6FF",
                            ],
                        },
                    ],
                });
            },
            KuCun_Eight(name, arry) {
                let echarts = require("echarts");
                let myChart = echarts.init(document.getElementById(name));
                myChart.setOption({
                    tooltip: {
                        trigger: "item",
                        formatter: "{a} <br/>{b}: {c}万吨 ({d}%)",
                    },
                    legend: {
                        orient: "horizontal",
                        bottom: 20,
                        left: "center",
                        itemGap: 10,
                        data: ["中石油", "中石化"],
                        itemWidth: 15,
                        itemHeight: 10,
                    },
                    grid: {
                        bottom: 40,
                    },
                    series: [
                        {
                            name: "原油库存企业结构",
                            type: "pie",
                            radius: ["40%", "55%"],
                            center: ["50%", "40%"],
                            label: {
                                formatter: "{per|{d}%\n}",
                                padding: [0, -40, 5],
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
                            data: [
                                {
                                    value: 18,
                                    name: "中石油",
                                },
                                {
                                    value: 12,
                                    name: "中石化",
                                },
                            ],
                            color: [
                                "#15E9EC",
                                "#FFD350",
                                "#01A6FF",
                            ],
                        },
                    ],
                });
            },
//第二页
            YunShu_One(name, arry) {
                let echarts = require("echarts");
                let myChart = echarts.init(document.getElementById(name));
                myChart.setOption({
                    tooltip: {
                        trigger: 'axis',
                        formatter: "{a} <br/>{b}: {c}m³/h",
                    },
                    xAxis: {
                        name:'日',
                        type: "category",
                        data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28],
                        interval: 0,
                        splitLine: {
                            interval: 1,
                            lineStyle: {
                                color: "yellow",
                            },
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
                    yAxis: {
                        name: "m³/h",
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
                        { name:'日进油量',
                            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 14, 23, 16, 15, 26, 78, 43, 21, 54, 21, 54, 21, 54, 21, 54, 21, 54],
                            symbolSize: [0, 0],
                            areaStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient
                                    (0, 0, 0, 1, [
                                        {
                                            offset: 0,
                                            color: 'rgba(0, 136, 212, 0.3)'
                                        },
                                        {
                                            offset: 0.8,
                                            color: 'rgba(0, 136, 212, 0)'
                                        }
                                    ], false),
                                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                                    shadowBlur: 1
                                }
                            },
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
            YunShu_Two(name, arry) {
                let echarts = require("echarts");
                let myChart = echarts.init(document.getElementById(name));
                myChart.setOption({
                    tooltip: {
                        trigger: 'axis',
                        formatter: "{a} <br/>{b}: {c}Mpa",
                    },
                    xAxis: {
                        name:'日',
                        type: 'category',
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
                        data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28]
                    },
                    yAxis: {
                        name: 'Mpa',
                        type: 'value',
                        max: 800,
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
                    series: [{
                        name:'日出油量',
                        data: [100, 200, 300, 400, 500, 600, 700, 800, 600, 100, 200, 140, 230, 160, 150, 260, 780, 430,
                            210, 540,
                            210, 540, 210, 540, 210, 540, 210, 540],
                        type: 'line',
                        color: 'orange',
                    }]
                });
            },
            YunShu_Three(name, arry) {
                let echarts = require("echarts");
                let myChart = echarts.init(document.getElementById(name));
                myChart.setOption({
                    tooltip: {
                        trigger: 'axis',
                        formatter: "{a} <br/>{b}: {c}°C",
                    },
                    xAxis: {
                        name:'日',
                        type: "category",
                        data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28],
                        interval: 0,
                        splitLine: {
                            interval: 1,
                            lineStyle: {
                                color: "yellow",
                            },
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
                    yAxis: {
                        name:'°C',
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
                            name:'管存量',
                            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 14, 23, 16, 15, 26, 78, 43, 21, 54, 21, 54, 21, 54, 21, 54, 21, 54],
                            symbolSize: [0, 0],
                            areaStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient
                                    (0, 0, 0, 1, [
                                        {
                                            offset: 0,
                                            color: 'rgba(0, 136, 212, 0.3)'
                                        },
                                        {
                                            offset: 0.8,
                                            color: 'rgba(0, 136, 212, 0)'
                                        }
                                    ], false),
                                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                                    shadowBlur: 1
                                }
                            },
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
//主要按钮
            tabButton(id) {
                this.selected = id;
                if (0 == id) {
                    this.a = 1;
                    this.b = 0;
                    this.$nextTick(function () {
                        this.KuCun_One("echartsOne");
                        this.KuCun_Three("echartsThree");
                        this.KuCun_Five("echartsFive");
                        this.KuCun_Seven("echartsSeven");
                    });
                }
                if (1 == id) {
                    this.a = 0;
                    this.b = 1;
                    this.$nextTick(function () {
                        this.YunShu_One("echartsNine");
                        this.YunShu_Two("echartsTen");
                        this.YunShu_Three("echartsEleven");
                        this.produce_tc = 0;
                        this.logoposionleft1 = (this.screenWidth * 0.7) + 'px';
                        this.logoposiontop1 = (314.5 * 0.46) + 'px';
                        this.logoposionleft2 = (this.screenWidth * 0.58) + 'px';
                        this.logoposiontop2 = (314.5 * 0.55) + 'px';
                        this.logoposionleft3 = (this.screenWidth * 0.5) + 'px';
                        this.logoposiontop3 = (314.5 * 0.72) + 'px';
                        this.logoposionleft4 = (this.screenWidth * 0.38) + 'px';
                        this.logoposiontop4 = (314.5 * 0.79) + 'px';
                    });
                }
            },
            /* 第一个页面的第一个点击按钮 */
            tabButton_one(id) {
                this.selected_one = id;
                if (0 == id) {
                    this.i1 = 1;
                    this.i2 = 0;
                    this.$nextTick(function () {
                        this.KuCun_One("echartsOne");
                    });
                }
                ;
                if (1 == id) {
                    this.i1 = 0;
                    this.i2 = 1;
                    this.$nextTick(function () {
                        this.KuCun_Two("echartsTwo");
                    });
                }
            },
            /* 第一个页面的第二点击按钮 */
            tabButton_two(id) {
                this.selected_two = id;
                if (0 == id) {
                    this.i3 = 1;
                    this.i4 = 0;
                    this.$nextTick(function () {
                        this.KuCun_Three("echartsThree");
                    });
                }
                ;
                if (1 == id) {
                    this.i3 = 0;
                    this.i4 = 1;
                    this.$nextTick(function () {
                        this.KuCun_Four("echartsFour");
                    });
                }
            },
            /* 第一个页面的第三点击按钮 */
            tabButton_three(id) {
                this.selected_three = id;
                if (0 == id) {
                    this.i5 = 1;
                    this.i6 = 0;
                    this.pie_number1 = 20;
                    this.$nextTick(function () {
                        this.KuCun_Five("echartsFive");
                    });
                }
                ;
                if (1 == id) {
                    this.i5 = 0;
                    this.i6 = 1;
                    this.pie_number1 = 8;
                    this.$nextTick(function () {
                        this.KuCun_Six("echartsSix");
                    });
                }
                ;
            },
            /* 第一个页面的第四点击按钮 */
            tabButton_four(id) {
                this.selected_four = id;
                if (0 == id) {
                    this.i7 = 1;
                    this.i8 = 0;
                    this.pie_number2 = 30;
                    this.$nextTick(function () {
                        this.KuCun_Seven("echartsSeven");
                    });
                }
                ;
                if (1 == id) {
                    this.i7 = 0;
                    this.i8 = 1;
                    this.pie_number2 = 7;
                    this.$nextTick(function () {
                        this.KuCun_Eight("echartsEight");
                    });
                }
            },
        },
    };
</script>

<style scoped>
    /* 弹出框 */
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
        margin: 50px auto;
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

    #tab_button {
        width: 345px;
        height: 29px;
        background-color: rgba(0, 0, 0, 0.15);
        position: fixed;
        top: 100px;
        z-index: 2;
        border-radius: 5px;
    }

    /* 按钮切换 */
    .tab_button_one {
        width: 169.5px;
        height: 25px;
        font: 12px PingFangSC-Regular;
        line-height: 25px;
        float: left;
        position: relative;
        top: 2px;
        left: 2px;
        text-align: center;
        color: white;
    }

    .tab_button_two {
        width: 169.5px;
        height: 25px;
        background-color: rgba(0, 0, 0, 0.3);
        font: 12px PingFangSC-Regular;
        line-height: 25px;
        float: left;
        position: relative;
        top: 2px;
        left: 2px;
        text-align: center;
        border-radius: 5px;
    }

    /* 关于地图内容的调整期 */
    .map {
        width: 100%;
        height: 314.5px;
        background-color: #dadbdb;
    }

    /* 储情分析内容 */
    .chart {
        width: 100%;
        height: 289px;
        background-color: white;
        padding: 10px 0;
        position: relative;
    }

    .chart_one {
        width: 100%;
        height: 289px;
        background-color: white;
        padding: 20px 0;
        position: relative;
    }

    .echarts {
        width: 100%;
        height: 242px;
        margin: 20px auto;
        background-repeat: no-repeat;
        background-position: 50% 37%;
        background-size: 65px 65px;
    }

    .echarts_two {
        width: 100%;
        height: 242px;
        margin: 20px auto;
        background-image: url(../../assets/img/produce-fx/椭圆.png);
        background-repeat: no-repeat;
        background-position: 50% 37%;
        background-size: 65px 65px;
    }

    .echarts_one {
        width: 100%;
        height: 242px;
        margin: 10px auto;
    }

    .pagethree_tc {
        width: 170px;
        height: 90px;
        background-color: rgba(0, 0, 0, 0.3);
        background-image: url(../../assets/img/produce-fx/produce_tc.png);
        position: absolute;
        left: 40px;
        top: 80px;
    }

    .pagefour_tc {
        width: 150px;
        height: 70px;
        background-color: rgba(0, 0, 0, 0.3);
        background-image: url(../../assets/img/produce-fx/produce_tc.png);
        position: absolute;
        left: 40px;
        top: 80px;
    }

    .pagethree_tc ul li, .pagefour_tc ul li {
        font-size: 8px;
        color: rgba(173, 216, 230);
        height: 18px;
    }

    .pagethree_tc ul :first-child {
        color: white;
    }

    .pagefour_tc ul :first-child {
        color: white;
    }

    .produce_logo {
        width: 20px;
        position: absolute;
        left: 100px;
        top: 100px;
    }

    .produce_logo img {
        width: 100%;
    }

    /* 文字块 */
    .fontSize_div {
        position: absolute;
        width: 100%;
        height: 100%;
        text-align: center;
    }

    .fontSizeOne {
        position: relative;
        top: 90px;
        font: 15px bolder microsoft-yahei;
    }

    .fontSize {
        position: relative;
        top: 90px;
        font: 20px bolder microsoft-yahei;
    }

    /* 按钮样式调整 */
    .tab_oil {
        width: 345px;
        height: 31px;
        background-color: white;
        margin: 0px auto;
        border: 1px solid #3a6dda;
        border-radius: 5px;
    }

    /* 按钮切换 */
    .tab_oil_one {
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
    }

    .tab_oil_two {
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

    /* 表格 */
    #table {
        width: 100%;
        padding-top: 30px;
    }

    .table_one {
        font-family: PingFang SC;
        width: 100%;
        border-collapse: collapse;
        margin: 50px auto;
    }

    .table_two {
        font-family: PingFang SC;
        width: 100%;
        border-collapse: collapse;
        margin: 50px auto;
        display: none;
    }

    .table_one th,
    .table_one td {
        font-size: 14px;
        border: 1px solid #b9bec9;
        padding: 3px 7px 2px 7px;
        text-align: center;
    }

    .table_one th {
        background-color: #d8dbde;
    }

    /* 动态块位置 */
    .clickbtn {
        width: 31px;
        height: 32px;
        /* background-color: #000000; */
        background-image: url(../../assets/img/produce-fx/石油.png);
        position: absolute;
    }

    /* 主要内容隐藏 */
    .content {
        display: none;
    }
</style>
