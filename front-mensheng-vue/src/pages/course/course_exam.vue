<template>
	<div class="article">
  <h2>考试</h2>
  <div class="box">
    <p>
      <img src="imgs/star1.png" height='30' width='30' >
      <span class="exam">期中考试</span>
      <span class="deadline">提交截止：2017年5月10号12：00</span>
      <b>前往考试</b>
    </p>
  </div>
  <div class="box">
    <p>
      <img src="imgs/star2.png" height='30' width='30' >
      <span class="exam">期中考试</span>
      <span class="deadline">提交截止：2017年5月10号12：00</span>
      <b>前往考试</b>
    </p>
  </div>
  <div class="box">
    <p>
      <img src="imgs/star3.png" height='30' width='30' >
      <span class="exam">期中考试</span>
      <span class="deadline">提交截止：2017年5月10号12：00</span>
      <b>前往考试</b>
    </p>
  </div>
  <div class="box">
    <p>
      <img src="imgs/star4.png" height='30' width='30' >
      <span class="exam">期中考试</span>
      <span class="deadline">提交截止：2017年5月10号12：00</span>
      <b>前往考试</b>
    </p>
  </div>
  <div class="box">
    <p>
      <img src="imgs/star5.png" height='30' width='30' >
      <span class="exam">期中考试</span>
      <span class="deadline">提交截止：2017年5月10号12：00</span>
      <b>前往考试</b>
    </p>
  </div>
</div>
</template>
<script type="text/javascript">
	export default {
		name: 'course_exam'
	}
</script>
<style scoped>

	  .article {
      width: 960px;
      margin: auto;
  }
  .article h2 {
      color: #c2cacf;
      padding: 5px;
      border-bottom: 2px solid #c2cacf;
  }
  .box{
      width: 960px;
      border: 2px solid #c2cacf;
      margin-top: 15px;
  }
  .box b{
    background-color: #c2cacf;
    color: white;
    float: right;
    padding: 0 10px;
  }
  .box img{
    vertical-align: middle;
    margin: -10px 10px 0 10px;
  }
  .box span.deadline{
    margin-left: 15%;
  }
  .box p{
    font-size: 20px;
    line-height: 50px;
  }
</style>