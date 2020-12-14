<template>
    <div class="child1" style="background-color: #E6E8EC;">
        <img
                class="map"
                src="../../assets/img/地图.png"
        />
        <!--地图定位-->
        <div>
            <img :src="item.src" alt="" class="clickbtn" v-for="(item,index) in posList"
                 :style="{'left':be_click_left(item.left),'top':be_click_top(item.top)}"
                 @click="showDes(index)">
        </div>
        <!--地图上展示信息-->
        <div class="lay-content"
             v-for="(item,index) in desList"
             :ref="`list${index}`"
             v-show="index==desIndex&&showFlag"
             :style="{'left':be_click_left(item.left),'top':be_click_top(item.top)}">
            <div>{{item.name}}总库存：{{item.num1}}万吨</div>
            <div>上月汽油库存：{{item.num2}}万吨</div>
            <div>上月柴油库存：{{item.total}}万吨</div>
            <div>上月航煤库存：{{item.cpy}}万吨</div>
            <div>上月原油库存：{{item.city}}万吨</div>
        </div>

        <div style="background-color: #fff;padding-top: 18px;margin-top: 6px;">
            <div class="scFristqh">
                <el-tabs v-model="activeNamePie" @tab-click="handlePieClick">
                    <el-tab-pane :label="tabList_one[0]" name="1"></el-tab-pane>
                    <el-tab-pane :label="tabList_one[1]" name="2" :laze="true"></el-tab-pane>
                </el-tabs>
            </div>
            <div class="tabs-content">

                <div v-show="activeNamePie==='1'">

                    <div id="echartsOne" style="width:100%;height:240px;"></div>
                </div>
                <div v-show="activeNamePie==='2'">

                    <div id="echartsTwo" style="width:100%;height:240px;" ref="second"></div>

                </div>
            </div>
        </div>
        <div style="background-color: #fff;padding-top: 18px;margin-top: 6px;">
            <div class="scFristqh">
                <el-tabs v-model="activeNamePie1" @tab-click="handleClick">
                    <el-tab-pane :label="tabList_two[0]" name="1"></el-tab-pane>
                    <el-tab-pane :label="tabList_two[1]" name="2" :laze="true"></el-tab-pane>
                </el-tabs>
            </div>
            <div class="tabs-content">

                <div v-show="activeNamePie1==='1'">
                    <div id="echartsThree" style="width:100%;height:240px;"></div>
                </div>
                <div v-show="activeNamePie1==='2'">
                    <div id="echartsFour" style="width:100%;height:240px;" ref="second"></div>

                </div>
            </div>
        </div>
        <div style="background-color: #fff;padding-top: 18px">
            <div class="scFristqh">
                <el-tabs v-model="activeName" @tab-click="handleClickThree">
                    <el-tab-pane :label="tabList_three[0]" name="1"></el-tab-pane>
                    <el-tab-pane :label="tabList_three[1]" name="2" :laze="true"></el-tab-pane>
                </el-tabs>
            </div>
            <div class="tabs-content">
                <div v-show="activeName==='1'">
                    <div class="fontSize_div">
                        <div class="fontSize">{{pie_one}}</div>
                        <div class="fontSize" style="font-size: 14px">万吨</div>
                    </div>
                    <div id="echartsFive" style="width:100%;height:240px;"></div>
                </div>
                <div v-show="activeName==='2'">
                    <div class="fontSize_div">
                        <div class="fontSize">{{pie_two}}</div>
                        <div class="fontSize" style="font-size: 14px">万吨</div>
                    </div>
                    <div id="echartsSix" style="width:100%;height:240px;" ref="second"></div>
                </div>

            </div>
        </div>
        <div style="background-color: #fff;padding-top: 18px">
            <div class="scFristqh">
                <el-tabs v-model="activeName4" @tab-click="handleClickFour">
                    <el-tab-pane :label="tabList_four[0]" name="1"></el-tab-pane>
                    <el-tab-pane :label="tabList_four[1]" name="2" :laze="true"></el-tab-pane>
                </el-tabs>
            </div>
            <div class="tabs-content">
                <div v-show="activeName4==='1'">
                    <div class="fontSize_div">
                        <div class="fontSize">{{pie_three}}</div>
                        <div class="fontSize" style="font-size: 14px">万吨</div>
                    </div>
                    <div id="echartsSeven" style="width:100%;height:240px;"></div>
                </div>
                <div v-show="activeName4==='2'">
                    <div class="fontSize_div">
                        <div class="fontSize">{{pie_four}}</div>
                        <div class="fontSize" style="font-size: 14px">万吨</div>
                    </div>
                    <div id="echartsEight" style="width:100%;height:240px;" ref="second"></div>
                </div>

            </div>
        </div>
    </div>
