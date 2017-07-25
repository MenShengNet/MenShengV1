<template>
<div>
  <swiper :options="swiperOption" ref="mySwiper">
    <swiper-slide v-for="slider in sliders" :key="slider.id" v-bind:style="{backgroundImage: 'url(' + slider.background + ')'}">
    <router-link to="/">
      <div class="container">     
          <img v-bind:src=slider.img>
          <div class="txt">
            <h2 class="font24">{{ slider.title }}</h2>
            <h3 class="font18">讲师：{{ slider.teacher }}</h3>
            <p class="font16">{{ slider.content1 }}</p>
            <p>{{ slider.content2 }}</p>
            <p>{{ slider.content3 }}</p>
          </div>          
          <div class="link">
            <a>查看详情</a>            
          </div>
      </div>
    </router-link>
     
  </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
    <div class="swiper-scrollbar"   slot="scrollbar"></div>
  </swiper>
</div>
</template>

<script>
  export default {
    name: 'carrousel',
    data () {
      return {
        sliders: [
            { 'background': require('./images/pic_1.png'), 'img': require('./images/UI-6.jpg'), 'title': '把产品用正确的方式卖出去', 'teacher': '阿斯顿', 'content1': '阿斯蒂芬而额第三方阿斯蒂芬阿道夫啊额发我焊接后规划规划就看过就开始绿山咖啡还上课浪费拉上看到合肥可视对讲福克斯三六九等看风使舵讲课费几十块就福克斯交罚款几十块斯洛伐克华东师大教父', 'content2': '阿斯蒂芬而额第三方阿斯蒂芬阿道夫啊额发我焊接后规划规划', 'content3': '阿斯蒂芬而额第三方阿斯蒂芬阿道夫啊额发我焊接后规划规划' },
            {'background': require('./images/pic_2.png'), 'img': require('./images/UI-6.jpg'), 'title': '给哈佛好事见识过发电机黄金时代', 'teacher': '三顿饭', 'content1': '啥打工皇帝撒规范化教父共射级东方红及时看到教父就开始交罚款大环境是开户费和几十块画法几何闪电发货', 'content2': '阿斯蒂芬而额第三方阿斯蒂芬阿道夫啊额发我焊接后规划规划', 'content3': '阿斯蒂芬而额第三方阿斯蒂芬阿道夫啊额发我焊接后规划规划'},
            {'background': require('./images/pic_3.png'), 'img': require('./images/UI-6.jpg'), 'title': '发红色经典咖啡壶', 'teacher': '锁定', 'content1': '健康长寿记事本的捐款黄金时代好客山东进口红酒是肯定会vjksjjvdsjk就开始极度恐慌vjs', 'content2': '阿斯蒂芬而额第三方阿斯蒂芬阿道夫啊额发我焊接后规划规划', 'content3': '阿斯蒂芬而额第三方阿斯蒂芬阿道夫啊额发我焊接后规划规划'}
        ],
        swiperOption: {
          loop: true,
          notNextTick: true,
          speed: 300,
          autoplay: 3000,
          autoplayDisableOnInteraction: false,
          direction: 'horizontal',
          grabCursor: true,
          setWrapperSize: true,
          autoHeight: false,
          height: 270,
          pagination: '.swiper-pagination',
          paginationClickable: true,
          prevButton: '.swiper-button-prev',
          nextButton: '.swiper-button-next',
          // scrollbar: '.swiper-scrollbar',
          scrollbarHide: true,
          mousewheelControl: false,
          observeParents: true,
          debugger: true,
          onTransitionStart (swiper) {
            console.log(swiper)
          }
        }
      }
    },
    computed: {
      swiper () {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted () {
      console.log('this is current swiper instance object', this.swiper)
      this.swiper.slideTo(1, 1000, false)
    }
  }
</script>


<style type="text/css" scoped>
*{box-sizing: content-box}
  .container{
    position: relative;
    top: 12px;
    margin: auto;
    width: 1000px;
    height: 252px;
    border: 2px solid #ffffff;
  }
  .swiper-slide{ 
    height: 270px;
    width: 1140px; 
    background: center/cover;
  }
  .swiper-slide img{
    float: left;
    width:405px;
    height:227px;
    position: relative;
    top: 12px;
    left: 8px;
  }
  .txt{
    margin: 12px auto;
    width: 420px;
    height: 227px;
    overflow: hidden;
    float: left;
    position: relative;
    left: 30px;
    color: #000000;
    text-align: left;
  }
  .link{
    position: relative;
    top: 200px;
    right: -20px;
    float: right;
    width: 150px;
    height: 40px;
  }
  .link i{
  }
  .link a{
    text-align: center;
    line-height: 40px;
    text-decoration: none;
    color: #000000;
  }
  .swiper-container{
    height: 270px;
    width: 1140px;
  }
</style>
