<template>
  <div id="main">
    <div class="header">
      <van-nav-bar>
        <template #title>
          <van-image width="2.7rem" :src="require('../assets/img/gasmap/title.png')" />
        </template>
      </van-nav-bar>
    </div>
    <div class="menu">
      <van-tabs @click="onClick" v-model="active" class="tabs">
        <van-tab v-for="(item,index) in tabList" :name="item.router" :key="index" :title="item.name"/>
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
      curPath: function () {
        return this.$route.name;
      }
    },
    methods: {
      onClick(ind) {
        this.$router.push({
          name: ind
        }).catch(err => err)

      }
    },
    watch: {
      curPath: function (newVal, oldVal) {
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




</style>
