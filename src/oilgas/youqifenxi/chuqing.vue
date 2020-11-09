<template>
    <div style="position: relative; width: 100%; top: 93px; background-color: #DADBDB;">
        <!-- 弹窗 -->
        <div :class="[{tanchuang:true},{tanchuang_one: show}]">
            <div style="width: 100%;height: 100%;overflow: auto;">
                <table class="table_one_t">
                    <tr>
                        <th v-for="(th,index) in tableTh" :key='index'>{{th}}</th>
                    </tr>
                    <tr v-for="(tr,index) in listData" :key='index'>
                        <td v-for="(td,index) in tr" :key='index'>
                            {{td}}
                        </td>
                    </tr>
                </table>
            </div>
            <img id="close" :style="{'left':closeLeft}" src="../../assets/img/industryAnalysis/关闭.png" alt="图片未显示"
                 @click="tanchuangClose()">
        </div>
        <!-- 页面切换按钮 -->
        <div id="tab_button" :style="{'left':screenLeft}">
            <span v-for="(item,index) in tablist" :key='index' @click="tabButton(index)"
                  v-bind:class="[{tab_button_two:index == selected},{tab_button_one:true}]">{{item}}</span>
        </div>


        <!-- 储情分析的主要内容 -->
        <div id="confess_content" v-show="a" style="background-color: #DADBDB;">
            <!--地图图片上内容展示-->
            <div>
                <!--石油宏观显示-->
                <div v-show="oilShow?true:false">
                    <div class="lay-content" :style="{'left':be_click_left(0.108),'top':be_click_top(0.662)}">
                        <div>吉祥油田区域</div>
                        <div>油田个数：2个</div>
                        <div>探明储量：562万吨</div>
                    </div>
                    <div class="lay-content" :style="{'left':be_click_left(0.398),'top':be_click_top(0.589)}">
                        <div>包尔油田区域</div>
                        <div>油田个数：2个</div>
                        <div>探明储量：750万吨</div>
                    </div>
                    <div class="lay-content" :style="{'left':be_click_left(0.358),'top':be_click_top(0.358)}">
                        <div>二连油田区域</div>
                        <div>油田个数：6个</div>
                        <div>探明储量：7500万吨</div>
                    </div>
                    <div class="lay-content" :style="{'left':be_click_left(0.668),'top':be_click_top(0.158)}">
                        <div>海拉尔油田区域</div>
                        <div>油田个数：5个</div>
                        <div>探明储量：8437万吨</div>
                    </div>
                    <div class="lay-content" :style="{'left':be_click_left(0.708),'top':be_click_top(0.508)}">
                        <div>科尔沁油田区域</div>
                        <div>油田个数：3个</div>
                        <div>探明储量：1125万吨</div>
                    </div>
                </div>
                <!--天然气宏观显示-->
                <div v-show="oilShow?false:true">
                    <div class="lay-content" :style="{'left':be_click_left(0.108),'top':be_click_top(0.662)}">
                        <div>苏里格气田区域</div>
                        <div>气田个数：5个</div>
                        <div>探明储量：11900万立方米</div>
                    </div>
                    <div class="lay-content" :style="{'left':be_click_left(0.258),'top':be_click_top(0.389)}">
                        <div>包尔气田区域</div>
                        <div>气田个数：1个</div>
                        <div>探明储量：560万立方米</div>
                    </div>
                    <div class="lay-content" :style="{'left':be_click_left(0.578),'top':be_click_top(0.368)}">
                        <div>二连气田区域</div>
                        <div>气田个数：2个</div>
                        <div>探明储量：700万立方米</div>
                    </div>
                    <div class="lay-content" :style="{'left':be_click_left(0.668),'top':be_click_top(0.108)}">
                        <div>海拉尔气田区域</div>
                        <div>油田个数：2个</div>
                        <div>探明储量：840万立方米</div>
                    </div>
                </div>
                <div class="click-change" :style="{'left':be_click_left(0.754),'top':be_click_top(0.808)}"
                     @click="oilShow=true"></div>
                <div class="click-change" :style="{'left':be_click_left(0.754),'top':be_click_top(0.868)}"
                     @click="oilShow=false"></div>
            </div>
            <div class="clickbtn" :style="{'left':be_click_left(0.324),'top':be_click_top(0.728)}"
                 @click="tanchuangShow(listData1,tableTh1)"></div>
            <div class="clickbtn" :style="{'left':be_click_left(0.385),'top':be_click_top(0.779)}"
                 @click="tanchuangShow(listData6,tableTh2)"></div>
            <div class="clickbtn" :style="{'left':be_click_left(0.478),'top':be_click_top(0.662)}"
                 @click="tanchuangShow(listData2,tableTh1)"></div>
            <div class="clickbtn" :style="{'left':be_click_left(0.505),'top':be_click_top(0.615)}"
                 @click="tanchuangShow(listData7,tableTh2)"></div>
            <div class="clickbtn" :style="{'left':be_click_left(0.626),'top':be_click_top(0.535)}"
                 @click="tanchuangShow(listData3,tableTh)"></div>
            <div class="clickbtn" :style="{'left':be_click_left(0.680),'top':be_click_top(0.498)}"
                 @click="tanchuangShow(listData8,tableTh2)"></div>
            <div class="clickbtn" :style="{'left':be_click_left(0.773),'top':be_click_top(0.565)}"
                 @click="tanchuangShow(listData4,tableTh1)"></div>
            <div class="clickbtn" :style="{'left':be_click_left(0.693),'top':be_click_top(0.335)}"
                 @click="tanchuangShow(listData5,tableTh1)"></div>
            <div class="clickbtn" :style="{'left':be_click_left(0.715),'top':be_click_top(0.285)}"
                 @click="tanchuangShow(listData9,tableTh2)"></div>

            <img class="map" src="../../assets/img/industryAnalysis/原油生产地图.png" alt="图片未显示">
            <div class="chart">
                <div class="tab_oil">
                    <span v-for="(item,index) in tablist_one" :key='index' @click="tabButton_one(index)"
                          v-bind:class="[{tab_oil_two:index == selected_one},{tab_oil_one:true}]">{{item}}</span>
                </div>
                <div class="fontSize_div">
                    <div class="fontSize" v-model="pie_number">{{pie_number}}</div>
                    <div class="fontSizeOne">万吨</div>
                </div>
                <!-- <div class="echarts" id="echartsOne"></div> -->
                <div class="echarts" id="echartsOne"></div>
            </div>
            <div class="chart_t">
                <div style="width: 100%;height: 8px;background-color: #DADBDB;margin-bottom: 10px;"></div>
                <div class="tab_oil">
                    <span v-for="(item,index) in tablist_two" :key='index' @click="tabButton_two(index)"
                          v-bind:class="[{tab_oil_two:index == selected_two},{tab_oil_one:true}]">{{item}}</span>
                </div>
                <div class="fontSize_div">
                    <div class="fontSize" v-model="pie_number_two">{{pie_number_two}}</div>
                    <div class="fontSizeOne">亿立方米</div>
                </div>
                <div class="echarts" id="echartsTwo"></div>
            </div>
            <div class="chart_t">
                <div style="width: 100%;height: 8px;background-color: #DADBDB;margin-bottom: 10px;"></div>
                <div class="tab_oil">
                    <span v-for="(item,index) in tablist_three" :key='index' @click="tabButton_three(index)"
                          v-bind:class="[{tab_oil_two:index == selected_three},{tab_oil_one:true}]">{{item}}</span>
                    <div id="table">
                        <div style="font: bold 13px '微软雅黑';color: #3A6DDA;position: relative;top: 30px;"
                             v-model="tableTh_name">{{tableTh_name}}<span style="color: #FF9311 ;font-style: italic;">Top</span>
                        </div>
                        <table :class="[{table_one:!g},{table_two:g}]">
                            <tr>
                                <th v-for="(th,index) in tableTh_one" :key='index'>{{th}}</th>
                            </tr>
                            <tr v-for="(tr,index) in listData_one" :key='index'>
                                <td>{{index+1}}</td>
                                <td v-for="(td,index) in tr" :key='index'>
                                    {{td}}
                                </td>
                            </tr>
                        </table>
                        <table :class="[{table_one:g},{table_two:!g}]">
                            <tr>
                                <th v-for="th,index in tableTh_two" :key='index'>{{th}}</th>
                            </tr>
                            <tr v-for="(tr,index) in listData_two" :key='index'>
                                <td>{{index+1}}</td>
                                <td v-for="td,index in tr" :key='index'>
                                    {{td}}
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>


        <div id="produce_content" v-show="b">
            <div class="btn_shenchan">
                <div class="btn_shenchan_div">
                    <div :class="[{btn_shenchan_xuan:btn_shenchan_num},{btn_shenchan_wei:!btn_shenchan_num}]"
                         @click="tabButton_produce(1)">
                        <img class="img_produce" :src="imgUrl" alt="图片未显示">
                        <div style="position: absolute;top: 8px;left: 25px;">原油天然气生产</div>
                    </div>
                    <div :class="[{btn_shenchan_xuan:!btn_shenchan_num},{btn_shenchan_wei:btn_shenchan_num}]"
                         @click="tabButton_produce(0)">
                        <img class="img_produce" :src="imgUrl2" alt="图片未显示">
                        <div style="position: absolute;top: 32px;left: 25px;">炼化煤化企业生产</div>
                    </div>
                </div>
            </div>

            <div id="produce" v-show="d">
                <img class="map" src="../../assets/img/industryAnalysis/原油生产地图.png" alt="图片未显示">
                <div class="chart">
                    <div class="tab_oil">
                        <span v-for="(item,index) in tablist_four" :key='index' @click="tabButton_four(index)"
                              v-bind:class="[{tab_oil_two:index == selected_four},{tab_oil_one:true}]">{{item}}</span>
                    </div>
                    <div class="ratio_div">
                        <!-- 上月完成 -->
                        <div style="width: 172px;height: 50px;float: left;position: relative;top: 10px;">
                            <div style="width: 85px; height: 50px; float: left; position: relative; left: 5px;">
                                <div class="last_month"><span class="ratio_font"
                                                              v-model="last_month">{{last_month}}</span><span
                                        class="ratio_font1" v-model="unit">{{unit}}</span></div>
                                <div class="last_month_font"><span class="ratio_font_div">上月完成</span></div>
                            </div>
                            <div class="ratio_position">
                                <div class="ratio">
                                    <span v-model="YoY">同比:<img class="imgStyle"
                                                                src="../../assets/img/Indicatorsmonitoring/003-2.png"
                                                                alt="图片未显示">{{YoY}}</span>
                                </div>
                                <div class="ratio">
                                    <span v-model="Cratio">环比:<img class="imgStyle"
                                                                   src="../../assets/img/Indicatorsmonitoring/003-3.png"
                                                                   alt="图片未显示">{{Cratio}}</span>
                                </div>
                            </div>
                        </div>
                        <!-- 年度完成 -->
                        <div style="width: 172px;height: 50px;float: left;position: relative;top: 10px;">
                            <div style="width: 85px; height: 50px; float: left; position: relative; left: 5px;">
                                <div class="last_month"><span class="ratio_font"
                                                              v-model="last_year">{{last_year}}</span><span
                                        class="ratio_font1" v-model="unit">{{unit}}</span></div>
                                <div class="last_month_font"><span class="ratio_font_div">年度完成</span></div>
                            </div>
                            <div class="ratio_position">
                                <div class="ratio">
                                    <span v-model="YoY">同比:<img class="imgStyle"
                                                                src="../../assets/img/Indicatorsmonitoring/003-2.png"
                                                                alt="图片未显示">{{YoY1}}</span>
                                </div>
                                <div class="ratio">
                                    <span v-model="Cratio">环比:<img class="imgStyle"
                                                                   src="../../assets/img/Indicatorsmonitoring/003-3.png"
                                                                   alt="图片未显示">{{Cratio1}}</span>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="echarts_two" id="echartsThree"></div>
                </div>
                <div class="chart">
                    <div style="width: 100%;height: 8px;background-color: #DADBDB;margin-bottom: 10px;"></div>
                    <div class="tab_oil">
                        <span v-for="(item,index) in tablist_five" :key='index' @click="tabButton_five(index)"
                              v-bind:class="[{tab_oil_two:index == selected_five},{tab_oil_one:true}]">{{item}}</span>
                    </div>
                    <div class="fontSize_div">
                        <div class="fontSize" v-model="pie_one_number">{{pie_one_number}}</div>
                        <div class="fontSizeOne" v-model="pie_one_unit">{{pie_one_unit}}</div>
                    </div>
                    <div class="echarts_one" id="echartsFour"></div>
                </div>
                <div class="chart">
                    <div style="width: 100%;height: 8px;background-color: #DADBDB;margin-bottom: 10px;"></div>
                    <div class="tab_oil">
                        <span v-for="(item,index) in tablist_six" :key='index' @click="tabButton_six(index)"
                              v-bind:class="[{tab_oil_two:index == selected_six},{tab_oil_one:true}]">{{item}}</span>
                    </div>
                    <div :class="[{echartsOne:bacolor},{echartsTwo:!bacolor}]" id="echartsFive"></div>
                </div>
            </div>


            <div id="produce_refine" v-show="!d">
                <div
                         class="produce_tc"  v-show="produce_tc">
                    <ul>
                        <li>{{page_c[0]}}</li>
                        <li>企业人数：<span>{{page_c[1]}}</span>人</li>
                        <li>上月粉煤加工量：<span>{{page_c[2]}}</span>万吨</li>
                        <li>上月天然气产量：<span>{{page_c[3]}}</span>万吨</li>
                    </ul>
                </div>
                <div class="clickbtn" :style="{'left':be_click_left(0.345),'top':be_click_top(0.778)}"
                     @click="tanchuang(produce_tc,page_c2,1)"></div>
                <div class="clickbtn" :style="{'left':be_click_left(0.375),'top':be_click_top(0.75)}"
                     @click="tanchuang(produce_tc,page_c3,2)"></div>
                <div class="clickbtn" :style="{'left':be_click_left(0.395),'top':be_click_top(0.778)}"
                     @click="tanchuang(produce_tc,page_c4,3)"></div>
                <div class="clickbtn" :style="{'left':be_click_left(0.473),'top':be_click_top(0.721)}"
                     @click="tanchuang(produce_tc,page_c5,4)"></div>
                <div class="clickbtn" :style="{'left':be_click_left(0.717),'top':be_click_top(0.566)}"
                     @click="tanchuang(produce_tc,page_c1,5)"></div>
                <img class="map" src="../../assets/img/industryAnalysis/炼化煤地图2.png" alt="图片未显示"
                     @click.prevent="default_t">
                <div class="chart">
                    <div class="tab_oil">
                    <span v-for="(item,index) in tablist_seven" :key='index' @click="tabButton_seven(index)"
                          v-bind:class="[{tab_oil_four:index == selected_seven},{tab_oil_three:true}]">{{item}}</span>
                    </div>
                 <!--   <div class="ratio_div">
                        &lt;!&ndash; 上月完成 &ndash;&gt;
                        <div style="width: 172px;height: 50px;float: left;position: relative;top: 10px;">
                            <div style="width: 85px; height: 50px; float: left; position: relative; left: 5px;">
                                <div class="last_month"><span class="ratio_font"
                                                              v-model="last_month">{{last_month}}</span><span
                                        class="ratio_font1" v-model="unit">{{unit}}</span></div>
                                <div class="last_month_font"><span class="ratio_font_div">上月完成</span></div>
                            </div>
                            <div class="ratio_position">
                                <div class="ratio">
                                <span v-model="YoY">同比:<img class="imgStyle"
                                                            src="../../assets/img/Indicatorsmonitoring/003-2.png"
                                                            alt="图片未显示">{{YoY}}</span>
                                </div>
                                <div class="ratio">
                                <span v-model="Cratio">环比:<img class="imgStyle"
                                                               src="../../assets/img/Indicatorsmonitoring/003-3.png"
                                                               alt="图片未显示">{{Cratio}}</span>
                                </div>
                            </div>
                        </div>
                        &lt;!&ndash; 年度完成 &ndash;&gt;
                        <div style="width: 172px;height: 50px;float: left;position: relative;top: 10px;">
                            <div style="width: 85px; height: 50px; float: left; position: relative; left: 5px;">
                                <div class="last_month"><span class="ratio_font"
                                                              v-model="last_year">{{last_year}}</span><span
                                        class="ratio_font1" v-model="unit">{{unit}}</span></div>
                                <div class="last_month_font"><span class="ratio_font_div">年度完成</span></div>
                            </div>
                            <div class="ratio_position">
                                <div class="ratio">
                                <span v-model="YoY">同比:<img class="imgStyle"
                                                            src="../../assets/img/Indicatorsmonitoring/003-2.png"
                                                            alt="图片未显示">{{YoY1}}</span>
                                </div>
                                <div class="ratio">
                                <span v-model="Cratio">环比:<img class="imgStyle"
                                                               src="../../assets/img/Indicatorsmonitoring/003-3.png"
                                                               alt="图片未显示">{{Cratio1}}</span>
                                </div>
                            </div>
                        </div>

                    </div>-->
                    <div class="echarts_two" id="echartsSix"></div>
                </div>
                <div class="chart">
                    <div style="width: 100%;height: 8px;background-color: #DADBDB;margin-bottom: 10px;"></div>
                    <div class="tab_oil">
                    <span v-for="(item,index) in tablist_eight" :key='index' @click="tabButton_eight(index)"
                          v-bind:class="[{tab_oil_two:index == selected_eight},{tab_oil_one:true}]">{{item}}</span>
                    </div>
                    <div class="echarts_one" id="echartsEight" v-show='k1'></div>
                    <div class="echarts_one" id="echartsNine" v-show='!k1'></div>
                </div>
            </div>
        </div>


    </div>
