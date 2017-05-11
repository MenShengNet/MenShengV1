<template>
  <div class="wrap">
    <div class="inform-item">
      <div class="content">
        <div class="icon fl icon1"></div>
        <p class="fl">头像更换成功！</p>
      </div>
    </div>
    <div class="inform-item">
	    <div class="content">
	      <div class="icon fl icon2"></div>
	      <p class="fl">个人信息修改成功！</p>
	    </div>
    </div>
    <div class="inform-item">
      <div class="content">
        <div class="icon fl icon3"></div>
        <p class="fl">自动通知已关闭</p>
      </div>
    </div>
    <div class="inform-item">
	    <div class="content">
	      <div class="icon fl icon4"></div>
	      <p class="fl">昵称更换成功！</p>
	    </div>
 	  </div>
	</div>
</template>
<script>
	export default{
		name: 'sysInform',
	}
</script>
<style scoped>
	.lesson-inform,.sys-inform{width: 146px;height: 36px;margin: 3px;font-size: 18px;display: inline-block;text-indent: 8px;line-height: 36px;background: rgb(189,204,212);}
	.wrap{margin-top: 10px;}
	.wrap .inform-item{width: 885px;height: 75px;border: 2px solid rgb(189,204,212);margin-bottom: 10px;}
	.wrap .inform-item .content{margin-top:13px;}
	.wrap .inform-item .content .icon{width: 50px;height: 50px;border-radius: 50%;background: url("../../public-image/qietu2.png")}
	.wrap .inform-item .content .icon1{background-position: -148px -371px;}
	.wrap .inform-item .content .icon2{background-position: -80px -371px;}
	.wrap .inform-item .content .icon3{background-position: -11px -433px;}
	.wrap .inform-item .content .icon4{background-position: -11px -371px;}
	.wrap .inform-item .content p{line-height: 50px;margin-left: 10px}
</style>