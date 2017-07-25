<template>
  <div>
  <div v-for="item in information" class="u-clist f-bg f-cb f-pr" data-href="/course/JXUFE-1002027004" data-action="课程点击" data-label="1002027004_1002135003">        
    <div class="g-sd1">            
      <div class="u-img f-fl">
        <img v-bind:src="item.image" alt="轻松学统计" height="150px" width="265px">
      </div>        
    </div>        
      <div class="g-mn1">            
        <div class="g-mn1c">                
          <div class="cnt f-pr">                    
            <div class="t1 f-f0 f-cb ">                        
              <a href="http://www.icourse163.org/course/JXUFE-1002027004" target="_blank">                            
              <span class=" u-course-name f-thide">{{item.course}}</span>     </a>                                              
            </div>                    
            <div class="t2 f-fc3 f-nowrp f-f0">
                <a class="t21 f-fc9" href="/university/JXUFE" target="_blank">{{item.school}}</a>
                <a class="f-fc9" href="/u/mooc1475221727202" target="_blank">罗良清 </a>
                  <a class="f-fc9" href="/u/mooc1475549382839" target="_blank">李燕辉 </a>
                  <a class="f-fc9" href="/u/mooc1476054938999" target="_blank">财大李峰 </a>  
                  <a class="f-fc9" href="/u/mooc1476169664444" target="_blank">平卫英 </a>  
                  <a class="f-fc9" href="/u/mooc1476169674264" target="_blank">郭露 </a> 
                  <a class="f-fc9" href="/u/mooc1476347386049" target="_blank">李晶 </a>
            </div>                                        
            <a href="http://www.icourse163.org/course/JXUFE-1002027004" target="_blank">                        
              <span class="p5 brief f-ib f-f0 f-cb">{{item.intro}}</span>                    
            </a>                                        
            <div class="t2 f-fc3 f-nowrp f-f0 margin-top0">             
              <i class="iconfont icon-ren f-fc9"></i>
                <span class="hot">{{item.people}}人参加</span>
                <div class="over ">
                  <i class="iconfont icon-iconfontshijian"></i>
                  <span class="txt">进行至第{{item.progress}}周</span>
                </div>                                         
            </div>                
          </div>            
        </div>        
      </div>    
  </div>
  </div>
</template>
<script>
  export default{
    name: 'course_list',
    beforeCreate() {
    },
    data () {
      return {
        information:[
          {
            course:'轻松学统计',
            school:'江西财经大学',
            intro:'《轻松学统计》MOOC课程由江西财经大学统计学院《统计学》课程教学团队精心设计与制作，团队成员均有丰富的教学经验，其中李燕辉老师曾主持国家级精品视频公开课《爱上统计学》。此次，在罗良清教授的带领…',
            people:2061,
            progress:1,
            image:'http://imgsize.ph.126.net/?enlarge=true&imgurl=http://edu-image.nosdn.127.net/1BD72772FD2B7D08DD1817A37AA8E71E.JPG?imageView&thumbnail=426y240&quality=100_223x125x1x95.JPG?imageView&thumbnail=426y240&quality=100'
          },
          {
            course:'环境问题观察',
            school:'华东师范大学',
            intro:' 最通俗易懂的环境知识入门课； 最深入一线的环境问题观察课； 最有益身心的环境健康普及课； 最魔都特色的环境创新实习课； 让我们一起迈出去，用心观察； 走回来，凭智实论！ 用知识珍惜情怀，用行动走向…',
            people:1961,
            progress:1,
            image:'//imgsize.ph.126.net/?enlarge=true&imgurl=http://edu-image.nosdn.127.net/6D4D354D4FC1743A6120C4B50E278DF6.jpg?imageView&thumbnail=426y240&quality=100_223x125x1x95.jpg?imageView&thumbnail=426y240&quality=100'
          },
          {
            course:'轻松学统计',
            school:'江西财经大学',
            intro:'《轻松学统计》MOOC课程由江西财经大学统计学院《统计学》课程教学团队精心设计与制作，团队成员均有丰富的教学经验，其中李燕辉老师曾主持国家级精品视频公开课《爱上统计学》。此次，在罗良清教授的带领…',
            people:2061,
            progress:1,
            image:'http://imgsize.ph.126.net/?enlarge=true&imgurl=http://img1.ph.126.net/XtMbWU3qv-a8DKnn9GtUQQ==/6608769669887777323.png_223x125x1x95.png'
          },
          {
            course:'轻松学统计',
            school:'江西财经大学',
            intro:'《轻松学统计》MOOC课程由江西财经大学统计学院《统计学》课程教学团队精心设计与制作，团队成员均有丰富的教学经验，其中李燕辉老师曾主持国家级精品视频公开课《爱上统计学》。此次，在罗良清教授的带领…',
            people:2061,
            progress:1,
             image:'http://imgsize.ph.126.net/?enlarge=true&imgurl=http://edu-image.nosdn.127.net/D348F91DDDA57CBD1E371F1C7B99F888.jpg?imageView&thumbnail=426y240&quality=100_223x125x1x95.jpg?imageView&thumbnail=426y240&quality=100'
          },
          {
            course:'轻松学统计',
            school:'江西财经大学',
            intro:'《轻松学统计》MOOC课程由江西财经大学统计学院《统计学》课程教学团队精心设计与制作，团队成员均有丰富的教学经验，其中李燕辉老师曾主持国家级精品视频公开课《爱上统计学》。此次，在罗良清教授的带领…',
            people:2061,
            progress:1,
             image:'http://imgsize.ph.126.net/?enlarge=true&imgurl=http://edu-image.nosdn.127.net/B5A75AF378A002984E4BB708E16FB06E.jpg?imageView&thumbnail=426y240&quality=100_223x125x1x95.jpg?imageView&thumbnail=426y240&quality=100'
          }
        ]
      }
    }
  }
