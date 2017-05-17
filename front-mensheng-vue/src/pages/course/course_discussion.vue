<template>
    <div class="container">
        <div class="name">
            <p>讨论区</p>
        </div>
        <div class="search">
            <input type="text" name="search_name" placeholder="搜索">
            <a><img src="./images/search.png"></a>
            <button>发起讨论</button>
        </div>
        <div class="most-hot">
            <div class="logo">
                <img src="./images/mostHot.png">
                <p>最热</p>
            </div>
            <div class="list">
                <h1>{{ title }}</h1>
                <div class="message">
                    <p>{{ author }}在{{ publishTime }}发表</p>
                    <p class="right">浏览：{{ viewTimes }}   回复：{{ replyTimes }}  投票：{{ vote }}</p>
                </div>
            </div>
        </div>
        <div class="most-hot">
            <div class="logo">
                <img src="./images/all.png">
                <p>全部</p>
                <button>排  序</button>
                <button>正  序</button>
                <button>浏览最高</button>
            </div>
             <div v-for="item in discussions" class="list" style="background-color:#ffffff;color:#000000;border:1px solid rgb(190,204,213);margin:10px 0">
                <h1>{{ item.title }}</h1>
                <div class="message">
                    <p>{{ item.author }}在{{ item.publishTime }}发表</p>
                    <p class="right">浏览：{{ item.viewTimes }}   回复：{{ item.replyTimes }}  投票：{{ item.vote }}</p>
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
            discussions: [
            {
            'title':"信号与系统是什",
            'author':"微博",
            'publishTime':"2017.5.26",
            'viewTimes':1,
            'replyTimes':0,
            'vote':0},
            {
            'title':"信号与系统是什么",
            'author':"微博",
            'publishTime':"2017.5.26",
            'viewTimes':2,
            'replyTimes':0,
            'vote':0},
            {
            'title':"信号与系统是什么？",
            'author':"微博",
            'publishTime':"2017.5.26",
            'viewTimes':3,
            'replyTimes':0,
            'vote':0},
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
    .search{
        height: 54px;
        border-bottom: 4px solid rgb(190,204,213);
    }
    .search input{
        width: 365px;
        height: 48px;
        border: 1px solid rgb(190,204,213);
        font-size: 20px;
        position: absolute;
    }
    .search img{
        width: 50px;
        height: 50px;
        position: relative;
        left: 370px;
        float: left;
    }
    .search button{
        border: none;
        float: right;
        width: 116px;
        height: 50px;
        background-color: rgb(190,204,213);
        font-size: 18px;
        color: #ffffff;
    }
    .search a{
        cursor: pointer;
    }
    .most-hot{
        margin: 10px auto;
        height: 120px;
    }
    .logo{
        height: 40px;
    }
    .logo img{
        position: absolute;
    }
    .logo p{
        float: left;
        position: relative;
        left: 35px;
        line-height: 32px;
        font-size: 18px;
    }
    .logo button{
        float: right;
        width: 72px;
        height: 20px;
        margin: 5px;
        position: relative;
        top: 5px;
        border: none;
        background-color: rgb(190,204,213);
        color: #ffffff;
        font-size: 14px;
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
    .list h1{
        font-size: 20px;
    }
</style>