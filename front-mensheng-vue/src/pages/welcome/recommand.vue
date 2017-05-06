<template>
	<div class="recommend w1140">
      <div class="top clearFix">
        <div class="left">
          <div class="icon"></div>
          <p>课程推荐</p>
        </div>
        <div class="right">
          <div class="icon"></div>
          <p>探寻更多</p>
        </div>
      </div>
      <div class="container">
        <ul>
          <li v-for="item in information">
            <img v-bind:src="item.img" width="254" height="160" alt="">
            <div class="line1 clearFix">
              <span class="left">{{item.course}}</span>
              <span class="right" v-if="item.free">免费</span>
            </div>
            <div class="line2 clearFix">
              <span class="left">{{item.teacher}}</span>
              <span class="right">{{item.date}}</span>
            </div>
            <p>{{item.school}}</p>
            <p>{{item.introduction}}</p>
          </li>
        </ul>
      </div>
    </div>
</template>
<script>
export default{
  name: 'recommand',
  data () {
    return {
      information: [
        {
          img: './images/UI-2.jpg',
          course: '信号与系统期末答疑',
          free: true,
          teacher: '吴哲夫',
          date: '4月15日开始',
          school: '浙江工业大学',
          introduction: '个人简介之类的巴拉巴拉'
        },
        {
          img: './images/UI-3.jpg',
          course: '信号与系统期末答疑',
          free: false,
          teacher: '吴哲夫',
          date: '4月15日开始',
          school: '浙江工业大学',
          introduction: '个人简介之类的巴拉巴拉'
        },
        {
          img: './images/UI-4.jpg',
          course: '信号与系统期末答疑',
          free: true,
          teacher: '吴哲夫',
          date: '4月15日开始',
          school: '浙江工业大学',
          introduction: '个人简介之类的巴拉巴拉'
        },
        {
          img: './images/UI-5.jpg',
          course: '信号与系统期末答疑',
          free: false,
          teacher: '吴哲夫',
          date: '4月15日开始',
          school: '浙江工业大学',
          introduction: '个人简介之类的巴拉巴拉'
        }
      ]
    }
  }
}
</script>
<style scoped>
	/*课程推荐样式开始*/
  .recommend{height: 350px;}
  .recommend .top{margin-bottom: 15px;}
  .recommend .top .left{line-height: 26px;padding: 10px;background: rgb(189,204,212);}
  .recommend .top .left .icon{width: 26px;height: 26px;float: left; background: url("images/qietu.png") -205px -88px;}
  .recommend .top .left p{display: inline-block;text-indent: 5px;padding-right: 60px;color: #fff;}
  .recommend .top .right{padding: 10px;cursor: pointer;}
  .recommend .top .right .icon{width: 10px;height: 26px;float: left;background: url("images/qietu.png") -254px -97px;}
  .recommend .top .right p{float: left;line-height: 28px;text-indent: 10px;}
  .recommend .container ul li{width: 255px;height: 265px;border: 2px solid rgb(189,204,212);padding: 8px;margin-right: 13px;float: left;}
  .recommend .container ul li:last-of-type{margin: 0;}
  .recommend .container ul li span,p{line-height: 26px;font-size: 14px;}
  .recommend .container ul li .line1 span.left{font-size: 18px;color: #000;}
  .recommend .container ul li .line1 span.right{color: red;}
  .recommend .container ul li .line2 span.left{color: #000;}
  /*课程推荐样式结束*/
</style>
