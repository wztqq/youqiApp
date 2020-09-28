<template>
	<div style="position: relative; width: 100%; background-color: #DADBDB;">
		<div class="map">
			<div id="tab_button">
				<div class="tab_button_two" @click="tabButton()">储情分析</div>
				<div class="tab_button_one">生产-原油天然气</div>
				<div class="tab_button_one">生产-炼化煤化企业</div>
			</div>
			<!-- <img id='map_pic' src="../../assets/img/industryAnalysis/地图.png" alt="图片未加载"> -->
		</div>
		<!-- 储情分析的主要内容 -->
		<div id="confess_content">
			<div class="chart" style="position: relative;">
				<div id="tab_oil">
					<div class="tab_oil_two">原油剩余技术储量</div>
					<div class="tab_oil_one">原油剩余经济储量</div>
				</div>
				<div class="echarts" id="echartsOne"></div>
			</div>
			<div class="chart" style="position: relative;">
				<div id="tab_oil">
					<div class="tab_oil_two">天然气剩余技术储量</div>
					<div class="tab_oil_one">天然气剩余经济储量</div>
				</div>
				<div class="echarts" id="echartsTwo"></div>
			</div>
			<div class="chart" style="position: relative;">
				<div id="tab_oil">
					<div class="tab_oil_two">油田采储比排名</div>
					<div class="tab_oil_one">气田采储比排名</div>
					<div class="table_one">
						<div>油田采储排名<span>Top</span></div>
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
				msg: 'Welcome to Your Vue.js App'
			}
		},
		mounted() {
			this.drawLine('echartsOne');
			this.drawLine('echartsTwo');
		},
		methods: {
			drawLine(name) {
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
						itemWidth:15,
						itemHeight:10
					},
					grid:{
						bottom: 40
					},
					series: [{
						name: '原油剩余技术储量',
						type: 'pie',
						radius: ['40%', '55%'],
						center: ['50%','40%'],
						label: {

							formatter: '{per|{d}%\n}',
							padding: [0, -40,5],
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
						data: [{
								value: 10,
								name: '油田1'
							},
							{
								value: 8,
								name: '油田2'
							},
							{
								value: 6,
								name: '油田3'
							},
							{
								value: 4,
								name: '油田4'
							},
							{
								value: 2,
								name: '油田5'
							},
							{
								value: 4,
								name: '油田6'
							}
						],
						color: ['#44c2fd', '#22ffc2', '#ffc522', '#ff1a40', '#d527b7', '#0000ff']
					}]
				});
			},
			tabButton(){
				console.log(document.getElementById(name))
			}
		}
	}
</script>

<style>
	#tab_button {
		width: 343px;
		height: 29px;
		background-color: rgba(0, 0, 0, 0.15);
		margin: 0px auto;
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
		background-size: cover;
		padding: 15px 0 0 0;
		background-image: url(../../assets/img/industryAnalysis/地图.png);
	}

	/* 储情分析内容 */
	.chart {
		width: 100%;
		height: 289px;
		background-color: white;
		margin: 5px 0 0 0;
		padding: 10px 0 0 0;
	}

	.echarts {
		width: 100%;
		height: 242px;
		margin: 20px auto;
	}

	/* 按钮样式调整 */
	#tab_oil {
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
</style>
