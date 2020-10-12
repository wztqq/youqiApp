<template>
  <div class="box">
    <div class="map"></div>
    <div class="part1">
      <div class="title">
        <span class="part1_title1 title_active" @click="part1clk($event,'left')">天然气日供应量趋势分析</span>
        <span class="part1_title1" @click="part1clk($event,'right')">供气量与合同量对比分析</span>
      </div>
      <div class="part1_con">
        {{part1data}}
      </div>
    </div>
    <div class="part2">
      <div class="title"></div>
    </div>
    <div class="part3">
      <div class="title"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      part1data:'我是left',
    };
  },
  methods: {
    part1clk(e, str) {
      e.target.classList.add("title_active");
      if (str == "left") {
        if (e.target.nextSibling.classList.contains("title_active"))
          e.target.nextSibling.classList.remove("title_active");
          this.part1data='我是left';
      } else {
        if (e.target.previousSibling.classList.contains("title_active"))
          e.target.previousSibling.classList.remove("title_active");
          this.part1data='我是right';
      }
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.map {
  width: 100%;
  height: 300px;
  background-color: #dadbdb;
  background-size: cover;
  background-image: url(../../assets/img/industryAnalysis/地图.png);
}
.part1,
.part2,
.part3 {
  width: 100%;
  height: 400px;
  border-top: 11px solid rgb(230, 233, 236);
}
.title {
  border: 2px solid #246bd7;
  border-radius: 5px;
  margin: auto;
  width: 97%;
}
.part1_title1 {
  width: 50%;
  text-align: center;
  display: inline-block;
  height: 40px;
  line-height: 40px;
}
.title_active {
  background-color: #246bd7;
  border-radius: 5px;
}
</style>
