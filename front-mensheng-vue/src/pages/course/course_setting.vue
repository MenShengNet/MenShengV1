<template>
    <div class="container">
        <div class="setting-name">
            <p>设置</p>
        </div>
        <div class="text">
            <p>课内信息设置：</p><br><br>
            <form method="post" class="font18">
                <b>学&nbsp;&nbsp;院：&nbsp;&nbsp;</b><input class="txt" type="text" name="college"><br><br>
                <b>班&nbsp;&nbsp;级：&nbsp;&nbsp;</b><input class="txt" type="text" name="class"><br><br>
                <b>学&nbsp;&nbsp;号：&nbsp;&nbsp;</b><input class="txt" type="text" name="stu-number"><br><br>
                <b>姓&nbsp;&nbsp;名：&nbsp;&nbsp;</b><input class="txt" type="text" name="name"><br><br>
                <input class="btn" type="submit" value="提  交" name="button">
            </form>
        </div>
    </div>
</template>

<script>
    export default {
    name: 'course_setting'
  }
</script>

<style type="text/css" scoped>
*{box-sizing: content-box}
    .container{
        width: 940px;
        /* height: 520px; */
        margin: auto;/*  修改margin改变位置*/
        margin-bottom: 20px;
    }
    .setting-name{
        width: 940px;
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
    .text{
        border: 2px solid rgb(190,204,213);
        padding: 20px;
        width: 898px;
        height: 306px;
    }
    .text p{
        font-size: 22px;
    }
    .txt{
        border: 1px solid rgb(190,204,213);
        font-size: 20px;
        width: 230px;
        height: 25px;
    }
    .btn{
        cursor:pointer;
        color: #ffffff;
        font-size: 16px;
        border: none;
        float: right;
        width: 115px;
        height: 33px;
        background-color: rgb(190,204,213);
        position: relative;       
        bottom: -30px;
    }
</style>