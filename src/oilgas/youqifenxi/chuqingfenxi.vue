<template>
  <div>
    <div class="btn_chuqing">
      <div class="btn_shenchan_div">
        <div class="img-box">
          <img class="img_produce" src="../../assets/img/produce-fx/oil_logo.png" alt="图片未显示">
          <div>原油</div>
        </div>
        <div class="img-box">
          <img class="img_produce" src="../../assets/img/produce-fx/gas_logo.png" alt="图片未显示">
          <div>天然气</div>
        </div>
      </div>
    </div>
    <oil></oil>
  </div>

</template>

<script>
import oil from './oil'
export default {
  name: "chuqingfenxi",
  components:{
    oil
  }
}
</script>

<style scoped lang="scss">
.btn_chuqing {
  font-size: 0.1rem;
  background-color: #fff;
  position: absolute;
  top: 140px;
  left: 35px;
  width: 1.8rem;
  box-shadow: 0 1px 6px rgba(0, 0, 0, .117647), 0 1px 4px rgba(0, 0, 0, .117647);
  padding: 0.1rem;

  .img-box {
    display: flex;
    align-items: center;

    &:not(:last-child) {
      margin-bottom: 0.1rem;
    }

    .img_produce {
      width: 0.4rem;
      height: 0.4rem;
      margin-right: 0.1rem;
    }
  }

}
</style>
