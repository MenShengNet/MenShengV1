<template>
	<div class="article">
	<div class="rightbox box"><h2>作业</h2></div>
	<hr >
    <h2>第一周&nbsp;&nbsp;&nbsp;&nbsp;作业XXXX</h2>
	<div class="kuai31">
    <p class="head1">作业内容：</p>
    <div class="txt"><p class="txtcontent">这里作业内容啦啦啦啦啦啦啦啦啦啦啦这里作业内容啦啦啦啦啦啦啦啦啦啦啦这里作业内容啦啦啦啦啦啦啦啦啦啦啦这里作业内容啦啦啦啦啦啦啦啦啦啦啦这里作业内容啦啦啦啦啦啦啦啦啦啦啦这里作业内容啦啦啦啦啦啦啦啦啦啦啦这里作业内容啦啦啦啦啦啦啦啦啦啦啦这里作业内容啦啦啦啦啦啦啦啦啦啦啦这里作业内容啦啦啦啦啦啦啦啦啦啦啦这里作业内容啦啦啦啦啦啦啦啦啦啦啦这里作业内容啦啦啦啦啦啦啦啦啦啦啦这里作业内容啦啦啦啦啦啦啦啦啦啦啦这里作业内容啦啦啦啦啦啦啦啦这里作业内容啦</p></div>
    <textarea cols="132" rows="25"></textarea>
    <button> 上传附件 </button>
    <p class="instruction">支持txt、mp3、jpg、png、rar、zip、doc、ppt、xls、pdf等格式，文件最大50M。只支持上传一个附件，重复上传将会被覆盖。</p> 
    <input type="submit" value="提   交" text-align="right">
    </div>
</div>
</template>
<script>
	export default {
		name: 'work_detail'
	}
</script>
<style scoped>

	.article, .article div{
		display: block;
	}
    .article hr{
        width:5;
        color: #c2cacf;
    }
    .article button {
        width:100px;
        height: 30px;
        font-size: 15px;
    }
    .article input {
        float:right;
        width:100px;
        height:30px;
        background-color:#c2cacf;
        color: white;
        font-size: 20px; 
    }
    .article {
    	width: 960px;
        margin: auto;
    }
	.rightbox {
        width: 720px;
        margin-right: 10px;
     }
    .txtcontent{
        font-family: "宋体",sans-serif;
        font-size: 20px;
    }
    .instruction {
        font-family:'宋体';
        font-size: 10px;
        color: #c2cacf;
    }
    .article txtarea {
        margin-left: 5px;
        padding: 5px;
    }
    .head1 {
        font-family:'黑体';
        font-size: 25px;
    }
    .box {
        width: 208px;
        border: white 1px solid;
    }  
	.rightbox h2 {
		color: #c2cacf;
        font-family: "宋体",sans-serif;
        padding: 5px;
    }
	.kuai31 {
		border: 2px #c2cacf solid;
    	margin-top: 15px;
    	margin-right:15px;
    	width: 960px;
    	padding: 0px;
    	display: inline-block;
	}
</style>