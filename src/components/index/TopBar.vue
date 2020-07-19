<template>
    <div class="top-bar">
        <div class="left">
            <span class="iconfont icon-live"></span>
        </div>
        <div class="middle">
            <div class="item" @click="changeTop(0)"><span :class="topIndex==0?'active':''">同城</span></div>
            <div class="item" @click="changeTop(1)"><span :class="topIndex==1?'active':''">关注</span></div>
            <div class="item" @click="changeTop(2)"><span :class="topIndex==2?'active':''"> 推荐</span></div>
        </div>
        <div class="right">
            <span class="iconfont icon-sousuo"></span>
        </div>
    </div>
</template>

<script>
export default{
    name:"TopBar",
    data(){
        return{
            topIndex:2
        }
    },
    methods:{
        changeTop(index){
            this.topIndex=index
        }
    }
}
</script>

<style scoped>
    .top-bar{
        width:100%;
        height:50px;
        font-size: 18px;
        color:#cccccc;
        padding:10px;
        display:flex;               /** flex布局 */
        box-sizing: border-box;     /**???? */
        position:fixed;
        top:0px;
        left:0px;
        /* background-color:#000000; */
        z-index: 999;

    }
    .left{
        width:20%;
    }
    .right{
        width:20%;
        text-align:right;         /* 使字体图标右对齐 */
    }
    .iconfont{
        font-size: 24px;
    }
    .middle{
        width:60%;
        display:flex;
        justify-items: center;
    }
    .middle .item{
        flex: 1;
        text-align: center;
    }
    .middle .item span{
        padding:10px 0px 1px 0px;           /*上下内边距; 1、3   2、4成对 */
    }
    .middle .item .active{
        color:#ffffff;
        border-bottom: 1px solid #ffffff; /**下边框样式 */
    }
</style>