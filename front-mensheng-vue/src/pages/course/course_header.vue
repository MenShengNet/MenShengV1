<template>
	  <div class="stutime">
        <div class="left-icon">
            <a href="#"><img src="./images/left-icon.png" alt=""></a>
        </div>
        <div class="right">
            <div class="time-info">
                <h2>信号与系统</h2>
                <p>吴老师</p>
                <div class="time-icon"></div>
                <p class="time-time">学习时长：0分</p>

            </div>
        </div>
       </div>
</template>
<script type="text/javascript">
	export default {
		name:"course_header"
 	}
</script>

<style scoped>
*{box-sizing: content-box}
	    .stutime{
            width: 1140px;
            height: 114px;
            margin: 0 auto;
            margin-top: 10px;
        }
        .stutime .left-icon {
            float: left;
        }

        .stutime .left-icon,
        .stutime .left-icon a,
        .stutime .left-icon a img{
            height:  114px;
            width: 180px;
        }

        .stutime .right {
            width: 954px;
            height: 108px;
            border-bottom: 6px solid #beccd5;
            float: right;
        }
        .stutime .right .time-info {
            width: 100%;
            height: 100px;
            background: #beccd5;
            border-bottom: 3px solid #fff;
            color: #fff;
        }
        .time-icon {
            height: 46px;
            width: 41px;
            background: url("./images/time-icon.png");
            background-size: cover;
            position: relative;
            display: inline-block;  
            right: -700px;
            top: 10px;
            /* clear: right; */
        }
        .stutime .right .time-info h2{
            display: inline-block;
            margin-top: 10px;
            margin-left: 10px;
            float: left;
        }

        .stutime .right .time-info p {
            display: inline-block;
            margin-top: 40px;
            margin-left: 10px;
            float: left;
            clear: both;
        }
        
        .stutime .right .time-info .time-time {
            position: relative;
            right: -800px;
            top: -70px;
        }
</style>