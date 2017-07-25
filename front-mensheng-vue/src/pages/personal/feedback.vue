<template>
  <div class='feedback bd fr'>
    <form action=''>
      <span>问题与反馈：</span>
      <textarea class='bd' name='' id='' cols='78' rows='20'></textarea>
      <input type='submit' value='确认提交'>
    </form>
    <p> 说明：<br />
    1.请您将您的宝贵意见填入文本框并提交；<br />
    2.我们会在3-5个工作日内予以反馈<br />
    3.反馈信息将会发送到您的系统通知内。
    </p>
  </div>
</template>
<script>
  export default{
    name: 'feedback'
  }
</script>
<style scoped>
*{box-sizing: content-box}
  /*反馈模块样式开始*/
  .feedback{
    width: 886px;
    height: 740px;
    margin-top: 10px;
  }
  .feedback form{
    width: 830px;
    height: 300px;
    margin: 30px auto;
    position: relative;
  }
  .feedback form span{
    width: 130px;
    height: 30px;
    font-size: 18px;
    line-height: 30px;
  }
  .feedback form textarea{
    vertical-align: top;
    resize: none;
  }
  .feedback form input{
    width: 140px;
    height: 47px;
    background: rgb(189,204,212);
    position: absolute;
    right: 0;
    bottom: -3px;
    border: none;
    font-size: 18px;
    cursor: pointer;
  }
  .feedback p{
    font-size: 12px;
    color: #666;
    margin-left: 147px;
  }
  /*反馈模块样式结束*/
</style>