<template>
    <div>
        <div id="head" class="header clearFix w1140">
            <router-link to='/welcome'>
                <div class="logo">
                    <img src="../../public-image/logo.png">
                </div>
            </router-link>
            <div>
                <ul class="headnav">
                    <li class="item">
                        <span id="first">全部课程</span>
                    </li>
                    <li class="item" id="fontsize">
                        <span>直播</span>
                    </li>
                    <li class="item">
                        <span>线下课堂</span>
                    </li>
                    <li class="item">
                        <span>我要开课</span>
                    </li>
                    <li class="searchpos">
                        <div class="search">
                            <input type="text" placeholder="搜索">
                            <div class="searchButton"></div>
                        </div>
                    </li>
                    <li class="item notic">
                        <span class>通知</span>
                    </li>
                    <li class="item-my-img" v-on:mouseover='dropmenuvisible()' v-on:mouseout='dropmenuhidden()'>
                        <img class="my-img" src="../../public-image/my-img.png" alt="">
                        <div class="drop-menu">
                            <ul>
                                <router-link to="/personal">
                                    <li class="menu-item">
                                        <a>个人中心</a>
                                    </li>
                                </router-link>
                                <router-link to="/personal/messageCenterOption">
                                    <li class="menu-item">
                                        <a>通知消息</a>
                                    </li>
                                </router-link>
                                <li class="menu-item" @click="loginout">
                                    <a>退出</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
    
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'headerlogin',
    methods: {

        ...mapActions(['userLoginOut']),

        allList: function () {
            this.$router.push({
                path: '/course_list'
            })
            this.axios.get()
                .then(function (response) { })
        },
        dropmenuvisible: function () {
            var y = document.getElementById("nidaye");
            var x = document.getElementsByClassName("drop-menu")[0];
            x.style.visibility = "visible";
            console.log(x[0]);
        },
        dropmenuhidden: function () {
            var x = document.getElementsByClassName("drop-menu")[0];
            x.style.visibility = "hidden";
        },

        loginout: function () {
            this.userLoginOut();
            this.$router.push({ path: '/welcome' });
        }
    }
}

</script>


<style scoped>
* {
    box-sizing: content-box;
}

.header {
    height: 102px;
    width: 1140px;
    margin: 0 auto 10px;
    /*background-color: gray;*/
}

.logo {
    /*background: url("images/qietu.png") -13px -2px;*/
    margin-top: 5px;
    width: 301px;
    height: 92px;
    float: left;
    display: inline-block;
    cursor: pointer;
}

.focus {
    height: 102px;
    float: left;
    /*  display: inline-block;*/
    /*	background-color: aqua;*/
}

.headnav {
    list-style: none;
    margin: auto 0;
    padding: 0px;
    width: auto;
}

.item {
    float: left;
    text-align: center;
    margin: 0 10px 0 10px;
    line-height: 102px;
    font-size: 15pt;
}


#first {
    margin-left: 25px;
}

.searchpos {
    padding-left: 40px;
    padding-right: 30px;
    float: left;
    display: inline-block;
    vertical-align: middle;
    line-height: 94px;
}

.search {
    display: inline-block;
    margin: 0 auto;
    vertical-align: middle;
}

.search input {
    width: 210px;
    height: 30px;
    border: 2px solid rgb(189, 204, 212);
    text-indent: 10px;
    color: #000;
    display: inline-block;
    vertical-align: middle;
}

.header .searchButton {
    display: inline-block;
    width: 34px;
    height: 34px;
    background: url("images/qietu.png") -103px -86px;
    vertical-align: middle;
    cursor: pointer;
}

.notic {
    display: inline-block;
    padding-right: 10px;
    float: left;
    line-height: 102px;
}

.item-my-img {
    float: left;
    height: 102px;
    line-height: 94px;
    float: left;
    display: inline-block;
    position: relative;
    z-index: 12;
}

.my-img {
    text-align: center;
    margin: auto 0;
    display: inline;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    vertical-align: middle;
}


.drop-menu {
    visibility: hidden;
    display: block;
    float: right;
    width: 120px;
    height: 120px;
    background-color: #BDCCD4;
    position: absolute;
    top: 80px;
    left: -43px;
    padding-top: 5px;
    z-index: 12;
}


.menu-item {
    font-size: 14pt;
    line-height: 40px;
    list-style: none;
    width: auto;
    /*		padding-left: 20px;*/
    cursor: pointer;
}

.menu-item a {
    display: block;
    line-height: 40px;
    height: 40px;
    text-align: center;
    width: auto;
    color: black;
    background-color: #BDCCD4;
}

.menu-item a:hover {
    background-color: white;
}
</style>
