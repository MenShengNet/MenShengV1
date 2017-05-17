<template>
    <div class="container">
        <div class="name">
            <p>讨论区</p>
        </div>
        <div class="nav">
            <a href="">讨论区</a><img src="./images/arrow.png"><a href="">综合讨论区</a><img src="./images/arrow.png"><a href="">主题详情</a>
        </div>
        <div class="most-hot">
            <div class="list">
                <h1>{{ title }}</h1>
                <div class="message">
                    <p>{{ author }}在{{ publishTime }}发表</p>
                    <p class="right">浏览：{{ viewTimes }}   回复：{{ replyTimes }}  投票：{{ vote }}</p>
                </div>
            </div>
        </div>
        <div class="most-hot">
            <div class="replyNumber">
                共 {{ replyTimes }} 条回复
            </div>
             <div v-for="item in replys" class="list" style="background-color:#ffffff;color:#000000;border:1px solid rgb(190,204,213);margin:10px 0">
                <h1>{{ item.title }}</h1>
                <div class="message">
                    <p>{{ item.author }}在{{ item.publishTime }}发表</p>
                    <div class="right">
                        <div class="img" v-if="item.praised"><img src="./images/love.png"></div>
                        <div class="img" v-else><img src="./images/nolove.png"></div>
                        <p>{{ item.praiseNumber }}赞</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
    name: 'course_discussion',
    data() {
        return {
            'title':"信号与系统是",
            'author':"微博",
            'publishTime':"2017.5.26",
            'viewTimes':0,
            'replyTimes':0,
            'vote':0,
            'replyNumber':42,
            replys: [
            {
            'title':"信号与系统是什",
            'author':"微博",
            'publishTime':"2017.5.26",
            'praiseNumber':100,
            'praised':1
            },
            {
            'title':"信号与系统是什么",
            'author':"微博",
            'publishTime':"2017.5.26",
            'praiseNumber':100,
            'praised':1
            },
            {
            'title':"信号与系统是什么？",
            'author':"微博",
            'publishTime':"2017.5.26",
            'praiseNumber':100,
            'praised':0
            }
            ]
        }
      }
    }
</script>

<style type="text/css" scoped>
    .container{
        width: 920px;
        height: 520px;
        margin: auto;/*  修改margin改变位置*/
    }
    .name{
        width: 920px;
        height: 45px;
        border-bottom: 4px solid rgb(190,204,213);
        margin: 15px 0;
        margin-top: -8px;
    }
    .name p{
        margin: 0 0 0 22px;
        font-size: 24px;
        position: relative;
        bottom: -15px;
        color: rgb(190,204,213);
        background-color: #ffffff;
    }
    .nav{

    }
    .nav a{
        text-decoration: none;
        color: rgb(190,204,213);
        font-size: 18px;
    }
    .nav img{
        width: 18px;
        height: 18px;
        position: relative;
        top: 2px;
    }
    .most-hot{
        margin: 10px auto;
        height: 80px;
    }
    .list{
        width: 910px;
        height: 62px;
        background-color: rgb(190,204,213);
        clear: both;
        padding: 5px;
        color: #ffffff;
    }
    .message{
        font-size: 14px;
        height: 15px;
        width: 100%;
        position: relative;
        bottom: -20px;
    }
    .message p{
        float: left;
        width: 50%;
    }
    .right{
        text-align: right;
    }
    .right img{
        width: 18px;
        height: 18px;
    }
    .right p{
        position: relative;
        right: 0px;
        width: 50px;
    }
    .img{
        float: right;
        position: relative;
        right: 60px;
    }
    .list h1{
        font-size: 20px;
    }
</style>