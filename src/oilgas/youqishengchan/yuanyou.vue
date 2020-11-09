<template>
  <div style="position: relative; width: 100%; top: 93px;background-color: #dadbdb">
    <!-- 表格 -->
      <div :class="[{tanchuang:true},{tanchuang_one: show}]">
			<div style="width: 100%;height: 100%;overflow: auto;">
				<table class="table_one_t">
					<tr>
            	<th v-for="(th,index) in tableTh" :key='index'>{{th}}</th>
					</tr>
					<tr v-for="(tr,index) in listData" :key='index'>
						<td v-for="(td,index) in tr" :key='index'> {{td}} </td>
					</tr>
				</table>
			</div>
			<img id="close" :style="{'left':closeLeft}" src="../../assets/img/YouqiGongying/关闭.png" alt="图片未显示" @click="tanchuangClose()">
		</div>
    <!-- 主要切换按钮 -->
    <div id="tab_button" :style="{ left: screenLeft }">
      <span v-for="(item, index) in tablist" :key="index" @click="tabButton(index)" v-bind:class="[{ tab_button_two: index == selected },{ tab_button_one: true },]">{{ item }}</span>
    </div>
    <!-- 油气生产的主要内容 -->
    <div id="produce_content" v-show="a">
      <img class="map" src="../../assets/img/produce-fx/produce_sym.png" alt="图片未显示"/>
    <!-- 动态点击切换按钮 -->
    <div class="clickbtn" :style="{'left':be_click_left(0.325),'top':be_click_top(0.748)}" @click.prevent="tanchuangShow(1,listData_one)"></div>
    <div class="clickbtn" :style="{'left':be_click_left(0.475),'top':be_click_top(0.65)}" @click.prevent="tanchuangShow(2,listData_two)"></div>
    <div class="clickbtn" :style="{'left':be_click_left(0.61),'top':be_click_top(0.56)}" @click.prevent="tanchuangShow(3,listData_three)"></div>
    <div class="clickbtn" :style="{'left':be_click_left(0.79),'top':be_click_top(0.575)}" @click.prevent="tanchuangShow(4,listData_four)"></div>
    <div class="clickbtn" :style="{'left':be_click_left(0.7),'top':be_click_top(0.3257)}" @click.prevent="tanchuangShow(5,listData_five)"></div>
      <div class="chart">
        <div class="tab_oil">
          <span v-for="(item, index) in tablist_one" :key="index" @click="tabButton_one(index)" v-bind:class="[{ tab_oil_two: index == selected_one },{ tab_oil_one: true },]">{{ item }}</span>
        </div>
        <div class="fontSize_div" v-show="a_1">
					<div class="fontSize">{{pie_number}}</div>
					<div class="fontSizeOne">万吨</div>
				</div>
        <div class="echarts" id = "echartsOne" v-show="i1" ></div>
        <div class="echarts" id = "echartsNine" v-show="i2" ></div>
      </div>
	 <div class="chart">
		  <div style=" width: 100%;height: 8px;background-color: #dadbdb;margin-bottom: 10px;"></div>
       <div style="font: bold 16px '微软雅黑'; width: 150px; position: relative;top: 10px;left: 20px;">油田产量分布分析</div>
       	<div class="fontSize_div">
					<div class="fontSize">{{pie_number}}</div>
					<div class="fontSizeOne">万吨</div>
				</div>
		  <div class="echarts_two" id = "echartsTen"></div>
 	 </div>
    </div>
<!-- 第二个页面 -->
    <div id="produce_content" v-show="b">
        <div class="pagethree_tc" v-show="produce_tc"><ul>
          <li>{{page_c1}}</li>
          <li>企业数量<span>{{page_c2}}</span>个</li>
          <li>上月汽油产量：<span>{{page_c3}}</span>万吨</li>
          <li>上月柴油产量：<span>{{page_c4}}</span>万吨</li>
          <li>上月煤油产量：<span>{{page_c5}}</span>万吨</li>
        </ul></div>
      <img class="map" src="../../assets/img/produce-fx/producemap.png" alt="图片未显示"/>
      <div class="produce_logo" :style="{ left: logoposionleft1,top: logoposiontop1 }">
      <img src="../../assets/img/produce-fx/producelogo.png" alt="图片未显示"  @click='tanchuang(produce_tc,arry1,1)'>
      </div>
      <div class="produce_logo" :style="{ left: logoposionleft2,top: logoposiontop2 }">
      <img src="../../assets/img/produce-fx/producelogo.png" alt="图片未显示"  @click='tanchuang(produce_tc,arry2,2)'>
      </div>
      <div class="produce_logo" :style="{ left: logoposionleft3,top: logoposiontop3 }">
      <img src="../../assets/img/produce-fx/producelogo.png" alt="图片未显示"  @click='tanchuang(produce_tc,arry3,3)'>
      </div>
      <div class="produce_logo" :style="{ left: logoposionleft4,top: logoposiontop4 }">
      <img src="../../assets/img/produce-fx/producelogo.png" alt="图片未显示"  @click='tanchuang(produce_tc,arry4,4)'>
      </div>
      <div class="produce_logo" :style="{ left: logoposionleft5,top: logoposiontop5 }">
      <img src="../../assets/img/produce-fx/producelogo.png" alt="图片未显示"  @click='tanchuang(produce_tc,arry5,5)'>
      </div>
      <div class="produce_logo" :style="{ left: logoposionleft6,top: logoposiontop6 }">
      <img src="../../assets/img/produce-fx/producelogo.png" alt="图片未显示"  @click='tanchuang(produce_tc,arry6,6)'>
      </div>
      <div class="chart">
        <div class="tab_oil">
          <span v-for="(item, index) in tablist_two" :key="index" @click="tabButton_two(index)" v-bind:class="[{ tab_oil_two: index == selected_two},{ tab_oil_one: true },]" >{{ item }}</span>
        </div>
        <div class="echarts" id="echartsEleven" v-show="j1"></div>
        <div class="echarts" id ="echartsTwelve" v-show="j2"></div>
      </div>
      <div class="chart">
        <div style=" width: 100%; height: 8px; background-color: #dadbdb; margin-bottom: 10px;"></div>
        <div class="tab_oil">
           <span v-for="(item, index) in tablist_three" :key="index" @click="tabButton_three(index)" v-bind:class="[{ tab_oil_two: index == selected_three},{ tab_oil_one: true },]">{{ item }}</span>
        </div>
        	<div class="fontSize_div">
					<div class="fontSize">{{pie_number}}</div>
					<div class="fontSizeOne">万吨</div>
				</div>
        <div class="echarts" id="echartsThirteenth" v-show="j3"></div>
        <div class="echarts" id ="echartsFourteen" v-show="j4"></div>
      </div>
      <div class="chart">
      <div style=" width: 100%;height: 8px;background-color: #dadbdb;margin-bottom: 10px;"></div>
      <div style="font: bold 16px '微软雅黑'; width: 150px; position: relative;top: 10px;left: 20px;">平均负荷率变化趋势</div>
		  <div class="echarts" id = "echartsEight"></div>
      </div>
    </div>
