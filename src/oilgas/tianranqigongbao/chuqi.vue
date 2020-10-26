<template>
	<div class="child3" style="background-color: #E6E8EC;">
		<div class="map-box">
			<div class="map-content">
				<el-tabs :tab-position="tabPosition">
					<el-tab-pane label="设施建设情况" class="des"></el-tab-pane>
					<el-tab-pane label="本年度租赁情况" class="des"></el-tab-pane>
				</el-tabs>

			</div>

			<div class="modal">
				<div class="modal-city">呼和浩特燃气调峰设备</div>
				<div>
					<div class="modal-box">
						<div class="modal-des-box">
							<div class="modal-title">储气量：</div>
							<div class="model-des">0.92</div>
						</div>
						<div class="modal-des-box">
							<div class="modal-title">温度：</div>
							<div class="model-des">27&#176;</div>
						</div>
					</div>

					<div class="modal-box">
						<div class="modal-des-box">
							<div class="modal-title">压力：</div>
							<div class="model-des">0.92MP</div>
						</div>
						<div class="modal-des-box">
							<div class="modal-title">地方3天：</div>
							<!--<div class="model-des">0.03亿m<sup>3</sup></div>-->
							<div class="model-des">0.127亿立方米</div>

						</div>
					</div>
					<div>
						<div class="modal-des-box" style="width: 180px;height: 30px;line-height: 30px">
							<span class="modal-title">城燃企业5%：</span><span class="model-des">0.2135万立方米</span>
						</div>
					</div>
				</div>
			</div>

			<img class="map" src="../../assets/img/oilgas/chuqi.png" />
		</div>
		<div style="background-color: #fff;padding-top: 18px;margin-top: 6px;">
			<div class="title">
				本年度储气能力
			</div>
			<div class="content">
				<div class="fontSize_div">
					<div class="fontSize">1.36</div>
					<div class="fontSize" style="font-size: 14px">亿立方米</div>
				</div>
				<div id="gasPie" style="width: 100%;height: 240px"></div>
			</div>
		</div>
		<!--饼图-->
		<div style="background-color: #fff;padding-top: 18px;margin-top: 6px;">
			<div class="scFristqh">
				<el-tabs v-model="activeNamePie" @tab-click="handlePieClick">
					<el-tab-pane label="地方政府3天" name="1"></el-tab-pane>
					<el-tab-pane label="城燃企业5%" name="2"></el-tab-pane>
				</el-tabs>
			</div>
			<div class="tabs-content">
				<div v-show="activeNamePie==='1'">
					<div class="fontSize_div">
						<div class="fontSize">0.508</div>
						<div class="fontSize" style="font-size: 14px">亿立方米</div>
					</div>
					<div id="gasPieTwo" style="width:100%;height:240px;"></div>
				</div>
				<div v-show="activeNamePie==='2'">
					<div class="fontSize_div">
						<div class="fontSize">0.8543</div>
						<div class="fontSize" style="font-size: 14px">亿立方米</div>
					</div>
					<div id="gasPieThree" style="width:100%;height:240px;" ref="second"></div>
					<div>
					</div>
				</div>

			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'child3',
		data() {
			return {
				activeNamePie: '1',
				tabPosition: 'left',
				gasPieTwoData: [{
						value: 0.127,
						name: "阿拉善盟"
					},
					{
						value: 0.127,
						name: "呼和浩特"
					},
					{
						value: 0.095,
						name: "锡林格勒"
					},
					{
						value: 0.064,
						name: "呼伦贝尔"
					},
					{
						value: 0.064,
						name: "鄂尔多斯"
					},
					{
						value: 0.031,
						name: "其他"
					}
				],
				gasPieThreeData: [{
						value: 0.2135,
						name: "阿拉善盟"
					},
					{
						value: 0.2135,
						name: "呼和浩特"
					},
					{
						value: 0.1597,
						name: "锡林格勒"
					},
					{
						value: 0.1076,
						name: "呼伦贝尔"
					},
					{
						value: 0.1076,
						name: "鄂尔多斯"
					},
					{
						value: 0.0524,
						name: "其他"
					}
				]
			}
		},
		mounted() {
			this.drawPie('gasPieTwo', this.gasPieTwoData);
			this.drawGasPie()

		},
		methods: {
			//本年度储气能力
			drawGasPie() {
				let myChart = this.$echarts.init(document.getElementById('gasPie'));
				let option = {
					tooltip: {
						trigger: "item",
						formatter: "{a} <br/>{b}: {c}亿立方米({d}%)"
					},
					legend: {
						orient: 'vertical',
						right: 0,
						top: 70,
						bottom: 20,
						itemGap: 10,
						data: ["城燃企业5%", "地方政府3天"],
						itemWidth: 15,
						itemHeight: 10,
						// 使用回调函数
						formatter: function(name) {
							var data = option.series[0].data;
							var total = 0;
							var tarValue;
							for (var i = 0, l = data.length; i < l; i++) {
								total += data[i].value;
								if (data[i].name == name) {
									tarValue = data[i].value;
								}
							}
							var p = ((tarValue / total) * 100).toFixed(1);
							return name + " " + " " + p + "%";
						},
					},
					series: [{
						name: '本年度储气能力',
						type: "pie",
						radius: ["40%", "55%"],
						center: ["50%", "40%"],
						label: {
							show: false
						},
						data: [{
								value: 0.85,
								name: "城燃企业5%"
							},
							{
								value: 0.51,
								name: "地方政府3天"
							},
						],
						itemStyle: {
							normal: {
								color: function(params) {
									//自定义颜色
									let colorList = [
										'#95F0F1', '#FF850D'
									];
									return colorList[params.dataIndex]
								}
							}


						},

					}]
				};
				// 使用刚指定的配置项和数据显示图表。
				myChart.setOption(option);
			},
			//地方政府3天
			drawPie(id, seriesData) {
				let myChart = this.$echarts.init(document.getElementById(id));
				let option = {
					tooltip: {
						trigger: "item",
						formatter: "{b}: {c} ({d}%)"
					},
					legend: {
						orient: "horizontal",
						bottom: 10,
						left: "center",
						itemGap: 10,
						data: ["阿拉善盟", "呼和浩特", "锡林格勒", "呼伦贝尔", "鄂尔多斯", "其他"],
						itemWidth: 15,
						itemHeight: 10
					},
					grid: {
						bottom: 40
					},
					series: [{

						type: "pie",
						radius: ["40%", "55%"],
						center: ["50%", "40%"],
						label: {
							formatter: "{per|{d}%\n}",
							padding: [0, -40, 5],
							rich: {
								per: {
									fontSize: 12,
									color: "#9B9DA1"
								}
							}
						},
						labelLine: {
							length: 15,
							length2: 30
						},
						data: seriesData,
						itemStyle: {
							normal: {
								color: function(params) {
									//自定义颜色
									let colorList = [
										'#31D9E5', '#23F5B1', '#FFA416', '#EF755F', '#CF5FEF', '#4210FF',
									];
									return colorList[params.dataIndex]
								}
							}


						},

					}]
				};
				// 使用刚指定的配置项和数据显示图表。
				myChart.setOption(option);

			},
			// 地方政府3天tab切换
			handlePieClick(tab, event) {
				if (tab.index == 1) {
					this.$nextTick(() => {
						this.drawPie('gasPieThree', this.gasPieThreeData);
					})
				}

			},
		}
	}
