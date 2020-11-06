<template>
  <div style="position: relative; width: 100%; top: 93px; background-color: #dadbdb">
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
			<img id="close" :style="{'left':closeLeft , 'top':'80%'}" src="../../assets/img/YouqiGongying/关闭.png" alt="图片未显示" @click="tanchuangClose()">
		</div>
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
    <!-- 油气供应管理的主要内容 -->
    <div id="confess_content" v-show="a" style="background-color: #dadbdb">
      <img
        class="map"
        src="../../assets/img/YouqiGongying/地图.png"
        alt="图片未显示"
      />
      <div class="Gongying_oil" v-show="produce_tc"><ul>
        <li>{{page_c1}}</li>
        <li>9月供应量 :<span>{{page_c2}}</span>万吨</li>
      </ul></div>
      <!-- this.logoposionleft7 = (this.screenWidth * 0.49) + 'px';
          this.logoposiontop7 = (314.5 *0.71) + 'px'; -->
      <!-- 巴彦淖尔 -->
      <div class="produce_logo" :style="{ left:(this.screenWidth * 0.31) + 'px',top: (314.5 *0.72) + 'px'}">
      <img src="../../assets/img/YouqiGongying/youjing.png" alt="图片未显示"  @click="tanchuangShow(1,listData_one)" >
      </div>
      <div class="produce_logo" :style="{ left:(this.screenWidth * 0.33) + 'px',top: (314.5 *0.73) + 'px' }">
      <img src="../../assets/img/YouqiGongying/youjing.png" alt="图片未显示"  @click="tanchuangShow(1,listData_one)" >
      </div>
      <!-- 乌兰察布 -->
      <div class="produce_logo" :style="{ left:(this.screenWidth * 0.46) + 'px',top: (314.5 *0.65) + 'px'}">
      <img src="../../assets/img/YouqiGongying/youjing.png" alt="图片未显示"  @click="tanchuangShow(2,listData_two)">
      </div>
      <div class="produce_logo" :style="{ left:(this.screenWidth * 0.48) + 'px',top: (314.5 *0.66) + 'px' }">
      <img src="../../assets/img/YouqiGongying/youjing.png" alt="图片未显示"  @click="tanchuangShow(2,listData_two)">
      </div>
      <!-- 锡林郭勒盟 -->
      <div class="produce_logo" :style="{ left:(this.screenWidth * 0.58) + 'px',top: (314.5 *0.54) + 'px' }">
      <img src="../../assets/img/YouqiGongying/youjing.png" alt="图片未显示"  @click="tanchuangShow(3,listData_three)">
      </div>
      <div class="produce_logo" :style="{ left:(this.screenWidth * 0.61) + 'px',top: (314.5 *0.54) + 'px'  }">
      <img src="../../assets/img/YouqiGongying/youjing.png" alt="图片未显示"  @click="tanchuangShow(3,listData_three)">
      </div>
      <div class="produce_logo" :style="{ left:(this.screenWidth * 0.64) + 'px',top: (314.5 *0.54) + 'px' }">
      <img src="../../assets/img/YouqiGongying/youjing.png" alt="图片未显示"  @click="tanchuangShow(3,listData_three)">
      </div>
      <div class="produce_logo" :style="{ left:(this.screenWidth * 0.62) + 'px',top: (314.5 *0.51) + 'px' }">
      <img src="../../assets/img/YouqiGongying/youjing.png" alt="图片未显示"  @click="tanchuangShow(3,listData_three)">
      </div>
      <div class="produce_logo" :style="{ left:(this.screenWidth * 0.65) + 'px',top: (314.5 *0.51) + 'px' }">
      <img src="../../assets/img/YouqiGongying/youjing.png" alt="图片未显示"  @click="tanchuangShow(3,listData_three)">
      </div>
      <div class="produce_logo" :style="{ left:(this.screenWidth * 0.67) + 'px',top: (314.5 *0.525) + 'px' }">
      <img src="../../assets/img/YouqiGongying/youjing.png" alt="图片未显示"  @click="tanchuangShow(3,listData_three)">
      </div>
      <!-- 通辽 -->
      <div class="produce_logo" :style="{ left:(this.screenWidth * 0.78) + 'px',top: (314.5 *0.54) + 'px' }">
      <img src="../../assets/img/YouqiGongying/youjing.png" alt="图片未显示"  @click="tanchuangShow(4,listData_four)">
      </div>
      <div class="produce_logo" :style="{ left:(this.screenWidth * 0.78) + 'px',top: (314.5 *0.62) + 'px' }">
      <img src="../../assets/img/YouqiGongying/youjing.png" alt="图片未显示"  @click="tanchuangShow(4,listData_four)">
      </div>
      <div class="produce_logo" :style="{ left:(this.screenWidth * 0.8) + 'px',top: (314.5 *0.62) + 'px' }">
      <img src="../../assets/img/YouqiGongying/youjing.png" alt="图片未显示"  @click="tanchuangShow(4,listData_four)">
      </div>
      <div class="produce_logo" :style="{ left:(this.screenWidth * 0.78) + 'px',top: (314.5 *0.586) + 'px'  }">
      <img src="../../assets/img/YouqiGongying/youjing.png" alt="图片未显示"  @click="tanchuangShow(4,listData_four)">
      </div>
      <div class="produce_logo" :style="{left:(this.screenWidth * 0.8) + 'px',top: (314.5 *0.56) + 'px' }">
      <img src="../../assets/img/YouqiGongying/youjing.png" alt="图片未显示"  @click="tanchuangShow(4,listData_four)">
      </div>
      <!-- 呼伦贝尔 -->
      <div class="produce_logo" :style="{ left:(this.screenWidth * 0.68) + 'px',top: (314.5 *0.33) + 'px'  }">
      <img src="../../assets/img/YouqiGongying/youjing.png" alt="图片未显示"  @click="tanchuangShow(5,listData_five)">
      </div>
      <div class="produce_logo" :style="{ left:(this.screenWidth * 0.7) + 'px',top: (314.5 *0.34) + 'px'  }">
      <img src="../../assets/img/YouqiGongying/youjing.png" alt="图片未显示"  @click="tanchuangShow(5,listData_five)">
      </div>
      <div class="produce_logo" :style="{ left:(this.screenWidth * 0.7) + 'px',top: (314.5 *0.31) + 'px'  }">
      <img src="../../assets/img/YouqiGongying/youjing.png" alt="图片未显示"  @click="tanchuangShow(5,listData_five)">
      </div>
      <div class="produce_logo" :style="{ left:(this.screenWidth * 0.725) + 'px',top: (314.5 *0.33) + 'px' }">
      <img src="../../assets/img/YouqiGongying/youjing.png" alt="图片未显示"  @click="tanchuangShow(5,listData_five)">
      </div>
      <div class="produce_logo" :style="{ left:(this.screenWidth * 0.725) + 'px',top: (314.5 *0.29) + 'px' }">
      <img src="../../assets/img/YouqiGongying/youjing.png" alt="图片未显示"  @click="tanchuangShow(5,listData_five)">
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
            v-for="(item, index) in tablist_one"
            :key="index"
            @click="tabButton_one(index)"
            v-bind:class="[
              { tab_oil_two: index == selected_one },
              { tab_oil_one: true },
            ]"
            >{{ item }}</span
          >
        </div>
        <!-- <div class="echarts" id="echartsOne"></div> -->
        <div class="echarts" id="echartsOne" v-show="i1"></div>
        <div class="echarts" id="echartsThree" v-show="i2"></div>
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
        <div class="fontSize_div">
          <div class="fontSize">0.66</div>
          <div class="fontSize">亿立方米</div>
        </div>
        <div class="echarts_two" id="echartsTwo" v-show="j1">
          <!-- <img
        class="tuoyuan"
        src="../../assets/img/YouqiGongying/椭圆.png"
        alt="图片未显示"
      /> -->
        </div>
        <div class="echarts" id="echartsFour" v-show="j2"></div>
      </div>

    </div>

    <div id="produce_content" v-show="b">
      <img
        class="map"
        src="../../assets/img/YouqiGongying/地图.png"
        alt="图片未显示"
      />
       <div class="produce_logo" :style="{ left: (this.screenWidth * 0.49) + 'px',top: (314.5 *0.71) + 'px' }">
      <img src="../../assets/img/YouqiGongying/gongchang.png" alt="图片未显示"  @click=tanchuang(1,byneArry_one,produce_tc) >
      </div>
      <div class="produce_tc" v-show="produce_tc"><ul>
        <li>{{page_c1}}</li>
        <li>企业人数：<span>{{page_c2}}</span>人</li>
        <li>9月汽油供应量：<span>{{page_c3}}</span>万吨</li>
        <li>9月柴油供应量：<span>{{page_c4}}</span>万吨</li>
        <li>9月航煤油供应量：<span>{{page_c5}}</span>万吨</li>
        </ul></div>
      <!-- <div class="produce_logo" :style="{ left: logoposionleft8,top: logoposiontop8 }">
      <img src="../../assets/img/YouqiGongying/gongchang.png" alt="图片未显示" >
      </div> -->
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
        <div class="echarts" id="echartsFive" v-show="p_i1"></div>
        <div class="echarts" id="echartsSix" v-show="p_i2"></div>
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
        <div class="fontSize_div">
          <div class="fontSize_one">{{ TwoFont }}</div>
          <div class="fontSize_one">万吨</div>
        </div>
        <div class="echarts" id="echarsSeven" v-show="p_j1"></div>
        <div class="echarts" id="echartsEight" v-show="p_j2"></div>
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
        <div class="fontSize_div_one">
          <div class="fontSize_one">{{ ThreeFont }}</div>
          <div class="fontSize_one">万吨</div>
        </div>
        <div class="echarts" id="echarsNine" v-show="p_g1"></div>
        <div class="echarts" id="echarsTen" v-show="p_g2"></div>
      </div>
    </div>

    <div id="confess_content" v-show="c" style="background-color: #dadbdb">
      <img
        class="map"
        src="../../assets/img/YouqiGongying/地图.png"
        alt="图片未显示"
      />
      <div class="produce_logo" :style="{ left: (this.screenWidth * 0.49) + 'px',top: (314.5 *0.72) + 'px' }">
      <img src="../../assets/img/YouqiGongying/mzy.png" alt="图片未显示"  @click=tanchuang(2,byneArry_two,produce_tc) >
      </div>
      <div class="produce_logo" :style="{ left: (this.screenWidth * 0.51) + 'px',top: (314.5 *0.66) + 'px' }">
      <img src="../../assets/img/YouqiGongying/mzy.png" alt="图片未显示"  @click=tanchuang(3,byneArry_three,produce_tc) >
      </div>
      <div class="produce_tc" v-show="produce_tc"><ul>
        <li>{{page_c1}}</li>
        <li>企业人数：<span>{{page_c2}}</span>人</li>
        <li>9月石脑油供应量：<span>{{page_c3}}</span>万吨</li>
        <li>9月柴油供应量：<span>{{page_c4}}</span>万吨</li>
        <li>9月液化气供应量：<span>{{page_c5}}</span>万吨</li>
        </ul></div>
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
        <!-- <div class="echarts" id="echartsOne"></div> -->
        <div class="echarts" id="echartsEleven" v-show="t_i1"></div>
        <div class="echarts" id="echartsTwelve" v-show="t_i2"></div>
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
            v-for="(item, index) in tablist_seven"
            :key="index"
            @click="tabButton_seven(index)"
            v-bind:class="[
              { tab_oil_two: index == selected_seven },
              { tab_oil_one: true },
            ]"
            >{{ item }}</span
          >
        </div>
        <div class="fontSize_divc">
          <div class="fontSize">0.66</div>
          <div class="fontSize">亿立方米</div>
        </div>
        <div class="echarts" id="echartsThirteen" v-show="t_j1"></div>
        <div class="echarts_two" id="echartsFourteen" v-show="t_j2">
        </div>
      </div>
    </div>

    <div id="confess_content" v-show="d" style="background-color: #dadbdb">
      <img
        class="map"
        src="../../assets/img/YouqiGongying/地图.png"
        alt="图片未显示"
      />
      <div class="produce_logo" :style="{ left: (this.screenWidth * 0.38) + 'px',top: (314.5 *0.78) + 'px' }">
      <img src="../../assets/img/YouqiGongying/mzq.png" alt="图片未显示"  @click=tanchuang(4,byneArry_four,produce_tc) >
      </div>
      <div class="produce_logo" :style="{ left: (this.screenWidth * 0.7) + 'px',top: (314.5 *0.58) + 'px' }">
      <img src="../../assets/img/YouqiGongying/mzq.png" alt="图片未显示"  @click=tanchuang(5,byneArry_five,produce_tc) >
      </div>
      <div class="Gongying_mzq" v-show="produce_tc"><ul>
        <li>{{page_c1}}</li>
        <li>9月天然气供应量：<span>{{page_c2}}</span>万立方米</li>
        <li>累计天然气供应量：<span>{{page_c3}}</span>万立方米</li>
        </ul></div>
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
        <div class="fontSize_divb">
          <div class="fontSize">0.66</div>
          <div class="fontSize">亿立方米</div>
        </div>
        <!-- <div class="echarts" id="echartsOne"></div> -->
        <div class="echarts" id="echartsFifteen" v-show="f_i1"></div>
        <div class="echarts_two" id="echartsSixteen" v-show="f_i2"></div>
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
        <div class="fontSize_diva">
          <div class="fontSize">0.66</div>
          <div class="fontSize">亿立方米</div>
        </div>
        <div class="echarts" id="echartsSeventeen" v-show="f_j1"></div>
        <div class="echarts_two" id="echartsEighteen" v-show="f_j2">
        </div>
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
      logoposionleft7: '',
      logoposiontop7: '',
      tc7:0,
      show: 0, //控制弹窗显示
      closeLeft: 0, //关闭按钮居中
        Show:[],
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
      lll:[{
          name: "乌里雅斯太油田",
          rigongying: "0.21万吨",
          xingzhi: "国营",
          faren: "佟天",
          kejirenyuan: "175人",
          yuangongshu: "2317人",
          shuishou: "75亿元",
          jiage: "1.76亿元",
          gongying:"7.2万吨"
        },],
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
      listData: [],
      tablist: ["原油", "成品油", "煤制油", "煤制气"],
      tablist_one: ["原油供应量趋势分析", "区内区外供应对比分析"],
      tablist_two: ["原油月供应结构", "主要企业占比"],
      tablist_three: ["成品油月供应量趋势分析", "成品油调入量和调出量分析"],
      tablist_four: ["供油对象结构分析", "成品油供应地区分析"],
      tablist_five: ["汽油标号结构", "柴油标号结构"],
      tablist_six: ["煤制油供应量变化趋势分析", "运输方式统计"],
      tablist_seven: ["煤制油供应企业分析", "产品结构分析"],
      tablist_eight: ["煤制气月供应量趋势分析", "产业用途占比"],
      tablist_nine: ["煤制气供应企业分析", "供应方式分析"],
      byneArry_one:['中国石油石化公司','1300','100','890','899'],
      byneArry_two:['神华煤制油','176','1000','895','769'],
      byneArry_three:['伊泰煤制油','367','987','673','543'],
      byneArry_four:['汇能煤制气','1000','800'],
      byneArry_five:['大唐煤制气','978','675'],
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
      produce_tc:0,
      page_c1:'',
      page_c2:'',
      page_c3:'',
      page_c4:'',
      page_c5:'',
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
      //第二个页面的三个按钮
      p_i1: 1,
      p_i2: 0,
      p_j1: 1,
      p_j2: 0,
      p_g1: 1,
      p_g2: 0,
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
            value: 4.25,
            name: "兴安",
          },
          {
            value: 2.83,
            name: "包头",
          },
          {
            value: 4.71,
            name: "通辽",
          },
          {
            value: 1.89,
            name: "呼和浩特",
          },
          {
            value: 4.24,
            name: "鄂尔多斯",
          },
          {
            value: 7.08,
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
            value: 0.1,
            name: "吉祥油田",
          },
          {
            value: 0.11,
            name: "宝力格油田",
          },
          {
            value: 0.09,
            name: "贝尔油田",
          },
          {
            value: 0.15,
            name: "赛汉油田",
          },
          {
            value: 0.14,
            name: "乌兰诺尔油田",
          },
          {
            value: 0.07,
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
    this.YuanYouGongYing_barandline("echartsOne");
    this.drawLine("echartsTwo", this.echarts.data_one);
    this.screenLeft = (this.screenWidth - 343) / 2 + "px";
    //this.drawLine_one('echartsThree')
  },
  methods: {
    tanchuang(a,arry,newproduce){
       if(newproduce){
          this.page_c1 = arry[0];
          this.page_c2 = arry[1];
          this.page_c3 = arry[2];
          this.page_c4 = arry[3];
          this.page_c5 = arry[4];
          if(this.xuan == a){
            this.xuan = a
            this.produce_tc=!newproduce
          }
          this.xuan = a
        }else{
          this.produce_tc=!newproduce
          this.xuan = a
          this.page_c1 = arry[0];
          this.page_c2 = arry[1];
          this.page_c3 = arry[2] ;
          this.page_c4 = arry[3];
          this.page_c5 = arry[4];
        }
    },
    tanchuang7() {
        // this.tc7 = 1;
        this.tc7=!this.tc7
      },
    // 取消图片默认样式
    tanchuangShow(a,b) {
      if(a == 1)
				{
          this.listData = b,
					this.show = 1
					this.$nextTick(function() {
						this.closeLeft = (this.screenWidth - 35) / 2 + 'px'
					})
				}else if(a == 2)
				{
					this.listData = b,
					this.show = 1
					this.$nextTick(function() {
						this.closeLeft = (this.screenWidth - 35) / 2 + 'px'
					})
				}else if(a == 3)
				{
					this.listData = b,
					this.show = 1
					this.$nextTick(function() {
						this.closeLeft = (this.screenWidth - 35) / 2 + 'px'
					})
				}else if(a == 4)
				{
					this.listData = b,
					this.show = 1
					this.$nextTick(function() {
						this.closeLeft = (this.screenWidth - 35) / 2 + 'px'
					})
				}else if(a == 5)
				{
					this.listData = b,
					this.show = 1
					this.$nextTick(function() {
						this.closeLeft = (this.screenWidth - 35) / 2 + 'px'
					})
				}
    },
    tanchuangClose() {
      this.show = 0;
    },
    // 储情分析环形图
    drawLine(name, arry) {
      var echarts = require("echarts");
      var myChart = echarts.init(document.getElementById(name));
      myChart.setOption({
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c}亿立方米 ({d}%)",
        },
        legend: {
          orient: "horizontal",
          bottom: 10,
          left: "center",
          itemGap: 10,
          data: [
            "吉祥油田",
            "宝力格油田",
            "贝尔油田",
            "赛汉油田",
            "乌兰诺尔油田",
            "科尔沁油田",
          ],
          itemWidth: 15,
          itemHeight: 10,
        },
        // grid: {
        //   bottom: 40,
        // },
        series: [
          {
            name: "原油月供应结构",
            type: "pie",
            radius: ["40%", "55%"],
            center: ["50%", "40%"],
            label: {
              formatter: "{b|{b}} \n\n{per|{d}%}",
              padding: [0, -50],
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
            data: arry,
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
    drawLine_one(name, arry) {
      let echarts = require("echarts");
      let myChart = echarts.init(document.getElementById(name));
      myChart.setOption({
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
          },
          formatter: function (params) {
            var tar;
            if (params[1].value !== "-") {
              tar = params[1];
            } else {
              tar = params[0];
            }
            return tar.name + "<br/>" + tar.seriesName + " : " + tar.value;
          },
        },
        // legend: {
        //     data: ['支出', '收入']
        // },
        grid: {
          left: "3%",
          right: "5%",
          bottom: "10%",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          splitLine: {
            show: false,
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
        },
        yAxis: {
          name: "万吨",
          min: 0,
          max: 1000,
          interval: 250,
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
            name: "辅助",
            type: "bar",
            stack: "总量",
            barWidth: 10,
            itemStyle: {
              barBorderColor: "rgba(0,0,0,0)",
              color: "rgba(0,0,0,0)",
            },
            emphasis: {
              itemStyle: {
                barBorderColor: "rgba(0,0,0,0)",
                color: "rgba(0,0,0,0)",
              },
            },
            data: arry[0],
          },
          {
            name: "收入",
            type: "bar",
            stack: "总量",
            barWidth: 10,
            itemStyle: {
              barBorderRadius: 30,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "#7497FF",
                },
                {
                  offset: 0,
                  color: "#74B2FF",
                },
              ]),
            },
            label: {
              show: true,
              position: "top",
            },
            data: arry[1],
          },
          {
            name: "支出",
            type: "bar",
            stack: "总量",
            barWidth: 10,
            itemStyle: {
              barBorderRadius: 30,
              color: "#FF5140",
            },
            label: {
              show: true,
              position: "bottom",
            },
            data: arry[2],
          },
        ],
      });
    },
    drawPie(name, arry) {
      let echarts = require("echarts");
      let myChart = echarts.init(document.getElementById(name));
      myChart.setOption({
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)",
        },
        legend: {
          orient: "vertical",
          bottom: "center",
          right: 30,
          itemGap: 30,
          data: ["煤油", "汽油", "柴油"],
          itemWidth: 15,
          itemHeight: 10,
          textStyle: {
            color: "#9FA0A5",
            fontSize: 12,
          },
        },
        series: [
          {
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
            data: [
              {
                value: 40,
                name: "煤油",
              },
              {
                value: 20,
                name: "汽油",
              },
              {
                value: 40,
                name: "柴油",
              },
            ],
            color: ["#96F0F2", "#14DBA0", "#FF9A13"],
          },
        ],
      });
    },
    drawPie_one(name, arry) {
      let echarts = require("echarts");
      let myChart = echarts.init(document.getElementById(name));
      myChart.setOption({
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)",
        },
        legend: {
          orient: "vertical",
          bottom: "center",
          right: 30,
          itemGap: 30,
          data: ["中石油", "中石化"],
          itemWidth: 15,
          itemHeight: 10,
        },
        series: [
          {
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
            data: [
              {
                value: 23,
                name: "中石化",
              },
              {
                value: 77,
                name: "中石油",
              },
            ],
            color: ["#96F0F2", "#97C5FF"],
          },
        ],
      });
    },
    //原油供应量趋势分析
    YuanYouGongYing_barandline(name, arry) {
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
        grid: {
          left: 50,
          height: 160,
          bottom: 50,
        },
        legend: {
          itemWidth: 14,
          itemHeight: 2,
          top: 0,
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
            name: "原油月产量",
            type: "bar",
            barWidth: 8,
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "#63edd4" },
                { offset: 0.7, color: "#4569FF" },
              ]),
            },
            data: [4, 4, 7, 17, 8, 21, 23, 13, 8],
          },
          {
            name: "同比变化",
            type: "line",
            showSymbol: false,
            lineStyle: {
              type: "dotted",
              width: 1,
            },
            smooth: true,
            color: "red",
            data: [12, 14, 16, 21, 20.5, 22, 24, 20, 17.5],
          },
        ],
      });
    },
    //区内区外供应对比分析
    QuNeiQuwaiGingYingDuiBi_twobar(name, arry) {
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
        grid: {
          height: 160,
          bottom: 50,
        },
        legend: {
          itemWidth: 14,
          itemHeight: 2,
          top: 0,
          right: "center",
          itemGap: 20,
          data: ["区内供应量", "区外供应量"],
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
            max: 20,
            interval: 2,
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
            name: "区内供应量",
            type: "bar",
            barWidth: 4,
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "#44c2fd" },
                { offset: 1, color: "#5f59f7" },
              ]),
            },
            data: [3, 3.2, 5.1, 12.2, 5.8, 14.3, 16.3, 9, 5.2],
          },
          {
            name: "区外供应量",
            type: "bar",
            barWidth: 4,
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "#ffc700" },
                { offset: 1, color: "#ff9200" },
              ]),
            },
            data: [2, 2.2, 4.1, 11.2, 4.8, 13.3, 15.3, 8, 4.2],
          },
        ],
      });
    },
    //主要企业占比
    ZhuYaoQiYeZhanBi_pie(name, arry) {
      let echarts = require("echarts");
      let myChart = echarts.init(document.getElementById(name));
      myChart.setOption({
        tooltip: {
          trigger: "item",
          formatter: "{b}： <br/>{c} 吨",
        },
        series: [
          {
            type: "pie",
            radius: ["0%", "50%"],
            labelLine: {
              normal: {
                length: 20, //设置延长线的长度
                length2: 30, //设置第二段延长线的长
                lineStyle: {
                  width: 1,
                  color: "#53E5CF", // 改变标示线的颜色
                },
              },
            },
            label: {
              normal: {
                formatter: "{b} \n\n {d}% ",
                padding: [0, -30],
                textStyle: {
                  color: "#C4C4C4",
                  fontSize: 12, // 改变标示文字的颜色
                },
              },
            },

            data: [
              { value: 77, name: "中石油" },

              { value: 23, name: "中石化" },
            ],
            color: ["#01A3F4", "#53E5CF"],
          },
        ],
      });
    },
    //成品油月供应量趋势分析
    ChengPinYouYueGongYing_threebar(name, arry) {
      let echarts = require("echarts");
      let myChart = echarts.init(document.getElementById(name));
      myChart.setOption({
        tooltip: {
          trigger: "axis",
            formatter(params) {
                return params[0].name + '</br>' + params[0].seriesName + ':' + params[0].value + '万吨' + '</br>' +
                    params[1].seriesName + ':' +
                    params[1].value + '万吨'+ '</br>' +
                    params[2].seriesName + ':' +
                    params[2].value + '万吨'
            }
        },
        grid: {
          height: 160,
          bottom: 50,
        },
        legend: {
          itemWidth: 14,
          itemHeight: 2,
          top: 0,
          right: "center",
          itemGap: 20,
          data: ["汽油", "柴油", "航煤"],
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
            interval: 2,
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
            name: "汽油",
            type: "bar",
            barWidth: 3,
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "#44c2fd" },
                { offset: 1, color: "#5f59f7" },
              ]),
            },
            data: [3, 3.2, 5.1, 12.2, 5.8, 14.3, 16.3, 9, 5.2],
          },
          {
            name: "柴油",
            type: "bar",
            barWidth: 3,
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "#ffc700" },
                { offset: 1, color: "#ff9200" },
              ]),
            },
            data: [2, 2.2, 4.1, 11.2, 4.8, 13.3, 15.3, 8, 4.2],
          },
          {
            name: "航煤",
            type: "bar",
            barWidth: 3,
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "#81e9e6" },
                { offset: 1, color: "#6592fd" },
              ]),
            },
            data: [2.5, 2.7, 4.6, 11.7, 5.3, 13.8, 15.8, 8.5, 4.7],
          },
        ],
      });
    },
    //成品油剖调入调出量分析
    ChengPinYouDiaoRuLiangDiaoChuLiang_barandline(name, arry) {
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
          height: 160,
          bottom: 50,
        },
        legend: {
          itemWidth: 14,
          itemHeight: 2,
          top: 0,
          right: 30,
          itemGap: 20,
          data: ["调入量", "调出量"],
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
            name: "调入量",
            type: "bar",
            barWidth: 10,
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "#63edd4" },
                { offset: 1, color: "rgba(14, 137, 238, 1)" },
              ]),
            },
            data: [4, 4, 7, 17, 8, 21, 23, 13, 8],
          },
          {
            name: "调出量",
            type: "line",
            showSymbol: false,
            lineStyle: {
              type: "dotted",
              width: 2,
            },
            smooth: true,
            color: "red",
            data: [12, 14, 16, 21, 20.5, 22, 24, 20, 17.5],
          },
        ],
      });
    },
    //供油对象结构分析饼图
    GongYouDuiXiangJieGouFenXi_pie(name, arry) {
      let echarts = require("echarts");
      let myChart = echarts.init(document.getElementById(name));
      myChart.setOption({
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c}万吨 ({d}%)",
        },
        legend: {
          orient: "horizontal",
          bottom: 40,
          left: "center",
          itemGap: 10,
          data: ["交通", "工业", "农业", "商业"],
          itemWidth: 10,
          itemHeight: 5,
          textStyle: {
            color: "#9FA0A5"
          },
        },
        // grid: {
        //   bottom: 90,
        // },
        series: [
          {
            name: "供油对象结构分析",
            type: "pie",
            radius: ["30%", "55%"],
            center: ["50%", "35%"],
            label: {
              formatter: "{per|{d}%\n}",
              padding: [0, -40, 5],
              rich: {
                per: {
                  fontSize: 10,
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
                value: 14.3,
                name: "交通",
              },
              {
                value: 4.7,
                name: "工业",
              },
              {
                value: 8,
                name: "农业",
              },
              {
                value: 8,
                name: "商业",
              },
            ],
            color: ["#FF6060", "#15E9EC", "#FFD350", "#01A6FF"],
          },
        ],
      });
    },
    //成品油供应地区分析
    ChengPinYouGongYingDiQuFenXi_pie(name, arry) {
      let echarts = require("echarts");
      let myChart = echarts.init(document.getElementById(name));
      myChart.setOption({
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c}万吨 ({d}%)",
        },
        legend: {
          orient: "horizontal",
          bottom: 40,
          left: "center",
          itemGap: 5,
          data: ["兴安", "包头", "通辽", "呼和浩特", "鄂尔多斯", "乌海"],
          textStyle: {
            color: "#9FA0A5"
          },
          itemWidth: 12,
          itemHeight: 4,
        },
        // grid: {
        //   bottom: 1000,
        // },
        series: [
          {
            name: "成品油供应地区分析",
            type: "pie",
            radius: ["30%", "50%"],
            center: ["50%", "35%"],
            label: {
              formatter: " {per|{d}%} \n\n {b|{b}}",
              padding: [0, -30],
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
              length: 5,
              length2: 50,
            },
            data: arry,
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
    //汽油标号结构
    QiYouBiaoHaoJieGou_pie(name, arry) {
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
          data: ["89#汽油", "92#汽油", "95#汽油"],
          itemWidth: 15,
          itemHeight: 10,
        },
        grid: {
          bottom: 40,
        },
        series: [
          {
            name: "汽油标号结构",
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
            data: [
              {
                value: 12,
                name: "89#汽油",
              },
              {
                value: 2.7,
                name: "92#汽油",
              },
              {
                value: 5.3,
                name: "95#汽油",
              },
            ],
            color: ["#15E9EC", "#FFD350", "#01A6FF"],
          },
        ],
      });
    },
    //柴油标号结构
    ChaiYouBiaoHaoJieGou_pie(name, arry) {
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
          data: ["89#柴油", "92#柴油", "95#柴油"],
          itemWidth: 15,
          itemHeight: 10,
        },
        grid: {
          bottom: 40,
        },
        series: [
          {
            name: "柴油标号结构",
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
            data: [
              {
                value: 6,
                name: "89#柴油",
              },
              {
                value: 1.3,
                name: "92#柴油",
              },
              {
                value: 2.7,
                name: "95#柴油",
              },
            ],
            color: ["#15E9EC", "#FFD350", "#01A6FF"],
          },
        ],
      });
    },
    //煤制油供应量变化趋势分析
    MeiZhiYouGongYingLiangBianHuaQuShiFenXi_barandline(name, arry) {
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
        grid: {
          height: 160,
          bottom: 50,
        },
        legend: {
          itemWidth: 10,
          itemHeight: 5,
          top: 0,
          right: 30,
          itemGap: 20,
          data: ["煤制油月供应量", "同比变化"],
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
            name: "煤制油月供应量",
            type: "bar",
            barWidth: 10,
            itemStyle: {
              barBorderRadius: 3,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "#FFB626" },
                { offset: 1, color: "#FF7826" },
              ]),
            },
            data: [15.5, 21, 19, 8, 24, 22, 22.1, 17, 21, 19.5, 34, 13],
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
                color: "#F92D32",
                data: [17, 19, 22, 21, 20.5, 20.1, 19.8, 20.1, 22.5, 24.5, 22, 17],
            },
        ],
      });
    },
    //运输方式统计分析
    YunShuFnagShiTongJiFenXi_twobar(name, arry) {
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
          height: 160,
          bottom: 50,
        },
        legend: {
          itemWidth: 10,
          itemHeight: 5,
          top: 0,
          right: 30,
          itemGap: 20,
          data: ["汽运", "管输"],
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
            name:"万吨/月",
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
            name: "汽运",
            type: "bar",
            barWidth: 10,
            itemStyle: {
              barBorderRadius: 3,
              color: "#74A5FF",
            },
            data: [29, 19, 18, 14.5, 25.7, 22.5, 18, 22, 29, 19, 17, 12],
          },
          {
            name: "管输",
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
    //煤制油供应企业分析
    MeiZhiYouGongYingQiYeFenXi_pie(name, arry) {
      let echarts = require("echarts");
      let myChart = echarts.init(document.getElementById(name));
      myChart.setOption({
        tooltip: {
          trigger: "item",
          formatter: "{b}： <br/>{c} 吨",
        },
        series: [
          {
            type: "pie",
            radius: ["0%", "50%"],
            labelLine: {
              normal: {
                length: 20, //设置延长线的长度
                length2: 30, //设置第二段延长线的长
                lineStyle: {
                  width: 1,
                  color: "#53E5CF", // 改变标示线的颜色
                },
              },
            },
            label: {
              normal: {
                formatter: "{b} \n\n {d}% ",
                padding: [0, -30],
                textStyle: {
                  color: "#C4C4C4",
                  fontSize: 12, // 改变标示文字的颜色
                },
              },
            },

            data: [
              { value: 77, name: "中石油" },

              { value: 23, name: "中石化" },
            ],
            color: ["#01A3F4", "#53E5CF"],
          },
        ],
      });
    },
    //产品结构分析
    ChanPinJieGouFenXi_pie(name, arry) {
      let echarts = require("echarts");
      let myChart = echarts.init(document.getElementById(name));
      myChart.setOption({
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c}亿立方米({d}%)",
        },
        legend: {
          orient: "horizontal",
          bottom: 20,
          left: "center",
          itemGap: 10,
          data: ["液化气", "石油", "柴油"],
          itemWidth: 15,
          itemHeight: 10,
        },
        grid: {
          bottom: 40,
        },
        series: [
          {
            name: "产品结构分析",
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
                name: "液化气",
              },
              {
                value: 0.12,
                name: "石油",
              },
              {
                value: 0.27,
                name: "柴油",
              },
            ],
            color: ["#64B9EC", "#13D99E", "#ED6046"],
          },
        ],
      });
    },
    //煤制气供应量变化趋势分析
    MeiZhiQiGongYingLiangBianHuaQuShiFenXi_barandline(name, arry) {
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
          height: 160,
          bottom: 50,
        },
        legend: {
          itemWidth: 10,
          itemHeight: 5,
          top: 0,
          right: 30,
          itemGap: 20,
          data: ["煤制气月供应量", "同比变化"],
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
            name: "煤制气月供应量",
            type: "bar",
            barWidth: 10,
            itemStyle: {
              barBorderRadius: 3,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "#FFB626" },
                { offset: 1, color: "#FF7826" },
              ]),
            },
            data: [15.5, 21, 19, 8, 24, 22, 22.1, 17, 21, 19.5, 34, 13],
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
                color: "#F92D32",
                data: [17, 19, 22, 21, 20.5, 20.1, 19.8, 20.1, 22.5, 24.5, 22, 17],
            }
        ],
      });
    },
    //煤制气供应企业分析
    MeiZhiQiGongYingQiYeFenXi_twobar(name, arry) {
      let echarts = require("echarts");
      let myChart = echarts.init(document.getElementById(name));
      myChart.setOption({
        tooltip: {
          trigger: "axis",
            formatter(params) {
                return params[0].name + '</br>' + params[0].seriesName + ':' + params[0].value + '万立方米' + '</br>' +
                    params[1].seriesName + ':' +
                    params[1].value + '万立方米'
            }
        },
        grid: {
          height: 160,
          bottom: 50,
        },
        legend: {
          itemWidth: 10,
          itemHeight: 5,
          top: 0,
          right: 30,
          itemGap: 20,
          data: ["大唐", "汇能"],
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
            name:"万立方米/ 月",
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
            name: "大唐",
            type: "bar",
            barWidth: 10,
            itemStyle: {
              barBorderRadius: 3,
              color: "#74A5FF",
            },
            data: [29, 19, 18, 14.5, 25.7, 22.5, 18, 22, 29, 19, 17, 12],
          },
          {
            name: "汇能",
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
    //产业用途占比
    ChanYeYongTuZhanBi_pie(name, arry) {
      let echarts = require("echarts");
      let myChart = echarts.init(document.getElementById(name));
      myChart.setOption({
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c}亿立方米 ({d}%)",
        },
        legend: {
          orient: "horizontal",
          bottom: 20,
          left: "center",
          itemGap: 10,
          data: ["LNG", "城市燃气", "交通"],
          itemWidth: 15,
          itemHeight: 10,
        },
        grid: {
          bottom: 40,
        },
        series: [
          {
            name: "产业用途占比",
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
                name: "LNG",
              },
              {
                value: 0.12,
                name: "城市燃气",
              },
              {
                value: 0.27,
                name: "交通",
              },
            ],
            color: ["#64B9EC", "#13D99E", "#ED6046"],
          },
        ],
      });
    },
    //供应方式分析
    GongYingFangShiFenXi_pie(name, arry) {
      let echarts = require("echarts");
      let myChart = echarts.init(document.getElementById(name));
      myChart.setOption({
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c}亿立方米 ({d}%)",
        },
        legend: {
          orient: "horizontal",
          bottom: 20,
          left: "center",
          itemGap: 10,
          data: ["LNG", "CNG", "管道气"],
          itemWidth: 15,
          itemHeight: 10,
        },
        grid: {
          bottom: 40,
        },
        series: [
          {
            name: "供应方式分析",
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
                name: "LNG",
              },
              {
                value: 0.12,
                name: "CNG",
              },
              {
                value: 0.27,
                name: "管道气",
              },
            ],
            color: ["#64B9EC", "#13D99E", "#ED6046"],
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
        this.d = 0;
       //第二个页面
       this.selected_three = 0;
       this.selected_four = 0;
       this.selected_five = 0;
        this.p_i1 = 1;
        this.p_i2 = 0;
        this.p_j1 = 1;
        this.p_j2 = 0;
        this.p_g1 = 1;
        this.p_g2 = 0;
        //第三个页面
        this.selected_six = 0;
       this.selected_seven = 0;
       this.t_i1 = 1;
        this.t_i2 = 0;
        this.t_j1 = 1;
        this.t_j2 = 0;
        //第四个页面
        this.selected_eight = 0;
       this.selected_nine = 0;
       this.f_i1 = 1;
        this.f_i2 = 0;
        this.f_j1 = 1;
        this.f_j2 = 0;
        this.$nextTick(function () {
           this.produce_tc =0 ;
          this.YuanYouGongYing_barandline("echartsOne");
          this.drawLine("echartsTwo", this.echarts.data_one);
          this.logoleft_one = (this.screenWidth * 0.49) + 'px';
          this.logotop_one = (314.5 *0.71) + 'px';
        });
      }
      if (1 == id) {
        this.a = 0;
        this.b = 1;
        this.c = 0;
        this.d = 0;

        this.TwoFont = 35;
        this.ThreeFont = 20;
        //第一个页面
        this.selected_one = 0;
       this.selected_two = 0;
       this.p_i1 = 1;
        this.p_i2 = 0;
        this.p_j1 = 1;
        this.p_j2 = 0;
        //第三个页面
        this.selected_six = 0;
       this.selected_seven = 0;
       this.t_i1 = 1;
        this.t_i2 = 0;
        this.t_j1 = 1;
        this.t_j2 = 0;
        //第四个页面
        this.selected_eight = 0;
       this.selected_nine = 0;
       this.f_i1 = 1;
        this.f_i2 = 0;
        this.f_j1 = 1;
        this.f_j2 = 0;
        this.$nextTick(function () {
           this.produce_tc =0 ;
          this.ChengPinYouYueGongYing_threebar("echartsFive");
          this.GongYouDuiXiangJieGouFenXi_pie("echarsSeven");
          this.QiYouBiaoHaoJieGou_pie("echarsNine");
          // this.logoposionleft7 = (this.screenWidth * 0.49) + 'px';
          // this.logoposiontop7 = (314.5 *0.71) + 'px';
        });
      }
      if (2 == id) {
        this.a = 0;
        this.b = 0;
        this.c = 1;
        this.d = 0;
        //第一个页面
        this.selected_one = 0;
       this.selected_two = 0;
       this.p_i1 = 1;
        this.p_i2 = 0;
        this.p_j1 = 1;
        this.p_j2 = 0;
         //第二个页面
       this.selected_three = 0;
       this.selected_four = 0;
       this.selected_five = 0;
        this.p_i1 = 1;
        this.p_i2 = 0;
        this.p_j1 = 1;
        this.p_j2 = 0;
        this.p_g1 = 1;
        this.p_g2 = 0;
         //第四个页面
        this.selected_eight = 0;
       this.selected_nine = 0;
       this.f_i1 = 1;
        this.f_i2 = 0;
        this.f_j1 = 1;
        this.f_j2 = 0;
        this.$nextTick(function () {
           this.produce_tc =0 ;
          document.getElementsByClassName("fontSize_divc")[0].style.display =
          "none";
          this.MeiZhiYouGongYingLiangBianHuaQuShiFenXi_barandline("echartsEleven");
          this.MeiZhiYouGongYingQiYeFenXi_pie("echartsThirteen");
        });
      }
      if (3 == id) {
        this.a = 0;
        this.b = 0;
        this.c = 0;
        this.d = 1;
        //第一个页面
        this.selected_one = 0;
       this.selected_two = 0;
       this.p_i1 = 1;
        this.p_i2 = 0;
        this.p_j1 = 1;
        this.p_j2 = 0;
         //第二个页面
       this.selected_three = 0;
       this.selected_four = 0;
       this.selected_five = 0;
        this.p_i1 = 1;
        this.p_i2 = 0;
        this.p_j1 = 1;
        this.p_j2 = 0;
        this.p_g1 = 1;
        this.p_g2 = 0;
        //第三个页面
        this.selected_six = 0;
       this.selected_seven = 0;
       this.t_i1 = 1;
        this.t_i2 = 0;
        this.t_j1 = 1;
        this.t_j2 = 0;
        this.$nextTick(function () {
           this.produce_tc =0 ;
          document.getElementsByClassName("fontSize_divb")[0].style.display =
          "none";
          document.getElementsByClassName("fontSize_diva")[0].style.display =
          "none";
          this.MeiZhiQiGongYingLiangBianHuaQuShiFenXi_barandline("echartsFifteen");
          this.MeiZhiQiGongYingQiYeFenXi_twobar("echartsSeventeen");
        });
      }
    },

    /* 第一个页面的点击按钮 */
    //内容里的第一个按钮
    tabButton_one(id) {
      this.selected_one = id;
      if (0 == id) {
        this.i1 = 1;
        this.i2 = 0;
        this.$nextTick(function () {
          this.YuanYouGongYing_barandline("echartsOne");
        });
      }
      if (1 == id) {
        this.i1 = 0;
        this.i2 = 1;
        this.$nextTick(function () {
          this.QuNeiQuwaiGingYingDuiBi_twobar("echartsThree");
        });
      }
    },
    //内容里的第二个按钮
    tabButton_two(id) {
      this.selected_two = id;
      if (0 == id) {
        this.j1 = 1;
        this.j2 = 0;
        document.getElementsByClassName("fontSize_div")[0].style.display =
          "block";
        this.$nextTick(function () {
          this.drawLine("echartsTwo", this.echarts.data_one);
        });
      }
      if (1 == id) {
        this.j1 = 0;
        this.j2 = 1;
        document.getElementsByClassName("fontSize_div")[0].style.display =
          "none";
        this.$nextTick(function () {
          this.ZhuYaoQiYeZhanBi_pie("echartsFour");
        });
      }
    },
    /* 第二个页面的三个点击按钮 */
    //内容里的第一个按钮
    tabButton_three(id) {
      this.selected_three = id;
      if (0 == id) {
        this.p_i1 = 1;
        this.p_i2 = 0;
        this.$nextTick(function () {
          this.ChengPinYouYueGongYing_threebar("echartsFive");
        });
      }
      if (1 == id) {
        this.p_i1 = 0;
        this.p_i2 = 1;
        this.$nextTick(function () {
          this.ChengPinYouDiaoRuLiangDiaoChuLiang_barandline("echartsSix");
        });
      }
    },
    //内容里的第二个按钮
    tabButton_four(id) {
      this.selected_four = id;
      if (0 == id) {
        this.p_j1 = 1;
        this.p_j2 = 0;
        this.TwoFont = 35;
        this.$nextTick(function () {
          this.GongYouDuiXiangJieGouFenXi_pie("echarsSeven");
        });
      }
      if (1 == id) {
        this.p_j1 = 0;
        this.p_j2 = 1;
        this.TwoFont = 25;
        this.$nextTick(function () {
          this.ChengPinYouGongYingDiQuFenXi_pie(
            "echartsEight",
            this.echarts.data_three
          );
        });
      }
    },
    //内容里的第三个按钮
    tabButton_five(id) {
      this.selected_five = id;
      if (0 == id) {
        this.p_g1 = 1;
        this.p_g2 = 0;
        this.ThreeFont = 20;
        this.$nextTick(function () {
          this.QiYouBiaoHaoJieGou_pie("echarsNine");
        });
      }
      if (1 == id) {
        this.p_g1 = 0;
        this.p_g2 = 1;
        this.ThreeFont = 10;
        this.$nextTick(function () {
          this.ChaiYouBiaoHaoJieGou_pie("echarsTen");
        });
      }
    },
    /* 第三个页面的点击按钮 */
    //内容里的第一个按钮
    tabButton_six(id) {
      this.selected_six = id;
      if (0 == id) {
        this.t_i1 = 1;
        this.t_i2 = 0;
        this.$nextTick(function () {
          this.MeiZhiYouGongYingLiangBianHuaQuShiFenXi_barandline(
            "echartsEleven"
          );
        });
      }
      if (1 == id) {
        this.t_i1 = 0;
        this.t_i2 = 1;
        this.$nextTick(function () {
          this.YunShuFnagShiTongJiFenXi_twobar("echartsTwelve");
        });
      }
    },
    //内容里的第二个按钮
    tabButton_seven(id) {
      this.selected_seven = id;
      if (0 == id) {
        this.t_j1 = 1;
        this.t_j2 = 0;
        document.getElementsByClassName("fontSize_divc")[0].style.display =
          "none";
        this.$nextTick(function () {
          this.MeiZhiYouGongYingQiYeFenXi_pie("echartsThirteen");
        });
      }
      if (1 == id) {
        this.t_j1 = 0;
        this.t_j2 = 1;
        document.getElementsByClassName("fontSize_divc")[0].style.display =
          "block";
        this.$nextTick(function () {
          this.ChanPinJieGouFenXi_pie("echartsFourteen");
        });
      }
    },
    /* 第四个页面的点击按钮 */
    //内容里的第一个按钮
    tabButton_eight(id) {
      this.selected_eight = id;
      if (0 == id) {
        this.f_i1 = 1;
        this.f_i2 = 0;
        document.getElementsByClassName("fontSize_divb")[0].style.display =
          "none";
        this.$nextTick(function () {
          this.MeiZhiQiGongYingLiangBianHuaQuShiFenXi_barandline(
            "echartsFifteen"
          );
        });
      }
      if (1 == id) {
        this.f_i1 = 0;
        this.f_i2 = 1;
        document.getElementsByClassName("fontSize_divb")[0].style.display =
          "block";
        this.$nextTick(function () {
          this.ChanYeYongTuZhanBi_pie("echartsSixteen");
        });
      }
    },
    //内容里的第二个按钮
    tabButton_nine(id) {
      this.selected_nine = id;
      if (0 == id) {
        this.f_j1 = 1;
        this.f_j2 = 0;
         document.getElementsByClassName("fontSize_diva")[0].style.display =
          "none";
        this.$nextTick(function () {
          this.MeiZhiQiGongYingQiYeFenXi_twobar("echartsSeventeen");
        });
      }
      if (1 == id) {
        this.f_j1 = 0;
        this.f_j2 = 1;
        document.getElementsByClassName("fontSize_diva")[0].style.display =
          "block";
        this.$nextTick(function () {
          this.GongYingFangShiFenXi_pie("echartsEighteen");
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
  width: 81px;
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

.tuoyuan{
  width: 100%;
  height: 314.5px;
}
.Gongying_oil {
  width: 153px;
  height: 47px;
  background-color:  rgba(37, 54, 104, 0.6);
  /* background-image: url(../../assets/img/YouqiGongying/yuanyou.png) ; */
  position: absolute;
  left: 50px;
  top: 100px;
}

.Gongying_oil ul li{
  font-size: 10px;
  color:#C9D6FD;
  padding:6px;
  height:18px;
}

.Gongying_oil ul :first-child{
  font-weight: bold;
  font-size: 15px;
  padding:4px;
  color:white;
}

.Gongying_oil ul span{
  font-size: 13px;
  padding:4px;
  height:18px;
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
  background-color:  rgba(37, 54, 104, 0.6);
  /* background-image: url(../../assets/img/YouqiGongying/produce_tc.png) ; */
  position: absolute;
  left:40px;
  top: 70px;
}

.Gongying_mzq ul li{
   font-size: 10px;
  color:#C9D6FD;
  padding:6px;
  height:18px;
}
.Gongying_mzq ul :first-child{
  font-weight: bold;
  font-size: 15px;
  padding:4px;
  color:white;
}

.Gongying_mzq ul span{
  font-size: 13px;
  padding:4px;
  height:18px;
}


.produce_tc {
  width: 180px;
  height: 100px;
  background-color:  rgba(37, 54, 104, 0.6);
  /* background-image: url(../../assets/img/YouqiGongying/produce_tc.png) ; */
  position: absolute;
  left:40px;
  top: 70px;
}

.produce_tc ul li{
   font-size: 10px;
  color:#C9D6FD;
  padding:6px;
  height:18px;
}
.produce_tc ul :first-child{
  font-weight: bold;
  font-size: 15px;
  padding:4px;
  color:white;
}

.produce_tc ul span{
  font-size: 13px;
  padding:4px;
  height:18px;
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
  margin: 15px auto;
  background-repeat: no-repeat;
  background-position: 50% 37%;
  background-size: 65px 65px;
}

.echarts_two {
  width: 100%;
  height: 242px;
  margin: 15px auto;
  background-image: url(../../assets/img/YouqiGongying/椭圆.png);
  background-repeat: no-repeat;
  background-position: 50% 37%;
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
  height: 242px;
  text-align: center;
}

.fontSize_diva {
  position: absolute;
  width: 100%;
  height: 242px;
  text-align: center;
}
.fontSize_divb {
  position: absolute;
  width: 100%;
  height: 242px;
  text-align: center;
}
.fontSize_divc {
  position: absolute;
  width: 100%;
  height: 242px;
  text-align: center;
}
.fontSize_div_one {
  position: absolute;
  width: 100%;
  height: 80%;
  top: 60px;
  text-align: center;
}

.fontSize {
  position: relative;
  top: 90px;
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
