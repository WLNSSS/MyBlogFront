
<template>
    <div>
        <blogHeader></blogHeader>
        <Row class="row-style">
            <Col span="12" offset="6">
            <div class="upload-label">
                    <div class="upload-label-div" v-if="uploadState">
                        <Upload
                            multiple
                            type="drag"
                            :format="['jpg','jpeg','png']"
                            :on-success="handleSuccess"
                            action="http://localhost:8080/upload">
                            <div style="padding: 20px 0">
                                <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
                                <p>上传题图</p>
                            </div>
                        </Upload>
                    </div>
                    <img :src="saveFileName" v-if="imgState" width="100%" />
            </div>
            </Col>
        </Row>
        <Row class="row-style"> 
            <Col span="12" offset="6">
            <Input v-model="title" maxlength="10" show-word-limit placeholder="请输入标题" style="width: 100%;" size="large"/>
            </Col>
        </Row>
        <Row class="row-style">
            <Col span="12" offset="6">
            <TinymceEditor ref="editor" v-model="paperText" @onClick="onClick" ></TinymceEditor>
            </Col>
        </Row>
        <Row class="row-style">
            <Col span="12" offset="6">
            <Button type="primary" style="width:100%;margin-top:10px" @click="savePaper">提交</Button>
            </Col>
        </Row>
    </div>
</template>

<script>
import blogHeader from "@/components/Header"
import TinymceEditor from '@/components/tinymceEditor'
    export default {
        components:{'blogHeader':blogHeader,'TinymceEditor':TinymceEditor},
        data(){
            return {
                userName:'wlnsss',
                value:'',
                title:'',
                paperText:'',
                uploadState:true,
                imgState:false,
                saveFileName:'',
                init: {
                    language_url: '/static/tinymce/langs/zh_CN.js',//语言包的路径
                    language: 'zh_CN',//语言
                    skin_url: '/static/tinymce/skins/lightgray',//skin路径
                    height: 300,//编辑器高度
                    branding: false,//是否禁用“Powered by TinyMCE”
                    menubar: false,//顶部菜单栏显示
                }
            }
        },
        methods:{
            verifyFile: (file) => {
                if (file == null) {
                    alert('请上传图片！');
                    return false;
                }
                let img_regexp = /^image\/\w+/g;
                if (!img_regexp.test(file.type)) {
                    alert('上传的不是图片，请重新选择！');
                    return false;
                }
                if (file.size > 5 * 1024 * 1024) {
                    alert('上传的图片大于5MB，请重新选择！');
                    return false;
                }
                return true;
            },
            handleSuccess:function(response, file, fileList){
                //这里返回保存的文件名
                    this.saveFileName = response;
                    this.imgState = true;
                    this.uploadState = false;
            },
            savePaper:function(){
                this.$axios({
                    headers: {
                    'Access-Control-Allow-Origin':'*'
                    },
                    url: 'http://localhost:8080/saveNewpaper',
                    method: 'post',
                    responseType: 'json', // 默认的
                    data: {
                        paperPicture:this.saveFileName,
                        paperTitle:this.title,
                        paperText:this.paperText,
                    }
                }).then(function (response) {
                    if(response.data.errorInfo != null){
                        var errorInfo = response.data.errorInfo;
                        that.$Notice.error({
                            title: '错误',
                            desc:  errorInfo
                        });
                    }else{
                        that.$router.push({path:'/BlogIndex'});
                    }
                }).catch(function (error) {
                    console.log(error);
                })
            },
            goUpload: () => {
                var that = this;
                let file = document.querySelector('input[type=file]').files[0];
                //if(!app.verifyFile(file)){
                //    return;
                //}

                let formData = new window.FormData();
                formData.append('file', file);
                axios({
                    method: "POST",
                    url: "/upload",
                    headers: {
                        'Content-Type': 'multipart/form-data' //注意这里
                    },
                    data: formData
                }).then((res) => {
                    //这里返回保存的文件名
                    that.saveFileName = res.data;
                    that.imgState = true;
                    that.uploadState = false;
                }).catch((err) => {
                    console.log(err)
                });
            }
        }
    }
</script>
<style scoped>
    .layout-logo{
        width: 50px;
        height: 30px;
        background: #a09494;
        border-radius: 3px;
        float: right;
        position: relative;
        top: 15px;
        /* right:30px; */
        /* float:right; */
        /* left: 25%; */
    }
    .notifications{
        left:10px;
        top:8px;
    }
    .layout-footer-center{
        text-align: center;
    }
    .div-person{
        margin-left:0px;
        float:right;
    }
    .icon-logo{
        top:8px;
    }
    .row-style{
        margin-top: 10px;
    }
    .upload-label{
        background-color: #dcdee2;
        height: 300px;
        text-align:center;
        width: 100%;
    }
    .upload-label-div{
        width:18%;
        margin-left:40%;
        padding-top:10%;
    }
    .upload-label-div-div{
        border-style:dotted;
        border-color: #a09494;
        border-width:medium;
        font-size:20px;
    }
</style>