<template>
  <div class="scgl scgl-tab">
    <van-tabs v-model="activeName" class="sec-nav" type="border-card">
      <van-tab title="储情分析" name="first" :key="'first'">
        <child1></child1>
      </van-tab>
      <van-tab title="生产分析" name="second" :key="'second'">
        <child2></child2>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import chuqingfenxi from './chuqingfenxi.vue'
import shengchanfenxi from './shengchanfenxi.vue'

export default {
  name: 'youqifenxi',
  components: {
    child1: chuqingfenxi,
    child2: shengchanfenxi

  },
  data() {
    return {
      //默认第一个选项卡
      activeName: "first",
    }
  },
  mounted() {

  }
}
</script>
<style scoped lang="scss">
.scgl /deep/ .sec-nav > .van-tabs__header .van-tabs__nav {
  color: #fff;
  height: 29px;
  background-color: rgba(0, 0, 0, 0.15);
  position: fixed;
  top: 100px;
  z-index: 2;
  border-radius: 5px;
}

.scgl /deep/ .sec-nav > .van-tabs__header .van-tabs__content {
  padding-top: 60px;
}

.scgl /deep/ .sec-nav > .van-tabs__header .van-tabs__item {
  color: #fff;
  padding: 0 14px;
  font-size: 12px;
  line-height: 30px;
  height: 30px;
}

.scgl /deep/ .sec-nav > .van-tabs__header .van-tabs__item.is-active {
  background-color: #01121F;
  opacity: 0.35;
  border-radius: 5px;
}

.scgl /deep/ .sec-nav > .van-tabs__header .van-tabs__active-bar {
  display: none;
}

.scgl /deep/ .sec-nav > .van-tabs__header .van-tabs--bottom .van-tabs__item.is-bottom:nth-child(2),
.scgl /deep/ .sec-nav > .van-tabs__header .van-tabs--bottom .van-tabs__item.is-top:nth-child(2),
.scgl /deep/ .sec-nav > .van-tabs__header .van-tabs--top .van-tabs__item.is-bottom:nth-child(2),
.scgl /deep/ .sec-nav > .van-tabs__header .van-tabs--top .van-tabs__item.is-top:nth-child(2) {
  padding-left: 14px;
}


</style>
<style lang="scss">
.scgl-tab {
  .sec-nav .van-tabs__wrap {
    position: fixed;
    top: 100px;
    z-index: 4;
    width: 340px;
    margin-left: -170px;
    left: 50%;
  }
  .sec-nav .van-tabs__nav{
    background-color: rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    height: 29px;
    line-height: 29px;
    display: flex;
    align-items: center;
    padding: 0 2px;
    /*margin: 0 16px;*/


  }
  .sec-nav .van-tabs__nav .van-tab{
    color: #fff;
    font-size: 12px;
    height: 25px;
    line-height: 25px;

  }
  .sec-nav .van-tabs__nav .van-tab.van-tab--active{
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 5px;
  }

}
</style>
