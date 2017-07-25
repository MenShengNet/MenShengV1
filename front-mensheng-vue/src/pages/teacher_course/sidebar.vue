<template>
    <div class="course-nav">
        <ul>
            <router-link to="/teacher/manageNotification/notificatin">
                <li>
                    <i class="iconfont icon-notification"></i> 公告管理
                </li>
            </router-link>
            <router-link to="/teacher/manageContent">
                <li>
                    <i class="iconfont icon-enclosure"></i> 章节管理
                </li>
            </router-link>
            <router-link to="/teacher/manageWare/ware">
                <li>
                    <i class="iconfont icon-zuoye1"></i> 课件管理</li>
            </router-link>
            <router-link to="/teacher/manageWork/work">
                <li>
                    <i class="iconfont icon-zuoye1"></i> 作业管理</li>
            </router-link>
            <!-- <router-link to="/teacher/exam"> -->
                <!-- <li>
                    <i class="iconfont icon-zuoye"></i> 考试</li>
            </router-link> -->
            <router-link to="/teacher/discussion">
                <!-- <li>
                    <i class="iconfont icon-pinglun"></i> 讨论区</li> -->
            </router-link>
            <li>
                <i class="iconfont icon-management"></i> 学生管理</li>
            <!-- <li>
                <i class="iconfont icon-data"></i> 课程数据</li> -->
            <router-link to="/teacher/setting">
                <li>
                    <i class="iconfont icon-shezhi"></i> 设置</li>
            </router-link>
        </ul>
    </div>
</template>

<script type="text/javascript">
export default {
    name: 'teacher-slider'
}
</script>

<style scoped>
* {
    box-sizing: content-box
}

.course-nav {
    width: 180px;
    overflow: auto;
}

.course-nav ul {
    width: 100%;
    overflow: hidden;
    height: auto;
}

.course-nav li {
    padding-bottom: 12px;
    padding-top: 12px;
    padding-right: 73px;
    padding-left: 31px;
    margin-bottom: 10px;
    background: #beccd5;
    vertical-align: center;
    color: #fff;
    font-size: 15px;
    width: 90px;
}

.couse-nav li:last-child {
    width: 180px;
}

.icon-notification {
    color: #fff;
}

.course-vid {
    width: 1140px;
    margin: 0 auto;
}

.course-nav ul li:hover i {
    color: black;
}
</style>