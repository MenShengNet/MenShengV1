<template>
	<ul>
    <router-link to='/personal/settingOption/basicSetting'><li class="msgBtn"><p>基本信息</p></li></router-link>
    <router-link to='/personal/settingOption/identify'><li class="msgBtn"><p>身份认证</p></li></router-link>
    <router-link to='/personal/settingOption/headChange'><li class="msgBtn"><p>头像修改</p></li></router-link>
    <router-link to='/personal/settingOption/recharge'><li class="msgBtn"><p>我的平台币</p></li></router-link>
    <router-link to='/personal/settingOption/feedback'><li class="msgBtn"><p>问题与反馈</p></li></router-link>
    <router-view></router-view>
  </ul>
</template>
<script>
	export default{
		name: 'setting_option'
	}
</script>
<style scoped>
	.msgBtn{
		border: 2px solid rgb(189,204,212);
		display: inline-block;
		margin-right: 19px;
	}
  ul li:last-child{margin: 0;}
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