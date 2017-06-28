<template>
    <div>
        <div class="w1140 wrap">
            <img src="./images/logo_vertical.png" alt="logo" width="400" height="311">
            <div class="input">
                <h2>用户登录</h2>
                <p class="usr">
                    <span>账号：</span>
                    <input type="text" v-model="username" @keyup.enter="login">
                </p>
                <p class="pwd">
                    <span>密码：</span>
                    <input type="password" v-model="password" @keyup.enter="login">
                </p>
                <router-link to="" class="forget">忘记密码？</router-link>
                <input type="button" value="登 录" @click="login">
                <div class="corner">
                    <router-link to="" class="gain">获取知识</router-link>
                    <router-link to="/register" class="register">注册</router-link>
                </div>
            </div>
        </div>
    </div>
</template>



<script>
import { mapActions } from 'vuex'

export default {
    name: 'login',
    data() {
        return {
            username: null,
            password: null
        }
    },
    methods: {
        ...mapActions(['userLogin']),
        login: function () {
            var _this = this;
            var sendstr = "username=" + this.username + "&password=" + this.password;
            this.axios.post('http://localhost/mensheng/login.php', sendstr)
                .then(function (response) {
                    console.log(response);
                    if (response.data.state == true) {
                        _this.userLogin(response.data);
                        _this.$router.push({path: '/personal'});
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
}
</script>

<style scoped>
.wrap {
    width: 900px;
    background: rgb(189, 204, 212);
    margin: auto;
    padding: 70px 120px;
}

.input {
    float: right;
    width: 395px;
    height: 308px;
    border: 2px solid #fff;
    position: relative;
}

.input h2 {
    text-align: center;
    margin-top: 20px;
    margin-bottom: 45px;
}

.input p.usr {
    margin-bottom: 25px;
}

.input p.pwd {
    margin-bottom: 5px;
}

.input p span {
    font-size: 20px;
    margin-left: 25px;
    vertical-align: middle;
}

.input p input {
    width: 268px;
    height: 28px;
    border: 1px solid #fff;
    background: rgb(189, 204, 212);
    font-size: 18px;
}

.forget {
    font-size: 12px;
    color: #fff;
    position: absolute;
    right: 35px;
    text-decoration: none;
}

input[type="button"] {
    position: absolute;
    width: 112px;
    height: 36px;
    background: rgb(222, 230, 233);
    border: none;
    font-size: 20px;
    right: 130px;
    bottom: 50px;
    cursor: pointer;
}

.corner {
    position: absolute;
    left: 25px;
    bottom: 10px;
}

.gain,
.register {
    font-size: 12px;
    text-decoration: none;
    color: #000;
}
</style>
