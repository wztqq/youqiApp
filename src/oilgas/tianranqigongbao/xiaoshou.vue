<template>
    <div>
        <div id="confess_content" style="background-color: #dadbdb">

            <!-- banner -->
            <div id="banner">
                <img class="map"
                     src="../../assets/img/oilgas/xiaoshou.png"
                     alt="图片未显示"/>
                <div style="position: absolute;font-size: 12px;color:#3F51B5;font-weight: bold"
                     :style="{'left':be_click_left(uint.left),'top':be_click_top(uint.top)}">万立方米</div>
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
                        <div class="fontSize">{{pie_num}}</div>
                        <div class="fontSize">万立方米</div>
                    </div>
                    <dount-chart class="echarts" :optionObj="optionObjYQDW"></dount-chart>
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
                uint:{
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
                tablist_copy: ["天然气日消费量分析", "用气单位结构分析"],
                tablist_one: ["天然气日消费量分析", "用气单位结构分析"],
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
                tablist_two: ["盟市消费结构分析", "销售单位结构分析"],
                tablist_three: ["日消费量预测", "日消费缺口预测"],
                tablist_three_copy: ["日消费量预测", "日消费缺口预测"],
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
                optionObjBarGasXFLeftData: [
                    [160, 177, 163, 169, 159, 179, 169],
                    //阿拉善盟
                    [74, 81, 71, 89, 78, 75, 78],
                    //乌海
                    [142, 143, 112, 153, 144, 136, 122],
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
                optionObjBarGasXFRightData: [
                    [9, 3, -6, 12, 9, 3, 0],
                    //阿拉善盟
                    [10, 4, -3, 5, 9, 14, 12],
                    // 乌海
                    [7, 4, -1, -4, 3, 6, 3],
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
                    legendData: ["民生用气", "甲醛化肥企业", "LNG企业用气", "可中断工业", "不可中断工业", '商业', '居民用气'],
                    seriesName: "用气单位结构分析",
                    unit: "万立方米",
                    seriesData: [],
                },
                optionObjYQDWSeriesData: [
                    // 总的
                    [
                        {
                            name: '民生用气',
                            value: 500
                        },
                        {
                            name: '甲醛化肥企业',
                            value: 420
                        },
                        {
                            name: 'LNG企业用气',
                            value: 350
                        },
                        {
                            name: '可中断工业',
                            value: 330
                        },
                        {
                            name: '不可中断工业',
                            value: 200
                        },
                        {
                            name: '商业',
                            value: 170
                        },
                        {
                            name: '居民用气',
                            value: 450
                        },
                    ],
                    // 阿拉善盟
                    [
                        {
                            name: '民生用气',
                            value: 18
                        },
                        {
                            name: '甲醛化肥企业',
                            value: 14
                        },
                        {
                            name: 'LNG企业用气',
                            value: 12
                        },
                        {
                            name: '可中断工业',
                            value: 10
                        },
                        {
                            name: '不可中断工业',
                            value: 9
                        },
                        {
                            name: '商业',
                            value: 8
                        },
                        {
                            name: '居民用气',
                            value: 7
                        },
                    ],
                    // 乌海
                    [
                        {
                            name: '民生用气',
                            value: 30
                        },
                        {
                            name: '甲醛化肥企业',
                            value: 26
                        },
                        {
                            name: 'LNG企业用气',
                            value: 23
                        },
                        {
                            name: '可中断工业',
                            value: 20
                        },
                        {
                            name: '不可中断工业',
                            value: 18
                        },
                        {
                            name: '商业',
                            value: 15
                        },
                        {
                            name: '居民用气',
                            value: 12
                        },
                    ],
                    //巴彦淖尔
                    [
                        {
                            name: '民生用气',
                            value: 37
                        },
                        {
                            name: '甲醛化肥企业',
                            value: 16
                        },
                        {
                            name: 'LNG企业用气',
                            value: 18
                        },
                        {
                            name: '可中断工业',
                            value: 23
                        },
                        {
                            name: '不可中断工业',
                            value: 18
                        },
                        {
                            name: '商业',
                            value: 16
                        },
                        {
                            name: '居民用气',
                            value: 10
                        },
                    ],
                    //鄂尔多斯
                    [
                        {
                            name: '民生用气',
                            value: 42
                        },
                        {
                            name: '甲醛化肥企业',
                            value: 38
                        },
                        {
                            name: 'LNG企业用气',
                            value: 35
                        },
                        {
                            name: '可中断工业',
                            value: 33
                        },
                        {
                            name: '不可中断工业',
                            value: 28
                        },
                        {
                            name: '商业',
                            value: 26
                        },
                        {
                            name: '居民用气',
                            value: 20
                        },
                    ],
                    //包头
                    [
                        {
                            name: '民生用气',
                            value: 60
                        },
                        {
                            name: '甲醛化肥企业',
                            value: 50
                        },
                        {
                            name: 'LNG企业用气',
                            value: 30
                        },
                        {
                            name: '可中断工业',
                            value: 25
                        },
                        {
                            name: '不可中断工业',
                            value: 15
                        },
                        {
                            name: '商业',
                            value: 10
                        },
                        {
                            name: '居民用气',
                            value: 13
                        },
                    ],
                    //呼和浩特
                    [
                        {
                            name: '民生用气',
                            value: 55
                        },
                        {
                            name: '甲醛化肥企业',
                            value: 45
                        },
                        {
                            name: 'LNG企业用气',
                            value: 35
                        },
                        {
                            name: '可中断工业',
                            value: 28
                        },
                        {
                            name: '不可中断工业',
                            value: 20
                        },
                        {
                            name: '商业',
                            value: 15
                        },
                        {
                            name: '居民用气',
                            value: 12
                        },
                    ],
                    //乌兰察布
                    [
                        {
                            name: '民生用气',
                            value: 36
                        },
                        {
                            name: '甲醛化肥企业',
                            value: 31
                        },
                        {
                            name: 'LNG企业用气',
                            value: 25
                        },
                        {
                            name: '可中断工业',
                            value: 20
                        },
                        {
                            name: '不可中断工业',
                            value: 15
                        },
                        {
                            name: '商业',
                            value: 13
                        },
                        {
                            name: '居民用气',
                            value: 7
                        },
                    ],
                    // 锡林郭勒盟
                    [
                        {
                            name: '民生用气',
                            value: 26
                        },
                        {
                            name: '甲醛化肥企业',
                            value: 20
                        },
                        {
                            name: 'LNG企业用气',
                            value: 18
                        },
                        {
                            name: '可中断工业',
                            value: 16
                        },
                        {
                            name: '不可中断工业',
                            value: 14
                        },
                        {
                            name: '商业',
                            value: 10
                        },
                        {
                            name: '居民用气',
                            value: 7
                        },
                    ],
                    //赤峰
                    [
                        {
                            name: '民生用气',
                            value: 40
                        },
                        {
                            name: '甲醛化肥企业',
                            value: 35
                        },
                        {
                            name: 'LNG企业用气',
                            value: 20
                        },
                        {
                            name: '可中断工业',
                            value: 17
                        },
                        {
                            name: '不可中断工业',
                            value: 15
                        },
                        {
                            name: '商业',
                            value: 12
                        },
                        {
                            name: '居民用气',
                            value: 10
                        },
                    ],
                    //通辽
                    [
                        {
                            name: '民生用气',
                            value: 50
                        },
                        {
                            name: '甲醛化肥企业',
                            value: 40
                        },
                        {
                            name: 'LNG企业用气',
                            value: 30
                        },
                        {
                            name: '可中断工业',
                            value: 25
                        },
                        {
                            name: '不可中断工业',
                            value: 15
                        },
                        {
                            name: '商业',
                            value: 10
                        },
                        {
                            name: '居民用气',
                            value: 13
                        },
                    ],
                    //兴安盟
                    [
                        {
                            name: '民生用气',
                            value: 40
                        },
                        {
                            name: '甲醛化肥企业',
                            value: 35
                        },
                        {
                            name: 'LNG企业用气',
                            value: 30
                        },
                        {
                            name: '可中断工业',
                            value: 25
                        },
                        {
                            name: '不可中断工业',
                            value: 17
                        },
                        {
                            name: '商业',
                            value: 13
                        },
                        {
                            name: '居民用气',
                            value: 7
                        },
                    ],
                    //呼伦贝尔
                    [
                        {
                            name: '民生用气',
                            value: 30
                        },
                        {
                            name: '甲醛化肥企业',
                            value: 28
                        },
                        {
                            name: 'LNG企业用气',
                            value: 26
                        },
                        {
                            name: '可中断工业',
                            value: 21
                        },
                        {
                            name: '不可中断工业',
                            value: 18
                        },
                        {
                            name: '商业',
                            value: 14
                        },
                        {
                            name: '居民用气',
                            value: 7
                        },
                    ],
                ],
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
                    seriesLeftData: [],
                    seriesRightData: []
                },
                optionObjXFQKYC: {
                    // legendData: ["差值"],
                    // yName: "日期",
                    seriesName: "缺口量预测",
                    yData: ["1月1日", "1月2日", "1月3日", "1月4日", "1月5日", "1月6日", "1月7日"],
                    // yLeftName: "亿立方",
                    xName: "万立方米",
                    seriesData: [],
                },
                optionObjXFQKYCseriesData: [
                    [10, 6, -3, 3, 4, -1, 2],
                    //阿拉善盟
                    [4, -1, 3, 3, -2, 4, 1, 1],
                    //乌海
                    [2, 3, -1, 4, 2, 1, 3, 1],
                    //巴彦淖尔
                    [7, 3, -3, 3, 2, 5, 1, 1],
                    // 鄂尔多斯
                    [3, 6, -1, -2, 2, 3, 5, 4],
                    //包头
                    [-2, 5, 9, -3, 1, 4, 3],
                    // 呼和浩特
                    [4, -4, -2, 5, 9, 6, 2],
                    // 乌兰察布
                    [6, -1, 4, 6, 7, -1, 1],
                    //锡林郭勒盟
                    [5, 10, 5, 2, -3, 3, 5],
                    // 赤峰
                    [10, 3, -4, 5, 9, 5, 3],
                    // 通辽
                    [7, 3, -3, 6, 7, 2, 3],
                    // 兴安盟
                    [6, -3, 8, 10, -4, 6, 3],
                    // 呼伦贝尔
                    [7, 10, -4, 4, -3, 6, 5],
                ],
                screenWidth: document.body.clientWidth, // 屏幕宽
                showFlag: true,
                desIndex: null,
                optionObjXFYCseriesLeftData: [
                    // 总
                    [160, 177, 163, 169, 159, 179],
                    //阿拉善盟
                    [74, 81, 71, 89, 78, 75],
                    // 乌海
                    [142, 143, 112, 153, 144, 136],
                    //巴彦淖尔
                    [173, 154, 168, 179, 195, 177],
                    // 鄂尔多斯
                    [211, 240, 241, 222, 201, 235],
                    //包头
                    [230, 208, 190, 233, 187, 222],
                    //呼和浩特
                    [190, 232, 210, 189, 240, 210],
                    // 乌兰察布
                    [132, 149, 132, 153, 144, 149],
                    // 锡林郭勒盟
                    [111, 123, 106, 98, 105, 122],
                    //赤峰
                    [143, 139, 143, 159, 160, 144],
                    // 通辽
                    [176, 181, 210, 194, 177, 183],
                    // 兴安盟
                    [165, 156, 173, 189, 190, 167],
                    //呼伦贝尔
                    [134, 144, 165, 167, 143, 140]
                ],
                optionObjXFYCseriesRightData: [
                    // 总
                    [180, 175, 179, 184, 187, 183, 189],
                    //阿拉善盟
                    [80, 75, 79, 84, 87, 83, 89],
                    //乌海
                    [156, 141, 133, 140, 130, 150, 166],
                    //巴彦淖尔
                    [190, 196, 183, 158, 188, 199, 180],
                    // 鄂尔多斯
                    [230, 211, 222, 213, 230, 250, 241],
                    //包头
                    [201, 222, 201, 222, 251, 233, 241],
                    //呼和浩特
                    [210, 222, 191, 212, 241, 230, 250],
                    // 乌兰察布
                    [141, 160, 153, 169, 143, 188, 164],
                    // 锡林郭勒盟
                    [120, 133, 120, 111, 109, 103, 122],
                    //赤峰
                    [157, 144, 138, 167, 154, 156, 155],
                    //通辽
                    [180, 176, 199, 190, 188, 187, 190],
                    // 兴安盟
                    [180, 167, 156, 175, 183, 188, 190],
                    //呼伦贝尔
                    [150, 145, 130, 161, 166, 172, 150]
                ]
            }
        },
        mounted() {
            this.optionObjBarGasXF.seriesLeftData = this.optionObjBarGasXFLeftData[0];
            this.optionObjBarGasXF.seriesRightData = this.optionObjBarGasXFRightData[0];
            this.optionObjXFYC.seriesLeftData = this.optionObjXFYCseriesLeftData[0];
            this.optionObjXFYC.seriesRightData = this.optionObjXFYCseriesRightData[0];
            this.optionObjYQDW.seriesData = this.optionObjYQDWSeriesData[0];
            this.optionObjXFQKYC.seriesData = this.optionObjXFQKYCseriesData[0]
            this.pie_num = this.pie_numArry[0];
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
                    this.showFlag = true;
                    this.desIndex = null;
                    this.optionObjBarGasXF.seriesLeftData = this.optionObjBarGasXFLeftData[0];
                    this.optionObjBarGasXF.seriesRightData = this.optionObjBarGasXFRightData[0];
                    //日消费量预测
                    this.optionObjXFYC.seriesLeftData = this.optionObjXFYCseriesLeftData[0];
                    this.optionObjXFYC.seriesRightData = this.optionObjXFYCseriesRightData[0];
                    this.tablist_one = this.tablist_copy;
                    this.tablist_three = this.tablist_three_copy;
                    this.optionObjYQDW.seriesData = this.optionObjYQDWSeriesData[0];
                    this.optionObjXFQKYC.seriesData = this.optionObjXFQKYCseriesData[0];
                    this.pie_num = this.pie_numArry[0];
                } else {
                    this.desIndex = index;
                    this.showFlag = false;
                    this.optionObjBarGasXF.seriesLeftData = this.optionObjBarGasXFLeftData[index + 1];
                    this.optionObjBarGasXF.seriesRightData = this.optionObjBarGasXFRightData[index + 1];
                    //日消费量预测
                    this.optionObjXFYC.seriesLeftData = this.optionObjXFYCseriesLeftData[index + 1];
                    this.optionObjXFYC.seriesRightData = this.optionObjXFYCseriesRightData[index + 1];
                    this.tablist_one = [this.tablist_city[index] + this.tablist_copy[0], this.tablist_city[index] + this.tablist_copy[1]];
                    this.tablist_three = [this.tablist_city[index] + this.tablist_three_copy[0], this.tablist_city[index] + this.tablist_three_copy[1]];
                    this.optionObjYQDW.seriesData = this.optionObjYQDWSeriesData[index + 1];
                    this.optionObjXFQKYC.seriesData = this.optionObjXFQKYCseriesData[index + 1];
                    this.pie_num = this.pie_numArry[index + 1];
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
