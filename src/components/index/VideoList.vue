<template>
    <div class="video-list">
        <!-- 滑动内容  -->
        <swiper :options="swiperOption">
            <swiper-slide v-for="(item,index) in dataList" :key="index">
                <div>
                     <!-- 接受子组件传递的videos引用? -->
                    <!-- 将item以属性videoList传递子组件 -->
                    <!-- 将index以属性index传递子组件 -->
                    <videos ref="videos" 
                            :videoList="item"
                            :index="index"></videos> 
                </div>
                <div class="infobar-wrap">
                <info-bar></info-bar>
                </div>
                <div class="rightbar-wrap">  <!-- changeCom事件由RitghBar组件传递,这就是组件间通信 -->
                    <right-bar @changeCom="showComs"></right-bar>
                </div>
            </swiper-slide>
        </swiper>
        <transition name="up">
            <!-- 评论区 -->
            <div class="comment-wrap" v-if="this.showComment">
                    <!-- 评论区顶部 -->
                    <div class="comment-top">
                        <div class="number">1.4w条评论</div>
                        <div class="close" @click="close"><span>x</span></div>
                    </div>
                    <!-- 评论区中间部分 -->
                    <div class="comment-list">
                        <div class="comment-body">
                            <div class="comment-box">
                                <div class="comment-item">
                                    <div class="user-pic"><img src="../../static/img/music.jpg"></div>
                                    <div class="item-info">
                                        <div class="reply">
                                            <p class="name">吾沉余心</p>
                                            <p class="msg">想弄成表情包可以吗想弄成表情包可以吗想弄成表情包可以吗
                                                <span class="time"> 3-19</span>
                                            </p>
                                        </div>
                                        <div class="zan">
                                            <span class="iconfont icon-aixin"></span>
                                            <p class="zan-num">10.1w</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="sub-comment-item">  <!--对评论的回复-->
                                    <div class="user-pic"><img src="../../static/img/jielun.jpg"></div>
                                    <div class="item-info">
                                        <div class="reply">
                                            <p class="name">烟酒人生</p>
                                            <p class="msg">
                                                <span>回复 </span>
                                                <span class="name">吾沉余心</span>
                                                当然可以啦当然可以啦当然可以啦当然可以啦
                                                <span class="time"> 3-20</span>
                                            </p>
                                        </div>
                                        <div class="zan">
                                            <span class="iconfont icon-aixin reply-icon-aixin"></span>
                                            <p class="zan-num">1109</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="more">
                                    ----展开60条回复 ▼
                                </div>
                            </div>
                        </div>
                        <div class="comment-body">
                            <div class="comment-box">
                                <div class="comment-item">
                                    <div class="user-pic"><img src="../../static/img/music.jpg"></div>
                                    <div class="item-info">
                                        <div class="reply">
                                            <p class="name">吾沉余心</p>
                                            <p class="msg">想弄成表情包可以吗想弄成表情包可以吗想弄成表情包可以吗
                                                <span class="time"> 3-19</span>
                                            </p>
                                        </div>
                                        <div class="zan">
                                            <span class="iconfont icon-aixin"></span>
                                            <p class="zan-num">10.1w</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="sub-comment-item">  <!--对评论的回复-->
                                    <div class="user-pic"><img src="../../static/img/jielun.jpg"></div>
                                    <div class="item-info">
                                        <div class="reply">
                                            <p class="name">烟酒人生</p>
                                            <p class="msg">
                                                <span>回复 </span>
                                                <span class="name">吾沉余心</span>
                                                当然可以啦当然可以啦当然可以啦当然可以啦
                                                <span class="time"> 3-20</span>
                                            </p>
                                        </div>
                                        <div class="zan">
                                            <span class="iconfont icon-aixin reply-icon-aixin"></span>
                                            <p class="zan-num">1109</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="more">
                                    ----展开60条回复 ▼
                                </div>
                            </div>
                        </div>
                        <div class="comment-body">
                            <div class="comment-box">
                                <div class="comment-item">
                                    <div class="user-pic"><img src="../../static/img/music.jpg"></div>
                                    <div class="item-info">
                                        <div class="reply">
                                            <p class="name">吾沉余心</p>
                                            <p class="msg">想弄成表情包可以吗想弄成表情包可以吗想弄成表情包可以吗
                                                <span class="time"> 3-19</span>
                                            </p>
                                        </div>
                                        <div class="zan">
                                            <span class="iconfont icon-aixin"></span>
                                            <p class="zan-num">10.1w</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="sub-comment-item">  <!--对评论的回复-->
                                    <div class="user-pic"><img src="../../static/img/jielun.jpg"></div>
                                    <div class="item-info">
                                        <div class="reply">
                                            <p class="name">烟酒人生</p>
                                            <p class="msg">
                                                <span>回复 </span>
                                                <span class="name">吾沉余心</span>
                                                当然可以啦当然可以啦当然可以啦当然可以啦
                                                <span class="time"> 3-20</span>
                                            </p>
                                        </div>
                                        <div class="zan">
                                            <span class="iconfont icon-aixin reply-icon-aixin"></span>
                                            <p class="zan-num">1109</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="more">
                                    ----展开60条回复 ▼
                                </div>
                            </div>
                        </div>
                        <div class="comment-body">
                            <div class="comment-box">
                                <div class="comment-item">
                                    <div class="user-pic"><img src="../../static/img/music.jpg"></div>
                                    <div class="item-info">
                                        <div class="reply">
                                            <p class="name">吾沉余心</p>
                                            <p class="msg">想弄成表情包可以吗想弄成表情包可以吗想弄成表情包可以吗
                                                <span class="time"> 3-19</span>
                                            </p>
                                        </div>
                                        <div class="zan">
                                            <span class="iconfont icon-aixin"></span>
                                            <p class="zan-num">10.1w</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="sub-comment-item">  <!--对评论的回复-->
                                    <div class="user-pic"><img src="../../static/img/jielun.jpg"></div>
                                    <div class="item-info">
                                        <div class="reply">
                                            <p class="name">烟酒人生</p>
                                            <p class="msg">
                                                <span>回复 </span>
                                                <span class="name">吾沉余心</span>
                                                当然可以啦当然可以啦当然可以啦当然可以啦
                                                <span class="time"> 3-20</span>
                                            </p>
                                        </div>
                                        <div class="zan">
                                            <span class="iconfont icon-aixin reply-icon-aixin"></span>
                                            <p class="zan-num">1109</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="more">
                                    ----展开60条回复 ▼
                                </div>
                            </div>
                        </div>
                        <div class="comment-body">
                            <div class="comment-box">
                                <div class="comment-item">
                                    <div class="user-pic"><img src="../../static/img/music.jpg"></div>
                                    <div class="item-info">
                                        <div class="reply">
                                            <p class="name">吾沉余心</p>
                                            <p class="msg">想弄成表情包可以吗想弄成表情包可以吗想弄成表情包可以吗
                                                <span class="time"> 3-19</span>
                                            </p>
                                        </div>
                                        <div class="zan">
                                            <span class="iconfont icon-aixin"></span>
                                            <p class="zan-num">10.1w</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="sub-comment-item">  <!--对评论的回复-->
                                    <div class="user-pic"><img src="../../static/img/jielun.jpg"></div>
                                    <div class="item-info">
                                        <div class="reply">
                                            <p class="name">烟酒人生</p>
                                            <p class="msg">
                                                <span>回复 </span>
                                                <span class="name">吾沉余心</span>
                                                当然可以啦当然可以啦当然可以啦当然可以啦
                                                <span class="time"> 3-20</span>
                                            </p>
                                        </div>
                                        <div class="zan">
                                            <span class="iconfont icon-aixin reply-icon-aixin"></span>
                                            <p class="zan-num">1109</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="more">
                                    ----展开60条回复 ▼
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 发表评论区域 -->
                    <div class="reply-input">
                        <input type="text" name="" id="" placeholder="留下你的精彩评论吧">
                        <span class="emoji">@</span>
                        <span class="iconfont icon-pinglun"></span>
                    </div>
            </div>
        </transition>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import Videos from './Videos'