</template>
<script>

    export default {
        name: 'child1',
        data() {
            return {
                cityAry:['阿拉善盟','乌海','巴彦淖尔','鄂尔多斯','包头','呼和浩特','乌兰察布','锡林郭勒盟','赤峰','呼伦贝尔','兴安盟','通辽'],
                posList: [
                    //阿拉善盟
                    {
                        left: '0.184',
                        top: '0.95',
                        src:require('../../assets/img/chuqiguan.png')
                    },
                    //乌海
                    {
                        left: '0.308',
                        top: '1.02',
                        src:require('../../assets/img/chuqiguan.png')
                    },
                    //巴彦淖尔储气
                    {
                        left: '0.348',
                        top: '0.947',
                        src:require('../../assets/img/chuqiguan.png')
                    },
                    //鄂尔多斯
                    {
                        left: '0.388',
                        top: '1.02',
                        src:require('../../assets/img/chuqiguan.png')
                    },
                    //包头
                    {
                        left: '0.438',
                        top: '0.924',
                        src:require('../../assets/img/chuqiguan.png')
                    },
                    //呼和浩特
                    {
                        left: '0.478',
                        top: '0.984',
                        src:require('../../assets/img/chuqiguan.png')
                    },
                    //乌兰察布
                    {
                        left: '0.498',
                        top: '0.924',
                        src:require('../../assets/img/chuqiguan.png')
                    },
                    //锡林郭勒盟
                    {
                        left: '0.586',
                        top: '0.814',
                        src:require('../../assets/img/chuqiguan.png')
                    },
                    //赤峰
                    {
                        left: '0.686',
                        top: '0.864',
                        src:require('../../assets/img/chuqiguan.png')
                    },
                    //呼伦贝尔
                    {
                        left: '0.786',
                        top: '0.564',
                        src:require('../../assets/img/chuqiguan.png')
                    },
                    //兴安盟
                    {
                        left: '0.786',
                        top: '0.664',
                        src:require('../../assets/img/chuqiguan.png')
                    },
                    //通辽
                    {
                        left: '0.786',
                        top: '0.864',
                        src:require('../../assets/img/chuqiguan.png')
                    }
                ],//地图弹窗位置
                desList: [
                    {
                        name:'阿拉善盟',
                        num1: '37',
                        num2: '4',
                        total: '15',
                        cpy: '2',
                        city: '16',
                        left: '0.144',
                        top: '0.615'
                    },
                    {
                        name:'乌海',
                        num1: '37',
                        num2: '4',
                        total: '15',
                        cpy: '2',
                        city: '16',
                        left: '0.144',
                        top: '0.615'
                    },
                    {
                        name:'巴彦淖尔',
                        num1: '37',
                        num2: '4',
                        total: '15',
                        cpy: '2',
                        city: '16',
                        left: '0.144',
                        top: '0.615'
                    },
                    {
                        name:'鄂尔多斯',
                        num1: '37',
                        num2: '4',
                        total: '15',
                        cpy: '2',
                        city: '16',
                        left: '0.144',
                        top: '0.615'
                    },
                    {
                        name:'包头',
                        num1: '37',
                        num2: '4',
                        total: '15',
                        cpy: '2',
                        city: '16',
                        left: '0.144',
                        top: '0.615'
                    },
                    {
                        name:'呼和浩特',
                        num1: '37',
                        num2: '4',
                        total: '15',
                        cpy: '2',
                        city: '16',
                        left: '0.144',
                        top: '0.615'
                    },
                    {
                        name:'乌兰察布',
                        num1: '37',
                        num2: '4',
                        total: '15',
                        cpy: '2',
                        city: '16',
                        left: '0.144',
                        top: '0.615'
                    },
                    {
                        name:'锡林郭勒盟',
                        num1: '37',
                        num2: '4',
                        total: '15',
                        cpy: '2',
                        city: '16',
                        left: '0.344',
                        top: '0.475'
                    },
                    {
                        name:'赤峰',
                        num1: '37',
                        num2: '4',
                        total: '15',
                        cpy: '2',
                        city: '16',
                        left: '0.344',
                        top: '0.475'
                    },
                    {
                        name:'呼伦贝尔',
                        num1: '37',
                        num2: '4',
                        total: '15',
                        cpy: '2',
                        city: '16',
                        left: '0.344',
                        top: '0.475'
                    },
                    {
                        name:'兴安盟',
                        num1: '37',
                        num2: '4',
                        total: '15',
                        cpy: '2',
                        city: '16',
                        left: '0.344',
                        top: '0.475'
                    },
                    {
                        name:'通辽',
                        num1: '37',
                        num2: '4',
                        total: '15',
                        cpy: '2',
                        city: '16',
                        left: '0.344',
                        top: '0.475'
                    }
                ],//弹窗内容
                tabList_one:['汽油库存量变化趋势','柴油库存量变化趋势'],
                tabList_one_copy:['汽油库存量变化趋势','柴油库存量变化趋势'],
                tabList_two:['航煤库存量变化趋势','原油库存量变化趋势'],
                tabList_two_copy:['航煤库存量变化趋势','原油库存量变化趋势'],
                tabList_three:['汽油库存企业结构','柴油库存企业结构'],
                tabList_three_copy:['汽油库存企业结构','柴油库存企业结构'],
                tabList_four:['航煤库存企业结构','原油库存企业结构'],
                tabList_four_copy:['航煤库存企业结构','原油库存企业结构'],
                activeName: '1',
                activeNamePie: '1',
                activeNamePie1: '1',
                activeName4: '1',
                screenWidth: document.body.clientWidth, // 屏幕宽
                screenLeft: "",
                pie_num: [1.3, 0.56, 0.03, 0.03, 0.03],
                pie: 1.3,
                showAll: false,
                desIndex: null,
                pie_PieTwo: 196,
                pieTwo: [196, 176.4, 3.92, 5.88, 9.8],
                oneseries: [
                    [
                        {
                            one: [13, 16, 7, 23, 21, 24, 23, 13, 8],
                            two: [12, 14, 16, 21, 20.5, 22, 24, 20, 17.5],
                        }
                    ],
                    [
                        {
                            one: [8, 16, 7, 11, 21, 24, 23, 25, 8],
                            two: [12, 13, 15, 19, 21.5, 22, 26, 20, 17.5],
                        }
                    ],
                    [
                        {
                            one: [16, 12, 18, 25, 21, 24, 23, 25, 19],
                            two: [12, 18, 19, 20, 21.5, 22, 24, 20, 17.5],
                        }
                    ],
                    [
                        {
                            one: [13, 16, 7, 23, 21, 24, 23, 13, 8],
                            two: [12, 14, 16, 21, 20.5, 22, 24, 20, 17.5],
                        }
                    ],
                    [
                        {
                            one: [8, 16, 7, 11, 21, 24, 23, 25, 8],
                            two: [12, 13, 15, 19, 21.5, 22, 26, 20, 17.5],
                        }
                    ],
                    [
                        {
                            one: [16, 12, 18, 25, 21, 24, 23, 25, 19],
                            two: [12, 18, 19, 20, 21.5, 22, 24, 20, 17.5],
                        }
                    ],
                    [
                        {
                            one: [13, 16, 7, 23, 21, 24, 23, 13, 8],
                            two: [12, 14, 16, 21, 20.5, 22, 24, 20, 17.5],
                        }
                    ],
                    [
                        {
                            one: [8, 16, 7, 11, 21, 24, 23, 25, 8],
                            two: [12, 13, 15, 19, 21.5, 22, 26, 20, 17.5],
                        }
                    ],
                    [
                        {
                            one: [16, 12, 18, 25, 21, 24, 23, 25, 19],
                            two: [12, 18, 19, 20, 21.5, 22, 24, 20, 17.5],
                        }
                    ],
                    [
                        {
                            one: [13, 16, 7, 23, 21, 24, 23, 13, 8],
                            two: [12, 14, 16, 21, 20.5, 22, 24, 20, 17.5],
                        }
                    ],
                    [
                        {
                            one: [8, 16, 7, 11, 21, 24, 23, 25, 8],
                            two: [12, 13, 15, 19, 21.5, 22, 26, 20, 17.5],
                        }
                    ],
                    [
                        {
                            one: [16, 12, 18, 25, 21, 24, 23, 25, 19],
                            two: [12, 18, 19, 20, 21.5, 22, 24, 20, 17.5],
                        }
                    ],
                    [
                        {
                            one: [13, 16, 7, 23, 21, 24, 23, 13, 8],
                            two: [12, 14, 16, 21, 20.5, 22, 24, 20, 17.5],
                        }
                    ]
                ],
                twoseries: [
                    [
                        {
                            one: [16, 12, 18, 25, 21, 24, 23, 25, 19],
                            two: [12, 13, 15, 19, 21.5, 22, 26, 20, 17.5],
                        }
                    ],
                    [
                        {
                            one: [8, 16, 7, 11, 21, 24, 23, 25, 8],
                            two: [11, 13, 13, 20, 20.5, 21, 25, 20, 17.5],
                        }
                    ],
                    [
                        {
                            one: [13, 16, 7, 23, 21, 24, 23, 13, 8],
                            two: [13, 14, 17, 20, 19.5, 22, 26, 20, 17.5],
                        }
                    ],
                    [
                        {
                            one: [16, 12, 18, 25, 21, 24, 23, 25, 19],
                            two: [12, 13, 15, 19, 21.5, 22, 26, 20, 17.5],
                        }
                    ],
                    [
                        {
                            one: [8, 16, 7, 11, 21, 24, 23, 25, 8],
                            two: [11, 13, 13, 20, 20.5, 21, 25, 20, 17.5],
                        }
                    ],
                    [
                        {
                            one: [13, 16, 7, 23, 21, 24, 23, 13, 8],
                            two: [13, 14, 17, 20, 19.5, 22, 26, 20, 17.5],
                        }
                    ],
                    [
                        {
                            one: [16, 12, 18, 25, 21, 24, 23, 25, 19],
                            two: [12, 13, 15, 19, 21.5, 22, 26, 20, 17.5],
                        }
                    ],
                    [
                        {
                            one: [8, 16, 7, 11, 21, 24, 23, 25, 8],
                            two: [11, 13, 13, 20, 20.5, 21, 25, 20, 17.5],
                        }
                    ],
                    [
                        {
                            one: [13, 16, 7, 23, 21, 24, 23, 13, 8],
                            two: [13, 14, 17, 20, 19.5, 22, 26, 20, 17.5],
                        }
                    ],
                    [
                        {
                            one: [16, 12, 18, 25, 21, 24, 23, 25, 19],
                            two: [12, 13, 15, 19, 21.5, 22, 26, 20, 17.5],
                        }
                    ],
                    [
                        {
                            one: [8, 16, 7, 11, 21, 24, 23, 25, 8],
                            two: [11, 13, 13, 20, 20.5, 21, 25, 20, 17.5],
                        }
                    ],
                    [
                        {
                            one: [13, 16, 7, 23, 21, 24, 23, 13, 8],
                            two: [13, 14, 17, 20, 19.5, 22, 26, 20, 17.5],
                        }
                    ],
                    [
                        {
                            one: [16, 12, 18, 25, 21, 24, 23, 25, 19],
                            two: [12, 14, 16, 21, 20.5, 22, 24, 20, 17.5],
                        }
                    ]
                ],
                threeseries: [
                    [
                        {
                            one: [16, 12, 18, 25, 21, 24, 23, 25, 19],
                            two: [12, 13, 15, 19, 21.5, 22, 26, 20, 17.5],
                        }
                    ],
                    [
                        {
                            one: [8, 16, 7, 11, 21, 24, 23, 25, 8],
                            two: [11, 13, 13, 20, 20.5, 21, 25, 20, 17.5],
                        }
                    ],
                    [
                        {
                            one: [13, 16, 7, 23, 21, 24, 23, 13, 8],
                            two: [13, 14, 17, 20, 19.5, 22, 26, 20, 17.5],
                        }
                    ],
                    [
                        {
                            one: [16, 12, 18, 25, 21, 24, 23, 25, 19],
                            two: [12, 13, 15, 19, 21.5, 22, 26, 20, 17.5],
                        }
                    ],
                    [
                        {
                            one: [8, 16, 7, 11, 21, 24, 23, 25, 8],
                            two: [11, 13, 13, 20, 20.5, 21, 25, 20, 17.5],
                        }
                    ],
                    [
                        {
                            one: [13, 16, 7, 23, 21, 24, 23, 13, 8],
                            two: [13, 14, 17, 20, 19.5, 22, 26, 20, 17.5],
                        }
                    ],
                    [
                        {
                            one: [16, 12, 18, 25, 21, 24, 23, 25, 19],
                            two: [12, 13, 15, 19, 21.5, 22, 26, 20, 17.5],
                        }
                    ],
                    [
                        {
                            one: [8, 16, 7, 11, 21, 24, 23, 25, 8],
                            two: [11, 13, 13, 20, 20.5, 21, 25, 20, 17.5],
                        }
                    ],
                    [
                        {
                            one: [13, 16, 7, 23, 21, 24, 23, 13, 8],
                            two: [13, 14, 17, 20, 19.5, 22, 26, 20, 17.5],
                        }
                    ],
                    [
                        {
                            one: [16, 12, 18, 25, 21, 24, 23, 25, 19],
                            two: [12, 13, 15, 19, 21.5, 22, 26, 20, 17.5],
                        }
                    ],
                    [
                        {
                            one: [8, 16, 7, 11, 21, 24, 23, 25, 8],
                            two: [11, 13, 13, 20, 20.5, 21, 25, 20, 17.5],
                        }
                    ],
                    [
                        {
                            one: [13, 16, 7, 23, 21, 24, 23, 13, 8],
                            two: [13, 14, 17, 20, 19.5, 22, 26, 20, 17.5],
                        }
                    ],
                    [
                        {
                            one: [16, 12, 18, 25, 21, 24, 23, 25, 19],
                            two: [12, 14, 16, 21, 20.5, 22, 24, 20, 17.5],
                        }
                    ]
                ],
                fourseries: [
                    [
                        {
                            one: [13, 16, 7, 23, 21, 24, 23, 13, 8],
                            two: [12, 14, 16, 21, 20.5, 22, 24, 20, 17.5],
                        }
                    ],
                    [
                        {
                            one: [8, 16, 7, 11, 21, 24, 23, 25, 8],
                            two: [12, 13, 15, 19, 21.5, 22, 26, 20, 17.5],
                        }
                    ],
                    [
                        {
                            one: [16, 12, 18, 25, 21, 24, 23, 25, 19],
                            two: [12, 18, 19, 20, 21.5, 22, 24, 20, 17.5],
                        }
                    ],
                    [
                        {
                            one: [13, 16, 7, 23, 21, 24, 23, 13, 8],
                            two: [12, 14, 16, 21, 20.5, 22, 24, 20, 17.5],
                        }
                    ],
                    [
                        {
                            one: [8, 16, 7, 11, 21, 24, 23, 25, 8],
                            two: [12, 13, 15, 19, 21.5, 22, 26, 20, 17.5],
                        }
                    ],
                    [
                        {
                            one: [16, 12, 18, 25, 21, 24, 23, 25, 19],
                            two: [12, 18, 19, 20, 21.5, 22, 24, 20, 17.5],
                        }
                    ],
                    [
                        {
                            one: [13, 16, 7, 23, 21, 24, 23, 13, 8],
                            two: [12, 14, 16, 21, 20.5, 22, 24, 20, 17.5],
                        }
                    ],
                    [
                        {
                            one: [8, 16, 7, 11, 21, 24, 23, 25, 8],
                            two: [12, 13, 15, 19, 21.5, 22, 26, 20, 17.5],
                        }
                    ],
                    [
                        {
                            one: [16, 12, 18, 25, 21, 24, 23, 25, 19],
                            two: [12, 18, 19, 20, 21.5, 22, 24, 20, 17.5],
                        }
                    ],
                    [
                        {
                            one: [13, 16, 7, 23, 21, 24, 23, 13, 8],
                            two: [12, 14, 16, 21, 20.5, 22, 24, 20, 17.5],
                        }
                    ],
                    [
                        {
                            one: [8, 16, 7, 11, 21, 24, 23, 25, 8],
                            two: [12, 13, 15, 19, 21.5, 22, 26, 20, 17.5],
                        }
                    ],
                    [
                        {
                            one: [16, 12, 18, 25, 21, 24, 23, 25, 19],
                            two: [12, 18, 19, 20, 21.5, 22, 24, 20, 17.5],
                        }
                    ],
                    [
                        {
                            one: [13, 16, 7, 23, 21, 24, 23, 13, 8],
                            two: [12, 14, 16, 21, 20.5, 22, 24, 20, 17.5],
                        }
                    ]
                ],
                fiveseries: [
                    [
                        {
                            value: 12,
                            name: "中石油",
                        },
                        {
                            value: 8,
                            name: "中石化",
                        },
                    ],
                    [
                        {
                            value: 16,
                            name: "中石油",
                        },
                        {
                            value: 8,
                            name: "中石化",
                        },
                    ],
                    [
                        {
                            value: 17,
                            name: "中石油",
                        },
                        {
                            value: 9,
                            name: "中石化",
                        },
                    ],
                    [
                        {
                            value: 12,
                            name: "中石油",
                        },
                        {
                            value: 8,
                            name: "中石化",
                        },
                    ],
                    [
                        {
                            value: 16,
                            name: "中石油",
                        },
                        {
                            value: 8,
                            name: "中石化",
                        },
                    ],
                    [
                        {
                            value: 17,
                            name: "中石油",
                        },
                        {
                            value: 9,
                            name: "中石化",
                        },
                    ],
                    [
                        {
                            value: 12,
                            name: "中石油",
                        },
                        {
                            value: 8,
                            name: "中石化",
                        },
                    ],
                    [
                        {
                            value: 16,
                            name: "中石油",
                        },
                        {
                            value: 8,
                            name: "中石化",
                        },
                    ],
                    [
                        {
                            value: 17,
                            name: "中石油",
                        },
                        {
                            value: 9,
                            name: "中石化",
                        },
                    ],
                    [
                        {
                            value: 12,
                            name: "中石油",
                        },
                        {
                            value: 8,
                            name: "中石化",
                        },
                    ],
                    [
                        {
                            value: 16,
                            name: "中石油",
                        },
                        {
                            value: 8,
                            name: "中石化",
                        },
                    ],
                    [
                        {
                            value: 17,
                            name: "中石油",
                        },
                        {
                            value: 9,
                            name: "中石化",
                        },
                    ],
                    [
                        {
                            value: 12,
                            name: "中石油",
                        },
                        {
                            value: 8,
                            name: "中石化",
                        },
                    ]
                ],
                sixseries: [
                    [
                        {
                            value: 11,
                            name: "中石油",
                        },
                        {
                            value: 6,
                            name: "中石化",
                        },
                    ],
                    [
                        {
                            value: 14,
                            name: "中石油",
                        },
                        {
                            value: 9,
                            name: "中石化",
                        },
                    ],
                    [
                        {
                            value: 13,
                            name: "中石油",
                        },
                        {
                            value: 10,
                            name: "中石化",
                        },
                    ],
                    [
                        {
                            value: 11,
                            name: "中石油",
                        },
                        {
                            value: 6,
                            name: "中石化",
                        },
                    ],
                    [
                        {
                            value: 14,
                            name: "中石油",
                        },
                        {
                            value: 9,
                            name: "中石化",
                        },
                    ],
                    [
                        {
                            value: 13,
                            name: "中石油",
                        },
                        {
                            value: 10,
                            name: "中石化",
                        },
                    ],
                    [
                        {
                            value: 11,
                            name: "中石油",
                        },
                        {
                            value: 6,
                            name: "中石化",
                        },
                    ],
                    [
                        {
                            value: 14,
                            name: "中石油",
                        },
                        {
                            value: 9,
                            name: "中石化",
                        },
                    ],
                    [
                        {
                            value: 13,
                            name: "中石油",
                        },
                        {
                            value: 10,
                            name: "中石化",
                        },
                    ],
                    [
                        {
                            value: 11,
                            name: "中石油",
                        },
                        {
                            value: 6,
                            name: "中石化",
                        },
                    ],
                    [
                        {
                            value: 14,
                            name: "中石油",
                        },
                        {
                            value: 9,
                            name: "中石化",
                        },
                    ],
                    [
                        {
                            value: 13,
                            name: "中石油",
                        },
                        {
                            value: 10,
                            name: "中石化",
                        },
                    ],
                    [
                        {
                            value: 11,
                            name: "中石油",
                        },
                        {
                            value: 6,
                            name: "中石化",
                        },
                    ]
                ],
                sevenseries: [
                    [
                        {
                            value: 11,
                            name: "中石油",
                        },
                        {
                            value: 6,
                            name: "中石化",
                        },
                    ],
                    [
                        {
                            value: 14,
                            name: "中石油",
                        },
                        {
                            value: 9,
                            name: "中石化",
                        },
                    ],
                    [
                        {
                            value: 13,
                            name: "中石油",
                        },
                        {
                            value: 10,
                            name: "中石化",
                        },
                    ],
                    [
                        {
                            value: 11,
                            name: "中石油",
                        },
                        {
                            value: 6,
                            name: "中石化",
                        },
                    ],
                    [
                        {
                            value: 14,
                            name: "中石油",
                        },
                        {
                            value: 9,
                            name: "中石化",
                        },
                    ],
                    [
                        {
                            value: 13,
                            name: "中石油",
                        },
                        {
                            value: 10,
                            name: "中石化",
                        },
                    ],
                    [
                        {
                            value: 11,
                            name: "中石油",
                        },
                        {
                            value: 6,
                            name: "中石化",
                        },
                    ],
                    [
                        {
                            value: 14,
                            name: "中石油",
                        },
                        {
                            value: 9,
                            name: "中石化",
                        },
                    ],
                    [
                        {
                            value: 13,
                            name: "中石油",
                        },
                        {
                            value: 10,
                            name: "中石化",
                        },
                    ],
                    [
                        {
                            value: 11,
                            name: "中石油",
                        },
                        {
                            value: 6,
                            name: "中石化",
                        },
                    ],
                    [
                        {
                            value: 14,
                            name: "中石油",
                        },
                        {
                            value: 9,
                            name: "中石化",
                        },
                    ],
                    [
                        {
                            value: 13,
                            name: "中石油",
                        },
                        {
                            value: 10,
                            name: "中石化",
                        },
                    ],
                    [
                        {
                            value: 11,
                            name: "中石油",
                        },
                        {
                            value: 6,
                            name: "中石化",
                        },
                    ]
                ],
                eightseries: [
                    [
                        {
                            value: 12,
                            name: "中石油",
                        },
                        {
                            value: 8,
                            name: "中石化",
                        },
                    ],
                    [
                        {
                            value: 16,
                            name: "中石油",
                        },
                        {
                            value: 8,
                            name: "中石化",
                        },
                    ],
                    [
                        {
                            value: 17,
                            name: "中石油",
                        },
                        {
                            value: 9,
                            name: "中石化",
                        },
                    ],
                    [
                        {
                            value: 12,
                            name: "中石油",
                        },
                        {
                            value: 8,
                            name: "中石化",
                        },
                    ],
                    [
                        {
                            value: 16,
                            name: "中石油",
                        },
                        {
                            value: 8,
                            name: "中石化",
                        },
                    ],
                    [
                        {
                            value: 17,
                            name: "中石油",
                        },
                        {
                            value: 9,
                            name: "中石化",
                        },
                    ],
                    [
                        {
                            value: 12,
                            name: "中石油",
                        },
                        {
                            value: 8,
                            name: "中石化",
                        },
                    ],
                    [
                        {
                            value: 16,
                            name: "中石油",
                        },
                        {
                            value: 8,
                            name: "中石化",
                        },
                    ],
                    [
                        {
                            value: 17,
                            name: "中石油",
                        },
                        {
                            value: 9,
                            name: "中石化",
                        },
                    ],
                    [
                        {
                            value: 12,
                            name: "中石油",
                        },
                        {
                            value: 8,
                            name: "中石化",
                        },
                    ],
                    [
                        {
                            value: 16,
                            name: "中石油",
                        },
                        {
                            value: 8,
                            name: "中石化",
                        },
                    ],
                    [
                        {
                            value: 17,
                            name: "中石油",
                        },
                        {
                            value: 9,
                            name: "中石化",
                        },
                    ],
                    [
                        {
                            value: 12,
                            name: "中石油",
                        },
                        {
                            value: 8,
                            name: "中石化",
                        },
                    ]
                ],
                pie_one: 20,
                pie_oneAry: [20, 24, 26, 20, 24, 26, 20, 24, 26, 20, 24, 26, 20],
                pie_two: 17,
                pie_twoAry: [17, 23, 23, 17, 23, 23, 17, 23, 23, 17, 23, 23, 17],
                pie_three: 17,
                pie_threeAry: [17, 23, 23, 17, 23, 23, 17, 23, 23, 17, 23, 23, 17],
                pie_four: 20,
                pie_fourAry: [20, 24, 26, 20, 24, 26, 20, 24, 26, 20, 24, 26, 20],
            };
        },
        mounted() {
            this.KuCun_One("echartsOne", this.oneseries[0]);
            this.KuCun_Three("echartsThree", this.threeseries[0]);
            this.KuCun_Five("echartsFive", this.fiveseries[0]);
            this.KuCun_Seven("echartsSeven", this.sevenseries[0]);

        },
        methods: {
            // 用于点击的div块绑定函数
            be_click_left(a) {
                return this.screenWidth * a + 'px'
            },
            be_click_top(a) {
                return 314.5 * a + 'px'
            },
//第一栏
            KuCun_One(name, series) {
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
                        data: ["汽油库存量", "同比变化"],
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
                            name: "汽油库存量",
                            type: "bar",
                            barWidth: 10,
                            itemStyle: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {offset: 0, color: "#63edd4"},
                                    {offset: 1, color: "rgba(14, 137, 238, 1)"},
                                ]),
                            },
                            data: series[0].one,
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
                            data: series[0].two,
                        },
                    ],
                });
            },
            KuCun_Two(name, series) {
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
                        data: ["柴油库存量", "同比变化"],
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
                            name: "柴油库存量",
                            type: "bar",
                            barWidth: 10,
                            itemStyle: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {offset: 0, color: "#63edd4"},
                                    {offset: 1, color: "rgba(14, 137, 238, 1)"},
                                ]),
                            },
                            data: series[0].one,
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
                            data: series[0].two,
                        },
                    ],
                });
            },