<!-- 第三个页面 -->
 <div id="produce_content" v-show="c">
      <img class="map" src="../../assets/img/produce-fx/producemap.png" alt="图片未显示"/>
      <div class="produce_logo" :style="{ left: logoposionleft7,top: logoposiontop7 }">
      <img src="../../assets/img/YouqiGongying/mzy.png" alt="图片未显示"  @click='tanchuang(produce_tc,arry7,7)'>
      </div>
      <div class="pagethree_tc" v-show="produce_tc"><ul>
        <li>{{page_c1}}</li>
        <li>企业数量：<span>{{page_c2}}</span>人</li>
        <li>上月石脑油供应量：<span>{{page_c3}}</span>万吨</li>
        <li>上月柴油供应量:<span>{{page_c4}}</span>万吨</li>
        <li>上月液化气供应量：<span>{{page_c5}}</span>万吨</li>
        </ul></div>
      <div class="produce_logo" :style="{ left: logoposionleft8,top: logoposiontop8 }">
      <img src="../../assets/img/YouqiGongying/mzy.png" alt="图片未显示"  @click='tanchuang(produce_tc,arry8,8)'>
      </div>
         <div class="chart">
        <div class="tab_oil">
           <span v-for="(item, index) in tablist_four" :key="index" @click="tabButton_four(index)" v-bind:class="[{ tab_oil_two: index == selected_four},{ tab_oil_one: true },]" >{{ item }}</span>
        </div>
        <div class="echarts" id ="echartsFifteen" v-show="k1"></div>
        <div class="echarts" id ="echartsSixteen" v-show="k2"></div>
      </div>
      <div class="chart">
        <div style=" width: 100%; height: 8px; background-color: #dadbdb; margin-bottom: 10px;"></div>
        <div class="tab_oil">
           <span v-for="(item, index) in tablist_five" :key="index" @click="tabButton_five(index)" v-bind:class="[{ tab_oil_two: index == selected_five},{ tab_oil_one: true },]" >{{ item }}</span>
        </div>
        <div class="fontSize_div" v-show="c_1">
					<div class="fontSize">{{pie_number}}</div>
					<div class="fontSizeOne">万吨</div>
				</div>
        <div class="echarts" id ="echartsSeventeen" v-show="k3"></div>
        <div class="echarts" id ="echartsEighteenth" v-show="k4"></div>
      </div>
  <div class="chart">
        <div style=" width: 100%; height: 8px; background-color: #dadbdb; margin-bottom: 10px;"></div>
        <div class="tab_oil">
           <span v-for="(item, index) in tablist_six" :key="index" @click="tabButton_six(index)" v-bind:class="[{ tab_oil_two: index == selected_six},{ tab_oil_one: true },]" >{{ item }}</span>
        </div>
        <div class="echarts" id ="echartsNinteenth" v-show="k5"></div>
        <div class="echarts" id ="echartsTwentieth" v-show="k6"></div>
      </div>
      </div>
