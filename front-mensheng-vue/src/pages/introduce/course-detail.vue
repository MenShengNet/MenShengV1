<template>
  <div class="wrap">
    <div class="up clearfix">
      <div class="up-l">
        <img class="course_img" src="" width="490" height="275" alt="">
        <div class="content">
          <div class="name">
            <p>{{information.course}}</p>
            <ul>
              <li>
                <i class="iconfont icon-tv" style="font-size: 20px;"></i>
                <span>直播</span>
              </li>
              <li>
                <i class="iconfont icon-play"></i>
                <span>录播</span>
              </li>
              <li>
                <i class="iconfont icon-a04suo"></i>
                <span>私密</span>
              </li>
            </ul>
            <p class="time">开课时间：{{information.startTime}}</p>
          </div>
          <div class="join">
            <div class="click">
              <p>我要参加</p>
            </div>
          </div>
        </div>
      </div>
      <div class="up-r">
        <div class="share">
          <p>
            <span>分享到：</span>
            <i class="iconfont icon-weixin"></i>
            <i class="iconfont icon-friends"></i>
            <i class="iconfont icon-weibo"></i>
            <i class="iconfont icon-QQ"></i>
          </p>
        </div>
        <div class="QR">
          <p>关注公众号</p>
          <img src="" width="140" height="140">
        </div>
      </div>
    </div>
    <div class="down clearfix">
      <div class="down-l">
        <div class="dl-head">
          <i class="iconfont icon-shu"></i>
          <a class="dl-head" href="">课程介绍</a>
          <hr class="hr1" size="5">
        </div>
        <div class="dl-body">
          <p>{{information.intro}}</p>
        </div>
      </div>
      <div class="down-r">
          <div class="inf">
            <div class="f1">课程信息</div>
            <div class="f2-1 bd">
              <p>授课类型：{{information.type}}</p>
              <p>开始时间：{{information.startTime}}</p>
              <p>时&nbsp;&nbsp;&nbsp;&nbsp;长：{{information.duration}}</p>
              <p>费&nbsp;&nbsp;&nbsp;&nbsp;用：{{information.cost}}</p>
            </div>
          </div>
          <div class="tea">
            <div class="f2">授课教师</div>
            <div class="f2-2 bd">
              <div class="f2-2-1"></div>
              <div class="f2-2-2">
                <p class="per">{{information.teacher}}</p>
                <i class="iconfont icon-4" v-if='information.identify==1'></i>
                <br />
                <p class="sch">{{information.school}}</p>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    name: 'course_introduce',
    data(){
      return{
        information:{
          course:'信号与系统',
          img:'',
          startTime:'2017年5月14号',
          QRcode:'',
          intro:'Internet Explorer 10、Firefox 以及 Opera 支持 animation 属性。Safari 和 Chrome 支持替代的 -webkit-animation 属性。注释：Internet Explorer 9 以及更早的版本不支持 animation 属性。animation 属性是一个简写属性，用于设置六个动画属性：animation-nameanimation-duration animation-timing-function animation-delay animation-iteration-count 注释：请始终规定 animation-duration 属性，否则时长为 0，就不会播放动画了。默认值：  none 0 ease 0 normal继承性：  no 版本： CSS3JavaScript 语法：  object.style.animation="mymove 5s infinite"语法 animation: name duration timing-function delay iteration-count direction;值 描述 animation-name  规定需要绑定到选择器的 keyframe 名称。animation-duration  规定完成动画所花费的时间，以秒或毫秒计。animation-timing-function 规定动画的速度曲线。animation-delay 规定在动画开始之前的延  animation-iteration-count 规定动画应该播放的次数。animation-directi规定是否应该轮流反向播放动画。相关页面CSS3 教程：CSS3 动画CSS 参考手 SEARCH:W3School 提供的内容仅用于培训。我们不保证内容的正确性。通过使用本站内容随之而来的风险与本站无关。W3School 简体中文版的所有内容仅供测试，对任何法律问题及风险不承担任何责任。当使用本站时，代表您已接受了本站的使用条款和隐私条款。版权所有，保留一切权利。 赞助商：上海赢科投资有限公司。 蒙ICP备06004630号Internet Explorer 10、Firefox 以及 Opera 支持 animation 属性。Safari 和 Chrome 支持替代的 -webkit-animation 属性。注释：Internet Explorer 9 以及更早的版本不支持 animation 属性。animation 属性是一个简写属性，用于设置六个动画属性：animation-nameanimation-duration animation-timing-function animation-delay animation-iteration-count 注释：请始终规定 animation-duration 属性，否则时长为 0，就不会播放动画了。默认值：  none 0 ease 0 normal继承性：  no 版本： CSS3JavaScript 语法：  object.style.animation="mymove 5s infinite"语法 animation: name duration timing-function delay iteration-count direction;值 描述 animation-name  规定需要绑定到选择器的 keyframe 名称。animation-duration  规定完成动画所花费的时间，以秒或毫秒计。animation-timing-function 规定动画的速度曲线。animation-delay 规定在动画开始之前的延  animation-iteration-count 规定动画应该播放的次数。animation-directi规定是否应该轮流反向播放动画。相关页面CSS3 教程：CSS3 动画CSS 参考手 SEARCH:W3School 提供的内容仅用于培训。我们不保证内容的正确性。通过使用本站内容随之而来的风险与本站无关。W3School 简体中文版的所有内容仅供测试，对任何法律问题及风险不承担任何责任。当使用本站时，代表您已接受了本站的使用条款和隐私条款。版权所有，保留一切权利。 赞助商：上海赢科投资有限公司。 蒙ICP备06004630号',
          type:'直播',
          duration:'150分钟',
          cost:'免费',
          techerHead:'',
          teacher:'吴哲夫',
          identify:1,
          school:'浙江工业大学'
        }
      }
    }
  }
