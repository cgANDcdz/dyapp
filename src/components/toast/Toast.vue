<template>
    <div class="toast-box">
        <transition name="toast">
            <div class="toast" 
                v-show="show"
                :class="type">
                <p>{{message}}</p>
            </div>
        </transition>
    </div>
</template>

<script>
let toast={
    data(){
        return{
            message:"12345",
            show:true,
            type:''
        }
    }
}
export default toast;
</script>


<style scoped>
.toast{
    position:fixed;
    left:50%;
    top:30%;
    transform: translate(-50%,-50%);
    background-color: rgba(0,0,0,0.5);
    color:#ffffff;
    text-align: center;
    border-radius: 3px;
    font-size:12px;
    line-height: 20px;
    /* padding:6px 10px; */
}
.toast p{
    margin:0;          /** 取消p自带的margin */
}
.success{
    background-color: rgba(0,0,0,0.5);
}
.error{
    background-color:#FE2C55;
}

/******** 暂时没有看懂... ******* */
.toast-enter-to, .toast-leave{
    opacity: 1;
}
.toast-enter-active, .toast-leave-active{
    transition: all ease 0.5s;
}
.toast-enter, .toast-enter-to{
opacity: 0;
}
</style>