<template>
     <div id="index-nav">
      <div>
        <p>选择平台入口</p>
        <p>Select platform entrance</p>
      </div>
      <div @click="$router.push('/alarmList')">
          <span class="badgeNum">12</span>
        <img src="../../../assets/img/main/alarm.png" alt />
      </div>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    }
}
</script>
<style lang="scss" scoped>
#index-nav {
    width: 100%;
    height: 2.5rem;
    display: flex;
    justify-content: space-around;
    align-items: center;

    // text-align: center;
    > div:first-child {
      width: 70%;
      height: 1.12rem;
      padding: 0.25rem;
      background: rgb(229, 241, 255);
      border-radius: 0.3rem;
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      > p:first-child {
        color: #313131;
        font-size: 0.3rem;
        font-weight: 600;
      }
      > p:last-child {
        font-size: 0.24rem;
        padding-top: 0.08rem;
        color: rgb(181, 190, 201);
      }
    }
    > div:last-child {
      width: 1.12rem;
      height: 1.12rem;
      background: rgb(255, 232, 234);
      border-radius: 0.3rem;
      line-height: 1.12rem;
      text-align: center;
      position: relative;
      .badgeNum{
          position: absolute;
          display: inline-block;
          width: 0.3rem;
          line-height: 0.3rem;
          text-align: center;
          background-color: rgba(255, 90, 90, 1);
          color: #fff;
          font-size: 0.2rem;
          border-radius: 100%;
          top: 0px;
          right: 0;
      }
      img {
        width: 0.91rem;
        vertical-align:middle;
      }
    }
  }
</style>