<!-- 第四个页面 -->
<div id="produce_content" v-show="d">
      <img class="map" src="../../assets/img/produce-fx/producemap.png" alt="图片未显示"/>
      <div class="produce_logo" :style="{ left: logoposionleft9,top: logoposiontop9 }">
      <img src="../../assets/img/YouqiGongying/mzq.png" alt="图片未显示" @click='tanchuang(produce_tc,arry9,9)'>
      </div>
      <div class="pagefour_tc" v-show="produce_tc"><ul>
        <li>{{page_c1}}</li>
        <li>企业数量：<span>{{page_c2}}</span>人</li>
        <li>上月粉煤加工量：<span>{{page_c3}}</span>万吨</li>
        <li>上月天然气产量：<span>{{page_c4}}</span>万立方米</li>
      </ul></div>
      <div class="produce_logo" :style="{ left: logoposionleft10,top: logoposiontop10 }">
      <img src="../../assets/img/YouqiGongying/mzq.png" alt="图片未显示"  @click='tanchuang(produce_tc,arry10,10)'>
      </div>
        <div class="chart">
        <div class="tab_oil">
           <span v-for="(item, index) in tablist_seven" :key="index" @click="tabButton_seven(index)" v-bind:class="[{ tab_oil_two: index == selected_seven},{ tab_oil_one: true },]" >{{ item }}</span>
        </div>
        <div class="echarts" id ="echartsTone" v-show="m1"></div>
        <div class="echarts" id ="echartsTtwo" v-show="m2"></div>
      </div>
      <div class="chart">
        <div class="tab_oil">
           <span v-for="(item, index) in tablist_eight" :key="index" @click="tabButton_eight(index)" v-bind:class="[{ tab_oil_two: index == selected_eight},{ tab_oil_one: true },]" >{{ item }}</span>
        </div>
        <div class="echarts" id ="echartsTthree" v-show="m3"></div>
        <div class="echarts" id ="echartsTfour" v-show="m4"></div>
      </div>
  <div class="chart">
        <div
          style=" width: 100%; height: 8px; background-color: #dadbdb; margin-bottom: 10px;"></div>
        <div class="tab_oil">
           <span v-for="(item, index) in tablist_nine" :key="index" @click="tabButton_nine(index)" v-bind:class="[{ tab_oil_two: index == selected_nine},{ tab_oil_one: true },]" >{{ item }}</span>
        </div>
        <div class="echarts" id ="echartsTfive" v-show="m5"></div>
        <div class="echarts" id ="echartsTsix" v-show="m6"></div>
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
      closeLeft: 0, //关闭按钮居中
      Show:[],
      listData: [],
      // 首页表格数据
      tableTh: [
        "名称",
        "日供应量",
        "企业性质",
        "法人",
        "科技人员",
        "员工数",
        "税收",
        "价格",
        "上月供应量"
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
          gongying:"7.2万吨"
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
          gongying:"7.2万吨"
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
              gongying:"7.2万吨"
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
              gongying:"7.2万吨"
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
          gongying:"7.2万吨"
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
          gongying:"7.2万吨"
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
          gongying:"7.2万吨"
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
          gongying:"7.2万吨"
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
          gongying:"7.2万吨"
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
          gongying:"7.2万吨"
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
              gongying:"7.2万吨"
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
              gongying:"7.2万吨"
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
              gongying:"7.2万吨"
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
              gongying:"7.2万吨"
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
              gongying:"7.2万吨"
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
              gongying:"7.2万吨"
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
              gongying:"7.2万吨"
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
              gongying:"7.2万吨"
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
              gongying:"7.2万吨"
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
              gongying:"7.2万吨"
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
      logoposionleft5: '',
      logoposiontop5: '',
      logoposionleft6: '',
      logoposiontop6: '',
      logoposionleft7: '',
      logoposiontop7: '',
      logoposionleft8: '',
      logoposiontop8: '',
      logoposionleft9: '',
      logoposiontop9: '',
      logoposionleft10: '',
      logoposiontop10: '',
      show: 0, //控制弹窗显示
      produce_tc:true,
      pie_number: 20,
      //弹窗数据
      page_c1:'',
      page_c2:'',
      page_c3:'',
      page_c4:'',
      page_c5:'',
      arry1: ['成品油企业','1300','1000','895','769'],
      arry2: ['成品油企业','1300','1000','895','769'],
      arry3: ['成品油企业','1300','1000','895','769'],
      arry4: ['成品油企业','1300','1000','895','769'],
      arry5: ['成品油企业','1300','1000','895','769'],
      arry6: ['成品油企业','1300','1000','895','769'],
      arry7: ['伊泰煤制油','1300','1000','895','600'],
      arry8: ['神华煤制油','1200','800','695','500'],
      arry9: ['大唐煤制气','1300','100','900',''],
      arry10: ['汇能煤制气','1200','80','1200',''],
      tablist: ["原油", "成品油", "煤制油","煤制气"],
      tablist_one: ["原油月产量趋势分析", "原油月生产结构分析"],
      tablist_two: ["原油加工量变化趋势", "成品油产量变化趋势"],
      tablist_three: ["汽油产品结构", "柴油产品结构"],
      tablist_four: ["粉煤月进量分析", "水资源用量"],
      tablist_five: ["油品产量变化趋势", "产品结构分析"],
      tablist_six: ["煤粉月进量分析", "单位产品综合能耗"],
      tablist_seven: ["粉煤月进量分析", "水资源用量"],
      tablist_eight: ["天然气产量变化趋势", "平均负荷率变化趋势"],
      tablist_nine: ["单位产品综合能耗", "单位产品原料能耗"],
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
      //三个页面是否显示的三个参数
      a: 1,
      b: 0,
      c: 0,
      d: 0,
      //页面里三个按钮
      i1: 1,
      i2: 0,
      a_1:0,//判断文字显隐
      //第二个页面的三个按钮
      j1: 1,
      j2: 0,
      j3: 1,
      j4: 0,
      //第三个页面的三个按钮
      k1: 1,
      k2: 0,
      k3: 1,
      k4: 0,
      c_1:0,
      k5: 1,
      k6: 0,
    //第四个页面的三个按钮
      m1: 1,
      m2: 0,
      m3: 1,
      m4: 0,
      m5: 1,
      m6: 0,

      xuan: 0,
    };
  },
  mounted() {
    this.YuanYou_One("echartsOne");
    this.YuanYou_Three("echartsTen");
    this.screenLeft = (this.screenWidth - 343) / 2 + 'px'
  },
  methods: {
  //动态位置函数
  be_click_left(a){
    return this.screenWidth * a + 'px'
  },
   be_click_top(a){
    return 314.5 * a + 'px'
  },

  //取消图片默认样式
	tanchuangShow(a,b) {
				this.listData = b,
				this.show = 1
				this.$nextTick(function() {
				  this.closeLeft = (this.screenWidth - 35) / 2 + 'px'
				})
			},
			tanchuangClose() {
				this.show = 0
      },
  //第二三四页面点击
    tanchuang(a,arry,b){
       if(a){
          this.page_c1 = arry[0];
          this.page_c2 = arry[1];
          this.page_c3 = arry[2] ;
          this.page_c4 = arry[3];
          this.page_c5 = arry[4];
          if(this.xuan == b){
            this.xuan = b
            this.produce_tc=!a
          }
          this.xuan = b
        }else{
          this.produce_tc=!a
          this.xuan = b
          this.page_c1 = arry[0];
          this.page_c2 = arry[1];
          this.page_c3 = arry[2] ;
          this.page_c4 = arry[3];
          this.page_c5 = arry[4];
        }
    },
//页面echarts图
//原油第一栏
YuanYou_One(name, arry) {
      let echarts = require("echarts");
      let myChart = echarts.init(document.getElementById(name));
      myChart.setOption({
        tooltip: {
          trigger: "axis",
          formatter: '{a0}{b0}: {c0}吨<br /> {a1}{b1}: {c1}吨',
          axisPointer: {
            type: "cross",
            crossStyle: {
              color: "#999",
            },
          },
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
			name:"万吨 / 月",
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
                { offset: 0, color: "#63edd4" },
                { offset: 1, color: "rgba(14, 137, 238, 1)" },
              ]),
            },
            data: [4 , 4 , 7 , 17 , 8 , 21 , 23 , 13 , 8],
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
            data: [12 , 14 , 16 , 21 , 20.5 , 22 , 24 , 20 , 17.5],
          },
        ],
      });
    },
YuanYou_Two(name, arry) {
      let echarts = require("echarts");
      let myChart = echarts.init(document.getElementById(name));
      myChart.setOption({
        	  tooltip: {
        trigger: 'item',
        formatter: '{b}： <br/>{c} 吨'
	},
	    legend: {
        bottom: 10,
        left: 'center',
        data: ['中石油', '中石化']
    },
    series: [
        {
			type: 'pie',
      radius: ["40%", "55%"],
      center: ["50%", "40%"],
      labelLine: {
              normal: {
              length: 30,//设置延长线的长度
              length2: 50,//设置第二段延长线的长
              lineStyle: {
                  width:1,
                  color:'#53E5CF'  // 改变标示线的颜色
                  }
              }
            },
        label:{
              normal:{
                  formatter:"{b} \n\n {d}% ",
                  padding:[0,-30],
                  textStyle: {
                      color: '#C4C4C4',
                      fontSize: 12,// 改变标示文字的颜色
        },
              }

            },

        data: [
              {value: 60, name: '中石油'},
              {value: 40, name: '中石化'},
          ],
        color:['#01A3F4','#53E5CF'],
        }
    ]
      });
    },
//原油第二栏
YuanYou_Three(name, arry) {
      let echarts = require("echarts");
      let myChart = echarts.init(document.getElementById(name));
      myChart.setOption({
       tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)",
        },
        legend: {
          orient: "horizontal",
          bottom: 20,
          left: "center",
          itemGap: 15,
          data: ["宝力格油田","海拉尔油田","科尔沁油田",'\n',"包尔油田","吉祥油田","科尔康油田"],
          itemWidth: 15,
          itemHeight: 10,
        },
        grid: {
          bottom: 40,
        },
        series: [
          {
            name: "油田产量:",
            type: "pie",
            radius: ["40%", "55%"],
            center: ["50%", "40%"],
            label: {
              formatter: "{per|{d}%\n}",
              padding: [0, -40, 5],
              rich: {
                per: {
                  fontSize: 12,
                  color: "#9FA0A5",
                },
              },
            },
            labelLine: {
              length: 15,
              length2: 30,
            },
            data: [
              {
                value: 10,
                name: "宝力格油田",
              },
              {
                value: 8,
                name: "海拉尔油田",
              },
              {
                value: 6,
                name: "科尔沁油田",
              },
              {
                value: 4,
                name: "包尔油田",
              },
              {
                value: 2,
                name: "吉祥油田",
              },
              {
                value: 4,
                name: "科尔康油田",
              },
            ],
            color: [
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
//成品油第一栏
ChenPinYou_One(name, arry) {
      let echarts = require("echarts");
      let myChart = echarts.init(document.getElementById(name));
      myChart.setOption({
          tooltip: {
          trigger: "axis",
          formatter: '{a0}{b0}: {c0}万吨',
          axisPointer: {
            type: "cross",
            crossStyle: {
              color: "#999",
            },
          },
        },
        // grid: {
        //   height: 160,
        //   bottom: 50,
        // },
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
			name:"万吨 / 月",
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
            name: "原油加工量",
            type: "bar",
            barWidth: 10,
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "#63edd4" },
                { offset: 1, color: "rgba(14, 137, 238, 1)" },
              ]),
            },
            data: [4 , 4 , 7 , 17 , 8 , 17 , 20 , 13 , 8],
          }
        ],
      });
  },
