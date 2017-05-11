<template>
	<div>
		  <div class="live-item" v-for="item in information">
		    <img :src=item.img alt="" width="200" height="130">
		    <p class="title">{{item.course}}</p>
		    <p class="teacher">{{item.teacher}}</p>
		    <p class="school">{{item.school}}</p>
		    <div class="live"></div>
		  </div>
	</div>
</template>
<script>
	export default{
		name: 'liveList',
		data () {
			return{
				information: [
					{
						img: require('../welcome/images/UI-3.jpg'),
						course: '信号与系统期末答疑',
						teacher: '吴哲夫',
						school: '浙江工业大学',
					},
					{
						img: require('../welcome/images/UI-3.jpg'),
						course: '信号与系统期末答疑',
						teacher: '吴哲夫',
						school: '浙江工业大学',
					},
					{
						img: require('../welcome/images/UI-3.jpg'),
						course: '信号与系统期末答疑',
						teacher: '吴哲夫',
						school: '浙江工业大学',
					},
					{
						img: require('../welcome/images/UI-3.jpg'),
						course: '信号与系统期末答疑',
						teacher: '吴哲夫',
						school: '浙江工业大学',
					}
				]
			}
		}
	}
</script>
<style scoped>
  .live-item{
  	margin: 0 2px;
  	width: 200px;
  	height: 200px;
  	padding: 5px;
  	border: 2px solid rgb(189,204,212);
  	display: inline-block;position: relative;
  }
  .live-item p{
  	margin: 5px 0
  }
  .live-item .title{
  	font-size: 17px;
  }
  .live-item .teacher{
  	font-size: 12px;
  }
  .live-item .school{
  	font-size: 12px;
  	color: #7e7e7e;
  }
  .live-item .live{
  	width: 25px;
  	height: 25px;
  	background: url("../../public-image/qietu2.png") -148px -250px;
  	position: absolute;
  	right: 5px;
  	bottom: 5px;
  }
</style>