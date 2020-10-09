<template>
<<<<<<< HEAD
  <div id="main">
    <div>
      <van-nav-bar title="标题" left-text="返回" left-arrow>
        <template #right>
          <van-icon name="search" size="18" />
        </template>
      </van-nav-bar>
=======
    <div id="main">
        <div>
            <van-nav-bar title="标题" left-text="返回" left-arrow>
                <template #right>
                    <van-icon name="search" size="18" />
                </template>
            </van-nav-bar>
        </div>
        <div class="test">
            <van-tabs @click="onClick">
                <van-tab v-for="(item,index) in tabList" :key="index" :title="item.name"/> 
            </van-tabs>
        </div>
        <router-view></router-view>
>>>>>>> 95772a886771bd38806f4912b6202f5d9a9c72b9
    </div>
    <div>
      <van-tabs @click="onClick">
        <van-tab v-for="(item,index) in tabList" :key="index" :title="item.name" />
      </van-tabs>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
<<<<<<< HEAD
  data() {
    return {
      tabList: [
        {
          name: "油气分析系统",
          router: "ChuQing"
        },
        {
          name: "天然气保供中心",
          router: "ChuQing"
        },
        {
          name: "油气生产管理",
          router: "Yunayou"
        },
        {
          name: "油气供应管理",
          router: "ChuQing"
        },
        {
          name: "油气储运管理",
          router: "ChuQing"
=======
    data(){
        return{
            tabList:[{
                name:'油气分析系统',
                router:'ChuQing'
            },{
                name:'天然气保供中心',
                router:'Shengchanguanli'
            },{
                name:'油气生产管理',
                router:'Yunayou'
            },{
                name:'油气供应管理',
                router:'energystructure'
            },{
                name:'基础设施',
                router:'Infrastructure'
            },{
                name:'现代能源经济',
                router:'EnergyEconomics'
            },{
                name:'能流图',
                router:'energystream'
            },{
                name:'指标监测',
                router:'Indicatorsmonitoring'
            }]
        }
    },
    methods:{
        onClick(name) {
            console.log(name);
            this.$router.push({name:this.tabList[name].router})
>>>>>>> 95772a886771bd38806f4912b6202f5d9a9c72b9
        },
        {
          name: "油气销售管理",
          router: "ChuQing"
        },
        {
          name: "路由配置",
          router: "Setroute"
        }
      ]
    };
  },
  methods: {
    onClick(name) {
         this.$router.push({ name: this.tabList[name].router });
    }
  }
};
</script>

<style lang="scss" scoped>
<<<<<<< HEAD
#main {
  font-size: 16px;
  .van-tab__text {
    font-size: 14px;
    height: 0.8rem;
  }
}
=======
	.test{
		// border: 1px solid red;
		// position: fixed;
		// top:100px;
		// left: 0;
		
	}
    #main{
		// position: relative;
        font-size: 16px;
        .van-tab__text{
            font-size: 14px;
            height: .8rem;
        }
    }
>>>>>>> 95772a886771bd38806f4912b6202f5d9a9c72b9
</style>