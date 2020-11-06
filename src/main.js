import Vue from 'vue'
import App from './App.vue'
// 引入 router 路由
import router from '../src/router'
import Vant from 'vant';
import 'vant/lib/index.css';
// 引入公共样式
import './assets/styles/style.scss'
// 引入文件 取消默认样式
import './assets/base.css'
// 引入 rem
import './assets/rem'

// 引入字体图标库
import './assets/font-awesome-4.7.0/css/font-awesome.min.css'
// 引入 animate 动画
import './assets/animate.min.css'
// 引入 axios封装
import './axios';
// 引入 echarts
import echarts from "echarts";
// table
import VueGoodTablePlugin from 'vue-good-table';
import 'vue-good-table/dist/vue-good-table.css'
import $ from 'jquery'
Vue.prototype.$echarts = echarts

//引入ViewUI
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

//引入less
import less from 'less';

// 把 vuex 的代码仓库引入到当前页面
import store from './store/store.js'

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Element);
Vue.use(ViewUI);
Vue.use(less);

// 图片懒加载
// import VuelazyLoad from 'vue-lazyload'
// Vue.use(VuelazyLoad,{
//   // 如果你图片加载错误时，我先加载这张图片
//   error:'http://localhost:3000/1.jpg',
//   // 如果你图片还没有加载出来时，我先加载这张图片
//   loading:'http://localhost:3000/2.jpg',
//   // 在三秒之后展示真实的图片
//   throttleWait:3000
// })

Vue.config.productionTip = false

// eventbus 中央事件总线 兄弟组件传参
// const eventbus = new Vue();
// Vue.prototype.$eventbus = eventbus;
Vue.use(Vant);
Vue.use(VueGoodTablePlugin);
new Vue({
  store, // 让每个组件都能通过 this.$store 获取 vuex 的 仓库
  router,// 让每个组件都能通过 this.$router 获取 路由 对象
  render: h => h(App),
}).$mount('#app')
