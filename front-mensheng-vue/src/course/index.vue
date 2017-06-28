<template>
<div class="course-con">
	<course-header></course-header>
	<div class="course-t clearFix">
	<div class="course-navl">
	<course-nav></course-nav>
	</div>
	<div class="course-l">
	<router-view></router-view>
	</div>
	</div>
</div>
</template>

<script type="text/javascript">
	import courseHeader from './course_header.vue'
	import courseNav from './course_nav.vue'
	export default {
		name: 'courseIndex',
		components: {
			courseHeader,
			courseNav
		}
	}

</script>

<style scoped>
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

	.course-navl{
		float: left;
	}

	.setting-name {
		margin-top: 0;
	}
</style>
