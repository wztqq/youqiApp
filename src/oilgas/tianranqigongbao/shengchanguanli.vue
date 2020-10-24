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
				activeName: "first",
			}
		},
		mounted() {

		}
	}
</script>
<style>
	.el-tabs__item{
		padding: 0 5px;
	}
</style>
