<template>
  <div>
    <div class="w1140 wrap">
      <img src="./images/logo_vertical.png" alt="logo" width="400" height="311">
      <div class="input">
        <h2>用户注册</h2>
        <p class="usr"><span>账 号：</span><input type="text" v-model="username"></p>
        <p class="pwd"><span>密 码：</span><input type="password" v-model="password"></p>
        <p class="confirm"><span>确认密码：</span><input type="password" v-model="confirm"></p>
        <input type="checkbox" v-model="agree"><span>我已阅读《xxx》</span>
        <input type="button" value="注 册" @click="register">
        <div class="corner">
          <router-link to="" class="gain">获取知识</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default{
  name: 'register',
  data () {
    return {
      username: null,
      password: null,
      confirm: null,
      agree: null
    }
  },
  methods: {
    register: function () {
      if (!this.agree) {
        console.log('请同意《xxx》')
      } else if (this.password === this.confirm && this.agree) {
        console.log('user:' + this.username + ' ' + 'pwd:' + this.password)
      } else {
        console.log('两次输入的密码不一致')
      }
    }
  }
}
</script>

<style scoped>
* {
    box-sizing: content-box;
}
  .wrap{
    width: 900px;
    background: rgb(189,204,212);
    margin: auto;
    padding: 70px 120px;
  }
  .input{
    float: right;
    width: 395px;
    height: 308px;
    border: 2px solid #fff;
    position: relative;
  }
  .input h2{
    text-align: center;
    margin-top:20px;
    margin-bottom: 25px;
  }
  .input p{
    margin-bottom: 15px;
  }
  .input p.confirm{
    margin-bottom: 5px;
  }
  .input p span{
  	display: inline-block;
  	width: 100px;
    font-size: 20px;
    margin-left: 25px;
    line-height: 30px;
	text-align: right;
  }
  .input p input{
    width: 230px;
    height: 28px;
    border: 1px solid #fff;
    background: rgb(189,204,212);
    position: absolute;
    right: 40px;
    font-size: 18px;
  }
  input[type="button"]{
    position: absolute;
    width: 112px;
    height: 36px;
    background: rgb(222,230,233);
    border: none;
    font-size: 20px;
    right: 130px;
    bottom:50px;
  }
  input[type="checkbox"]{
		margin-left: 125px;
  }
  .corner{
    position: absolute;
    left: 25px;
    bottom: 10px;
  }
  .gain,.register{
    font-size: 11px;
    text-decoration: none;
    color: #000;
  }
</style>
