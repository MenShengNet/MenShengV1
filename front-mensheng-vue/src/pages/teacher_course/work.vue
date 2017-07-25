<template>
    <div class="container">
        <ware></ware>
    </div>
</template>
<script>
import ware from '@/pages/course/course_ware'

export default {
    name: 'notifications',
    components : {ware},
    data() {
      return {
        activeName: '1'
      }
    },
    beforeCreate() {
        var _this = this;
        this.axios.get('http://localhost/mensheng/login.php?courseid=123456')
            .then(function (response) {
                console.log(response);
                if (response.data.state == true) {
                    _this.stick_top = response.data.stick_top;
                    _this.notice = response.data.notic;
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}
</script>

<style scoped>
* {
    box-sizing: content-box
}

.container {
    width: 940px;
    float: right;
    /* border: solid #beccd5 2px; */
}


.collapse{
    border: none;
    font-size: large;
}

.collapse-item {
    padding-top: 20px;
    font-size: Extra large;
}

</style>




