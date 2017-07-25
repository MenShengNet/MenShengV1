<template>
    <div class="container">
        <div id="sticktop" v-if="isStickTop">
            <h1>置顶通知</h1>
            <hr>
            <p>
                {{stickTop.content}}
                <br/>
                <span class="attachments">
                    <el-button  size="large" v-if="stickTop.download"> 
                        <a v-bind:href="stickTop.download">下载附件</a>
                    </el-button>
                    <span class="time">{{stickTop.time}}</span>
                </span>
            </p>
            <hr>
        </div>
        <ul>
            <li v-for="item in notice">
                {{item.content}}
                <span class="attachments">
                    <el-button  size="large" v-if="item.download">
                    <a v-bind:href="stickTop.download">下载附件</a>
                    </el-button>
                    <span class="time">{{item.time}}</span>
                </span>
                <hr>
            </li>
        </ul>
    
    </div>
</template>

<script>
export default {
    name: 'notifications',
    data() {
        return {
            isStickTop: true,
            stickTop:
            {
                content: '《轻松学统计》MOOC课程由江西财经大学统计学院《统计学》课程教学团队精心设计与制作，团队成员均有丰富的教学经验，其中李燕辉老师曾主持国家级精品视频公开课《爱上统计学》。此次，在罗良清教授的'
                + '《轻松学统计》MOOC课程由江西财经大学统计学院《统计学》课程教学团队精心设计与制作，团队成员均有丰富的教学经验，其中李燕辉老师曾主持国家级精品视频公开课《爱上统计学》。此次，在罗良清教授的'
                + '《轻松学统计》MOOC课程由江西财经大学统计学院《统计学》课程教学团队精心设计与制作，团队成员均有丰富的教学经验，其中李燕辉老师曾主持国家级精品视频公开课《爱上统计学》。此次，在罗良清教授的'
                + '《轻松学统计》MOOC课程由江西财经大学统计学院《统计学》课程教学团队精心设计与制作，团队成员均有丰'
                + '富《轻松学统计》MOOC课程由江西财经大学统计学院《统计学》课程教学团队精心设计与制作，团队成员均有丰富的教学经验，其中李燕辉老师曾主持国家级精品视频公开课《爱上统计学》。此次，在罗良清教授的'
                + '的教学经验，其中李燕辉老师曾主持国家级精品视频公开课《爱上统计学》。此次，在罗良清教授的'
                , time: '2017年7月21日19:28'
                , download: 'http://www.baidu.com'
            }
            , notice: [
                {
                    content: '《轻松学统计》MOOC课程由江西财经大学统计学院《统计学》课程教学团队精心设计与制作，团队成员均有丰富的教学经验，其中李燕辉老师曾主持国家级精品视频公开课《爱上统计学》。此次，在罗良清教授的'
                    , time: '2017年7月21日19:28'
                    , download: '',
                },
                {
                    content: '《轻松学统计》MOOC课程由江西财经大学统计学院《统计学》课程教学团队精心设计与制作，团队成员均有丰富的教学经验，其中李燕辉老师曾主持国家级精品视频公开课《爱上统计学》。此次，在罗良清教授的'
                    , time: '2017年7月21日19:28'
                    , download: 'hterefafdsgase'
                }
            ]
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

a{
    color: black;
}

.container {
    width: 940px;
    float: right;
    /* border: solid #beccd5 2px; */
}

#sticktop {
    width: 100%;
    height: auto;
}

#sticktop p {
    margin-top: 20px;
    line-height: 25px;
    font-size: 16px;
}


hr {
    border: 1px solid #BDCCD4;
    width: 100%;
}

ul li {
    margin: 10px 0;
    line-height: 25px;
    font-size: 16px;
}

.attachments {
    display: block;
    padding-top: 10px;
    padding-bottom: 10px;
}


.time {
    float: right;
    padding-right: 10px;
    font-size: 14px;
    padding-top: 10px;
    padding-bottom: 10px;
}
</style>




