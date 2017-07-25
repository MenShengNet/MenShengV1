<template>
	<div>
		<router-link to="/personal/myCourseOption/liveList"><div class="msgBtn"><p>直播课</p></div></router-link>
	  <router-link to="/personal/myCourseOption/video"><div class="msgBtn"><p>视频课</p></div></router-link>
	  <router-link to="/personal/myCourseOption/finished"><div class="msgBtn"><p>已结束</p></div></router-link>
	  <router-view></router-view>
	</div>
</template>
<script>
	export default{
		name: 'mycourse_option'
	}
</script>
<style scoped>
*{box-sizing: content-box}
	.msgBtn{
		border: 2px solid rgb(189,204,212);
		display: inline-block;
		margin-right: 37px;
	}
  p{
  	width: 146px;
  	height: 36px;
  	margin: 3px;
  	font-size: 18px;
  	display: inline-block;
  	text-indent: 8px;
  	line-height: 36px;
  	background: rgb(189,204,212);
  }
  a{color: #000;}
</style>