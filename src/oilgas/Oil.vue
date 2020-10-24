<template>
    <div id="main">
        <div class="top">
            <van-nav-bar title="标题" left-text="返回" left-arrow>
                <template #right>
                    <van-icon name="search" size="18" />
                </template>
            </van-nav-bar>
        </div>
        <div class="title">
            <van-tabs @click="onClick">
                <van-tab v-for="(item,index) in tabList" :key="index" :title="item.name"/>
            </van-tabs>
        </div>
        <router-view></router-view>
    </div>
    <!-- <div>
      <van-tabs @click="onClick">
        <van-tab v-for="(item,index) in tabList" :key="index" :title="item.name" />
      </van-tabs>
    </div>
    <router-view></router-view> -->
  </div>
</template>

<script>
export default {
<<<<<<< HEAD
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
                name:'油气销售管理',
                router:'YouqixiaoShou'
            }]
        }
    },
    methods:{
        onClick(name) {
            console.log(name);
            this.$router.push({name:this.tabList[name].router})
=======
  data() {
    return {
      tabList: [
        {
          name: "油气分析系统",
          router: "ChuQing"
        },
        {
          name: "天然气保供中心",
          router: "Shengchanguanli"
        },
        {
          name: "油气生产管理",
          router: "Yunayou"
        },
        {
          name: "油气供应管理",
          router: "Youqigongyingguanli"
>>>>>>> 273ca3d492816043b76e2f49e9ef54114dd685ba
        },
        {
          name: "油气储运管理",
          router: "KuCun"
        },
        {
          name: "油气销售管理",
          router: "XSChengPinYou"
        },
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
    #main{
        font-size: 16px;
        .van-tab__text{
            font-size: 14px;
            height: .8rem;
        }
    }
.top{
      position: fixed;
    z-index: 2;
    width: 100%;
}
.title{
      position: fixed;
    z-index: 2;
    top: 46px;
}
</style>
