<template>
    <div class="child3" style="background-color: #E6E8EC;">
        <div class="map-box">
            <img class="map" src="../../assets/img/oilgas/chuqi.png"/>
            <!--地图定位-->
            <div>
                <div class="clickbtn" v-for="(item,index) in posList"
                     :style="{'left':be_click_left(item.left),'top':be_click_top(item.top)}"
                     @click="showDes(index)"
                ></div>
            </div>
            <div>
                <div v-for="(item,index) in desList"
                     :style="{'left':be_click_left(item.left),'top':be_click_top(item.top)}"
                     class="des_list"
                     :ref="`list${index}`"
                     v-show="index==desIndex&&showFlag"
                >
                    <div>{{item.name}}</div>
                    <div>租赁储罐数量：{{item.num1}}个</div>
                    <div>自建储罐数量：{{item.num2}}个</div>
                    <div>储气设施总容积：{{item.total}}亿立方米</div>
                    <div>城燃企业5%储气量：{{item.cpy}}亿立方米</div>
                    <div>地方政府3天储气量：{{item.city}}亿立方米</div>
                </div>
            </div>
        </div>
        <!--饼图-->
        <div style="background-color: #fff;padding-top: 18px;margin-top: 6px;">
            <div class="scFristqh">
                <el-tabs v-model="activeNamePie" @tab-click="handlePieClick">
                    <el-tab-pane :label=tabList[0] name="1"></el-tab-pane>
                    <el-tab-pane :label=tabList[1] name="2"></el-tab-pane>
                </el-tabs>
            </div>
            <div class="tabs-content">
                <div v-show="desIndex==null">
                    <div v-show="activeNamePie==='1'">
                        <div class="fontSize_div">
                            <div class="fontSize" style="top:92px">0.508</div>
                            <div class="fontSize" style="font-size: 14px;top:92px">亿立方米</div>
                        </div>
                        <div id="gasPieTwo" style="width:100%;height:240px;"></div>
                    </div>
                    <div v-show="activeNamePie==='2'">
                        <div class="fontSize_div">
                            <div class="fontSize" style="top:92px">0.8543</div>
                            <div class="fontSize" style="font-size: 14px;top:92px">亿立方米</div>
                        </div>
                        <div id="gasPieThree" style="width:100%;height:240px;" ref="second"></div>
                        <div>
                        </div>
                    </div>
                </div>
                <div v-show="desIndex!=null">
                    <div id="barOneChuQi" style="width:100%;height:240px;"></div>
                </div>

            </div>
        </div>
        <div style="background-color: #fff;padding-top: 18px;margin-top: 6px;">
            <div class="title">
                本年度储气能力
            </div>
            <div class="content">
                <div class="fontSize_div">
                    <div class="fontSize" style="top:92px">{{pie_num}}</div>
                    <div class="fontSize" style="font-size: 14px;top:92px">个</div>
                </div>
                <div id="gasPie" style="width: 100%;height: 240px"></div>
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
                    //乌海市储气
                    {
                        left: '0.284',
                        top: '1.05'
                    },
                    //鄂尔多斯市储气
                    {
                        left: '0.358',
                        top: '1.07'
                    },
                    //巴彦淖尔储气
                    {
                        left: '0.378',
                        top: '0.947'
                    },
                    //包头市储气
                    {
                        left: '0.428',
                        top: '0.944'
                    },
                    //呼和浩特市储气
                    {
                        left: '0.478',
                        top: '0.964'
                    },
                    //通辽市储气
                    {
                        left: '0.786',
                        top: '0.864'
                    }
                ],//地图弹窗位置
                desList: [
                    {
                        name: '乌海市储气情况',
                        num1: '1',
                        num2: '2',
                        total: '0.42',
                        cpy: '0.16',
                        city: '0.26',
                        left: '0.194',
                        top: '0.615'
                    },
                    {
                        name: '鄂尔多斯市储气情况',
                        num1: '1',
                        num2: '2',
                        total: '0.46',
                        cpy: '0.2',
                        city: '0.26',
                        left: '0.274',
                        top: '0.641'
                    },
                    {
                        name: '巴彦淖尔市储气情况',
                        num1: '1',
                        num2: '2',
                        total: '0.44',
                        cpy: '0.18',
                        city: '0.26',
                        left: '0.244',
                        top: '0.515'
                    },
                    {
                        name: '包头市储气情况',
                        num1: '1',
                        num2: '2',
                        total: '0.45',
                        cpy: '0.19',
                        city: '0.26',
                        left: '0.244',
                        top: '0.515'
                    },
                    {
                        name: '呼和浩特市储气情况',
                        num1: '1',
                        num2: '2',
                        total: '0.44',
                        cpy: '0.17',
                        city: '0.26',
                        left: '0.244',
                        top: '0.525'
                    },
                    {
                        name: '通辽市储气情况',
                        num1: '1',
                        num2: '2',
                        total: '0.47',
                        cpy: '0.21',
                        city: '0.26',
                        left: '0.444',
                        top: '0.435'
                    }
                ],//弹窗内容
                screenWidth: document.body.clientWidth, // 屏幕宽
                activeNamePie: '1',
                tabPosition: 'left',
                gasPieTwoLegend: ['鄂尔多斯', '呼和浩特', '巴彦淖尔'],
                gasPieThreeLegend: ['乌海', '通辽', '巴彦淖尔', '鄂尔多斯', '包头', '呼和浩特'],
                gasPieTwoData: [
                    {
                        value: 0.436,
                        name: "鄂尔多斯"
                    },
                    {
                        value: 0.06,
                        name: "呼和浩特"
                    },
                    {
                        value: 0.012,
                        name: "巴彦淖尔"
                    }
                ],
                gasPieThreeData: [
                    {
                        value: 0.03,
                        name: "乌海"
                    },
                    {
                        value: 0.0177,
                        name: "通辽"
                    },
                    {
                        value: 0.04,
                        name: "巴彦淖尔"
                    },
                    {
                        value: 0.1082,
                        name: "鄂尔多斯"
                    },
                    {
                        value: 0.2556,
                        name: "包头"
                    },
                    {
                        value: 0.4088,
                        name: "呼和浩特"
                    }
                ],
                desIndex: null,
                /*drawGasPieData:[
                    // 合计
                    [
                        {
                            name:'城燃企业5%',
                            value:'1.11'
                        },
                        {
                            name:'地方政府3天',
                            value:'1.56'
                        }
                    ],
					// 各市
                    [
                        {
                            name:'城燃企业5%',
                            value:'0.16'
                        },
                        {
                            name:'地方政府3天',
                            value:'0.26'
                        }
					],
                    [
                        {
                            name:'城燃企业5%',
                            value:'0.2'
                        },
                        {
                            name:'地方政府3天',
                            value:'0.26'
                        }
                    ],
                    [
                        {
                            name:'城燃企业5%',
                            value:'0.18'
                        },
                        {
                            name:'地方政府3天',
                            value:'0.26'
                        }
                    ],
                    [
                        {
                            name:'城燃企业5%',
                            value:'0.19'
                        },
                        {
                            name:'地方政府3天',
                            value:'0.26'
                        }
                    ],
                    [
                        {
                            name:'城燃企业5%',
                            value:'0.17'
                        },
                        {
                            name:'地方政府3天',
                            value:'0.26'
                        }
                    ],
                    [
                        {
                            name:'城燃企业5%',
                            value:'0.21'
                        },
                        {
                            name:'地方政府3天',
                            value:'0.26'
                        }
                    ]

				],*/
                drawGasPieData: [{
                    name: '已建设储气能力',
                    value: 38
                },
                    {
                        name: '正建设储气能力',
                        value: 4
                    },
                    {
                        name: '待建设储气能力',
                        value: 1
                    }],
                pie_num: 43,
                // pie:[2.67,0.42,0.46,0.44,0.45,0.43,0.47],
                showFlag: false,
                drawBarOneLengend: ['城燃企业5%要求储气量', '城燃企业5%实际储气量'],
                drawBarTwoLengend: ['地方政府3天要求储气量', '地方政府3天实际储气量'],
                drawBarOnexAxisData: [
                    ['乌海凯杰燃气有限公司'],
                    ['鄂尔多斯市正腾投资有限责任公司', '伊金霍洛旗住房和城乡建设局', '准格尔旗国资燃气热力有限责任公司', '内蒙古新圣天然气管道有限公司', '鄂尔多斯市通惠燃气有限公司'],
                    ['巴彦淖尔市腾洁燃气有限责任公司'],
                    ['内蒙古华亿能源股份有限公司', '包头市燃气有限公司', '包头港华燃气有限公司', '内蒙古中浩燃气有限公司'],
                    ['呼和浩特中燃城市燃气发展有限公司', '呼和浩特市世洁燃气有限责任公司', '呼和浩特市昊源燃气有限责任公司'],
                    ['霍林郭勒市吉星燃气有限责任公司', '霍林惠民市吉星燃气有限责任公司', '内蒙古中海博通天然气有限公司', '科尔沁左翼后旗水利汽车加油加气站', '科尔沁左翼后旗奥德燃气有限公司', '奈曼旗日新燃气有限公司']
                ],
                drawBarTwoxAxisData: [
                    [],
                    ['鄂尔多斯市正腾投资有限责任公司', '鄂托克旗人民政府',
                        '鄂尔多斯市东胜区能源局', '伊金霍洛旗住房和城乡建设局', '乌审旗人民政府', '准格尔旗国资燃气热力有限责任公司', '杭锦旗能源局', '达拉特旗能源局', '鄂尔多斯市通惠燃气有限公司'],
                    ['巴彦淖尔市住房和城乡建设局'],
                    [],
                    ['呼和浩特市燃气热力有限公司'],
                    []
                ],
                drawBarOneSeriesName: ['城燃企业5%要求储气量', '城燃企业5%实际储气量'],
                drawBarTwoSeriesName: ['地方政府3天要求储气量', '地方政府3天实际储气量'],
                drawBarOneSeriesData: [
                    [
                        {
                            plan: [0.03],
                            actur: [0.0278]
                        }
                    ],
                    [
                        {
                            plan: [0.00756, 0.02, 0.02, 0.03184, 0.0078],
                            actur: [0.00696, 0.0189, 0.0198, 0.03184, 0.00698]
                        }
                    ],
                    [
                        {
                            plan: [0.04],
                            actur: [0.0376]
                        }
                    ],
                    [
                        {
                            plan: [0.036, 0.18, 0.0096, 0.03],
                            actur: [0.0345, 0.176, 0.00891, 0.0278]
                        }
                    ],
                    [
                        {
                            plan: [0.334, 0.067, 0.007],
                            actur: [0.325, 0.0576, 0.00691]
                        }
                    ],
                    [
                        {
                            plan: [0.00223, 0.00164, 0.00165, 0.00176, 0.00231, 0.00211],
                            actur: [0.00213, 0.00157, 0.00154, 0.00156, 0.00211, 0.00191]
                        }
                    ]
                ],
                drawBarTwoSeriesData: [
                    [
                        {
                            plan: [],
                            actur: []
                        }
                    ],
                    [
                        {
                            plan: [0.0546, 0.09, 0.012, 0.004, 0.0252, 0.003, 0.108, 0.022, 0.002],
                            actur: [0.0534, 0.087, 0.012, 0.0037, 0.0232, 0.003, 0.098, 0.021, 0.0017]
                        }
                    ],
                    [
                        {
                            plan: [0.012],
                            actur: [0.0119]
                        }
                    ],
                    [
                        {
                            plan: [],
                            actur: []
                        }
                    ],
                    [
                        {
                            plan: [0.06],
                            actur: [0.056]
                        }
                    ],
                    [
                        {
                            plan: [],
                            actur: []
                        }
                    ]
                ],
                tabList: ['全区地方政府3天储气占比', '全区城燃企业5%储气占比'],
                tabListAll: [
                    ['全区地方政府3天储气占比', '全区城燃企业5%储气占比'],
                    ['乌海地方政府3天储气占比', '乌海城燃企业5%储气占比'],
                    ['鄂尔多斯地方政府3天储气占比', '鄂尔多斯城燃企业5%储气占比'],
                    ['巴彦淖尔地方政府3天储气占比', '巴彦淖尔城燃企业5%储气占比'],
                    ['包头地方政府3天储气占比', '包头城燃企业5%储气占比'],
                    ['呼和浩特地方政府3天储气占比', '呼和浩特城燃企业5%储气占比'],
                    ['通辽地方政府3天储气占比', '通辽城燃企业5%储气占比'],
                ]
            }
        },
        mounted() {
            this.drawPie('gasPieTwo', this.gasPieTwoLegend, this.gasPieTwoData, "亿立方米", "地方政府3天");
            this.$nextTick(function () {
                this.drawGasPie(this.drawGasPieData, this.pie_num);
            });
        },
        methods: {
            // 用于点击的div块绑定函数
            be_click_left(a) {
                return this.screenWidth * a + 'px'
            },
            be_click_top(a) {
                return 314.5 * a + 'px'
            },
            //本年度储气能力
            drawGasPie(seriesData, pie_num) {
                let myChart = this.$echarts.init(document.getElementById('gasPie'));
                let option = {
                    tooltip: {
                        trigger: "item",
                        position: "bottom",
                        formatter: "{a} <br/>{b}: {c}个({d}%)"
                    },
                    legend: {
                        orient: 'horizontal',
                        bottom: 10,
                        left: "center",
                        itemGap: 10,
                        data: ["已建设储气能力", "正建设储气能力", "待建设储气能力"],
                        itemWidth: 15,
                        itemHeight: 10,
                    },
                    series: [{
                        name: '本年度储气能力',
                        type: "pie",
                        radius: ["40%", "55%"],
                        center: ["50%", "50%"],
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
                                        '#95F0F1', '#FF850D', '#ffc522'
                                    ];
                                    return colorList[params.dataIndex]
                                }
                            }


                        },

                    }]
                };
                // 使用刚指定的配置项和数据显示图表。
                myChart.setOption(option);
                this.pie_num = pie_num

            },
            //地方政府3天
            drawPie(id, legedData, seriesData, unit, name) {
                let myChart = this.$echarts.init(document.getElementById(id));
                let option = {
                    tooltip: {
                        trigger: "item",
                        position: "bottom",
                        formatter: "{a} <br/>{b}: {c}" + unit + "({d}%)",
                    },
                    legend: {
                        orient: "horizontal",
                        bottom: 10,
                        left: "center",
                        itemGap: 10,
                        data: legedData,
                        itemWidth: 15,
                        itemHeight: 10
                    },
                    grid: {
                        bottom: 40
                    },
                    series: [{
                        name: name,
                        type: "pie",
                        radius: ["40%", "55%"],
                        center: ["50%", "50%"],
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

                    }]
                };
                // 使用刚指定的配置项和数据显示图表。
                myChart.setOption(option);

            },
            // 地方政府3天tab切换
            handlePieClick(tab, event) {
                if (tab.index == 1) {
                    if (this.desIndex == null) {
                        this.$nextTick(() => {
                            this.drawPie('gasPieThree', this.gasPieThreeLegend, this.gasPieThreeData, "亿立方米", "城燃企业5%");
                        })
                    } else {
                        this.drawBarOne(this.drawBarOneLengend, this.drawBarOnexAxisData[this.desIndex],
                            this.drawBarOneSeriesName, this.drawBarOneSeriesData[this.desIndex])
                    }
                } else {
                    if (this.desIndex == null) {
                        this.$nextTick(() => {
                            this.drawPie('gasPieTwo', this.gasPieTwoLegend, this.gasPieTwoData, "亿立方米", "地方政府3天");
                        })
                    } else {
                        this.drawBarOne(this.drawBarTwoLengend, this.drawBarTwoxAxisData[this.desIndex],
                            this.drawBarTwoSeriesName, this.drawBarTwoSeriesData[this.desIndex])
                    }

                }

            },

            //各盟市储气占比柱状图
            drawBarOne(legendData, xAxisData, seriesName, seriesData) {
                let myChart = this.$echarts.init(document.getElementById('barOneChuQi'));
                // 指定图表的配置项和数据
                myChart.setOption({
                    tooltip: {
                        trigger: "axis",
                        formatter: '{a0}{b0}: {c0}亿立方米<br /> {a1}{b1}: {c1}亿立方米',
                        axisPointer: {
                            type: "cross",
                            crossStyle: {
                                color: "#999",
                            },
                        },
                        textStyle: {
                            fontSize: 12
                        },
                        position: [2, 5]
                    },
                    legend: {
                        data: legendData
                    },
                    xAxis: [
                        {
                            type: "category",
                            data: xAxisData,
                            axisPointer: {
                                type: "shadow",
                            },
                            axisLabel: {
                                fontSize: 12,
                                //坐标轴刻度标签的相关设置。
                                formatter: function (params) {
                                    var newParamsName = "";// 最终拼接成的字符串
                                    var paramsNameNumber = params.length;// 实际标签的个数
                                    var provideNumber = 4;// 每行能显示的字的个数
                                    var rowNumber = Math.ceil(paramsNameNumber / provideNumber);// 换行的话，需要显示几行，向上取整
                                    /**
                                     * 判断标签的个数是否大于规定的个数， 如果大于，则进行换行处理 如果不大于，即等于或小于，就返回原标签
                                     */
                                    // 条件等同于rowNumber>1
                                    if (paramsNameNumber > provideNumber) {
                                        /** 循环每一行,p表示行 */
                                        for (var p = 0; p < rowNumber; p++) {
                                            var tempStr = "";// 表示每一次截取的字符串
                                            var start = p * provideNumber;// 开始截取的位置
                                            var end = start + provideNumber;// 结束截取的位置
                                            // 此处特殊处理最后一行的索引值
                                            if (p == rowNumber - 1) {
                                                // 最后一次不换行
                                                tempStr = params.substring(start, paramsNameNumber);
                                            } else {
                                                // 每一次拼接字符串并换行
                                                tempStr = params.substring(start, end) + "\n";
                                            }
                                            newParamsName += tempStr;// 最终拼成的字符串
                                        }

                                    } else {
                                        // 将旧标签的值赋给新标签
                                        newParamsName = params;
                                    }
                                    //将最终的字符串返回
                                    return newParamsName
                                }
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
                        }
                    ],
                    series: [
                        {
                            name: seriesName[0],
                            type: "bar",
                            barWidth: 6,
                            itemStyle: {
                                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {offset: 0, color: "#63edd4"},
                                    {offset: 1, color: "rgba(14, 137, 238, 1)"},
                                ]),
                            },
                            data: seriesData[0].plan
                        },
                        {
                            name: seriesName[1],
                            type: "bar",
                            barWidth: 6,
                            itemStyle: {
                                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {offset: 0, color: "#FFE6A3"},
                                    {offset: 1, color: "#FF8B2E"},
                                ]),
                            },
                            data: seriesData[0].actur
                        }
                    ],
                });
            },

            showDes(index) {
                if (this.desIndex == index) {
                    if (this.$refs[`list${index}`][0].style.display == 'none') {
                        this.showFlag = true
                        this.desIndex = index;
                        if (this.activeNamePie == '1') {
                            this.$nextTick(function () {
                                this.drawBarOne(this.drawBarTwoLengend, this.drawBarTwoxAxisData[index],
                                    this.drawBarTwoSeriesName, this.drawBarTwoSeriesData[index])
                            });
                        } else {
                            this.$nextTick(function () {
                                this.drawBarOne(this.drawBarOneLengend, this.drawBarOnexAxisData[index], this.drawBarOneSeriesName, this.drawBarOneSeriesData[index])
                            });
                        }
                        this.tabList = this.tabListAll[index + 1];
                    } else {
                        this.showFlag = false;
                        this.desIndex = null;
                        this.tabList = this.tabListAll[0];
                        if (this.activeNamePie == '2') {
                            this.$nextTick(() => {
                                this.drawPie('gasPieThree', this.gasPieThreeLegend, this.gasPieThreeData, "亿立方米", "城燃企业5%");
                            })
                        } else {
                            this.$nextTick(() => {
                            this.drawPie('gasPieTwo', this.gasPieTwoLegend, this.gasPieTwoData, "亿立方米", "地方政府3天");
                            })
                        }

                    }
                } else {
                    this.desIndex = index;
                    this.showFlag = true;
                    this.tabList = this.tabListAll[index + 1];
                    if (this.activeNamePie == '1') {
                        this.$nextTick(function () {
                            this.drawBarOne(this.drawBarTwoLengend, this.drawBarTwoxAxisData[index],
                                this.drawBarTwoSeriesName, this.drawBarTwoSeriesData[index])
                        });
                    } else {
                        this.$nextTick(function () {
                            this.drawBarOne(this.drawBarOneLengend, this.drawBarOnexAxisData[index], this.drawBarOneSeriesName, this.drawBarOneSeriesData[index])
                        });
                    }
                }

            }
        }
    }
