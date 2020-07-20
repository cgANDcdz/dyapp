<!-- 由原来的登陆注册页面修改而来,此处css类选择器名称不具代表性-->
<template>
    <!-- 注册登录二合一 -->
    <div class="sign">
        <div class="sign-header">
            <router-link to="/sign" tag="span" class="close-icon">&lt;</router-link>
            <span>帮助</span>
        </div>
        <!-- 注册登录部分主体 -->
        <div class="sign-content">
            <div class="desc">
                <h2>手机号密码登录</h2>
            </div>
            <div class="sign-box">
                <div class="area-select">
                    <select class="area-select-options" v-model="telArea">
                        <option>+86</option> <!-- selected设置了默认项，但是没有效果??-->
                        <option>+76</option>
                        <option>+66</option>
                        <option>+56</option>
                        <option>+46</option>
                    </select>
                </div>
                <div class="tel-num-box">
                    <input  v-model="phone"
                            @keyup="loginAction"  
                            class="tel-num-input" 
                            type="text" 
                            placeholder="请输入手机号">
                </div>
            </div>
            <div class="sign-box">
                <div class="tel-num-box">
                    <input  v-model="password"
                            @keyup="loginAction"  
                            class="tel-num-input" 
                            type="password" 
                            placeholder="请输入密码">
                </div>
            </div>
            <div class="not-sign">
                    <p>登录即表明同意<a href="">用户协议</a>和<a href="">隐私政策</a></p>
            </div>
            <div class="check-code-box">
                <button :class="[btnBg?'active':'']"
                        :disabled="disabled"
                        @click="loginAction">
                    登录
                </button>
            </div>
            <div class="other-login-type">
                <p>忘记了?<a href=""> 找回密码</a></p>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    data(){
        return{
            telArea:"+86",
            phone:'',
            password:'',
            disabled:true,
            btnBg:false
        }
    },
    methods:{
        loginAction(){
            var regtel=/^1[345789]{1}\d{9}$/ ;  //验证手机号
            if(this.phone==""){
                console.log("手机号不能为空!");
            }else if(!regtel.test(this.phone)){
                console.log("请填写正确的手机号");
            }else if(this.password==""){
                console.log("密码不能为空");
            }else{
                this.disabled=false;
                this.btnBg=true;
                //验证通过,请求登录接口
                /**** ...... 待完成    */
            }
        }
    }
}
</script>

<style scoped>
.sign{
    padding:15px;
}
.sign-header{
    display:flex;
    justify-content: space-between;
    align-items: center;
    margin-top:10px;
}
.sign-header span{
    font-size: 15px;
    text-align: center;
    margin-bottom: 3px;
}
.sign-header .close-icon{
    font-size:20px;
}
.sign-content{
    padding:10px 10px;
}
.desc h2{
    font-size: 16px;
    font-weight: bold;
    margin:6px 0;
}
.other-login-type p{
    font-size:11px;
    color:#cccccc;
    margin:6px 0;
    /* font-weight: bold; */
}
.not-sign p a{
    color: #628DB8;
    font-size:11px;
    padding:0 2px;
    text-decoration: none;

}
.sign-box{
    display: flex;
    margin-top:18px;
    align-items: center;
    background-color:#F9F9F9;
}
.area-select-options{
    background-color:#F9F9F9;
    height:36px;
    font-weight: bold;
    margin-left:5px;
    border:none;
    outline:none;
}
.tel-num-input{
    height:36px;
    background-color: #F9F9F9;
    border:none;
    width:90%;
    margin-right:10px;
    outline:none;
}
input{
    caret-color: #FE2C55;    /**输入框贯标颜色 */
}
input::-webkit-input-placeholder{
    color:#cccccc;
}
.not-sign p{
    color: #cccccc;
    font-size:11px;
    margin-top:10px;
}
.check-code-box{
    width:100%;
    height:36px;
     margin:10px 0;
}
.check-code-box button{
    width:100%;
    height:100%;
    border:none;
    /* color:#F9F9F9; */
    background-color: #C0C0C0;
    color:#FFFFFF;
    outline:none;
}
.check-code-box .active{
    color:#ffffff;
    background-color:#FE2C55;
}
.other-login-type{
    display:flex;
    justify-content: space-between;
}
.other-login-type a{
    color:#628DB8;
    text-decoration: none;
    font-size: 11px;

}
</style>
