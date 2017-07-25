<template>
    <div class="container">
        <router-link to='/teacher/manageNotification/notificatin'>
            <div class="msgBtn">
                <p>公告</p>
            </div>
        </router-link>
        <router-link to='/teacher/manageNotification/publishNotification'>
            <div class="msgBtn">
                <p>发布公告</p>
            </div>
        </router-link>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    name: 'manage_notifications'
}
</script>
<style scoped>
*{box-sizing: content-box}
.container{
    width: 940px;
}
.msgBtn {
    border: 2px solid rgb(189, 204, 212);
    display: inline-block;
    margin-right: 37px;
    margin-bottom: 10px;
}

p {
    width: 146px;
    height: 36px;
    margin: 3px;
    font-size: 18px;
    display: inline-block;
    text-indent: 8px;
    line-height: 36px;
    background: rgb(189, 204, 212);
}

a {
    color: #000;
}
</style>