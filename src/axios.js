// axios 的 封装
import Vue from 'vue';
import axios from 'axios';

Vue.prototype.$axios = axios;
Vue.prototype.$baseurl = 'http://localhost:3000';
export default axios;