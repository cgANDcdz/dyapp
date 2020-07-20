<template>
    <!-- 注册登录二合一 -->
    <div class="sign">
        <div class="sign-header">
            <router-link to="/index" tag="span" class="close-icon">x</router-link>
            <span>帮助</span>
        </div>
        <!-- 注册登录部分主体 -->
        <div class="sign-content">
            <div class="desc">
                <h2>登录后即可展示自己</h2>
                <p>登录即表明同意<a href="">抖音用户协议</a>和<a href="">隐私政策</a></p>
            </div>
            <div class="sign-box">
                <div class="area-select">
                    <select class="area-select-options" v-model="telArea">
                        <option>+86</option> <!-- selected设置了默认项，但是没有效果??-->
                        <option>+76</option> <!-- option不能设置value,否则与v-model不兼容-->
                        <option>+66</option>
                        <option>+56</option>
                        <option>+46</option>
                    </select>
                </div>
                <div class="tel-num-box">
                    <input  v-model="phone" 
                    @input="changeTel"
                        class="tel-num-input" 
                        type="text" 
                        placeholder="请输入手机号">
                </div>
            </div>
            <div class="not-sign">
                <p>未注册的手机号验证通过后将自动注册</p>
            </div>
            <div class="check-code-box">
                <button :class="[btnBg?'active':'']"
                        :disabled="disabled"
                        @click="getCheckCode">获取短信验证码</button>
            </div>
            <div class="other-login-type">
                <router-link tag="a" to="/tplogin">密码登录</router-link>
                <span @click="showLoginType">其他方式登录</span>
            </div>
            <transition name="up">
                <div class="mask" v-if="showMask"> <!-- 第三方登录,遮罩层-->
                    <div class="oauth">
                        <ul>
                            <li class="oauth-item">今日头条登录</li>
                            <li class="oauth-item">QQ登录</li>
                            <li class="oauth-item">微信登录</li>
                            <li class="oauth-item">微博登录</li>
                            <div class="partition"></div>
                            <li class="oauth-item" @click="hideLoginType">取消</li>
                        </ul>
                    </div>
                </div>
            </transition>
        </div>

    </div>
</template>

<script>
export default {
    data(){
        return{
            telArea:"+86",
            showMask:false,
            disabled:true,
            btnBg:false,      //用于选择按钮背景颜色
            phone:''
        }
    },
    methods:{
        getCheckCode(){
            this.$router.push("/checkCode");
        },
        showLoginType(){
              this.showMask=true;
        },
        hideLoginType(){
            this.showMask=false;
        },
        changeTel(e){
            this.phone=e.target.value;
            var regtel=/^1[345789]{1}\d{9}$/ ;       /**验证手机号的正则表达式 */
            if(regtel.test(this.phone)){
                this.btnBg=true;
                this.disabled=false;
            }
            else{
                this.btnBg=false;
                this.disabled=true;
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
    color:#333333;
}
.sign-header .close-icon{
    font-size:20px;
    color:#333333;
}
.sign-content{
    padding:10px 10px;
}
.desc h2{
    font-size: 16px;
    font-weight: bold;
    margin:6px 0;
}
.desc p{
    font-size:11px;
    color:#cccccc;
    margin:6px 0;
    /* font-weight: bold; */
}
.desc p a{
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
    color:#FFFFFF;
    background-color: #FE2C55;
}
.other-login-type{
    display:flex;
    justify-content: space-between;
}
.other-login-type a,span{
    color:#628DB8;
    text-decoration: none;
    font-size: 11px;

}

.mask{
    width:100%;
    height:100%;
    position: fixed;
    top:0;
    left:0;
    background:rgba(0,0,0,0.4);
}
.oauth{
    height:48%;
    width:100%;
    position: absolute;
    bottom: 0;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    background-color:#ffffff;
    text-align-last: center;
    /* list-style:none; */
}

.up-enter-active, .up-leave-active {       /** 第三方登录上滑的样式 */
    transition: all .5s;
}
.up-enter, .up-leave-to{
    opacity: 1;
    transform: translateY(100%);
}

.oauth ul{
    padding:0;
    margin:0;
    height:100%;
    width:100%;
}
.oauth ul li{       /** 去掉列表元素左边的小圆点 */
    margin:0px;
    padding:0px;
    list-style:none;
}
.oauth-item{
    border-bottom:1px #f5f5f5 solid;
    line-height:47px;
    text-align: center;
}
.partition{
    height:6px;
    width:100%;
    background-color:#ccc;
}
</style>