</script>

<style scoped lang="scss">
    .child3 {
        .des_list {
            background-color: rgba(37, 54, 104, 0.5);
            position: absolute;
            padding: 0.08rem;
            font-size: 0.12rem;
            width: 4rem;
            color: #fff;
            border-radius: 0.04rem;
        }
        .clickbtn {
            width: 13px;
            height: 13px;
            position: absolute;
            z-index: 2;
        }
        .map {
            margin-top: 93px;
            width: 100%;
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

        .scFristqh /deep/ .el-tabs__active-bar,
        .scFristqh /deep/ .el-tabs__nav-wrap::after {
            display: none;
        }

        .scFristqh /deep/ .el-tabs__nav-scroll {
            height: 31px;
        }

        #gasPieTwo, #gasPie,
        #gasPieThree {
            background-image: url(../../assets/img/industryAnalysis/椭圆.png);
            background-repeat: no-repeat;
            background-position: 50% 50%;
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

        .map-box {
            position: relative;
        }

        map-box /deep/ .des {
            font-size: 12px;
            color: #7D87A1;
        }

        .map-content {
            position: absolute;
            background: rgba(248, 251, 254, 0.77);
            border: 1px solid #D6E6F4;
            box-shadow: 0 0 35px 0 rgba(119, 148, 193, 0.45);
            border-radius: 3px;
            top: 140px;
            left: 19px;
        }

        .map-box /deep/ .el-tabs__nav-wrap::after {
            display: none;
        }

        .map-box /deep/ .el-tabs--left .el-tabs__item.is-left {
            text-align: left;
        }

        .map-box /deep/ .el-tabs__item.is-active {
            background-color: #e8f2fe;
            color: #7D87A1;
        }

        .map-box /deep/ .el-tabs--left .el-tabs__header.is-left {
            margin-right: 0;
        }

        .map-box /deep/ .el-tabs__active-bar {
            display: none;
        }

        .map-box /deep/ .el-tabs__item {
            color: #7D87A1;
            height: 30px;
            line-height: 30px;
        }

        .modal {
            position: absolute;
            background-image: url(../../assets/img/oilgas/chuqimodal.png);
            border-radius: 3px;
            top: 150px;
            left: 180px;
            color: #fff;
            height: 200px;
            width: 200px;
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            padding: 18px 10px 10px;
        }

        .modal-des-box {
            background-color: rgba(106, 113, 129, 0.7);
            text-align: center;
            width: 85px;
            margin-bottom: 10px;
            font-size: 12px;
        }

        .modal-city {
            font-size: 13px;
            margin-bottom: 10px;
            text-align: center;
        }

        .modal-box {
            display: flex;
            justify-content: space-between;
        }

        .modal .modal-title {
            color: #8fc8fa;
        }

        .modal .model-des {
            font-weight: bold;
        }
        .el-tabs__nav {
            z-index: 1;
        }
    }
</style>