ChenPinYou_Two(name, arry) {
      let echarts = require("echarts");
      let myChart = echarts.init(document.getElementById(name));
      myChart.setOption({
       tooltip: {
          trigger: "axis",
          formatter: '{a}{b}: {c}万吨',
          axisPointer: {
            type: "cross",
            crossStyle: {
              color: "#999",
            },
          },
        },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月','8月','9月'],
        axisTick:{
                     show:true,
                },
        axisLine: {
            lineStyle: {
              color: "#9B9DA1", // 颜色
              width: 1, // 粗细
            },
          },
        axisLabel :{
             show:true,
              interval:0 ,//设置间隔
              fontSize:12,
              padding:[0,0,0,0],
         },
    },
    yAxis: {
        name:'万吨/月',
        type: 'value',
        max:'20',
        axisTick:{
                     show:true,
                     interval:1,
                },
         axisLine: {
              lineStyle: {
                color: "#9B9DA1", // 颜色
                width: 1, // 粗细
              },
            },
        axisLabel :{
            show:true,
            interval:0 ,//设置间隔
            fontSize:12,
            padding:[0,0,0,0],
                    },
    },
    series: [{
        name:'成品油产量',
        data: [0, 12, 18, 14, 10, 3, 12,8,0],
        type: 'line',
        symbol: 'none',
        smooth: true,
        areaStyle : {
       normal : {
            color : new echarts.graphic.LinearGradient
                (0,0,0,1,[
          {
       offset : 0,
       color : 'rgba(0, 136, 212, 0.3)'
        },
       {
       offset : 0.8,
       color : 'rgba(0, 136, 212, 0)'
        }
      ], false),
        shadowColor : 'rgba(0, 0, 0, 0.1)',
        shadowBlur : 10
      }
     },
  //控制线条的颜色
  itemStyle : {
   normal : {
    color : 'rgb(0,136,212)',
    borderColor : 'rgba(0,136,212,0.2)',
    borderWidth : 3
   }
  },
    }]
      });
  },
