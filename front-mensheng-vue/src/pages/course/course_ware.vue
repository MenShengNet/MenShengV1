<template>
    <div class="ware">
      <div class="ware-header"></div>
      <ul >
        <div class="nav-item" v-for="item in ul" @click="show(item)">
          <div class="item-head"><i class="iconfont" :class="[item.active ? top:bottom]"></i>  <span>{{ item.week}}</span></div>
          <div class="item-child" v-for="it in item.li" v-show="item.show">
            {{ it }}
          </div>
        </div>
        
      </ul>
    </div>
</template>
<script>
//import Vue from 'vue'
//import ElementUI from 'element-ui'
//mport 'element-ui/lib/theme-default/index.css'

//Vue.use(ElementUI)
  export default {
    data() {
      return {
        top: 'icon-shangjiantou',
        bottom: 'icon-xiajiantou',

        ul:[
          {
            active: true,
            week: 'no.1',
            li:[1,2,3,4],
            show: false
          },
          {
            active: false,
            week: 'no.2'
          },
          {
            active: false,
            week: 'no.3'
          }
        ]
      };
    },
    methods: {
      show: function (item) {
        item.active = !item.active;
        item.show = !item.show;
        
      }
    }
  }
</script>

<style scoped>
  .ware {
    width: 954px;
    margin: 0 auto;
  }

  .ware .ware-header {
    height: 40px;
    border-bottom: 3px solid #bccfd6;
  }

  .ware ul {
    width: 954px;
    margin-top: 10px;
  }

  .ware ul .nav-item .item-head {
    height: 43px;
    line-height: 43px;
    padding-left: 10px;
    background-color: #bccfd6;
    cursor: pointer;
    color: #fff;
  }
  .ware ul .nav-item .item-child {
    height: 40px;
    border-bottom: 2px solid #bccfd6;
    margin-bottom: 3px;
  }

  .ware ul .nav-item {
    overflow: hidden;
  }



</style>