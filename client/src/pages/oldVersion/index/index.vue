<template>
    <div class="body">
        <div class="background"></div>
        <div class="container">
            <div class="form">
                <p>请填入个人信息</p>
                <at-input class="input" v-model="stdName" placeholder="输入姓名"></at-input>
                <at-input class="input" v-mode="stdId" placeholder="输入学号"></at-input>
                <p>请选择专业及班级</p>
                <at-select class="select" v-model="major" >
                    <at-option value="未填入">未填入</at-option>
                    <at-option value="计算机"></at-option>
                    <at-option value="信息安全"></at-option>
                    <at-option value="物联网"></at-option>
                    <at-option value="大数据"></at-option>
                    <at-option value="中加"></at-option> 
                </at-select>
                <at-select v-show="classShow" class="select" v-model="classNum" >
                    <div v-if="classNumShow.first">
                        <at-option value="1">一班</at-option>
                        <at-option value="2">二班</at-option>
                    </div>
                    <div v-if="classNumShow.second">
                        <at-option value="3">三班</at-option>
                        <at-option value="4">四班</at-option>
                    </div>
                    <div v-if="classNumShow.third">
                        <at-option value="5">五班</at-option>
                        <at-option value="6">六班</at-option>
                    </div>
                </at-select>
                <at-input class="input" v-mode="stdQQ" placeholder="输入QQ号"></at-input>
                <at-input class="input" v-mode="stdPhone" placeholder="输入手机号"></at-input>
            </div>
            <div class="form">
                <p>第一志愿</p>
                <at-select class="select" v-model="willFirst" >
                    <at-option value="未填入">未填入</at-option>
                    <at-option value="科技协会"></at-option>
                    <at-option value="团委"></at-option>
                    <at-option value="勤工助学中心"></at-option>
                    <at-option value="新闻中心"></at-option>
                    <at-option value="学生会"></at-option> 
                </at-select>
                <p>第二志愿</p>
                <at-select class="select" v-model="willSecond" >
                    <at-option value="未填入">未填入</at-option>
                    <at-option value="团委"></at-option>
                    <at-option value="勤工助学中心"></at-option>
                    <at-option value="新闻中心"></at-option>
                    <at-option value="学生会"></at-option> 
                </at-select>
                <p>第三志愿</p>
                <at-select class="select" v-model="willThird" >
                    <at-option value="未填入">未填入</at-option>
                    <at-option value="团委"></at-option>
                    <at-option value="勤工助学中心"></at-option>
                    <at-option value="新闻中心"></at-option>
                    <at-option value="学生会"></at-option> 
                </at-select>
                <div class="switch">
                    是否选择调剂:
                    <at-switch v-model="isChange"></at-switch>
                    <p style="margin-top:20px">请输入你加入该组织的原因</p>
                    <at-textarea v-model="reason" autosize placeholder="这里输入内容，请输入多行"></at-textarea>
                </div>
                <at-button type="primary" class="btn">提交</at-button>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .select{
        width:200px;
    }
    .input,.select{
        margin:10px;
    }
    .test{
            display:none;
    }
    .btn{
        margin-top:10px;
    }
    .body{
        position:relative;
        width:100%;
        padding-top:1px;
        >.background{
            position:fixed;
            width:100%;
            height:100%;
            z-index:-1;
            background-image:linear-gradient(45deg,#ead6ee,#a0f1ea);
        }
        >.container{
            margin-top:100px;
            width:90%;
            margin-left:5%;
            position: relative;
            >.form{
                margin:20px auto 20px;
                width:400px;
                padding:10px;
                background-color:rgba(255,255,255,0.5);
                border-radius: 20px;
                text-align: center;
                >.input{
                    width:70%;
                    margin-left:15%;
                }
            }
        }
    }
    @media screen and (max-width:600px){
        .select{
            width:100px;
        }
        .body{
        position:relative;
        width:100%;
        padding-top:1px;
        >.background{
            position:fixed;
            width:100%;
            height:100%;
            z-index:-1;
            background-image:linear-gradient(45deg,#ead6ee,#a0f1ea);
        }
        >.container{
            margin-top:100px;
            width:90%;
            margin-left:5%;
            position: relative;
            >.form{
                margin:20px auto 0;
                width:300px;
                padding:10px;
                background-color:rgba(255,255,255,0.5);
                border-radius: 20px;
                text-align: center;
                >.input{
                    width:70%;
                    margin-left:15%;
                }
            }
        }
    }
        .test{
            display:block;
        }
    }
</style>
<script>
    export default{
        data(){
            return {
                stdName:'',
                stdId:'',
                major:'',
                stdQQ:'',
                stdPhone:'',
                classNum:'',
                classNumShow:{
                    first:true,
                    second:false,
                    third:false
                },
                willFirst:'',
                willSecond:'',
                willThird:'',
                classShow:false,
                reason:'',
                isChange:false
            }
        },
        mounted(){
            console.log("fuck");
        },
        watch:{
            major:{
                handler:function(val){
                    if(val!='未填入'){
                        this.classShow=true;
                        if(val=='计算机'||val=='信息安全'){
                            this.classNumShow.second = true;
                            this.classNumShow.third = false;
                        } else if(val=='中加'){
                            this.classNumShow.second = true;
                            this.classNumShow.third = true;
                        } else {
                            this.classNumShow.second = false;
                            this.classNumShow.third = false;
                        }
                    } else {
                        this.classShow=false;
                    }
                },
                deep:true
            },
            stdName(val){
                console.log(val);
            }
        }
    }
</script>
