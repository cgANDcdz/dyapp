<template>
    <div class="publish">
        <div class="pub-top">
            <div class="back">
                <span>x</span>
            </div>
            <div>
                <span><span class="iconfont icon-yinfu2">选择音乐</span></span>
            </div>
        </div>
        <div class="upload-box">
            <video ref="video" style="width:100%; height:500px;object-fill:fill" src=""></video>
            <div class="upload-bar">
                <div class="bar-item">
                    <div class="icon"></div>
                    <p>道具</p>
                </div>
                <div class="bar-item"  @click="getCamera">
                    <div class="pub-border">
                        <div class="pub"></div>
                    </div>
                </div>
                <div class="bar-item">
                    <div class="icon"></div>
                    <p>上传</p>
                </div>
            </div>
        </div>
        <div>

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
        // 调用摄像头   /** 待复习 ???/ */
        getCamera(){
            navigator.mediaDevices.getUserMedia({
                video:true
            }).then(success=>{
                this.$$refs['video'].srcObject=success;  /*  'video'哪里来的?? 此处执行出错  */
                this.$refs['video'].play();
            }).catch(err=>{
                console.log(err);
            });
        }
    }
}
</script>


<style scoped>
.publish{
    background-color: #cccccc;
    color:#fff;
}
.pub-top{
    height:44px;
    line-height: 44px;
    display: flex;
    justify-content: center;
    color:#fff;
    font-size: 16px;
    position: relative;
}
.back{
    position: absolute;
    left:10px;
}
.back span{
    font-size: 28px;
}
.upload-box{
    background-color: #cccccc;
    height:-webkit-fill-available;   /** 高度自适应?? */
}
.upload-box .upload-bar{
    position: fixed;
    bottom:0;
    display: flex;
    height:100px;
    justify-content: space-between;
    width:100%;
    padding: 0 50px;
    box-sizing: border-box;
}
.upload-box .upload-bar .icon{
    width:30px;
    height:30px;
    border-radius: 5px;
    border:1px red solid;
    margin-bottom: 5px;
}
.pub-border{
    display: flex;
    align-items: center;
    justify-content: center;
    height:50px;
    width: 50px;
    border-radius: 50%;
    border:1px #FE2C55 solid;
    /** 边缘的阴影 */
    box-shadow: -5px 0 5px #FE2C55,5px 0 5px #FE2C55,0 -5px 5px #FE2C55,0 5px 5px #FE2C55;
}
.pub{
    height:45px;
    width:45px;
    border-radius: 50%;
    background-color: #FE2C55;
}
</style>