</script>

<style scoped lang="scss">
	.child3 {
		.map {
			height: auto;
			width: 100%;
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
			padding-left: 0;
		}

		.scFristqh /deep/ .el-tabs__item.is-active {
			/*background-color: #236BD7;
            color: #fff;*/
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

		.scFristqh /deep/ .el-tabs {
			/*width: 342px;
            border: 1px solid #236BD7;
            border-radius: 3px;*/
			width: 345px;
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

		.scFristqh /deep/ .el-tabs__active-bar,
		.scFristqh /deep/ .el-tabs__nav-wrap::after {
			display: none;
		}

		.scFristqh /deep/ .el-tabs__nav-scroll {
			height: 31px;
		}

		#gasPieTwo,
		#gasPieThree {
			background-image: url(../../assets/img/industryAnalysis/椭圆.png);
			background-repeat: no-repeat;
			background-position: 50% 37%;
			background-size: 65px 65px;
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

		.map-box {
			position: relative;
		}

		map-box /deep/ .des {
			font-size: 12px;
			color: #7D87A1;
		}

		.map-content {
			position: absolute;
			background: rgba(248, 251, 254, 0.77);
			border: 1px solid #D6E6F4;
			box-shadow: 0 0 35px 0 rgba(119, 148, 193, 0.45);
			border-radius: 3px;
			top: 140px;
			left: 19px;
		}

		.map-box /deep/ .el-tabs__nav-wrap::after {
			display: none;
		}

		.map-box /deep/ .el-tabs--left .el-tabs__item.is-left {
			text-align: left;
		}

		.map-box /deep/ .el-tabs__item.is-active {
			background-color: #e8f2fe;
			color: #7D87A1;
		}

		.map-box /deep/ .el-tabs--left .el-tabs__header.is-left {
			margin-right: 0;
		}

		.map-box /deep/ .el-tabs__active-bar {
			display: none;
		}

		.map-box /deep/ .el-tabs__item {
			color: #7D87A1;
			height: 30px;
			line-height: 30px;
		}

		.modal {
			position: absolute;
			background-image: url(../../assets/img/oilgas/chuqimodal.png);
			border-radius: 3px;
			top: 111px;
			left: 180px;
			color: #fff;
			height: 200px;
			width: 200px;
			background-repeat: no-repeat;
			background-position: center;
			background-size: cover;
			padding: 18px 10px 10px;
		}

		.modal-des-box {
			background-color: rgba(106, 113, 129, 0.7);
			text-align: center;
			width: 85px;
			margin-bottom: 10px;
			font-size: 12px;
		}

		.modal-city {
			font-size: 13px;
			margin-bottom: 10px;
			text-align: center;
		}

		.modal-box {
			display: flex;
			justify-content: space-between;
		}

		.modal .modal-title {
			color: #8fc8fa;
		}

		.modal .model-des {
			font-weight: bold;
		}
		.el-tabs__nav{
			z-index: 1;
		}
	}
</style>
