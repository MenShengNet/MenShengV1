<template>

	 <div class="course-nav">
        <ul><router-link to="/course/notice">
            <li><i class="iconfont icon-notification"></i>  <span>公告</span></li>
            </router-link>
            <router-link to="/course/ware">
            <li><i class="iconfont icon-enclosure"></i>  课件</li>
            </router-link>
            <router-link to="/course/work">
            <li><i class="iconfont icon-zuoye1"></i>  作业</li>
            </router-link>
            <router-link to="/course/exam">
            <li><i class="iconfont icon-zuoye"></i> 考试</li>
            </router-link>
            <router-link to="/course/discussion">
            <li><i class="iconfont icon-pinglun"></i> 讨论区</li>
            </router-link>
            <router-link to="/course/setting">
            <li><i class="iconfont icon-shezhi"></i> 设置</li>
            </router-link>
        </ul>
    </div>
</template>
<script type="text/javascript">
	export default {
		name: 'couse_nav'
	}
</script>

<style scoped>
	.course-nav {
            width: 180px;
            overflow: auto;
        }

        .course-nav ul{
            width: 100%;
            overflow: hidden;
            height: auto;
        }
        .course-nav li {
            padding-bottom: 12px;
            padding-top: 12px;
            padding-right: 93px;
            padding-left: 31px;
            margin-bottom: 10px;
            background: #beccd5;
            vertical-align: center;
            color: #fff;
            font-size: 15px;
            width: 70px;
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
        .course-nav ul li:hover i{
        	color: black;
        }
</style>