<template>
	<div style="position: relative; width: 100%; background-color: #DADBDB;">
		<div :class="[{tanchuang:true},{tanchuang_one: show}]">
			<div style="width: 100%;height: 100%;overflow: auto;">
			</div>
			<img id="close" :style="{'left':closeLeft}" src="../../assets/img/industryAnalysis/关闭.png" alt="图片未显示" @click="tanchuangClose()">
		</div>
		<div id="tab_button" :style="{'left':screenLeft}">
			<span v-for="(item,index) in tablist" :key='index' @click="tabButton(index)" v-bind:class="[{tab_button_two:index == selected},{tab_button_one:true}]">{{item}}</span>
		</div>

		<!-- 成品油销售的主要内容 -->
		<div id="confess_content" v-show="a" style="background-color: #DADBDB;">
			<img class="map" @click.prevent="tanchuangShow()" src="../../assets/img/tuceng5.png" alt="图片未显示">
			<!-- 第一个图 -->
			<div class="chart">
				<div class="tab_oill">
					<span v-for="(item,index) in tablist_onee" :key='index' @click="tabButton_one(index)" v-bind:class="[{tab_oil_one:index == selected_one},{tab_oil_one:true}]">{{item}}</span>
				</div>
				<div class="fontSize_div">
					<div class="fontSize">10</div>
					<div class="fontSize">万吨</div>
				</div>
				<div class="echarts" id="echartsOnee"></div>
			</div>
			<!-- 第二三个图 -->
			<div class="chart">
				<div class="tab_oil">
					<span v-for="(item,index) in tablist_one" :key='index' @click="tabButton_one(index)" v-bind:class="[{tab_oil_two:index == selected_one},{tab_oil_one:true}]">{{item}}</span>
				</div>
				<div class="fontSize_div">
					<div class="fontSize">10</div>
					<div class="fontSize">万吨</div>
				</div>
				<!-- <div class="echarts" id="echartsOne"></div> -->
				<div class="echarts" id="echartsOne"></div>
			</div>
			<!-- 第四五 -->
			<div class="chart">
				<div style="width: 100%;height: 8px;background-color: #DADBDB;margin-bottom: 10px;"></div>
				<div class="tab_oil">
					<span v-for="(item,index) in tablist_two" :key='index' @click="tabButton_two(index)" v-bind:class="[{tab_oil_two:index == selected_two},{tab_oil_one:true}]">{{item}}</span>
				</div>
				<div class="fontSize_divc">
					<div class="fontSize">23</div>
					<div class="fontSize">立方米</div>
				</div>
				<div class="echarts" id="echartsTwo" v-show="siwu_1"></div>
				<div class="echarts" id="echartsTwoo" v-show="siwu_2"></div>
			</div>
			<!-- 六七个图 -->
			<div class="chart">
				<div style="width: 100%;height: 8px;background-color: #DADBDB;margin-bottom: 10px;"></div>
				<div class="tab_oil">
					<span v-for="(item,index) in tablist_three" :key='index' @click="tabButton_three(index)" v-bind:class="[{tab_oil_two:index == selected_three},{tab_oil_one:true}]">{{item}}</span>
				</div>
				<div class="echarts" id="echartsTen"></div>
			</div>
		</div>


		<!-- 煤制油销售主要内容 -->
		<div id="produce_content" v-show="b">
			<img class="map" @click.prevent="tanchuangShow()" src="../../assets/img/diertu.png" alt="图片未显示">
			<div class="chart">
				<div style="width: 100%;height: 8px;background-color: #DADBDB;margin-bottom: 10px;"></div>
				<div class="tab_oil">
					<span v-for="(item,index) in tablist_four" :key='index' @click="tabButton_four(index)" v-bind:class="[{tab_oil_two:index == selected_four},{tab_oil_one:true}]">{{item}}</span>
				</div>
				<div class="fontSize_divcc">
					<div class="fontSize">23</div>
					<div class="fontSize">立方米</div>
				</div>
				<div class="echarts" id="echartsThree" v-show="mzy_p1"></div>
				<div class="echarts" id="echartsThreee" v-show="mzy_p2"></div>
			</div>
			<div class="chart">
				<div style="width: 100%;height: 8px;background-color: #DADBDB;margin-bottom: 10px;"></div>
				<div class="tab_oil">
					<span v-for="(item,index) in tablist_five" :key='index' @click="tabButton_five(index)" v-bind:class="[{tab_oil_two:index == selected_five},{tab_oil_one:true}]">{{item}}</span>
				</div>
				<div class="echarts" id="echartsFour"></div>
			</div>
		</div>

		<!-- 第三 -->
		<div id="produce_content" v-show="c">
			<img class="map" @click.prevent="tanchuangShow()" src="../../assets/img/industryAnalysis/地图.png" alt="图片未显示">
			<div class="chart">
				<div style="width: 100%;height: 8px;background-color: #DADBDB;margin-bottom: 10px;"></div>
				<div class="tab_oil">
					<span v-for="(item,index) in tablist_sixx" :key='index' @click="tabButton_four(index)" v-bind:class="[{tab_oil_two:index == selected_six},{tab_oil_one:true}]">{{item}}</span>
				</div>
				<div class="echarts" id="echartsSixx"></div>
			</div>
			<div class="chart">
				<div style="width: 100%;height: 8px;background-color: #DADBDB;margin-bottom: 10px;"></div>
				<div class="tab_oil">
					<span v-for="(item,index) in tablist_six" :key='index' @click="tabButton_five(index)" v-bind:class="[{tab_oil_two:index == selected_sveen},{tab_oil_one:true}]">{{item}}</span>
				</div>
				<div class="echarts_one" id="echartsSix"></div>
			</div>
			<div class="chart">
				<div style="width: 100%;height: 8px;background-color: #DADBDB;margin-bottom: 10px;"></div>
				<div class="tab_oil">
					<span v-for="(item,index) in tablist_seveen" :key='index' @click="tabButton_six(index)" v-bind:class="[{tab_oil_two:index == selected_eight},{tab_oil_one:true}]">{{item}}</span>
					<div class="echarts_one" id="echartsSeveen"></div>
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
				screenWidth: document.body.clientWidth, // 屏幕宽
				screenLeft: '',
				show: 0, //控制弹窗显示
				closeLeft: 0, //关闭按钮居中
				tableTh: ['名称', '所属盟市', '面积', '经纬度', '远景资源量', '预测资源量', '控制储量', '探明储量'],
				tablist: ['成品油销售', '煤制油销售', '煤制气销售'],
				tablist_onee: ['上月成品油消费量'],
				tablist_one: ['汽油消费结构分析', '柴油消费结构分析'],
				tablist_two: ['成品油消费地区分布', '区内区外消费量对比'],
				tablist_three: ['汽油消费量预测', '柴油消费量预测'],
				tablist_four: ['煤制柴油消费结构分析', '煤制石脑油消费结构分析'],
				tablist_five: ['煤制油产品地区消费分布', '油煤等价曲线'],
				tablist_sixx: ['煤制气产品地区消费分布'],
				tablist_six: ['按用途消费结构分析', '按行业消费结构分析'],
				tablist_seveen: ['调峰煤制气月变化趋势', '气价与煤价对比分析'],
				selected: '0',
				selected_one: '0',
				selected_two: '0',
				selected_three: '0',
				selected_four: '0',
				selected_five: '0',
				selected_six: '0',
				selected_sveen: '0',
				selected_eight: '0',
				//三个页面是否显示的三个参数
				a: 1,
				b: 0,
				c: 0,
				//页面里三个按钮
				i: 0, //判断是否点击
				j: 0,
				g: 0,
				siwu_1:1,
				siwu_2:0,
				//第二个页面的三个按钮
				p_i: 0,
				p_j: 0,
				p_g: 0,
				mzy_p1:1,
				mzy_p2:0,
				//第一个页面的图表数据
				echarts: {
					data_three: [{
							value: 70,
							name: '呼和浩特'
						},
						{
							value: 80,
							name: '乌海'
						},
						{
							value: 110,
							name: '通辽'
						},
						{
							value: 40,
							name: '兴安'
						},
						{
							value: 100,
							name: '包头'
						},
						{
							value: 60,
							name: '鄂尔多斯'
						}
					],
					data_two: [{
							value: 0.10,
							name: '负35#柴油'
						},
						{
							value: 0.20,
							name: '负20#柴油'
						},
						{
							value: 0.12,
							name: '负10#柴油'
						},
						{
							value: 0.18,
							name: '0#柴油'
						}
					],
					data_one: [{
							value: 177,
							name: '92#汽油'
						},
						{
							value: 200,
							name: '95#汽油'
						},
						{
							value: 160,
							name: '98#汽油'
						}
					],
					data_onee: [{
							value: 177,
							name: '汽油'
						},
						{
							value: 200,
							name: '柴油'
						},
						{
							value: 160,
							name: '煤油'
						}
					],
					data_four: [
						[76, 51, 49, 30, 74, 60, 35, 60, 76, 53, 50, 35],
						[76, 51, 49, 30, 74, 60, 35, 60, 76, 53, 50, 35],
						[70, 47, 40, 27, 60, 51, 27, 51, 60, 47, 45, 27]
					],
					data_zheOne: [
						[60, 70, 40, 70, 60, 70, 70],
						[40, 50, 32, 60, 50, 58, 70]
					],
					data_zheTwo: [
						[70, 60, 40, 60, 50, 60, 60],
						[50, 45, 32, 50, 40, 58, 40]
					],
					data_twoTwo: [{
							value: 177,
							name: '乙醇原料'
						},
						{
							value: 200,
							name: '调和汽油'
						},
						{
							value: 160,
							name: '重整原料'
						}
					]
				},
				//第二个页面的柱状图数据
				bardata_one: [
					[200, 200, 250, 200, 250, 250, 375, 200, 375, 250, 275, 420],
					[2500, 2000, 3740, 1500, 3750, 2000, 1750, 2000, 1750, 2000, 2600, 2300],
					[750, 600, 750, 500, 900, 620, 730, 640, 820, 950, 700, 500]
				],
				bardata_two: [
					[40, 60, 234, 300, 300, 230, 375, 460, 385, 230, 275, 420],
					[230, 220, 354, '-', 375, '-', 175, 210, 175, '-', 260, 230],
					['-', '-', '-', 120, '-', 145, '-', '-', '-', 160, '-', '-']
				],



			}
		},
		mounted() {
			this.drawLine('echartsOnee', this.echarts.data_onee);
			this.drawLine('echartsOne', this.echarts.data_one);
			this.drawLine('echartsTwo', this.echarts.data_three);
			this.drawPie_two('echartsTwoo', this.echarts.data_four);
			this.drawPie_zhe('echartsTen', this.echarts.data_zheOne);
			this.drawLine('echartsTwooo', this.echarts.data_onee);
			this.screenLeft = (this.screenWidth - 343) / 2 + 'px'
			//this.drawLine_one('echartsThree')
		},
		methods: {

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
			// 油气销售管理分析环形图
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
						data1: ['汽油', '柴油', '煤油'],
						data2: ['92#汽油', '95#汽油', '98#汽油'],
						data3: ['呼和浩特', '乌海', '通辽', '兴安', '包头', '鄂尔多斯'],
						itemWidth: 15,
						itemHeight: 10
					},
					grid: {
						bottom: 40
					},
					series: [{
						name: '',
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
					legend: {
						data: ['工程车辆', '城市交通', '工业']
					},
					xAxis: {
						type: 'category',
						data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
					},
					yAxis: {
						min: 0,
						max: 7000,
						interval: 1000,
						type: 'value'
					},
					series: [{
							name: '工程车辆',
							type: 'bar',
							stack: '总量',
							label: {
								show: false,
								position: 'insideRight'
							},
							itemStyle: {
								// barBorderRadius: 10,
								color: '#5500ff',
							},
							data: arry[0]
						},
						{
							name: '城市交通',
							type: 'bar',
							stack: '总量',
							label: {
								show: false,
								position: 'insideRight'
							},
							itemStyle: {
								// barBorderRadius: 10,
								color: '#00ffff',
							},
							data: arry[1]
						},
						{
							name: '工业',
							type: 'bar',
							stack: '总量',
							label: {
								show: false,
								position: 'insideRight'
							},
							itemStyle: {
								color: '#55aa7f',
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
						// bottom: 'center',
						right: 30,
						// itemGap: 30,
						data: ["呼和浩特", "乌海", "通辽", "兴安", "包头", "鄂尔多斯"],
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
						center: ["50%", "50%"],
						label: {
							formatter: "{b|{b}} \n\n\n {per|{d}%\n}",
							padding: [0, -10, -5],
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
								value: 40,
								name: "呼和浩特"
							},
							{
								value: 20,
								name: "乌海"
							},
							{
								value: 40,
								name: "通辽"
							},
							{
								value: 40,
								name: "兴安"
							},
							{
								value: 40,
								name: "包头"
							},
							{
								value: 40,
								name: "鄂尔多斯"
							},
						],
						color: ["#96F0F2", "#14DBA0", "#FF9A13"],
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
						bottom: 'center',
						right: 30,
						itemGap: 30,
						data: ["中石油", "中石化"],
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
								value: 23,
								name: "中石化"
							},
							{
								value: 77,
								name: "中石油"
							},
						],
						color: ["#96F0F2", "#97C5FF"],
					}],
				});
			},

			drawPie_two(name, arry) {
				let echarts = require('echarts');
				let myChart = echarts.init(document.getElementById(name));
				myChart.setOption({
					tooltip: {
						trigger: 'axis',
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
						min: 0,
						max: 100,
						interval: 25,
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
							lineStyle: {
								color: "#ddd", // 颜色
								width: 1, // 粗细
							}
						}
					},
					series: [{
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
							type: 'bar',
							barWidth: 10,
							itemStyle: {
								barBorderRadius: 30,
								color: new echarts.graphic.LinearGradient(
									0, 0, 0, 1,
									[{
											offset: 0,
											color: '#8b9bff'
										},
										{
											offset: 0,
											color: '#8ffffc'
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

							type: 'bar',
							barWidth: 10,
							itemStyle: {
								barBorderRadius: 30,
								color: '#8b9bff',
							},
							label: {
								show: true,
								position: 'bottom'
							},
							data: arry[2]
						}
					]
				})
			},

			drawPie_zhe(name, arry) {
				let echarts = require('echarts');
				let myChart = echarts.init(document.getElementById(name));
				myChart.setOption({
					tooltip: {
						trigger: 'axis',
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
					legend: {
						data1: ['汽油消费量实际值', '汽油消费量预测值'],
						data2: ['柴油消费量实际值', '柴油消费量预测值']
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
								color: "#000000", // 颜色
								width: 1, // 粗细
							},
						},
						data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月']
					},
					yAxis: {
						name: '万吨/年',
						min: 0,
						max: 100,
						interval: 20,
						type: 'value',
						axisLabel: {
							fontSize: 12,
						},
						axisLine: {
							lineStyle: {
								color: "#000000", // 颜色
								width: 1, // 粗细
							},
						},
						axisTick: {
							lineStyle: {
								color: "#dd395f", // 颜色
								width: 1, // 粗细
							}
						}
					},
					series: [{
							name: '汽油消费量实际值',
							type: 'line',
							smooth: false,
							barWidth: 10,
							itemStyle: {
								barBorderColor: 'rgba(0,0,0,0)',
								color: 'rgba(0,0,0,0)',
								normal: {
									lineStyle: {
										width: 1,
										type: 'dotted' //'dotted'虚线 'solid'实线
									}
								}
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
							name: '汽油消费量预测值',
							type: 'line',
							barWidth: 10,
							areaStyle: {},
							itemStyle: {
								barBorderRadius: 30,
								color: new echarts.graphic.LinearGradient(
									0, 0, 0, 1,
									[{
											offset: 0,
											color: '#8b9bff'
										},
										{
											offset: 0,
											color: '#8ffffc'
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
							name: '汽油消费量实际值',
							type: 'line',
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
				})
			},

			// 煤制石脑油
			draw_mzsny(name,arry){
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
						data: ['乙醇原料', '调和汽油', '重整原料'],
						itemWidth: 15,
						itemHeight: 10
					},
					grid: {
						bottom: 40
					},
					series: [{
						name: '',
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
			//主要按钮
			tabButton(id) {
				this.selected = id
				//this.tabButton_one_t(id)
				if (0 == id) {
					this.a = 1
					this.b = 0
					this.c = 0
					this.$nextTick(function() {
						this.drawLine('echartsOne', this.echarts.data_one);
						this.drawLine('echartsOnee', this.echarts.data_onee);
						this.drawLine('echartsTwo', this.echarts.data_three);
						this.drawPie_two('echartsTwoo', this.echarts.data_four);
						this.drawPie_zhe('echartsTen', this.echarts.data_zheOne);
					})

				}
				if (1 == id) {
					this.a = 0
					this.b = 1
					this.c = 0
					this.$nextTick(function() {
						this.drawLine_one('echartsThree', this.bardata_one);
						// this.drawLine_one('echartsThreee', this.data_twoTwo);
						// this.drawPie('echartsFour')
						// this.drawPie_one('echartsFive')
					})
				}
				if (2 == id) {
					this.a = 0
					this.b = 0
					this.c = 1
					this.$nextTick(function(){
						this.drawPie_two('echartsSixx', this.echarts.data_four);
					})
					console.log('生产天然气')
				}
			},

			/* 第一个页面的点击按钮 */
			//内容里的第一个按钮
			tabButton_one(id) {
				this.selected_one = id
				if (this.i == 0 && id == 1) {
					this.drawLine('echartsOne', this.echarts.data_two);
					this.i = 1
				}
				if (this.i == 1 && id == 0) {
					this.drawLine('echartsOne', this.echarts.data_one);
					this.i = 0
				}
			},
			//内容里的第二个按钮
			tabButton_two(id) {
				this.selected_two = id
				if (0 == id) {
				  this.siwu_1 = 1;
				  this.siwu_2 = 0;
				  document.getElementsByClassName("fontSize_divc")[0].style.display ="block";
				  this.$nextTick(function () {
				    this.drawLine('echartsTwo', this.echarts.data_three);
				  });
				}
				if (1 == id) {
				  this.siwu_1 = 0;
				  this.siwu_2 = 1;
				  document.getElementsByClassName("fontSize_divc")[0].style.display = "none";
				  this.$nextTick(function () {
				     this.drawPie_two('echartsTwoo', this.echarts.data_four);
				  });
				}
			},
			//内容里的第三个按钮
			tabButton_three(id) {
				this.selected_three = id
				if (this.g == 0 && id == 1) {
					this.drawPie_zhe('echartsTen', this.echarts.data_zheTwo);
					this.g = 1
				}
				if (this.g == 1 && id == 0) {
					this.drawPie_zhe('echartsTen', this.echarts.data_zheOne);
					this.g = 0
				}
			},

			/* 第二个页面的三个点击按钮 */
			//内容里的第一个按钮
			tabButton_four(id) {
				this.selected_four = id;
				if (0 == id) {
				  this.mzy_p1 = 1;
				  this.mzy_p2 = 0;
				  document.getElementsByClassName("fontSize_divcc")[0].style.display ="none";
				  this.$nextTick(function () {
				    this.drawLine_one('echartsThree', this.bardata_two)
				  });
				}
				if (1 == id) {
				 this.mzy_p1 = 0;
				 this.mzy_p2 = 1;
				 document.getElementsByClassName("fontSize_divcc")[0].style.display = "block";
				 this.$nextTick(function () {
				     this.draw_mzsny('echartsThreee', this.data_twoTwo)
				  });
				}
			},
			//内容里的第二个按钮
			tabButton_five(id) {
				this.selected_five = id
				if (this.p_j == 0 && id == 1) {
					this.drawPie('echartsFour', this.echarts.data_four);
					this.p_j = 1
				}
				if (this.P_j == 1 && id == 0) {
					this.drawPie('echartsFour', this.echarts.data_two);
					this.p_j = 0
				}
			},
			

			/* 第三个页面的三个点击按钮 */
			//内容里的第一个按钮
			//内容里的第三个按钮
			tabButton_sixx(id) {
				this.selected_six = id
				if (this.p_g == 0 && id == 1) {
					this.drawPie_two('echartsSixx', this.echarts.data_four);
					this.p_g = 1
				}
				if (this.p_g == 1 && id == 0) {
					this.p_g = 0
				}
			},
			tabButton_sixx(id) {
				this.selected_four = id;
				if (this.p_i == 0 && id == 1) {
					
					this.p_i = 1
				}data_twoTwo
				if (this.p_i == 1 && id == 0) {
					// this.
					this.p_i = 0
				}
			},
			//内容里的第二个按钮
			tabButton_five(id) {
				this.selected_five = id
				if (this.p_j == 0 && id == 1) {
					this.drawPie('echartsFour', this.echarts.data_four);
					this.p_j = 1
				}
				if (this.P_j == 1 && id == 0) {
					this.drawPie('echartsFour', this.echarts.data_two);
					this.p_j = 0
				}
			},
			//内容里的第三个按钮
			tabButton_six(id) {
				this.selected_six = id
				if (this.p_g == 0 && id == 1) {
					this.p_g = 1
				}
				if (this.p_g == 1 && id == 0) {
					this.p_g = 0
				}
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
		top: 205px;
	}



	#tab_button {
		width: 343px;
		height: 29px;
		background-color: rgba(0, 0, 0, 0.15);
		position: absolute;
		top: 20px;
		z-index: 2;
		border-radius: 5px;
	}

	/* 按钮切换 */
	.tab_button_one {
		width: 113px;
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
		width: 113px;
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
		background-color: #DADBDB;
	}

	/* 储情分析内容 */
	.chart {
		width: 100%;
		height: 289px;
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
	#echartsTwoo{
		background-image: none;
	}
	#echartsTen {
		background-image: none;
	}

	#echartsSixx {
		background-image: none;
	}
	#echartsThree{
		background-image: none;
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
		text-align: center;
	}
	.fontSize_divc,
	.fontSize_divcc{
		position: absolute;
		width: 100%;
		height: 100%;
		text-align: center;
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
		border: 1px solid #3A6DDA;
		border-radius: 5px;
	}

	.tab_oill {
		width: 345px;
		height: 31px;
	}

	.tab_oill span {
		background: none;
		color: #3A6DDA;
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