import InfoBar from './InfoBar'
import RightBar from './RightBar'

export default{
    name:"VideoList",
    data(){
        return {
            showComment:false,   //是否展示评论栏 => 需要传递到RightBar组件
            page:1,
            swiperOption: {
                direction:"vertical",
                grabCursor: true, 
                setWrapperSize: true, 
                autoHeight: true, //自动高度。设置为true时，wrapper和container会随着当前slide的高度而发生变化
                slidesPerView: 1,
                mousewheel: true, 
                mousewheelControl: true, 
                height: window.innerHeight, // 高度设置，占满设备高度
                resistanceRatio: 0, 
                observer:true,
                observeParents: true, 
                on:{                      //绑定一些事件
                    tap:() => { //点击   
                        this.playAction(this.page-1);  //从0开始计算
                    },
                    slideNextTransitionStart:()=>{  //下滑(下一个视频)
                        this.page+=1;
                        this.nextVideo(this.page-1);
                    },
                    slidePrevTransitionEnd:()=>{   //上滑
                        if(this.page > 1){
                            this.page-=1;
                            this.prevVideo(this.page-1);
                        }
                    }
                }
            },
            dataList:[
                {
                    id:"1",
                    url:"http://video.jishiyoo.com/3720932b9b474f51a4cf79f245325118/913d4790b8f046bfa1c9a966cd75099f-8ef4af9b34003bd0bc0261cda372521f-ld.mp4"
                },
                {
                    id:"2",
                    url:"http://video.jishiyoo.com/1eedc49bba7b4eaebe000e3721149807/d5ab221b92c74af8976bd3c1473bfbe2-4518fe288016ee98c8783733da0e2da4-ld.mp4"
                },
                {
                    id:"3",
                    url:"http://video.jishiyoo.com/549ed372c9d14b029bfb0512ba879055/8e2dc540573d496cb0942273c4a4c78c-15844fe70971f715c01d57c0c6595f45-ld.mp4"
                },
                {
                    id:"4",
                    url:"http://video.jishiyoo.com/161b9562c780479c95bbdec1a9fbebcc/8d63913b46634b069e13188b03073c09-d25c062412ee3c4a0758b1c48fc8c642-ld.mp4"
                }
            ]
        }
    },
    methods:{
        playAction(index){
            this.$refs.videos[index].playOrStop();
        },
        //滑到下一个视频
        nextVideo(index){
            this.$refs.videos[index-1].stop();
            this.$refs.videos[index].play();
        },
        //滑到上一个视频
        prevVideo(index){
            this.$refs.videos[index+1].stop();
            this.$refs.videos[index].play();
        },
        //弹出评论框
        showComs(){
            this.showComment=true;
        },
        //关闭评论框
        close(){
            this.showComment=false;
        }
    },
    components:{
        Swiper, SwiperSlide,Videos,InfoBar,
        RightBar
    },
}
</script>

