<template>
  <div class="tinymce-editor">
    <editor id="tinymce" v-model="myValue" :init="init" @onClick="onClick"></editor>
  </div>
</template>

<script>
import tinymce from 'tinymce/tinymce';
import Editor from '@tinymce/tinymce-vue';
import 'tinymce/themes/silver/theme';
import 'tinymce/icons/default/icons';
import 'tinymce/plugins/image';
import 'tinymce/plugins/media';// 插入视频插件
import 'tinymce/plugins/table';// 插入表格插件
import 'tinymce/plugins/lists';// 列表插件
import 'tinymce/plugins/wordcount';// 字数统计插件
export default {
    name:'tinymceEditor',
    components: { Editor },
    props: {
        value: {
            type: String,
            default: ''
        },
        // 基本路径，默认为空根目录，如果你的项目发布后的地址为目录形式，
        // 即abc.com/tinymce，baseUrl需要配置成tinymce，不然发布后资源会找不到
        baseUrl: {
            type: String,
            default: ''
        },
        disabled: {
            type: Boolean,
            default: false
        },
        plugins: {
            type: [String, Array],
            default: 'lists image media table wordcount'
        },
        toolbar: {
            type: [String, Array],
            default: 'undo redo |  formatselect | bold italic forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | lists image media table | removeformat'
        }
    },
    data() {
        return {
            //初始化配置
            init: {
                language_url: '/static/tinymce/langs/zh_CN.js',
                language: 'zh_CN',
                skin_url: '/static/tinymce/skins/ui/oxide', // skin路径
                height: 600, // 编辑器高度
                branding: false, // 是否禁用“Powered by TinyMCE”
                menubar: true, // 顶部菜单栏显示
                plugins: this.plugins,
                toolbar: this.toolbar,
                //此处为图片上传处理函数，这个直接用了base64的图片形式上传图片，
                //如需ajax上传可参考https://www.tiny.cloud/docs/configure/file-image-upload/#images_upload_handler
                // images_upload_handler: (blobInfo, success) => {
                //     const img = 'data:image/jpeg;base64,' + blobInfo.base64();
                //     success(img);
                // }
            },
            myValue: this.value
        };
    },
    mounted() {
        tinymce.init({});
    },
    methods: {
    //添加相关的事件，可用的事件参照文档=> https://github.com/tinymce/tinymce-vue => All available events
    //需要什么事件可以自己增加
        onClick(e) {
            this.$emit('onClick', e, tinymce);
        },
        //可以添加一些自己的自定义事件，如清空内容
        clear() {
            this.myValue = '';
        }
    },
    watch: {
        value(newValue) {
            this.myValue = newValue;
        },
        myValue(newValue) {
            this.$emit('input', newValue);
        }
    }
};
</script>
