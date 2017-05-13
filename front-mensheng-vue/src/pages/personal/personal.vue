<template>
  <div>
    <personalDetail></personalDetail>
    <div class="w1140 clearFix content">
      <sidebar></sidebar>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
  import personalDetail from '@/pages/personal/personal_detail'
  import sidebar from '@/pages/personal/sidebar'
  import follow from '@/pages/personal/follow'
  export default {
    name: 'personal',
    components:{
      personalDetail,
      sidebar
    }
  }
</script>
<style scoped>
  .w1140{
    margin: 15px auto 0;
  }
  .content{
    min-height: 500px;
  }
</style>