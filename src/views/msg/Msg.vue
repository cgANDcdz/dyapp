<template>
    <div class="message">
        <MyHeader title="消息" 
                  rightTxt="发起聊天"
                  :hasRight="true" 
                   />
        <!-- 消息页面主要内容-->
        <div class="msg-wrap">
            <div class="msg-nav">
                <div class="msg-nav-item">
                    <div class="icon-box"><span>图标</span></div>
                    <p>粉丝</p>
                </div>
                <div class="msg-nav-item">
                   <div class="icon-box"><span>图标</span></div>
                    <p>赞</p>
                </div>
                <div class="msg-nav-item">
                    <div class="icon-box"><span>图标</span></div>
                    <p>@我的</p>
                </div>
                <div class="msg-nav-item">
                    <div class="icon-box"><span>图标</span></div>
                    <p>评论</p>
                </div>
            </div>
            <div class="msg-ads">
                <img src="../../static/img/ads.png" alt="">
            </div>
            <div class="down">
                <div>抖音好友圈</div>
                <div>
                    <button class="btn">下载</button>
                </div>
            </div>
            <div class="msg-list-box">
                <div class="msg-list">
                    <img src="../../static/img/jielun.jpg" alt="">
                    <div class="user-desc">
                        <div class="top top-msg">
                            <span>抖音小助手</span>
                            <span>12:23</span>
                        </div>
                        <div class="bottom">
                            <span>抖音安全课堂</span>
                            <span class="no-see"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
import MyHeader from '../../components/header/MyHeader.vue'
export default {
    data(){
        return{

        }
    },
    components:{
        MyHeader
    }
}
</script>



<style scoped>
.msg-wrap{
    padding:0 20px;
    color:#ffffff;
    background-color: #101821;
    height:-webkit-fill-available;  /** 高度自适应,但是没有效果??? */
}
.msg-nav{
    padding:20px 5px;
    display: flex;
    justify-content: space-between;
}
.msg-nav-item{
    text-align: center;
    width:60px;
}
.icon-box{
    width:60px;
    height:60px;
    background-color: #FF4074;
    border-radius: 5px;
    margin-bottom: 5px;
}
.msg-ads{
    padding:20px 0;
    border-top: 1px #242630 solid;
    border-bottom: 1px #242630 solid;
}
.msg-ads img{
    height:120px;
    width:100%;
}
.down{
    color:#cccccc;
    padding:20px 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px #242630 solid;
}
.down .btn{
    padding:4px 25px;
    border:none;
    background: #FE2C55;
    color:#ffffff;
    border-radius: 2px;
}
.msg-list-box{
    padding-top:30px;
}
.msg-list{
    display: flex;
    padding:10px 0;
}
.msg-list img{
    height:50px;
    width:50px;
    border-radius: 50%;
}
.user-desc{
    flex:1;       /**  ???? */
    margin-left:10px;
    display: flex;
    justify-content: space-between;
    line-height: 25px;
}
.top-msg{
    color:#666;
    align-items: center;
}
.no-see{
    width:8px;
    height:8px;
    border-radius: 50%;
    background-color: #FACE15;
}
</style>