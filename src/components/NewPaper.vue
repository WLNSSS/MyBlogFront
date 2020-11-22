
<template>
    <div>
        <blogHeader></blogHeader>
        <Row>
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
                data: [
                    {
                        title: 'This is title 1',
                        description: 'This is description, this is description, this is description.',
                        avatar: 'https://dev-file.iviewui.com/5wxHCQMUyrauMCGSVEYVxHR5JmvS7DpH/large',
                        content: 'This is the content, this is the content, this is the content, this is the content.',
                        publishTime:'2020-11-13'
                    },
                    {
                        title: 'This is title 2',
                        description: 'This is description, this is description, this is description.',
                        avatar: 'https://dev-file.iviewui.com/5wxHCQMUyrauMCGSVEYVxHR5JmvS7DpH/large',
                        content: 'This is the content, this is the content, this is the content, this is the content.',
                        publishTime:'2020-11-13'
                    },
                    {
                        title: 'This is title 3',
                        description: 'This is description, this is description, this is description.',
                        avatar: 'https://dev-file.iviewui.com/5wxHCQMUyrauMCGSVEYVxHR5JmvS7DpH/large',
                        content: 'This is the content, this is the content, this is the content, this is the content.',
                        publishTime:'2020-11-13'
                    }
                ],
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
</style>