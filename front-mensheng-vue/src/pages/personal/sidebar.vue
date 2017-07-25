<template>
  <div>
    <ul>
      <router-link to='/personal/myCourseOption'>
        <li>
          <i class="iconfont icon-office "></i>
          <span class="font16">我的课程</span>
        </li>
      </router-link>
      <router-link to="/personal/messageCenterOption">
        <li>
          <i class="iconfont icon-comments"></i>
          <span class="font16">消息中心</span>
        </li>
      </router-link>
      <router-link to="/personal/settingOption">
        <li>
          <i class="iconfont icon-set"></i>
          <span class="font16">个人设置</span>
        </li>
      </router-link>
      <router-link to='/personal/follow'>
        <li>
          <i class="iconfont icon-favoritesfilling"></i>
          <span class="font16">关注</span>
        </li>
      </router-link>
    </ul>
  </div>
</template>
<script>
	export default {
    name: 'sidebar'
  }
</script>
<style scoped>
*{box-sizing: content-box}
@font-face {font-family: "iconfont";
  src: url('./iconfont/iconfont.eot?t=1494248407198'); /* IE9*/
  src: url('./iconfont/iconfont.eot?t=1494248407198#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('./iconfont/iconfont.woff?t=1494248407198') format('woff'), /* chrome, firefox */
  url('./iconfont/iconfont.ttf?t=1494248407198') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
  url('./iconfont/iconfont.svg?t=1494248407198#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family:"iconfont" !important;
  font-size:20px;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-comments:before { content: "\e69b"; }

.icon-set:before { content: "\e6ae"; }

.icon-office:before { content: "\e705"; }

.icon-favoritesfilling:before { content: "\e730"; }

div{
  float: left;
  margin-right: 40px;
}
li{
  width: 210px; 
  height: 48px;
  background: rgb(189,204,212);
  line-height: 48px;
  margin: 5px 0;
  cursor: pointer;
}
li:nth-child(1){
  margin-top: 0;
}
i{
  margin-left: 20px;
  font-size: 20px;
  vertical-align: middle;
  color: rgb(136,160,170);
  transition: 0.1s;
}
span{
  vertical-align: middle;
  color: #fff;
  margin-left: 10px;
}
li:hover i{
  color: #fff;
}
</style>