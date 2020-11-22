
<template>
    <div>
        <blogHeader></blogHeader>
        <Row class="row-style">
            <Col span="12" offset="6">
            <div class="upload-label">
                <label class="upload-label">
                    <div class="upload-label-div">
                        <div class="upload-label-div-div">+ 上传题图</div>
                    </div>
                </label>
            </div>
            </Col>
        </Row>
        <Row class="row-style"> 
            <Col span="12" offset="6">
            <Input v-model="value16" maxlength="10" show-word-limit placeholder="请输入标题" style="width: 100%;" size="large"/>
            </Col>
        </Row>
        <Row class="row-style">
            <Col span="12" offset="6">
            <TinymceEditor ref="editor" :value="msg" @onClick="onClick" ></TinymceEditor>
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
        padding-top:15%;
    }
    .upload-label-div-div{
        border-style:dotted;
        border-color: #a09494;
        border-width:medium;
        font-size:20px;
    }
</style>