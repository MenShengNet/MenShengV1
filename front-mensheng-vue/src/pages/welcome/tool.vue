<template>
	<div class="tools w1140 clearFix">
    <div class="head">
      <div class="icon"></div>
      <p>课堂工具</p>
    </div>
    <ul class="clearFix">
      <li><img src="./images/tool1.png" alt="" width="170" height="147"></li>
      <li><img src="./images/tool2.png" alt="" width="170" height="147"></li>
      <li><img src="./images/tool3.png" alt="" width="170" height="147"></li>
      <li><img src="./images/tool4.png" alt="" width="170" height="147"></li>
    </ul>
  </div>
</template>
<script>
	export default {
  name: 'tool'
	}
</script>
<style scoped>
	.tools{height:250px;border-bottom: 2px solid #ccc;position: relative;}
  .tools .head{float:left;line-height: 26px;padding: 10px;background: rgb(189,204,212);}
  .tools .head .icon{width: 26px;height: 26px;float: left; background: url("images/qietu.png") -199px -123px;}
  .tools .head p{display: inline-block;text-indent: 5px;padding-right: 60px;color: #fff;}
  .tools ul{position: absolute;width:100%;left: 0;bottom: 0;margin-bottom: 20px;}
  .tools ul li{display:block;float: left;width: 285px;}
  .tools ul li img{display:block;margin: auto;}
</style> 
