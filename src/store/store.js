//  编写vuex 相关代码

// 1. 下载 vuex

// 2. 引入 vuex
import Vuex from 'vuex';

// 引入 vue
import Vue from 'vue';
Vue.use(Vuex)

// 3. 创建代码仓库，保存vuex数据
const store = new Vuex.Store({
    // 状态：其实就是一些变量，用来保存数据的，如果组件中用到了这个变量，如果这个变量更新了，那么组件就会自动更新
    state:{
        // 购物车中的商品用该数组描述
        cart:JSON.parse(localStorage.getItem('cart') || '[]')
    },
    getters:{
        // 获取购物车中所有商品的总价
        allMoney(state){
            var m = 0;
            var len = state.cart.length;
            for(var i=0;i<len;i++){
                var g = state.cart[i];
                m += g.num * g.price;
            }
            return m
        }
    },
    // vuex 中 唯一改变 state 的方法
    // 就相当于，执行 mutations 中的某个方法时更新stase中的某个数据
    mutations:{
        // state和mutations是关键字 必须这么去写
        // cart 和 addToCart 是自己定义的属性和方法，可以自己随便写
        // 在 addToCart 中，有两个系统自带的参数，分别是 state，payload
        // state 指当前的 store 仓库中的 state对象，通过他就可以获取 cart 数据
        // payload 指使用 addToCart函数时，传入到函数中的参数，payload翻译过来叫做有效载荷，其实就是参数
        addToCart(state,payload){
            // 把传过来的参数追加的 cart 数组当中
            // console.log('mutations->payload',payload)
            state.cart.push(payload)
            // console.log(state.cart)
        },
        // 如果存在，则购物车中该商品数量+1
        jia(state,payload){
            state.cart[payload].num++;
        },
        // 点击按钮减少数量
        jian(state,payload){
            state.cart[payload].num--;
        },
        // 删除
        del(state,payload){
            state.cart.splice(payload,1)
        }

    },
    // vuex 建议我们把 异步代码 和 业务逻辑 代码写在 actions 中，然后 actions 调用 mutation 中的函数
    actions:{
        // 回调函数中自带两个参数，分别是 context 和 payload
        // context 表示上下文对象，里面具有 commit 方法，即在actions中，如何调用 mutations中的方法
        // payload 表示有效载荷 其实就是参数
        addToCart(context,payload){
            // 判断当前商品是否在购物车中存在的
            // context.state.cart 获取 state 的 cart 中数据
            // findIndex 对数据进行查询，返回匹配成员的下标，payload是当前用户所选的商品
            //  循环时查询条件为 判断商品的编号是否相同，
            // 相同=> 表示在购物车中，找到了该商品，findIndex 返回其下标，
            var ind = context.state.cart.findIndex(item=>item.id===payload.id)
            if(ind === -1){
                // 如果不存在，则把该商品添加到购物车中，数量为1
                // 调用了mutations中的方法
                context.commit('addToCart',{...payload,num:1});
                // console.log('actions->payload',payload)
            }else{
                // 如果存在，则购物车中该商品数量+1
                context.commit('jia',ind);
            }
        },
        jian(context,payload){
            var ind = context.state.cart.findIndex(item=>item.id===payload.id)
            if(ind === -1){
                // 不存在
            }else{
                // 如果存在，则购物车中该商品数量-1
                // 如果商品数量 <=0 时
                if(context.state.cart[ind].num-1 <= 0){
                    // 删除
                    context.commit('del',ind);
                }else{
                    // -1
                    context.commit('jian',ind);
                }
            }
        }
    }
})

// Vuex 的订阅事件 
// 每次执行 mutations 后 该函数会自动触发
store.subscribe(()=>{
    // 数据持久化
    // 把 vuex 中的 state.cart 数据保存到 storage 中
    localStorage.setItem('cart',JSON.stringify(store.state.cart))
})

// 4. 把代码仓库抛出
export default store;