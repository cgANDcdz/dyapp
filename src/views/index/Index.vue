<template>
    <div class="indexwrap">
        <top-bar></top-bar>
        <router-view></router-view>
    </div>
</template>

<script>
import TopBar from '../../components/index/TopBar.vue'
export default{
    data(){
        return{

        }
    },
    components:{
        TopBar
    }
}
</script>

<style scoped>
.indexwrap{
    height:100%;
    background: #000;
}
</style>