</script>
<style scoped>
  .wrap{ 
    width: 1140px;
    margin: auto;
    }
    .up{
        height: 313px;
    }
    .clearfix:after{
        content: "";
        display: block;
        clear: both;
    }
    .up-l{
        height: 313px;
        width: 915px;
        float: left;
        background-color:#c0cad3;
    }
    img.course_img{
      margin: 17px 0 0 17px;
      border: 1px solid #fff;
    }
    .content{
      width:370px;
      height:275px;
      margin: 17px 20px 0 0;
      float: right;
    }
    .name{
      height: 195px;
      width: 100%;
      background-color: #dee6e9;
      position: relative;
    }
    .name p{
      font-size: 30px;
      padding: 12px 0 0 12px;
    }
    .name ul{
      margin-top: 25px;
      height: 40px;
      padding: 0 10px;
    }
    .name ul li{
      width: 75px;
      height: 30px;
      display: inline-block;
      margin-right: 35px;
      margin-top: 5px;
      font-size: 20px;
      position: relative;
    }
    .name ul li span{
      position: absolute;
      top:4px;
      right: 3px;
    }
    .name ul li i{
      display: inline-block;
      position: absolute;
      top: 2px;
      left: 6px;
      font-size: 21px;

    }
    .name .time{
      font-size: 18px;
      position: absolute;
      bottom: 16px;
      left: 6px;
    }
    .join{
      margin: 20px 0 0 0;
      height: 56px;
      border: 3px solid #dee6e9;
    }
    .click{
      width: 353px;
      height: 45px;
      background-color: #dee6e9;
      margin: 5px 5px;
    }
    .click p{
      font-size: 25px;
      line-height: 45px;
      text-align: center;
    }
    .up-r{
      height: 313px;
      width: 215px;
      float: right;
    }
    .share{
      height: 80px;
      width: 100%;
      background-color:#c0cad3;
    }
    .share i{
      font-size: 20px;
    }
    .share i.icon-weixin{
      font-size: 22px;
    }
    .share i.icon-weibo{
      font-size: 24px;
    }
    .share p{
      text-align: center;
      line-height: 80px;
    }
    .QR{
      height: 219px;
      width: 100%;
      background-color:#c0cad3;
      margin-top: 13px;
      text-align: center;
    }
    .QR p{
      font-size: 20px;
      padding-top: 17px; 
    }
    .QR img{
      margin-top: 20px;
      border: 1px solid;
    }
    .bd {
      border: 2px solid #bdccd3;
    }
    .down{
      margin-top: 25px;
    }
    .down-l {
      width: 900px;
      border-bottom: 2px solid #bdccd3;
      float: left;
      margin-bottom: 25px;
    }
    .dl-head {
      font-size: 24px;
      text-decoration: none;
      color: #000;
    }
    .dl-i1 {
      height: 25px;
      width: 25px;
      display: inline-block;
    }
    .hr1 {
      position: relative;
      border: none;
      background: #bdccd3;
      width: 755px;
      display: inline-block;
      vertical-align: middle;
    }
    .dl-body {
      height: 263px;
      margin-top: 20px;
      font-size: 12px;
      text-decoration: none;
      color: #000;
      word-break:break-word;
      word-wrap:break-word;
      white-space:pre-wrap;
      overflow: hidden;
    }
    .down-r {
      width: 215px;
      float: right;
      margin-bottom: 25px;
    }
    .f1{
      font-size: 24px;
      text-align: center;
      margin: 0 0 12px 0;
    }
    .f2 {
      font-size: 24px;
      text-align: center;
      margin: 12px 0;
    }
    .f2-1 {
      padding: 15px 25px;
      font-size: 12px;
    }
    .f2-2 {
      height: 130px;
    }
    .f2-2-1 {
      margin: 9px 0 0 9px;
      float: left;
      height: 110px;
      width: 110px;
      border: 1px solid;
      border-radius: 50%;
    }

    .f2-2-2 {
      margin:25px 5px 0 0;
      float: right;
    }
    .icon-4{
      display: inline-block;
      font-size: 24px;
      margin: 8px 0;
      color: rgb(149,42,45);
    }
    .per {
      font-size: 18px;
    }
    .sch {
      font-size: 12px;
    }
    .icon-shu{
      font-size: 24px;
    }
</style>