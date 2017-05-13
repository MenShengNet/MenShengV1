<template>
  <div class="recharge bd fr">
  <div class="content">
    <p class="line1"><span class="title">余 额：</span><span class="posses">10000枚</span></p>
    <div class="money clearFix">
      <span class="fl title">充 值：</span>
      <div class="bd csr">10元</div>
      <div class="bd csr">20元</div>
      <div class="bd csr">30元</div>
      <div class="bd input">填写金额</div>
      <div class="btn">充值</div>
    </div>
    <p class="note">说明：1元=xxxx平台币</p>
  </div>
  <div class="icon"></div>
</div>
</template>
<script>
  export default{
    name: 'recharge'
  }
</script>
<style scoped>
  .recharge{width: 886px;height: 740px;margin-top: 10px;font-size: 18px;position: relative;}
  .recharge .content{width: 600px;margin: 60px auto;}
  .recharge .content .money{position: relative;margin-bottom: 10px;}
  .recharge .content .money div{float: left;}
  .recharge .content .line1{margin: 10px 0;}
  .recharge .content .line1 .title{display: inline-block;}
  .recharge .content .line1 .posses{font-size: 22px;font-weight: bold;}
  .recharge .content .title{width: 70px;}
  .recharge .content .money div{width: 55px;height: 55px;line-height: 55px;text-align: center;margin-right: 20px;}
  .recharge .content .money div.input{font-size: 13px;}
  .recharge .content .money div.btn{
    width: 90px;height: 30px;
    background: rgb(189,204,212);
    line-height: 30px;
    position: absolute;
    bottom: 0;right: 100px;
    cursor: pointer;
  }
  .recharge .content p.note{font-size: 14px;color: #666;position: relative;left: 70px;}
  .recharge .icon{
    position: absolute;
    left: 104px;top: 52px;
    width: 38px;height: 35px;
    background: url("../../public-image/qietu2.png")-129px 0px;
  }
</style>