<template>
    <div
            style="position: relative; width: 100%; top: 93px ;background-color: #dadbdb"
    >
        <div id="tab_button" :style="{ left: screenLeft }">
      <span
              v-for="(item, index) in tablist"
              :key="index"
              @click="tabButton(index)"
              v-bind:class="[
          { tab_button_two: index == selected },
          { tab_button_one: true },
        ]"
      >{{ item }}</span
      >
        </div>
        <!-- 销售管理的主要内容 -->
        <div id="confess_content" v-show="a" style="background-color: #dadbdb">
            <img
                    class="map"
                    src="../../assets/img/oilgas/shenchan.png"
                    alt="图片未显示"
            />

            <div class="chart">
                <!-- <div
                  style="
                    width: 100%;
                    height: 8px;
                    background-color: #dadbdb;
                    margin-bottom: 10px;
                  "
                ></div> -->
                <div class="tab_oill">
          <span
                  v-for="(item, index) in tablist_one"
                  :key="index"
                  @click="tabButton_one(index)"
                  v-bind:class="[
              { tab_oil_one: index == selected_one },
              { tab_oil_one: true },
            ]"
          >{{ item }}</span
          >
                </div>

                <!-- <div class="echarts" id="echartsOne"></div> -->
                <div class="fontSize_divc">
                    <div class="fontSize">0.66</div>
                    <div class="fontSize">万吨</div>
                </div>
                <div class="echarts_two" id="echartsone"></div>
                <!-- <div class="echarts" id="echartsThree" v-show="i2"></div> -->
            </div>
            <div class="chart">
                <div
                        style="
            width: 100%;
            height: 8px;
            background-color: #dadbdb;
            margin-bottom: 10px;
          "
                ></div>
                <div class="tab_oil">
          <span
                  v-for="(item, index) in tablist_two"
                  :key="index"
                  @click="tabButton_two(index)"
                  v-bind:class="[
              { tab_oil_two: index == selected_two },
              { tab_oil_one: true },
            ]"
          >{{ item }}</span
          >
                </div>
                <div class="fontSize_divd">
                    <div class="fontSized">0.66</div>
                    <div class="fontSized">万吨</div>
                </div>
                <div class="echarts_three" id="echartsTwo" v-show="j1"></div>
                <div class="echarts_three" id="echartsFour" v-show="j2"></div>
            </div>
            <div class="chart">
                <div
                        style="
            width: 100%;
            height: 8px;
            background-color: #dadbdb;
            margin-bottom: 10px;
          "
                ></div>
                <div class="tab_oil">
          <span
                  v-for="(item, index) in tablist_three"
                  :key="index"
                  @click="tabButton_three(index)"
                  v-bind:class="[
              { tab_oil_two: index == selected_three },
              { tab_oil_one: true },
            ]"
          >{{ item }}</span
          >
                </div>
                <div class="fontSize_div" v-show="a_c">
                    <div class="fontSize">0.66</div>
                    <div class="fontSize">万吨</div>
                </div>
                <div class="echarts_two" id="echartsthree" v-show="k1"></div>
                <div class="echarts" id="echartsFive" v-show="k2"></div>
            </div>
            <div class="chart">
                <div
                        style="
          width: 100%;
          height: 8px;
          background-color: #dadbdb;
          margin-bottom: 10px;
        "
                ></div>
                <div class="tab_oil">
        <span
                v-for="(item, index) in tablist_four"
                :key="index"
                @click="tabButton_four(index)"
                v-bind:class="[
            { tab_oil_two: index == selected_four },
            { tab_oil_one: true },
          ]"
        >{{ item }}</span
        >
                </div>
                <div class="echarts" id="echartsSix" v-show="f1"></div>
                <div class="echarts" id="echartsSeven" v-show="f2"></div>
            </div>
        </div>


        <!-- 煤制油销售 -->
        <div id="produce_content" v-show="b">
            <img
                    class="map"
                    src="../../assets/img/youqixiaoshouguanli/地图.png"
                    alt="图片未显示"
            />
            <div class="produce_logo" :style="{ left: (this.screenWidth * 0.49) + 'px',top: (314.5 *0.72) + 'px' }">
                <img src="../../assets/img/youqixiaoshouguanli/mzy.png" alt="图片未显示"
                     @click=tanchuang(2,byneArry_two,produce_tc)>
            </div>
            <div class="produce_logo" :style="{ left: (this.screenWidth * 0.51) + 'px',top: (314.5 *0.66) + 'px' }">
                <img src="../../assets/img/youqixiaoshouguanli/mzy.png" alt="图片未显示"
                     @click=tanchuang(3,byneArry_three,produce_tc)>
            </div>
            <div class="produce_tc" v-show="produce_tc">
                <ul>
                    <li>{{page_c1}}</li>
                    <li>企业人数：<span>{{page_c2}}</span>人</li>
                    <li>9月石脑油供应量：<span>{{page_c3}}</span>万吨</li>
                    <li>9月柴油供应量：<span>{{page_c4}}</span>万吨</li>
                    <li>9月液化气供应量：<span>{{page_c5}}</span>万吨</li>
                </ul>
            </div>

            <div class="chart">
                <!-- <div
                  style="
                    width: 100%;
                    height: 8px;
                    background-color: #dadbdb;
                    margin-bottom: 10px;
                  "
                ></div> -->
                <div class="tab_oil">
          <span
                  v-for="(item, index) in tablist_five"
                  :key="index"
                  @click="tabButton_five(index)"
                  v-bind:class="[
              { tab_oil_two: index == selected_five },
              { tab_oil_one: true },
            ]"
          >{{ item }}</span
          >
                </div>
                <div class="fontSize_div_one" v-show="b_a">
                    <div class="fontSize_one">0.66</div>
                    <div class="fontSize_one">万吨</div>
                </div>
                <div class="echarts" id="echartsEight" v-show="p_g1"></div>
                <div class="echarts_two" id="echartsNine" v-show="p_g2"></div>
            </div>


            <div class="chart">
                <div
                        style="
            width: 100%;
            height: 8px;
            background-color: #dadbdb;
            margin-bottom: 10px;
          "
                ></div>
                <div class="tab_oil">
          <span
                  v-for="(item, index) in tablist_six"
                  :key="index"
                  @click="tabButton_six(index)"
                  v-bind:class="[
              { tab_oil_two: index == selected_six },
              { tab_oil_one: true },
            ]"
          >{{ item }}</span
          >
                </div>
                <div class="fontSize_div" v-show="b_b">
                    <div class="fontSizeb">0.66</div>
                    <div class="fontSizeb">万吨</div>
                </div>
                <!-- <div class="echarts" id="echartsOne"></div> -->
                <div class="echarts_two" id="echartsten" v-show="t_i1"></div>
                <div class="echarts" id="echartsEleven" v-show="t_i2"></div>
            </div>
        </div>

        <!-- 煤制气 -->
        <div id="confess_content" v-show="c" style="background-color: #dadbdb">
            <img
                    class="map"
                    src="../../assets/img/youqixiaoshouguanli/地图.png"
                    alt="图片未显示"
            />
            <div class="produce_logo" :style="{ left: (this.screenWidth * 0.38) + 'px',top: (314.5 *0.78) + 'px' }">
                <img src="../../assets/img/youqixiaoshouguanli/mzq.png" alt="图片未显示"
                     @click=tanchuang(4,byneArry_four,produce_tc)>
            </div>
            <div class="produce_logo" :style="{ left: (this.screenWidth * 0.7) + 'px',top: (314.5 *0.58) + 'px' }">
                <img src="../../assets/img/youqixiaoshouguanli/mzq.png" alt="图片未显示"
                     @click=tanchuang(5,byneArry_five,produce_tc)>
            </div>
            <div class="Gongying_mzq" v-show="produce_tc">
                <ul>
                    <li>{{page_c1}}</li>
                    <li>9月天然气供应量：<span>{{page_c2}}</span>万立方米</li>
                    <li>累计天然气供应量：<span>{{page_c3}}</span>万立方米</li>
                </ul>
            </div>

            <div class="chart">
                <!-- <div
                  style="
                    width: 100%;
                    height: 8px;
                    background-color: #dadbdb;
                    margin-bottom: 10px;
                  "
                ></div> -->
                <div class="tab_oill">
          <span
                  v-for="(item, index) in tablist_seven"
                  :key="index"
                  @click="tabButton_one(index)"
                  v-bind:class="[
              { tab_oil_one: index == selected_seven },
              { tab_oil_one: true },
            ]"
          >{{ item }}</span
          >
                </div>
                <div class="fontSize_divc">
                    <div class="fontSize">0.66</div>
                    <div class="fontSize">万立方米</div>
                </div>
                <div class="echarts_two" id="echartsShier"></div>
            </div>


            <div class="chart">
                <div
                        style="
          width: 100%;
          height: 8px;
          background-color: #dadbdb;
          margin-bottom: 10px;
        "
                ></div>
                <div class="tab_oil">
        <span
                v-for="(item, index) in tablist_eight"
                :key="index"
                @click="tabButton_eight(index)"
                v-bind:class="[
            { tab_oil_two: index == selected_eight },
            { tab_oil_one: true },
          ]"
        >{{ item }}</span
        >
                </div>
                <div class="fontSize_divd">
                    <div class="fontSized">0.66</div>
                    <div class="fontSized">亿立方米</div>
                </div>
                <div class="echarts_three" id="echartsThirteen" v-show="f_i1"></div>
                <div class="echarts_three" id="echartsShisi" v-show="f_i2"></div>
            </div>
            <div class="chart">
                <div
                        style="
          width: 100%;
          height: 8px;
          background-color: #dadbdb;
          margin-bottom: 10px;
        "
                ></div>
                <div class="tab_oil">
        <span
                v-for="(item, index) in tablist_nine"
                :key="index"
                @click="tabButton_nine(index)"
                v-bind:class="[
            { tab_oil_two: index == selected_nine },
            { tab_oil_one: true },
          ]"
        >{{ item }}</span
        >
                </div>
                <div class="echarts" id="echartsShiwu" v-show="f_j1"></div>
                <div class="echarts" id="echartsShiliu" v-show="f_j2"></div>
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
                screenLeft: "",
                logoposionleft7: "",
                logoposiontop7: "",
                tc7: 0,
                show: 0, //控制弹窗显示
                closeLeft: 0, //关闭按钮居中
                Show: [],
                tableTh: [
                    "名称",
                    "日供应量",
                    "企业性质",
                    "法人",
                    "科技人员",
                    "员工数",
                    "税收",
                    "价格",
                    "上月供应量",
                ],
                lll: [
                    {
                        name: "乌里雅斯太油田",
                        rigongying: "0.21万吨",
                        xingzhi: "国营",
                        faren: "佟天",
                        kejirenyuan: "175人",
                        yuangongshu: "2317人",
                        shuishou: "75亿元",
                        jiage: "1.76亿元",
                        gongying: "7.2万吨",
                    },
                ],
                listData_one: [
                    {
                        name: "吉祥油田",
                        rigongying: "0.21万吨",
                        xingzhi: "国营",
                        faren: "佟天",
                        kejirenyuan: "175人",
                        yuangongshu: "2317人",
                        shuishou: "75亿元",
                        jiage: "1.76亿元",
                        gongying: "7.2万吨",
                    },
                    {
                        name: "达尔其油田",
                        rigongying: "0.21万吨",
                        xingzhi: "国营",
                        faren: "佟天",
                        kejirenyuan: "175人",
                        yuangongshu: "2317人",
                        shuishou: "75亿元",
                        jiage: "1.76亿元",
                        gongying: "7.2万吨",
                    },
                ],
                listData_two: [
                    {
                        name: "包尔油田",
                        rigongying: "0.21万吨",
                        xingzhi: "国营",
                        faren: "佟天",
                        kejirenyuan: "175人",
                        yuangongshu: "2317人",
                        shuishou: "75亿元",
                        jiage: "1.76亿元",
                        gongying: "7.2万吨",
                    },
                    {
                        name: "赛汗油田",
                        rigongying: "0.21万吨",
                        xingzhi: "国营",
                        faren: "佟天",
                        kejirenyuan: "175人",
                        yuangongshu: "2317人",
                        shuishou: "75亿元",
                        jiage: "1.76亿元",
                        gongying: "7.2万吨",
                    },
                ],
                listData_three: [
                    {
                        name: "乌里雅斯太油田",
                        rigongying: "0.21万吨",
                        xingzhi: "国营",
                        faren: "佟天",
                        kejirenyuan: "175人",
                        yuangongshu: "2317人",
                        shuishou: "75亿元",
                        jiage: "1.76亿元",
                        gongying: "7.2万吨",
                    },
                    {
                        name: "宝力格油田",
                        rigongying: "0.21万吨",
                        xingzhi: "国营",
                        faren: "佟天",
                        kejirenyuan: "175人",
                        yuangongshu: "2317人",
                        shuishou: "75亿元",
                        jiage: "1.76亿元",
                        gongying: "7.2万吨",
                    },
                    {
                        name: "新苏木油田",
                        rigongying: "0.21万吨",
                        xingzhi: "国营",
                        faren: "佟天",
                        kejirenyuan: "175人",
                        yuangongshu: "2317人",
                        shuishou: "75亿元",
                        jiage: "1.76亿元",
                        gongying: "7.2万吨",
                    },
                    {
                        name: "哈达图油田",
                        rigongying: "0.21万吨",
                        xingzhi: "国营",
                        faren: "佟天",
                        kejirenyuan: "175人",
                        yuangongshu: "2317人",
                        shuishou: "75亿元",
                        jiage: "1.76亿元",
                        gongying: "7.2万吨",
                    },
                    {
                        name: "锡林油田",
                        rigongying: "0.21万吨",
                        xingzhi: "国营",
                        faren: "佟天",
                        kejirenyuan: "175人",
                        yuangongshu: "2317人",
                        shuishou: "75亿元",
                        jiage: "1.76亿元",
                        gongying: "7.2万吨",
                    },
                    {
                        name: "乌兰诺尔油田",
                        rigongying: "0.21万吨",
                        xingzhi: "国营",
                        faren: "佟天",
                        kejirenyuan: "175人",
                        yuangongshu: "2317人",
                        shuishou: "75亿元",
                        jiage: "1.76亿元",
                        gongying: "7.2万吨",
                    },
                ],
                listData_four: [
                    {
                        name: "科尔康油田",
                        rigongying: "0.21万吨",
                        xingzhi: "国营",
                        faren: "佟天",
                        kejirenyuan: "175人",
                        yuangongshu: "2317人",
                        shuishou: "75亿元",
                        jiage: "1.76亿元",
                        gongying: "7.2万吨",
                    },
                    {
                        name: "龙湾筒油田",
                        rigongying: "0.21万吨",
                        xingzhi: "国营",
                        faren: "佟天",
                        kejirenyuan: "175人",
                        yuangongshu: "2317人",
                        shuishou: "75亿元",
                        jiage: "1.76亿元",
                        gongying: "7.2万吨",
                    },
                    {
                        name: "交力格油田",
                        rigongying: "0.21万吨",
                        xingzhi: "国营",
                        faren: "佟天",
                        kejirenyuan: "175人",
                        yuangongshu: "2317人",
                        shuishou: "75亿元",
                        jiage: "1.76亿元",
                        gongying: "7.2万吨",
                    },
                    {
                        name: "科尔沁油田",
                        rigongying: "0.21万吨",
                        xingzhi: "国营",
                        faren: "佟天",
                        kejirenyuan: "175人",
                        yuangongshu: "2317人",
                        shuishou: "75亿元",
                        jiage: "1.76亿元",
                        gongying: "7.2万吨",
                    },
                    {
                        name: "广发油田",
                        rigongying: "0.21万吨",
                        xingzhi: "国营",
                        faren: "佟天",
                        kejirenyuan: "175人",
                        yuangongshu: "2317人",
                        shuishou: "75亿元",
                        jiage: "1.76亿元",
                        gongying: "7.2万吨",
                    },
                ],
                listData_five: [
                    {
                        name: "苏德尔特油田",
                        rigongying: "0.21万吨",
                        xingzhi: "国营",
                        faren: "佟天",
                        kejirenyuan: "175人",
                        yuangongshu: "2317人",
                        shuishou: "75亿元",
                        jiage: "1.76亿元",
                        gongying: "7.2万吨",
                    },
                    {
                        name: "把彦塔拉油田",
                        rigongying: "0.21万吨",
                        xingzhi: "国营",
                        faren: "佟天",
                        kejirenyuan: "175人",
                        yuangongshu: "2317人",
                        shuishou: "75亿元",
                        jiage: "1.76亿元",
                        gongying: "7.2万吨",
                    },
                    {
                        name: "苏仁诺尔油田",
                        rigongying: "0.21万吨",
                        xingzhi: "国营",
                        faren: "佟天",
                        kejirenyuan: "175人",
                        yuangongshu: "2317人",
                        shuishou: "75亿元",
                        jiage: "1.76亿元",
                        gongying: "7.2万吨",
                    },
                    {
                        name: "呼和诺仁油田",
                        rigongying: "0.21万吨",
                        xingzhi: "国营",
                        faren: "佟天",
                        kejirenyuan: "175人",
                        yuangongshu: "2317人",
                        shuishou: "75亿元",
                        jiage: "1.76亿元",
                        gongying: "7.2万吨",
                    },
                    {
                        name: "贝尔油田",
                        rigongying: "0.21万吨",
                        xingzhi: "国营",
                        faren: "佟天",
                        kejirenyuan: "175人",
                        yuangongshu: "2317人",
                        shuishou: "75亿元",
                        jiage: "1.76亿元",
                        gongying: "7.2万吨",
                    },
                ],
                listData: [],
                tablist: ["成品油销售", "煤制油销售", "煤制气销售"],
                tablist_one: ["上月成品油消费量"],
                tablist_two: ["汽油消费结构分析", "柴油消费结构分析"],
                tablist_three: ["成品油消费地区分布", "区内区外消费量对比"],
                tablist_four: ["汽油消费量预测", "柴油消费量预测"],
                tablist_five: ["煤制柴油消费结构分析", "煤制石脑油消费结构分析"],
                tablist_six: ["煤制油产品地区消费分布", "油煤等价曲线"],
                tablist_seven: ["煤制气产品地区消费分布"],
                tablist_eight: ["按用途消费结构分析", "按行业消费结构分析"],
                tablist_nine: ["调峰煤制气月变化趋势", "气价与煤价对比分析"],
                byneArry_one: ["中国石油石化公司", "1300", "100", "890", "899"],
                byneArry_two: ["神华煤制油", "176", "1000", "895", "769"],
                byneArry_three: ["伊泰煤制油", "367", "987", "673", "543"],
                byneArry_four: ["汇能煤制气", "1000", "800"],
                byneArry_five: ["大唐煤制气", "978", "675"],
                selected: "0",
                selected_one: "0",
                selected_two: "0",
                selected_three: "0",
                selected_four: "0",
                selected_five: "0",
                selected_six: "0",
                selected_seven: "0",
                selected_eight: "0",
                selected_nine: "0",
                produce_tc: 0,
                page_c1: "",
                page_c2: "",
                page_c3: "",
                page_c4: "",
                page_c5: "",
                xuan: 0,
                //三个页面是否显示的三个参数
                a: 1,
                b: 0,
                c: 0,
                d: 0,
                //第一个页面里两个按钮
                i1: 1, //判断是否点击
                i2: 0,
                j1: 1,
                j2: 0,
                k1: 1,
                k2: 0,
                f1: 1,
                f2: 0,
                a_c: 1,
                //第二个页面的三个按钮
                p_i1: 1,
                p_i2: 0,
                p_j1: 1,
                p_j2: 0,
                p_g1: 1,
                p_g2: 0,
                b_a: 0,
                b_b: 1,
                TwoFont: 0,
                ThreeFont: 0,
                //第三个页面里两个按钮
                t_i1: 1, //判断是否点击
                t_i2: 0,
                t_j1: 1,
                t_j2: 0,
                //第四个页面里两个按钮
                f_i1: 1, //判断是否点击
                f_i2: 0,
                f_j1: 1,
                f_j2: 0,
                //第一个页面的图表数据
                echarts: {
                    data_three: [
                        {
                            value: 18,
                            name: "兴安",
                        },
                        {
                            value: 12,
                            name: "包头",
                        },
                        {
                            value: 20,
                            name: "通辽",
                        },
                        {
                            value: 8,
                            name: "呼和浩特",
                        },
                        {
                            value: 18,
                            name: "鄂尔多斯",
                        },
                        {
                            value: 30,
                            name: "乌海",
                        },
                    ],
                    data_two: [
                        {
                            value: 0.1,
                            name: "油田1",
                        },
                        {
                            value: 0.2,
                            name: "油田2",
                        },
                        {
                            value: 0.12,
                            name: "油田3",
                        },
                        {
                            value: 0.18,
                            name: "油田4",
                        },
                        {
                            value: 0.1,
                            name: "油田5",
                        },
                        {
                            value: 0.06,
                            name: "油田6",
                        },
                    ],
                    data_one: [
                        {
                            value: 177,
                            name: "吉祥油田",
                        },
                        {
                            value: 200,
                            name: "宝力格油田",
                        },
                        {
                            value: 160,
                            name: "贝尔油田",
                        },
                        {
                            value: 260,
                            name: "赛汉油田",
                        },
                        {
                            value: 240,
                            name: "乌兰诺尔油田",
                        },
                        {
                            value: 140,
                            name: "科尔沁油田",
                        },
                    ],
                    data_four: [
                        {
                            value: 0.1,
                            name: "油田1",
                        },
                        {
                            value: 0.06,
                            name: "油田2",
                        },
                        {
                            value: 0.04,
                            name: "油田3",
                        },
                        {
                            value: 0.12,
                            name: "油田4",
                        },
                        {
                            value: 0.05,
                            name: "油田5",
                        },
                        {
                            value: 0.03,
                            name: "油田6",
                        },
                    ],
                },
                //第二个页面的柱状图数据
                bardata_one: [
                    [50, 50, 251, 400, 300, 250, 375, 500, 375, 250, 275, 520],
                    [250, 200, 374, "-", 375, "-", 175, 200, 175, "-", 260, 230],
                    ["-", "-", "-", 100, "-", 125, "-", "-", "-", 150, "-", "-"],
                ],
                bardata_two: [
                    [40, 60, 234, 300, 300, 230, 375, 460, 385, 230, 275, 420],
                    [230, 220, 354, "-", 375, "-", 175, 210, 175, "-", 260, 230],
                    ["-", "-", "-", 120, "-", 145, "-", "-", "-", 160, "-", "-"],
                ],
                //原油
            };
        },
        mounted() {
            this.ShangYueChangPinYouXiaoFeiLiang_pie("echartsone");
            this.QiYouXiaoFeiJieGouFenXi_pie("echartsTwo");
            this.ChengPinYouXiaoFeiDiqQuFenBu("echartsthree");
            this.QuYouXiaoFeiLiangYuCe_twoline("echartsSix");
            this.screenLeft = (this.screenWidth - 343) / 2 + "px";
            //this.drawLine_one('echartsThree')
        },
        methods: {
            tanchuang(a, arry, newproduce) {
                if (newproduce) {
                    this.page_c1 = arry[0];
                    this.page_c2 = arry[1];
                    this.page_c3 = arry[2];
                    this.page_c4 = arry[3];
                    this.page_c5 = arry[4];
                    if (this.xuan == a) {
                        this.xuan = a
                        this.produce_tc = !newproduce
                    }
                    this.xuan = a
                } else {
                    this.produce_tc = !newproduce
                    this.xuan = a
                    this.page_c1 = arry[0];
                    this.page_c2 = arry[1];
                    this.page_c3 = arry[2];
                    this.page_c4 = arry[3];
                    this.page_c5 = arry[4];
                }
            },
            tanchuang7() {
                // this.tc7 = 1;
                this.tc7 = !this.tc7;
            },
            // 取消图片默认样式
            tanchuangShow(a, b) {
                if (a == 1) {
                    (this.listData = b), (this.show = 1);
                    this.$nextTick(function () {
                        this.closeLeft = (this.screenWidth - 35) / 2 + "px";
                    });
                } else if (a == 2) {
                    (this.listData = b), (this.show = 1);
                    this.$nextTick(function () {
                        this.closeLeft = (this.screenWidth - 35) / 2 + "px";
                    });
                } else if (a == 3) {
                    (this.listData = b), (this.show = 1);
                    this.$nextTick(function () {
                        this.closeLeft = (this.screenWidth - 35) / 2 + "px";
                    });
                } else if (a == 4) {
                    (this.listData = b), (this.show = 1);
                    this.$nextTick(function () {
                        this.closeLeft = (this.screenWidth - 35) / 2 + "px";
                    });
                } else if (a == 5) {
                    (this.listData = b), (this.show = 1);
                    this.$nextTick(function () {
                        this.closeLeft = (this.screenWidth - 35) / 2 + "px";
                    });
                }
            },
            tanchuangClose() {
                this.show = 0;
            },
            //上月成品油消费量
            ShangYueChangPinYouXiaoFeiLiang_pie(name, arry) {
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
                        itemGap: 15,
                        data: ["汽油", "柴油", "煤油"],
                        itemWidth: 15,
                        itemHeight: 10,
                    },
                    grid: {
                        bottom: 40,
                    },
                    series: [
                        {
                            name: "上月成品油销售量",
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
                            data: [
                                {
                                    value: 0.27,
                                    name: "汽油",
                                },
                                {
                                    value: 0.12,
                                    name: "柴油",
                                },
                                {
                                    value: 0.27,
                                    name: "煤油",
                                },
                            ],
                            color: ["#64B9EC", "#13D99E", "#ED6046"],
                        },
                    ],
                });
            },
            //汽油消费结构分析
            QiYouXiaoFeiJieGouFenXi_pie(name, arry) {
                let echarts = require("echarts");
                let myChart = echarts.init(document.getElementById(name));
                myChart.setOption({
                    tooltip: {
                        trigger: "item",
                        formatter: "{a} <br/>{b}: {c}万吨 ({d}%)",
                    },
                    legend: {
                        orient: "horizontal",
                        bottom: 60,
                        left: "center",
                        itemGap: 15,
                        data: ["92#汽油", "95#汽油", "98#汽油"],
                        itemWidth: 15,
                        itemHeight: 10,
                    },
                    grid: {
                        bottom: 40,
                    },
                    series: [
                        {
                            name: "汽油消费结构",
                            type: "pie",
                            radius: ["40%", "55%"],
                            center: ["50%", "30%"],
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
                            data: [
                                {
                                    value: 0.27,
                                    name: "92#汽油",
                                },
                                {
                                    value: 0.12,
                                    name: "95#汽油",
                                },
                                {
                                    value: 0.27,
                                    name: "98#汽油",
                                },
                            ],
                            color: ["#64B9EC", "#13D99E", "#ED6046"],
                        },
                    ],
                });
            },
            //柴油消费结构分析
            ChaiYouXiaoFeiJieGouFenXi_pie(name, arry) {
                let echarts = require("echarts");
                let myChart = echarts.init(document.getElementById(name));
                myChart.setOption({
                    tooltip: {
                        trigger: "item",
                        formatter: "{a} <br/>{b}: {c}万吨 ({d}%)",
                    },
                    legend: {
                        orient: "horizontal",
                        bottom: 60,
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
                            center: ["50%", "30%"],
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
                            data: [
                                {
                                    value: 0.18,
                                    name: "-35#柴油",
                                },
                                {
                                    value: 0.12,
                                    name: "-20#柴油",
                                },
                                {
                                    value: 0.18,
                                    name: "-10#柴油",
                                },
                                {
                                    value: 0.18,
                                    name: "0#柴油",
                                },
                            ],
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
                        bottom: 50,
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
                                    value: 0.17,
                                    name: "呼和浩特",
                                },
                                {
                                    value: 0.05,
                                    name: "乌海",
                                },
                                {
                                    value: 0.14,
                                    name: "通辽",
                                },
                                {
                                    value: 0.05,
                                    name: "兴安",
                                },
                                {
                                    value: 0.08,
                                    name: "包头",
                                },
                                {
                                    value: 0.17,
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
                        data: ["区内消费量", "区外消费量"],
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
                            name: "区内消费量",
                            type: "bar",
                            barWidth: 10,
                            itemStyle: {
                                barBorderRadius: 3,
                                color: "#74A5FF",
                            },
                            data: [29, 19, 18, 14.5, 25.7, 22.5, 18, 22, 29, 19, 17, 12],
                        },
                        {
                            name: "区外消费量",
                            type: "bar",
                            barWidth: 10,
                            itemStyle: {
                                barBorderRadius: 3,
                                color: "#74FFF8",
                            },
                            data: [24, 15.5, 14.5, 12, 16, 22, 14, 18, 23, 19, 18, 13],
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
                        itemWidth: 10,
                        itemHeight: 5,
                        top: 0,
                        right: 30,
                        itemGap: 20,
                        data: ["汽油消费量实际值", "汽油消费量预测值"],
                    },
                    grid: {
                        height: 140,
                        bottom: 90,
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
                                type: "dotted",
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
                            areaStyle: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {offset: 0, color: "#47E6CC"},
                                    {offset: 0.7, color: "rgba(71, 230, 204, 0)"},
                                ]),
                            },
                            data: [43, 50, 55, 50, 45, 59, 67, 56, 65],
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
                        itemWidth: 10,
                        itemHeight: 5,
                        top: 0,
                        right: 30,
                        itemGap: 20,
                        data: ["柴油消费量实际值", "柴油消费量预测值"],
                    },
                    grid: {
                        height: 140,
                        bottom: 90,
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
                                type: "dotted",
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
                            areaStyle: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {offset: 0, color: "#47E6CC"},
                                    {offset: 0.7, color: "rgba(71, 230, 204, 0)"},
                                ]),
                            },
                            data: [43, 47, 50, 55, 49, 54, 61, 55, 67],
                        },
                    ],
                });
            },
            //煤制柴油消费结构分析
            MeiZhiChaiYouXiaoFeiJieGouFenXi_bar(name, arry) {
                let echarts = require("echarts");
                let myChart = echarts.init(document.getElementById(name));
                myChart.setOption({
                    tooltip: {
                        trigger: "axis",
                        formatter(params) {
                            return params[0].name + '</br>' + params[0].seriesName + ':' + params[0].value + '万吨' + '</br>' +
                                params[1].seriesName + ':' +
                                params[1].value + '万吨'+'</br>'+
                                params[2].seriesName + ':' +
                                params[2].value + '万吨'

                        }
                    },
                    legend: {
                        itemWidth: 10,
                        itemHeight: 5,
                        top: 0,
                        right: 30,
                        itemGap: 20,
                        data: ["工程车辆", "城市交通", "工业"],
                    },
                    grid: {
                        height: 150,
                        bottom: 67,
                        right: '5%',
                        left: '12%',
                    },
                    xAxis: [
                        {
                            type: "category",
                            data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
                            interval: 0,
                            axisPointer: {
                                type: "shadow",
                            },
                            axisLabel: {
                                interval: 0,
                                fontSize: 12,
                            },
                            axisLine: {
                                lineStyle: {
                                    color: "#9B9DA1", // 颜色
                                    width: 1, // 粗细
                                },
                            },
                        },
                    ],
                    yAxis: [
                        {
                            name: "万吨",
                            type: "value",
                            min: 0,
                            interval: 1000,
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

                    series: [{
                        name: "工业",
                        type: 'bar',
                        itemStyle: {
                            normal: {
                                color: '#7FEC15',
                                barBorderRadius: [20, 20, 20, 20]
                            }
                        },
                        silent: true,
                        barWidth: 10,
                        barGap: '-1',
                        data: [2200, 3300, 3700, 2900, 3000, 2500, 3900, 3900, 3800, 4300, 4300, 4430]
                    },
                        {
                            name: "城市交通",
                            type: 'bar',
                            itemStyle: {
                                normal: {
                                    color: '#07EEFF',
                                }
                            },
                            silent: true,
                            barWidth: 10,
                            barGap: '-1',
                            data: [2000, 3000, 3500, 2500, 2300, 2300, 3300, 3400, 3500, 4000, 4100, 4030]
                        },
                        {
                            name: "工程车辆",
                            type: 'bar',
                            itemStyle: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {offset: 0, color: "#63edd4"},
                                    {offset: 1, color: "rgba(14, 137, 238, 1)"},
                                ]),
                                // barBorderRadius: [20, 20, 20, 20]
                            },
                            barWidth: 10,
                            data: [200, 300, 550, 250, 430, 230, 330, 340, 350, 400, 410, 430]
                        }]
                });
            },
            //煤制石脑油消费结构分析
            MeiZhiShiNaoYouXiaoFeiJieGongFenXi_pie(name, arry) {
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
                        data: ["乙醇原料", "调和汽油", "重整原料"],
                        itemWidth: 15,
                        itemHeight: 10,
                    },
                    grid: {
                        bottom: 40,
                    },
                    series: [
                        {
                            name: "煤制石脑油消费结构分析",
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
                            data: [
                                {
                                    value: 0.27,
                                    name: "乙醇原料",
                                },
                                {
                                    value: 0.12,
                                    name: "调和汽油",
                                },
                                {
                                    value: 0.27,
                                    name: "重整原料",
                                },
                            ],
                            color: ["#64B9EC", "#13D99E", "#ED6046"],
                        },
                    ],
                });
            },
            //煤制油产品地区消费分布
            MeiZhiYouChanPinDiQuXiaoFeiFenBu(name, arry) {
                var echarts = require("echarts");
                var myChart = echarts.init(document.getElementById(name));
                myChart.setOption({
                    tooltip: {
                        trigger: "item",
                        formatter: "{a} <br/>{b}: {c}万吨 ({d}%)",
                    },
                    legend: {
                        orient: "horizontal",
                        bottom: 10,
                        left: "center",
                        itemGap: 10,
                        data: ["呼和浩特", "乌海", "通辽", "兴安", "包头", "鄂尔多斯"],
                        itemWidth: 15,
                        itemHeight: 10,
                    },
                    // grid: {
                    //   bottom: '10%',
                    // },
                    series: [
                        {
                            name: "原油剩余技术储量",
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
                                    value: 0.17,
                                    name: "呼和浩特",
                                },
                                {
                                    value: 0.05,
                                    name: "乌海",
                                },
                                {
                                    value: 0.14,
                                    name: "通辽",
                                },
                                {
                                    value: 0.05,
                                    name: "兴安",
                                },
                                {
                                    value: 0.08,
                                    name: "包头",
                                },
                                {
                                    value: 0.17,
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
            //油煤等价曲线
            YouMeiDengJiaQuXian(name, arry) {
                var echarts = require("echarts");
                var myChart = echarts.init(document.getElementById(name));
                myChart.setOption({
                    tooltip: {
                        trigger: "axis",
                        formatter(params) {
                            return params[0].name + '</br>' + params[0].seriesName + ':' + params[0].value + '标准煤'
                        }
                    },
                    // legend: {
                    //   itemWidth: 10,
                    //   itemHeight: 5,
                    //   top: 0,
                    //   right: 30,
                    //   itemGap: 20,
                    //   textStyle: {
                    //     color: "#e3e3e3",
                    //     fontSize: 10,
                    //   },
                    // },
                    grid: {
                        height: 140,
                        bottom: 90,
                    },
                    xAxis: {
                        type: "category",
                        boundaryGap: false,
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
                        name: "吨/标准煤",
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
                            name: "煤油等价曲线",
                            type: "line",
                            symbol: "none",
                            smooth: true,
                            lineStyle: {
                                color: "#FA5356",
                                type: "dashed",
                            },
                            areaStyle: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {offset: 0, color: "rgba(250, 83, 86, 1)"},
                                    {offset: 0.7, color: "rgba(250, 83, 86, 0)"},
                                ]),
                            },
                            data: [60, 75, 83, 80, 79, 77, 79, 81, 65, 60, 63, 70, 63, 61, 69, 73, 80,],
                        },
                    ],
                });
            },
            //煤制气产品地区消费分布
            MeiZhiQiChanPinDiQuXiaoFeiFenBu(name, arry) {
                var echarts = require("echarts");
                var myChart = echarts.init(document.getElementById(name));
                myChart.setOption({
                    tooltip: {
                        trigger: "item",
                        formatter: "{a} <br/>{b}: {c}万立方米 ({d}%)",
                    },
                    legend: {
                        orient: "horizontal",
                        bottom: 20,
                        left: "center",
                        itemGap: 10,
                        data: ["呼和浩特", "乌海", "通辽", "兴安", "包头", "鄂尔多斯"],
                        itemWidth: 15,
                        itemHeight: 10,
                    },
                    grid: {
                        bottom: 40,
                    },
                    series: [
                        {
                            name: "煤制气产品地区消费分布",
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
                                    value: 0.17,
                                    name: "呼和浩特",
                                },
                                {
                                    value: 0.05,
                                    name: "乌海",
                                },
                                {
                                    value: 0.14,
                                    name: "通辽",
                                },
                                {
                                    value: 0.05,
                                    name: "兴安",
                                },
                                {
                                    value: 0.08,
                                    name: "包头",
                                },
                                {
                                    value: 0.17,
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
            //按用途消费结构分析
            AnYongTuXiaoFeiJieGouFenXi_pie(name, arry) {
                let echarts = require("echarts");
                let myChart = echarts.init(document.getElementById(name));
                myChart.setOption({
                    tooltip: {
                        trigger: "item",
                        formatter: "{a} <br/>{b}: {c}亿立方米 ({d}%)",
                    },
                    legend: {
                        orient: "horizontal",
                        bottom: 60,
                        left: "center",
                        itemGap: 15,
                        data: ["终端消费", "化工", "火力发电", "供热"],
                        itemWidth: 15,
                        itemHeight: 10,
                    },
                    grid: {
                        bottom: 40,
                    },
                    series: [
                        {
                            name: "按用途消费结构",
                            type: "pie",
                            radius: ["40%", "55%"],
                            center: ["50%", "30%"],
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
                            data: [
                                {
                                    value: 0.18,
                                    name: "终端消费",
                                },
                                {
                                    value: 0.12,
                                    name: "化工",
                                },
                                {
                                    value: 0.18,
                                    name: "火力发电",
                                },
                                {
                                    value: 0.18,
                                    name: "供热",
                                },
                            ],
                            color: ["#64B9EC", "#13D99E", "#ED6046", "#FF9712"],
                        },
                    ],
                });
            },
            //调峰煤制气月变化趋势
            TiaoFengMeiZhiYueBianHuaQuShi(name, arry) {
                var echarts = require("echarts");
                var myChart = echarts.init(document.getElementById(name));
                myChart.setOption({
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        },
                        formatter(params) {
                            return params[0].name + '</br>' + params[0].seriesName + ':' + params[0].value + '万立方米'
                        }
                    },
                    grid: {
                        top: '5%',
                        left: '3%',
                        right: '20%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: {
                        name:'万立方米',
                        type: 'value',
                        min: 0,
                        max: 8,
                        interval: 1,
                        boundaryGap: [0, 0.01],
                        axisTick: {
                            show: false
                        },
                        splitLine: {
                            lineStyle: {
                                color: 'rgba(255,255,255,0.4)'
                            }
                        },
                        axisLabel: {
                            interval: 0,
                            fontSize: 12,
                        },
                        axisLine: {
                            lineStyle: {
                                color: "#9B9DA1", // 颜色
                                width: 1, // 粗细
                            },
                        },
                    },
                    yAxis: {
                        type: 'category',
                        data: [
                            "1月",
                            "2月",
                            "3月",
                            "4月",
                            "5月",
                            "6月",
                            "7月"
                        ],
                        axisTick: {
                            show: false
                        },
                        splitLine: {
                            lineStyle: {
                                color: 'rgba(255,255,255,0.4)'
                            }
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
                    },
                    series: [
                        {
                            name: '调峰煤制气',
                            type: 'bar',
                            barWidth: 10,
                            data: [
                                4.9,
                                4.1,
                                3.6,
                                4.7,
                                5.5,
                                7.8,
                                3.2
                            ],
                            itemStyle: {
                                normal: {
                                    color: new this.$echarts.graphic.LinearGradient(
                                        0, 0, 1, 0,
                                        [
                                            {offset: 0, color: '#4572FF'},                   //柱图渐变色
                                            {offset: 1, color: '#65FCFA'},                   //柱图渐变色
                                        ]
                                    )
                                }
                            },
                            showBackground: true,
                            backgroundStyle: {
                                color: '#f7f7f7'

                            },
                        }
                    ]
                });
            },
            //按行业消费结构分析
            AnHangYeXiaoFeiJieGouFenXi(name, arry) {
                var echarts = require("echarts");
                var myChart = echarts.init(document.getElementById(name));
                myChart.setOption({
                    tooltip: {
                        trigger: "item",
                        formatter: "{a} <br/>{b}: {c}立方米 ({d}%)",
                    },
                    legend: {
                        orient: "horizontal",
                        bottom: 60,
                        left: "center",
                        itemGap: 10,
                        data: ["工业", "建筑业", "商业", "交通", "生活消费"],
                        itemWidth: 15,
                        itemHeight: 10,
                    },
                    grid: {
                        bottom: 40,
                    },
                    series: [
                        {
                            name: "按行业结构分析",
                            type: "pie",
                            radius: ["40%", "55%"],
                            center: ["50%", "30%"],
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
                                    value: 0.19,
                                    name: "工业",
                                },
                                {
                                    value: 0.06,
                                    name: "建筑业",
                                },
                                {
                                    value: 0.16,
                                    name: "商业",
                                },
                                {
                                    value: 0.06,
                                    name: "交通",
                                },
                                {
                                    value: 0.19,
                                    name: "生活消费",
                                },
                            ],
                            color: [
                                "#44c2fd",
                                "#22ffc2",
                                "#ffc522",
                                "#ff1a40",
                                "#0000ff",
                            ],
                        },
                    ],
                });
            },
            //气价与煤价对比分析
            QiJiaYuMeiJiaDuiBiFenXi(name, arry) {
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
                        itemWidth: 10,
                        itemHeight: 5,
                        top: 0,
                        right: 30,
                        itemGap: 20,
                        data: ["汽油消费量实际值", "汽油消费量预测值"],
                    },
                    grid: {
                        top: "25%",
                        right: '5%',
                        left: '10%',
                        bottom: "15%",
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
                                type: "dotted",
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
                            areaStyle: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {offset: 0, color: "#47E6CC"},
                                    {offset: 0.7, color: "rgba(71, 230, 204, 0)"},
                                ]),
                            },
                            data: [43, 50, 55, 50, 45, 59, 67, 56, 65],
                        },
                    ],
                });
            },

            //主要按钮
            tabButton(id) {
                this.selected = id;
                //this.tabButton_one_t(id)
                if (0 == id) {
                    this.a = 1;
                    this.b = 0;
                    this.c = 0;
                    this.$nextTick(function () {
                        this.produce_tc = 0;
                        this.ShangYueChangPinYouXiaoFeiLiang_pie("echartsone");
                        this.QiYouXiaoFeiJieGouFenXi_pie("echartsTwo");
                        this.ChengPinYouXiaoFeiDiqQuFenBu("echartsthree");
                        this.QuYouXiaoFeiLiangYuCe_twoline("echartsSix");
                    });
                }
                if (1 == id) {
                    this.a = 0;
                    this.b = 1;
                    this.c = 0;
                    this.ThreeFont = 20;
                    this.$nextTick(function () {
                        // this.produce_tc = 0;
                        this.MeiZhiChaiYouXiaoFeiJieGouFenXi_bar("echartsEight");
                        this.MeiZhiYouChanPinDiQuXiaoFeiFenBu('echartsten');
                        // this.logoposionleft7 = (this.screenWidth * 0.49) + 'px';
                        // this.logoposiontop7 = (314.5 *0.71) + 'px';
                    });
                }
                if (2 == id) {
                    this.a = 0;
                    this.b = 0;
                    this.c = 1;
                    this.$nextTick(function () {
                        this.produce_tc = 0;
                        this.MeiZhiQiChanPinDiQuXiaoFeiFenBu(
                            "echartsShier"
                        );
                        this.AnYongTuXiaoFeiJieGouFenXi_pie("echartsThirteen");
                        this.TiaoFengMeiZhiYueBianHuaQuShi("echartsShiwu");
                    });
                }
            },

            /* 第一个页面的点击按钮 */
            //内容里的第二个按钮
            tabButton_two(id) {
                this.selected_two = id;
                if (0 == id) {
                    this.j1 = 1;
                    this.j2 = 0;
                    this.$nextTick(function () {
                        this.QiYouXiaoFeiJieGouFenXi_pie("echartsTwo");
                    });
                }
                if (1 == id) {
                    this.j1 = 0;
                    this.j2 = 1;
                    this.$nextTick(function () {
                        this.ChaiYouXiaoFeiJieGouFenXi_pie("echartsFour");
                    });
                }
            },

            //内容里的第三个按钮
            tabButton_three(id) {
                this.selected_three = id;
                if (0 == id) {
                    this.k1 = 1;
                    this.k2 = 0;
                    this.a_c = 1;
                    this.$nextTick(function () {
                        this.a_c = 1;
                        this.ChengPinYouXiaoFeiDiqQuFenBu("echartsthree");
                    });
                }
                if (1 == id) {
                    this.k1 = 0;
                    this.k2 = 1;
                    this.a_c = 0;
                    this.$nextTick(function () {
                        this.a_c = 0;
                        this.QuNeiQuWaiXiaoFeiLiangDuiBi_twobar("echartsFive");
                    });
                }
            },

            //内容里的第四个按钮
            tabButton_four(id) {
                this.selected_four = id;
                if (0 == id) {
                    this.f1 = 1;
                    this.f2 = 0;
                    this.$nextTick(function () {
                        this.QuYouXiaoFeiLiangYuCe_twoline("echartsSix");
                    });
                }
                if (1 == id) {
                    this.f1 = 0;
                    this.f2 = 1;
                    this.$nextTick(function () {
                        this.ChaiYouXiaoFeiLiangYuCe_twoline(
                            "echartsSeven",
                            this.echarts.data_three
                        );
                    });
                }
            },
            /* 第二个页面的两个点击按钮 */
            //内容里的第一个按钮
            tabButton_five(id) {
                this.selected_five = id;
                if (0 == id) {
                    this.p_g1 = 1;
                    this.p_g2 = 0;

                    this.$nextTick(function () {
                        this.b_a = 0;
                        this.MeiZhiChaiYouXiaoFeiJieGouFenXi_bar("echartsEight");
                    });
                }
                if (1 == id) {
                    this.p_g1 = 0;
                    this.p_g2 = 1;
                    this.ThreeFont = 10;

                    this.$nextTick(function () {
                        this.b_a = 1,
                            this.MeiZhiShiNaoYouXiaoFeiJieGongFenXi_pie("echartsNine");
                    });
                }
            },

            //内容里的第二个按钮
            tabButton_six(id) {
                this.selected_six = id;
                if (0 == id) {
                    this.t_i1 = 1;
                    this.t_i2 = 0;
                    this.$nextTick(function () {
                        this.b_b = 1,
                            this.MeiZhiYouChanPinDiQuXiaoFeiFenBu("echartsten");
                    });
                }
                if (1 == id) {
                    this.t_i1 = 0;
                    this.t_i2 = 1;
                    this.$nextTick(function () {
                        this.b_b = 0,
                            this.YouMeiDengJiaQuXian(
                                "echartsEleven");
                    });
                }
            },
            /* 第三个页面的点击按钮 */
            //内容里的第二个内容
            tabButton_eight(id) {
                this.selected_eight = id;
                if (0 == id) {
                    this.f_i1 = 1;
                    this.f_i2 = 0;
                    this.$nextTick(function () {
                        this.AnYongTuXiaoFeiJieGouFenXi_pie("echartsThirteen");
                    });
                }
                if (1 == id) {
                    this.f_i1 = 0;
                    this.f_i2 = 1;
                    this.$nextTick(function () {
                        this.AnHangYeXiaoFeiJieGouFenXi("echartsShisi");
                    });
                }
            },
            //内容里的第三个按钮
            tabButton_nine(id) {
                this.selected_nine = id;
                if (0 == id) {
                    this.f_j1 = 1;
                    this.f_j2 = 0;
                    this.$nextTick(function () {
                        this.TiaoFengMeiZhiYueBianHuaQuShi("echartsShiwu");
                    });
                }
                if (1 == id) {
                    this.f_j1 = 0;
                    this.f_j2 = 1;
                    this.$nextTick(function () {
                        this.QiJiaYuMeiJiaDuiBiFenXi("echartsShiliu");
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

    #close {
        width: 35px;
        height: 35px;
        position: absolute;
        top: 205px;
    }

    #tab_button {
        width: 343px;
        height: 29px;
        background-color: rgba(0, 0, 0, 0.15);
        position: fixed;
        top: 100px;
        z-index: 2;
        border-radius: 5px;
    }

    /* 按钮切换 */
    .tab_button_one {
        width: 114px;
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
        width: 112px;
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
        /*height: 314.5px;*/
        height: auto;
        background-color: #dadbdb;
    }

    .tuoyuan {
        width: 100%;
        height: 314.5px;
    }

    .Gongying_oil {
        width: 153px;
        height: 47px;
        background-color: rgba(37, 54, 104, 0.6);
        /* background-image: url(../../assets/img/YouqiGongying/yuanyou.png) ; */
        position: absolute;
        left: 50px;
        top: 100px;
    }

    .Gongying_oil ul li {
        font-size: 10px;
        color: #c9d6fd;
        padding: 6px;
        height: 18px;
    }

    .Gongying_oil ul :first-child {
        font-weight: bold;
        font-size: 15px;
        padding: 4px;
        color: white;
    }

    .Gongying_oil ul span {
        font-size: 13px;
        padding: 4px;
        height: 18px;
    }

    .produce_logo {
        width: 20px;
        position: absolute;
        left: 100px;
        top: 100px;
    }

    .Gongying_mzq {
        width: 210px;
        height: 70px;
        background-color: rgba(37, 54, 104, 0.6);
        /* background-image: url(../../assets/img/YouqiGongying/produce_tc.png) ; */
        position: absolute;
        left: 40px;
        top: 70px;
    }

    .Gongying_mzq ul li {
        font-size: 10px;
        color: #c9d6fd;
        padding: 6px;
        height: 18px;
    }

    .Gongying_mzq ul :first-child {
        font-weight: bold;
        font-size: 15px;
        padding: 4px;
        color: white;
    }

    .Gongying_mzq ul span {
        font-size: 13px;
        padding: 4px;
        height: 18px;
    }

    .produce_tc {
        width: 180px;
        height: 100px;
        background-color: rgba(37, 54, 104, 0.6);
        /* background-image: url(../../assets/img/YouqiGongying/produce_tc.png) ; */
        position: absolute;
        left: 40px;
        top: 70px;
    }

    .produce_tc ul li {
        font-size: 10px;
        color: #c9d6fd;
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
        height: 100%;
        margin: 15px auto;
        background-repeat: no-repeat;
        background-position: 50% 37%;
        background-size: 65px 65px;
    }

    .echarts_two {
        width: 100%;
        height: 100%;
        margin: 15px auto;
        background-image: url(../../assets/img/youqixiaoshouguanli/椭圆.png);
        background-repeat: no-repeat;
        background-position: 50% 37%;
        background-size: 65px 65px;
    }

    .echarts_three {
        width: 100%;
        height: 100%;
        margin: 15px auto;
        background-image: url(../../assets/img/youqixiaoshouguanli/椭圆.png);
        background-repeat: no-repeat;
        background-position: 50% 24%;
        background-size: 65px 65px;
    }

    .echarts_one {
        width: 100%;
        height: 242px;
        margin: 20px auto;
    }

    /* 文字块 */
    .fontSize_div {
        position: absolute;
        width: 100%;
        height: 100%;
        margin: 15px auto;
        text-align: center;
    }

    .fontSize_diva {
        position: absolute;
        width: 100%;
        height: 100%;
        text-align: center;
    }

    .fontSize_divb {
        position: absolute;
        width: 100%;
        height: 100%;
        text-align: center;
    }

    .fontSize_divc {
        position: absolute;
        width: 100%;
        height: 100%;
        text-align: center;
    }

    .fontSize_divd {
        position: absolute;
        width: 100%;
        height: 80%;
        bottom: 2px;
        /* margin: 15px auto; */
        text-align: center;
    }

    .fontSize_div_one {
        position: absolute;
        width: 100%;
        height: 80%;
        bottom: 2px;
        text-align: center;
    }

    .fontSize {
        position: relative;
        top: 90px;
        font: 20px bolder microsoft-yahei;
    }

    .fontSizeb {
        position: relative;
        top: 80px;
        font: 20px bolder microsoft-yahei;
    }

    .fontSized {
        position: relative;
        top: 68px;
        font: 20px bolder microsoft-yahei;
    }

    .fontSize_one {
        position: relative;
        top: 78px;
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

    .tab_oill span {
        height: 31px;
        background: none;
        color: #3a6dda;
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

    /* 主要内容隐藏 */
    .content {
        display: none;
    }
</style>
