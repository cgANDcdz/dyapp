<template>
    <div class="video-list">
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
                <div class="rightbar-wrap">
                    <right-bar></right-bar>
                </div>
            </swiper-slide>
        </swiper>
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

</style>