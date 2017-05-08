<template>
	<ul>
    <li class="msgBtn"><p>基本信息</p></li>
    <li class="msgBtn"><p>身份认证</p></li>
    <li class="msgBtn"><p>头像修改</p></li>
    <li class="msgBtn"><p>我的平台币</p></li>
    <li class="msgBtn"><p>问题与反馈</p></li>
  </ul>
</template>
<script>
	export default{
		name: 'setting_option'
	}
</script>
<style scoepd>
	.msgBtn{
		border: 2px solid rgb(189,204,212);
		display: inline-block;
		margin-right: 22px;
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