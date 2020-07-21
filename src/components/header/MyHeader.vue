<template>
    <div class="user-header">
        <div class="back" v-if="hasLeft" @click="goBack"> 
            <span class="">&lt;</span>
        </div>
        <div class=""><span>{{title}}</span></div>
        <div class="right" v-if="hasRight">
            <span>{{rightTxt}}</span>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        title:{
            type:String,
            required:true
        },
        rightTxt:{
            type:String,
            required:true
        },
        hasRight:{
            type:Boolean,
            required:false
        },
        hasLeft:{
            type:Boolean,
            required:false
        }
    },
    methods:{
        goBack(){
            this.$emit("changeBack");   /** 通知父组件 */
        }
    }
}
</script>

<style scoped>
.user-header{
    height:48px;
    width:100%;
    line-height: 48px;
    display: flex;
    justify-content: center;
    border-bottom: 1px #292831 solid;
    background-color: #101821;
    color:#eeeeee;
    position:relative;        /** 只是为了方便子元素定位 */
}
.back{
    position:absolute;
    left:10px;
}
.right{
    position: absolute;
    right:10px;
}
</style>