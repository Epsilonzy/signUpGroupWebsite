<template>
    <div>
        <transition name="loadingFade">
            <div class="demo-spin-container" v-show="loadingShow">
                <Spin class="spin" fix></Spin>
            </div>
        </transition>
    </div>
</template>
<style lang="scss" scoped>
    .demo-spin-container{
        position:fixed;
        width:100%;
        height:100vh;
        z-index:999;
        background-color: #666;
        opacity:0.9;
        top:0;
        bottom:0;
        left:0;
        right:0;
        margin:auto;
    }
    .loadingFade-enter-active,
    .loadingFade-leave-active{
      transition: opacity .5s;
    }
    .loadingFade-enter,
    .loadingFade-leave-to{
      opacity:0;
    }
</style>
<script>
    export default {
        data(){
            return{

            }
        },
        props:['loadingShow']
    }
</script>