//成品油第二栏
ChenPinYou_Three(name, arry) {
      let echarts = require("echarts");
      let myChart = echarts.init(document.getElementById(name));
      myChart.setOption({
    tooltip: {
          trigger: "item",
          formatter: "{b}: {c}万吨 ({d}%)",
        },
        legend: {
          orient: "horizontal",
          bottom: 30,
          left: "center",
          itemGap: 10,
          data: ["92#汽油", "89#汽油", "95#汽油"],
          itemWidth: 15,
          itemHeight: 10,
        },
        grid: {
          bottom: 40,
        },
        series: [
          {
            // name: "汽油标号结构",
            type: "pie",
            radius: ["40%", "55%"],
            center: ["50%", "40%"],
            label: {
              formatter:"{b} \n\n {d}% ",
              padding: [0, -50, 5],
              rich: {
                per: {
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
                value: 0.6,
                name: "92#汽油",
              },
              {
                value: 1.8,
                name: "89#汽油",
              },
              {
                value: 1.6,
                name: "95#汽油",
              }
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
ChenPinYou_Four(name, arry) {
      let echarts = require("echarts");
      let myChart = echarts.init(document.getElementById(name));
      myChart.setOption({
    tooltip: {
          trigger: "item",
          formatter: "{b}: {c}万吨 ({d}%)",
        },
        legend: {
          orient: "horizontal",
          bottom: 30,
          left: "center",
          itemGap: 10,
          data: ["-20#柴油", "-35#柴油", "0#柴油"],
          itemWidth: 15,
          itemHeight: 10,
        },
        grid: {
          bottom: 40,
        },
        series: [
          {
            // name: "柴油标号结构",
            type: "pie",
            radius: ["40%", "55%"],
            center: ["50%", "40%"],
            label: {
              formatter:"{b} \n\n {d}% ",
              padding: [0, -50, 5],
              rich: {
                per: {
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
                value: 0.3,
                name: "-20#柴油",
              },
              {
                value: 0.9,
                name: "-35#柴油",
              },
              {
                value: 0.8,
                name: "0#柴油",
              }
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
//成品油第三栏
ChenPinYou_Five(name, arry) {
      let echarts = require("echarts");
      let myChart = echarts.init(document.getElementById(name));
      myChart.setOption({
         tooltip: {
          trigger: "axis",
          formatter: '{a} <br/>{b}: {c}%'
        },
        xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月','8月','9月'],
        axisTick:{
                     show:true,
                },
        axisLine: {
            lineStyle: {
              color: "#9B9DA1", // 颜色
              width: 1, // 粗细
            },
          },
        axisLabel :{
             show:true,
              interval:0 ,//设置间隔
              fontSize:12,
              padding:[0,0,0,0],
         },
    },
    yAxis: {
        // name:'万吨/月',
        type: 'value',
        max:'20',
        axisTick:{
                     show:true,
                     interval:1,
                },
         axisLine: {
              lineStyle: {
                color: "#9B9DA1", // 颜色
                width: 1, // 粗细
              },
            },
        axisLabel :{
            show:true,
            interval:0 ,//设置间隔
            fontSize:12,
            padding:[0,0,0,0],
                    },
    },
    series: [{
             name:'平均负荷率',
        data: [0, 12, 18, 14, 10, 3, 12,8,0],
        type: 'line',
        symbol: 'none',
        smooth: true,
        areaStyle : {
       normal : {
            color : new echarts.graphic.LinearGradient
                (0,0,0,1,[
          {
       offset : 0,
       color : 'rgba(241, 158, 194, 0.3)'
        },
       {
       offset : 0.8,
       color : 'rgba(241, 158, 194, 0)'
        }
      ], false),
        shadowColor : 'rgba(0, 0, 0, 0.1)',
        shadowBlur : 10
      }
     },
  //控制线条的颜色
  itemStyle : {
   normal : {
    color : 'rgb(241,158,194)',
    borderColor : 'rgba(241,158,194,0.2)',
    borderWidth : 3
   }
  },
    }]
      });
  },
//煤制油第一栏
MeiZhiYou_One(name, arry) {
      let echarts = require("echarts");
      let myChart = echarts.init(document.getElementById(name));
      myChart.setOption({
        tooltip: {
          trigger: "axis",
          formatter: '{a0}{b0}: {c0}万吨',
          axisPointer: {
            type: "cross",
            crossStyle: {
              color: "#999",
            },
          },
        },
        // grid: {
        //   height: 160,
        //   bottom: 50,
        // },
        xAxis: [
          {
            type: "category",
            data: ["1月","2月","3月","4月","5月","6月","7月","8月","9月",],
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
			name:"万吨 / 月",
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
            name: "煤粉月进量",
            type: "bar",
            barWidth: 10,
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "#63edd4" },
                { offset: 1, color: "rgba(14, 137, 238, 1)" },
              ]),
            },
            data: [4 , 4 , 7 , 17 , 8 , 17 , 20 , 13 , 8],
          }
        ],
      });
  },
MeiZhiYou_Two(name, arry) {
      let echarts = require("echarts");
      let myChart = echarts.init(document.getElementById(name));
      myChart.setOption({
         tooltip: {
          trigger: "axis",
          formatter: '{a}{b}: {c}万吨',
          axisPointer: {
            type: "cross",
            crossStyle: {
              color: "#999",
            },
          },
        },
     xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月','8月','9月'],
        axisTick:{
                     show:true,
                },
        axisLine: {
            lineStyle: {
              color: "#9B9DA1", // 颜色
              width: 1, // 粗细
            },
          },
        axisLabel :{
             show:true,
              interval:0 ,//设置间隔
              fontSize:12,
              padding:[0,0,0,0],
         },
    },
    yAxis: {
        name:'万吨/月',
        type: 'value',
        max:'20',
        axisTick:{
                     show:true,
                     interval:1,
                },
         axisLine: {
              lineStyle: {
                color: "#9B9DA1", // 颜色
                width: 1, // 粗细
              },
            },
        axisLabel :{
            show:true,
            interval:0 ,//设置间隔
            fontSize:12,
            padding:[0,0,0,0],
                    },
    },
    series: [{
        name:'水资源用量',
        data: [0, 12, 18, 14, 10, 3, 12,8,0],
        type: 'line',
        symbol: 'none',
        smooth: true,
        areaStyle : {
       normal : {
            color : new echarts.graphic.LinearGradient
                (0,0,0,1,[
          {
       offset : 0,
       color : 'rgba(0, 136, 212, 0.3)'
        },
       {
       offset : 0.8,
       color : 'rgba(0, 136, 212, 0)'
        }
      ], false),
        shadowColor : 'rgba(0, 0, 0, 0.1)',
        shadowBlur : 10
      }
     },
  //控制线条的颜色
  itemStyle : {
   normal : {
    color : 'rgb(0,136,212)',
    borderColor : 'rgba(0,136,212,0.2)',
    borderWidth : 3
   }
  },
    }]
      });
  },
//煤制油第二栏
MeiZhiYou_Three(name, arry) {
      let echarts = require("echarts");
      let myChart = echarts.init(document.getElementById(name));
      myChart.setOption({
          tooltip: {
              trigger: "axis",
              formatter: '{a} <br/>{b}: {c}%'
          },
     xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月','8月','9月'],
        axisTick:{
                     show:true,
                },
        axisLine: {
            lineStyle: {
              color: "#9B9DA1", // 颜色
              width: 1, // 粗细
            },
          },
        axisLabel :{
             show:true,
              interval:0 ,//设置间隔
              fontSize:12,
              padding:[0,0,0,0],
         },
    },
    yAxis: {
        name:'万吨/月',
        type: 'value',
        max:'20',
        axisTick:{
                     show:true,
                     interval:1,
                },
         axisLine: {
              lineStyle: {
                color: "#9B9DA1", // 颜色
                width: 1, // 粗细
              },
            },
        axisLabel :{
            show:true,
            interval:0 ,//设置间隔
            fontSize:12,
            padding:[0,0,0,0],
                    },
    },
    series: [{
              name:'油品产量变化趋势',
        data: [0, 12, 18, 14, 10, 3, 12,8,0],
        type: 'line',
        symbol: 'none',
        smooth: true,
        areaStyle : {
       normal : {
            color : new echarts.graphic.LinearGradient
                (0,0,0,1,[
          {
       offset : 0,
       color : 'rgba(255, 0, 255, 0.3)'
        },
       {
       offset : 0.8,
       color : 'rgba(255, 0, 255, 0)'
        }
      ], false),
        shadowColor : 'rgba(0, 0, 0, 0.1)',
        shadowBlur : 10
      }
     },
  //控制线条的颜色
  itemStyle : {
   normal : {
    color : 'rgb(255, 0, 255,)',
    borderColor : 'rgba(255, 0, 255,0.2)',
    borderWidth : 3
   }
  },
    }]
      });
  },
MeiZhiYou_Four(name, arry) {
      let echarts = require("echarts");
      let myChart = echarts.init(document.getElementById(name));
      myChart.setOption({
      tooltip: {
          trigger: "item",
          formatter: "{b}: {c}万吨 ({d}%)",
        },
        legend: {
          orient: "horizontal",
          bottom: 30,
          left: "center",
          itemGap: 10,
          data: ["柴油", "液化气", "石脑油"],
          itemWidth: 15,
          itemHeight: 10,
        },
        grid: {
          bottom: 40,
        },
        series: [
          {
            name: "煤制油结构",
            type: "pie",
            radius: ["40%", "55%"],
            center: ["50%", "40%"],
            label: {
              formatter:"{b} \n\n {d}% ",
              padding: [0, -50, 5],
              rich: {
                per: {
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
                value: 3,
                name: "柴油",
              },
              {
                value: 9,
                name: "液化气",
              },
              {
                value: 8,
                name: "石脑油",
              }
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
//煤制油第三栏
MeiZhiYou_Five(name, arry) {
      let echarts = require("echarts");
      let myChart = echarts.init(document.getElementById(name));
      myChart.setOption({
          tooltip: {
              trigger: "axis",
              formatter: '{a} <br/>{b}: {c}%'
          },
                    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月','8月','9月'],
        axisTick:{
                     show:true,
                },
        axisLine: {
            lineStyle: {
              color: "#9B9DA1", // 颜色
              width: 1, // 粗细
            },
          },
        axisLabel :{
             show:true,
              interval:0 ,//设置间隔
              fontSize:12,
              padding:[0,0,0,0],
         },
    },
    yAxis: {
        name:'万吨/月',
        type: 'value',
        max:'20',
        axisTick:{
                     show:true,
                     interval:1,
                },
         axisLine: {
              lineStyle: {
                color: "#9B9DA1", // 颜色
                width: 1, // 粗细
              },
            },
        axisLabel :{
            show:true,
            interval:0 ,//设置间隔
            fontSize:12,
            padding:[0,0,0,0],
                    },
    },
    series: [{
              name:'煤粉月进量分析',
        data: [0, 12, 18, 14, 10, 3, 12,8,0],
        type: 'line',
        symbol: 'none',
        smooth: true,
        areaStyle : {
       normal : {
            color : new echarts.graphic.LinearGradient
                (0,0,0,1,[
          {
       offset : 0,
       color : 'rgba(255, 192, 203, 0.3)'
        },
       {
       offset : 0.8,
       color : 'rgba(255, 192, 203, 0)'
        }
      ], false),
        shadowColor : 'rgba(0, 0, 0, 0.1)',
        shadowBlur : 10
      }
     },
  //控制线条的颜色
  itemStyle : {
   normal : {
    color : 'rgb(220,20,60)',
    borderColor : 'rgba(220,20,60,0.2)',
    borderWidth : 3
   }
  },
    }]
      });
  },
MeiZhiYou_Six(name, arry) {
      let echarts = require("echarts");
      let myChart = echarts.init(document.getElementById(name));
      myChart.setOption({
          tooltip: {
          trigger: "axis",
          formatter: '{a0}{b0}: {c0}吨',
          axisPointer: {
            type: "cross",
            crossStyle: {
              color: "#999",
            },
          },
        },
        // grid: {
        //   height: 160,
        //   bottom: 50,
        // },
        legend: {
          itemWidth: 10,
          itemHeight: 5,
          top: 5,
          right: 30,
          itemGap: 20,
          data: ["单位产品综合能耗","基准值","先进值"],
        },
        xAxis: [
          {
            type: "category",
            data: ["1月","2月","3月","4月","5月","6月","7月","8月","9月"],
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
			name:"吨标煤/吨",
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
            name: "单位产品综合能耗",
            type: "bar",
            barWidth: 10,
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "#63edd4" },
                { offset: 1, color: "rgba(14, 137, 238, 1)" },
              ]),
            },
            data: [4 , 4 , 7 , 17 , 8 , 21 , 23 , 13 , 8],
          },
            {
                name: "基准值",
                type: "line",
                data: [2 , 2 , 2 , 2 , 2 , 2 , 2 , 2 , 2],
                color:"#F91B20",
                lineStyle: {
                    type: "dotted",
                    width: 1,
                },
                smooth: true,
                showSymbol: false
            },
            {
                name: "先进值",
                type: "line",
                showSymbol: false,
                lineStyle: {
                    type: "dotted",
                    width: 1,
                },
                smooth: true,
                color: "#16D9C3",
                data: [18 , 18 , 18 , 18 , 18 , 18 , 18 , 18, 18]

            }
        ],
      });
  },
//煤制气第一栏
MeiZhiQi_One(name, arry) {
      let echarts = require("echarts");
      let myChart = echarts.init(document.getElementById(name));
      myChart.setOption({
         tooltip: {
          trigger: "axis",
          formatter: '{a0}{b0}: {c0}万吨',
        },
        // grid: {
        //   height: 160,
        //   bottom: 50,
        // },
        xAxis: [
          {
            type: "category",
            data: ["1月","2月","3月","4月","5月","6月","7月","8月","9月" ],
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
			name:"万吨 / 月",
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
            name: "粉煤月进量",
            type: "bar",
            barWidth: 10,
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "#63edd4" },
                { offset: 1, color: "rgba(14, 137, 238, 1)" },
              ]),
            },
            data: [4 , 4 , 7 , 17 , 8 , 17 , 20 , 13 , 8],
          }
        ],
      });
  },
MeiZhiQi_Two(name, arry) {
      let echarts = require("echarts");
      let myChart = echarts.init(document.getElementById(name));
      myChart.setOption({
        tooltip: {
          trigger: "axis",
          formatter: '{a}{b}: {c}万吨',
        },
        xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月','8月','9月'],
        axisTick:{
                     show:true,
                },
        axisLine: {
            lineStyle: {
              color: "#9B9DA1", // 颜色
              width: 1, // 粗细
            },
          },
        axisLabel :{
             show:true,
              interval:0 ,//设置间隔
              fontSize:12,
              padding:[0,0,0,0],
         },
    },
    yAxis: {
        name:'万吨/月',
        type: 'value',
        max:'20',
        axisTick:{
                     show:true,
                     interval:1,
                },
         axisLine: {
              lineStyle: {
                color: "#9B9DA1", // 颜色
                width: 1, // 粗细
              },
            },
        axisLabel :{
            show:true,
            interval:0 ,//设置间隔
            fontSize:12,
            padding:[0,0,0,0],
                    },
    },
    series: [{
        name:'水资源用量',
        data: [0, 12, 18, 14, 10, 3, 12,8,0],
        type: 'line',
        symbol: 'none',
        smooth: true,
        areaStyle : {
       normal : {
            color : new echarts.graphic.LinearGradient
                (0,0,0,1,[
          {
       offset : 0,
       color : 'rgba(0, 136, 212, 0.3)'
        },
       {
       offset : 0.8,
       color : 'rgba(0, 136, 212, 0)'
        }
      ], false),
        shadowColor : 'rgba(0, 0, 0, 0.1)',
        shadowBlur : 10
      }
     },
  //控制线条的颜色
  itemStyle : {
   normal : {
    color : 'rgb(0,136,212)',
    borderColor : 'rgba(0,136,212,0.2)',
    borderWidth : 3
   }
  },
    }]
      });
  },
//煤制气第二栏
MeiZhiQi_Three(name, arry) {
      let echarts = require("echarts");
      let myChart = echarts.init(document.getElementById(name));
      myChart.setOption({
         tooltip: {
          trigger: "axis",
             formatter: '{a} <br/>{b}: {c}%',
          axisPointer: {
            type: "cross",
            crossStyle: {
              color: "#999",
            },
          },
        },
        xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月','8月','9月'],
        axisTick:{
                     show:true,
                },
        axisLine: {
            lineStyle: {
              color: "#9B9DA1", // 颜色
              width: 1, // 粗细
            },
          },
        axisLabel :{
             show:true,
              interval:0 ,//设置间隔
              fontSize:12,
              padding:[0,0,0,0],
         },
    },
    yAxis: {
        name:'万吨/月',
        type: 'value',
        max:'20',
        axisTick:{
                     show:true,
                     interval:1,
                },
         axisLine: {
              lineStyle: {
                color: "#9B9DA1", // 颜色
                width: 1, // 粗细
              },
            },
        axisLabel :{
            show:true,
            interval:0 ,//设置间隔
            fontSize:12,
            padding:[0,0,0,0],
                    },
    },
    series: [{
             name:'天然气产量',
        data: [0, 12, 18, 14, 10, 3, 12,8,0],
        type: 'line',
        symbol: 'none',
        smooth: true,
        areaStyle : {
       normal : {
            color : new echarts.graphic.LinearGradient
                (0,0,0,1,[
          {
       offset : 0,
       color : 'rgba(241, 158, 194, 0.3)'
        },
       {
       offset : 0.8,
       color : 'rgba(241, 158, 194, 0)'
        }
      ], false),
        shadowColor : 'rgba(0, 0, 0, 0.1)',
        shadowBlur : 10
      }
     },
  //控制线条的颜色
  itemStyle : {
   normal : {
    color : 'rgb(241,158,194)',
    borderColor : 'rgba(241,158,194,0.2)',
    borderWidth : 3
   }
  },
    }]
      });
  },
MeiZhiQi_Four(name, arry) {
      let echarts = require("echarts");
      let myChart = echarts.init(document.getElementById(name));
      myChart.setOption({
         tooltip: {
          trigger: "axis",
             formatter: '{a} <br/>{b}: {c}%',
        },
        xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月','8月','9月'],
        axisTick:{
                     show:true,
                },
        axisLine: {
            lineStyle: {
              color: "#9B9DA1", // 颜色
              width: 1, // 粗细
            },
          },
        axisLabel :{
             show:true,
              interval:0 ,//设置间隔
              fontSize:12,
              padding:[0,0,0,0],
         },
    },
    yAxis: {
        name:'万吨/月',
        type: 'value',
        max:'20',
        axisTick:{
                     show:true,
                     interval:1,
                },
         axisLine: {
              lineStyle: {
                color: "#9B9DA1", // 颜色
                width: 1, // 粗细
              },
            },
        axisLabel :{
            show:true,
            interval:0 ,//设置间隔
            fontSize:12,
            padding:[0,0,0,0],
                    },
    },
    series: [{
             name:'平均负荷率',
        data: [0, 12, 18, 14, 10, 3, 12,8,0],
        type: 'line',
        symbol: 'none',
        smooth: true,
        areaStyle : {
       normal : {
            color : new echarts.graphic.LinearGradient
                (0,0,0,1,[
          {
       offset : 0,
       color : 'rgba(255, 0, 255, 0.3)'
        },
       {
       offset : 0.8,
       color : 'rgba(255, 0, 255, 0)'
        }
      ], false),
        shadowColor : 'rgba(0, 0, 0, 0.1)',
        shadowBlur : 10
      }
     },
  //控制线条的颜色
  itemStyle : {
   normal : {
    color : 'rgb(231,106,26)',
    borderColor : 'rgba(231,106,26,0.2)',
    borderWidth : 3
   }
  },
    }]
      });
  },
//煤制油第三栏
MeiZhiQi_Five(name, arry) {
      let echarts = require("echarts");
      let myChart = echarts.init(document.getElementById(name));
      myChart.setOption({
       tooltip: {
          trigger: "axis",
          formatter: '{a0}{b0}: {c0}吨',
        },
        // grid: {
        //   height: 160,
        //   bottom: 50,
        // },
        legend: {
          itemWidth: 10,
          itemHeight: 5,
          top: 5,
          right: 30,
          itemGap: 20,
          data: ["单位产品综合能耗","基准值","先进值"],
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
			name:"吨标煤/吨",
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
            name: "单位产品综合能耗",
            type: "bar",
            barWidth: 10,
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "#63edd4" },
                { offset: 1, color: "rgba(14, 137, 238, 1)" },
              ]),
            },
            data: [4 , 4 , 7 , 17 , 8 , 21 , 23 , 13 , 8],
          },
            {
                name: "基准值",
                type: "line",
                data: [2 , 2 , 2 , 2 , 2 , 2 , 2 , 2 , 2],
                color:"#F91B20",
                lineStyle: {
                    type: "dotted",
                    width: 1,
                },
                smooth: true,
                showSymbol: false
            },
            {
                name: "先进值",
                type: "line",
                showSymbol: false,
                lineStyle: {
                    type: "dotted",
                    width: 1,
                },
                smooth: true,
                color: "#16D9C3",
                data: [18 , 18 , 18 , 18 , 18 , 18 , 18 , 18, 18]

            },

        ],
      });
  },
