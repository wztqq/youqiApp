<template>
	<div class="child1">
		<div class="map"></div>
		<div class="scFristqh">
			<div class="trqyclfx">天然气月产量分析</div>
			<div class="trqclyclglfx">天然气产量与储量关联分析</div>
		</div>
	</div>
</template>

<script>
	export default {
	      name: 'child1',
	      mounted(){
	          console.log("生产管理组件")
	      }
	    }
</script>

<style>
	.map {
		width: 100%;
		height: 280px;
		background-color: #DADBDB;
		background-size: cover;
		background-image: url(../../assets/img/industryAnalysis/地图.png);
	}
	.scFristqh{
		width: 90%;
		height: 57px;
		margin: 30px auto;
		border: 1px solid blue;
		border-radius: 5px;
	}
	.trqyclfx{
		width: 165px;
		border-radius: 5px;
		color: white;
		background-color: #0000FF;
		text-align: center;
		font: 12px PingFangSC-Regular;
	}
	.trqclyclglfx{
		background-color: white;
		font: 12px PingFangSC-Regular;
		color: #0000FF;
		margin-left: 5px;
	}
	.scFristqh>div{
		display: inline-block;
		width: 165px;
		height: 57px;
		line-height: 50px;
	}
</style>
