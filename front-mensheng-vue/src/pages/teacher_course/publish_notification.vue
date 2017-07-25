<template>
    <div class="container">
        <h1>公告内容</h1>
        <hr>

        <span class="font16">标题:</span>
        <el-input v-model="input" class="title" placeholder="请输入标题"></el-input>
    
        <div id="editorElem" style="text-align:left">
            <p>请输入内容....</p>
        </div>
        <span class="attachments">
    
            <span>上传附件：</span>
            <el-button type="primary" class="submit " @click="submit()">发布</el-button>
        </span>
    </div>
</template>

<script>
import WangEditor from 'wangeditor'
export default {
    data() {
        return {
            editorhtmlContent: ''
        }
    },
    methods: {
        getContent: function () {
            alert(this.editorContent)
        }
    },
    mounted() {
        var editor = new WangEditor('#editorElem')
        editor.customConfig.onchange = (html) => {
            this.editorhtmlContent = editor.txt.html();
        }
        editor.customConfig.menus = [
            'head',  // 标题
            'bold',  // 粗体
            'italic',  // 斜体
            'underline',  // 下划线
            'strikeThrough',  // 删除线
            'foreColor',  // 文字颜色
            'backColor',  // 背景颜色
            'link',  // 插入链接
            'list',  // 列表
            'justify',  // 对齐方式
            'quote',  // 引用
            'emoticon',  // 表情
            'image',  // 插入图片
            'table',  // 表格
            'code',  // 插入代码
            'undo',  // 撤销
            'redo'  // 重复    
        ]
        editor.create()
    },
    submit() {
        fileId = document.querySelector("#fileId").files;
        var formData = new FormData();
        for (var i = 0, file; file = oFiles[i]; i++) {
            // 文件名称，文件对象
            formData.append(file.name, file);
        }
        var _this = this;
        sendStr = {
            editorhtmlContent,
        }
        this.axios.post('http://localhost/mensheng/login.php?courseid=123456', )
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
    },

}
</script>


<style scoped>
* {
    box-sizing: content-box
}

.container {
    width: 940px;
    float: right;
    font-size: 16px;
}

hr {
    border: 1px solid #BDCCD4;
    width: 100%;
}

.title {
    width: 300px;
    margin: 10px;
    display: inline-block;
}

.attachments {
    display: block;
    padding-top: 10px;
    padding-bottom: 10px;
}

.formate {
    display: inline-block;
}

.submit {
    float: right;
    color: black;
}
</style>