<template>
	<div>
		<div class="msgBtn"><p>课程通知</p></div>
  	<div class="msgBtn"><p>系统通知</p></div>
	</div>
</template>
<script>
	export default{
		name: 'messageCenter_option'
	}
</script>
<style>
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
</style>