MeiZhiQi_Six(name, arry) {
      let echarts = require("echarts");
      let myChart = echarts.init(document.getElementById(name));
      myChart.setOption({
             tooltip: {
          trigger: "axis",
          formatter: '{a0}{b0}: {c0}吨',
        },
        // grid: {
        //   height: 160,
        //   bottom: 50,
        // },
        legend: {
          itemWidth: 10,
          itemHeight: 5,
          top: 5,
          right: 30,
          itemGap: 20,
          data: ["单位产品原料能耗","基准值","先进值"],
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
			name:"吨标煤/千标立方",
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
            name: "单位产品原料能耗",
            type: "bar",
            barWidth: 10,
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "#63edd4" },
                { offset: 1, color: "rgba(14, 137, 238, 1)" },
              ]),
            },
            data: [4 , 4 , 7 , 17 , 8 , 21 , 23 , 13 , 8],
          },
            {
                name: "基准值",
                type: "line",
                data: [2 , 2 , 2 , 2 , 2 , 2 , 2 , 2 , 2],
                color:"#F91B20",
                lineStyle: {
                    type: "dotted",
                    width: 1,
                },
                smooth: true,
                showSymbol: false,
            },
            {
                name: "先进值",
                type: "line",
                showSymbol: false,
                lineStyle: {
                    type: "dotted",
                    width: 1,
                },
                smooth: true,
                color: "#16D9C3",
                data: [18 , 18 , 18 , 18 , 18 , 18 , 18 , 18, 18]

            }

        ],
      });
  },

