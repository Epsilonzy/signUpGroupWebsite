<template>
    <div class="body">
        <div class="background"></div>
        <div class="form">
            <p>登陆后台系统</p>
            <i-input class="input" icon="ios-person" placeholder="请输入账号" style="width: 200px" v-model="userId"></i-input>
            <i-input type="password" class="input" icon="ios-clock" placeholder="请输入密码" style="width: 200px" v-model="password"></i-input>
            <i-button class="input button" type="success" @click="submit" long>登陆</i-button>
            <i-button class="input button"  @click="toPath('/')" long>返回报名</i-button>
        </div>
        <zy-loading :loadingShow="loadingShow"></zy-loading>
    </div>
</template>
<style lang="scss" scoped>
    .body{
        animation:anm1 .3s ease-in;
        @keyframes anm1{
            0%{
                width:100%;
                height:100%;
                opacity:0;
                transform:scale(0.98);
            }
            100%{
                width:100%;
                height:100%;
                opacity:1;
                transform:scale(1.0);
            }
        }
        .background{
        width:100%;
        height:100vh;
        background-image: url('../../assets/indexBg.jpg');
        filter: blur(10px);
        background-size:cover;
        position:fixed;
        z-index:0;
        }
        .background:before{
            content:'';
            display:block;
            width:100%;
            height:100vh;
            position:absolute;
            filter: blur(10px);
            z-index:1;
            background-color:rgba(255,255,255,.1);
        }
        .form{
            padding:5px 0 5px 0;
            width:400px;
            background-color: #fff;
            position:fixed;
            z-index:2;
            top:200px;
            text-align: center;
            left:0;
            right:0;
            margin:auto;
            border-radius: 10px;
            box-shadow:0px 0px 5px #f8f8f8;
            opacity:0.8;
            >p{
                font-size:20px;
            }
            >.input{
                margin:20px 0 0 0;
            }
            >.button{
                width:200px;
            }
        }
    }
   
</style>
<script>
    import loading from '@/components/loading.vue';
    import config from '@/config/select.json';
    export default {
        data(){
            return {
                userId:'',
                password:'',
                loadingShow:false
            }
        },
        methods:{
            axiosPost(){
                this.axios.post(config.serverAddress+'/login',{ userId:this.userId,password:this.password}).then(res=>{
                    if(res.data.status){
                        this.$Message.success('登陆成功!');
                        sessionStorage.setItem('userToken',res.data.token);
                        sessionStorage.setItem('userId',this.userId);
                        this.$router.push({path:'/admin'});
                    } else {
                        this.$Message.error('账号或密码错误');
                        this.loadingShow = false;
                    }
                })
            },
            toPath(path){
                this.$router.push({path:path});
            },
            submit(){
                this.loadingShow = true;
                setTimeout(()=>{
                    this.axiosPost();
                },500);
            }
        },
        components:{
            'zy-loading': loading
        }
    }
</script>