</template>
<script>
    export default {
        name: 'FuncFormsBase',
        data() {
            return {
                // 炼化煤页面弹窗
                page_c: [],
                page_c1: ['大唐煤制气', 1200, 100, 1000],
                page_c2: ['神华煤制油', 1250, 100, 1000],
                page_c3: ['新蒙能源煤制气', 2000, 100, 1000],
                page_c4: ['伊泰煤制油', 1600, 100, 1000],
                page_c5: ['成品油企业', 1700, 100, 1000],
                produce_tc: false,
                xuan: 0,


                screenWidth: document.body.clientWidth, // 屏幕宽
                screenHeight: document.body.clientHeight, // 屏幕高
                screenLeft: '',
                screenTop: '',
                show: 0, //控制弹窗显示
                oilShow: true,//地图原油展示
                closeLeft: 0, //关闭按钮居中
                tableTh: [],
                tableTh1: ['油田', '面积', '所属盟市', '预测资源量', '探明储量', '剩余经济可采储量', '剩余技术可采储量'],
                tableTh2: ['气田', '面积', '所属盟市', '预测资源量', '探明储量', '剩余经济可采储量', '剩余技术可采储量'],
                listData: [],
                listData1: [{
                    "name": "吉祥油田",
                    "area": "5.5万平方公里",
                    "city": "巴彦淖尔市",
                    "prediction": "543.7万吨",
                    "proved": "350万吨",
                    "economic": "9万吨",
                    "technology": "21万吨"
                },
                    {
                        "name": "达尔其油田",
                        "area": "4314.12万平方公里",
                        "city": "巴彦淖尔市",
                        "prediction": "300万吨",
                        "proved": "212万吨",
                        "economic": "5万吨",
                        "technology": "14万吨"
                    }],
                listData2: [
                    {
                        "name": "包尔油田",
                        "area": "5万平方公里",
                        "city": "乌兰察布市",
                        "prediction": "624.9万吨",
                        "proved": "450万吨",
                        "economic": "11万吨",
                        "technology": "27万吨"
                    },
                    {
                        "name": "汗塞油田",
                        "area": "432万平方公里",
                        "city": "乌兰察布市",
                        "prediction": "500万吨",
                        "proved": "300万吨",
                        "economic": "7万吨",
                        "technology": "20万吨"
                    }
                ],
                listData3: [
                    {
                        "name": "乌利雅斯太油田",
                        "area": "234万平方公里",
                        "city": "锡林郭勒盟",
                        "prediction": "2049万吨",
                        "proved": "1500万吨",
                        "economic": "45万吨",
                        "technology": "130万吨"
                    },
                    {
                        "name": "宝力格油田",
                        "area": "5.5万平方公里",
                        "city": "锡林郭勒盟",
                        "prediction": "1900万吨",
                        "proved": "1300万吨",
                        "economic": "40万吨",
                        "technology": "80万吨"
                    },
                    {
                        "name": "新苏木油田",
                        "area": "357万平方公里",
                        "city": "锡林郭勒盟",
                        "prediction": "1870万吨",
                        "proved": "1200万吨",
                        "economic": "35万吨",
                        "technology": "75万吨"
                    },
                    {
                        "name": "哈达图油田",
                        "area": "1.3万平方公里",
                        "city": "锡林郭勒盟",
                        "prediction": "1840万吨",
                        "proved": "1200万吨",
                        "economic": "25万吨",
                        "technology": "70万吨"
                    },
                    {
                        "name": "锡林油田",
                        "area": "452万平方公里",
                        "city": "锡林郭勒盟",
                        "prediction": "1810万吨",
                        "proved": "1100万吨",
                        "economic": "20万吨",
                        "technology": "65万吨"
                    },
                    {
                        "name": "乌兰诺尔油田",
                        "area": "612万平方公里",
                        "city": "锡林郭勒盟",
                        "prediction": "1780万吨",
                        "proved": "1100万吨",
                        "economic": "15万吨",
                        "technology": "60万吨"
                    },
                ],
                listData4: [
                    {
                        "name": "科尔沁油田",
                        "area": "3.5万平方公里",
                        "city": "通辽市",
                        "prediction": "600万吨",
                        "proved": "420万吨",
                        "economic": "13万吨",
                        "technology": "28万吨"
                    },
                    {
                        "name": "交力格油田",
                        "area": "357万平方公里",
                        "city": "通辽市",
                        "prediction": "550万吨",
                        "proved": "380万吨",
                        "economic": "8万吨",
                        "technology": "26万吨"
                    },
                    {
                        "name": "广发油田",
                        "area": "2.5万平方公里",
                        "city": "通辽市",
                        "prediction": "537万吨",
                        "proved": "325万吨",
                        "economic": "7万吨",
                        "technology": "17万吨"
                    },
                    {
                        "name": "龙筒湾油田",
                        "area": "452万平方公里",
                        "city": "通辽市",
                        "prediction": "362.4万吨",
                        "proved": "275万吨",
                        "economic": "6万吨",
                        "technology": "12万吨"
                    },
                    {
                        "name": "科尔康油田",
                        "area": "612万平方公里",
                        "city": "通辽市",
                        "prediction": "2000万吨",
                        "proved": "100万吨",
                        "economic": "3万吨",
                        "technology": "12万吨"
                    }
                ],
                listData5: [
                    {
                        "name": "苏仁诺尔油田",
                        "area": "4.3万平方公里",
                        "city": "呼伦贝尔市",
                        "prediction": "2531万吨",
                        "proved": "2000万吨",
                        "economic": "50万吨",
                        "technology": "106万吨"
                    },
                    {
                        "name": "巴彦塔拉油田",
                        "area": "657万平方公里",
                        "city": "呼伦贝尔市",
                        "prediction": "2531万吨",
                        "proved": "1800万吨",
                        "economic": "45万吨",
                        "technology": "106万吨"
                    },
                    {
                        "name": "苏德尔特油田",
                        "area": "2.1万平方公里",
                        "city": "呼伦贝尔市",
                        "prediction": "2531万吨",
                        "proved": "1600万吨",
                        "economic": "40万吨",
                        "technology": "106万吨"
                    },
                    {
                        "name": "呼和诺仁油田",
                        "area": "752万平方公里",
                        "city": "呼伦贝尔市",
                        "prediction": "2531万吨",
                        "proved": "1537万吨",
                        "economic": "37万吨",
                        "technology": "106万吨"
                    },
                    {
                        "name": "贝尔油田",
                        "area": "412万平方公里",
                        "city": "呼伦贝尔市",
                        "prediction": "2531万吨",
                        "proved": "1500万吨",
                        "economic": "35万吨",
                        "technology": "106万吨"
                    }
                ],
                listData6: [
                    {
                        "name": "胜利井气田",
                        "area": "3341万平方公里",
                        "city": "鄂尔多斯市",
                        "prediction": "5950万立方米",
                        "proved": "3332万立方米",
                        "economic": "1571万立方米",
                        "technology": "952万立方米"
                    },
                    {
                        "name": "苏里格气田",
                        "area": "1.1万平方公里",
                        "city": "鄂尔多斯市",
                        "prediction": "4250万立方米",
                        "proved": "2380万立方米",
                        "economic": "1122万立方米",
                        "technology": "680万立方米"
                    },
                    {
                        "name": "靖边气田",
                        "area": "2124.26万平方公里",
                        "city": "鄂尔多斯市",
                        "prediction": "4250万立方米",
                        "proved": "2380万立方米",
                        "economic": "1122万立方米",
                        "technology": "680万立方米"
                    },
                    {
                        "name": "乌审旗气田",
                        "area": "4362万平方公里",
                        "city": "鄂尔多斯市",
                        "prediction": "4250万立方米",
                        "proved": "2380万立方米",
                        "economic": "1122万立方米",
                        "technology": "680万立方米"
                    },
                    {
                        "name": "大牛地气田",
                        "area": "2134万平方公里",
                        "city": "鄂尔多斯市",
                        "prediction": "2550万立方米",
                        "proved": "1428万立方米",
                        "economic": "673万立方米",
                        "technology": "408万立方米"
                    },
                ],
                listData7: [
                    {
                        "name": "包尔气田",
                        "area": "1.5万平方公里",
                        "city": "锡林郭勒盟",
                        "prediction": "1000万立方米",
                        "proved": "560万立方米",
                        "economic": "264万立方米",
                        "technology": "160万立方米"
                    },
                ],
                listData8: [
                    {
                        "name": "哈达图气田",
                        "area": "357万平方公里",
                        "city": "锡林郭勒盟",
                        "prediction": "750万立方米",
                        "proved": "500万立方米",
                        "economic": "230万立方米",
                        "technology": "110万立方米"
                    },
                    {
                        "name": "宝力格气田",
                        "area": "2.2万平方公里",
                        "city": "锡林郭勒盟",
                        "prediction": "500万立方米",
                        "proved": "200万立方米",
                        "economic": "100万立方米",
                        "technology": "90万立方米"
                    },
                ],
                listData9: [
                    {
                        "name": "贝尔气田",
                        "area": "657万平方公里",
                        "city": "呼伦贝尔市",
                        "prediction": "980万立方米",
                        "proved": "510万立方米",
                        "economic": "213万立方米",
                        "technology": "122万立方米"
                    },
                    {
                        "name": "苏仁诺尔气田",
                        "area": "747万平方公里",
                        "city": "呼伦贝尔市",
                        "prediction": "520万立方米",
                        "proved": "330万立方米",
                        "economic": "183万立方米",
                        "technology": "118万立方米"
                    }
                ],
                tablist: ['储情分析', '生产分析'],
                tablist_one: ['原油剩余技术储量', '原油剩余经济储量'],
                tablist_two: ['天然气剩余技术储量', '天然气剩余经济储量'],
                pie_number: 1030,  //原油剩余技术数值
                pie_number_two: 0.61,  //天然气剩余技术数值
                tablist_three: ['油田储采比排名', '气田储采比排名'],
                tablist_four: ['原油产量分析', '天然气产量分析'],
                tablist_five: ['本年度原油生产自给率', '本年度天然气生产自给率'],
                tablist_six: ['本年度原油生产企业分布', '本年度天然气生产企业分布'],
                tablist_seven: ['成品油产量分析', '煤制油产量分析', '煤制气产量分析'],
                tablist_eight: ['成品油生产结构分析', '成品油自给率分析'],
                // 第二个页面上月完成数值
                last_month: 20,
                // 第二个页面年度累计完成数值
                last_year: 200,
                //第二个页面的同比，环比
                YoY: '+1.1%',
                Cratio: '-1.38%',
                /*年度完成同比环比*/
                YoY1: '+1.2%',
                Cratio1: '-1.18%',
                //用来判断按钮是否被选中
                selected: '0',
                selected_one: '0',
                selected_two: '0',
                selected_three: '0',
                selected_four: '0',
                selected_five: '0',
                selected_six: '0',
                selected_seven: '0',
                selected_eight: '0',
                //三个页面是否显示的三个参数
                a: 1,
                b: 0,
                c: 0,
                d: 1,
                //第一个页面里三个按钮
                i: 0, //判断是否点击
                j: 0,
                g: 0,


                //第二个页面的子页面按钮选中判断
                btn_shenchan_num: 1,
                //第二个页面的三个按钮
                p_i: 0,
                p_j: 0,
                p_g: 0,
                //第二个页面的子切换按钮
                k1: 0,
                //第一个页面的图表数据
                echarts: {
                    lengdata_bottom_one:'50',
                    lengdata_bottom_two:100,
                    lengend_data_one: ['苏仁诺尔油田', '巴彦塔拉油田', '苏德尔特油田', '呼和诺仁油田', '贝尔油田',
                        '乌里雅斯太油田', '宝力格油田', '新苏木油田', '哈达图油田', '锡林油田', '乌兰诺尔油田', '其他'],
                    lengend_data_three: ['苏里格气田', '大牛地气田', '胜利井气田', '靖边气田', '乌审旗气田', '其他'],
                    data_three: [{
                        value: 50,
                        name: '苏仁诺尔油田'
                    },
                        {
                            value: 45,
                            name: '巴彦塔拉油田'
                        },
                        {
                            value: 40,
                            name: '苏德尔特油田'
                        },
                        {
                            value: 37,
                            name: '呼和诺仁油田'
                        },
                        {
                            value: 35,
                            name: '贝尔油田'
                        },
                        {
                            value: 45,
                            name: '乌里雅斯太油田'
                        },
                        {
                            value: 40,
                            name: '宝力格油田'
                        },
                        {
                            value: 35,
                            name: '新苏木油田'
                        },
                        {
                            value: 25,
                            name: '哈达图油田'
                        },
                        {
                            value: 20,
                            name: '锡林油田'
                        },
                        {
                            value: 15,
                            name: '乌兰诺尔油田'
                        },
                        {
                            value: 15,
                            name: '其他'
                        }
                    ],
                    data_two: [{
                        value: 680,
                        name: '苏里格气田'
                    },
                        {
                            value: 408,
                            name: '大牛地气田'
                        },
                        {
                            value: 952,
                            name: '胜利井气田'
                        },
                        {
                            value: 680,
                            name: '靖边气田'
                        },
                        {
                            value: 680,
                            name: '乌审旗气田'
                        },
                        {
                            value: 300,
                            name: '其他'
                        }
                    ],
                    data_one: [{
                        value: 106,
                        name: '苏仁诺尔油田'
                    },
                        {
                            value: 106,
                            name: '巴彦塔拉油田'
                        },
                        {
                            value: 106,
                            name: '苏德尔特油田'
                        },
                        {
                            value: 106,
                            name: '呼和诺仁油田'
                        },
                        {
                            value: 106,
                            name: '贝尔油田'
                        },
                        {
                            value: 130,
                            name: '乌里雅斯太油田'
                        },
                        {
                            value: 80,
                            name: '宝力格油田'
                        },
                        {
                            value: 75,
                            name: '新苏木油田'
                        },
                        {
                            value: 70,
                            name: '哈达图油田'
                        },
                        {
                            value: 65,
                            name: '锡林油田'
                        },
                        {
                            value: 60,
                            name: '乌兰诺尔油田'
                        },
                        {
                            value: 20,
                            name: '其他'
                        }
                    ],
                    data_four: [{
                        value: 1122,
                        name: '苏里格气田'
                    },
                        {
                            value: 673,
                            name: '大牛地气田'
                        },
                        {
                            value: 1571,
                            name: '胜利井气田'
                        },
                        {
                            value: 1122,
                            name: '靖边气田'
                        },
                        {
                            value: 1122,
                            name: '乌审旗气田'
                        },
                        {
                            value: 400,
                            name: '其他'
                        }
                    ],
                },
                //第二个页面的柱状图数据
                bardata_one: [
                    [50, 50, 251, 400, 300, 250, 375, 500, 375, 250, 275, 520],
                    [250, 200, 374, '-', 375, '-', 175, 200, 175, '-', 260, 230],
                    ['-', '-', '-', 100, '-', 125, '-', '-', '-', 150, '-', '-'],
                    '万吨'
                ],
                bardata_two: [
                    [40, 60, 234, 300, 300, 230, 375, 460, 385, 230, 275, 420],
                    [230, 220, 354, '-', 375, '-', 175, 210, 175, '-', 260, 230],
                    ['-', '-', '-', 120, '-', 145, '-', '-', '-', 160, '-', '-'],
                    '万立方米'
                ],
                /* 第二个页面同比环比单位 */
                unit: '万吨',

                // 采储排名
                tableTh_name: '油田储采比排名',

                tableTh_one: ['序号', '油田', '盟区', '储采比'],
                listData_one: [{
                    oilfield: '吉祥油田',
                    leaguerea: '巴彦淖尔市',
                    ratio: '11.5'
                },
                    {
                        oilfield: '达尔其油田',
                        leaguerea: '巴彦淖尔市',
                        ratio: '11.2'
                    },
                    {
                        oilfield: '包尔油田',
                        leaguerea: '乌兰察布市',
                        ratio: '11'
                    },
                    {
                        oilfield: '汗赛油田',
                        leaguerea: '锡林郭勒盟',
                        ratio: '10.5'
                    },
                    {
                        oilfield: '乌里雅斯太油田',
                        leaguerea: '锡林郭勒盟',
                        ratio: '10.5'
                    },
                ],
                tableTh_two: ['序号', '气田', '盟区', '储采比'],
                listData_two: [{
                    oilfield: '苏格里气田',
                    leaguerea: '鄂尔多斯市',
                    ratio: '11.5'
                },
                    {
                        oilfield: '靖边气田',
                        leaguerea: '鄂尔多斯市',
                        ratio: '11.2'
                    },
                    {
                        oilfield: '胜利井气田',
                        leaguerea: '鄂尔多斯市',
                        ratio: '11'
                    },
                    {
                        oilfield: '乌审旗气田',
                        leaguerea: '鄂尔多斯市',
                        ratio: '10.5'
                    },
                    {
                        oilfield: '大牛地气田',
                        leaguerea: '鄂尔多斯市',
                        ratio: '10.1'
                    },
                ],
                //双向绑定的数据
                pie_one_number: 90,
                pie_one_unit: '万吨',
                produce_pie_oil: [55, 45, 90, '万吨'],
                produce_pie_gas: [60, 40, 0.15, '亿立方米'],
                bacolor: 1,
                produce_pieTwo_oil: [77, 23],
                produce_pieTwo_gas: [68, 32],

                //第二个页面按钮图标
                imgUrl: require('../../assets/img/industryAnalysis/原油黄.png'),
                imgUrl2: require('../../assets/img/industryAnalysis/炼化煤灰.png'),
                imgUrlArry: [
                    require('../../assets/img/industryAnalysis/原油黄.png'),
                    require('../../assets/img/industryAnalysis/原油灰.png'),
                    require('../../assets/img/industryAnalysis/炼化煤黄.png',),
                    require('../../assets/img/industryAnalysis/炼化煤灰.png'),
                ],
                //第二个页面的第二个子页面
                //第二个页面的柱状图数据
                bardata_three: [
                    [50, 50, 251, 400, 300, 250, 375, 500, 375, 250, 275, 520],
                    [250, 200, 374, '-', 375, '-', 175, 200, 175, '-', 260, 230],
                    ['-', '-', '-', 100, '-', 125, '-', '-', '-', 150, '-', '-'],
                    '万吨'
                ],
                bardata_four: [
                    [40, 60, 234, 300, 300, 230, 375, 260, 345, 230, 275, 420],
                    [230, 220, 354, '-', 375, '-', 175, 220, 275, '-', 260, 230],
                    ['-', '-', '-', 120, '-', 145, '-', '-', '-', 160, '-', '-'],
                    '万吨'
                ],
                bardata_five: [
                    [40, 60, 230, 320, 300, 230, 385, 360, 285, 230, 275, 420],
                    [230, 220, 304, '-', 375, '-', 185, 210, 275, '-', 260, 230],
                    ['-', '-', '-', 120, '-', 145, '-', '-', '-', 160, '-', '-'],
                    '万立方米'
                ],
            }
        },
        mounted() {
            this.drawLine('echartsOne', this.echarts.data_one, "万吨", "原油剩余技术储量",
                this.echarts.lengend_data_one,this.echarts.lengdata_bottom_one);
            this.drawLine('echartsTwo', this.echarts.data_two, "亿立方米", "天然气剩余技术储量",
                this.echarts.lengend_data_three,this.echarts.lengdata_bottom_two);
            this.screenLeft = (this.screenWidth - 343) / 2 + 'px'
        },
        methods: {
            // 用于点击的div块绑定函数
            be_click_left(a) {
                return this.screenWidth * a + 'px'
            },
            be_click_top(a) {
                return 314.5 * a + 'px'
            },


            //取消图片默认样式
            tanchuangShow(a, b) {
                this.show = 1
                this.listData = a
                this.tableTh = b
                this.$nextTick(function () {
                    this.closeLeft = (this.screenWidth - 35) / 2 + 'px'
                })
            },
            tanchuangClose() {
                this.show = 0
            },
            // 储情分析环形图
            drawLine(id, arry, unit, name, lengedData,lengdataBottom) {
                var echarts = require('echarts');
                var myChart = echarts.init(document.getElementById(id));
                myChart.setOption({
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a} <br/>{b}: {c}' + unit + '({d}%)'
                    },
                    legend: {
                        orient: 'horizontal',
                        bottom: lengdataBottom,
                        left: 'center',
                        itemGap: 10,
                        data: lengedData,
                        itemWidth: 15,
                        itemHeight: 10
                    },
                    grid: {
                        top: '6%',
                        containLabel: true
                    },
                    series: [{
                        name: name,
                        type: 'pie',
                        radius: ['28%', '38%'],
                        center: ['50%', '30%'],
                        label: {
                            formatter: '{per|{d}%\n}',
                            padding: [0, -40, 5],
                            rich: {
                                per: {
                                    fontSize: 12,
                                    color: '#9FA0A5',
                                }
                            },
                        },
                        labelLine: {
                            length: 15,
                            length2: 30
                        },
                        data: arry,
                        color: ['#44c2fd', '#22ffc2', '#ffc522', '#ff1a40', '#d527b7',
                            '#0000ff', '#a0d911', '#52c41a', '#fa541c', '#722ed1', '#fadb14', '#5b8c00']
                    }]
                });
            },
            drawLine_one(name, arry) {
                let echarts = require('echarts');
                let myChart = echarts.init(document.getElementById(name));
                myChart.setOption({
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: { // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                        },
                       /* formatter: function (params) {
                            var tar;
                            if (params[1].value !== '-') {
                                tar = params[1];
                            } else {
                                tar = params[0];
                            }
                            return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
                        }*/
                    },
                    grid: {
                        top: '25%',
                        left: '3%',
                        right: '5%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'category',
                        splitLine: {
                            show: false
                        },
                        axisTick: {
                            show: false,
                        },
                        axisLine: {
                            lineStyle: {
                                color: "#ddd", // 颜色
                                width: 1, // 粗细
                            },
                        },
                        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
                    },
                    yAxis: {
                        name: arry[3],
                        min: 0,
                        max: 1000,
                        interval: 250,
                        type: 'value',
                        axisLabel: {
                            fontSize: 12,
                        },
                        axisLine: {
                            lineStyle: {
                                color: "#ddd", // 颜色
                                width: 1, // 粗细
                            },
                        },
                        axisTick: {
                            show: false,
                        },
                    },
                    series: [{
                        name: '当月产量',
                        type: 'bar',
                        barWidth: 10,
                        itemStyle: {
                            barBorderColor: 'rgba(0,0,0,0)',
                            color: 'rgba(0,0,0,0)'
                        },
                        emphasis: {
                            itemStyle: {
                                barBorderColor: 'rgba(0,0,0,0)',
                                color: 'rgba(0,0,0,0)'
                            }
                        },
                        data: arry[0]
                    },
                        {
                            name: '收入',
                            type: 'line',
                            barWidth: 10,
                            itemStyle: {
                                barBorderRadius: 30,
                                color: new echarts.graphic.LinearGradient(
                                    0, 0, 0, 1,
                                    [{
                                        offset: 0,
                                        color: '#7497FF'
                                    },
                                        {
                                            offset: 0,
                                            color: '#74B2FF'
                                        }
                                    ]
                                )
                            },
                            label: {
                                show: true,
                                position: 'top'
                            },
                            data: arry[1]
                        },
                        {
                            name: '支出',
                            type: 'bar',
                            barWidth: 10,
                            itemStyle: {
                                barBorderRadius: 30,
                                color: '#FF5140',
                            },
                            label: {
                                show: true,
                                position: 'bottom'
                            },
                            data: arry[2]
                        }
                    ]
                });
            },
            drawPie(id, arry, unit, name) {
                let echarts = require('echarts');
                let myChart = echarts.init(document.getElementById(id));
                myChart.setOption({
                    tooltip: {
                        trigger: "item",
                        formatter: "{a} <br/>{b}: {c}" + unit + "({d}%)",
                    },
                    legend: {
                        orient: "vertical",
                        bottom: 30,
                        right: 10,
                        itemGap: 10,
                        //data: ["煤油", "汽油", "柴油"],
                        itemWidth: 15,
                        itemHeight: 10,
                        textStyle: {
                            color: '#9FA0A5',
                            fontSize: 12,
                        }
                    },
                    series: [{
                        name: name,
                        type: "pie",
                        radius: ["40%", "55%"],
                        center: ["50%", "40%"],
                        label: {
                            formatter: "{b|{b}} \n\n {per|{d}%\n}",
                            padding: [0, -50, -15],
                            rich: {
                                per: {
                                    fontSize: 12,
                                    color: "#9FA0A5",
                                },
                                b: {
                                    fontSize: 12,
                                },
                            },
                        },
                        labelLine: {
                            length: 15,
                            length2: 50,
                        },
                        data: [{
                            value: arry[0],
                            name: "区内供应"
                        },
                            {
                                value: arry[1],
                                name: "区外供应"
                            },
                        ],
                        color: ["#FF9A13", "#96F0F2", "#14DBA0"],
                    }],
                });
            },
            drawPie_one(id, arry, unit, name) {
                let echarts = require('echarts');
                let myChart = echarts.init(document.getElementById(id));
                myChart.setOption({
                    tooltip: {
                        trigger: "item",
                        formatter: "{a} <br/>{b}: {c}" + unit + "({d}%)",
                    },
                    legend: {
                        orient: "vertical",
                        bottom: 30,
                        right: 10,
                        itemGap: 10,
                        itemGap: 10,
                        itemWidth: 15,
                        itemHeight: 10,
                    },
                    series: [{
                        name: name,
                        type: "pie",
                        radius: ["40%", "55%"],
                        center: ["50%", "50%"],
                        label: {
                            formatter: "{b|{b}} \n\n\n {per|{d}%\n}",
                            padding: [0, -40, -15],
                            rich: {
                                per: {
                                    fontSize: 12,
                                    color: "#9FA0A5",
                                },
                                b: {
                                    fontSize: 12,
                                },
                            },
                        },
                        labelLine: {
                            length: 15,
                            length2: 30,
                        },
                        data: [{
                            value: arry[0],
                            name: "中石化"
                        },
                            {
                                value: arry[1],
                                name: "中石油"
                            },
                        ],
                        color: ["#96F0F2", "#97C5FF"],
                    }],
                });
            },
            //第二个页面的第二个子页面
            drawPie_two(name, arry) {
                let echarts = require('echarts');
                let myChart = echarts.init(document.getElementById(name));
                myChart.setOption({
                    tooltip: {
                        trigger: "item",
                        formatter: "{a} <br/>{b}: {c} ({d}%)",
                    },
                    legend: {
                        orient: "vertical",
                        bottom: 30,
                        right: 10,
                        itemGap: 10,
                        itemGap: 10,
                        itemWidth: 15,
                        itemHeight: 10,
                    },
                    series: [{
                        name: "原油剩余技术储量",
                        type: "pie",
                        radius: ["40%", "55%"],
                        center: ["50%", "50%"],
                        label: {
                            formatter: "{b|{b}} \n\n\n {per|{d}%\n}",
                            padding: [0, -40, -15],
                            rich: {
                                per: {
                                    fontSize: 12,
                                    color: "#9FA0A5",
                                },
                                b: {
                                    fontSize: 12,
                                },
                            },
                        },
                        labelLine: {
                            length: 15,
                            length2: 30,
                        },
                        data: [{
                            value: arry[0],
                            name: "中石化"
                        },
                            {
                                value: arry[1],
                                name: "中石油"
                            },
                        ],
                        color: ["#96F0F2", "#97C5FF"],
                    }],
                });
            },
            drawPie_one(id, arry, unit, name) {
                let echarts = require('echarts');
                let myChart = echarts.init(document.getElementById(id));
                myChart.setOption({
                    tooltip: {
                        trigger: "item",
                        formatter: "{a} <br/>{b}: {c}" + unit + "({d}%)",
                    },
                    legend: {
                        orient: "vertical",
                        bottom: 30,
                        right: 10,
                        itemGap: 10,
                        itemGap: 10,
                        itemWidth: 15,
                        itemHeight: 10,
                    },
                    series: [{
                        name: name,
                        type: "pie",
                        radius: ["40%", "55%"],
                        center: ["50%", "50%"],
                        label: {
                            formatter: "{b|{b}} \n\n\n {per|{d}%\n}",
                            padding: [0, -40, -15],
                            rich: {
                                per: {
                                    fontSize: 12,
                                    color: "#9FA0A5",
                                },
                                b: {
                                    fontSize: 12,
                                },
                            },
                        },
                        labelLine: {
                            length: 15,
                            length2: 30,
                        },
                        data: [{
                            value: arry[0],
                            name: "中石化"
                        },
                            {
                                value: arry[1],
                                name: "中石油"
                            },
                        ],
                        color: ["#96F0F2", "#97C5FF"],
                    }],
                });
            },

