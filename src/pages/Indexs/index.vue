<template>
  <div id="index">
    <v-header :commonHeaderInfo="commonHeaderInfo"/>
    <v-top/>
    <div id="index-main">
      <div v-for="(item,index) of tabList" :key="index" @click="goLinnk(item)">
        <van-icon name="arrow" class="rightIcon" color="#004EFF" />
        <div :class="`itemBg itemBg${index+1}`"></div>
        <div class="itemTitle1">{{item.title}}</div>
        <div class="itemTitle2">{{item.enTitle}}</div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
        commonHeaderInfo:{
            leftArrow:false
        },
      tabList: [
        {title: "综合",enTitle: "comprehensive",routeName: "resourceDistribution",},
        { title: "煤炭", enTitle: "coal",},
        { title: "电力", enTitle: "power",},
        { title: "油气",enTitle: "Oll and gas",routeName: "ChuQing"},
      ],
    };
  },
  components:{
      'v-header': () => import('../../components/header'),
      'v-top': () => import('./components/top')
  },
  methods:{
      goLinnk(item){
          if(!item.routeName)return
          this.$router.push({name:item.routeName})
      }
  }
};
</script>
<style lang="scss" scoped>
#index {
  > #index-header {
    width: 100%;
    height: 1.2rem;
    position: relative;
    > div:first-child {
      width: 100%;
      height: 1.2rem;
      line-height: 1.2rem;
      text-align: center;
      color: #000;
      font-size: 16px;
      font-weight: 600;
    }
    > div:last-child {
      width: 0.6rem;
      height: 0.6rem;
      position: absolute;
      top: 0.35rem;
      right: 0.3rem;
      > img {
        width: 100%;
      }
    }
  }
  
  > #index-main {
    > div {
      width: 44%;
      height: 4.2rem;
      background: #ffffff;
      box-shadow: 0px 0px 0.32rem 0px rgba(0, 108, 255, 0.27);
      float: left;
      margin: 0.2rem 3%;
      border-radius: 0.2rem;
      padding-top: 0.3rem;
      .rightIcon {
        width: 0.52rem;
        height: 0.52rem;
        background: rgba(0, 133, 255, 0.1);
        border-radius: 100%;
        text-align: right;
        float: right;
        right: 0.2rem;
        text-align: center;
        line-height: 0.52rem;
      }
      > .itemBg {
        width: 1.4rem;
        height: 1.4rem;
        border-radius: 0.2rem;
        margin: auto;
        margin-top: 0.83rem;
         
      }
      .itemBg1 {
          background: url('../../assets/img/main/compr.png') no-repeat center;
         background-size: 0.51rem 0.59rem;
        background-color: #006cff;
        box-shadow: 0px 0px 18px 0px rgba(0, 108, 255, 0.8);
      }
      .itemBg2 {
            background: url('../../assets/img/main/coal.png') no-repeat center;
         background-size: 0.51rem 0.59rem;
        background-color: #08bbeb;
        box-shadow: 0px 0px 18px 0px rgba(8, 187, 235, 0.8);
      }
      .itemBg3 {
            background: url('../../assets/img/main/power.png') no-repeat center;
         background-size: 0.51rem 0.59rem;
        background-color: #1cdd80;
        box-shadow: 0px 0px 18px 0px rgba(28, 221, 128, 0.8);
      }
      .itemBg4 {
            background: url('../../assets/img/main/gas.png') no-repeat center;
         background-size: 0.51rem 0.59rem;
        background-color: #5c2cd6;
        box-shadow: 0px 0px 18px 0px rgba(92, 44, 214, 0.8);
      }
      .itemTitle1 {
        font-size: 0.3rem;
        text-align: center;
        margin-top: 0.3rem;
        font-weight: 400;
        color: #001c4e;
      }
      .itemTitle2 {
        font-size: 0.2rem;
        text-align: center;
        margin-top: 0.15rem;
        color: rgb(191, 198, 209);
      }
    }
  }
}
</style>