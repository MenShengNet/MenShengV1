<template>
    <div id="app">
        <loginin v-if="state"></loginin>
        <loginout v-else></loginout>
        <router-view></router-view>
        <foot> </foot>
    </div>
</template>

<script>
import foot from '@/pages/welcome/footer'
import loginout from '@/pages/welcome/header'
import loginin from '@/pages/welcome/header-login'
import store from '@/store/index'

export default {
    // data() {
    //     return {
    //         state: false
    //     }    
    // },
    computed: {
        state () {
            return this.$store.state.isLogin
        }
    },
    components : {loginout, loginin, foot}
}
</script>

<style>
/*公共样式开始*/

 * {
     margin: 0;
    padding: 0; 
    font-family: "黑体";
} 

.font16{
    font-size: 16px;
}

.font18{
    font-size: 18px;
}

.font24{
    font-size: 24px;
}


li {
    list-style: none;
}

.w1140 {
    width: 1140px;
    margin: 30px auto 0;
}



.mb10 {
    margin-bottom: 10px;
}

.mt50 {
    margin-top: 50px;
}

.mt20 {
    margin-top: 20px;
}

.clearFix:after {
    content: "";
    display: block;
    clear: both;
}

.left,
.fl {
    float: left;
}

.right,
.fr {
    float: right;
}

.bd {
    border: 2px solid rgb(189, 204, 212);
}

a {
    text-decoration: none;
}

/*公共样式结束*/
</style>