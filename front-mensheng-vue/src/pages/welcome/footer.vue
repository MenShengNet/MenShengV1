<template>
	<div class="footer w1140 clearFix">
    <div class="left">
      <div class="logo"></div>
      <div class="follow">
        <span>关注我们： </span>
        <span class="icon ico1"></span>
        <span class="icon ico2"></span>
        <span class="icon ico3"></span>
      </div>
      <p class="copyright">@2017-2018 枕剑科技 版权所有</p>
    </div>
    <div class="right">
      <ul class="clearFix">
        <li>关于我们</li>
        <li>联系我们</li>
        <li>帮助中心</li>
        <li>内容招募</li>
        <li>意见反馈</li>
        <li>企业服务</li>
      </ul>
      <div class="clearFix">
        <span class="btn android"></span>
        <span class="btn iphone"></span>
        <span class="txt">移动APP：</span>
      </div>
    </div>
  </div>
</template>
<script>
	export default {
  	name: 'footer'
	}
</script>
<style scoped>
	/*尾部样式开始*/
  .footer{width:1100px;background: rgb(189,204,212);padding: 20px;color: rgb(70,76,79);font-size: 14px;}
  .footer .left .logo{width: 350px;height: 80px;background: url("images/qietu.png") -23px -158px;}
  .footer .left .follow{margin-top: 10px;}
  .footer .left .follow span{vertical-align: middle;}
  .footer .left .follow .icon{display:inline-block;width: 26px;height: 26px;}
  .footer .left .follow .ico1{background: url("images/qietu.png") -20px -247px;}
  .footer .left .follow .ico2{background: url("images/qietu.png") -52px -247px;}
  .footer .left .follow .ico3{background: url("images/qietu.png") -82px -247px;}
  .footer .right ul{margin-top: 20px;}
  .footer .right ul li{float: left;display: block;margin-right: 10px;}
  .footer .right div{margin-top: 10px;}
  .footer .right div span{float: right;vertical-align: middle;}
  .footer .right div .txt{line-height: 44px;}
  .footer .right div .btn{width: 130px;height: 40px;}
  .footer .right div .android{background: url("images/qietu.png") -116px -274px;}
  .footer .right div .iphone{background: url("images/qietu.png") 5px -274px;}
  /*尾部样式结束*/
</style>