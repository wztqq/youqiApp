<template>
    <div>
        <div id="confess_content" style="background-color: #dadbdb">

            <!-- banner -->
            <img class="map"
                 src="../../assets/img/oilgas/yafeibaomin.png"
                 alt="图片未显示"/>
            <!--地图定位-->
            <div>
                <div :class="item.class" v-for="(item,index) in posList"
                     :style="{'left':be_click_left(item.left),'top':be_click_top(item.top)}"
                     @click="showDes(index)"
                ></div>
            </div>
            <!-- 天然气日消费缺口预测 && 调峰计划建议 -->
            <div class="chart" style="height: 100%;">
                <div class="chart-item" id="table">
                    <table class="table_one">
                        <tr>
                            <th :width="th.width" v-for="(th,index) in tableTh_two" :key="index">{{th.value}}</th>
                        </tr>
                        <tr v-for="(tr,index) in listData_two" :key="index">
                            <td>{{index+1}}</td>
                            <td v-for="(td,index) in tr" :key="index" v-html="td"></td>
                        </tr>
                    </table>
                </div>
            </div>
            <!-- 日调峰同比分析 -->
            <div class="chart module">
                <h4>{{title}}</h4>
                <van-dropdown-menu style="margin-bottom: 0.06rem">
                    <van-dropdown-item v-model="value1" :options="option1" @change="changeOne"/>
                </van-dropdown-menu>
                <van-dropdown-menu style="margin-bottom: 0.08rem">
                    <van-dropdown-item v-model="value2" :options="option2" @change="changeTwo"/>
                </van-dropdown-menu>
                <div style="width: 100%;height:242px" id="yafeiBar"></div>
                <!--<barline-two-chart :optionObj="optionObjYTF" @showBar="showBar"></barline-two-chart>-->
            </div>
            <div v-for="(item,index) in desList"
                 class="des_list"
                 :ref="`list${index}`"
                 v-show="desIndex==index&&showFlag"
            >
            </div>
            <!-- 日调峰气量盟市占比 && 日调峰气量企业占比 -->
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
                <div class="chart-item" v-if="selected_one === 0">
                    <div class="fontSize_div">
                        <div class="fontSize">{{pie_num}}</div>
                        <div class="fontSize">万立方米</div>
                    </div>
                    <dount-chart class="echarts" :optionObj="optionObjTFJGFX"></dount-chart>
                </div>
                <div class="chart-item" v-if="selected_one === 1">
                    <div class="fontSize_div">
                        <div class="fontSize">9675</div>
                        <div class="fontSize">万立方米</div>
                    </div>
                    <dount-chart class="echarts" :optionObj="optionObjTFMS"></dount-chart>
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
            barlineChart: () => import("@/components/barLine_chart"),
            doublelineChart: () => import("@/components/doubleLine_chart"),
            barlineTwoChart: () => import("@/components/barLineTwo_chart"),
        },
        data() {
            return {
                value1: 0,
                option1: [
                    {text: '上游调峰企业', value: 0},
                    {text: '中游调峰企业', value: 1},
                    {text: '下游调整企业', value: 2}
                ],
                option2: [
                    {text: '中石油', value: 0},
                    {text: '中石化', value: 1}
                ],
                value2: 0,
                desList: ['', '', '', '', ''],
                posList: [
                    //呼和浩特
                    {
                        left: '0.484',
                        top: '0.98',
                        class: 'clickbtn1'
                    },
                    //鄂尔多斯
                    {
                        left: '0.359',
                        top: '1.02',
                        class: 'clickbtn2'
                    },
                    //包头
                    {
                        left: '0.434',
                        top: '0.93',
                        class: 'clickbtn1'
                    },
                    //巴彦淖尔
                    {
                        left: '0.334',
                        top: '0.934',
                        class: 'clickbtn'
                    },
                    //通辽
                    {
                        left: '0.79',
                        top: '0.84',
                        class: 'clickbtn'
                    },


                ],//地图弹窗位置
                selected_one: 0,
                selected_two: 0,
                selected_three: "0",
                tablist_one: [ "日调峰气量企业占比","日调峰气量盟市占比"],
                tablist_one_change:['日调峰气量企业占比','呼和浩特日调峰气量企业占比','鄂尔多斯日调峰气量企业占比','包头日调峰气量企业占比','巴彦淖尔日调峰气量企业占比','通辽日调峰气量企业占比'],
                tablist_two: ["天然气日消费缺口预测", "调峰计划建议"],
                tableTh_two: [
                    {
                        value: "序号",
                        width: 60,
                    },
                    {
                        value: "地区",
                        width: 150,
                    },
                    {
                        value: "未来3日日均缺口量",
                        width: 270,
                    },
                    {
                        value: "日均气化量",
                        width: 200,
                    },
                    {
                        value: "调峰建议",
                        width: 100,
                    }
                ],
                listData_two: [
                    {
                        area: "呼和浩特市",
                        pitchPlan: "14万立方米",
                        level: "12万立方米",
                        date: "减少日用气量4%",
                    },
                    {
                        area: "鄂尔多斯市",
                        pitchPlan: "17万立方米",
                        level: "18万立方米",
                        date: "停止供气",
                    },
                    {
                        area: "包头市",
                        pitchPlan: "23万立方米",
                        level: "24万立方米",
                        date: "停止供气",
                    },
                    {
                        area: "巴彦淖尔市",
                        pitchPlan: "15万立方米",
                        level: "12万立方米",
                        date: "减小日用气量12%",
                    },
                ],
                listData_copy: [
                    {
                        area: "呼和浩特市",
                        pitchPlan: "14万立方米",
                        level: "12万立方米",
                        date: "减少日用气量4%",
                    },
                    {
                        area: "鄂尔多斯市",
                        pitchPlan: "17万立方米",
                        level: "18万立方米",
                        date: "停止供气",
                    },
                    {
                        area: "包头市",
                        pitchPlan: "23万立方米",
                        level: "24万立方米",
                        date: "停止供气",
                    },
                    {
                        area: "巴彦淖尔市",
                        pitchPlan: "15万立方米",
                        level: "12万立方米",
                        date: "减小日用气量12%",
                    },
                ],
                optionObjTFMS: {
                    legendData: ["巴彦淖尔", "包头", "呼和浩特", "鄂尔多斯", "乌海", "通辽"],
                    seriesName: "调峰结构分析",
                    unit: "万立方米",
                    seriesData:[
                        {value: (9675 * 0.2265).toFixed(2), name: "巴彦淖尔"},
                        {value: (9675 * 0.2096).toFixed(2), name: "包头"},
                        {value: (9675 * 0.1582).toFixed(2), name: "呼和浩特"},
                        {value: (9675 * 0.0913).toFixed(2), name: "鄂尔多斯"},
                        {value: (9675 * 0.0859).toFixed(2), name: "乌海"},
                        {value: (9675 * 0.2285).toFixed(2), name: "通辽"},
                    ]
                },
                optionObjTFJGFX: {
                    legendData: ["LNG", "甲醇化肥", "可中断工业", "不可中断工业", "商业"],
                    seriesName: "调峰结构分析",
                    unit: "万立方米",
                    seriesData: [],
                },
                optionObjYTF: {
                    legendData: ["调峰量", "同比变化"],
                    yLeftName: "万立方米",
                    yRightName: "%",
                    xData: ["10月", "11月", "12月", "1月", "2月", "3月",],
                    seriesLeftData: [],
                    seriesRightData: [],
                    barWidth: 10,
                    lineWidth: 2,
                    symbolSize: 8,
                    /*  leftMin: 0,
                      leftMax: 25,
                      leftInterval: 5,*/
                    // rightMin: -20,
                    // rightMax: 80,
                    // rightInterval: 1
                },
                optionObjYTFLeftData: [
                    [71, 62, 74, 88, 75, 62],
                    //呼和浩特
                    [40, 41, 42, 43, 48, 51],
                    //鄂尔多斯
                    [53, 52, 42, 41, 47, 56],
                    //包头市
                    [47, 46, 49, 52, 51, 56],
                    //巴彦淖尔
                    [50, 43, 52, 46, 54, 46],
                    //通辽
                    [54, 52, 53, 49, 47, 46],
                ],
                optionObjYTFRightData: [
                    [45, 50, 41, 47, 49, 53],
                    //呼和浩特
                    [23, 21, 24, 25, 27, 31],
                    //鄂尔多斯
                    [35, 29, 30, 25, 27, 31],
                    //包头市
                    [33, 27, 28, 35, 29, 30],
                    //巴彦淖尔
                    [25, 27, 31, 23, 21, 24],
                    //通辽
                    [28, 26, 32, 35, 34, 33],
                ],
                optionObjLineQKYC: {
                    yName: "万立方米",
                    legendData: ["日需求量", "日供应量"],
                    seriesName1: "日需求量",
                    seriesName2: "日供应量",
                    xData: ["1月1日", "1月3日", "1月5日", "1月7日", "1月9日", "1月11日", "1月13日", "1月15日", "1月17日", "1月19日"],
                    seriesData1: [6, 13, 18, 13, 13, 18, 13, 9, 13, 9],
                    seriesData2: [4, 8, 15, 9, 7, 11, 9, 11, 6, 5],
                },
                pie_num: 1470,
                pie_numAry:[1470,467,475,509,509,261],
                screenWidth: document.body.clientWidth, // 屏幕宽
                desIndex: null,
                title: '天然气日调峰量趋势分析',
                titleArry: ['天然气日调峰量趋势分析', '呼和浩特天然气日调峰量趋势分析', '鄂尔多斯天然气日调峰量趋势分析', '包头天然气日调峰量趋势分析', '巴彦淖尔天然气日调峰量趋势分析', '通辽天然气日调峰量趋势分析'],
                showFlag: false,
                barOneSer: [
                    //总
                    [
                        {
                            actur: [15, 11, 18, 16, 18, 24, 14],
                            plan: [16, 13, 19, 16, 17, 22, 18],
                            compare: [24, 18, 15, 28, 27, 31, 19]
                        }
                    ],
                    //呼和浩特
                    [
                        {
                            actur: [41, 43, 55, 57, 56, 43, 55],
                            plan: [32, 27, 21, 24, 29, 27, 21],
                            compare: [27, 18, 26, 15, 13, 18, 26]
                        }
                    ],
                    //鄂尔多斯
                    [
                        {
                            actur: [53, 52, 42, 47, 56, 42, 51],
                            plan: [35, 29, 30, 27, 31, 24, 31],
                            compare: [16, 19, 19, 12, 17, 21, 28]
                        }
                    ],
                    //包头市
                    [
                        {
                            actur: [52, 46, 54, 46, 43, 42, 51],
                            plan: [17, 18, 16, 20, 24, 24, 31],
                            compare: [18, 15, 28, 27, 19, 21, 28]
                        }
                    ],
                    //巴彦淖尔
                    [
                        {
                            actur: [54, 52, 53, 46, 41, 42, 51],
                            plan: [28, 26, 32, 33, 21, 24, 31],
                            compare: [19, 27, 27, 18, 28, 21, 28]
                        }
                    ],
                    //通辽
                    [
                        {
                            actur: [23, 25, 31, 30, 24, 25, 27],
                            plan: [18, 19, 16, 17, 18, 22, 24],
                            compare: [24, 26, 30, 29, 27, 23, 20]
                        }
                    ],
                ]
            };
        },
        mounted() {
            this.drawBarOne(this.barOneSer[0])
            this.optionObjYTF.seriesLeftData = this.optionObjYTFLeftData[0]
            this.optionObjYTF.seriesRightData = this.optionObjYTFRightData[0]
            // this.optionObjTFMS.seriesData =
            //     [
            //         {value: (this.pie_num * 0.2265).toFixed(2), name: "巴彦淖尔"},
            //         {value: (this.pie_num * 0.2096).toFixed(2), name: "包头"},
            //         {value: (this.pie_num * 0.1582).toFixed(2), name: "呼和浩特"},
            //         {value: (this.pie_num * 0.0913).toFixed(2), name: "鄂尔多斯"},
            //         {value: (this.pie_num * 0.0859).toFixed(2), name: "乌海"},
            //         {value: (this.pie_num * 0.2285).toFixed(2), name: "通辽"},
            //     ];
            this.optionObjTFJGFX.seriesData =
                [
                    {value: (this.pie_num * 0.1912).toFixed(2), name: "LNG"},
                    {value: (this.pie_num * 0.1769).toFixed(2), name: "甲醇化肥"},
                    {value: (this.pie_num * 0.1336).toFixed(2), name: "可中断工业"},
                    {value: (this.pie_num * 0.0771).toFixed(2), name: "不可中断工业"},
                    {value: (this.pie_num * 0.4212).toFixed(2), name: "商业"},
                ]

        },
        methods: {
            drawBarOne(seriesData) {
                let myChart = this.$echarts.init(document.getElementById('yafeiBar'));
                // 指定图表的配置项和数据
                myChart.setOption({
                    tooltip: {
                        trigger: "axis",
                        formatter: function(params){
                            const cpyAry=['可中断工业','不可中断工业','LNG企业','商业','甲醇化肥'];
                            if(params[0].name=='1月1日'){
                                return params[0].name + '</br>' + params[0].seriesName + ':' + params[0].value+'万立方米'+
                                    '</br>' +
                                    params[1].seriesName  +
                                    params[1].value + '万立方米' + '</br>' +
                                    params[2].seriesName + ':' +
                                    params[2].value + '%' + '</br>'+'调峰单位:' +cpyAry[0]
                            }else if(params[0].name=='1月2日'){
                                return params[0].name + '</br>' + params[0].seriesName + ':' + params[0].value+'万立方米'+
                                    '</br>' +
                                    params[1].seriesName  +
                                    params[1].value + '万立方米' + '</br>' +
                                    params[2].seriesName + ':' +
                                    params[2].value + '%' + '</br>'+'调峰单位:' +cpyAry[1]
                            }else if(params[0].name=='1月3日'){
                                return params[0].name + '</br>' + params[0].seriesName + ':' + params[0].value+'万立方米'+
                                    '</br>' +
                                    params[1].seriesName  +
                                    params[1].value + '万立方米' + '</br>' +
                                    params[2].seriesName + ':' +
                                    params[2].value + '%' + '</br>'+'调峰单位:' +cpyAry[2]
                            }else{
                                return params[0].name + '</br>' + params[0].seriesName + ':' + params[0].value+'万立方米'+
                                    '</br>' +
                                    params[1].seriesName  +
                                    params[1].value + '万立方米' + '</br>' +
                                    params[2].seriesName + ':' +
                                    params[2].value + '%' + '</br>'+'调峰单位:' +cpyAry[2]
                            }


                        },
                        axisPointer: {
                            type: "cross",
                            crossStyle: {
                                color: "#999",
                            },
                        },
                    },
                    legend: {
                        data: ['天然气调峰值', '计划调峰量', '同比变化']
                    },
                    xAxis: [
                        {
                            type: "category",
                            data: [
                                "1月1日",
                                "1月2日",
                                "1月3日",
                                "1月4日",
                                "1月5日",
                                "1月6日",
                                "1月7日",
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
                            name: "万立方米",
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
                        {
                            show: false,
                            name: "%",
                            type: "value",
                            max: 40,
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
                            name: "天然气调峰值",
                            type: "bar",
                            barWidth: 6,
                            itemStyle: {
                                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {offset: 0, color: "#63edd4"},
                                    {offset: 1, color: "rgba(14, 137, 238, 1)"},
                                ]),
                            },
                            data: seriesData[0].actur
                        },
                        {
                            name: "计划调峰量",
                            type: "bar",
                            barWidth: 6,
                            itemStyle: {
                                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {offset: 0, color: "#FFE6A3"},
                                    {offset: 1, color: "#FF8B2E"},
                                ]),
                            },
                            data: seriesData[0].plan
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
                            data: seriesData[0].compare
                        }
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
            //柱状图点击事件
            showBar(params) {
                // this.pie_num = params.value;
                // this.optionObjTFMS.seriesData =
                //     [
                //         {value: (this.pie_num * 0.2265).toFixed(2), name: "巴彦淖尔"},
                //         {value: (this.pie_num * 0.2096).toFixed(2), name: "包头"},
                //         {value: (this.pie_num * 0.1582).toFixed(2), name: "呼和浩特"},
                //         {value: (this.pie_num * 0.0913).toFixed(2), name: "鄂尔多斯"},
                //         {value: (this.pie_num * 0.0859).toFixed(2), name: "乌海"},
                //         {value: (this.pie_num * 0.2285).toFixed(2), name: "通辽"},
                //     ];
                // this.optionObjTFJGFX.seriesData =
                //     [
                //         {value: (this.pie_num * 0.1912).toFixed(2), name: "LNG"},
                //         {value: (this.pie_num * 0.1769).toFixed(2), name: "甲醇化肥"},
                //         {value: (this.pie_num * 0.1336).toFixed(2), name: "可中断工业"},
                //         {value: (this.pie_num * 0.0771).toFixed(2), name: "不可中断工业"},
                //         {value: (this.pie_num * 0.4212).toFixed(2), name: "商业"},
                //     ]
            },
            // 点击地图的点联动
            showDes(index) {
                if (this.desIndex == index) {
                    if (this.$refs[`list${index}`][0].style.display == 'none') {
                        this.showFlag = true;
                        this.desIndex = index;
                        this.optionObjYTF.seriesLeftData = this.optionObjYTFLeftData[index + 1];
                        this.optionObjYTF.seriesRightData = this.optionObjYTFRightData[index + 1];
                        this.title = this.titleArry[index + 1]
                        this.$nextTick(function () {
                            this.drawBarOne(this.barOneSer[index + 1])
                        })
                        if (index == 4) {
                            this.listData_two = this.listData_copy;
                        } else {
                            this.listData_two = [this.listData_copy[index]]
                        }
                        this.optionObjTFJGFX.seriesData =
                            [
                                {value: (this.pie_numAry[index+1] * 0.1912).toFixed(2), name: "LNG"},
                                {value: (this.pie_numAry[index+1] * 0.1769).toFixed(2), name: "甲醇化肥"},
                                {value: (this.pie_numAry[index+1] * 0.1336).toFixed(2), name: "可中断工业"},
                                {value: (this.pie_numAry[index+1] * 0.0771).toFixed(2), name: "不可中断工业"},
                                {value: (this.pie_numAry[index+1] * 0.4212).toFixed(2), name: "商业"},
                            ]
                        this.pie_num=this.pie_numAry[index+1]
                        this.tablist_one[0]=this.tablist_one_change[index+1]

                    } else {
                        this.optionObjYTF.seriesLeftData = this.optionObjYTFLeftData[0];
                        this.optionObjYTF.seriesRightData = this.optionObjYTFRightData[0];
                        this.title = this.titleArry[0];
                        this.$nextTick(function () {
                            this.drawBarOne(this.barOneSer[0])
                        })
                        this.optionObjTFJGFX.seriesData =
                            [
                                {value: (this.pie_numAry[0] * 0.1912).toFixed(2), name: "LNG"},
                                {value: (this.pie_numAry[0] * 0.1769).toFixed(2), name: "甲醇化肥"},
                                {value: (this.pie_numAry[0] * 0.1336).toFixed(2), name: "可中断工业"},
                                {value: (this.pie_numAry[0] * 0.0771).toFixed(2), name: "不可中断工业"},
                                {value: (this.pie_numAry[0] * 0.4212).toFixed(2), name: "商业"},
                            ]
                        this.pie_num=this.pie_numAry[0]
                        this.tablist_one[0]=this.tablist_one_change[0]
                        this.listData_two = this.listData_copy;
                        this.showFlag = false;
                        this.desIndex = null;
                    }

                } else {
                    this.desIndex = index;
                    this.showFlag = true;
                    this.optionObjYTF.seriesLeftData = this.optionObjYTFLeftData[index + 1];
                    this.optionObjYTF.seriesRightData = this.optionObjYTFRightData[index + 1];
                    this.title = this.titleArry[index + 1];
                    if (index == 4) {
                        this.listData_two = this.listData_copy;
                    } else {
                        this.listData_two = [this.listData_copy[index]]
                    }
                    this.$nextTick(function () {
                        this.drawBarOne(this.barOneSer[index + 1])
                    })
                    this.optionObjTFJGFX.seriesData =
                        [
                            {value: (this.pie_numAry[index+1] * 0.1912).toFixed(2), name: "LNG"},
                            {value: (this.pie_numAry[index+1] * 0.1769).toFixed(2), name: "甲醇化肥"},
                            {value: (this.pie_numAry[index+1] * 0.1336).toFixed(2), name: "可中断工业"},
                            {value: (this.pie_numAry[index+1] * 0.0771).toFixed(2), name: "不可中断工业"},
                            {value: (this.pie_numAry[index+1] * 0.4212).toFixed(2), name: "商业"},
                        ]
                    this.pie_num=this.pie_numAry[index+1]
                    this.tablist_one[0]=this.tablist_one_change[index+1]
                }


            },

            changeOne() {
                switch (this.value1) {
                    case 0:
                        this.option2 = [{text: '中石油', value: 0},
                            {text: '中石化', value: 1}];
                        this.value2 = 0;
                        this.drawBarOne(this.barOneSer[2]);
                        break;
                    case 1:
                        this.option2 = [{text: '西部天然气', value: 0},
                            {text: '新圣天然气', value: 1}];
                        this.value2 = 0;
                        this.drawBarOne(this.barOneSer[3]);
                        break;
                    case 2:
                        this.option2 = [{text: '西部天然气', value: 0},
                            {text: '新圣天然气', value: 1}, {text: '其他', value: 2}];
                        this.value2 = 0;
                        this.drawBarOne(this.barOneSer[1]);
                        break;
                }
            },
            changeTwo() {
                switch (this.value2) {
                    case 0:
                        this.drawBarOne(this.barOneSer[4]);
                        break;
                    case 1:
                        this.drawBarOne(this.barOneSer[1]);
                        break;
                    case 2:
                        this.drawBarOne(this.barOneSer[2]);
                        break;
                }
            }
        },
    };
</script>

<style lang="scss" scoped>
    #confess_content {
        .clickbtn {
            width: 0.5rem;
            height: 0.32rem;
            position: absolute;
            z-index: 2;
        }
        .clickbtn1 {
            width: 0.3rem;
            height: 0.28rem;
            position: absolute;
            z-index: 2;
        }
        .clickbtn2 {
            width: 0.6rem;
            height: 0.4rem;
            position: absolute;
            z-index: 2;
        }
        width: 100%;
        /* 关于地图内容的调整期 */
        .map {
            width: 100%;
            margin-top: 93px;
            background-color: #dadbdb;
            overflow: hidden;
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
                padding: 0 15px 15px;
                height: 320px;
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
                font-size: 0.12rem;
                border: 1px solid #b9bec9;
                padding: 0.02rem;
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
        background-image: url(../../assets/img/industryAnalysis/椭圆.png);
        background-repeat: no-repeat;
        background-position: 50% 37%;
        background-size: 65px 65px;
    }
</style>
<style lang="scss">
    #confess_content {
        .van-dropdown-menu__bar {
            height: 32px;
        }
        .van-dropdown-menu__title {
            font-size: 12px;
        }
        .van-cell, .van-dropdown-menu__title--active {
            font-size: 12px;
            color: #3A6DDA;
        }
        .van-dropdown-item__option--active .van-dropdown-item__icon {
            color: #3A6DDA;
        }
    }
</style>
