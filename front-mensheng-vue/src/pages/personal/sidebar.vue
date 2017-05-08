<template>
  <div>
    <ul>
      <li>
        <i class="iconfont icon-office"></i>
        <span style="margin-left:10px;">我的课程</span>
      </li>
      <li>
        <i class="iconfont icon-comments"></i>
        <span style="margin-left:10px;">消息中心</span>
      </li>
      <li>
        <i class="iconfont icon-set"></i>
        <span style="margin-left:10px;">个人设置</span>
      </li>
      <li>
        <i class="iconfont icon-favoritesfilling"></i>
        <span style="margin-left:10px;">关注</span>
      </li>
    </ul>
  </div>
</template>
<script>
	export default {
    name: 'sidebar'
  }
</script>
<style scoped>
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

li{
  width: 210px;
  height: 48px;
  background: rgb(189,204,212);
  line-height: 48px;
  margin: 10px 0;
  cursor: pointer;
  transition: 0.1s;
}
i{
  margin-left: 10px;
  font-size: 20px;
  vertical-align: middle;
}
span{
  vertical-align: middle;
}
li:hover{
  color: #fff;
}
</style>