<template>
    <div class="info-bar">
        <div class="infobar-item"><span>@icg</span></div>
        <div class="infobar-item"><span>icg录制的视频</span></div>
        <div class="infobar-item music-item">
            <span class="iconfont icon-yinfu"></span>
            <div class="music-name">   <!-- data-*是html全局属性, 存储页面或程序的私有定制数据-->
                <span data-text=" 全网最新的vuecli实现抖音app"> 全网最新的vuecli实现抖音app</span>
            </div>
        </div>

    </div>
</template>

<script>
export default{

}
</script>

<style scoped>
.info-bar{
    color:#ffffff;
    font-size: 12px;
    padding-left:10px;
}
.info-bar .infobar-item{
    padding:2px 0;
}
.music-item{
    /* width:80%;
    border:1px red solid; */
    display:flex;
}

.infobar-item .icon-yinfu{
    /* margin-right:5px; */
    display:block;
}


.music-item .music-name{
    width:130px;
    /* border:1px red solid; */
    white-space: nowrap;          /*如何处理元素内的空白 => 其中的文本不换行 */
    overflow:hidden;              /** 超出元素宽高的部分被隐藏 */
}

.music-item .music-name span{
    display:inline-block;
    animation: scroll 5s linear infinite; /** 设置动画,scroll是绑定的keyframe 名称 */
    font-size:12px;
}

.music-item .music-name span::after{   /**在span后面添加一个伪元素,内容是span中自定义的元素data-text */
    content:attr(data-text); 
    margin-left:5px;
} 

@keyframes scroll {   /**描述元素动画从哪里移动到哪里 */
    from{
        transform:translateX(0);
    }
    to{
        transform: translateX(calc(-50% - 20px));  /**calc()函数用于动态计算值 */
    }
}

</style>