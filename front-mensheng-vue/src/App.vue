<template>
  <div id="app">
  	<headlogin></headlogin>
    <heading></heading>
    <router-view></router-view>
  
    <foot></foot>
  </div>
</template>

<script>
import foot from '@/pages/welcome/footer'
import heading from '@/pages/welcome/header'
import headlogin from '@/pages/welcome/header-login'

export default {
  name: 'app',
  components:{heading,foot}
}
</script>

<style>
/*公共样式开始*/
*{margin:0;padding:0;font-family:"黑体";}
li{list-style: none;}
.w1140{width: 1140px;margin:30px auto 0;}
.mb10{margin-bottom: 10px;}
.mt50{margin-top: 50px;}
.mt20{margin-top: 20px;}
.clearFix:after{content: "";display: block;clear: both;}
.left,.fl{float: left;}
.right,.fr{float: right;}
.bd{border: 2px solid rgb(189,204,212);}
a{text-decoration: none;}
/*公共样式结束*/
</style>