//主要按钮
tabButton(id) {
      this.selected = id;
      if (0 == id) {
        this.a = 1;
        this.b = 0;
        this.c = 0;
        this.d = 0;
        this.pie_number = 20
        this.$nextTick(function () {
          this.YuanYou_One("echartsOne");
          this.YuanYou_Three("echartsTen");
        });
      }
      if (1 == id) {
        this.a = 0;
        this.b = 1;
        this.c = 0;
        this.d = 0;
        this.pie_number = 4;
        this.$nextTick(function () {
          this.ChenPinYou_One("echartsEleven");
          this.ChenPinYou_Three("echartsThirteenth");
          this.ChenPinYou_Five("echartsEight");
          this.produce_tc=0;
          this.logoposionleft1 = (this.screenWidth * 0.777) + 'px';
          this.logoposiontop1 = (314.5 * 0.155) + 'px';
          this.logoposionleft2 = (this.screenWidth * 0.75) + 'px';
          this.logoposiontop2 = (314.5 * 0.55) + 'px';
          this.logoposionleft3 = (this.screenWidth * 0.65) + 'px';
          this.logoposiontop3 = (314.5 * 0.5) + 'px';
          this.logoposionleft4 = (this.screenWidth * 0.55) + 'px';
          this.logoposiontop4 = (314.5 * 0.6) + 'px';
          this.logoposionleft5 = (this.screenWidth * 0.3) + 'px';
          this.logoposiontop5 = (314.5 * 0.75) + 'px';
          this.logoposionleft6 = (this.screenWidth * 0.2) + 'px';
          this.logoposiontop6 = (314.5 * 0.73) + 'px';
        });
      }
      if (2 == id) {
        this.a = 0;
        this.b = 0;
        this.c = 1;
        this.d = 0;
        this.$nextTick(function () {
          this.MeiZhiYou_One("echartsFifteen");
          this.MeiZhiYou_Three("echartsSeventeen");
          this.MeiZhiYou_Five("echartsNinteenth");
          this.produce_tc=0;
          this.logoposionleft7 = (this.screenWidth * 0.40) + 'px';
          this.logoposiontop7 = (314.5 * 0.76) + 'px';
          this.logoposionleft8 = (this.screenWidth * 0.37) + 'px';
          this.logoposiontop8 = (314.5 * 0.83) + 'px';
        });
      }
      if (3 == id) {
        this.a = 0;
        this.b = 0;
        this.c = 0;
        this.d = 1;
        this.$nextTick(function () {
          this.MeiZhiQi_One("echartsTone");
          this.MeiZhiQi_Three("echartsTthree");
          this.MeiZhiQi_Five("echartsTfive");
          this.produce_tc=0;
          this.logoposionleft9 = (this.screenWidth * 0.68) + 'px';
          this.logoposiontop9 = (314.5 * 0.58) + 'px';
          this.logoposionleft10 = (this.screenWidth * 0.48) + 'px';
          this.logoposiontop10 = (314.5 * 0.72) + 'px';
        });
      }
    },
