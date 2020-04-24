<template>
    <div class="body">
        <div class="header">
            <p class="logo">LOGO</p>
        </div>
        <div class="container">
            <div class="leftBox">
                <at-menu mode="vertical" active-name="1">
                    <at-menu-item name="1"><i class="icon icon-life-buoy"></i>查看报名表格及导出</at-menu-item>
                </at-menu>
            </div>
            <div class="rightBox">
                <at-table :columns="columns1" :data="data1" stripe></at-table>
            </div>
        </div>
        <a-pagination @change="onChange" :total="50" />
        <div class="bottom">
            <p>@2020 by 学生创新实践中心(SIPC)</p>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .body{
        background-color: #F8FAFF;
        width:100%;
        height:100vh;
    }
    .header{
        width:100%;
        height:100px;
        background-color: #fff;
        >.logo{
            font-size:40px;
            float:left;
            margin-left:80px;
            line-height:100px;
        }
    }
    .container{
        box-shadow:0px 0px 10px #eff1f6;
        margin-top:20px;
        width:90%;
        margin-left:5%;
        background-color: #fff;
        display:flex;
        flex-direction: row;
        >.rightBox{
            width:70%;
            padding-top:20px;
            padding-bottom:20px;
        }
        >.leftBox{
            width:25%;
        }
    }
    .bottom{
        position: absolute;
        width:100%;
        text-align: center;
        bottom:0;
        line-height:80px;
        background-color: #fff;
        height:80px;
    }
</style>
<script>
    export default {
        data(){
            return {
            current:2,
            columns1: [
                {
                    title: '姓名',
                    key: 'name'
                },
                {
                    title: '学号',
                    key: 'stdId'
                },
                {
                    title: '专业',
                    key: 'major'
                },
                {
                    title: '班级',
                    key:'classNum'
                },
                {
                    title:'一志愿组织',
                    key:'firstWill'
                },
                {
                    title:'一志愿下属部门',
                    key:'firstWillBranch'
                },
                {
                    title:'一志愿加入原因',
                    key:'firstWillReason'
                },
                {
                    title:'二志愿',
                    key:'secondWill'
                },
                {
                    title:'二志愿下属部门',
                    key:'secondWillBranch'
                },
                {
                    title:'二志愿加入原因',
                    key:'secondWillReason'
                },
                {
                    title:'是否调剂',
                    key:'isDispensing'
                }
            ],
            data1:[
                {
                    name:'张三',
                    stdId:'20200001',
                    major:'法律',
                    classNum:'零班',
                    firstWill:'科技协会',
                    firstWillBranch:'科技协会',
                    firstWillReason:'爷就是牛逼，技术大牛,巴拉巴拉巴拉',
                    secondWill:'学生会',
                    secondWillBranch:'学习部',
                    secondWillReason:'爷就是学霸',
                    isDispensing:'否'
                },
                {
                    name:'李四',
                    stdId:'20200002',
                    major:'法律',
                    classNum:'零班',
                    firstWill:'科技协会',
                    firstWillBranch:'科技协会',
                    firstWillReason:'爷就是牛逼，技术大牛,巴拉巴拉巴拉',
                    secondWill:'学生会',
                    secondWillBranch:'学习部',
                    secondWillReason:'爷就是学霸',
                    isDispensing:'否'
                },
                {
                    name:'郭五',
                    stdId:'20200003',
                    major:'法律',
                    classNum:'零班',
                    firstWill:'科技协会',
                    firstWillBranch:'科技协会',
                    firstWillReason:'爷就是牛逼，技术大牛,巴拉巴拉巴拉',
                    secondWill:'学生会',
                    secondWillBranch:'学习部',
                    secondWillReason:'爷就是学霸',
                    isDispensing:'否'
                }
            ]
            }
        },
        methods:{

        },
        mounted:{

        }
    }
</script>

