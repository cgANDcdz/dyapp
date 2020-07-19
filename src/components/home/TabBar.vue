<template>
    <div class="tab-bar">  
        <div class="item" @click="changeTab(0)">  <!-- v-on:click=func() 和 @click=func()都是监听事件 -->
            <router-link to="/index" tag="span" :class="tabIndex==0?'active':''">首页</router-link>
        </div>
        <div class="item" @click="changeTab(1)">
            <router-link to="/follow" tag="span" :class="tabIndex==1?'active':''">熟人</router-link>
        </div>
        <div class="item" @click="changeTab(2)">
            <router-link to="/index" tag="span" :class="tabIndex==2?'active':''">
                <img class="dy-btn" src="../../static/img/dy-btn.png" >
            </router-link>
        </div>
        <div class="item" @click="changeTab(3)">
            <router-link to="/index" tag="span" :class="tabIndex==3?'active':''">消息</router-link>
        </div>
        <div class="item" @click="changeTab(4)">
            <router-link to="/index" tag="span" :class="tabIndex==4?'active':''">我</router-link>
        </div>
    </div>

</template>


<script>
export default {
    data(){
        return{
            tabIndex:0
        }
    },
    methods:{
        changeTab(index){
            this.tabIndex=index;
        }
    }
}
</script>



<style scoped>
    .tab-bar{
        height:50px;
        line-height: 50px;
        width:100%;
        /* background: #000;     */
        position:fixed;        /* 绝对定位,相对于浏览器窗口,区别于absolute*/
        bottom: 0;             /* 底部*/
        left:0;
        color:#cccccc;
        font-size: 15px;
        display: flex;          /*指定flex布局,而非传统布局,参考:https://www.runoob.com/w3cnote/flex-grammar.html */
        justify-items: center;  /*居中显示 */
        z-index:999;            /**显示在最顶上 */
    }
    .tab-bar .item{
        flex:1;                 /*与display: flex;配合使用 */
        text-align: center;
    }
    .tab-bar .item .active{
        color:#ffffff;
    }

    .tab-bar .item .dy-btn{
        width:30px;
        height:30px;
        padding-top:11px;
    }


</style>