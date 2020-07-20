<template>
    <div class="right-bar">
        <div class="rightbar-item">
            <div class="avatar-border">
                <img src="../../static/img/icg.jpg">
                <span class="iconfont icon-jia-tianchong"></span>
            </div>
        </div>
        <div class="item-icon">
            <span class="iconfont icon-aixin"></span>
            <p>18.0w</p>
        </div>
        <div class="item-icon">                  <!-- stop阻止事件向上冒泡 -->
            <span class="iconfont icon-pinglun" @click.stop="showCom($event)"></span>
            <p>1.4w</p>
        </div>
        <div class="item-icon">
            <span class="iconfont icon-fenxiang"></span>
            <p>1.6w</p>
        </div>
        <div class="rightbar-item">
            <div class="right-music">
                <img src="../../static/img/music.jpg">
            </div>
        </div>
    </div>

</template>

<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        showCom(e){
            e.preventDefault();
            this.$emit("changeCom");  //组件间通信,向父组件中的监听器通知这个事件
        }
    }
}
</script>

<style scoped>
.right-bar{
    width:56px;
    height:320px;
    /* border:1px red solid; */
    display:flex;
    flex-direction:column;     /**flex布局,从上到下 */
    align-items: center;
    justify-content: center;
    z-index:999;
}

.right-bar .rightbar-item{
    height: 60px;
    width:100%;
}
.right-bar .rightbar-item .avatar-border{
    height:42px;
    width:42px;
    margin:5px;
    border: 1px #ffffff solid;
    border-radius: 50%;
    position: relative;      /** 相对定位但是没有移动,只是为了方便子元素绝对定位 */
    text-align: center;      /*使内部内联元素水平居中 */
}

.avatar-border img{
    width:40px;
    height:40px;
    border-radius: 50%;
    padding-top:1px;
    padding-bottom: 1px;
}
.avatar-border .icon-jia-tianchong{
    color:#FE2C5A;
    position: absolute;
    top:34px;
    left:14px;

}
.right-bar  .item-icon{
    height:50px;
    text-align: center;
    margin-top:16px; 
    align-items: center;
}
.item-icon .iconfont{
    color:#ffffff;
    font-size:26px;
}
.item-icon p{
    color:#ffffff;
    margin:0px;
    font-size: 10px;
}

.right-bar .rightbar-item .right-music{
    height:40px;
    width:40px;
    margin:20px 7px 0px 7px;
    background:#2E2E2E;
    border-radius:50%;
    display: flex;                             /**flex布局,方便内部元素直接水平和垂直居中 */
    justify-content: center;
    align-items: center;
    animation: round 6s 0s linear infinite;    /**动画 --- 旋转 */
}

.right-music img{
    height:26px;
    width:26px;
    border-radius: 50%;
}

@keyframes round {
    0%{transform: rotate(0deg);}
    100%{transform: rotate(360deg);}
}
</style>