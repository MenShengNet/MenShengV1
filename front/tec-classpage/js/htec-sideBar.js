/**
 * Created by adajoy on 2017/3/23.
 */
Vue.component('sidebar',{
	template:"<div id='sideBar'>" +
	"<img src='../images/lesson_pic.png' alt='lessonPic' width='145px' height='157px'/>" +
	"<ul><li class='announcement_tag'><a  href='htec-announcement.html' class='tag'>公告</a></li>" +
	"<li class='video_tag'><a href='htec-video.html' class='tag'>视频</a></li>" +
	"<li class='homework_tag'><a href='htec-homework.html' class='tag'>作业</a></li>" +
	"<li class='discuss_tag'><a href='htec-discussion.html' class='tag'>讨论区</a></li>" +
	"<li class='manage_tag'><a href='htec-manage.html' class='tag'>学生管理</a> </li>" +
	"<li class='settings_tag'><a href='htec-setting.html'class ='tag'>设置</a></li>" +
	"<li class='app'><img src='../images/2d_code.png' alt='2dCode' width='50px' height='50px'/>" + "<div class='download'><a href=''>下载App</a></div>" +
	"<div class='share'><a href=''>分享课程</a></div></li></ul></div>"
});
new Vue({
	el:'#wrap'
});
//file:///c:/Users/adajoy/Desktop/stu_lesson_page