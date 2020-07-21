<template>
    <div class="edit">
        <!-- 顶部组件,后面几个是传递的参数 -->
        <MyHeader   title="编辑资料"   
                    rightTxt="" 
                    :hasRight='false'
                    :hasLeft='true'
                    @changeBack="toBack" />
        <!-- 内容 -->
        <div class="edit-wrap">
            <div class="ava-box">
                <div class="avatar">
                    <img src="../../static/img/icg.jpg" alt="">
                    <span class="iconfont icon-xiangji"></span>
                    <input type="file">
                </div>
                <p>点击更换头像</p>
            </div>
            <div class="edit-box">
                <div class="edit-item">
                    <span class="label">名字</span>
                    <span>icg<span class="ret-icon">></span></span>
                </div>
                <div class="edit-item">
                    <span class="label">抖音号</span>
                    <span>1234567<span class="ret-icon">></span></span>
                </div>
                <div class="edit-item">
                    <span class="label">简介</span>
                    <span>越努力越幸运<span class="ret-icon">></span></span>
                </div>
                <div class="edit-item">
                    <span class="label">学校</span>
                    <span>点击设置<span class="ret-icon">></span></span>
                </div>
                <div class="edit-item">
                    <span class="label">性别</span>
                    <span>女<span class="ret-icon">></span></span>
                </div>
                <div class="edit-item">
                    <span class="label">生日</span>
                    <span>1988<span class="ret-icon">></span></span>
                </div>
                <div class="edit-item">
                    <span class="label">地区</span>
                    <span>中国富垃圾场<span class="ret-icon">></span></span>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
import MyHeader from "../../components/header/MyHeader.vue"
export default{
    data(){
        return{

        }
    },
    methods:{
        toBack(){
            this.$router.push("/me");
        }
    },
    components:{
        MyHeader
    }
}
</script>

<style scoped>
.edit{
    background-color:#101821;
}
.edit-wrap{
    padding:0 10px;
    box-sizing:border-box;
}
.ava-box{
    color:#cccccc;
    text-align: center;
    padding:20px;

}
.avatar{
    position: relative;
}
.avatar img{
    height:100px;
    width:100px;
    border-radius: 50%;
    margin-bottom:16px;
    opacity: 0.5;
}
.avatar .iconfont{
    position: absolute;
    left:50%;
    top:50%;
    font-size:26px;
    color:#ffffff;
    transform: translate(-50%,-50%);
}
.avatar input{
    position: absolute;
    left:50%;
    top:40%;
    width:50%;
    transform: translate(-50%,-50%);
    /* opacity: 0; */   /**相机图标和输入框重合后需要隐藏输入框 */
}
.edit-box{
    border-top:1px #292831 solid;
    color:#cccccc;
}
.edit-item{
    display: flex;
    justify-content: space-between;
    line-height: 60px;
}
.edit-item label{
    color:#ffffff;
}
.ret-icon{
    margin-left:10px;
}
</style>