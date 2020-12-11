<template>
    <div>
        <div id="confess_content" style="background-color: #dadbdb">

            <!-- banner -->
            <div id="banner">
                <img class="map"
                     src="../../assets/img/oilgas/xiaoshou.png"
                     alt="图片未显示"/>
                <div style="position: absolute;font-size: 12px;color:#3F51B5;font-weight: bold"
                     :style="{'left':be_click_left(uint.left),'top':be_click_top(uint.top)}">万立方米
                </div>
                <!--地图定位-->
                <img src="../../assets/img/oilgas/wuhai.png" alt="图片未显示" style="position: absolute;width: 6%"
                     :style="{'left':be_click_left(wuhai.left),'top':be_click_top(wuhai.top)}"
                >
                <div>
                    <div :class="item.class" v-for="(item,index) in posList"
                         :style="{'left':be_click_left(item.left),'top':be_click_top(item.top)}"
                         @click="showDes(index)"
                    ></div>
                </div>
                <div>
                    <div v-for="(item,index) in desList"
                         :style="{'left':be_click_left(item.left),'top':be_click_top(item.top)}"
                         class="des_list"
                         v-show="showFlag||index==desIndex"
                    >
                        <div>{{item.num}}</div>
                    </div>
                </div>
            </div>

            <div class="chart">
                <div class="tab_oil">
          <span v-for="(item, index) in tablist_one"
                :key="index"
                @click="tabButton_one(index)"
                v-bind:class="[
              { tab_oil_two: index == selected_one },
              { tab_oil_one: true },
            ]">{{ item }}</span>
                </div>

                <div v-show="one">
                    <div class="fontSize_div">
                        <div class="fontSize">{{pie_one}}</div>
                        <div class="fontSize">万吨</div>
                    </div>
                    <div class="echarts_three" id="echartsOne" style="width: 100%;height: 242px"></div>
                </div>
                <div v-show="two">
                    <div class="fontSize_div">
                        <div class="fontSize">{{pie_two}}</div>
                        <div class="fontSize">万吨</div>
                    </div>
                    <div class="echarts_three" id="echartsTwo" style="width: 100%;height: 242px"></div>
                </div>

            </div>
            <div class="chart module">
                <div class="tab_oil">
          <span v-for="(item, index) in tablist_two"
                :key="index"
                @click="tabButton_two(index)"
                v-bind:class="[
              { tab_oil_two: index == selected_two },
              { tab_oil_one: true },
            ]">{{ item }}</span>
                </div>
                <div v-show="three">
                    <div class="fontSize_div">
                        <div class="fontSize" style="top:74px">190</div>
                        <div class="fontSize" style="top:74px">万吨</div>
                    </div>
                    <div class="echarts_four" id="echartsThree" style="width: 100%;height: 242px"></div>
                </div>
                <div v-show="four">
                    <div id="echartsFour" style="width: 100%;height: 242px"></div>
                </div>
            </div>
            <div class="chart module">
                <div class="tab_oil">
          <span v-for="(item, index) in tablist_three"
                :key="index"
                @click="tabButton_three(index)"
                v-bind:class="[
              { tab_oil_two: index == selected_three },
              { tab_oil_one: true },
            ]">{{ item }}</span>
                </div>
                <div v-show="five">
                    <div id="echartsFive" style="width: 100%;height: 242px"></div>
                </div>
                <div v-show="six">
                    <div id="echartsSix" style="width: 100%;height: 242px"></div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "qixiao",
        data() {
            return {
                uint: {
                    left: '0.841',
                    top: '0.93',
                },
                wuhai: {
                    left: '0.31',
                    top: '0.994',
                },
                pie_num: 2420,
                pie_numArry: [2420, 78, 144, 176, 222, 203, 210, 147, 111, 149, 183, 167, 144],
                posList: [
                    //阿拉善盟
                    {
                        left: '0.2',
                        top: '1.0',
                        class: 'clickbtn'
                    },
                    //乌海
                    {
                        left: '0.32',
                        top: '1.0',
                        class: 'clickbtn2'
                    },
                    //巴彦淖尔
                    {
                        left: '0.32',
                        top: '0.928',
                        class: 'clickbtn1'
                    },
                    //鄂尔多斯
                    {
                        left: '0.37',
                        top: '1.036',
                        class: 'clickbtn'
                    },
                    //包头市
                    {
                        left: '0.43',
                        top: '0.928',
                        class: 'clickbtn2'
                    },
                    //呼和浩特
                    {
                        left: '0.47',
                        top: '0.988',
                        class: 'clickbtn'
                    },
                    //乌兰察布
                    {
                        left: '0.50',
                        top: '0.928',
                        class: 'clickbtn'
                    },
                    //锡林郭勒盟
                    {
                        left: '0.57',
                        top: '0.798',
                        class: 'clickbtn1'
                    },
                    //赤峰
                    {
                        left: '0.70',
                        top: '0.839',
                        class: 'clickbtn2'
                    },
                    //通辽
                    {
                        left: '0.80',
                        top: '0.845',
                        class: 'clickbtn2'
                    },
                    //兴安盟
                    {
                        left: '0.77',
                        top: '0.679',
                        class: 'clickbtn2'
                    },
                    //呼伦贝尔
                    {
                        left: '0.76',
                        top: '0.529',
                        class: 'clickbtn1'
                    }
                ],//地图弹窗位置
                desList: [
                    // 阿拉善盟
                    {
                        num: '78',
                        left: '0.21',
                        top: '0.94'
                    },
                    // 乌海
                    {
                        num: '144',
                        left: '0.31',
                        top: '0.96'
                    },
                    // 巴彦淖尔
                    {
                        num: '176',
                        left: '0.32',
                        top: '0.87'
                    },
                    // 鄂尔多斯
                    {
                        num: '222',
                        left: '0.38',
                        top: '0.99'
                    },
                    //包头市
                    {
                        num: '203',
                        left: '0.42',
                        top: '0.88'
                    },
                    //呼和浩特
                    {
                        num: '210',
                        left: '0.55',
                        top: '0.98'
                    },
                    //乌兰察布
                    {
                        num: '147',
                        left: '0.51',
                        top: '0.88'
                    },
                    //锡林郭勒盟
                    {
                        num: '111',
                        left: '0.6',
                        top: '0.74'
                    },
                    //赤峰
                    {
                        num: '149',
                        left: '0.71',
                        top: '0.80'
                    },
                    //通辽
                    {
                        num: '183',
                        left: '0.8',
                        top: '0.8'
                    },
                    //兴安盟
                    {
                        num: '167',
                        left: '0.77',
                        top: '0.629',
                    },
                    //呼伦贝尔
                    {
                        num: '144',
                        left: '0.76',
                        top: '0.469',
                    },

                ],//弹窗内容
                timer: "",
                selected_one: 0,
                selected_two: 0,
                selected_three: 0,
                tablist_copy: ["汽油消费结构分析", "柴油消费结构分析"],
                tablist_one: ["汽油消费结构分析", "柴油消费结构分析"],
                tablist_city: [
                    "阿拉善盟",
                    "乌海",
                    "巴彦淖尔",
                    "鄂尔多斯",
                    "包头",
                    "呼和浩特",
                    "乌兰察布",
                    "锡林郭勒盟",
                    "赤峰",
                    "通辽",
                    "兴安盟",
                    "呼伦贝尔"
                ],
                tablist_three: ["汽油消费量预测", "柴油消费量预测"],
                tablist_two: ["成品油销售地区分布", "区内区外成品油销售量对比分析"],
                screenWidth: document.body.clientWidth, // 屏幕宽
                showFlag: true,
                desIndex: null,
                one: true,
                two: false,
                three: true,
                four: false,
                five: true,
                six: false,
                pie_one: 150,
                pie_oneAry: [150, 9, 11, 13, 9, 11, 13, 9, 11, 13, 9, 11, 13],
                pie_two: 170,
                pie_twoAry: [170,10,12,14,10,12,14,10,12,14,10,12,14],
                seriesOne: [
                    [
                        {
                            value: 90,
                            name: "92#汽油",
                        },
                        {
                            value: 20,
                            name: "95#汽油",
                        },
                        {
                            value: 40,
                            name: "98#汽油",
                        },
                    ],
                    [
                        {
                            value: 4,
                            name: "92#汽油",
                        },
                        {
                            value: 3,
                            name: "95#汽油",
                        },
                        {
                            value: 2,
                            name: "98#汽油",
                        },
                    ],
                    [
                        {
                            value: 7,
                            name: "92#汽油",
                        },
                        {
                            value: 3,
                            name: "95#汽油",
                        },
                        {
                            value: 1,
                            name: "98#汽油",
                        },
                    ],
                    [
                        {
                            value: 6,
                            name: "92#汽油",
                        },
                        {
                            value: 4,
                            name: "95#汽油",
                        },
                        {
                            value: 3,
                            name: "98#汽油",
                        },
                    ],
                    [
                        {
                            value: 4,
                            name: "92#汽油",
                        },
                        {
                            value: 3,
                            name: "95#汽油",
                        },
                        {
                            value: 2,
                            name: "98#汽油",
                        },
                    ],
                    [
                        {
                            value: 7,
                            name: "92#汽油",
                        },
                        {
                            value: 3,
                            name: "95#汽油",
                        },
                        {
                            value: 1,
                            name: "98#汽油",
                        },
                    ],
                    [
                        {
                            value: 6,
                            name: "92#汽油",
                        },
                        {
                            value: 4,
                            name: "95#汽油",
                        },
                        {
                            value: 3,
                            name: "98#汽油",
                        },
                    ],
                    [
                        {
                            value: 4,
                            name: "92#汽油",
                        },
                        {
                            value: 3,
                            name: "95#汽油",
                        },
                        {
                            value: 2,
                            name: "98#汽油",
                        },
                    ],
                    [
                        {
                            value: 7,
                            name: "92#汽油",
                        },
                        {
                            value: 3,
                            name: "95#汽油",
                        },
                        {
                            value: 1,
                            name: "98#汽油",
                        },
                    ],
                    [
                        {
                            value: 6,
                            name: "92#汽油",
                        },
                        {
                            value: 4,
                            name: "95#汽油",
                        },
                        {
                            value: 3,
                            name: "98#汽油",
                        },
                    ],
                    [
                        {
                            value: 4,
                            name: "92#汽油",
                        },
                        {
                            value: 3,
                            name: "95#汽油",
                        },
                        {
                            value: 2,
                            name: "98#汽油",
                        },
                    ],
                    [
                        {
                            value: 7,
                            name: "92#汽油",
                        },
                        {
                            value: 3,
                            name: "95#汽油",
                        },
                        {
                            value: 1,
                            name: "98#汽油",
                        },
                    ],
                    [
                        {
                            value: 6,
                            name: "92#汽油",
                        },
                        {
                            value: 4,
                            name: "95#汽油",
                        },
                        {
                            value: 3,
                            name: "98#汽油",
                        },
                    ],
                ],
                seriesTwo: [
                    [
                        {
                            value: 90,
                            name: "-35#柴油",
                        },
                        {
                            value: 20,
                            name: "-20#柴油",
                        },
                        {
                            value: 40,
                            name: "-10#柴油",
                        },
                        {
                            value: 20,
                            name: "0#柴油",
                        },
                    ],
                    [
                        {
                            value: 4,
                            name: "-35#柴油",
                        },
                        {
                            value: 2,
                            name: "-20#柴油",
                        },
                        {
                            value: 2,
                            name: "-10#柴油",
                        },
                        {
                            value: 1,
                            name: "0#柴油",
                        },
                    ],
                    [
                        {
                            value: 5,
                            name: "-35#柴油",
                        },
                        {
                            value: 4,
                            name: "-20#柴油",
                        },
                        {
                            value: 2,
                            name: "-10#柴油",
                        },
                        {
                            value: 1,
                            name: "0#柴油",
                        },
                    ],
                    [
                        {
                            value: 2,
                            name: "-35#柴油",
                        },
                        {
                            value: 4,
                            name: "-20#柴油",
                        },
                        {
                            value: 3,
                            name: "-10#柴油",
                        },
                        {
                            value: 2,
                            name: "0#柴油",
                        },
                    ],
                    [
                        {
                            value: 4,
                            name: "-35#柴油",
                        },
                        {
                            value: 2,
                            name: "-20#柴油",
                        },
                        {
                            value: 2,
                            name: "-10#柴油",
                        },
                        {
                            value: 1,
                            name: "0#柴油",
                        },
                    ],
                    [
                        {
                            value: 5,
                            name: "-35#柴油",
                        },
                        {
                            value: 4,
                            name: "-20#柴油",
                        },
                        {
                            value: 2,
                            name: "-10#柴油",
                        },
                        {
                            value: 1,
                            name: "0#柴油",
                        },
                    ],
                    [
                        {
                            value: 2,
                            name: "-35#柴油",
                        },
                        {
                            value: 4,
                            name: "-20#柴油",
                        },
                        {
                            value: 3,
                            name: "-10#柴油",
                        },
                        {
                            value: 2,
                            name: "0#柴油",
                        },
                    ],
                    [
                        {
                            value: 4,
                            name: "-35#柴油",
                        },
                        {
                            value: 2,
                            name: "-20#柴油",
                        },
                        {
                            value: 2,
                            name: "-10#柴油",
                        },
                        {
                            value: 1,
                            name: "0#柴油",
                        },
                    ],
                    [
                        {
                            value: 5,
                            name: "-35#柴油",
                        },
                        {
                            value: 4,
                            name: "-20#柴油",
                        },
                        {
                            value: 2,
                            name: "-10#柴油",
                        },
                        {
                            value: 1,
                            name: "0#柴油",
                        },
                    ],
                    [
                        {
                            value: 2,
                            name: "-35#柴油",
                        },
                        {
                            value: 4,
                            name: "-20#柴油",
                        },
                        {
                            value: 3,
                            name: "-10#柴油",
                        },
                        {
                            value: 2,
                            name: "0#柴油",
                        },
                    ],
                    [
                        {
                            value: 4,
                            name: "-35#柴油",
                        },
                        {
                            value: 2,
                            name: "-20#柴油",
                        },
                        {
                            value: 2,
                            name: "-10#柴油",
                        },
                        {
                            value: 1,
                            name: "0#柴油",
                        },
                    ],
                    [
                        {
                            value: 5,
                            name: "-35#柴油",
                        },
                        {
                            value: 4,
                            name: "-20#柴油",
                        },
                        {
                            value: 2,
                            name: "-10#柴油",
                        },
                        {
                            value: 1,
                            name: "0#柴油",
                        },
                    ],
                    [
                        {
                            value: 2,
                            name: "-35#柴油",
                        },
                        {
                            value: 4,
                            name: "-20#柴油",
                        },
                        {
                            value: 3,
                            name: "-10#柴油",
                        },
                        {
                            value: 2,
                            name: "0#柴油",
                        },
                    ]
                ]

            }
        },
        mounted() {
            this.QiYouXiaoFeiJieGouFenXi_pie("echartsOne",this.seriesOne[0]);
            this.ChengPinYouXiaoFeiDiqQuFenBu('echartsThree')
            this.QuYouXiaoFeiLiangYuCe_twoline('echartsFive')

        },
        methods: {
            //汽油消费结构分析
            QiYouXiaoFeiJieGouFenXi_pie(name, series) {
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
                        data: ["92#汽油", "95#汽油", "98#汽油"],
                        itemWidth: 15,
                        itemHeight: 10,
                    },

                    series: [
                        {
                            name: "汽油消费结构",
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
            //柴油消费结构分析
            ChaiYouXiaoFeiJieGouFenXi_pie(name, series) {
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
                        data: ["-35#柴油", "-20#柴油", "-10#柴油", "0#柴油"],
                        itemWidth: 15,
                        itemHeight: 10,
                    },
                    grid: {
                        bottom: 40,
                    },
                    series: [
                        {
                            name: "柴油消费结构",
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
                            color: ["#64B9EC", "#13D99E", "#ED6046", "#FF9712"],
                        },
                    ],
                });
            },
            //成品油消费地区分布
            ChengPinYouXiaoFeiDiqQuFenBu(name, arry) {
                var echarts = require("echarts");
                var myChart = echarts.init(document.getElementById(name));
                myChart.setOption({
                    tooltip: {
                        trigger: "item",
                        formatter: "{a} <br/>{b}: {c}万吨 ({d}%)",
                    },
                    legend: {
                        orient: "horizontal",
                        bottom: 30,
                        // left: "center",
                        itemGap: 10,
                        data: ["呼和浩特", "乌海", "通辽", "兴安", "包头", "鄂尔多斯"],
                        itemWidth: 15,
                        itemHeight: 10,
                    },
                    grid: {
                        bottom: 20,
                    },
                    series: [
                        {
                            name: "成品油消费地区分布",
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
                                    value: 20,
                                    name: "通辽",
                                },
                                {
                                    value: 20,
                                    name: "兴安",
                                },
                                {
                                    value: 20,
                                    name: "包头",
                                },
                                {
                                    value: 20,
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
            //区内区外消费量对比
            QuNeiQuWaiXiaoFeiLiangDuiBi_twobar(name, arry) {
                let echarts = require("echarts");
                let myChart = echarts.init(document.getElementById(name));
                myChart.setOption({
                    tooltip: {
                        trigger: "axis",
                        formatter(params) {
                            return params[0].name + '</br>' + params[0].seriesName + ':' + params[0].value + '万吨' + '</br>' +
                                params[1].seriesName + ':' +
                                params[1].value + '万吨'
                        }
                    },
                    grid: {
                        // height: 160,
                        bottom: 90,
                    },
                    legend: {
                        itemWidth: 10,
                        itemHeight: 5,
                        top: 0,
                        right: 30,
                        itemGap: 20,
                        data: ["区内成品油", "区外成品油"],
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
                            name: "区内成品油",
                            type: "bar",
                            barWidth: 7,
                            itemStyle: {
                                color: "#74A5FF",
                            },

                            data: [24, 15.5, 14.5, 12, 16, 22, 14, 18, 23, 19, 18, 13],
                        },
                        {
                            name: "区外成品油",
                            type: "bar",
                            barWidth: 7,
                            itemStyle: {
                                color: "#74FFF8",
                            },
                            data: [29, 19, 18, 14.5, 25.7, 22.5, 18, 22, 29, 19, 17, 12],
                        },
                    ],
                });
            },
            //汽油消费量预测
            QuYouXiaoFeiLiangYuCe_twoline(name, arry) {
                let echarts = require("echarts");
                let myChart = echarts.init(document.getElementById(name));
                myChart.setOption({
                    tooltip: {
                        trigger: "axis",
                        formatter(params) {
                            return params[0].name + '</br>' + params[0].seriesName + ':' + params[0].value + '万吨' + '</br>' +
                                params[1].seriesName + ':' +
                                params[1].value + '万吨'
                        }
                    },
                    legend: {
                        right: 30,
                        data: ["汽油消费量实际值", "汽油消费量预测值"],
                    },

                    xAxis: {
                        type: "category",
                        boundaryGap: false,
                        data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月"],
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
                        name: "万吨/年",
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
                            name: "汽油消费量实际值",
                            type: "line",
                            symbol: "none",
                            smooth: true,
                            lineStyle: {
                                color: "#FA5356",
                            },
                            data: [60, 75, 83, 80, 79, 77, 79, 90, 65],
                        },
                        {
                            name: "汽油消费量预测值",
                            type: "line",
                            itemStyle: {
                                normal: {
                                    color: "#12DFBD",
                                },
                            },

                            lineStyle: {
                                color: "#12DFBD",
                            },
                            data: [55, 71, 88, 80, 72, 84, 85, 96, 62],
                        },
                    ],
                });
            },
            //柴油消费量预测
            ChaiYouXiaoFeiLiangYuCe_twoline(name, arry) {
                let echarts = require("echarts");
                let myChart = echarts.init(document.getElementById(name));
                myChart.setOption({
                    tooltip: {
                        trigger: "axis",
                        formatter(params) {
                            return params[0].name + '</br>' + params[0].seriesName + ':' + params[0].value + '万吨' + '</br>' +
                                params[1].seriesName + ':' +
                                params[1].value + '万吨'
                        }
                    },
                    legend: {
                        right: 30,
                        data: ["柴油消费量实际值", "柴油消费量预测值"],
                    },
                    xAxis: {
                        type: "category",
                        boundaryGap: false,
                        data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月"],
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
                        name: "万吨/年",
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
                            name: "柴油消费量实际值",
                            type: "line",
                            symbol: "none",
                            smooth: true,
                            lineStyle: {
                                color: "#FA5356",
                            },
                            data: [60, 72, 80, 86, 75, 73, 75, 85, 63],
                        },
                        {
                            name: "柴油消费量预测值",
                            type: "line",
                            itemStyle: {
                                normal: {
                                    color: "#12DFBD",
                                },
                            },

                            lineStyle: {
                                color: "#12DFBD",
                            },
                            data: [55, 71, 88, 80, 72, 84, 85, 96, 62],
                        },
                    ],
                });
            },
            // 点击地图的点联动
            showDes(index) {
                if (this.desIndex == index) {
                    this.showFlag = true;
                    this.desIndex = null;
                    this.tablist_one = this.tablist_copy;
                    this.QiYouXiaoFeiJieGouFenXi_pie('echartsOne',this.seriesOne[0])
                    this.ChaiYouXiaoFeiJieGouFenXi_pie('echartsTwo',this.seriesTwo[0])
                    this.pie_one=this.pie_oneAry[0]
                    this.pie_two=this.pie_twoAry[0]

                } else {
                    this.desIndex = index;
                    this.showFlag = false;
                    this.tablist_one = [this.tablist_city[index] + this.tablist_copy[0], this.tablist_city[index] + this.tablist_copy[1]];
                    this.QiYouXiaoFeiJieGouFenXi_pie('echartsOne',this.seriesOne[index+1])
                    this.ChaiYouXiaoFeiJieGouFenXi_pie('echartsTwo',this.seriesTwo[index+1])
                    this.pie_one=this.pie_oneAry[index+1]
                    this.pie_two=this.pie_twoAry[index+1]
                }


            },
            // 用于点击的div块绑定函数
            be_click_left(a) {
                return this.screenWidth * a + 'px'
            },
            be_click_top(a) {
                return 314.5 * a + 'px'
            },
            tabButton_one(index) {
                if (index == 1) {
                    this.selected_one = 1
                    this.two = true
                    this.one = false
                    if(this.desIndex==null){
                        this.$nextTick(() => {
                            this.ChaiYouXiaoFeiJieGouFenXi_pie('echartsTwo',this.seriesTwo[0])
                        })
                    }else{
                        this.$nextTick(() => {
                            this.ChaiYouXiaoFeiJieGouFenXi_pie('echartsTwo',this.seriesTwo[this.desIndex+1])
                        })
                    }

                } else {
                    this.selected_one = 0
                    this.one = true
                    this.two = false
                    if(this.desIndex==null){
                        this.$nextTick(() => {
                            this.ChaiYouXiaoFeiJieGouFenXi_pie('echartsTwo',this.seriesTwo[0])
                        })
                    }else{
                        this.$nextTick(() => {
                            this.ChaiYouXiaoFeiJieGouFenXi_pie('echartsTwo',this.seriesTwo[index+1])
                        })
                    }
                }

            },
            tabButton_two(index) {
                if (index == 1) {
                    this.selected_two = 1
                    this.four = true
                    this.three = false
                    this.$nextTick(() => {
                        this.QuNeiQuWaiXiaoFeiLiangDuiBi_twobar('echartsFour')
                    })
                } else {
                    this.selected_two = 0
                    this.three = true
                    this.four = false
                }

            },
            tabButton_three(index) {
                if (index == 1) {
                    this.selected_three = 1
                    this.six = true
                    this.five = false
                    this.$nextTick(() => {
                        this.ChaiYouXiaoFeiLiangYuCe_twoline('echartsSix')
                    })
                } else {
                    this.selected_three = 0
                    this.five = true
                    this.six = false
                }

            }
        },
    };