<style scoped>
.video-list{
    height:100%;
    width:100%;
}
.video-list .swiper-container{
    height:100%;
    position:relative;
}
.infobar-wrap{
    position: absolute;
    bottom:55px;
    left:0px;
}
.rightbar-wrap{
    position:absolute;
    bottom:50px;
    right:0;
}

/*********************  评论  **********************/
.up-enter-active, .up-leave-active {       /** 评论栏上滑的样式 */
    transition: all .5s;
}
.up-enter, .up-leave-to{
    opacity: 1;
    transform: translateY(100%);
}


.comment-wrap{
    position:fixed;
    bottom:0px;
    left:0px;
    height:80%;
    width:100%;
    background: #ffffff;
    border-top-left-radius: 10px;
    border-top-right-radius:10px;
    z-index:9999;
    padding:5px 5px;
    box-sizing: border-box;     /**边框和内边距算在width height以内 */
}
.comment-top{
    height:5%;
    display:flex;
    align-items: center;      /**交叉轴/垂直于主轴方向上的对齐方式 */
}
.number{
    flex:1;                  /** 即 1 1 0 => 会占据多余空间*/ 
    font-size:12px;
    text-align: center;
}
.close{
    padding-right: 6px;
    font-size:18px;
    color:#666;
}
.comment-list{
    max-height:89%;
    overflow:auto;            /**超出最大高度自动滚动条 */
}
.comment-list::-webkit-scrollbar{  /**设置滚动时隐藏滚动条 */
    display: none;
}

.comment-body{
    width:100%;
    margin-top:18px;
}
.comment-item{
    display:flex;
}
.user-pic img{
    width:23px;
    height:23px;
    border-radius: 50%;
}
.item-info{
    margin-left:10px;
    display:flex;
    flex:1 1 auto;
}
.reply{
    flex:1 1 0;
}
.reply .name{
    color:#666;
    margin:0px;
    font-size:10px;
}
.reply .msg{
    margin-top:3px;
    margin-bottom: 0px;
    font-size:11px;
    width:90%;
}

.zan{
    flex:0 1 26px;
    padding-right: 1px;
    text-align: center;
}
.zan .icon-aixin{
    color:#DCDCDC;
    font-size: 17px;
}
.time{
    color:#666;
    font-size:10px;
}
.zan-num{
    margin:0px;
    font-size:10px;
    color:#DCDCDC;
    
}
.sub-comment-item{
    display:flex;
    margin-top:5px;
    margin-left:33px;
}
.more{
    margin-left:33px;
    margin-top:5px;
    font-size:10px;
    color:#DCDCDC;
}
.reply-input{
    width:100%;
    height:5%;
    position: fixed;
    bottom:2px;
    left:0px;
    background: #ffffff;
    display:flex;
    align-items: center;
}
.reply-input input{
    line-height: 24px;
    width:70%;
    border:none;
    padding:0 10px;
    outline:none;
}
.reply-input .emoji{
    font-size:18px;
    color:#cccccc;
    margin-right:6%;
}
.reply-input .iconfont{
    font-size:18px;
    color:#cccccc;
    margin-right:6%;
}
</style>