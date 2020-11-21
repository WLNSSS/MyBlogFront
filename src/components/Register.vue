<template>
<div>
    <Row>
        <Col span="8" offset="8"> 
        <Card style="width:350px; margin-top:30%;margin-left:25%">
        <p slot="title" style="color:#ffb6c1; text-align:center;font-size:18px">
            <Icon type="logo-octocat" size="18" />
            Register
        </p>
        <div>
            <Tooltip :content='userNameDemand' placement="right-start" theme="light" style="width:100%">
            <Input v-model="userName" placeholder="Enter your userName..." style="width: 100%" />
            </Tooltip></div>
         <br/>
         <div>
             <Tooltip :content='accountDemand' placement="right-start" theme="light" style="width:100%">
             <Input v-model="account" placeholder="Enter your account..." style="width: 100%" />
             </Tooltip>
             </div>
         <br/>
         <div style="top:10px">
             <Tooltip :content='passwordDemand' placement="right-start" theme="light" style="width:100%" >
             <Input type="password" v-model="password" placeholder="Enter your password..." style="width: 100%" />
             </Tooltip>
             </div>
         <br/>
         <div style="top:10px"><Input v-model="moblieNumber" placeholder="Enter your moblie number..." style="width: 100%" /></div>
         <br/>
         <div style="top:10px"><Input v-model="messageNumber" placeholder="Enter your valid number..." style="width: 60%" />
         <Button style="width: 38%" :disabled="getMessageDisabled" @click.native.prevent="getMessage">{{getMessageButtonText}}</Button></div>
         <br/>
         
         <div style="top:10px"><Button type="success" style="top:20px;width:100%" @click.native.prevent="createUser">Go!</Button></div>
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
                userName:'',
                userNameDemand:'输入字符，3-10个字符',
                account: '',
                accountDemand:'输入任意数字，5-10个数字',
                password:'',
                passwordDemand:'输入任意数字+字母，应为5-10位',
                moblieNumber:'',
                messageNumber:'',
                validCode:'',
                src:'',
                countdown:60,
                getMessageDisabled:false,
                getMessageButtonText:'Get message',
                uuid:''
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
        getMessage: function(){
            if(!this.isPhoneNum(this.moblieNumber)){
                this.$Notice.error({
                    title: '错误',
                    desc:  '手机号有误'
                });
            }else{
                this.setTime();  
                this.uuid = this.createUuid();
                this.$axios({
                    url: 'http://localhost:8080/sms',
                    method: 'post',
                    responseType: 'json', // 默认的
                    data: {
                        moblieNumber:this.moblieNumber,
                        uuid:this.uuid
                    }
                }).then(function (response) {
                    console.log(response);
                    console.log(response.data);
                    // that.$router.push({path:'/BlogIndex'});
                }).catch(function (error) {
                    console.log(error);
                })
            }
        },
        setTime: function() {
            if (this.countdown == 0) {
                this.getMessageDisabled = false;
                this.getMessageButtonText = 'Get Message';
                this.countdown = 60;//60秒过后button上的文字初始化,计时器初始化;
                return;
            } else {
                this.getMessageDisabled = true;
                this.getMessageButtonText = "("+this.countdown+"s)后重新发送" ;
                this.countdown--;
            }
            var that = this;
            setTimeout(function() { that.setTime() },1000) //每1000毫秒执行一次
        },
        //校验手机号是否合法
        isPhoneNum: function(phonenum){
            var reg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
            if(!reg.test(phonenum)){
                return false;
            }else{
                return true;
            }
        },
        createUuid: function() {
            var s = [];
            var hexDigits = "0123456789abcdef";
            for (var i = 0; i < 36; i++) {
                s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
            }
            s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
            s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
            s[8] = s[13] = s[18] = s[23] = "-";

            var uuid = s.join("");
            return uuid;
        },
        createUser: function(){
            var errorMessage = this.vaildInput();
            var that = this;
            if(errorMessage.length === 0){
                this.$axios({
                    url: 'http://localhost:8080/registerUser',
                    method: 'post',
                    responseType: 'json', // 默认的
                    data: {
                        moblieNumber:this.moblieNumber,
                        uuid:this.uuid,
                        userName:this.userName,
                        account:this.account,
                        password:this.password,
                        messageNumber:this.messageNumber
                    }
                }).then(function (response) {
                    console.log(response.data);
                    
                    if(response.data.errorInfo.length == 0){
                        var errorInfo = response.data.errorInfo;
                        for (var i = 0; i < errorInfo.length; i++) {
                            that.$Notice.error({
                                title: '错误',
                                desc:  errorInfo[i]
                            });
                        }
                    }else{
                        that.$router.push({path:'/BlogIndex'});
                    }
                }).catch(function (error) {
                    that.$Notice.error({
                        title: '错误',
                        desc:  '系统出错！请重试！联系管理员'
                    });
                })
            }else{
                for(var i = 0;i < errorMessage.length;i++){
                    this.$Notice.error({
                        title: '错误',
                        desc:  errorMessage[i]
                    });
                }
            }
        },
        vaildInput: function(){
            var errorMessage = new Array();
            var arrIndex = 0;
            if(this.userName.length > 10 || this.userName.length < 3){
                errorMessage[arrIndex] = '用户名应为3-10个字符！';
                arrIndex++;
            }
            if(this.userName == ""){
                errorMessage[arrIndex] = "用户名不能为空！";
                arrIndex++;
            }
            if(this.account == ""){
                errorMessage[arrIndex] = "账号不能为空!";
                arrIndex++;
            }
            if(this.account.length > 10 || this.account.length < 5){
                errorMessage[arrIndex] = "账号应为5-10个数字！";
                arrIndex++;
            }
            var reg = /^[0-9]*$/;
            if(!reg.test(this.account)){
                errorMessage[arrIndex] = "账号非法！";
                arrIndex++;
            }
            if(this.password == ""){
                errorMessage[arrIndex] = "密码不能为空!";
                arrIndex++;
            }
            if(this.password.length > 10 || this.password.length < 5){
                errorMessage[arrIndex] = "密码应为5-10个字母或数字！";
                arrIndex++;
            }
            var reg = /^[A-Za-z0-9]+$/;
            if(!reg.test(this.password)){
                errorMessage[arrIndex] = "密码非法！";
                arrIndex++;
            }
            if(!this.isPhoneNum(this.moblieNumber)){
                errorMessage[arrIndex] = "手机号非法！";
                arrIndex++;
            }
            return errorMessage;
        }

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>