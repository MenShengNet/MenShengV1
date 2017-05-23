<template>
    <div class="container">
        <div class="setting-name">
            <p>课件</p>
        </div>
        <div class="button">
          <div class="left">
              <img src="./images/video2.png">
          </div>
          <div class="right">
              <img src="./images/paper1.png">
          </div>
        </div>
        <div class="explain">
            <textarea>说明文档</textarea>
        </div>
        <button class="download">下载</button>
    </div>
</template>

<script>
    export default {
    name: 'course_setting'
  }
</script>

<style type="text/css" scoped>
    .container{
        width: 920px;
        height: 520px;
        margin: auto;/*  修改margin改变位置*/
    }
    .setting-name{
        width: 920px;
        height: 45px;
        border-bottom: 5px solid rgb(190,204,213);
        margin: 15px 0;
        margin-top: -8px;
    }
    .setting-name p{
        margin: 0 0 0 22px;
        font-size: 24px;
        position: relative;
        bottom: -15px;
        color: rgb(190,204,213);
        background-color: #ffffff;
    }
    .button{
        height: 50px;
    }
    .left{
        cursor: pointer;
        width: 454px;
        height: 46px; 
        float: left;
        text-align: center;
        border: 2px solid rgb(190,204,213);
    }
    .right{
        cursor: pointer;
        width: 458px;
        height: 50px; 
        float: right;
        background-color: rgb(190,204,213);
        text-align: center;
    }
    .button img{
        position: relative;
        top: 12px;
    }
    .explain{
        width: 916px;
        position: relative;
        top: 10px;
    }
    .explain textarea{
        outline: none;
        resize: none;
        border: 2px solid rgb(190,204,213);
        width: 98%;
        height: 286px;
        padding: 10px;
        font-size: 16px;
    }
    .download{
        cursor: pointer;
        float: right;
        width: 85px;
        height: 35px;
        border: none;
        margin: 15px -2px;
        background-color: rgb(190,204,213);
        color: #ffffff;
    }
</style>