<template>
    <div class="alarm-wap">
        <v-header :commonHeaderInfo="commonHeaderInfo"/>
        <v-top/>
        <div class="lsit">
            <div class="item-list" v-for="i of 5" :key="i">
                <div class="list_top">
                    <div>
                        <img src="../../assets/img/warning.png" alt="">
                        <span class="item_name">500kV定远营变电站</span>
                    </div>
                    <span class="time">2020.09.16-10:25:41</span>
                </div>
                <ul class="ul_content">
                    <li>
                        <p>300</p>
                        <p>变电容量(MVA)</p>
                    </li>
                    <li class="two_li">
                        <p>94</p>
                        <p>负载率(%)</p>
                    </li>
                    <li>
                        <p>负载过重</p>
                        <p>预警类型</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            commonHeaderInfo:{
                leftArrow:true
            }
        }
    },
    components:{
         'v-header': () => import('../../components/header'),
        'v-top': () => import('../Indexs/components/top')
    }
}
</script>
<style scoped lang="scss">
    .lsit{
        font-size: 0.24rem;
        .item-list{
            width: 95%;
            padding:0 0.25rem;
            height: 2.52rem;
            margin:0 auto;
            background: #FFFFFF;
            box-shadow: 0px 0px 32px 0px rgba(108, 133, 167, 0.27);
            border-radius: 0.24rem;
            margin-bottom: 0.35rem;
            .list_top{
                display: flex;
                justify-content: space-between;
                line-height: 38px;
                img{
                    width: 0.45rem;
                    vertical-align: middle;
                    margin-top: -5px;
                    padding-right: 0.06rem;
                }
                .item_name{
                    font-size: 0.3rem;
                    color: #313131;
                }
                .time{
                    color: #666;
                    font-size: 0.2rem;
                }
            }
            .ul_content{
                display: flex;
                justify-items: center;
                justify-content: space-between;
                li{
                    margin-top: 0.5rem;
                    text-align: center;
                    p:nth-child(1){
                        font-size: 0.4rem;
                        font-weight: 800;
                        color: #FD2D25;
                        padding-bottom: 0.25rem;
                    }
                    p:nth-child(2){
                        font-size: 0.24rem;
                        color: #869095;
                    }
                }
                .two_li{
                    border-left: 0.04rem solid rgba(253, 45, 37, 0.05);
                    border-right: 0.04rem solid rgba(253, 45, 37, 0.05);
                    padding: 0 0.4rem;
                }
            }
        }
    }
</style>