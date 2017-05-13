<template>
  <div class="wrap fr">
	  <div class="container" v-for="item in information">
	    <div class="img fl">
	    	<img :src=item.img alt="" width="200" height="130">
	    </div>
	    <div class="txt fl">
	      <p class="lesson">{{item.course}}</p>
	      <p class="teacher">{{item.teacher}}</p>
	      <p class="progress">{{item.progress}}</p>
	      <p class="school">{{item.school}}</p>
	    </div>
	    <div class="state fr">
	      <p>{{item.status}}</p>
	    </div>
	  </div>
	</div>
</template>
<script>
	export default{
		name: 'lessonInform',
		data () {
			return{
				information: [
					{
						img: require('../welcome/images/UI-3.jpg'),
						course: '信号与系统期末答疑',
						teacher: '吴哲夫',
						school: '浙江工业大学',
						progress: '进行至第3周',
						status: '有新的课件发布'
					},
					{
						img: require('../welcome/images/UI-3.jpg'),
						course: '信号与系统期末答疑',
						teacher: '吴哲夫',
						school: '浙江工业大学',
						progress: '进行至第3周',
						status: '有新的课件发布'
					},
					{
						img: require('../welcome/images/UI-3.jpg'),
						course: '信号与系统期末答疑',
						teacher: '吴哲夫',
						school: '浙江工业大学',
						progress: '进行至第3周',
						status: '有新的课件发布'
					},
					{
						img: require('../welcome/images/UI-3.jpg'),
						course: '信号与系统期末答疑',
						teacher: '吴哲夫',
						school: '浙江工业大学',
						progress: '进行至第3周',
						status: '有新的课件发布'
					}
				]
			}
		}
	}
</script>
<style scoped>
  .wrap{margin-top: 10px}
  .container{width: 876px;height: 130px;padding: 5px;border: 2px solid rgb(189,204,212);position: relative;margin-bottom: 10px;}
  .container .img{margin-right: 15px;}
  .container .txt .lesson{font-size: 18px;}
  .container .txt .teacher,.progress,.school{font-size: 12px;margin: 8px 0}
  .container .txt .progress{color: rgb(189,204,212);}
  .container .txt .school{position: absolute;bottom: 3px;margin: 0;color: #7e7e7e;}
  .container .state{width: 440px;height: 128px;border: 1px solid rgb(189,204,212);}
  .container .state p{text-indent: 5px;}
</style>