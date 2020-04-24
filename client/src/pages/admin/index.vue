<template>
    <div class="layout body">
        <Menu mode="horizontal" theme="dark" active-key="1" @on-select='onMenuSelect'>
            <div class="layout-logo">
                SCSE
            </div>
            <div class="layout-nav">
                <Menu-item key="1" name='nav'>
                    <Icon type="ios-navigate"></Icon>
                    主页
                </Menu-item>
                <Menu-item key="2" name='seeExcel'>
                    <Icon type="ios-keypad"></Icon>
                    查看报名情况
                </Menu-item>
                <Menu-item key="3" name='getExcel'>
                    <Icon type="ios-analytics"></Icon>
                    导出表格
                </Menu-item>
            </div>
        </Menu>
        <div class="layout-content">
            <div v-if='content.nav'>
                <div class="index-content">
                    <p class="title">欢迎</p>
                </div>
            </div>
            <div v-else-if="content.seeExcel">
                <i-table stripe :columns="columns" :data="stdData"></i-table>
                <div class="layout-page">
                    <Page :total="totalPages" show-total @on-change='changePage'></Page>
                </div>
            </div>
        </div>
        <div class="layout-copy">
            2020 &copy; 学生创新实践中心
        </div>
        <zy-loading :loadingShow="loadingShow"></zy-loading>
    </div>
</template>
<style lang="scss" scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        min-height:100vh;
    }
    .layout-logo{
        width: 100px;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 15px;
        left: 20px;
        color:white;
        line-height: 30px;
        text-align: center;
        font-size:20px;
        letter-spacing: 5px;
    }
    .layout-nav{
        width: 420px;
        margin: 0 auto;
    }
    .layout-content{
        width:1200px;
        margin-left:auto;
        margin-right:auto;
        margin-bottom:50px;
        text-align: center;
        margin-top:40px;
        background-color: #fff;
        .index-content{
            width:100%;
            background-image: url('../../assets/indexBg.jpg');
            background-size:cover;
            height:600px;
            position: relative;
            .title{
                position:absolute;
                font-size:40px;
                color:white;
                top:30px;
                left:40px;
                animation: anm1 .8s linear;
            }
        }
        @keyframes anm1{
            0%{
                opacity:0;
            }
            100%{
                opacity:1;
            }
        }
        .layout-page{
            margin-top:20px;
            margin-bottom:20px;
        }
        padding-bottom: 1px;;
    }
    .layout-copy{
        text-align: center;
        position:absolute;
        padding: 10px 0 20px;
        color: #9ea7b4;
        bottom:0;
        left:0;
        right:0;
    }
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
    }
</style>
<script>
    import config from '@/config/select.json';
    import loading from '@/components/loading.vue';
    export default {
        data(){
            return{
                content:{
                    nav:true,
                    seeExcel:false
                },
                loadingShow:false,
                columns:config.tableColumns,
                stdData:[],
                allData:[],
                totalPages:0
            }
        },
        created(){
            let userToken = sessionStorage.getItem('userToken');
            let userId = sessionStorage.getItem('userId');
            this.loadingShow = true;
            if(userToken==undefined||userToken==null){
                this.$Message.error('非法登陆，请重新登录');
                setTimeout(()=>{
                    this.$router.push({path:'/login'});
                },500);
            } else {
                let data = {
                    userId:userId,
                    userToken:userToken
                }
                this.axios.post(config.serverAddress+'/verify',data).then(res=>{
                    if(res.data.status){
                        this.loadingShow = false;
                    } else {
                        this.$Message.error('非法登陆，请重新登录');
                        setTimeout(()=>{
                            this.$router.push({path:'/login'});
                        },500);
                    }
                })
            }

        },
        methods:{
            onMenuSelect(name){
                if(name=='nav'){
                    this.content.nav = true;
                    this.content.seeExcel = false;
                } else if (name=='seeExcel'){
                    this.content.nav = !this.content.nav;
                    this.content.seeExcel = !this.content.seeExcel;
                    this.loadingShow = true;
                    this.getExcel(()=>{
                        setTimeout(()=>{
                            this.loadingShow = false;
                        },500);
                    });
                }
            },
            getExcel(callback){
                this.axios.get(config.serverAddress+'/stdData').then(res=>{
                    this.totalPages = res.data.length;
                    this.allData = res.data.stdDataArr;
                    this.stdData = this.allData.slice(0,10);
                    if(callback) callback();
                })
            },
            changePage(page){
                let start = 10*(page-1);
                this.stdData = this.allData.slice(start,start+10);
            }
        },
        components:{
            'zy-loading':loading
        }
    }
</script>