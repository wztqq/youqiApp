<template>
	<div class="scgl">
		<el-tabs v-model="activeName">
			<el-tab-pane label="生产管理" name="first" :key="'first'">
				<child1></child1>
			</el-tab-pane>
			<el-tab-pane label="供应管理" name="second" :key="'second'">
				<child2></child2>
			</el-tab-pane>
			<el-tab-pane label="储气管理" name="third" :key="'third'">
				<child3></child3>
			</el-tab-pane>
			<el-tab-pane label="管输管理" name="fourth" :key="'fourth'">
				<child4></child4>
			</el-tab-pane>
			<el-tab-pane label="销售管理" name="fifth" :key="'fifth'">
				<child5></child5>
			</el-tab-pane>
			<el-tab-pane label="压非保民" name="sixth" :key="'sixth'">
				<child6></child6>
			</el-tab-pane>
			<el-tab-pane label="气销总览" name="seventh" :key="'seventh'">
				<child7></child7>
			</el-tab-pane>
		</el-tabs>
	</div>
</template>
<script>
	import shenChan from './shenchan.vue'
	import gongYing from './gongying.vue'
	import chuQi from './chuqi.vue'
	import guanShu from './guanshu.vue'
	import xiaoShou from './xiaoshou.vue'
	import yaFei from './yafei.vue'
	import qiXiao from './qixiao.vue'
	export default {
		name: 'scgl',
		components: {
			child1: shenChan,
			child2: gongYing,
			child3: chuQi,
			child4: guanShu,
			child5: xiaoShou,
			child6: yaFei,
			child7: qiXiao
		},
		data() {
			return {
				//默认第一个选项卡
				activeName: "fourth",
			}
		},
		mounted() {

		}
	}
</script>
<style scoped>
.scgl /deep/ .el-tabs__nav{
	position: fixed;
	top: 100px;
	left: 16px;
	z-index:4;
}
.scgl /deep/.el-tabs__content{
	padding-top:90px;
}
</style>
<style lang="scss">
	.scgl {
		.el-tabs__nav {
			width: 343px;
			height: 29px;
			overflow-x: auto;
			background-color: rgba(0, 0, 0, 0.15);
			border-radius: 5px;
			display: flex;
			.el-tabs__item {
				width: 113px;
				height: 25px;
				font: 12px PingFangSC-Regular;
				line-height: 25px;
				margin-top: 2px;
				text-align: center;
				color: white;
				&.is-active {
					width: 113px;
					height: 25px;
					background-color: rgba(0, 0, 0, 0.3);
					font: 12px PingFangSC-Regular;
					line-height: 25px;
					text-align: center;
					border-radius: 5px;
					border-bottom: 0;
				}
			}
			.el-tabs__active-bar {
				height: 0;
			}
		}
	}
</style>
