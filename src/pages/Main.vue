<template>
    <div id="main">
        <div>
            <van-nav-bar title="标题" left-text="返回" left-arrow>
                <template #right>
                    <van-icon name="search" size="18" />
                </template>
            </van-nav-bar>
        </div>
        <div>
            <van-tabs @click="onClick">
                <van-tab v-for="(item,index) in tabList" :key="index" :title="item.name"/> 
            </van-tabs>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data(){
        return{
            tabList:[{
                name:'资源分布',
                router:'resourceDistribution'
            },{
                name:'项目管理',
                router:'ProjectManagement'
            },{
                name:'能源运行',
                router:'OperationEnergy'
            },{
                name:'能源结构',
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
        },
    }
}
</script>

<style lang="scss" scoped>
    #main{
        font-size: 16px;
        .van-tab__text{
            font-size: 14px;
            height: .8rem;
        }
    }
</style>