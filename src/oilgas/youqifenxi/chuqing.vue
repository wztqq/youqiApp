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
			<img id="close" :style="{'left':closeLeft}" src="../../assets/img/industryAnalysis/关闭.png" alt="图片未显示" @click="tanchuangClose()">
		</div>
		<!-- 页面切换按钮 -->
		<div id="tab_button" :style="{'left':screenLeft}">
			<span v-for="(item,index) in tablist" :key='index' @click="tabButton(index)" v-bind:class="[{tab_button_two:index == selected},{tab_button_one:true}]">{{item}}</span>
		</div>
		<!-- 储情分析的主要内容 -->
		<div id="confess_content" v-show="a" style="background-color: #DADBDB;">
			<img class="map" @click.prevent="tanchuangShow()" src="../../assets/img/industryAnalysis/原油生产地图.png" alt="图片未显示">
			<div class="chart">
				<div class="tab_oil">
					<span v-for="(item,index) in tablist_one" :key='index' @click="tabButton_one(index)" v-bind:class="[{tab_oil_two:index == selected_one},{tab_oil_one:true}]">{{item}}</span>
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
					<span v-for="(item,index) in tablist_two" :key='index' @click="tabButton_two(index)" v-bind:class="[{tab_oil_two:index == selected_two},{tab_oil_one:true}]">{{item}}</span>
				</div>
				<div class="fontSize_div">
					<div class="fontSize" v-model="pie_number_two">{{pie_number_two}}</div>
					<div class="fontSizeOne">立亿方米</div>
				</div>
				<div class="echarts" id="echartsTwo"></div>
			</div>
			<div class="chart_t">
				<div style="width: 100%;height: 8px;background-color: #DADBDB;margin-bottom: 10px;"></div>
				<div class="tab_oil">
					<span v-for="(item,index) in tablist_three" :key='index' @click="tabButton_three(index)" v-bind:class="[{tab_oil_two:index == selected_three},{tab_oil_one:true}]">{{item}}</span>
					<div id="table">
						<div style="font: bold 13px '微软雅黑';color: #3A6DDA;position: relative;top: 30px;" v-model="tableTh_name">{{tableTh_name}}<span style="color: #FF9311 ;font-style: italic;">Top</span></div>
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
					<div :class="[{btn_shenchan_xuan:btn_shenchan_num},{btn_shenchan_wei:!btn_shenchan_num}]" @click="tabButton_produce(1)">
						<img class="img_produce" :src="imgUrl" alt="图片未显示">
						<div style="position: absolute;top: 8px;left: 25px;">原油天然气生产</div>
					</div>
					<div :class="[{btn_shenchan_xuan:!btn_shenchan_num},{btn_shenchan_wei:btn_shenchan_num}]" @click="tabButton_produce(0)">
						<img class="img_produce" :src="imgUrl2" alt="图片未显示">
						<div style="position: absolute;top: 32px;left: 25px;">炼化煤化企业生产</div>
					</div>
				</div>
			</div>
			
			<div id="produce" v-show="d">
				<img class="map" src="../../assets/img/industryAnalysis/原油生产地图.png" alt="图片未显示">
				<div class="chart">
					<div class="tab_oil">
						<span v-for="(item,index) in tablist_four" :key='index' @click="tabButton_four(index)" v-bind:class="[{tab_oil_two:index == selected_four},{tab_oil_one:true}]">{{item}}</span>
					</div>
					<div class="ratio_div">
						<!-- 上月完成 -->
						<div style="width: 172px;height: 50px;float: left;position: relative;top: 10px;">
							<div style="width: 75px; height: 50px; float: left; position: relative; left: 5px;">
								<div class="last_month"><span class="ratio_font" v-model="last_month">{{last_month}}</span><span class="ratio_font1" v-model="unit">{{unit}}</span></div>
								<div class="last_month_font"><span class="ratio_font_div">上月完成</span></div>
							</div>
							<div class="ratio_position">
								<div class="ratio">
									<span v-model="YoY">同比:<img class="imgStyle" src="../../assets/img/Indicatorsmonitoring/003-2.png" alt="图片未显示">{{YoY}}</span>
								</div>
								<div class="ratio">
									<span v-model="Cratio">环比:<img class="imgStyle" src="../../assets/img/Indicatorsmonitoring/003-3.png" alt="图片未显示">{{Cratio}}</span>
								</div>
							</div>
						</div>
						<!-- 年度完成 -->
						<div style="width: 172px;height: 50px;float: left;position: relative;top: 10px;">
							<div style="width: 75px; height: 50px; float: left; position: relative; left: 5px;">
								<div class="last_month"><span class="ratio_font" v-model="last_year">{{last_year}}</span><span class="ratio_font1" v-model="unit">{{unit}}</span></div>
								<div class="last_month_font"><span class="ratio_font_div">年度完成</span></div>
							</div>
							<div class="ratio_position">
								<div class="ratio">
									<span v-model="YoY">同比:<img class="imgStyle" src="../../assets/img/Indicatorsmonitoring/003-2.png" alt="图片未显示">{{YoY1}}</span>
								</div>
								<div class="ratio">
									<span v-model="Cratio">环比:<img class="imgStyle" src="../../assets/img/Indicatorsmonitoring/003-3.png" alt="图片未显示">{{Cratio1}}</span>
								</div>
							</div>
						</div>
						
					</div>
					<div class="echarts_two" id="echartsThree"></div>
				</div>
				<div class="chart">
					<div style="width: 100%;height: 8px;background-color: #DADBDB;margin-bottom: 10px;"></div>
					<div class="tab_oil">
						<span v-for="(item,index) in tablist_five" :key='index' @click="tabButton_five(index)" v-bind:class="[{tab_oil_two:index == selected_five},{tab_oil_one:true}]">{{item}}</span>
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
						<span v-for="(item,index) in tablist_six" :key='index' @click="tabButton_six(index)" v-bind:class="[{tab_oil_two:index == selected_six},{tab_oil_one:true}]">{{item}}</span>
					</div>
					<div :class="[{echartsOne:bacolor},{echartsTwo:!bacolor}]" id="echartsFive"></div>
				</div>
			</div>
			
			
			<div id="produce_refine" v-show="!d">
				<div id="clickbtn1" class="clickbtn" :style="{'left':left1,'top':top1}"></div>
				<div id="clickbtn2" class="clickbtn" :style="{'left':left2,'top':top2}"></div>
				<div id="clickbtn3" class="clickbtn" :style="{'left':left3,'top':top3}"></div>
				<div id="clickbtn4" class="clickbtn" :style="{'left':left4,'top':top4}"></div>
				<div id="clickbtn5" class="clickbtn" :style="{'left':left5,'top':top5}"></div>
				<img class="map" src="../../assets/img/industryAnalysis/炼化煤地图2.png" alt="图片未显示">
				<div class="chart">
					<div class="tab_oil">
						<span v-for="(item,index) in tablist_seven" :key='index' @click="tabButton_seven(index)" v-bind:class="[{tab_oil_four:index == selected_seven},{tab_oil_three:true}]">{{item}}</span>
					</div>
					<div class="ratio_div">
						<!-- 上月完成 -->
						<div style="width: 172px;height: 50px;float: left;position: relative;top: 10px;">
							<div style="width: 75px; height: 50px; float: left; position: relative; left: 5px;">
								<div class="last_month"><span class="ratio_font" v-model="last_month">{{last_month}}</span><span class="ratio_font1" v-model="unit">{{unit}}</span></div>
								<div class="last_month_font"><span class="ratio_font_div">上月完成</span></div>
							</div>
							<div class="ratio_position">
								<div class="ratio">
									<span v-model="YoY">同比:<img class="imgStyle" src="../../assets/img/Indicatorsmonitoring/003-2.png" alt="图片未显示">{{YoY}}</span>
								</div>
								<div class="ratio">
									<span v-model="Cratio">环比:<img class="imgStyle" src="../../assets/img/Indicatorsmonitoring/003-3.png" alt="图片未显示">{{Cratio}}</span>
								</div>
							</div>
						</div>
						<!-- 年度完成 -->
						<div style="width: 172px;height: 50px;float: left;position: relative;top: 10px;">
							<div style="width: 75px; height: 50px; float: left; position: relative; left: 5px;">
								<div class="last_month"><span class="ratio_font" v-model="last_year">{{last_year}}</span><span class="ratio_font1" v-model="unit">{{unit}}</span></div>
								<div class="last_month_font"><span class="ratio_font_div">年度完成</span></div>
							</div>
							<div class="ratio_position">
								<div class="ratio">
									<span v-model="YoY">同比:<img class="imgStyle" src="../../assets/img/Indicatorsmonitoring/003-2.png" alt="图片未显示">{{YoY1}}</span>
								</div>
								<div class="ratio">
									<span v-model="Cratio">环比:<img class="imgStyle" src="../../assets/img/Indicatorsmonitoring/003-3.png" alt="图片未显示">{{Cratio1}}</span>
								</div>
							</div>
						</div>
						
					</div>
					<div class="echarts_two" id="echartsSix"></div>
				</div>
				<div class="chart">
					<div style="width: 100%;height: 8px;background-color: #DADBDB;margin-bottom: 10px;"></div>
					<div class="tab_oil">
						<span v-for="(item,index) in tablist_eight" :key='index' @click="tabButton_eight(index)" v-bind:class="[{tab_oil_two:index == selected_eight},{tab_oil_one:true}]">{{item}}</span>
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
				/*
				此处定义动态位置的变量
				*/
				left1:'',
				top1:'',
				left2:'',
				top2:'',
				left3:'',
				top3:'',
				left4:'',
				top4:'',
				left5:'',
				top5:'',
				left6:'',
				top6:'',
				
				
				
				
				screenWidth: document.body.clientWidth, // 屏幕宽
				screenHeight: document.body.clientHeight, // 屏幕高
				screenLeft: '',
				screenTop: '',
				show: 0, //控制弹窗显示
				closeLeft: 0, //关闭按钮居中
				tableTh: ['名称','所属盟市','面积','经纬度','远景资源量','预测资源量','控制储量','探明储量'],
				listData: [{
						name: '乌里雅斯太油田',
						leaguerea: '锡林郭勒盟',
						area: '5.5万平方公里',
						latitude: '43°23′10″~45°24′27″',
						vision: '3256',
						prediction: '1456',
						control: '1300',
						proved: '1200'
					},
					{
						name: '宝力格油田',
						leaguerea: '锡林郭勒盟',
						area: '4314.12平方公里',
						latitude: '41°10′10″~43°24′10″',
						vision: '2687',
						prediction: '1856',
						control: '1399',
						proved: '780'
					},
					{
						name: '新苏木油田',
						leaguerea: '锡林郭勒盟',
						area: '5万平方公里',
						latitude: '46°16′10″~46°24′15″',
						vision: '3100',
						prediction: '2756',
						control: '2678',
						proved: '2670'
					},
					{
						name: '哈达图油田',
						leaguerea: '锡林郭勒盟',
						area: '432平方公里',
						latitude: '43°17′10″~45°24′15″',
						vision: '2890',
						prediction: '1956',
						control: '1780',
						proved: '870'
					},
					{
						name: '锡林油田',
						leaguerea: '锡林郭勒盟',
						area: '234平方公里',
						latitude: '44°17′10″~40°24′15″',
						vision: '3200',
						prediction: '2056',
						control: '1890',
						proved: '960'
					},
					{
						name: '乌兰诺尔油田',
						leaguerea: '锡林郭勒盟',
						area: '5.5万平方公里',
						latitude: '47°18′10″~46°24′15″',
						vision: '3199',
						prediction: '2099',
						control: '2000',
						proved: '677'
					},
				],
				tablist: ['储情分析','生产分析'],
				tablist_one: ['原油剩余技术储量', '原油剩余经济储量'],
				tablist_two: ['天然气剩余技术储量', '天然气剩余经济储量'],
				pie_number: 1177,  //原油剩余技术数值
				pie_number_two: 0.66,  //天然气剩余技术数值
				tablist_three: ['油田采储比排名', '气田采储比排名'],
				tablist_four: ['原油产量分析', '天然气产量分析'],
				tablist_five: ['本年度原油生产自给率', '本年度天然气生产自给率'],
				tablist_six: ['本年度原油生产企业分布', '本年度天然气生产企业分布'],
				tablist_seven: ['成品油产量分析','煤制油产量分析','煤制气产量分析'],
				tablist_eight: ['成品油生产结构分析','成品油自给率分析'],
				// 第二个页面上月完成数值
				last_month: 20,
				// 第二个页面年度累计完成数值
				last_year: 200,
				//第二个页面的同比，环比
				YoY: '+1.1%',
				Cratio:'-1.38%',
				/*年度完成同比环比*/
				YoY1: '+1.2%',
				Cratio1:'-1.18%',
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
				k1:0,
				//第一个页面的图表数据
				echarts: {
					data_three: [{
							value: 70,
							name: '油田1'
						},
						{
							value: 80,
							name: '油田2'
						},
						{
							value: 110,
							name: '油田3'
						},
						{
							value: 40,
							name: '油田4'
						},
						{
							value: 100,
							name: '油田5'
						},
						{
							value: 60,
							name: '油田6'
						}
					],
					data_two: [{
							value: 0.10,
							name: '油田1'
						},
						{
							value: 0.20,
							name: '油田2'
						},
						{
							value: 0.12,
							name: '油田3'
						},
						{
							value: 0.18,
							name: '油田4'
						},
						{
							value: 0.10,
							name: '油田5'
						},
						{
							value: 0.06,
							name: '油田6'
						}
					],
					data_one: [{
							value: 177,
							name: '油田1'
						},
						{
							value: 200,
							name: '油田2'
						},
						{
							value: 160,
							name: '油田3'
						},
						{
							value: 260,
							name: '油田4'
						},
						{
							value: 240,
							name: '油田5'
						},
						{
							value: 140,
							name: '油田6'
						}
					],
					data_four: [{
							value: 0.10,
							name: '油田1'
						},
						{
							value: 0.06,
							name: '油田2'
						},
						{
							value: 0.04,
							name: '油田3'
						},
						{
							value: 0.12,
							name: '油田4'
						},
						{
							value: 0.05,
							name: '油田5'
						},
						{
							value: 0.03,
							name: '油田6'
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
				tableTh_name: '油田采储比排名',
				
				tableTh_one: ['序号', '油田', '盟区', '采储比'],
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
				tableTh_two: ['序号', '气田', '盟区', '采储比'],
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
				produce_pie_oil: [55,45,90,'万吨'],
				produce_pie_gas: [60,40,0.15,'亿立方米'],
				bacolor: 1,
				produce_pieTwo_oil: [77,23],
				produce_pieTwo_gas: [68,32],
				
				//第二个页面按钮图标
				imgUrl: require('../../assets/img/industryAnalysis/原油黄.png'),
				imgUrl2: require('../../assets/img/industryAnalysis/炼化煤灰.png'),
				imgUrlArry:[
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
			this.drawLine('echartsOne', this.echarts.data_one);
			this.drawLine('echartsTwo', this.echarts.data_two);
			this.screenLeft = (this.screenWidth - 343) / 2 + 'px'
		},
		methods: {
			// 用于点击的div块绑定函数
			onclick(){
				document.getElementById(name)
			},
			
			
			
			
			//取消图片默认样式
			tanchuangShow() {
				this.show = 1
				this.$nextTick(function() {
					this.closeLeft = (this.screenWidth - 35) / 2 + 'px'
				})
			},
			tanchuangClose() {
				this.show = 0
			},
			// 储情分析环形图
			drawLine(name, arry) {
				var echarts = require('echarts');
				var myChart = echarts.init(document.getElementById(name));
				myChart.setOption({
					tooltip: {
						trigger: 'item',
						formatter: '{a} <br/>{b}: {c} ({d}%)'
					},
					legend: {
						orient: 'horizontal',
						bottom: 30,
						left: 'center',
						itemGap: 10,
						data: ['油田1', '油田2', '油田3', '油田4', '油田5', '油田6'],
						itemWidth: 15,
						itemHeight: 10
					},
					grid: {
						bottom: 40
					},
					series: [{
						name: '原油剩余技术储量',
						type: 'pie',
						radius: ['40%', '55%'],
						center: ['50%', '40%'],
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
						color: ['#44c2fd', '#22ffc2', '#ffc522', '#ff1a40', '#d527b7', '#0000ff']
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
						formatter: function(params) {
							var tar;
							if (params[1].value !== '-') {
								tar = params[1];
							} else {
								tar = params[0];
							}
							return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
						}
					},
					// legend: {
					//     data: ['支出', '收入']
					// },
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
							name: '辅助',
							type: 'bar',
							stack: '总量',
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
							type: 'bar',
							stack: '总量',
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
							stack: '总量',
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
			drawPie(name, arry) {
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
						//data: ["煤油", "汽油", "柴油"],
						itemWidth: 15,
						itemHeight: 10,
						textStyle: {
							color: '#9FA0A5',
							fontSize: 12,
						}
					},
					series: [{
						name: "原油剩余技术储量",
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
						color: ["#FF9A13","#96F0F2", "#14DBA0"],
					}],
				});
			},
			drawPie_one(name, arry) {
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
			drawPie_one(name, arry) {
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
			        data: ["汽油","柴油","煤油"],
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
			  name:"万吨",
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
			     formatter:'{c0}/{c1}% ',
			     position: 'top'
			    },
			    },
			            {
			        type: 'bar',
			        itemStyle: {
			        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
			                { offset: 0, color: "#63edd4" },
			                { offset: 1, color: "rgba(14, 137, 238, 1)" },
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
			          right:0,
			          top:'center',
			          textStyle:{
			            color:'#9FA0A5',
			            padding: [15, 30,2, 10],
			            fontSize:12,
			            },
			          itemGap: 30,
			          data: ["柴油", "煤油", "汽油"],
			          itemWidth: 15,
			          itemHeight: 10,
			          formatter: function(name) {
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
					this.$nextTick(function() {
						this.drawLine('echartsOne', this.echarts.data_one)
						this.drawLine('echartsTwo', this.echarts.data_two);
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
					this.pie_number_two = 0.66
					this.pie_one_number = this.produce_pie_oil[2]
					this.pie_one_unit = this.produce_pie_oil[3]
					this.bacolor = 1
					this.$nextTick(function() {
						this.drawLine_one('echartsThree', this.bardata_one)
						this.drawPie('echartsFour',this.produce_pie_oil)
						this.drawPie_one('echartsFive',this.produce_pieTwo_oil)
					})
				}
			},

			/* 第一个页面的点击按钮 */
			//内容里的第一个按钮
			tabButton_one(id) {
				this.selected_one = id
				if (this.i == 0 && id == 1) {
					this.drawLine('echartsOne', this.echarts.data_three);
					this.pie_number = 460
					this.i = 1
				}
				if (this.i == 1 && id == 0) {
					this.drawLine('echartsOne', this.echarts.data_one);
					this.pie_number = 1177
					this.i = 0
				}
			},
			//内容里的第二个按钮
			tabButton_two(id) {
				this.selected_two = id
				if (this.j == 0 && id == 1) {
					this.drawLine('echartsTwo', this.echarts.data_four);
					this.pie_number_two = 0.4
					this.j = 1
				}
				if (this.j == 1 && id == 0) {
					this.drawLine('echartsTwo', this.echarts.data_two);
					this.pie_number_two = 0.66
					this.j = 0
				}
			},
			//内容里的第三个按钮
			tabButton_three(id) {
				this.selected_three = id
				if (this.g == 0 && id == 1) {
					this.g = 1
					this.tableTh_name = '气田采储比排名'
				}
				if (this.g == 1 && id == 0) {
					this.g = 0
					this.tableTh_name = '油田采储比排名'
				}
			},

			/* 第二个页面的三个点击按钮 */
			//原油和炼化煤页面切换
			tabButton_produce(id) {
				if(id){
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
					this.pie_number_two = 0.66
					this.pie_one_number = this.produce_pie_oil[2]
					this.pie_one_unit = this.produce_pie_oil[3]
					this.bacolor = 1
					this.$nextTick(function() {
						this.drawLine_one('echartsThree', this.bardata_one)
						this.drawPie('echartsFour',this.produce_pie_oil)
						this.drawPie_one('echartsFive',this.produce_pieTwo_oil)
					})
				}else{
					this.btn_shenchan_num = 0
					this.imgUrl = this.imgUrlArry[1]
					this.imgUrl2 = this.imgUrlArry[2]
					this.d = 0
					this.selected_seven = 0
					this.selected_eight = 0
					this.k1 = 1
					this.$nextTick(function() {
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
					this.unit = '万m³'
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
					this.drawPie('echartsFour', this.produce_pie_gas);
					this.pie_one_number = this.produce_pie_gas[2]
					this.pie_one_unit = this.produce_pie_gas[3]
					this.p_j = 1
				}
				if (this.p_j == 1 && id == 0) {
					this.drawPie('echartsFour', this.produce_pie_oil);
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
					this.drawPie_one('echartsFive',this.produce_pieTwo_gas)
				}
				if (this.p_g == 1 && id == 0) {
					this.p_g = 0
					this.bacolor = 1
					this.drawPie_one('echartsFive',this.produce_pieTwo_oil)
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
					this.unit = '万m³'
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
			      };
			      if (1 == id) {
			        this.k1 = 0;
			        this.$nextTick(function () {
					  this.drawPie_five('echartsNine');
			        });
			      }
			    },








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
	.clickbtn{
		background-color: #000000;
		position: absolute;
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
	.btn_shenchan_div{
		position: relative;
		top: 5px;
	}
	/* 生产分析的子页面按钮样式 */
	.btn_shenchan_xuan{
		width: 100%;
		height: 25px;
		font-size: 12px;
		color: #7D87A0;
		background-color: #EBF2FF;
	} 
	.btn_shenchan_wei{
		width: 100%;
		height: 25px;
		font-size: 12px;
		color: #7D87A0;
		background-color: #FFFFFF;
	} 
	.btn_shenchan{
		width: 130px;
		height: 60px;
		background-color: #FFFFFF;
		position: absolute;
		top: 60px;
		left: 40px;
	}
	/* 按钮的图标 */
	.img_produce{
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
	.imgStyle{
		width: 5px;
		height: 12px;
	}
	/* 储情分析内容 */
	.chart {
		width: 100%;
		height: 289px;
		background-color: white;
		padding: 10px 0;
		position: relative;
	}
	.chart_t{
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
	.echarts_one{
		width: 100%;
		height: 242px;
		margin: 20px auto;
	}
	/* 给第一个柱图一个样式方便设置同比环比块的样式 */
	.echarts_two{
		width: 100%;
		height: 182px;
		margin: 0px auto;
	}
	/* 同比环比块最大div的样式 */
	.ratio_div{
		width: 345px;
		height: 60px;
		margin: 0 auto;
	}
	/* 给同比环比块一个样式 */
	.ratio{
		width: 100%;
		height: 25px;
		line-height: 25px;
		font-size: 12px;
	}
	/* 同比环比块父标签 */
	.ratio_position{
		width: 75px;
		height: 50px;
		float: left;
		position: relative;
		left: 10px;
	}
	
	/* 可复用至上年完成 */
	/* 上月完成数值块 */
	.last_month{
		width: 100%;
		height: 30px;
		line-height: 30px;
		text-align: center;
		background-color: #FDCDBF;
	}
	/* 上月完成字体块 */
	.last_month_font{
		width: 100%;
		height: 20px;
		line-height: 20px;
		text-align: center;
		background-color: #FF5C2D;
	}
	.ratio_font{
		font-size: 20px;
		color: #FF3A00;
		font-family: Microsoft YaHei;
		font-weight: 400;
	}
	.ratio_font1{
		font-size: 5px;
		color: #FF3A00;
		font-family: Microsoft YaHei;
	}
	.ratio_font_div{
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
