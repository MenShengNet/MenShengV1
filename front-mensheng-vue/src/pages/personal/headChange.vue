<template>
	<div class="head-change bd fr">
    <div class="preview bd clearFix">
      <div class="big fl"></div>
      <div class="small fl"></div>
    </div>
    <div class="btn">
      <div class="upload fl">
        <span class="bg"></span>
        <span class="icon icon1"></span>
        <p>上传头像</p>
      </div>
      <div class="submit fr">
        <span class="bg"></span>
        <span class="icon icon2"></span>
        <p>确认修改</p>
      </div>
    </div>
  </div>

</template>
<script>
	export default{
		name: 'headChange'
	}
</script>
<style scoped>
*{box-sizing: content-box}
  .head-change{
    width:886px;
    height: 745px;
    margin-top: 10px;
  }
	.head-change .preview{
    width: 468px;
    height: 234px;
    margin: 30px auto;
  }
  .head-change .preview .big{
    width: 175px;
    height: 175px;
    border: 1px solid;
    border-radius: 50%;
    margin: 28px 0 0 90px;
  }
  .head-change .preview .small{
    width: 47px;
    height: 47px;
    border: 1px solid;
    border-radius: 50%;
    margin: 93px 0 0 66px;
  }
  .head-change .btn{
    width: 468px;
    height: 90px;
    margin: auto;
  }
  .head-change .btn div{
    width: 75px;
    height: 90px;
    position: relative;
    cursor: pointer;
  }
  .head-change .btn div.upload{
    margin-left: 100px;
  }
  .head-change .btn div.submit{
    margin-right: 100px;
  }
  .head-change .btn div .icon{
    display:inline-block;
    width: 40px;
    height: 40px;
    background: url("../../public-image/qietu2.png");
    margin:10px 17px;
  }
  .head-change .btn div .icon1{
    background-position: -47px -113px;
  }
  .head-change .btn div .icon2{
    background-position: -42px -200px;
  }
  .head-change .btn div .bg{
    display: inline-block;
    width: 50px;
    height: 50px;
    background: pink;
    position: absolute;
    z-index: -1;
    left: 12px;
    top:5px;
    border-radius: 50%;
  }
  .head-change .btn div p{
    text-align: center;
    font-size: 18px;
  }
</style>