</script>

<style lang="scss" scoped>
    #confess_content {
        .clickbtn, .clickbtn1, .clickbtn2 {
            width: 26px;
            height: 13px;
            position: absolute;
            z-index: 2;
        }
        .clickbtn1 {
            width: 32px;
        }
        .clickbtn2 {
            width: 20px;
        }
        .des_list {
            background-color: rgba(37, 54, 104, 0.5);
            position: absolute;
            font-size: 0.12rem;
            color: #fff;
            border-radius: 0.04rem;
        }
        width: 100%;
        #banner {
            position: relative;
        }
        /* 关于地图内容的调整期 */
        .map {
            width: 100%;
            margin-top: 93px;
            background-color: #dadbdb;
            overflow: hidden;
        }
        .banner {
            width: 220px;
            height: 80px;
            background: url("../../assets/img/gasmap/sale_banner.png");
            position: absolute;
            top: 150px;
            left: 15px;
            // z-index: 1;
            h4 {
                color: #fff;
                font: bolder 12px MicrosoftYaHei;
                padding-top: 15px;
                padding-left: 30px;
            }
            p {
                font: 500 12px MicrosoftYaHei;
                padding-top: 5px;
                padding-left: 30px;
                color: #fff;
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
                width: 100%;
            }
            &.module {
                margin: 10px 0;
                padding: 10px 0 15px;
            }
            h4 {
                font: 500 13px 微软雅黑;
                color: #394564;
                line-height: 3em;
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
            margin-bottom: 22px;
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
        margin: 0 15px;
        overflow-x: auto;
        .table_one {
            font-family: PingFang SC;
            width: 100%;
            border-collapse: collapse;
            margin: 20px auto;
            th, td {
                font-size: 14px;
                border: 1px solid #b9bec9;
                padding: 3px 7px 2px 7px;
                text-align: center;
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

    .echarts_three {
        background-image: url(../../assets/img/industryAnalysis/椭圆.png);
        background-repeat: no-repeat;
        background-position: 50% 38%;
        background-size: 65px 65px;
    }

    .echarts_four {
        background-image: url(../../assets/img/industryAnalysis/椭圆.png);
        background-repeat: no-repeat;
        background-position: 50% 38%;
        background-size: 65px 65px;
    }

    .fontSize {
        position: relative;
        top: 76px;
        font: 16px bolder microsoft-yahei;
        &.onlynum {
            top: 88px;
        }
    }

    .echarts {
        background-image: url("../../assets/img/industryAnalysis/椭圆.png");
        background-repeat: no-repeat;
        background-position: 50% 37%;
        background-size: 65px 65px;
    }
</style>
