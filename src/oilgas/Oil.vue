<template>
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
	// .test{
		// border: 1px solid red;
		// position: fixed;
		// top:100px;
		// left: 0;
		
	// }
    #main{
		// position: relative;
        font-size: 16px;
        .van-tab__text{
            font-size: 14px;
            height: .8rem;
        }
    }
</style>