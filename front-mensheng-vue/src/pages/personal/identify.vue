<template>
	<form class="identify clearFix fr">
    <div class="mt20 ml40 block">
      <legend class="fl">申请认证资格：</legend>
      <select name="" id="">
        <option value="">教师</option>
        <option value="">学生</option>
        <option value="">企业员工</option>
      </select>
    </div>
    <p class="note">说明<br /><span>1.请选择申请认证类型；<br />2.上传认证资料，学生：学生证或校园卡；教师：教师资格证及身份证；企业员工：工牌与身份证；<br />3.申请认证后1-3日予以反馈。</span></p>
    <div class="idCard clearFix mt20 ml40 block">
      <legend class="fl">身份证：</legend>
      <div class="img fl"></div>
      <input type="file">
    </div>
    <div class="teachQualification clearFix mt20 ml40 block">
      <legend class="fl">教师资格证：</legend>
      <div class="img fl"></div>
      <input type="file">
    </div>
  </form>

</template>
<script>
	export default{
		name: 'identify'
	}
</script>
<style scoped>
	.identify{width: 886px;height: 745px;border: 2px solid rgb(189,204,212);margin-top: 10px;}
    .identify .idCard .img{width: 340px;height: 200px;padding: 8px;border: 2px solid rgb(189,204,212);}
    .identify .teachQualification .img{width: 340px;height: 200px;padding: 8px;border: 2px solid rgb(189,204,212);}
    .identify legend{width: 140px;line-height: 35px;}
    .identify .note{margin-left: 180px;color: #888;font-size: 14px;margin-top: 10px;}
    .identify select{border: 2px solid rgb(189,204,212);width: 355px;height: 35px;}
    .identify input[type="file"]{position: absolute;right: 110px;bottom: 0;}
    .identify .block{position: relative;}

</style>