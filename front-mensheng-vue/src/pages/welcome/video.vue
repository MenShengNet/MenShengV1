<template>
<div>
	  <div class="show clearFix">
			<div class="left">
			    <video-player :options="playerOptions"></video-player>
        </div>
        <div class="right">
          <ul>
            <li class="pic1"></li>
            <li class="pic2"></li>
            <li class="pic3"></li>
            <li class="pic4"></li>
          </ul>
        </div>
      </div>
      </div>
</template>
<script>
  import Vue from 'vue'
  import { videoPlayer } from 'vue-video-player'
  Vue.use(videoPlayer);
export default {
    data() {
      return {
        playerOptions: {
          // component options
          playsinline: false,
          language: 'zh-CH',
          sources: [{
            type: "video/x-flv",
            src: "http://flv41144ee2.live.126.net/live/2123c3301cee4e3ba6c1c07f202045a8.flv?netease=flv41144ee2.live.126.net"
          }],
          poster: "/static/images/author.jpg",
          height: 492
        }
      }},
    components: {
      videoPlayer
  }
}
</script>

<style scoped>
  .clearFix:after{content: "";display: block;clear: both;}
  .left{float: left;}
  .right{float: right;}
  .show .left{width: 876px;height: 492px;border: 16px solid rgb(189,204,212);}
  .show .right ul{border: 10px solid  rgb(189,204,212);}
  .show .right ul li{display: block;width: 186px;height: 118px;border:4px solid rgb(189,204,212);border-right: none;border-left:none;}
  .show .right ul li.pic1{background: url("../public-image/UI-5.jpg") center/cover;}
  .show .right ul li.pic2{background: url("../public-image/UI-2.jpg") center/cover;}
  .show .right ul li.pic3{background: url("../public-image/UI-4.jpg") center/cover;}
  .show .right ul li.pic4{background: url("../public-image/UI-3.jpg") center/cover;}
</style>