//第二栏
            KuCun_Three(name, series) {
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
                        data: ["航煤库存量", "同比变化"],
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
                            name: "航煤库存量",
                            type: "bar",
                            barWidth: 10,
                            itemStyle: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {offset: 0, color: "#63edd4"},
                                    {offset: 1, color: "rgba(14, 137, 238, 1)"},
                                ]),
                            },
                            data: series[0].one,
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
                            data: series[0].two,
                        },
                    ],
                });
            },
            KuCun_Four(name, series) {
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
                        data: ["原油库存量", "同比变化"],
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
                            name: "原油库存量",
                            type: "bar",
                            barWidth: 10,
                            itemStyle: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {offset: 0, color: "#63edd4"},
                                    {offset: 1, color: "rgba(14, 137, 238, 1)"},
                                ]),
                            },
                            data: series[0].one,
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
                            data: series[0].two,
                        },
                    ],
                });
            },
//第三栏
            KuCun_Five(name, series) {
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
                            data: series,
                            color: [
                                "#15E9EC",
                                "#FFD350",
                                "#01A6FF",
                            ],
                        },
                    ],
                });
            },
            KuCun_Six(name, series) {
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
                            data: series,
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
            KuCun_Seven(name, series) {
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
                            name: "航煤库存企业结构",
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
                            data: series,
                            color: [
                                "#15E9EC",
                                "#FFD350",
                                "#01A6FF",
                            ],
                        },
                    ],
                });
            },
            KuCun_Eight(name, series) {
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
                            data: series,
                            color: [
                                "#15E9EC",
                                "#FFD350",
                                "#01A6FF",
                            ],
                        },
                    ],
                });
            },


            handlePieClick(tab, event) {
                if (tab.index == 1) {
                    if(this.desIndex==null){
                        this.$nextTick(() => {
                            this.KuCun_Two('echartsTwo', this.twoseries[0])
                        });
                    }
                    else{
                        this.$nextTick(() => {
                            this.KuCun_Two('echartsTwo', this.twoseries[this.desIndex+1])
                        });
                    }

                }

            },
            handleClick(tab, event) {
                if (tab.index == 1) {
                    if(this.desIndex==null){
                        this.$nextTick(() => {
                            this.KuCun_Four('echartsFour', this.fourseries[0])
                        });
                    }
                    else{
                        this.$nextTick(() => {
                            this.KuCun_Four('echartsFour', this.fourseries[this.desIndex+1])
                        });
                    }

                }
            },
            handleClickThree(tab, event) {
                if (tab.index == 1) {
                    if(this.desIndex==null){
                        this.$nextTick(() => {
                            this.KuCun_Six('echartsSix', this.sixseries[0])
                        });
                    }else{
                        this.$nextTick(() => {
                            this.KuCun_Six('echartsSix', this.sixseries[this.desIndex+1])
                        });
                    }


                }
            },
            handleClickFour(tab, event) {
                if (tab.index == 1) {
                    if(this.desIndex==null){
                        this.$nextTick(() => {
                            this.KuCun_Eight('echartsEight', this.eightseries[0])
                        });
                    }else{
                        this.$nextTick(() => {
                            this.KuCun_Eight('echartsEight', this.eightseries[this.desIndex+1])
                        });
                    }


                }
            },
            //点击地图上的点进行切换
            showDes(index) {
                if (this.desIndex == index) {
                    if (this.$refs[`list${index}`][0].style.display == 'none') {
                        this.showFlag = true
                        this.desIndex = index;
                        this.KuCun_One("echartsOne", this.oneseries[index+1]);
                        if(this.activeNamePie==2){
                            this.KuCun_Two("echartsTwo", this.twoseries[index+1]);
                        }
                        this.KuCun_Three("echartsThree", this.threeseries[index+1]);
                        if(this.activeNamePie1==2){
                            this.KuCun_Four("echartsFour", this.fourseries[index+1]);
                        }

                        this.KuCun_Five("echartsFive", this.fiveseries[index+1]);
                        if(this.activeName==2){
                            this.KuCun_Six("echartsSix", this.sixseries[index+1]);
                        }

                        this.KuCun_Seven("echartsSeven", this.sevenseries[index+1]);
                        if(this.activeName4==2){
                            this.KuCun_Eight("echartsEight", this.eightseries[index+1]);
                        }

                        this.pie_one=this.pie_oneAry[index+1]
                        this.pie_two=this.pie_twoAry[index+1]
                        this.pie_three=this.pie_threeAry[index+1]
                        this.pie_four=this.pie_fourAry[index+1]
                        this.tabList_one=[this.cityAry[index]+this.tabList_one_copy[0],this.cityAry[index]+this.tabList_one_copy[1]]
                        this.tabList_two=[this.cityAry[index]+this.tabList_two_copy[0],this.cityAry[index]+this.tabList_two_copy[1]]
                        this.tabList_three=[this.cityAry[index]+this.tabList_three_copy[0],this.cityAry[index]+this.tabList_three_copy[1]]
                        this.tabList_four=[this.cityAry[index]+this.tabList_four_copy[0],this.cityAry[index]+this.tabList_four_copy[1]]

                    } else {
                        this.showFlag = false;
                        this.desIndex = null;
                        this.KuCun_One("echartsOne", this.oneseries[0]);
                        if(this.activeNamePie==2){
                            this.KuCun_Two("echartsTwo", this.twoseries[0]);
                        }
                        this.KuCun_Three("echartsThree", this.threeseries[0]);
                        if(this.activeNamePie1==2){
                            this.KuCun_Four("echartsFour", this.fourseries[0]);
                        }
                        this.KuCun_Five("echartsFive", this.fiveseries[0]);
                        if(this.activeName==2){
                            this.KuCun_Six("echartsSix", this.sixseries[0]);
                        }
                        this.KuCun_Seven("echartsSeven", this.sevenseries[0]);
                        if(this.activeName4==2){
                            this.KuCun_Eight("echartsEight", this.eightseries[0]);
                        }

                        this.pie_one=this.pie_oneAry[0]
                        this.pie_two=this.pie_twoAry[0]
                        this.pie_three=this.pie_threeAry[0]
                        this.pie_four=this.pie_fourAry[0]
                        this.tabList_one=this.tabList_one_copy
                        this.tabList_two=this.tabList_two_copy
                        this.tabList_three=this.tabList_three_copy
                        this.tabList_four=this.tabList_four_copy
                    }
                } else {
                    this.desIndex = index;
                    this.showFlag = true;
                    this.pie_one=this.pie_oneAry[index+1]
                    this.pie_two=this.pie_twoAry[index+1]
                    this.pie_three=this.pie_threeAry[index+1]
                    this.pie_four=this.pie_fourAry[index+1]
                    this.KuCun_One("echartsOne", this.oneseries[index+1]);
                    if(this.activeNamePie==2){
                        this.KuCun_Two("echartsTwo", this.twoseries[index+1]);
                    }
                    this.KuCun_Three("echartsThree", this.threeseries[index+1]);
                    if(this.activeNamePie1==2){
                        this.KuCun_Four("echartsFour", this.fourseries[index+1]);
                    }
                    this.KuCun_Five("echartsFive", this.fiveseries[index+1]);
                    if(this.activeName==2){
                        this.KuCun_Six("echartsSix", this.sixseries[index+1]);
                    }
                    this.KuCun_Seven("echartsSeven", this.sevenseries[index+1]);
                    if(this.activeName4==2){
                        this.KuCun_Eight("echartsEight", this.eightseries[index+1]);
                    }
                    this.tabList_one=[this.cityAry[index]+this.tabList_one_copy[0],this.cityAry[index]+this.tabList_one_copy[1]]
                    this.tabList_two=[this.cityAry[index]+this.tabList_two_copy[0],this.cityAry[index]+this.tabList_two_copy[1]]
                    this.tabList_three=[this.cityAry[index]+this.tabList_three_copy[0],this.cityAry[index]+this.tabList_three_copy[1]]
                    this.tabList_four=[this.cityAry[index]+this.tabList_four_copy[0],this.cityAry[index]+this.tabList_four_copy[1]]
                }

            }
        }
    }
</script>

<style scoped lang="scss">
    .child1 {
        .lay-content {
            border: 1px solid rgba(37, 54, 104, 0.6);
            position: absolute;
            font-size: 0.12rem;
            border-radius: 0.04rem;
            background-color: rgba(37, 54, 104, 0.5);;
            color: #fff;
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
            width: 180px;
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
            width: 180px;
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
            width: 370px;
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
            width: 13px;
            height: 13px;
            position: absolute;
            z-index: 2;
        }

    }

</style>
