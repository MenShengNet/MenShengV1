<template>
    <div class="course-con">
        <course-header></course-header>
        <div class="course-t clearFix">
            <div class="course-navl">
                <sidebar></sidebar>
            </div>
            <div class="course-l">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
import courseHeader from '@/pages/course/course_header.vue'
import sidebar from './sidebar.vue'
export default {
    name: 'teacher',
    components: {
        courseHeader,
        sidebar
    }
}
</script>

<style scoped>
*{box-sizing: content-box}
.course-con {
    width: 1140px;
    margin: 0 auto;
}

.course-t {
    margin-top: 10px;
}

.course-l {
    float: right;
}

.course-navl {
    float: left;
}

.setting-name {
    margin-top: 0;
}
</style>
</style>