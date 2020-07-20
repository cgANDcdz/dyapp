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
                <h2>请输入验证码</h2>
                <p>验证码已通过短信发送至 +86 1778392481</p>
            </div>
            <div class="sign-box">
                <div class="tel-num-box">
                    <input  @input="changeCode"
                            v-model="code"
                            class="tel-num-input"
                            type="text" 
                            placeholder="请输入验证码">
                </div>
                <div class="rest-time">
                    {{time}}
                </div>
            </div>
            <div class="check-code-box">
                <button :class="[btnBg?'active':'']"
                        :disabled="disabled"
                        class="load-btn">
                    <div v-if="loading" class="loads"></div>        
                    登录
                </button>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    data(){
        return{
            telArea:"+86",
            time:60,
            code:'',
            disabled:true,
            btnBg:false,
            loading:false
        }
    },
    created(){
        this.getCode();
    },
    methods:{
        getCode(){              //获取验证码的接口
            this.timer();//开始倒计时
            this.codes="1234";
        },
        changeCode(e){
            this.code=e.target.value;
            if(this.code==this.codes){
                this.disabled=false;
                this.btnBg=true;
                this.loading=true;
            }
            else{
                console.log("验证码出错!");
            }
        },
        timer(){             // 倒计时
            if(this.time>0){
                this.time--;
                setTimeout(this.timer,1000);
            }else{
                console.log("倒计时已经结束");
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
.desc p{
    color:#999999;
    font-size: 11px;
}


.sign-box{
    display: flex;
    margin-top:18px;
    align-items: center;
    background-color:#F9F9F9;
    justify-content: space-between;
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

.rest-time{
    margin-right:10px;
    color:#999;
    font-size: 11px;
}
.load-btn{
    display:flex;
    justify-content: center;
    align-items: center;
}
.loads{                     /**加载数据的圆圈 */
    width: 14px;
    height:14px;
    border:3px solid #ffffff;     /**圆圈厚度 */
    border-bottom: 3px #cccccc solid;
    border-radius: 50%;
    margin-right:5px;
    animation:load 1s infinite linear;
}
@keyframes load {
    from{
        transform: rotate(0deg);   /** 从0度开始旋转 */
    }
    to{
        transform: rotate(360deg);
    }
}

</style>