//最后页面俩个图
            drawPie_five(name, arry) {
                let echarts = require('echarts');
                let myChart = echarts.init(document.getElementById(name));
                myChart.setOption({
                    tooltip: {
                        trigger: "axis",
                        axisPointer: {
                            type: "cross",
                            crossStyle: {
                                color: "#999",
                            },
                        },
                    },
                    xAxis: [
                        {
                            type: "category",
                            data: ["汽油", "柴油", "煤油"],
                            axisPointer: {
                                type: "shadow",
                            },
                            axisLabel: {
                                fontSize: 12,
                            },
                            axisLine: {
                                lineStyle: {
                                    color: "#ddd", // 颜色
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
                            max: 125,
                            interval: 25,
                            axisLabel: {
                                fontSize: 12,
                            },
                            axisLine: {
                                lineStyle: {
                                    color: "#ddd", // 颜色
                                    width: 1, // 粗细
                                },
                            },
                            axisTick: {
                                show: false,
                            },
                        },
                    ],

                    series: [{
                        type: 'bar',
                        itemStyle: {
                            normal: {
                                color: '#ddd',
                                barBorderRadius: [20, 20, 20, 20]
                            }
                        },
                        silent: true,
                        barWidth: 20,
                        barGap: '-1',
                        data: [110, 60, 80],
                        label: {
                            show: true,
                            // formatter:'{c0',
                            position: 'top'
                        },
                    },
                        {
                            type: 'bar',
                            itemStyle: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {offset: 0, color: "#63edd4"},
                                    {offset: 1, color: "rgba(14, 137, 238, 1)"},
                                ]),
                                barBorderRadius: [20, 20, 20, 20]
                            },
                            barWidth: 20,
                            data: [50, 30, 55]
                        }]
                });
            },

            drawPie_four(name, arry) {
                let echarts = require('echarts');
                let myChart = echarts.init(document.getElementById(name));
                let option = {
                    tooltip: {
                        trigger: "item",
                        formatter: "{b}: {c} ({d}%)",
                    },
                    legend: {
                        orient: "vertical",
                        right: 0,
                        top: 'center',
                        textStyle: {
                            color: '#9FA0A5',
                            padding: [15, 30, 2, 10],
                            fontSize: 12,
                        },
                        itemGap: 30,
                        data: ["柴油", "煤油", "汽油"],
                        itemWidth: 15,
                        itemHeight: 10,
                        formatter: function (name) {
                            var data = option.series[0].data;//获取series中的data
                            var total = 0;
                            var tarValue;
                            for (var i = 0, l = data.length; i < l; i++) {
                                total += data[i].value;
                                if (data[i].name == name) {
                                    tarValue = data[i].value;
                                }
                            }
                            var p = ((tarValue / total) * 100);
                            return name + "\n" + p.toFixed() + "%";
                        },
                    },
                    grid: {
                        bottom: 40,
                    },
                    series: [
                        {
                            name: "成品油生产",
                            type: "pie",
                            radius: ["40%", "55%"],
                            center: ["50%", "50%"],
                            label: {
                                show: false
                            },
                            data: [
                                {
                                    value: 40,
                                    name: "柴油",
                                },
                                {
                                    value: 20,
                                    name: "煤油",
                                },
                                {
                                    value: 40,
                                    name: "汽油",
                                }
                            ],
                            color: [
                                "#15E9EC",
                                "#FFD350",
                                "#01A6FF",
                            ],
                        },
                    ],
                }
                myChart.setOption(option);
            },

            //主要按钮
            tabButton(id) {
                console.log(id)
                this.selected = id
                //this.tabButton_one_t(id)
                if (0 == id) {
                    this.a = 1
                    this.b = 0
                    this.c = 0
                    this.i = 0
                    this.j = 0
                    this.g = 0
                    this.selected_one = 0
                    this.selected_two = 0
                    this.selected_three = 0
                    this.pie_number = 1030
                    this.$nextTick(function () {
                        this.drawLine('echartsOne', this.echarts.data_one, "万吨", "原油剩余技术储量",
                            this.echarts.lengend_data_one,this.echarts.lengdata_bottom_one);
                        this.drawLine('echartsTwo', this.echarts.data_two, "亿立方米", "天然气剩余技术储量",
                            this.echarts.lengend_data_three,this.echarts.lengdata_bottom_two);
                    })

                }
                if (1 == id) {
                    this.a = 0
                    this.b = 1
                    this.c = 0
                    this.p_i = 0
                    this.p_j = 0
                    this.p_g = 0
                    this.selected_four = 0
                    this.selected_five = 0
                    this.selected_six = 0
                    this.pie_number_two = 0.61
                    this.pie_one_number = this.produce_pie_oil[2]
                    this.pie_one_unit = this.produce_pie_oil[3]
                    this.bacolor = 1
                    this.$nextTick(function () {
                        this.drawLine_one('echartsThree', this.bardata_one)
                        this.drawPie('echartsFour', this.produce_pie_oil, "亿立方米", "本年度原油生产自给率")
                        this.drawPie_one('echartsFive', this.produce_pieTwo_oil, "个", "本年度原油生产企业分布")
                    })
                }
            },

            /* 第一个页面的点击按钮 */
            //内容里的第一个按钮
            tabButton_one(id) {
                this.selected_one = id
                if (this.i == 0 && id == 1) {
                    this.drawLine('echartsOne', this.echarts.data_one, "万吨", "原油剩余技术储量",
                        this.echarts.lengend_data_one,this.echarts.lengdata_bottom_one);
                    this.pie_number = 402
                    this.i = 1
                }
                if (this.i == 1 && id == 0) {
                    this.drawLine('echartsOne', this.echarts.data_one, "万吨", "原油剩余技术储量",
                        this.echarts.lengend_data_one,this.echarts.lengdata_bottom_one);
                    this.pie_number = 1030
                    this.i = 0
                }
            },
            //内容里的第二个按钮
            tabButton_two(id) {
                this.selected_two = id
                if (this.j == 0 && id == 1) {
                    this.drawLine('echartsTwo', this.echarts.data_two, "亿立方米", "天然气剩余技术储量",
                        this.echarts.lengend_data_three,this.echarts.lengdata_bottom_two);
                    this.pie_number_two = 0.37
                    this.j = 1
                }
                if (this.j == 1 && id == 0) {
                    this.drawLine('echartsTwo', this.echarts.data_two, "亿立方米", "天然气剩余技术储量",
                        this.echarts.lengend_data_three,this.echarts.lengdata_bottom_two);
                    this.pie_number_two = 0.61
                    this.j = 0
                }
            },
            //内容里的第三个按钮
            tabButton_three(id) {
                this.selected_three = id
                if (this.g == 0 && id == 1) {
                    this.g = 1
                    this.tableTh_name = '气田储采比排名'
                }
                if (this.g == 1 && id == 0) {
                    this.g = 0
                    this.tableTh_name = '油田储采比排名'
                }
            },

            /* 第二个页面的三个点击按钮 */
            //原油和炼化煤页面切换
            tabButton_produce(id) {
                if (id) {
                    //
                    this.btn_shenchan_num = 1
                    this.imgUrl = this.imgUrlArry[0]
                    this.imgUrl2 = this.imgUrlArry[3]
                    this.d = 1
                    this.a = 0
                    this.b = 1
                    this.c = 0
                    this.p_i = 0
                    this.p_j = 0
                    this.p_g = 0
                    this.selected_four = 0
                    this.selected_five = 0
                    this.selected_six = 0
                    this.pie_number_two = 0.61
                    this.pie_one_number = this.produce_pie_oil[2]
                    this.pie_one_unit = this.produce_pie_oil[3]
                    this.bacolor = 1
                    this.$nextTick(function () {
                        this.drawLine_one('echartsThree', this.bardata_one)
                        this.drawPie('echartsFour', this.produce_pie_oil, "亿立方米", "本年度原油生产自给率")
                        this.drawPie_one('echartsFive', this.produce_pieTwo_oil, "个", "本年度原油生产企业分布")
                    })
                } else {
                    this.btn_shenchan_num = 0
                    this.imgUrl = this.imgUrlArry[1]
                    this.imgUrl2 = this.imgUrlArry[2]
                    this.d = 0
                    this.selected_seven = 0
                    this.selected_eight = 0
                    this.k1 = 1
                    this.$nextTick(function () {
                        this.drawLine_one('echartsSix', this.bardata_two)
                        this.drawPie_four('echartsEight');
                    })
                }
            },
            //内容里的第一个按钮
            tabButton_four(id) {
                this.selected_four = id;
                if (this.p_i == 0 && id == 1) {
                    this.drawLine_one('echartsThree', this.bardata_two)
                    this.p_i = 1
                    // this.unit = '万m³'
                    this.unit = '万立方米'
                }
                if (this.p_i == 1 && id == 0) {
                    this.drawLine_one('echartsThree', this.bardata_one)
                    this.p_i = 0
                    this.unit = '万吨'
                }
            },
            //内容里的第二个按钮
            tabButton_five(id) {
                this.selected_five = id
                if (this.p_j == 0 && id == 1) {
                    this.drawPie('echartsFour', this.produce_pie_gas, "亿立方米", "本年度天然气生产自给率");
                    this.pie_one_number = this.produce_pie_gas[2]
                    this.pie_one_unit = this.produce_pie_gas[3]
                    this.p_j = 1
                }
                if (this.p_j == 1 && id == 0) {
                    this.drawPie('echartsFour', this.produce_pie_oil, "亿立方米", "本年度原油生产自给率");
                    this.pie_one_number = this.produce_pie_oil[2]
                    this.pie_one_unit = this.produce_pie_oil[3]
                    this.p_j = 0
                }
            },
            //内容里的第三个按钮
            tabButton_six(id) {
                this.selected_six = id
                if (this.p_g == 0 && id == 1) {
                    this.p_g = 1
                    this.bacolor = 0
                    this.drawPie_one('echartsFive', this.produce_pieTwo_gas, "个", "本年度天然气生产企业分布")
                }
                if (this.p_g == 1 && id == 0) {
                    this.p_g = 0
                    this.bacolor = 1
                    this.drawPie_one('echartsFive', this.produce_pieTwo_oil, "个", "本年度原油生产企业分布")
                }
            },
            //炼化煤内容第一个按钮
            tabButton_seven(id) {
                this.selected_seven = id;
                if (id == 1) {
                    this.drawLine_one('echartsSix', this.bardata_three)
                    this.unit = '万吨'
                }
                if (id == 0) {
                    this.drawLine_one('echartsSix', this.bardata_four)
                    this.unit = '万吨'
                }
                if (id == 2) {
                    this.drawLine_one('echartsSix', this.bardata_five)
                    // this.unit = '万m³'
                    this.unit = '万立方米'
                }
            },
            //炼化煤内容第二个按钮
            tabButton_eight(id) {
                this.selected_eight = id;
                if (0 == id) {
                    this.k1 = 1;
                    this.$nextTick(function () {
                        this.drawPie_four('echartsEight');
                    });
                }
                ;
                if (1 == id) {
                    this.k1 = 0;
                    this.$nextTick(function () {
                        this.drawPie_five('echartsNine');
                    });
                }
            },

            // 炼化煤弹窗
            tanchuang(a, arry, b) {
                if (a) {
                    this.page_c = arry;
                    if (this.xuan == b) {
                        this.xuan = b
                        this.produce_tc = !a
                    }
                    this.xuan = b
                } else {
                    this.produce_tc = !a
                    this.xuan = b
                    this.page_c = arry;
                }
            },
            //取消图片点击默认事件
            default_t() {
                console.log("点我干什么")
            }


        }
    }