/* 第一个页面的点击按钮 */
tabButton_one(id) {
      this.selected_one = id;
      if (0 == id) {
        this.i1 = 1;
        this.i2 = 0;
        this.$nextTick(function () {
          this.YuanYou_One("echartsOne");
          this.a_1 =0;
        });
      };
      if (1 == id) {
        this.i1 = 0;
        this.i2 = 1;
        this.$nextTick(function () {
          this.YuanYou_Two("echartsNine");
          this.pie_number =8;
          this.a_1 =1;
        });
      }
    },
/* 第二个页面的点击按钮 */
tabButton_two(id) {
      this.selected_two = id;
      if (0 == id) {
        this.j1 = 1;
        this.j2 = 0;
        //  document.getElementsByClassName('fontSize_div')[0].style.display="block";
        this.$nextTick(function () {
          this.ChenPinYou_One("echartsEleven");
        });
      };
      if (1 == id) {
        this.j1 = 0;
        this.j2 = 1;
        //  document.getElementsByClassName('fontSize_div')[0].style.display="none";
        this.$nextTick(function () {
          this.ChenPinYou_Two("echartsTwelve");
        });
      }
    },
tabButton_three(id) {
      this.selected_three = id;
      if (0 == id) {
        this.j3 = 1;
        this.j4 = 0;
        this.pie_number = 4;
        this.$nextTick(function () {
          this.ChenPinYou_Three("echartsThirteenth");
        });
      };
      if (1 == id) {
        this.j3 = 0;
        this.j4 = 1;
        this.pie_number = 2;
        this.$nextTick(function () {
          this.ChenPinYou_Four("echartsFourteen");
        });
      };
    },
/* 第三个页面的三个点击按钮 */
//内容里的第一个按钮
tabButton_four(id) {
      this.selected_four = id;
      if (0 == id) {
        this.k1 = 1;
        this.k2 = 0;
        //  document.getElementsByClassName('fontSize_div')[0].style.display="block";
        this.$nextTick(function () {
           this.MeiZhiYou_One("echartsFifteen");
        });
      };
      if (1 == id) {
        this.k1 = 0;
        this.k2 = 1;
        //  document.getElementsByClassName('fontSize_div')[0].style.display="none";
        this.$nextTick(function () {
          this.MeiZhiYou_Two("echartsSixteen");
        });
      }
    },
//内容里的第二个按钮
tabButton_five(id) {
      this.selected_five = id;
      if (0 == id) {
        this.k3 = 1;
        this.k4 = 0;
        this.c_1=0;
        this.$nextTick(function () {
           this.MeiZhiYou_Three("echartsSeventeen");
        });
      };
      if (1 == id) {
        this.k3 = 0;
        this.k4 = 1;
        this.pie_number =20;
        this.c_1=1;
        this.$nextTick(function () {
          this.MeiZhiYou_Four("echartsEighteenth");
        });
      }
    },
//内容里的第三个按钮
tabButton_six(id) {
      this.selected_six = id;
      if (0 == id) {
        this.k5 = 1;
        this.k6 = 0;
        //  document.getElementsByClassName('fontSize_div')[0].style.display="block";
        this.$nextTick(function () {
           this.MeiZhiYou_Five("echartsNinteenth");
        });
      };
      if (1 == id) {
        this.k5 = 0;
        this.k6 = 1;
        //  document.getElementsByClassName('fontSize_div')[0].style.display="none";
        this.$nextTick(function () {
          this.MeiZhiYou_Six("echartsTwentieth");
        });
      }
    },
/* 第四个页面的三个点击按钮 */
tabButton_seven(id) {
      this.selected_seven = id;
      if (0 == id) {
        this.m1 = 1;
        this.m2 = 0;
        //  document.getElementsByClassName('fontSize_div')[0].style.display="block";
        this.$nextTick(function () {
           this.MeiZhiQi_One("echartsTone");
        });
      };
      if (1 == id) {
        this.m1 = 0;
        this.m2 = 1;
        //  document.getElementsByClassName('fontSize_div')[0].style.display="none";
        this.$nextTick(function () {
          this.MeiZhiQi_Two("echartsTtwo");
        });
      }
    },
tabButton_eight(id) {
      this.selected_eight = id;
      if (0 == id) {
        this.m3 = 1;
        this.m4 = 0;
        //  document.getElementsByClassName('fontSize_div')[0].style.display="block";
        this.$nextTick(function () {
           this.MeiZhiQi_Three("echartsTthree");
        });
      };
      if (1 == id) {
        this.m3 = 0;
        this.m4 = 1;
        //  document.getElementsByClassName('fontSize_div')[0].style.display="none";
        this.$nextTick(function () {
          this.MeiZhiQi_Four("echartsTfour");
        });
      }
    },
tabButton_nine(id) {
      this.selected_nine = id;
      if (0 == id) {
        this.m5 = 1;
        this.m6 = 0;
        //  document.getElementsByClassName('fontSize_div')[0].style.display="block";
        this.$nextTick(function () {
           this.MeiZhiQi_Five("echartsTfive");
        });
      };
      if (1 == id) {
        this.m5 = 0;
        this.m6 = 1;
        //  document.getElementsByClassName('fontSize_div')[0].style.display="none";
        this.$nextTick(function () {
          this.MeiZhiQi_Six("echartsTsix");
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
  width: 84.5px;
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
  width: 84.5px;
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
  /* background-image: url(../../assets/img/industryAnalysis/椭圆.png); */
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
  background-color:  rgba(0, 0, 0, 0.3);
  background-image: url(../../assets/img/produce-fx/produce_tc.png) ;
  position: absolute;
  left: 40px;
  top: 80px;
}

.pagefour_tc {
  width: 150px;
  height: 70px;
  background-color:  rgba(0, 0, 0, 0.3);
  background-image: url(../../assets/img/produce-fx/produce_tc.png) ;
  position: absolute;
  left: 40px;
  top: 80px;
}

.pagethree_tc ul li, .pagefour_tc ul li{
  font-size: 8px;
  color: rgba(173, 216, 230);
  height: 18px;
}

.pagethree_tc ul :first-child{
  color: white;
}

.pagefour_tc ul :first-child{
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
.clickbtn{
  width: 13px;
  height: 13px;
  /* background-color: #000000; */
  position: absolute;
 }

/* 主要内容隐藏 */
.content {
  display: none;
}
</style>
