<template>
	<div class="follow bd clearFix fr">
    <div class="item bd fl" v-for="item in information">
      <div class="img"></div>
      <p class="teacher">{{item.teacher}}</p>
      <p class="intro bd">
        {{item.intro}}
        <span class="icon"></span>
      </p>
    </div>
  </div>
</template>
<script>
	export default{
		name: 'follow',
		data () {
			return{
				information: [
					{
						teacher: '吴哲夫',
						intro: '个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍'
					},
					{
						teacher: '吴哲夫',
						intro: '个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍'
					},
					{
						teacher: '吴哲夫',
						intro: '个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍'
					}
				]
			}
		}
	}
</script>
<style scoped>
  .follow{
  	width: 886px;
  	height: 693px;
  	padding-top: 25px;
  }
  .follow .item{
  	width: 245px;
  	height: 275px;
  	padding: 10px;
  	margin-left: 20px;
  }
  .follow .item .img{
  	width: 95px;
  	height: 97px;
  	margin: 17px auto 10px;
  	background:lightskyblue;
  	border-radius: 50%;
  }
  .follow .item .teacher{
  	text-align: center;
  	margin-bottom: 7px;
  }
  .follow .item .intro{
  	width: 232px;
  	height: 114px;
  	position: relative;
  	padding: 5px;
  }
  .follow .item .intro .icon{
  	position: absolute;
  	display: block;
  	width: 30px;
  	height: 30px;
  	right: 0;bottom:0;
  	background: url("../../public-image/qietu2.png")-126px -204px;
  	cursor: pointer;
  }
</style>