</script>

<style scoped>
    /* 弹出框 */
    .tanchuang {
        position: absolute;
        width: 100%;
        height: 314.5px;
        background-color: #4C4C4C;
        z-index: 3;
        display: none;
    }

    /* 炼化煤弹窗样式 */
    .produce_tc {
        width: 180px;
        height: 100px;
        background-color: rgba(37, 54, 104, 0.6);
        left: 190px;
        top: 60px;
        position: absolute;
        padding-top: 8px;
    }

    .produce_tc ul li {
        font-size: 10px;
        color: #C9D6FD;
        padding: 6px;
        height: 18px;
    }

    .produce_tc ul :first-child {
        font-weight: bold;
        font-size: 15px;
        padding: 4px;
        color: white;
    }

    .produce_tc ul span {
        font-size: 13px;
        padding: 4px;
        height: 18px;
    }

    /* 结束 */

    .tanchuang_one {
        position: absolute;
        width: 100%;
        height: 314.5px;
        background-color: #4C4C4C;
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
        border: 1px solid #B9BEC9;
        padding: 3px 7px 2px 7px;
        text-align: center;
        background-color: white;
    }

    .table_one_t th {
        background-color: #D8DBDE;
    }

    #close {
        width: 35px;
        height: 35px;
        position: absolute;
        top: 255px;
    }

    .clickbtn {
        width: 13px;
        height: 13px;
        /* background-color: #000000; */
        position: absolute;
    }

    .click-change {
        width: 40px;
        height: 13px;
        position: absolute;
    }

    .lay-content {
        border: 1px solid rgba(106, 113, 129, 0.5);
        position: absolute;
        font-size: 12px;
        border-radius: 5px;
        padding: 5px 2px;
        background-color: rgba(106, 113, 129, 0.5);
        color: #fff;
        width: 120px;
    }

    #tab_button {
        width: 343px;
        height: 29px;
        background-color: rgba(0, 0, 0, 0.15);
        position: fixed;
        top: 100px;
        z-index: 4;
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

    /* 生产分析子页面按钮自适应垂直居中 */
    .btn_shenchan_div {
        position: relative;
        top: 5px;
    }

    /* 生产分析的子页面按钮样式 */
    .btn_shenchan_xuan {
        width: 100%;
        height: 25px;
        font-size: 12px;
        color: #7D87A0;
        background-color: #EBF2FF;
    }

    .btn_shenchan_wei {
        width: 100%;
        height: 25px;
        font-size: 12px;
        color: #7D87A0;
        background-color: #FFFFFF;
    }

    .btn_shenchan {
        width: 130px;
        height: 60px;
        background-color: #FFFFFF;
        position: absolute;
        top: 60px;
        left: 40px;
    }

    /* 按钮的图标 */
    .img_produce {
        width: 20px;
        height: 20px;
        position: relative;
        top: 2.5px;
    }

    /* 关于地图内容的调整期 */
    .map {
        width: 100%;
        height: 314.5px;
        background-color: #DADBDB;
    }

    .map1 {
        width: 100%;
        height: 298px;
        background-color: #DADBDB;
        margin-top: 14.5px;
    }

    /* 通用同比环比图片样式 */
    .imgStyle {
        width: 5px;
        height: 12px;
    }

    /* 储情分析内容 */
    .chart {
        width: 100%;
        height: 330px;
        background-color: white;
        padding: 10px 0;
        position: relative;
    }

    .chart_t {
        width: 100%;
        height: 305px;
        background-color: white;
        padding: 10px 0;
        position: relative;
    }

    .echarts {
        width: 100%;
        height: 320px;
        margin: 20px auto;
        background-image: url(../../assets/img/industryAnalysis/椭圆.png);
        background-repeat: no-repeat;
        background-position: 50% 26%;
        background-size: 65px 65px;

    }

    .echartsOne {
        width: 100%;
        height: 242px;
        margin: 20px auto;
        background-image: url(../../assets/img/industryAnalysis/石油标志.png);
        background-repeat: no-repeat;
        background-position: 50% 50%;
        background-size: 30px 45px;
    }

    /* 第二个页面带背景的样式 */
    .echartsTwo {
        width: 100%;
        height: 242px;
        margin: 20px auto;
        background-image: url(../../assets/img/industryAnalysis/天然气标志.png);
        background-repeat: no-repeat;
        background-position: 50% 50%;
        background-size: 40px 45px;
    }

    /* 第二个页面的图表样式 */
    .echarts_one {
        width: 100%;
        height: 242px;
        margin: 20px auto;
    }

    /* 给第一个柱图一个样式方便设置同比环比块的样式 */
    .echarts_two {
        width: 100%;
        height: 182px;
        margin: 0px auto;
    }

    /* 同比环比块最大div的样式 */
    .ratio_div {
        width: 345px;
        height: 60px;
        margin: 0 auto;
    }

    /* 给同比环比块一个样式 */
    .ratio {
        width: 100%;
        height: 25px;
        line-height: 25px;
        font-size: 12px;
    }

    /* 同比环比块父标签 */
    .ratio_position {
        width: 75px;
        height: 50px;
        float: left;
        position: relative;
        left: 10px;
    }

    /* 可复用至上年完成 */
    /* 上月完成数值块 */
    .last_month {
        width: 100%;
        height: 30px;
        line-height: 30px;
        text-align: center;
        background-color: #FDCDBF;
    }

    /* 上月完成字体块 */
    .last_month_font {
        width: 100%;
        height: 20px;
        line-height: 20px;
        text-align: center;
        background-color: #FF5C2D;
    }

    .ratio_font {
        font-size: 20px;
        color: #FF3A00;
        font-family: Microsoft YaHei;
        font-weight: 400;
    }

    .ratio_font1 {
        font-size: 5px;
        color: #FF3A00;
        font-family: Microsoft YaHei;
    }

    .ratio_font_div {
        font-size: 12px;
        color: #FFFFFF;
        font-family: Microsoft YaHei;
        font-weight: 400;
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
        top: 90px;
        font: 23px bolder microsoft-yahei;
    }

    .fontSizeOne {
        position: relative;
        top: 90px;
        font: 15px bolder microsoft-yahei;
    }

    /* 按钮样式调整 */
    .tab_oil {
        width: 345px;
        height: 31px;
        background-color: white;
        margin: 0px auto;
        border: 1px solid #3A6DDA;
        border-radius: 5px;
    }

    /* 按钮切换 */
    .tab_oil_one {
        width: 169.5px;
        height: 25px;
        font: 12px PingFangSC-Regular;
        color: #3A6DDA;
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
        background-color: #3A6DDA;
        font-size: 12px;
        color: white;
        line-height: 25px;
        float: left;
        position: relative;
        top: 2px;
        left: 2px;
        text-align: center;
        border-radius: 5px;
    }

    /* 第二个页面的第二个子页面的第一个按钮样式 */
    /* 按钮切换 */
    .tab_oil_three {
        width: 113px;
        height: 25px;
        font-size: 12px;
        color: #3A6DDA;
        line-height: 25px;
        float: left;
        position: relative;
        top: 2px;
        left: 2px;
        text-align: center;
    }

    .tab_oil_four {
        width: 113px;
        height: 25px;
        background-color: #3A6DDA;
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
        border: 1px solid #B9BEC9;
        padding: 3px 7px 2px 7px;
        text-align: center;
    }

    .table_one th {
        background-color: #D8DBDE;
    }

    /* 主要内容隐藏 */
    .content {
        display: none;
    }
</style>
