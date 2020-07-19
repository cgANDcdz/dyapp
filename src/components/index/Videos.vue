<template>
<!-- 视频播放组件  -->
    <div classs="videos">
        <video-player  class="video-player vjs-default-skin vjs-big-play-centered"
          ref="videoPlayer"
            :playsinline="true"
            :options="playerOptions">
        </video-player>  

    </div>
</template>

<script>
import { videoPlayer } from 'vue-video-player'
export default{
    name:"Videos",
    props:["videoList","index"],    /** 父组件传递的参数 */
    data(){
        return{
            playerOptions : {
               // playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
                autoplay: false, //如果true,浏览器准备好时开始回放。
                muted: false, // 默认情况下将会消除任何音频。
                loop: false, // 导致视频一结束就重新开始。
                preload: 'auto', 
                fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
                sources: [
                    {
                        src: this.videoList.url,
                        type: 'video/mp4'  // 类型
                    }, 
                ],
                //poster: "../../static/images/test.jpg", //你的封面地址
                width: document.documentElement.clientWidth,
                notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
                controlBar:false
            },
            playing:true
        }
    },
    created(){
        this.autoPlayAction();
    },
    methods:{
        playOrStop(){
            if(this.playing){
                this.$refs.videoPlayer.player.pause();
                this.playing=false;
            }else{
                this.$refs.videoPlayer.player.play();
                this.playing=true;
            }
        },
        //自动播放第一个视频
        autoPlayAction(){
            if(this.index==0){
                this.playerOptions.autoplay=true;
            }
        },
        play(){
            this.$refs.videoPlayer.player.load();  /**恢复到上次播放的时候 => 似乎没有效果 */
            this.$refs.videoPlayer.player.play();
            this.playing=true;
        },
        stop(){
            this.$refs.videoPlayer.player.pause();
            this.playing=false;
        }
    },
    components:{
        videoPlayer
    }
}
</script>

<style>
.videos{
    position:relative;     /* 方便子组件绝对定位 */
}

/* .videos .vjs-default-skin > .video-js .vjs-big-play-button */
.video-js .vjs-big-play-button{
    border-radius: 50%;    /**添加圆角边框 */
    width:40px;
    height:40px;
    line-height: 36px;
    position: absolute;                /**为什么使用fixed会导致上下滚动后不再显示按钮??? */
    z-index: 1;
    top:50%;
    left:50%;
    transform: translate(50%,0);   /**移动距离,占元素本身的百分比 */ 
}
</style>