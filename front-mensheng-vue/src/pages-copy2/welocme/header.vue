<template>
	<div class="head-container">
        <div class="head-logo">
            <img width="301" height="92" src="../../public-image/logo.png" >
        </div>
        <div class="headSearch">
            <Input v-model="value4" icon="ios-clock-outline" placeholder="请输入..." style="width: 200px"></Input>   
        </div>
        <div class="head-logo"></div>
    </div>
</template>

<script>
export default {
		name: app,
        data () {
            return {
                value1: 50,
                value4:''
            }
        }
    }
</script>

<style>
    .head-container {
        margin: 0 auto;
        width: 1228px;
        height: 190px;
        background-color: blue; 
    }
    .head-logo {
        padding: 20px 0 30px 0;
    }
    .headSearch {
        display: ;
        padding :
    }
</style>
