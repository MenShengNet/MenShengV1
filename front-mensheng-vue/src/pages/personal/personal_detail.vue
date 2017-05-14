<template>
	<div class="selfDetail w1140 clearFix">
    <div class="bg"></div>
    <div class="left">
      <div class="photo fl"></div>
      <dl class="mt50">
        <dt>马姿琪</dt>
        <dd><div class="icon prize"></div><span>已认证</span></dd>
        <dd><div class="icon diamond"></div><span>倔强青铜</span></dd>
        <dd><div class="icon wealth"></div><span>500000</span></dd>
      </dl>
      <div class="motto">
        <p>好好学习，天天向上！</p>
        <div class="icon"></div>
      </div>
    </div>
    <div class="right mt50">
      <p class="line1 clearFix">
        <span class="fl">荣耀战绩:</span>
        <span class="fr">19999</span>
      </p>
      <p class="clearFix">
        <span class="fl">直播课:</span>
        <span class="fr"><span class="black">99</span>/100</span>
      </p>
      <p class="clearFix">
        <span class="fl">线下课:</span>
        <span class="fr"><span class="black">20</span>/50</span>
      </p>
    </div>
    <div class="slimBar"></div>
  </div>
</template>
<script>
  export default {
    name: 'personal_detail'
  }
</script>
<style scoped>
/*我的详情样式开始*/
  .selfDetail{
    position: relative;
    margin-top: 20px;
    color: #fff;
  }
  .selfDetail .bg{
    position:absolute;
    bottom:0;
    z-index:-1;
    width: 100%;
    height: 155px;
    background: rgb(189,204,212);
  }
  .selfDetail .left .photo{
    width: 180px;
    height: 180px;
    background:url("./images/photo.jpg") center/cover;
    border: 6px solid rgb(189,204,212);
    border-radius: 50%;
    margin:0 20px 0 40px;
  }
  .selfDetail .left dl,dt,dd{
    float: left;
  }
  .selfDetail .left dl dt{
    font-size: 32px;
    margin-right: 50px;
  }
  .selfDetail .left dl dd{
    margin-right: 38px;
  }
  .icon{
    width: 40px;
    height: 35px;
    display: inline-block;
    vertical-align: middle;
    background: url("../../public-image/qietu2.png")
  }
  .selfDetail .left dl dd .prize{
    background-position: -10px -203px;
  }
  .selfDetail .left dl dd .diamond{
    background-position: -92px -116px;
  }
  .selfDetail .left dl dd .wealth{
    background-position: -180px 5px;
  }
  .selfDetail .left .motto{
    position: absolute;
    bottom: 50px;
    left: 250px;
  }
  .selfDetail .left .motto p{
    display: inline-block;
  }
  .selfDetail .left .motto .icon{
    background-position: -140px -290px;
  }
  .selfDetail .right{
    width: 225px;
    margin-right: 15px;
  }
  .selfDetail .right p{
    margin: 15px 0;
  }
  .selfDetail .right p span.fl{
    width: 140px;
    text-align: right;
  }
  .selfDetail .right p span.fr{
    width: 70px;
    text-align: left;
  }
  .selfDetail .right p span .black{
    color: #000;
  }
  .selfDetail .right .line1{
    font-size: 28px;
    margin-top: 5px;
  }
  .selfDetail .slimBar{
    width: 100%;
    height: 4px;
    background: rgb(189,204,212);
    position: absolute;bottom: -8px;
  }
  /*我的详情样式结束*/
</style>