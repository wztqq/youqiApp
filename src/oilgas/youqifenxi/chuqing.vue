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
                    <div
                            class="lay-content"
                            v-show="flag=='1'||showAll"
                            :style="{'left':be_click_left(0.058),'top':be_click_top(0.562)}">
                        <div>吉祥油田区域</div>
                        <div>油田个数：2个</div>
                        <div>探明储量：562万吨</div>
                    </div>
                    <div class="lay-content"
                         v-show="flag=='2'||showAll"
                         :style="{'left':be_click_left(0.398),'top':be_click_top(0.649)}">
                        <div>包尔油田区域</div>
                        <div>油田个数：2个</div>
                        <div>探明储量：750万吨</div>
                    </div>
                    <div class="lay-content"
                         v-show="flag=='3'||showAll"
                         :style="{'left':be_click_left(0.358),'top':be_click_top(0.358)}">
                        <div>二连油田区域</div>
                        <div>油田个数：6个</div>
                        <div>探明储量：7500万吨</div>
                    </div>
                    <div class="lay-content"
                         v-show="flag=='5'||showAll"
                         :style="{'left':be_click_left(0.698),'top':be_click_top(0.108)}">
                        <div>海拉尔油田区域</div>
                        <div>油田个数：5个</div>
                        <div>探明储量：8437万吨</div>
                    </div>
                    <div class="lay-content"
                         v-show="flag=='4'||showAll"
                         :style="{'left':be_click_left(0.698),'top':be_click_top(0.348)}">
                        <div>科尔沁油田区域</div>
                        <div>油田个数：3个</div>
                        <div>探明储量：1125万吨</div>
                    </div>
                    <div class="lay-content"
                         v-show="flag=='6'||showAll"
                         :style="{'left':be_click_left(0.708),'top':be_click_top(0.638)}">
                        <div>科尔康油田区域</div>
                        <div>油田个数：2个</div>
                        <div>探明储量：375万吨</div>
                    </div>
                    <!--原油地图弹窗定位-->
                    <div>
                        <!-- <div class="clickbtn" :style="{'left':be_click_left(0.344),'top':be_click_top(0.638)}"
                              @click="selected_one==0?drawLine('echartsOne', echarts.data_one_jishu, '万吨',
                              '原油剩余技术储量',echarts.lengend_data_jishu_one,'35','1'):drawLine('echartsOne',
                              echarts.data_one_jingji, '万吨',
                              '原油剩余经济储量',echarts.lengend_data_jishu_one,'14','1')"></div>-->
                        <div class="clickbtn" :style="{'left':be_click_left(0.344),'top':be_click_top(0.638)}"
                             @click="oilHandel(echarts.data_one_jishu,echarts.lengend_data_jishu_one,'35',echarts.data_one_jingji,'14','1',$event)"></div>
                        <!-- <div class="clickbtn" :style="{'left':be_click_left(0.538),'top':be_click_top(0.602)}"
                              @click="selected_one==0?drawLine('echartsOne', echarts.data_two_jishu, '万吨',
                              '原油剩余技术储量',echarts.lengend_data_jishu_two,'47','2'):drawLine('echartsOne',
                              echarts.data_two_jingji, '万吨',
                              '原油剩余经济储量',echarts.lengend_data_jishu_two,'18','2')"></div>-->
                        <div class="clickbtn" :style="{'left':be_click_left(0.538),'top':be_click_top(0.602)}"
                             @click="oilHandel(echarts.data_two_jishu,echarts.lengend_data_jishu_two,'47',echarts.data_two_jingji,'18','2')"></div>
                        <!--   <div class="clickbtn" :style="{'left':be_click_left(0.656),'top':be_click_top(0.465)}"
                                @click="selected_one==0?drawLine('echartsOne', echarts.data_three_jishu, '万吨',
                                '原油剩余技术储量',echarts.lengend_data_jishu_three,'480','3'):drawLine('echartsOne',
                                echarts.data_three_jingji, '万吨',
                                '原油剩余经济储量',echarts.lengend_data_jishu_three,'180','3')"></div>-->
                        <div class="clickbtn" :style="{'left':be_click_left(0.656),'top':be_click_top(0.465)}"
                             @click="oilHandel(echarts.data_three_jishu,echarts.lengend_data_jishu_three,'480',echarts.data_three_jingji,'180','3')"></div>
                        <!--<div class="clickbtn" :style="{'left':be_click_left(0.740),'top':be_click_top(0.285)}"
                             @click="selected_one==0?drawLine('echartsOne', echarts.data_five_jishu, '万吨',
                             '原油剩余技术储量',echarts.lengend_data_jishu_five,'636','5'):drawLine('echartsOne',
                             echarts.data_five_jingji, '万吨',
                             '原油剩余经济储量',echarts.lengend_data_jishu_five,'278','5')"></div>-->
                        <div class="clickbtn" :style="{'left':be_click_left(0.740),'top':be_click_top(0.285)}"
                             @click="oilHandel(echarts.data_five_jishu,echarts.lengend_data_jishu_five,'636',echarts.data_five_jingji,'278','5')"></div>
                        <!--  <div class="clickbtn" :style="{'left':be_click_left(0.760),'top':be_click_top(0.515)}"
                               @click="selected_one==0?drawLine('echartsOne', echarts.data_four_jishu, '万吨',
                               '原油剩余技术储量',echarts.lengend_data_jishu_four,'71','4'):drawLine('echartsOne',
                               echarts.data_four_jingji, '万吨',
                               '原油剩余经济储量',echarts.lengend_data_jishu_four,'28','4')"></div>-->
                        <div class="clickbtn" :style="{'left':be_click_left(0.760),'top':be_click_top(0.515)}"
                             @click="oilHandel(echarts.data_four_jishu,echarts.lengend_data_jishu_four,'71',echarts.data_four_jingji,'28','4')"></div>
                        <!-- <div class="clickbtn" :style="{'left':be_click_left(0.820),'top':be_click_top(0.595)}"
                              @click="selected_one==0?drawLine('echartsOne', echarts.data_six_jishu, '万吨',
                              '原油剩余技术储量',echarts.lengend_data_jishu_six,'24','6'):drawLine('echartsOne',
                              echarts.data_six_jingji, '万吨',
                              '原油剩余经济储量',echarts.lengend_data_jishu_six,'9','6')"></div>-->
                        <div class="clickbtn" :style="{'left':be_click_left(0.820),'top':be_click_top(0.595)}"
                             @click="oilHandel(echarts.data_six_jishu,echarts.lengend_data_jishu_six,'24',echarts.data_six_jingji,'9','6')"></div>
                    </div>
                </div>
                <!--天然气宏观显示-->
                <div v-show="oilShow?false:true">
                    <div class="lay-content" v-show="flagGas=='1'||showAllGas"
                         :style="{'left':be_click_left(0.148),'top':be_click_top(0.712)}">
                        <div>苏里格气田区域</div>
                        <div>气田个数：5个</div>
                        <div>探明储量：11900万立方米</div>
                    </div>
                    <div class="lay-content"
                         v-show="flagGas=='2'||showAllGas"
                         :style="{'left':be_click_left(0.198),'top':be_click_top(0.429)}">
                        <div>包尔气田区域</div>
                        <div>气田个数：1个</div>
                        <div>探明储量：560万立方米</div>
                    </div>
                    <div class="lay-content"
                         v-show="flagGas=='3'||showAllGas"
                         :style="{'left':be_click_left(0.608),'top':be_click_top(0.538)}">
                        <div>二连气田区域</div>
                        <div>气田个数：2个</div>
                        <div>探明储量：700万立方米</div>
                    </div>
                    <div class="lay-content"
                         v-show="flagGas=='4'||showAllGas"
                         :style="{'left':be_click_left(0.448),'top':be_click_top(0.148)}">
                        <div>海拉尔气田区域</div>
                        <div>油田个数：2个</div>
                        <div>探明储量：840万立方米</div>
                    </div>
                    <!--//天然气弹窗定位-->
                    <div>
                        <!--  <div class="clickbtn" :style="{'left':be_click_left(0.444),'top':be_click_top(0.768)}"
                               @click="selected_two==0?drawLine_Gas('echartsTwo', echarts.dataGas_one_jishu, '万立方米',
                               '天然气剩余技术储量',echarts.lengendGas_data_one,'0.34','1'):drawLine_Gas('echartsTwo',
                               echarts.dataGas_one_jingji, '万立方米',
                               '天然气剩余经济储量',echarts.lengendGas_data_one,'0.56','1')"></div>-->
                        <div class="clickbtn" :style="{'left':be_click_left(0.444),'top':be_click_top(0.768)}"
                             @click="gasHandel(echarts.dataGas_one_jishu,echarts.lengendGas_data_one,'0.34',echarts.dataGas_one_jingji,'0.56','1')"></div>
                        <!-- <div class="clickbtn" :style="{'left':be_click_left(0.500),'top':be_click_top(0.552)}"
                              @click="selected_two==0?drawLine_Gas('echartsTwo', echarts.dataGas_two_jishu, '万立方米',
                              '天然气剩余技术储量',echarts.lengendGas_data_two,'0.02','2'):drawLine_Gas('echartsTwo',
                              echarts.dataGas_two_jingji, '万立方米',
                              '天然气剩余经济储量',echarts.lengendGas_data_two,'0.03','2')"></div>-->
                        <div class="clickbtn" :style="{'left':be_click_left(0.500),'top':be_click_top(0.552)}"
                             @click="gasHandel(echarts.dataGas_two_jishu,echarts.lengendGas_data_two,'0.02',echarts.dataGas_two_jingji,'0.03','2')"></div>
                        <!--<div class="clickbtn" :style="{'left':be_click_left(0.666),'top':be_click_top(0.485)}"
                             @click="selected_two==0?drawLine_Gas('echartsTwo', echarts.dataGas_three_jishu, '万立方米',
                             '天然气剩余技术储量',echarts.lengendGas_data_three,'0.02','3'):drawLine_Gas('echartsTwo',
                             echarts.dataGas_three_jingji, '万立方米',
                             '天然气剩余经济储量',echarts.lengendGas_data_three,'0.03','3')"></div>-->
                        <div class="clickbtn" :style="{'left':be_click_left(0.666),'top':be_click_top(0.485)}"
                             @click="gasHandel(echarts.dataGas_three_jishu,echarts.lengendGas_data_three,'0.02',echarts.dataGas_three_jingji,'0.03','3')"></div>
                        <!--<div class="clickbtn" :style="{'left':be_click_left(0.760),'top':be_click_top(0.245)}"
                             @click="selected_two==0?drawLine_Gas('echartsTwo', echarts.dataGas_four_jishu, '万立方米',
                             '天然气剩余技术储量',echarts.lengendGas_data_four,'0.02','4'):drawLine_Gas('echartsTwo',
                             echarts.dataGas_four_jingji, '万立方米',
                             '天然气剩余经济储量',echarts.lengendGas_data_four,'0.03','4')"></div>-->
                        <div class="clickbtn"
                             :style="{'left':be_click_left(0.760),'top':be_click_top(0.245)}"
                             @click="gasHandel(echarts.dataGas_four_jishu,echarts.lengendGas_data_four,'0.02',echarts.dataGas_four_jingji,'0.03','4')"></div>
                    </div>
                </div>
                <div class="click-change"
                     :style="oilShow?{'left':be_click_left(0.060),'top':be_click_top(0.230)}:{'left':be_click_left(0.060),'top':be_click_top(0.230)}"
                     @click="btnOil()"></div>
                <div class="click-change"
                     :style="oilShow?{'left':be_click_left(0.060),'top':be_click_top(0.310)}:{'left':be_click_left(0.060),'top':be_click_top(0.310)}"
                     @click="btnGas()"></div>
            </div>


            <img class="map" :src="oilShow?src:src1" alt="图片未显示">
            <div class="chuqing_chart" v-show="oilShow?true:false">
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
            <div class="chart_t" v-show="oilShow?false:true">
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
                             v-model="tableTh_name">{{tableTh_name}}<span
                                style="color: #FF9311 ;font-style: italic;">Top5</span>
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

        <!--生产分析-->
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
            <div>
                <div class="click-change"
                     :style="{'left':be_click_left(0.740),'top':be_click_top(0.801)}"
                     @click="proShow=true"></div>
                <div class="click-change"
                     :style="{'left':be_click_left(0.740),'top':be_click_top(0.880)}"
                     @click="proShow=false"></div>
            </div>
            <div id="produce" v-show="d">
                <div v-show="proShow">
                    <!--生产分析地图原油显示-->
                    <div>
                        <div class="lay-content-pro" :style="{'left':be_click_left(0.043),'top':be_click_top(0.712)}">
                            <div>吉祥油田区域</div>
                            <div>上月产量：1.4万吨</div>
                            <div>累计产量：4.2万吨</div>
                        </div>
                        <div class="lay-content-pro" :style="{'left':be_click_left(0.178),'top':be_click_top(0.512)}">
                            <div>包尔油田区域</div>
                            <div>上月产量：2.4万吨</div>
                            <div>累计产量：5.4万吨</div>
                        </div>
                        <div class="lay-content-pro" :style="{'left':be_click_left(0.408),'top':be_click_top(0.382)}">
                            <div>二连油田区域</div>
                            <div>上月产量：2.4万吨</div>
                            <div>累计产量：38.7万吨</div>
                        </div>
                        <div class="lay-content-pro" :style="{'left':be_click_left(0.688),'top':be_click_top(0.152)}">
                            <div>海拉尔油田区域</div>
                            <div>上月产量：5万吨</div>
                            <div>累计产量：21万吨</div>
                        </div>
                        <div class="lay-content-pro" :style="{'left':be_click_left(0.7),'top':be_click_top(0.362)}">
                            <div>科尔沁油田区域</div>
                            <div>上月产量：3万吨</div>
                            <div>累计产量：12.6万吨</div>
                        </div>
                        <div class="lay-content-pro" :style="{'left':be_click_left(0.7),'top':be_click_top(0.642)}">
                            <div>科尔康油田区域</div>
                            <div>上月产量：1.4万吨</div>
                            <div>累计产量：3.36万吨</div>
                        </div>
                    </div>
                    <!--生产分析原油地图弹窗-->
                    <div>
                        <div class="clickbtn1" :style="{'left':be_click_left(0.333),'top':be_click_top(0.718)}"
                             @click="tanchuangShow(listData_pro1,tableTh1_pro)"></div>
                        <div class="clickbtn1" :style="{'left':be_click_left(0.463),'top':be_click_top(0.64)}"
                             @click="tanchuangShow(listData_pro2,tableTh1_pro)"></div>
                        <div class="clickbtn2" :style="{'left':be_click_left(0.559),'top':be_click_top(0.55)}"
                             @click="tanchuangShow(listData_pro3,tableTh1_pro)"></div>
                        <div class="clickbtn1" :style="{'left':be_click_left(0.649),'top':be_click_top(0.297)}"
                             @click="tanchuangShow(listData_pro4,tableTh1_pro)"></div>
                        <div class="clickbtn1" :style="{'left':be_click_left(0.759),'top':be_click_top(0.55)}"
                             @click="tanchuangShow(listData_pro5,tableTh1_pro)"></div>
                        <div class="clickbtn1" :style="{'left':be_click_left(0.789),'top':be_click_top(0.62)}"
                             @click="tanchuangShow(listData_pro6,tableTh1_pro)"></div>
                    </div>
                </div>
                <div v-show="proShow?false:true">
                    <!--生产分析地图气田显示-->
                    <div>
                        <div class="lay-content-gas" :style="{'left':be_click_left(0.013),'top':be_click_top(0.712)}">
                            <div>苏里格气田区域</div>
                            <div>上月产量：12亿立方米</div>
                            <div>累计产量：176亿立方米</div>
                        </div>
                        <div class="lay-content-gas" :style="{'left':be_click_left(0.128),'top':be_click_top(0.462)}">
                            <div>包尔气田区域</div>
                            <div>上月产量：0.52亿立方米</div>
                            <div>累计产量：3.92亿立方米</div>
                        </div>
                        <div class="lay-content-gas" :style="{'left':be_click_left(0.608),'top':be_click_top(0.562)}">
                            <div>二连气田区域</div>
                            <div>上月产量：0.68亿立方米</div>
                            <div>累计产量：6.88亿立方米</div>
                        </div>
                        <div class="lay-content-gas" :style="{'left':be_click_left(0.388),'top':be_click_top(0.092)}">
                            <div>海拉尔气田区域</div>
                            <div>上月产量：0.8亿立方米</div>
                            <div>累计产量：9.8亿立方米</div>
                        </div>
                    </div>
                    <!--生产分析气田地图弹窗-->
                    <div>
                        <div class="clickbtn2" :style="{'left':be_click_left(0.359),'top':be_click_top(0.768)}"
                             @click="tanchuangShow(listData_gas1,tableTh1_gas)"></div>
                        <div class="clickbtn1" :style="{'left':be_click_left(0.489),'top':be_click_top(0.585)}"
                             @click="tanchuangShow(listData_gas2,tableTh1_gas)"></div>
                        <div class="clickbtn1" :style="{'left':be_click_left(0.639),'top':be_click_top(0.501)}"
                             @click="tanchuangShow(listData_gas3,tableTh1_gas)"></div>
                        <div class="clickbtn2" :style="{'left':be_click_left(0.679),'top':be_click_top(0.237)}"
                             @click="tanchuangShow(listData_gas4,tableTh1_gas)"></div>
                    </div>
                </div>


                <img class="map" :src="proShow?srcpro:srcpro1" alt="图片未显示">
                <div class="chart">
                    <div class="tab_oil">
                        <span v-for="(item,index) in tablist_four" :key='index' @click="tabButton_four(index)"
                              v-bind:class="[{tab_oil_two:index == selected_four},{tab_oil_one:true}]">{{item}}</span>
                    </div>
                    <!-- <div class="ratio_div">
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
                    <div class="echarts_new" id="echartsThree"></div>
                </div>
                <div class="chart pie_chart">
                    <div style="width: 100%;height: 8px;background-color: #DADBDB;margin-bottom: 10px;"></div>
                    <div class="tab_oil">
                        <span v-for="(item,index) in tablist_five" :key='index' @click="tabButton_five(index)"
                              v-bind:class="[{tab_oil_two:index == selected_five},{tab_oil_one:true}]">{{item}}</span>
                    </div>
                    <div class="fontSize_div" v-show="value1 === 0">
                        <div class="fontSize" v-model="pie_one_number">{{pie_one_number}}</div>
                        <div class="fontSizeOne" v-model="pie_one_unit">{{pie_one_unit}}</div>
                    </div>
                    <!--下拉列表-->
                    <van-dropdown-menu>
                        <van-dropdown-item v-model="value1" :options="option1" @change="changeChart"/>
                    </van-dropdown-menu>

                    <!--原油生产自给率年度环形图-->
                    <div class="echarts_one echart_bg" v-show="value1 === 0">
                        <div id="echartsFour" style="width: 100%;height:100%"></div>
                    </div>
                    <div class="echarts_one" v-show="value1 !== 0">
                        <div id="echartsBar" style="width: 100%;height:100%"></div>
                    </div>

                </div>
                <div class="chart">
                    <div style="width: 100%;height: 8px;background-color: #DADBDB;margin-bottom: 10px;"></div>
                    <div class="tab_oil">
                        <span v-for="(item,index) in tablist_six" :key='index' @click="tabButton_six(index)"
                              v-bind:class="[{tab_oil_two:index == selected_six},{tab_oil_one:true}]">{{item}}</span>
                    </div>
                    <div class="fontDiv2" v-show="bacolor==1">
                        <div class="font_num">7065</div>
                        <div class="font_unit">万吨</div>
                    </div>
                    <div class="fontDiv2" v-show="bacolor==0">
                        <div class="font_num">7665</div>
                        <div class="font_unit">万立方米</div>
                    </div>
                    <div :class="[{echartsOne:bacolor},{echartsTwo:!bacolor}]" id="echartsFive"></div>
                </div>
            </div>


            <div id="produce_refine" v-show="!d">
                <div
                         class="produce_tc"  v-show="produce_tc"
                        :style="{'left':be_click_left(page_c[5]),'top':be_click_top(page_c[6])}">
                    <ul>
                        <li>{{page_c[0]}}</li>
                        <li>企业人数：<span>{{page_c[1]}}</span>人</li>
                        <li>上月粉煤加工量：<span>{{page_c[2]}}</span>万吨</li>
                        <li>上月天然气产量：<span>{{page_c[3]}}</span>万立方米</li>
                        <li>上月销量：<span>{{page_c[4]}}</span>{{page_c[7]}}</li>
                    </ul>
                </div>
                <div class="clickbtn" :style="{'left':be_click_left(0.415),'top':be_click_top(0.818)}"
                     @click="tanchuang(produce_tc,page_c2,1)"></div>
                <div class="clickbtn" :style="{'left':be_click_left(0.375),'top':be_click_top(0.785)}"
                     @click="tanchuang(produce_tc,page_c3,2)"></div>
                <div class="clickbtn" :style="{'left':be_click_left(0.435),'top':be_click_top(0.758)}"
                     @click="tanchuang(produce_tc,page_c4,3)"></div>
                <div class="clickbtn" :style="{'left':be_click_left(0.493),'top':be_click_top(0.711)}"
                     @click="tanchuang(produce_tc,page_c5,4)"></div>
                <div class="clickbtn" :style="{'left':be_click_left(0.717),'top':be_click_top(0.586)}"
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
                    <div class="echarts_new" id="echartsSix"></div>
                </div>
                <div class="chart pie_chart">
                    <div style="width: 100%;height: 8px;background-color: #DADBDB;margin-bottom: 10px;"></div>
                    <div class="tab_oil">
                    <span v-for="(item,index) in tablist_eight" :key='index' @click="tabButton_eight(index)"
                          v-bind:class="[{tab_oil_two:index == selected_eight},{tab_oil_one:true}]">{{item}}</span>
                    </div>
                    <div v-show='k1'>
                        <!--下拉列表-->
                        <van-dropdown-menu>
                            <van-dropdown-item v-model="selStrc" :options="option1" @change="selStrcHandel"/>
                        </van-dropdown-menu>
                        <div v-show="selStrc===0">
                            <div class="fontDiv">
                                <div class="font_num">280</div>
                                <div class="font_unit">万吨</div>
                            </div>
                            <div class="echarts_one echart_bgnew" id="echartsEight"></div>
                        </div>
                        <div class="echarts_one" v-show="selStrc !== 0">
                            <div id="echartsEle" style="width: 100%;height:100%"></div>
                        </div>
                    </div>
                    <div v-show='!k1'>
                        <!--下拉列表-->
                        <van-dropdown-menu>
                            <van-dropdown-item v-model="time" :options="option1" @change="selChart"/>
                        </van-dropdown-menu>
                        <div v-show="time===0">
                            <div class="fontDiv">
                                <div class="font_num">180</div>
                                <div class="font_unit">万吨</div>
                            </div>
                            <div class="echarts_one echart_bgnew" id="echartsNine"></div>
                        </div>

                        <div class="echarts_one" v-show="time !== 0">
                            <div id="echartsTen" style="width: 100%;height:100%"></div>
                        </div>
                    </div>

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
                showAll: true,
                showAllGas: true,
                value1: 0,
                src: require('../../assets/img/原油.png'),
                src1: require('../../assets/img/天然气.png'),
                srcpro: require('../../assets/img/industryAnalysis/shengchanfenxi-youtian.png'),
                srcpro1: require('../../assets/img/industryAnalysis/shengchanfenxi-qitian.png'),
                option1: [
                    {text: '年度', value: 0},
                    {text: '季度', value: 1},
                    {text: '月', value: 2},
                ],
                time: 0,
                selStrc: 0,
                // 原油自给率柱图数据
                barOneMonth: [
                    //原油生产自给率月度（总产量）数据
                    [8, 8, 6, 7, 7, 9, 6, 7, 7, 10, 7, 7],
                    //原油生产自给率月度（区内供应）数据
                    [4, 6, 3, 6, 5, 4, 5, 5, 4, 5, 5, 3],
                    //月度自给率
                    [20, 25, 18, 9, 11, 21, 40, 20, 12, 21, 30, 40],
                    ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                    '万吨'


                ],
                barOneQuarter: [
                    //原油生产自给率季度（总产量）数据
                    [22, 24, 23, 21],
                    //原油生产自给率季度（区内供应）数据
                    [12, 14, 13, 16],
                    //季度自给率
                    [20, 25, 21, 30],
                    ['1-3月', '4-6月', '7-9月', '10-12月'],
                    '万吨'
                ],
                // 天然气自给率柱图数据
                barOneMonthGas: [
                    //原油生产自给率月度（总产量）数据
                    [0.0126, 0.0124, 0.0127, 0.0123, 0.0125, 0.0125, 0.0123, 0.0127, 0.0126, 0.0124, 0.0125, 0.0125],
                    //原油生产自给率月度（区内供应）数据
                    [0.0076, 0.0074, 0.0077, 0.0073, 0.0075, 0.0075, 0.0072, 0.0078, 0.0075, 0.0075, 0.0072, 0.0078],
                    //月度自给率
                    [20, 25, 18, 9, 11, 21, 40, 20, 12, 21, 30, 40],
                    ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                    '亿立方米'
                ],
                barOneQuarterGas: [
                    //原油生产自给率季度（总产量）数据
                    [0.03, 0.04, 0.03, 0.05],
                    //原油生产自给率季度（区内供应）数据
                    [0.02, 0.03, 0.02, 0.02],
                    //季度自给率
                    [20, 25, 21, 30],
                    ['1-3月', '4-6月', '7-9月', '10-12月'],
                    '亿立方米'
                ],
                // 炼化煤页面弹窗
                page_c: [],
                page_c1: ['大唐煤制气', 1200, 100, 1000, 500, '0.465', '0.153', '万立方米'],
                page_c2: ['神华煤制油', 1250, 100, 1000, 500, '0.445', '0.433', '万吨'],
                page_c3: ['汇能煤制气', 2000, 100, 1000, 400, '0.405', '0.393', '万立方米'],
                page_c4: ['伊泰煤制油', 1600, 100, 1000, 600, '0.445', '0.373', '万吨'],
                page_c5: ['呼和浩特石化公司', 1700, 100, 1000, 500, '0.455', '0.303', '万吨'],
                produce_tc: false,
                xuan: 0,


                screenWidth: document.body.clientWidth, // 屏幕宽
                screenHeight: document.body.clientHeight, // 屏幕高
                screenLeft: '',
                screenTop: '',
                show: 0, //控制弹窗显示
                oilShow: true,//地图原油展示
                proShow: true,//生产分析原油天然气切换
                closeLeft: 0, //关闭按钮居中
                tableTh: [],
                tableTh1: ['油田', '剩余经济可采储量', '剩余技术可采储量'],
                tableTh2: ['气田', '剩余经济可采储量', '剩余技术可采储量'],
                listData: [],
                listData1: [{
                    "name": "吉祥油田",
                    "economic": "9万吨",
                    "technology": "21万吨"
                },
                    {
                        "name": "达尔其油田",
                        "economic": "5万吨",
                        "technology": "14万吨"
                    }],
                listData2: [
                    {
                        "name": "包尔油田",
                        "economic": "11万吨",
                        "technology": "27万吨"
                    },
                    {
                        "name": "塞汗油田",
                        "economic": "7万吨",
                        "technology": "20万吨"
                    }
                ],
                listData3: [
                    {
                        "name": "乌利雅斯太油田",
                        "economic": "45万吨",
                        "technology": "130万吨"
                    },
                    {
                        "name": "宝力格油田",
                        "economic": "40万吨",
                        "technology": "80万吨"
                    },
                    {
                        "name": "新苏木油田",
                        "economic": "35万吨",
                        "technology": "75万吨"
                    },
                    {
                        "name": "哈达图油田",
                        "economic": "25万吨",
                        "technology": "70万吨"
                    },
                    {
                        "name": "锡林油田",
                        "economic": "20万吨",
                        "technology": "65万吨"
                    },
                    {
                        "name": "乌兰诺尔油田",
                        "economic": "15万吨",
                        "technology": "60万吨"
                    },
                ],
                listData4: [
                    {
                        "name": "科尔沁油田",
                        "economic": "13万吨",
                        "technology": "28万吨"
                    },
                    {
                        "name": "交力格油田",
                        "economic": "8万吨",
                        "technology": "26万吨"
                    },
                    {
                        "name": "广发油田",
                        "economic": "7万吨",
                        "technology": "17万吨"
                    }
                ],
                listData10: [
                    {
                        "name": "龙筒湾油田",
                        "economic": "6万吨",
                        "technology": "12万吨"
                    },
                    {
                        "name": "科尔康油田",
                        "economic": "3万吨",
                        "technology": "12万吨"
                    }
                ],
                listData5: [
                    {
                        "name": "苏仁诺尔油田",
                        "economic": "50万吨",
                        "technology": "106万吨"
                    },
                    {
                        "name": "巴彦塔拉油田",
                        "economic": "45万吨",
                        "technology": "106万吨"
                    },
                    {
                        "name": "苏德尔特油田",
                        "economic": "40万吨",
                        "technology": "106万吨"
                    },
                    {
                        "name": "呼和诺仁油田",
                        "economic": "37万吨",
                        "technology": "106万吨"
                    },
                    {
                        "name": "贝尔油田",
                        "economic": "35万吨",
                        "technology": "106万吨"
                    }
                ],
                listData6: [
                    {
                        "name": "胜利井气田",
                        "economic": "1571万立方米",
                        "technology": "952万立方米"
                    },
                    {
                        "name": "苏里格气田",
                        "economic": "1122万立方米",
                        "technology": "680万立方米"
                    },
                    {
                        "name": "靖边气田",
                        "economic": "1122万立方米",
                        "technology": "680万立方米"
                    },
                    {
                        "name": "乌审旗气田",
                        "economic": "1122万立方米",
                        "technology": "680万立方米"
                    },
                    {
                        "name": "大牛地气田",
                        "economic": "673万立方米",
                        "technology": "408万立方米"
                    },
                ],
                listData7: [
                    {
                        "name": "包尔气田",
                        "economic": "264万立方米",
                        "technology": "160万立方米"
                    },
                ],
                listData8: [
                    {
                        "name": "哈达图气田",
                        "economic": "230万立方米",
                        "technology": "110万立方米"
                    },
                    {
                        "name": "宝力格气田",
                        "economic": "100万立方米",
                        "technology": "90万立方米"
                    },
                ],
                listData9: [
                    {
                        "name": "贝尔气田",
                        "economic": "213万立方米",
                        "technology": "122万立方米"
                    },
                    {
                        "name": "苏仁诺尔气田",
                        "economic": "183万立方米",
                        "technology": "118万立方米"
                    }
                ],
                tablist: ['储情分析', '生产分析'],
                tableTh1_pro: ['名称', '探明储量(万吨)', '上月产量(万吨)'],
                tableTh1_gas: ['名称', '探明储量(亿立方米)', '上月产量(亿立方米)'],
                listData_pro1: [
                    {
                        "name": "吉祥油田",
                        "capacity": "0.21",
                        "yield": "0.24"
                    },
                    {
                        "name": "达尔其油田",
                        "capacity": "0.2",
                        "yield": "0.21"
                    }
                ],
                listData_pro2: [
                    {
                        "name": "包尔油田",
                        "capacity": "0.31",
                        "yield": "0.34"
                    },
                    {
                        "name": "赛汗油田",
                        "capacity": "0.24",
                        "yield": "0.21"
                    }
                ],
                listData_pro3: [
                    {
                        "name": "乌里雅斯太油田",
                        "capacity": "0.21",
                        "yield": "0.24"
                    },
                    {
                        "name": "新苏木油田",
                        "capacity": "0.2",
                        "yield": "0.21"
                    },
                    {
                        "name": "哈达图油田",
                        "capacity": "0.3",
                        "yield": "0.31"
                    },
                    {
                        "name": "锡林油田",
                        "capacity": "0.1",
                        "yield": "0.11"
                    },
                    {
                        "name": "乌兰诺尔油田",
                        "capacity": "0.09",
                        "yield": "0.11"
                    },
                    {
                        "name": "宝力油田",
                        "capacity": "0.1",
                        "yield": "0.11"
                    }
                ],
                listData_pro4: [
                    {
                        "name": "苏仁诺尔油田",
                        "capacity": "0.21",
                        "yield": "0.24"
                    },
                    {
                        "name": "苏德尔特油田",
                        "capacity": "0.2",
                        "yield": "0.21"
                    },
                    {
                        "name": "巴彦塔拉油田",
                        "capacity": "0.21",
                        "yield": "0.24"
                    },
                    {
                        "name": "呼和诺仁油田",
                        "capacity": "0.2",
                        "yield": "0.21"
                    },
                    {
                        "name": "贝尔油田",
                        "capacity": "0.1",
                        "yield": "0.11"
                    }
                ],
                listData_pro5: [
                    {
                        "name": "科尔沁油田",
                        "capacity": "0.21",
                        "yield": "0.24"
                    },
                    {
                        "name": "广发油田",
                        "capacity": "0.2",
                        "yield": "0.21"
                    },
                    {
                        "name": "交利格油田",
                        "capacity": "0.1",
                        "yield": "0.11"
                    }
                ],
                listData_pro6: [
                    {
                        "name": "龙湾筒油田",
                        "capacity": "0.21",
                        "yield": "0.24"
                    },
                    {
                        "name": "科尔康油田",
                        "capacity": "0.2",
                        "yield": "0.21"
                    }
                ],
                listData_gas1: [
                    {
                        "name": "苏里格气田",
                        "capacity": "0.9",
                        "yield": "1.4"
                    },
                    {
                        "name": "大牛地气田",
                        "capacity": "0.8",
                        "yield": "1.28"
                    },
                    {
                        "name": "靖边气田",
                        "capacity": "0.9",
                        "yield": "1.27"
                    },
                    {
                        "name": "胜利井气田",
                        "capacity": "0.8",
                        "yield": "1.2"
                    },
                    {
                        "name": "乌审旗气田",
                        "capacity": "0.9",
                        "yield": "1.5"
                    }
                ],
                listData_gas2: [
                    {
                        "name": "包尔气田",
                        "capacity": "0.9",
                        "yield": "1.4"
                    }
                ],
                listData_gas3: [
                    {
                        "name": "哈达图气田",
                        "capacity": "0.9",
                        "yield": "1.4"
                    },
                    {
                        "name": "宝力格气田",
                        "capacity": "0.8",
                        "yield": "1.28"
                    }
                ],
                listData_gas4: [
                    {
                        "name": "贝尔气田",
                        "capacity": "0.9",
                        "yield": "1.4"
                    },
                    {
                        "name": "苏仁诺尔气田",
                        "capacity": "0.8",
                        "yield": "1.28"
                    }
                ],
                tablist_one: ['原油剩余技术储量', '原油剩余经济储量'],
                tablist_two: ['天然气剩余技术储量', '天然气剩余经济储量'],
                pie_number: 1177,  //原油剩余技术数值
                pie_number_two: 0.78,  //天然气剩余技术数值
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
                    lengend_data_one: ['海拉尔油区', '二连油区', '科尔沁油区', '包尔油区', '吉祥油区',
                        '科尔康油区'],
                    lengend_data_jishu_one: ['吉祥油田', '达耳其油田'],
                    lengend_data_jishu_two: ['包尔油田', '塞汗油田'],
                    lengend_data_jishu_three: ['乌利雅斯太油田', '宝力格油田', '新苏木油田', '哈达图油田', '锡林油田', '乌兰诺尔油田'],
                    lengend_data_jishu_four: ['科尔沁油田', '交力格油田', '广发油田'],
                    lengend_data_jishu_five: ['苏仁诺尔油田', '巴彦塔拉油田', '苏德尔特油田', '呼和诺仁油田', '贝尔油田'],
                    lengend_data_jishu_six: ['龙筒湾油田', '科尔康油田'],
                    lengend_data_three: ['苏里格气区', '包尔气区', '二连气区', '海拉尔气区'],
                    lengendGas_data_one: ['苏格里气田', '大牛地气田', '胜利井气田', '靖边气田', '乌审旗气田'],
                    lengendGas_data_two: ['包尔气田'],
                    lengendGas_data_three: ['哈达图气田', '宝力格气田'],
                    lengendGas_data_four: ['贝尔气田', '苏仁诺尔气田'],
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
                        value: 0.34,
                        name: '苏里格气区'
                    },
                        {
                            value: 0.02,
                            name: '包尔气区'
                        },
                        {
                            value: 0.02,
                            name: '二连气区'
                        },
                        {
                            value: 0.4,
                            name: '海拉尔气区'
                        }
                    ],
                    data_one: [
                        {
                            value: 530,
                            name: '海拉尔油区'
                        },
                        {
                            value: 470,
                            name: '二连油区'
                        },
                        {
                            value: 71,
                            name: '科尔沁油区'
                        },
                        {
                            value: 47,
                            name: '包尔油区'
                        },
                        {
                            value: 35,
                            name: '吉祥油区'
                        },
                        {
                            value: 24,
                            name: '科尔康油区'
                        }
                    ],
                    data_jingji: [
                        {
                            value: 207,
                            name: '海拉尔油区'
                        },
                        {
                            value: 180,
                            name: '二连油区'
                        },
                        {
                            value: 28,
                            name: '科尔沁油区'
                        },
                        {
                            value: 18,
                            name: '包尔油区'
                        },
                        {
                            value: 14,
                            name: '吉祥油区'
                        },
                        {
                            value: 9,
                            name: '科尔康油区'
                        }
                    ],
                    data_one_jishu: [
                        {
                            value: 21,
                            name: '吉祥油田'
                        },
                        {
                            value: 14,
                            name: '达耳其油田'
                        }
                    ],
                    data_two_jishu: [
                        {
                            value: 27,
                            name: '包尔油田'
                        },
                        {
                            value: 20,
                            name: '塞汗油田'
                        }
                    ],
                    data_three_jishu: [
                        {
                            value: 130,
                            name: '乌利雅斯太油田'
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
                        }
                    ],
                    data_four_jishu: [
                        {
                            value: 28,
                            name: '科尔沁油田'
                        },
                        {
                            value: 26,
                            name: '交力格油田'
                        },
                        {
                            value: 17,
                            name: '广发油田'
                        }
                    ],
                    data_five_jishu: [
                        {
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
                        }
                    ],
                    data_six_jishu: [
                        {
                            value: 12,
                            name: '龙筒湾油田'
                        },
                        {
                            value: 12,
                            name: '科尔康油田'
                        }
                    ],
                    data_one_jingji: [
                        {
                            value: 9,
                            name: '吉祥油田'
                        },
                        {
                            value: 5,
                            name: '达耳其油田'
                        }
                    ],
                    data_two_jingji: [
                        {
                            value: 11,
                            name: '包尔油田'
                        },
                        {
                            value: 7,
                            name: '塞汗油田'
                        }
                    ],
                    data_three_jingji: [
                        {
                            value: 45,
                            name: '乌利雅斯太油田'
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
                        }
                    ],
                    data_four_jingji: [
                        {
                            value: 13,
                            name: '科尔沁油田'
                        },
                        {
                            value: 8,
                            name: '交力格油田'
                        },
                        {
                            value: 7,
                            name: '广发油田'
                        }
                    ],
                    data_five_jingji: [
                        {
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
                            value: 106,
                            name: '贝尔油田'
                        }
                    ],
                    data_six_jingji: [
                        {
                            value: 6,
                            name: '龙筒湾油田'
                        },
                        {
                            value: 3,
                            name: '科尔康油田'
                        }
                    ],
                    data_four: [{
                        value: 0.56,
                        name: '苏里格气区'
                    },
                        {
                            value: 0.03,
                            name: '包尔气区'
                        },
                        {
                            value: 0.03,
                            name: '二连气区'
                        },
                        {
                            value: 0.66,
                            name: '海拉尔气区'
                        }
                    ],
                    dataGas_one_jishu: [
                        {
                            value: 680,
                            name: '苏格里气田'
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

                    ],
                    dataGas_one_jingji: [
                        {
                            value: 1122,
                            name: '苏格里气田'
                        },
                        {
                            value: 673,
                            name: '大牛地'
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

                    ],
                    dataGas_two_jishu: [
                        {
                            value: 160,
                            name: '包尔气田'
                        }

                    ],
                    dataGas_two_jingji: [
                        {
                            value: 264,
                            name: '包尔气田'
                        }

                    ],
                    dataGas_three_jishu: [
                        {
                            value: 110,
                            name: '哈达图气田'
                        },
                        {
                            value: 90,
                            name: '宝力格气田'
                        }

                    ],
                    dataGas_three_jingji: [
                        {
                            value: 230,
                            name: '哈达图气田'
                        },
                        {
                            value: 100,
                            name: '宝力格气田'
                        }

                    ],
                    dataGas_four_jishu: [
                        {
                            value: 122,
                            name: '贝尔气田'
                        },
                        {
                            value: 118,
                            name: '苏仁诺尔气田'
                        }

                    ],
                    dataGas_four_jingji: [
                        {
                            value: 213,
                            name: '贝尔气田'
                        },
                        {
                            value: 183,
                            name: '苏仁诺尔气田'
                        }

                    ],
                },
                //第二个页面的柱状图数据
                bardata_one: [
                    [4, 4, 7, 17, 8, 21, 23, 13, 8, 12, 21, 18],
                    [-18, -16, -14, -2, 10, 21, 24, 20, 14, 20, 10, 12],
                    '万吨',
                    ['原油月产量', '同比变化'],
                ],
                bardata_two: [
                    [23, 21, 35, 17, 12, 21, 23, 13, 8, 12, 31, 22],
                    [-23, -17, -14, -8, 2, 10, 14, 20, 14, 8, 15, 24],
                    '亿立方米',
                    ['天然气月产量', '同比变化'],
                ],
                /* 第二个页面同比环比单位 */
                unit: '万吨',

                // 采储排名
                tableTh_name: '油田储采比排名',

                tableTh_one: ['序号', '油田', '盟区', '储采比（年）'],
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
                tableTh_two: ['序号', '气田', '盟区', '储采比（年）'],
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
                produce_pie_oil: [49.5, 40.5, 90, '万吨'],
                produce_pie_gas: [0.09, 0.06, 0.15, '亿立方米'],
                bacolor: 1,
                produce_pieTwo_oil: [149, 6916],
                produce_pieTwo_gas: [1149, 6516],

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
                    [4, 4, 7, 17, 8, 21, 23, 13, 8, 12, 21, 18],
                    [-18, -16, -14, -2, 10, 21, 24, 20, 14, 20, 10, 12],
                    '万吨',
                    ['煤制油产量', '同比变化'],
                ],
                bardata_five: [
                    [23, 21, 35, 17, 12, 21, 23, 13, 8, 12, 31, 22],
                    [-23, -17, -14, -8, 2, 10, 14, 20, 14, 8, 15, 24],
                    '亿立方米',
                    ['煤制气产量', '同比变化'],
                ],
                bardata_four: [
                    [4, 4, 7, 17, 8, 21, 23, 13, 8, 12, 21, 18],
                    [-18, -16, -14, -2, 10, 21, 24, 20, 14, 20, 10, 12],
                    '万吨',
                    ['成品油产量', '同比变化'],
                ],
                line_quar: [
                    ['1-3月', '4-6月', '7-9月', '10-12月'],
                    [12, 9, 12, 10],
                    [12, 7, 3, 6],
                    [10, 7, 7, 9],
                    ['汽油自给率', '柴油自给率', '煤油自给率']
                ],
                line_month: [
                    ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                    [12, 9, 12, 10, 2, 16, 10, 8, 9, 12, 8, 12],
                    [12, 7, 3, 6, 12, 5, 4, 10, 15, 11, 10, 11],
                    [10, 7, 7, 9, 11, 14, 10, 4, 12, 3, 4, 3],
                    ['汽油自给率', '柴油自给率', '煤油自给率']

                ],
                lineEle_quar: [
                    ['1-3月', '4-6月', '7-9月', '10-12月'],
                    [12, 9, 12, 10],
                    [12, 7, 3, 6],
                    [10, 7, 7, 9],
                    ['汽油', '柴油', '煤油']
                ],
                lineEle_month: [
                    ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                    [12, 9, 12, 10, 2, 16, 10, 8, 9, 12, 8, 12],
                    [12, 7, 3, 6, 12, 5, 4, 10, 15, 11, 10, 11],
                    [10, 7, 7, 9, 11, 14, 10, 4, 12, 3, 4, 3],
                    ['汽油', '柴油', '煤油']

                ],
                flag: null, //判断原油地图点击的是哪个区域
                flagGas: null //判断天然气地图点击的是哪个区域
            }
        },
        mounted() {
            this.drawLine('echartsOne', this.echarts.data_one, "万吨", "原油剩余技术储量",
                this.echarts.lengend_data_one, 1177, null);

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
            drawLine(id, arry, unit, name, lengedData, pie_number, flag) {
                var echarts = require('echarts');
                var myChart = echarts.init(document.getElementById(id));
                myChart.setOption({
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a} <br/>{b}: {c}' + unit + '({d}%)',
                        position: function (pos, params, dom, rect, size) {
                            // 鼠标在左侧时 tooltip 显示到右侧，鼠标在右侧时 tooltip 显示到左侧。
                            var obj = {top: 60};
                            obj[['left', 'right'][+(pos[0] < size.viewSize[0] / 2)]] = 5;
                            return obj;
                        }
                    },
                    legend: {
                        orient: 'horizontal',
                        bottom: 10,
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
                        radius: ["40%", "55%"],
                        center: ["50%", "40%"],
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
                this.pie_number = pie_number

                this.flag = flag
            },
            drawLine_Gas(id, arry, unit, name, lengedData, pie_number, flagGas) {
                var echarts = require('echarts');
                var myChart = echarts.init(document.getElementById(id));
                myChart.setOption({
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a} <br/>{b}: {c}' + unit + '({d}%)',
                        position: function (pos, params, dom, rect, size) {
                            // 鼠标在左侧时 tooltip 显示到右侧，鼠标在右侧时 tooltip 显示到左侧。
                            var obj = {top: 60};
                            obj[['left', 'right'][+(pos[0] < size.viewSize[0] / 2)]] = 5;
                            return obj;
                        }
                    },
                    legend: {
                        orient: 'horizontal',
                        bottom: 10,
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
                        radius: ["40%", "55%"],
                        center: ["50%", "40%"],
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
                this.pie_number_two = pie_number

                this.flagGas = flagGas
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
                        formatter: function (params) {
                            //获得当前每月原油产量
                            let tar = arry[0];
                            let sum = 0;
                            for (let i = 0; i < params[0].axisValue.substring(0, params[0].axisValue.length - 1); i++) {
                                sum = sum + tar[i]
                            }
                            return params[0].name + '</br>' + params[0].seriesName + ':' + params[0].value + arry[2] +
                                '</br>' +
                                params[1].seriesName + ':' +
                                params[1].value + '%' + '</br>' +
                                '累计产量' + ':' +
                                sum + arry[2]
                        }
                    },
                    legend: {
                        data: arry[3],
                        x: 'right',
                        right: '20%',
                        top: '5%'
                    },
                    /*grid: {
                        top: '25%',
                        left: '3%',
                        bottom: '3%',
                        containLabel: true
                    },*/
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
                                color: "#9B9DA1", // 颜色
                                width: 1, // 粗细
                            },
                        },
                        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
                    },
                    yAxis: [{
                        name: arry[2],
                        min: 0,
                        max: 25,
                        interval: 5,
                        type: 'value',
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
                            type: 'value',
                            show: false,
                            min: -30,
                            max: 40,
                            name: '同比变化',
                            axisLabel: {
                                formatter: '{value} %'
                            }
                        }
                    ],
                    series: [{
                        name: arry[3][0],
                        type: 'bar',
                        barWidth: 10,
                        data: arry[0],
                        itemStyle: {
                            normal: {
                                color: new this.$echarts.graphic.LinearGradient(
                                    0, 0, 0, 1,
                                    [
                                        {offset: 0, color: '#38F8FF'},                   //柱图渐变色
                                        {offset: 1, color: '#45BBFF'},                   //柱图渐变色
                                    ]
                                )
                            }
                        }
                    },
                        {
                            name: '同比变化',
                            type: 'line',
                            barWidth: 10,
                            itemStyle: {
                                color: '#FBAF5D'
                            },
                            data: arry[1],
                            yAxisIndex: 1
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

//最后页面俩个图
            drawPie_five(name, arry, unit) {
                let echarts = require("echarts");
                let myChart = echarts.init(document.getElementById(name));
                myChart.setOption({
                    tooltip: {
                        trigger: "axis",
                        formatter: '{a0}{b0}: {c0}' + unit + '</br>{a1}{b1}: {c1}' + unit + '</br>{a2}{b2}: {c2}' + unit
                    },
                    legend: {
                        orient: "horizontal",
                        x: 'right',
                        right: '20%',
                        top: '5%',
                        data: arry[4]
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: arry[0],
                        axisTick: {
                            show: true,
                        },
                        axisLine: {
                            lineStyle: {
                                color: "#9B9DA1", // 颜色
                                width: 1, // 粗细
                            },
                        },
                        axisLabel: {
                            show: true,
                            interval: 0,//设置间隔
                            fontSize: 12,
                            padding: [0, 0, 0, 0],
                        },
                    },
                    yAxis: [{
                        name: unit,
                        type: 'value',
                        min: '0',
                        axisTick: {
                            show: true,
                            interval: 1,
                        },
                        axisLine: {
                            lineStyle: {
                                color: "#9B9DA1", // 颜色
                                width: 1, // 粗细
                            },
                        },
                        axisLabel: {
                            show: true,
                            interval: 0,//设置间隔
                            fontSize: 12,
                            padding: [0, 0, 0, 0],
                        },
                    }
                    ],
                    series: [{
                        name: arry[4][0],
                        data: arry[1],
                        type: 'line',
                        symbol: 'none',
                        smooth: true,
                        areaStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient
                                (0, 0, 0, 1, [
                                    {
                                        offset: 0,
                                        color: 'rgba(241, 158, 194, 0.3)'
                                    },
                                    {
                                        offset: 0.8,
                                        color: 'rgba(241, 158, 194, 0)'
                                    }
                                ], false),
                                shadowColor: 'rgba(0, 0, 0, 0.1)',
                                shadowBlur: 10
                            }
                        },
                        //控制线条的颜色
                        itemStyle: {
                            normal: {
                                color: '#BB5FF0',
                                borderColor: '#BB5FF0',
                                borderWidth: 3
                            }
                        },
                    },
                        {
                            name: arry[4][1],
                            data: arry[2],
                            type: 'line',
                            symbol: 'none',
                            smooth: true,
                            //控制线条的颜色
                            itemStyle: {
                                normal: {
                                    color: '#F0765F',
                                    borderColor: '#F0765F',
                                    borderWidth: 3
                                }
                            },
                        },
                        {
                            name: arry[4][2],
                            data: arry[3],
                            type: 'line',
                            symbol: 'none',
                            smooth: true,
                            areaStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient
                                    (0, 0, 0, 1, [
                                        {
                                            offset: 0,
                                            color: 'rgba(241, 158, 194, 0.3)'
                                        },
                                        {
                                            offset: 0.8,
                                            color: 'rgba(241, 158, 194, 0)'
                                        }
                                    ], false),
                                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                                    shadowBlur: 10
                                }
                            },
                            //控制线条的颜色
                            itemStyle: {
                                normal: {
                                    color: 'rgb(241,158,194)',
                                    borderColor: 'rgba(241,158,194,0.2)',
                                    borderWidth: 3
                                }
                            },
                        }
                    ]
                });
            },

            drawPie_four(name, arry) {
                let echarts = require('echarts');
                let myChart = echarts.init(document.getElementById(name));
                let option = {
                    tooltip: {
                        trigger: "item",
                        formatter: "{b}: {c}万吨 ({d}%)",
                    },
                    legend: {
                        orient: "vertical",
                        bottom: 30,
                        right: 10,
                        itemGap: 10,
                        itemWidth: 15,
                        itemHeight: 10,
                        data: ["柴油", "煤油", "汽油"],
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
                            data: [
                                {
                                    value: 112,
                                    name: "柴油",
                                },
                                {
                                    value: 56,
                                    name: "煤油",
                                },
                                {
                                    value: 112,
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
                    this.pie_number = 1177
                    this.$nextTick(function () {
                        this.drawLine('echartsOne', this.echarts.data_one, "万吨", "原油剩余技术储量",
                            this.echarts.lengend_data_one, 1177, null);
                        this.drawLine_Gas('echartsTwo', this.echarts.data_two, "亿立方米", "天然气剩余技术储量",
                            this.echarts.lengend_data_three, 0.78, null);
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
                    this.pie_number_two = 0.78
                    this.pie_one_number = this.produce_pie_oil[2]
                    this.pie_one_unit = this.produce_pie_oil[3]
                    this.bacolor = 1
                    this.$nextTick(function () {
                        this.drawLine_one('echartsThree', this.bardata_one)
                        this.drawPie('echartsFour', this.produce_pie_oil, "万吨", "本年度原油生产自给率")
                        // this.drawBarOne()
                        this.drawPie_one('echartsFive', this.produce_pieTwo_oil, "万吨", "本年度原油生产企业分布")
                    })
                }
            },

            /* 第一个页面的点击按钮 */
            //内容里的第一个按钮
            tabButton_one(id) {

                this.selected_one = id
                if (this.i == 0 && id == 1) {
                    switch (this.flag) {
                        case '1':
                            this.drawLine('echartsOne', this.echarts.data_one_jingji, "万吨", "原油剩余经济储量",
                                this.echarts.lengend_data_jishu_one, '14', '1');
                            break;
                        case '2':
                            this.drawLine('echartsOne', this.echarts.data_two_jingji, "万吨", "原油剩余经济储量",
                                this.echarts.lengend_data_jishu_two, '18', '2');
                            break;
                        case '3':
                            this.drawLine('echartsOne', this.echarts.data_three_jingji, "万吨", "原油剩余经济储量",
                                this.echarts.lengend_data_jishu_three, '180', '3');
                            break;
                        case '4':
                            this.drawLine('echartsOne', this.echarts.data_four_jingji, "万吨", "原油剩余经济储量",
                                this.echarts.lengend_data_jishu_four, '28', '4');
                            break;
                        case '5':
                            this.drawLine('echartsOne', this.echarts.data_five_jingji, "万吨", "原油剩余经济储量",
                                this.echarts.lengend_data_jishu_five, '278', '5');
                            break;
                        case '6':
                            this.drawLine('echartsOne', this.echarts.data_six_jingji, "万吨", "原油剩余经济储量",
                                this.echarts.lengend_data_jishu_six, '9', '6');
                            break;
                        default :
                            this.drawLine('echartsOne', this.echarts.data_jingji, "万吨", "原油剩余经济储量",
                                this.echarts.lengend_data_one, 456, null);
                            break;
                    }
                    this.i = 1
                }
                if (this.i == 1 && id == 0) {
                    switch (this.flag) {
                        case '1':
                            this.drawLine('echartsOne', this.echarts.data_one_jishu, "万吨", "原油剩余技术储量",
                                this.echarts.lengend_data_jishu_one, '35', '1');
                            break;
                        case '2':
                            this.drawLine('echartsOne', this.echarts.data_two_jishu, "万吨", "原油剩余技术储量",
                                this.echarts.lengend_data_jishu_two, '47', '2');
                            break;
                        case '3':
                            this.drawLine('echartsOne', this.echarts.data_three_jishu, "万吨", "原油剩余技术储量",
                                this.echarts.lengend_data_jishu_three, '480', '3');
                            break;
                        case '4':
                            this.drawLine('echartsOne', this.echarts.data_four_jishu, "万吨", "原油剩余技术储量",
                                this.echarts.lengend_data_jishu_four, '71', '4');
                            break;
                        case '5':
                            this.drawLine('echartsOne', this.echarts.data_five_jishu, "万吨", "原油剩余技术储量",
                                this.echarts.lengend_data_jishu_five, '636', '5');
                            break;
                        case '6':
                            this.drawLine('echartsOne', this.echarts.data_six_jishu, "万吨", "原油剩余技术储量",
                                this.echarts.lengend_data_jishu_six, '24', '6');
                            break;
                        default :
                            this.drawLine('echartsOne', this.echarts.data_one, "万吨", "原油剩余技术储量",
                                this.echarts.lengend_data_one, 1177, null);
                            break;
                    }
                    this.i = 0
                }
            },
            //内容里的第二个按钮
            tabButton_two(id) {

                this.selected_two = id
                if (this.j == 0 && id == 1) {
                    switch (this.flagGas) {
                        case '1':
                            this.drawLine_Gas('echartsTwo', this.echarts.dataGas_one_jingji, '万立方米', '天然气剩余经济储量', this.echarts.lengendGas_data_one, '0.56', '1')
                            break;
                        case '2':
                            this.drawLine_Gas('echartsTwo', this.echarts.dataGas_two_jingji, '万立方米',
                                '天然气剩余经济储量', this.echarts.lengendGas_data_two, '0.03', '2');
                            break;
                        case '3':
                            this.drawLine_Gas('echartsTwo', this.echarts.dataGas_three_jingji, '万立方米',
                                '天然气剩余经济储量', this.echarts.lengendGas_data_three, '0.03', '3');
                            break;
                        case '4':
                            this.drawLine_Gas('echartsTwo', this.echarts.dataGas_four_jingji, '万立方米',
                                '天然气剩余经济储量', this.echarts.lengendGas_data_four, '0.03', '4');
                            break;
                        default :
                            this.drawLine_Gas('echartsTwo', this.echarts.data_two, "亿立方米", "天然气剩余经济储量",
                                this.echarts.lengend_data_three, '1.3', null);
                            break;
                    }
                    this.j = 1
                }
                if (this.j == 1 && id == 0) {
                    switch (this.flagGas) {
                        case '1':
                            this.drawLine_Gas('echartsTwo', this.echarts.dataGas_one_jishu, '万立方米',
                                '天然气剩余经济储量', this.echarts.lengendGas_data_one, '0.34', '1');
                            break;
                        case '2':
                            this.drawLine_Gas('echartsTwo', this.echarts.dataGas_two_jishu, '万立方米',
                                '天然气剩余经济储量', this.echarts.lengendGas_data_two, '0.02', '2');
                            break;
                        case '3':
                            this.drawLine_Gas('echartsTwo', this.echarts.dataGas_three_jishu, '万立方米',
                                '天然气剩余经济储量', this.echarts.lengendGas_data_three, '0.02', '3');
                            break;
                        case '4':
                            this.drawLine_Gas('echartsTwo', this.echarts.dataGas_four_jishu, '万立方米',
                                '天然气剩余经济储量', this.echarts.lengendGas_data_four, '0.02', '4');
                            break;
                        default :
                            this.drawLine_Gas('echartsTwo', this.echarts.data_two, "亿立方米", "天然气剩余技术储量",
                                this.echarts.lengend_data_three, 0.78, null);
                            break;
                    }
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
                    this.pie_number_two = 0.78
                    this.pie_one_number = this.produce_pie_oil[2]
                    this.pie_one_unit = this.produce_pie_oil[3]
                    this.bacolor = 1
                    this.$nextTick(function () {
                        this.drawLine_one('echartsThree', this.bardata_one)
                        this.drawPie('echartsFour', this.produce_pie_oil, "万吨", "本年度原油生产自给率")
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
                        this.drawLine_one('echartsSix', this.bardata_four)
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
                    this.value1 = 0
                    this.drawPie('echartsFour', this.produce_pie_gas, "亿立方米", "本年度天然气生产自给率");
                    this.pie_one_number = this.produce_pie_gas[2]
                    this.pie_one_unit = this.produce_pie_gas[3]
                    this.p_j = 1
                }
                if (this.p_j == 1 && id == 0) {
                    this.value1 = 0
                    this.drawPie('echartsFour', this.produce_pie_oil, "万吨", "本年度原油生产自给率");
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
                    this.drawPie_one('echartsFive', this.produce_pieTwo_gas, "万立方米", "本年度天然气生产企业分布")
                }
                if (this.p_g == 1 && id == 0) {
                    this.p_g = 0
                    this.bacolor = 1
                    this.drawPie_one('echartsFive', this.produce_pieTwo_oil, "万吨", "本年度原油生产企业分布")
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
                    this.selStrc = 0
                    this.k1 = 1;
                    this.$nextTick(function () {
                        this.drawPie_four('echartsEight');
                    });
                }
                ;
                if (1 == id) {
                    this.k1 = 0;
                    this.time = 0
                    this.$nextTick(function () {
                        this.drawPie_year('echartsNine');
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
            },
            //原油生产自给率柱状图
            drawBarOne(arry) {
                let echarts = require('echarts');
                let myChart = echarts.init(document.getElementById('echartsBar'));
                myChart.setOption({
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: { // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                        },
                        formatter: function (params) {
                            return params[0].name + '</br>' + '总产量' + ':' + arry[0][arry[3].indexOf(params[0].name)] + arry[4] + '</br>' + '区内供应' + ':' +
                                arry[1][arry[3].indexOf(params[0].name)] + arry[4] +
                                '</br>' + '自给率' + ':' + params[0].value + '%'

                        }
                    },
                    legend: {
                        data: ['自给率'],
                        x: 'right',
                        right: '20%',
                        top: '5%'
                    },
                    /* grid: {
                         top: '25%',
                         left: '3%',
                         right: '5%',
                         bottom: '3%',
                         containLabel: true
                     },*/
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
                                color: "#9B9DA1", // 颜色
                                width: 1, // 粗细
                            },
                        },
                        data: arry[3]
                    },
                    yAxis: [{
                        name: '%',
                        min: 0,
                        max: 25,
                        interval: 5,
                        type: 'value',
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
                    series: [{
                        name: '自给率',
                        type: 'bar',
                        barWidth: 10,
                        data: arry[2],
                        itemStyle: {
                            normal: {
                                color: new this.$echarts.graphic.LinearGradient(
                                    0, 0, 0, 1,
                                    [
                                        {offset: 0, color: '#38F8FF'},                   //柱图渐变色
                                        {offset: 1, color: '#45BBFF'},                   //柱图渐变色
                                    ]
                                )
                            }
                        }
                    }
                    ]
                });
            },
            //本年度原油生产自给率下拉切换
            changeChart() {
                if (this.value1 === 0) {
                    if (this.selected_five === 0) {
                        this.drawPie('echartsFour', this.produce_pie_oil, "万吨", "本年度原油生产自给率");
                        this.pie_one_number = this.produce_pie_oil[2]
                        this.pie_one_unit = this.produce_pie_oil[3]
                    } else {
                        this.drawPie_one('echartsFive', this.produce_pieTwo_oil, "个", "本年度原油生产企业分布")
                        this.pie_one_number = this.produce_pie_gas[2]
                        this.pie_one_unit = this.produce_pie_gas[3]
                    }

                } else {
                    this.$nextTick(function () {
                        if (this.value1 === 1) {
                            if (this.selected_five === 0) {
                                this.drawBarOne(this.barOneQuarter)
                            } else {
                                this.drawBarOne(this.barOneQuarterGas)
                            }

                        } else {
                            if (this.selected_five === 0) {
                                this.drawBarOne(this.barOneMonth)
                            } else {
                                this.drawBarOne(this.barOneMonthGas)
                            }
                        }

                    });
                }
            },
            //成品油自给率下拉切换
            selChart() {
                if (this.time === 0) {
                    this.drawPie_year('echartsNine');
                } else {
                    this.$nextTick(function () {
                        if (this.time === 1) {
                            this.drawPie_five('echartsTen', this.line_quar, '%')

                        } else {
                            this.drawPie_five('echartsTen', this.line_month, '%')
                        }

                    });
                }
            },
            selStrcHandel() {
                if (this.selStrc === 0) {
                    this.drawPie_four('echartsNine');
                } else {
                    this.$nextTick(function () {
                        if (this.selStrc === 1) {
                            this.drawPie_five('echartsEle', this.lineEle_quar, '万吨')

                        } else {
                            this.drawPie_five('echartsEle', this.lineEle_month, '万吨')
                        }

                    });
                }
            },
            drawPie_year(name, arry) {
                let echarts = require('echarts');
                let myChart = echarts.init(document.getElementById(name));
                let option = {
                    tooltip: {
                        trigger: "item",
                        formatter: "{b}: {c}万吨 ({d}%)",
                    },
                    legend: {
                        orient: "vertical",
                        bottom: 30,
                        right: 10,
                        itemGap: 10,
                        itemWidth: 15,
                        itemHeight: 10,
                        data: ["柴油", "煤油", "汽油"],
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
                            data: [
                                {
                                    value: 72,
                                    name: "柴油",
                                },
                                {
                                    value: 36,
                                    name: "煤油",
                                },
                                {
                                    value: 72,
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
            // 原油按钮
            btnOil() {
                this.selected_one = 0;
                this.oilShow = true;
                this.showAllGas = true;
                this.i = 0;
                this.$nextTick(function () {
                    this.drawLine('echartsOne', this.echarts.data_one, "万吨", "原油剩余技术储量",
                        this.echarts.lengend_data_one, 1177, null);
                })
            },
            // 天然气按钮切换
            btnGas() {
                this.selected_two = 0;
                this.oilShow = false;
                this.showAll = true;
                this.j = 0;
                this.$nextTick(function () {
                    this.drawLine_Gas('echartsTwo', this.echarts.data_two, "亿立方米", "天然气剩余技术储量",
                        this.echarts.lengend_data_three, 0.78, null);
                })

            },
            //原油地图点击
            oilHandel(data_one_jishu, lengend_data_jishu_one, jishuNum, data_jingji_one, jingliNum, flag) {
                if (this.flag == flag) {
                    this.showAll = true
                    this.flag = null
                } else {
                    this.showAll = false
                }
                if (this.selected_one == 0) {
                    if (this.showAll) {
                        this.drawLine('echartsOne', this.echarts.data_one, "万吨", "原油剩余技术储量",
                            this.echarts.lengend_data_one, 1177, null);
                    } else {
                        this.drawLine('echartsOne', data_one_jishu, '万吨',
                            '原油剩余技术储量', lengend_data_jishu_one, jishuNum, flag)
                    }

                } else {
                    if (this.showAll) {
                        this.drawLine('echartsOne', this.echarts.data_jingji, "万吨", "原油剩余经济储量",
                            this.echarts.lengend_data_one, 456, null);
                    } else {
                        this.drawLine('echartsOne',
                            data_jingji_one, '万吨',
                            '原油剩余经济储量', lengend_data_jishu_one, jingliNum, flag)
                    }

                }


            },
            //天然气地图点击
            gasHandel(data_one_jishu, lengend_data_jishu_one, jishuNum, data_jingji_one, jingliNum, flagGas) {
                if (this.flagGas == flagGas) {
                    this.showAllGas = true
                    this.flagGas=null
                } else {
                    this.showAllGas = false
                }
                if (this.selected_two == 0) {
                    if(this.showAllGas){
                        this.$nextTick(function () {
                        this.drawLine_Gas('echartsTwo', this.echarts.data_two, "亿立方米", "天然气剩余技术储量",
                            this.echarts.lengend_data_three, 0.78, null);
                        })
                    }else{
                        this.$nextTick(function () {
                        this.drawLine_Gas('echartsTwo', data_one_jishu, '万立方米',
                            '天然气剩余技术储量', lengend_data_jishu_one, jishuNum, flagGas)
                        })
                    }

                } else {
                    if(this.showAllGas){
                        this.$nextTick(function () {
                        this.drawLine_Gas('echartsTwo', this.echarts.data_two, "亿立方米", "天然气剩余经济储量",
                            this.echarts.lengend_data_three, '1.3', null);
                        })
                    }else{
                        this.$nextTick(function () {
                        this.drawLine_Gas('echartsTwo',
                            data_jingji_one, '万立方米',
                            '天然气剩余经济储量', lengend_data_jishu_one, jingliNum, flagGas)
                        })
                    }

                }


            }


        }
    }
</script>

<style scoped lang="scss">


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
        width: 200px;
        background-color: rgba(37, 54, 104, 0.6);
        /*left: 190px;
        top: 60px;*/
        position: absolute;
        padding-top: 8px;
    }

    .produce_tc ul li {
        font-size: 10px;
        color: #C9D6FD;
        padding: 0 6px;
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
        width: 100%;
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
        position: absolute;
    }

    .clickbtn1 {
        width: 15px;
        height: 15px;
        position: absolute;
    }

    .clickbtn2 {
        width: 30px;
        height: 30px;
        position: absolute;
    }

    .click-change {
        width: 90px;
        height: 18px;
        position: absolute;
    }

    .lay-content {
        border: 1px solid rgba(106, 113, 129, 0.5);
        position: absolute;
        font-size: 12px;
        border-radius: 5px;
        background-color: rgba(106, 113, 129, 0.5);
        color: #fff;
        width: 113px;
    }

    .lay-content-pro {
        border: 1px solid rgba(106, 113, 129, 0.5);
        position: absolute;
        font-size: 12px;
        border-radius: 5px;
        background-color: rgba(106, 113, 129, 0.5);
        color: #fff;
        width: 110px;
    }

    .lay-content-gas {
        border: 1px solid rgba(106, 113, 129, 0.5);
        position: absolute;
        font-size: 12px;
        border-radius: 5px;
        background-color: rgba(106, 113, 129, 0.5);
        color: #fff;
        width: 135px;
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
        top: 69px;
        left: 35px;
        box-shadow: 0 1px 6px rgba(0, 0, 0, .117647), 0 1px 4px rgba(0, 0, 0, .117647);;
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

    .chuqing_chart {
        width: 100%;
        height: 290px;
        background-color: white;
        padding: 10px 0;
        position: relative;
    }

    .chuqing_chart .fontSize, .chart_t .fontSize {
        position: relative;
        top: 90px;
        font: 23px bolder microsoft-yahei;
    }

    .pie_chart .fontSizeOne {
        position: relative;
        top: 120px;
        font: 15px bolder microsoft-yahei;
    }

    .pie_chart .fontSize {
        position: relative;
        top: 120px;
        font: 23px bolder microsoft-yahei;
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
        height: 242px;
        margin: 20px auto;
        background-image: url(../../assets/img/industryAnalysis/椭圆.png);
        background-repeat: no-repeat;
        background-position: 50% 37%;
        background-size: 65px 65px;

    }

    .echartsOne {
        width: 100%;
        height: 242px;
        margin: 20px auto;
        background-image: url(../../assets/img/industryAnalysis/椭圆.png);
        background-repeat: no-repeat;
        background-position: 50% 50%;
        background-size: 65px 65px;
    }

    .echartsTwo {
        width: 100%;
        height: 242px;
        margin: 20px auto;
        background-image: url(../../assets/img/industryAnalysis/椭圆.png);
        background-repeat: no-repeat;
        background-position: 50% 50%;
        background-size: 65px 65px;
    }

    /* 第二个页面的图表样式 */
    .echarts_one {
        width: 100%;
        height: 242px;
        margin: 20px auto;

    }

    .echart_bg {
        background-image: url(../../assets/img/industryAnalysis/椭圆.png);
        background-repeat: no-repeat;
        background-position: 50% 38%;
        background-size: 65px 65px;
    }

    .echart_bgnew {
        background-image: url(../../assets/img/industryAnalysis/椭圆.png);
        background-repeat: no-repeat;
        background-position: 50% 50%;
        background-size: 65px 65px;
    }

    /* 给第一个柱图一个样式方便设置同比环比块的样式 */
    .echarts_two {
        width: 100%;
        height: 242px;
        margin: 0px auto;
    }

    .echarts_new {
        height: 300px;
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
        top: 94px;
        font: 23px bolder microsoft-yahei;
    }

    .fontSizeOne {
        position: relative;
        top: 96px;
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
        line-height: 25px !important;
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

    .fontDiv {
        position: absolute;
        width: 100%;
        text-align: center;
        top: 210px;
        .font_num {
            font: 23px bolder microsoft-yahei;
        }

        .font_unit {
            font: 15px bolder microsoft-yahei;
        }
    }

    .fontDiv2 {
        position: absolute;
        width: 100%;
        text-align: center;
        top: 172px;
        .font_num {
            font: 23px bolder microsoft-yahei;
        }

        .font_unit {
            font: 15px bolder microsoft-yahei;
        }
    }


</style>
<style lang="scss">
    .chart {
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
