<template>
    <div class="container">
        <div class="setting-name">
            <p>课件</p>
        </div>
        <div class="button">
          <div class="left">
              <img src="./images/video1.png">
          </div>
          <div class="right">
              <img src="./images/paper2.png">
          </div>
        </div>
        <div class="content">
            <div class="video">
                 <video-player :options="playerOptions"></video-player>
            </div>
            <div class="comment">
                <input type="text" name="comment" placeholder="说点什么吧...">
                <button>发  送</button>
            </div>
            <div class="comment-list">
                <p>弹幕列表</p>
                <button>时间</button>
                <button>内容</button>
                <button>时间</button>
                <div class="comment-content" v-for="item in comments">
                    <p>{{ item.comment }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import { videoPlayer } from 'vue-video-player'
    Vue.use(videoPlayer);
    export default {
    name: 'course_video',
    data() {
      return {      
        comments: [
            {'comment':"哈哈哈"},
            {'comment':"嘿嘿嘿"},
            {'comment':"嘻嘻嘻"},
            {'comment':"吼吼吼"},
            {'comment':"很骄傲放假啊放假啊书法和公诉机关家哈加客服哈"},
        ],
        playerOptions: {
          // component options
          playsinline: false,
          language: 'zh-CH',
          sources: [{
            type: "video/x-flv",
            src: "http://flv41144ee2.live.126.net/live/2123c3301cee4e3ba6c1c07f202045a8.flv?netease=flv41144ee2.live.126.net"
          }],
          poster: "/static/images/author.jpg",
          height: 350
        }
      }},
    components: {
      videoPlayer
  }
}
</script>
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
        width: 458px;
        height: 50px; 
        float: left;
        background-color: rgb(190,204,213);
        text-align: center;
    }
    .right{
        cursor: pointer;
        width: 454px;
        height: 46px; 
        float: right;
        text-align: center;
        border: 2px solid rgb(190,204,213);
    }
    .button img{
        position: relative;
        top: 12px;
    }
    .content{
        margin: 10px 0;
        width: 920px;
        height: 360px;
    }
    .video{
        width: 652px;
    }
    .comment{
        margin: 5px 0;
        width: 651px;
        height: 40px;
        border: 1px solid rgb(190,204,213);
    }
    .comment input{
        outline: none;
        width: 560px;
        height: 99%;
        font-size: 15px;
        border: none;
    }
    .comment button{
        border: none;
        cursor: pointer;
        position: relative;
        top: 3px;
        right: 3px;
        background-color: rgb(190,204,213);
        color: #ffffff;
        font-size: 16px;
        width: 86px;
        height: 34px;
        float: right;
    }
    .comment-list{
        float: right;
        position: relative;
        top: -402px;
        width: 258px;
        height: 395px;
        border: 1px solid rgb(190,204,213);
    }
    .comment-list p{
        width: 245px;
        height: 32px;
        background-color: rgb(190,204,213);
        color: #ffffff;
        text-align: center;
        line-height: 32px;
        margin: 5px auto;
    }
    .comment-list button{
        position: relative;
        left: 7px;
        cursor: pointer;
        width: 76px;
        height: 35px;
        border: 1px solid rgb(190,204,213);
        background-color: #ffffff;
    }
    .comment-content p{
        width: 95%;
        text-align: center;
        background-color: #ffffff;
        color: #000000;
        height: 20px;
        font-size: 14px;
        margin: auto;
        line-height: 20px;
    }
</style>