</script>
<style scoped>
  .u-clist{width: 1140px;margin:auto;}
  #g-container{min-height:100%;position:relative;}
  #g-body{padding-bottom:300px;}
  .g-flow-wide{width:1260px;margin:0 auto;}
  .f-cb:after
  {display:block;clear:both;visibility:hidden;height:0;overflow:hidden;content:".";}
  .f-cb{zoom:1;}
  .g-main-content{width:100%;}
  .f-f1{font-family:"Arial", "Hiragino Sans GB", "SimSun", \5b8b\4f53, "Georgia", "serif";}
  .m-result-view{margin-top:44px;width:930px;}
  .f-f0{font-family:"Arial", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica", "sans-serif";}
  .m-course-card-list{margin-top:30px;}
  .f-bg{background-color:#fff;box-shadow:0px 1px 2px #bbb;}
  .f-bg{border-top:1px solid #c7c7ce;*border-top:1px solid #c7c7ce;}
  .f-pr{position:relative;}
  .g-sd1{position:relative;float:left;width:225px;margin-right:-225px;}
  .u-mclist .g-sd1 .u-img{padding-left:9px;}
  .u-mclist .g-sd1 .u-img .taMark{bottom:0;right:0px;font-size:14px;padding:4px 12px;vertical-align:middle;cursor:default;}
  .u-mclist .g-sd1 .u-img .taMark.lector{background-color:#6CB4FB;}
  .u-mclist .g-sd1 .u-img .taMark.assist{background-color:#9CCC20;}
  .f-fl{float:left;}
  .g-mn1{float:right;width:100%;}
  .g-mn1c{margin-left:245px;}
  .t1 a{color:#333;}
  .f-f0 {
      font-family: "Arial","Hiragino Sans GB","Microsoft YaHei", \5fae\8f6f\96c5\9ed1, "Helvetica", "sans-serif";}
  .u-course-name{max-width:640px;display:inline-block;}
  .u-course-name:hover{color:#55b929 !important;}
  /*.u-course-tag:hover{opacity:1 !important;}.u-course-tag:hover .more-tag-info-hover{display:block;}*/
  .f-thide,.f-nowrp{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
  .t2{margin-top:10px;font-size:12px;line-height:15px;}
  .f-fc3{color:#333;}
  .f-fc9{color:#999;}
  a.f-fc0:hover,a:hover .f-fc0,a.f-fc3:hover,a:hover .f-fc3,a.f-fc6:hover,a:hover .f-fc6,a.f-fc9:hover,a:hover .f-fc9,a.f-fcf:hover,a:hover .f-fcf{color:#96D103;text-decoration:none;}
  .t21{margin-right:20px;}
  .p5{margin:15px 10px 20px 0;}
  .f-ib{display:inline-block;zoom:1;*display:inline;}
  .u-icon-person:before{content:"\e95d";}
  .u-icon-clock2:before{content:"\e95e";}




  .f-bg {
      background-color: #fff;
      -webkit-box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
      -moz-box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
      box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
  }
  html, body, h1, h2, h3, h4, h5, h6, div, dl, dt, dd, ul, ol, li, p, blockquote, pre, hr, figure, table, caption, th, td, form, fieldset, legend, input, button, textarea, menu {
      margin: 0;
      padding: 0;
      outline: none;
  }
  body {
      background: #BDCCD4;
      font-size: 12px;
  }
  body, textarea, input, button, select, keygen, legend {
      font: 12px/1.5 "Arial", "Hiragino Sans GB", "SimSun", "serif";
      color: #333;
      outline: 0;
      font-family: "Arial", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica", "sans-serif";
  }

  .u-clist{cursor:pointer;}
  .u-clist .cnt{height:150px;}
  .u-clist{margin-bottom:10px;height:150px;padding:10px;}
  .u-clist:hover{background-color:#BDCCD4;}
  .u-clist:hover .t1{color:#8bb721;}
  .u-clist .g-mn1c{margin-left:280px;}
  .u-clist .t1{margin-top:18px;line-height:1;font-size:16px;}
  .u-clist .t2{margin-top:25px;line-height:1.1;}
  .u-clist .t21{margin-right:20px;}
  .u-clist .over .clock,{font-size:14px;line-height:18px;margin-right:5px;}
  .u-clist .over .txt{vertical-align:1px;}.u-clist .over{color:#499E50;}
  .u-clist.hot{background:url('http://mc.stu.126.net/res/images/ui/courseList.png?15aaeac4b10032736068b48d6fdec250') no-repeat 0 -40px;padding:0 6px 0 20px;color:#999;font-size:12px;margin-right:20px;}
   .u-clist .p5{margin:15px 10px 20px 0;}
  .u-clist .brief{position:relative;text-align:left;color:#999;line-height:22px;height:44px;overflow:hidden;}
  .u-course-name{max-width:640px;display:inline-block;}
  .u-course-name:hover{color:#55b929 !important;}
  .u-clist{z-index:9;margin-bottom:0px;height:150px;padding:20px 0px 20px 0px;border-bottom:1px solid #e6e6e6;-webkit-box-shadow:0px 0px 0px transparent;-moz-box-shadow:0px 0px 0px transparent;box-shadow:0px 0px 0px transparent;}
  .u-clist:last-child{border-bottom:none;}
  .u-clist .t1{margin-top:0px;line-height:20px;font-size:16px;height:20px;overflow:hidden;}
  .u-clist .t1 a{color:#333;}
  .u-clist .brief{font-size:13px;color:#666;}
  .u-clist .brief:hover{color:#55b929;}
  .u-clist a:hover{color:#55b929;}
  .u-clist .t2{margin-top:10px;font-size:12px;line-height:15px;}
  .u-clist .hot{font-size:13px;line-height:15px;background:transparent !important;padding:0 0 0 9px;}
  .u-clist .txt{font-size:13px;}
  .u-clist .clock{margin-right:9px !important;}
  .u-clist .over{margin-right:45px;margin-top:0px;display:inline-block;color:#55b929;background:transparent !important;font-size:14px;line-height:15px;}
  .u-clist .u-img{overflow:hidden;}
  .u-clist .u-img img{-moz-transition:all 0.5s ease-in-out 0s;-o-transition:all 0.5s ease-in-out 0s;-webkit-transition:all 0.5s ease-in-out 0s;transition:all 0.5s ease-in-out 0s;}
  .u-clist:hover .t1{color:#000;}
  .u-clist:hover .u-img img{-webkit-transform:scale(1.1);-moz-transform:scale(1.1);-ms-transform:scale(1.1);-o-transform:scale(1.1);transform:scale(1.1);}
  a{color:#333;}
</style>