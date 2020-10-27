import Vue from 'vue'
import VueRouter from 'vue-router';

// 导入一些页面级别的组件（这些组件需要自己创建）
import Index from './pages/Indexs/index.vue'
import Main from './pages/Main.vue'
const Oil = () => import("./oilgas/Oil.vue");
// 资源分布
import resourceDistribution from './components/resourceDistribution.vue'
// 项目管理
import ProjectManagement from './components/ProjectManagement.vue'
// 能源运行
import OperationEnergy from './components/OperationEnergy.vue'
// 能源结构
import energystructure from './components/energystructure.vue'
// 基础设施
import Infrastructure from './components/Infrastructure.vue'
// 现代能源经济
import EnergyEconomics from './components/EnergyEconomics.vue'
// 能流图
import energystream from './components/energystream.vue'
// 指标监测
import Indicatorsmonitoring from './components/Indicatorsmonitoring.vue'

// 油气平台组件
const ChuQing = () => import("./oilgas/youqifenxi/chuqing.vue");
//油气生产管理
const Yunayou= () => import("./oilgas/youqishengchan/yuanyou.vue");
//const ChengPingYou= () => import("./oilgas/youqishengchan/chengpingyou.vue");
//天然气保供中心
const Shengchanguanli= () => import("./oilgas/tianranqigongbao/shengchanguanli.vue");

//油气销售管理
const YouqixiaoShou= () => import("./oilgas/youqixiaoshou/chengpinyou.vue");

// 油气储运
const KuCun= () => import("./oilgas/youqichuyun/kucun.vue");
// 油气销售
const XSChengPinYou= () => import("./oilgas/youqixiaoshou/chengpinyou.vue");
//油气供应 
const Youqigongyingguanli= () => import("./oilgas/youqigongyingguanli/youqigongyingguanli.vue");
// 将vue-router注册到全局，这样每一个组件都可以使用router-link和router-view组件了
Vue.use(VueRouter);

// 定义路由规则（例如：当用户访问了/goods这个页面时，router-view标签渲染Goods组件）
var routes = [{
		path: '/index',
		component: Index
	},
	{
		path: '/',
		redirect: '/login'
	},
	{
		path: '/login',
		component: () => import('./pages/login/login.vue')
	},
	// 报警列表
	{
		path: '/alarmList',
		component: () => import('./pages/alarm-list/index.vue')
	},
	// 综展路由
	{
		path: '/main',
		component: Main,
		name: 'Main',
		children: [{
				path: '/main',
				name: 'resourceDistribution',
				component: resourceDistribution
			},
			{
				path: '/ProjectManagement',
				name: 'ProjectManagement',
				component: ProjectManagement
			},
			{
				path: '/OperationEnergy',
				name: 'OperationEnergy',
				component: OperationEnergy
			},
			{
				path: '/energystructure',
				name: 'energystructure',
				component: energystructure
			},
			{
				path: '/Infrastructure',
				name: 'Infrastructure',
				component: Infrastructure
			},
			{
				path: '/EnergyEconomics',
				name: 'EnergyEconomics',
				component: EnergyEconomics
			},
			{
				path: '/energystream',
				name: 'energystream',
				component: energystream
			},
			{
				path: '/Indicatorsmonitoring',
				name: 'Indicatorsmonitoring',
				component: Indicatorsmonitoring
			},
		]
	},
	// 油气平台路由
	{
		path: '/oil',
		component: Oil,
		name: 'Oil',
		children: [
			{
				path: '/oil',
				name: 'ChuQing',
				component: ChuQing
			},
			{
				path: '/Yunayou',
				name: 'Yunayou',
				component: Yunayou
			},
			{
				path: '/YouqixiaoShou',
				name: 'YouqixiaoShou',
				component: YouqixiaoShou
			},
			{
				path: '/Shengchanguanli',
				name: 'Shengchanguanli',
				component: Shengchanguanli
			},
			{
				path: '/KuCun',
				name: 'KuCun',
				component: KuCun
			},
			{
			    path: '/Youqigongyingguanli',
			    name: 'Youqigongyingguanli',
			    component: Youqigongyingguanli
			 },
		]
	}

]

// 创建路由实例
var router = new VueRouter({
	routes,
	mode: 'history'
});

// 导出路由对象
export default router
