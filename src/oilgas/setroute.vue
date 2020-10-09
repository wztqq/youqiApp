<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="新增栏目">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="访问路径">
        <el-input v-model="form.seturl"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
          form: {
          name: '',
         seturl:'',
        }
    };
  },
  methods: {
        onSubmit() {
            console.log('vv','./'+this.form.name+'.vue');
        // 设置路由
       this.$parent.tabList.push({
            	  name:this.form.name,
                router:this.form.seturl
        });
     this.$router.options.routes.push({
            path:'/'+this.form.seturl,
            name:this.form.seturl,
            component:() => import('./'+this.form.name+'.vue')
        })
      
  }
}
}
</script>
<style scoped>
</style>