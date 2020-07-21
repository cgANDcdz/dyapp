<template>
    <div class="me">
        <!-- 顶部 -->
        <div class="me-top" :style="bgPic">  <!-- :style的写法??? -->
            <div class="menu-box">
                <div class=menu-icon>
                </div>
            </div>
        </div>
        <!-- 主要内容 -->
        <div class="me-wrap">
            <!-- 中间部分-->
            <div class="me-content">
                <div class="info"> <!-- 用户信息-->
                    <img src="../../static/img/icg.jpg">
                    <button class="btn">编辑资料</button>
                     <button class="btn">+ 朋友</button>
                </div>
                <div class="desc">
                    <h2>爱学习的孩子</h2>
                    <span>抖音号：17778392481</span>
                    <p>越努力越幸运</p>
                </div>
                <div class="user-tag">
                    <span>23岁</span>
                    <span>中国最富垃圾场</span>
                    <span>+添加学校等标签</span>
                </div>
                 <div class="user-tag2">
                    <span><a>22</a>获赞</span>
                    <span><a>543</a>关注</span>
                     <span><a>2.0w</a>粉丝</span>
                </div>
                <div class="me-ads">
                    好好学习，天天向上
                </div>
            </div>
            <!-- 作品展示部分 -->
            <div class="me-tab">
                <div class="me-navbar">
                    <div class="item" @click="changeTab(0)" 
                        :class="indexTab==0?'active':''">作品23</div>
                    <div class="item" @click="changeTab(1)"
                        :class="indexTab==0?'active':''">动态33</div>
                    <div class="item" @click="changeTab(2)"
                        :class="indexTab==0?'active':''">喜欢21</div>
                </div>
                <div class="tab-wrap">
                    <div class="tab-icon" v-show="indexTab===0">
                        <div class="tab-img">
                            1
                            <img src="../../static/img/zuopin1.jpg" alt="">
                            <img src="../../static/img/zuopin2.jpg" alt="">
                            <img src="../../static/img/zuopin3.jpg" alt="">
                        </div>
                        <div class="tab-img" v-show="indexTab===1">2</div>
                        <div class="tab-img" v-show="indexTab===2">3</div>
                    </div>                  
                </div>
            </div>
        </div>
    </div>    
</template>

<script>
export default{
    data(){
        return{
            bgPic:{      //为什么可以这样设置样式???
                backgroundImage:'url('+require('../../static/img/me-bg.png')+')',   //????
                backgroundRepeat:'no-repeat',
                backgroundSize:'100% 100%'
            },
            indexTab:0
        }
    },
    methods:{
        changeTab(index){
            this.indexTab=index;
        }
    }
}
</script>

<style scoped>
.me{
    position:relative;
}
.me-top{
    height:160px;
    display: flex;
    justify-content: flex-end;
    padding:20px;
}
.menu-box{
    width:30px;
    height:30px;
    border-radius: 50%;
    background-color:rgba(0,0,0,0.3);
    display: flex;
    align-items: center;
    justify-content: center;
}
.menu-icon{
    background: #ffffff;
    border-top:2px #ffffff solid;
    border-bottom:2px #ffffff solid;
    background-clip:content-box;    /** 规定背景的绘制区域 => 与内容大小保持一致 */
    width:20px;
    height:2px;
    padding:5px 0;
}
.me-wrap{
    position:absolute;
    top:140px;
    /* height:100%; */
    width:100%;
    background-color: #101821;
    /* color:#000; */
}
.me-content{
    padding:0 20px;
}
.info{
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* padding-bottom:20px; */
}
.info img{
    height:100px;
    width:100px;
    border-radius: 50%;
    margin-right:20px;
}
.info button{
    height:40px;
    padding:0 24px;
    background-color: #393842;
    border:none;
    color:#ffffff;
}
.desc{
    padding:20px 0;
}
.desc h2{
    font-size:24px;
    font-weight: bold;
}
.desc span{
    padding:10px 0 15px 0;
    display: block;
}
.desc p{
    line-height: 24px;
}
.user-tag span{
    font-size:14px;
    color:#cccccc;
    margin-right:5px;
    background:rgba(0,0,0,0.6);
    padding:5px 8px;
}
.user-tag2{
    padding:20px 0;
}
.user-tag2  span{
    font-size:14px;
    margin-right:15px;
    color:#cccccc;
}
.user-tag2 a{
    margin-right:5px;
    color:#ffffff;
}
.me-ads{
    background-color: red;
    text-align: center;
    padding:10px 0;
    border-radius: 4px;
}
.me-tab{
    height:300px;
}
.me-navbar{
    display: flex;
    padding:0 20px;
    justify-content: space-between;
    align-items: center;
}
.me-navbar .item{
    padding:10px 25px;
    color:#cccccc;
}
.me-navbar .active{
    border-bottom:2px #FFDF0E solid;
    color:#ffffff;
}
.tab-img img{
    width:33.3%;
}
</style>