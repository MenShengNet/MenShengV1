<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
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
/*公共样式结束*/
</style>
