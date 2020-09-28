<template>
  <div class="header">
      <van-nav-bar
        :title="title"
        :left-text='commonHeaderInfo.leftText'
        :right-text="commonHeaderInfo.rightText"
        :left-arrow="commonHeaderInfo.leftArrow"
        @click-left="onClickLeft"
        @click-right="onClickRight">
            <template #right>
                <img class="logOutImg" src="../assets/img/index/001.png" alt="">
                <!-- <van-icon name="search" size="18" /> -->
            </template>
        </van-nav-bar>
  </div>
</template>

<script>
export default {
    data(){
        return{
            
        }
    
    },
    props:{
        title:{
            type:String,
            default:'内蒙古自治区能源大数据平台'
        },
        commonHeaderInfo:{
           type: Object,
           default:()=>{
               return{
                   leftText:'',
                   rightText:'',
                   leftArrow:true
               }
           }
        }
    },
    methods:{
        // 返回上一级
        onClickLeft(){
            this.$router.go(-1)
        },
        // 
        onClickRight(){
            this.$dialog.alert({
                message: '确定退出？',
                showCancelButton:true,
            }).then(()=>{
                this.$router.push('/login')
            });
        }
    }
}
</script>

<style lang="scss" scoped>
.logOutImg{
    width: 0.6rem;
}
</style>>

