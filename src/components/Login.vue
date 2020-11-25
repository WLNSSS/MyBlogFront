<template>
<div>
    <Row>
        <Col span="8" offset="8"> 
        <Card style="width:350px; margin-top:30%;margin-left:25%">
        <p slot="title" style="color:#2d8cf0; text-align:center;font-size:18px">
            <Icon type="logo-octocat" size="18" />
            Login
        </p>
         <div><Input v-model="account" placeholder="Enter your account..." style="width: 100%" /></div>
         <br/>
         <div style="top:10px"><Input v-model="password" placeholder="Enter your password..." style="width: 100%" /></div>
         <br/>
         <div style="top:10px">
         <Input v-model="validCode" placeholder="Enter your valid number..." style="width: 60%;margin-top:-25px" />
         <img id="img" alt="验证码" onclick="this.src='http://localhost:8080/createImageCode?d='+new Date()*1" :src="src" style="width: 38%;"/>
         </div>
         <br/>
         <div style="top:10px"><Button type="success" style="top:20px;width:100%" @click.native.prevent="login">Go!</Button></div>
         <br/>
         <p style="text-align:center;">OR</p>
         <br/>
         <div style="top:10px"><Button type="success" style="top:20px;width:100%" @click.native.prevent="goRegister">Go to register!</Button></div>
    </Card>
    </Col>
        <Col span="8"></Col>
    </Row>
    </div>
</template>

<script>
export default {
    name: 'test',
    data () {
        return {
                account: '',
                password:'',
                validCode:'',
                src:'http://localhost:8080/createImageCode'
            }
    },
    methods:{
        // test: function(){
        //     var map = {account:this.account,password:this.password};
        //     // fetch方式实现跨域
        //     fetch("/api/hello",{
        //     method:"POST",
        //     body:map,
        //     }).then(res => {
        //     console.log(res)
        //     })
        //             }
        login: function(){
        var that = this;
        this.$axios({
            headers: {
            'Access-Control-Allow-Origin':'*'
            },
            url: 'http://localhost:8080/login',
            method: 'post',
            responseType: 'json', // 默认的
            data: {
                account:this.account,
                password:this.password,
                validCode:this.validCode,
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
        goRegister:function(){
            var that = this;
            that.$router.push({path:'/Register'});
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>