<template>
	<div id="main">
		<div class="top">
			<van-nav-bar title="标题" left-text="返回" left-arrow  @click-left="onClickLeft">
				<template #right>
					<van-icon name="search" size="18" />
				</template>
			</van-nav-bar>
		</div>
		<div class="title" >
			<van-tabs @click="onClick" v-model="active">
				<van-tab v-for="(item,index) in tabList" :name="item.router" :key="index" :title="item.name" />
			</van-tabs>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				active: "ChuQing",
				tabList: [{
					name: '油气分析系统',
					router: 'ChuQing'
				}, {
					name: '天然气保供中心',
					router: 'Shengchanguanli'
				}, {
					name: '油气生产管理',
					router: 'Yunayou'
				}, {
					name: '油气供应管理',
					router: 'Youqigongyingguanli'
				}, {
					name: '油气储运管理',
					router: 'KuCun'
				}, {
					name: '油气销售管理',
					router: 'YouqixiaoShou'
				}]
			}
		},
		computed: {
			curPath: function(){
				return this.$route.name;
			}
		},
		methods: {
		    // 返回
            onClickLeft(){
                window.location.href = 'http://140.210.91.91:8080/mengenergy-appvue/#/index'
			},
			onClick(ind) {
				console.log(ind);
				this.$router.push({
					name: ind
				}).catch(err => err)

			}
		},
		watch:{
			curPath: function(newVal, oldVal){
				this.active = newVal
			}
		}
	}
</script>

<style lang="scss" scoped>
	#main {
		font-size: 16px;

		.van-tab__text {
			font-size: 14px;
			height: .8rem;
		}
	}

	.top {
		position: fixed;
		z-index: 2;
		width: 100%;
	}

	.title {
		position: fixed;
		z-index: 2;
		top: 46px;
	}
</style>
