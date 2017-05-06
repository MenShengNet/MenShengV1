<template>
	<div>
		<div class="header clearFix w1140">
	    <div class="logo"></div>
	    <div class="right">
	      <ul class="clearFix">
	        <li>
	          <div class="search">
	            <input type="text" placeholder="搜索"/>
	            <div class="searchButton"></div>
	          </div>
	        </li>
	        <li>
	          <div class="myLesson">
	            <div class="icon"></div>
	            <span>我的课程</span>
	        </div>
	        </li>
	        <li>
	          <div class="login">
	            <div class="icon"></div>
	            <span>注册/登录</span>
	          </div>
	        </li>
	      </ul>
	    </div>
	  </div>

	  <div class="focus w1140">
      <div class="nav">
        <div class="left">
          <ul class="clearFix">
            <li class="first">
              <div class="icon"></div>
              <span>全部课程</span>
              <ul>
                <li class="first">
                  <p class="title">编程开发</p>
                  <p class="detail">前端开发 移动开发 H5</p>
                </li>
                <li>
                  <p class="title">办公效率</p>
                  <p class="detail">办公软件 PPT Excel</p>
                </li>
                <li>
                  <p class="title">产品和设计</p>
                  <p class="detail">产品经理 PS 工业设计</p>
                </li>
                <li>
                  <p class="title">生活方式</p>
                  <p class="detail">摄影 亲子 理财 插画</p>
                </li>
                <li>
                  <p class="title">职业发展</p>
                  <p class="detail">管理能力 求职 HR</p>
                </li>
                <li>
                  <p class="title">市场营销</p>
                  <p class="detail">网络营销 推广 热点营销</p>
                </li>
              </ul>
            </li>
            <li><span>直 播</span></li>
            <li><span>线下课堂</span></li>
            <li class="last"><span>我要开课</span></li>
          </ul>
        </div>
        <div class="right">
          <div class="icon"></div>
          <span>更 多</span>
        </div>
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
	/*头部样式开始*/
  .header .logo{background: url("images/qietu.png") -13px -2px;width: 252px;height: 77px;float: left;}
  .header .right{width: 427px;height: 40px;margin-top: 17px;}
  .header .right ul li{float: left;}
  .header .search{position: relative;margin-right:40px;}
  .header .search input{width: 178px;height: 36px;border: 2px solid rgb(189,204,212);text-indent: 10px;color: #000;}
  .header .searchButton{width: 34px;height: 34px;background: url("images/qietu.png") -103px -86px;position: absolute;top: 3px;left: 145px;}
  .header .myLesson{width: 90px;height: 20px;margin-top: 10px;margin-right: 20px;}
  .header .myLesson .icon{width: 22px;height: 22px;background: url("images/qietu.png") -146px -92px;display: inline-block;vertical-align: middle;}
  .header .myLesson span{font-size: 14px;line-height: 20px;}
  .header .login{width: 95px;height: 20px;margin-top: 10px;margin-right: 0;}
  .header .login .icon{width: 22px;height: 22px;background: url("images/qietu.png") -172px -92px;display: inline-block;vertical-align: middle;}
  .header .login span{font-size: 14px;line-height: 20px;}
  /*头部样式结束*/
  .focus .nav{width: 100%;height: 40px;}
  .focus .nav .left{width: 460px;height:100%;}
  .focus .nav .left ul li{float: left;display: block;height: 20px;line-height: 20px;border-right: 1px solid rgb(189,204,212);padding:0 18px;margin-top: 10px;}
  .focus .nav .left ul li .icon{display: inline-block;width: 22px;height: 22px;background:url("images/qietu.png") -16px -93px;float: left;margin:0 10px;}
  .focus .nav .left ul li.first{position:relative;padding:10px 74px 10px 0;border: none;margin: 0;background: rgb(189,204,212);}
  .focus .nav .left ul li.first ul{position:absolute;width: 180px;height: 340px;background: rgba(255,255,255,.3);top:40px;display: none;}
  .focus .nav .left ul li.first ul li{width: 148px;height: 48px;padding: 0;border: 0;margin:2px 16px;border-bottom: 1px solid rgb(175,184,190);color: #fff;}
  .focus .nav .left ul li.first ul li.first{margin-top:16px;background: transparent;}
  .focus .nav .left ul li.first ul li p.detail{font-size: 12px;}
  .focus .nav .left ul li.first:hover ul{display: block;}
  .focus .nav .left ul li.first:hover span{color: #fff;}
  .focus .nav .left ul li.last{border: none;}
  .focus .nav .right{height: 20px;margin-top: 10px;}
  .focus .nav .right .icon{display: inline-block;width: 25px;height: 10px;background:url("images/qietu.png") -150px -132px;}
</style>