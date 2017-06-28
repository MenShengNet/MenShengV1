<template>
	  <div class="course-vid">
        <div class="vid-title">
            <h3 class="c-title">直播课标题</h3>
            <p class="tec-name">吴老师</p>
        </div>
        <div class="vid-con">
            <div class="lef-vid">
                
            </div>
            <div class="rig-nav">
                <ul>
                    <li>返回课程中心</li>
                    <li></li>
                </ul>
            </div> 
        </div>
    </div>
</template>

<script type="text/javascript">
	export default {
		name: 'course_vid'
	}
</script>

<style scoped>
	
        .vid-title {

            width: 100%;
            height: 40px;
            background-color: #b9ccd3;
        }

        .vid-title .c-title {
            display: inline-block;
            font-size: 20px;
            float: left;
            margin-top: 10px;
            margin-left: 10px;
        }

        .vid-title .tec-name {
            display: inline-block;
            color: #fff;
            margin-left: 50px;
            margin-top: 10px;
        }

        .course-vid .vid-con {
            margin-top: 5px;
        }

        .course-vid .vid-con .lef-vid {
            border: 2px solid #b9ccd3;
            height: 425px;
            width: 800px;
            float: left;

        }
        .course-vid .vid-con .rig-nav ul{
            float: right;
            width: 320px;
            height: 800px;
        }

        .course-vid .vid-con .rig-nav ul li {
              padding-bottom: 12px;
            padding-top: 12px;
            padding-right: 62px;
            padding-left: 62px;
            margin-bottom: 10px;
            background: #beccd5;
            vertical-align: center;
            color: #fff;
            font-size: 15px;


        }
</style>