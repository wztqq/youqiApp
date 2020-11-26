<template>
    <div>
        <div id="confess_content" style="background-color: #dadbdb">

            <!-- banner -->
            <div id="banner">
                <img class="map"
                     src="../../assets/img/oilgas/xiaoshou.png"
                     alt="图片未显示"/>
                <!--地图定位-->
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
                         :ref="`list${index}`"
                         v-show="desIndex==index&&showFlag"
                    >
                        <div>{{item.num}}万立方米</div>
                    </div>
                </div>
            </div>

            <!-- 天然气日消费量分析 && 用气单位结构分析 -->
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
                    <barline-one-chart :optionObj="optionObjBarGasXF"></barline-one-chart>
                </div>
                <div class="chart-item" v-if="selected_one === 1">
                    <div class="fontSize_div">
                        <div class="fontSize">0.508</div>
                        <div class="fontSize">亿立方米</div>
                    </div>
                    <dount-chart class="echarts" :optionObj="optionObjYQDW"></dount-chart>
                </div>
            </div>

            <!-- 盟市消费结构分析 && 销售单位结构分析 -->
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
                <div class="chart-item" :key="timer" v-if="selected_two === 0">
                    <div class="fontSize_div">
                        <div class="fontSize">3000</div>
                        <div class="fontSize">万立方米</div>
                    </div>
                    <dount-chart class="echarts" :optionObj="optionObjMS"></dount-chart>
                </div>
                <div class="chart-item" :key="timer" v-if="selected_two === 1">
                    <div class="fontSize_div">
                        <div class="fontSize">3000</div>
                        <div class="fontSize">万立方米</div>
                    </div>
                    <dount-chart class="echarts" :optionObj="optionObjXS"></dount-chart>
                </div>
            </div>

            <!-- 日消费量预测 && 日消费缺口预测 -->
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
                <div class="chart-item" v-if="selected_three === 0">
                    <doublebar-chart :optionObj="optionObjXFYC"></doublebar-chart>
                </div>
                <div class="chart-item" v-if="selected_three === 1">
                    <bothway-chart :optionObj="optionObjXFQKYC"></bothway-chart>
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
            barlineOneChart: () => import("@/components/barLineOne_chart"),
            doublelineChart: () => import("@/components/doubleLine_chart"),
            doublebarChart: () => import("@/components/doublebar_chart"),
            bothwayChart: () => import("@/components/bothway_chart"),
        },
        data() {
            return {
                posList: [
                    //阿拉善盟
                    {
                        left: '0.2',
                        top: '1.0',
                        class: 'clickbtn'
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
                        left: '0.104',
                        top: '0.94'
                    },
                    // 巴彦淖尔
                    {
                        num: '176',
                        left: '0.19',
                        top: '0.87'
                    },
                    // 鄂尔多斯
                    {
                        num: '222',
                        left: '0.28',
                        top: '0.99'
                    },
                    //包头市
                    {
                        num: '203',
                        left: '0.38',
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
                        left: '0.57',
                        top: '0.92'
                    },
                    //锡林郭勒盟
                    {
                        num: '111',
                        left: '0.52',
                        top: '0.74'
                    },
                    //赤峰
                    {
                        num: '149',
                        left: '0.67',
                        top: '0.80'
                    },
                    //通辽
                    {
                        num: '183',
                        left: '0.8',
                        top: '0.895'
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
                tablist_one: ["", "用气单位结构分析"],
                tablist_city:[
                    "天然气日消费量分析",
                    "阿拉善盟天然气日消费量分析",
                    "巴彦淖尔天然气日消费量分析",
                    "鄂尔多斯天然气日消费量分析",
                    "包头天然气日消费量分析",
                    "呼和浩特天然气日消费量分析",
                    "乌兰察布天然气日消费量分析",
                    "锡林郭勒盟天然气日消费量分析",
                    "赤峰天然气日消费量分析",
                    "通辽天然气日消费量分析",
                    "兴安盟天然气日消费量分析",
                    "呼伦贝尔天然气日消费量分析"
                ],
                tablist_two: ["盟市消费结构分析", "销售单位结构分析"],
                tablist_three: ["日消费量预测", "日消费缺口预测"],
                optionObjBarGasXF: {
                    legendData: ["天然气日消费量", "同比变化"],
                    yLeftName: "万立方米",
                    yRightName: "%",
                    xData: ["1月1日", "1月2日", "1月3日", "1月4日", "1月5日", "1月6日", "1月7日"],
                    seriesLeftData: [],
                    seriesRightData: [],
                    barWidth: 10,
                    lineWidth: 2,
                    symbolSize: 8,
                    /* leftMin: 0,
                     leftMax: 25,
                     leftInterval: 5,*/
                    rightMin: -20,
                    rightMax: 20,
                    // rightInterval: 1
                },
                optionObjBarGasXFLeftData:[
                    [160, 177, 163, 169, 159, 179, 169],
                    //阿拉善盟
                    [74, 81, 71, 89, 78, 75, 78],
                    // 巴彦淖尔
                    [173, 154, 168, 179, 195, 177, 166],
                    //鄂尔多斯
                    [211, 240, 241, 222, 201, 235, 212],
                    // 包头市
                    [230, 208, 190, 233, 187, 222, 200],
                    // 呼和浩特
                    [190, 232, 210, 189, 240, 210, 211],
                    // 乌兰察布
                    [132, 149, 132, 153, 144, 149, 122],
                    //锡林郭勒盟
                    [211, 240, 241, 222, 201, 235, 212],
                    // 赤峰
                    [230, 208, 190, 233, 187, 222, 200],
                    // 通辽
                    [74, 81, 71, 89, 78, 75, 78],
                    //兴安盟
                    [173, 154, 168, 179, 195, 177, 166],
                    // 呼伦贝尔
                    [190, 232, 210, 189, 240, 210, 211]
                ],
                optionObjBarGasXFRightData:[
                    [9, 3, -6, 12, 9, 3, 0],
                    //阿拉善盟
                    [10, 4, -3, 5, 9, 14, 12],
                    // 巴彦淖尔
                    [3, 8, 15, 6, 2, -5, 2],
                    // 鄂尔多斯
                    [5, 8, -3, 6, -1, 1, 5],
                    // 包头市
                    [8, 2, 4, -2, -5, 9, 9],
                    // 呼和浩特
                    [4, 9, 15, -7, 16, 7, 3],
                    // 乌兰察布
                    [7, 1, -6, -4, 2, 6, 1],
                    //锡林郭勒盟
                    [5, 8, -3, 6, -1, 1, 5],
                    // 赤峰
                    [8, 2, 4, -2, -5, 9, 9],
                    //通辽
                    [10, 4, -3, 5, 9, 14, 12],
                    // 兴安盟
                    [3, 8, 15, 6, 2, -5, 2],
                    // 呼伦贝尔
                    [4, 9, 15, -7, 16, 7, 3]
                ],
                optionObjYQDW: {
                    legendData: ["工业用户", "商业", "建筑业", "生活消费", "供暖"],
                    seriesName: "用气单位结构分析",
                    unit: "亿立方米",
                    seriesData: [
                        {value: 335, name: "工业用户"},
                        {value: 310, name: "商业"},
                        {value: 234, name: "建筑业"},
                        {value: 135, name: "生活消费"},
                        {value: 738, name: "供暖"},
                    ],
                },
                optionObjMS: {
                    legendData: ["阿拉善盟", "呼和浩特", "锡林郭勒", "呼伦贝尔", "鄂尔多斯", "其他"],
                    seriesName: "盟市消费结构分析",
                    unit: "万立方米",
                    seriesData: [
                        {value: 335, name: "阿拉善盟"},
                        {value: 310, name: "呼和浩特"},
                        {value: 234, name: "锡林郭勒"},
                        {value: 135, name: "呼伦贝尔"},
                        {value: 738, name: "鄂尔多斯"},
                        {value: 738, name: "其他"},
                    ],
                },
                optionObjMSS: {
                    legendData: ["阿拉善盟", "呼和浩特", "锡林郭勒", "呼伦贝尔", "鄂尔多斯", "其他"],
                    seriesName: "盟市消费结构分析",
                    seriesData: [
                        {value: 335, name: "阿拉善盟"},
                        {value: 310, name: "呼和浩特"},
                        {value: 234, name: "锡林郭勒"},
                        {value: 135, name: "呼伦贝尔"},
                        {value: 738, name: "鄂尔多斯"},
                        {value: 738, name: "其他"},
                    ],
                },
                optionObjXS: {
                    legendData: ["洁源燃气", "中燃燃气", "荣洁燃气", "兴胜燃气"],
                    seriesName: "销售单位结构分析",
                    unit: "万立方米",
                    seriesData: [
                        {value: 335, name: "洁源燃气"},
                        {value: 310, name: "中燃燃气"},
                        {value: 234, name: "荣洁燃气"},
                        {value: 135, name: "兴胜燃气"},
                    ],
                },
                optionObjXFYC: {
                    legendData: ["天然气日消费量", "天然气日消费量预测值"],
                    xData: ["1月1日", "1月2日", "1月3日", "1月4日", "1月5日", "1月6日", "1月7日"],
                    yLeftName: "万立方米",
                    yRightName: "%",
                    seriesLeftData: [160, 177, 163, 169, 159, 179, 168],
                    seriesRightData: [180, 175, 179, 184, 187, 183, 189]
                },
                optionObjXFQKYC: {
                    legendData: ["差值"],
                    yName: "日期",
                    seriesName: "差值",
                    yData: ["1月1日", "1月2日", "1月3日", "1月4日", "1月5日", "1月6日", "1月7日"],
                    // yLeftName: "亿立方",
                    // yRightName: "%",
                    seriesData: [5, 6, -5, -6, 3.8, 4, 4],
                },
                screenWidth: document.body.clientWidth, // 屏幕宽
                showFlag: false,
                desIndex: null
            };
        },
        mounted() {
            this.tablist_one[0]=this.tablist_city[0]
            this.optionObjBarGasXF.seriesLeftData=this.optionObjBarGasXFLeftData[0]
            this.optionObjBarGasXF.seriesRightData=this.optionObjBarGasXFRightData[0]
        },
        watch: {
            selected_two() {
                if (this.selected_one === 0) {

                }
            }
        },
        methods: {
            // 点击地图的点联动
            showDes(index) {
                if (this.desIndex == index) {
                    if (this.$refs[`list${index}`][0].style.display == 'none') {
                        this.showFlag = true
                        this.desIndex = index;
                        this.optionObjBarGasXF.seriesLeftData=this.optionObjBarGasXFLeftData[index+1];
                        this.optionObjBarGasXF.seriesRightData=this.optionObjBarGasXFRightData[index+1];
                        this.tablist_one[0]=this.tablist_city[index+1];

                    } else {
                        this.optionObjBarGasXF.seriesLeftData=this.optionObjBarGasXFLeftData[0];
                        this.optionObjBarGasXF.seriesRightData=this.optionObjBarGasXFRightData[0];
                        this.tablist_one[0]=this.tablist_city[0];
                        this.showFlag = false;
                        this.desIndex = null;

                    }
                } else {
                    this.desIndex = index;
                    this.showFlag = true;
                    this.optionObjBarGasXF.seriesLeftData=this.optionObjBarGasXFLeftData[index+1];
                    this.optionObjBarGasXF.seriesRightData=this.optionObjBarGasXFRightData[index+1];
                    this.tablist_one[0]=this.tablist_city[index+1];
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
                this.selected_one = index;
            },
            tabButton_two(index) {
                this.selected_two = index;
                this.timer = new Date().getTime()
            },
            tabButton_three(index) {
                this.selected_three = index;
            },
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

    .fontSize {
        position: relative;
        top: 75px;
        font: 16px bolder microsoft-yahei;
        &.onlynum {
            top: 88px;
        }
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
