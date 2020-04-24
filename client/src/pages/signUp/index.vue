<template>
    <div class="body">
        <zy-loading :loadingShow="loadingShow"></zy-loading>
        <div class="background"></div>
        <div class="form">
            <p class="title">计算机学院组织报名系统</p>
            <i-input class="input" icon="ios-person" placeholder="请输入学号"  v-model="stdData.stdId"></i-input>
            <i-input  class="input" icon="ios-clock" placeholder="请输入姓名"  v-model="stdData.stdName"></i-input>
            <i-input  class="input" icon="qq" placeholder="请输入qq号"  v-model="stdData.stdQQ"></i-input>
            <i-input  class="input" icon="ios-phone" placeholder="请输入手机号"  v-model="stdData.stdPhone"></i-input>
            <p class="content">请选择专业与班级</p>
            <Cascader class="select" :data="majorData" v-model="stdData.majorValue"></Cascader>
            <p class="content">请选择第一志愿</p>
            <Cascader class="select" :data="orginazationData" v-model="stdData.firstWill" ></Cascader>
            <i-input class="select textarea" v-model="stdData.firstReason" type="textarea" placeholder="请输入加入此组织的理由"></i-input>
            <p class="content">请选择第二志愿</p>
            <Cascader class="select" :data="orginazationData" v-model="stdData.secondWill"></Cascader>
            <i-input class="select textarea" v-model="stdData.secondReason" type="textarea" placeholder="请输入加入此组织的理由"></i-input>
            <i-button class="input button" type="success" @click="submit" long>报名</i-button>
            <i-button class="input button"  @click="toPath('/login')" long>后台登陆</i-button>
        </div>
        <div class="bottom">
            2020 &copy; 学生创新实践中心
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .body{
        position: relative;
        padding-top:1px;
        padding-bottom:1px;
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
            position: relative;
            z-index:2;
            text-align: center;
            margin:100px auto 50px;
            border-radius: 10px;
            box-shadow:0px 0px 5px #f8f8f8;
            opacity:0.8;
            >.title{
                font-size:20px;
            }
            >.content{
                margin:5px 0 5px 0;
                font-size:16px;
            }
            >.radio{
                display:block;
            }
            >.input{
                width:200px;
                margin:20px 0 0 0;
            }
            >.select{
                width:200px;
                margin-left:auto;
                margin-right:auto;
                margin-top:5px;
                margin-bottom:5px;
            }
            >.button{
                width:200px;
            }
        }
        >.bottom{
            text-align: center;
            position:absolute;
            padding: 10px 0 20px;
            color: #9ea7b4;
            bottom:0;
            left:0;
            right:0;
            z-index:3;
        }
    }
    @media screen and (max-width: 500px){
        .body{
            .form{
                padding:5px 0 5px 0;
                width:300px;
                background-color: #fff;
                position: relative;
                z-index:2;
                text-align: center;
                margin:100px auto 50px;
                border-radius: 10px;
                box-shadow:0px 0px 5px #f8f8f8;
                opacity:0.8;
            }
        }
    }
</style>
<script>
    import config from '@/config/select.json';
    import loading from '@/components/loading.vue';
    export default {
        data(){
            return {
                loadingShow:false,
                stdData:{
                    stdId:undefined,
                    stdName:undefined,
                    stdQQ:undefined,
                    stdPhone:undefined,
                    majorValue:undefined,
                    firstWill:[],
                    firstReason:undefined,
                    secondWill:[],
                    secondReason:undefined                     
                },
                majorData:config.majorData,
                orginazationData:config.orginazationData
            }
        },
        components:{
            "zy-loading":loading
        },
        mounted(){
            
        },
        methods:{
            checkValue(data){
                let nameReg = /^[\u4E00-\u9FA5]{2,4}$/;
                let phoneReg = /^1[3456789]\d{9}$/;
                let idReg = /^(\d{8})?$/;
                for(let key in data){
                    if(data[key]===undefined||data[key]==' '){
                        this.$Message.error('有漏填的消息哦');
                        return;
                    }
                }
                if(!idReg.test(data.stdId)){
                    this.$Message.error('学号填错了哦');
                    return;
                } else if (!nameReg.test(data.stdName)){
                    this.$Message.error('姓名不合法');
                    return;
                } else if (!phoneReg.test(data.stdPhone)){
                    this.$Message.error('姓名不合法');
                    return;
                } else if (data.firstWill.length==0||data.secondWill.length==0){
                    this.$Message.error('未填选志愿');
                    return;
                }
                return true
            },
            toPath(path){
                this.$router.push({path:path});
            },
            submit(){
                if(this.checkValue(this.stdData)){
                    this.loadingShow = true;
                    let stdData = {
                        stdId:this.stdData.stdId,
                        stdName:this.stdData.stdName,
                        stdQQ:this.stdData.stdQQ,
                        stdPhone:this.stdData.stdPhone,
                        major:this.stdData.majorValue[0],
                        classNum:this.stdData.majorValue[1],
                        organizationFirst:this.stdData.firstWill[0],
                        branchFirst:this.stdData.firstWill[1],
                        reasonFirst:this.stdData.firstReason,
                        organizationSecond:this.stdData.secondWill[0],
                        branchSecond:this.stdData.secondWill[1],
                        reasonSecond:this.stdData.secondReason
                    }
                    setTimeout(()=>{
                        this.axios.post(config.serverAddress+'/signUp',stdData).then(res=>{
                            if(res.data.status){
                                for(let index in this.stdData){
                                    this.stdData[index] = undefined;
                                }
                                this.loadingShow = false;
                                this.$Message.success("提交成功!");
                            } else {
                                this.loadingShow = false;
                                this.$Message.error(res.data.content);
                            }
                        })
                    },1000);
                }
            }
        }
    }
</script>