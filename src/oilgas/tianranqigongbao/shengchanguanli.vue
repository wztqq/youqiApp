<template>
    <div class="scgl">
        <el-tabs v-model="activeName" class="sec-nav">
            <el-tab-pane label="生产管理" name="first" :key="'first'">
                <child1></child1>
            </el-tab-pane>
            <el-tab-pane label="供应管理" name="second" :key="'second'" :lazy="true">
                <child2></child2>
            </el-tab-pane>
            <el-tab-pane label="储气管理" name="third" :key="'third'" :lazy="true">
                <child3></child3>
            </el-tab-pane>
            <el-tab-pane label="管输管理" name="fourth" :key="'fourth'" :lazy="true">
                <child4></child4>
            </el-tab-pane>
            <el-tab-pane label="销售管理" name="fifth" :key="'fifth'" :lazy="true">
                <child5></child5>
            </el-tab-pane>
            <el-tab-pane label="压非保民" name="sixth" :key="'sixth'" :lazy="true">
                <child6></child6>
            </el-tab-pane>
            <el-tab-pane label="气销总览" name="seventh" :key="'seventh'" :lazy="true">
                <child7></child7>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
    import shenChan from './shenchan.vue'
    import gongYing from './gongying.vue'
    import chuQi from './chuqi.vue'
    import guanShu from './guanshu.vue'
    import xiaoShou from './xiaoshou.vue'
    import yaFei from './yafei.vue'
    import qiXiao from './qixiao.vue'

    export default {
        name: 'scgl',
        components: {
            child1: shenChan,
            child2: gongYing,
            child3: chuQi,
            child4: guanShu,
            child5: xiaoShou,
            child6: yaFei,
            child7: qiXiao
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
<style scoped>
    .scgl /deep/ .sec-nav>.el-tabs__header .el-tabs__nav {
        position: fixed;
        top: 90px;
        z-index: 1;
        background: rgba(6, 29, 39, 0.2);
        border-radius: 14px;
        color: #fff;
    }

    .scgl /deep/ .sec-nav>.el-tabs__header .el-tabs__content {
        padding-top: 60px;
    }

    .scgl /deep/ .sec-nav>.el-tabs__header .el-tabs__item {
        color: #fff;
        padding: 0 14px;
        font-size: 12px;
        line-height: 30px;
        height: 30px;
    }

    .scgl /deep/ .sec-nav>.el-tabs__header .el-tabs__item.is-active {
        background-color: #01121F;
        opacity: 0.35;
        border-radius: 5px;
    }

    .scgl /deep/ .sec-nav>.el-tabs__header .el-tabs__active-bar {
        display: none;
    }

    .scgl /deep/ .sec-nav>.el-tabs__header .el-tabs--bottom .el-tabs__item.is-bottom:nth-child(2),
    .scgl /deep/ .sec-nav>.el-tabs__header .el-tabs--bottom .el-tabs__item.is-top:nth-child(2),
    .scgl /deep/ .sec-nav>.el-tabs__header .el-tabs--top .el-tabs__item.is-bottom:nth-child(2),
    .scgl /deep/ .sec-nav>.el-tabs__header .el-tabs--top .el-tabs__item.is-top:nth-child(2) {
            padding-left: 14px;
    }
</style>
