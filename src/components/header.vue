<template>
    <Row class='header'>
        <Col span="8">
            <i class="iconfont headerIcon" @click='isShowAside'></i>
            <Breadcrumb>
                <Breadcrumb-item href="/">
                    <Icon type="ios-home-outline" :size='16'></Icon>
                    首页
                </Breadcrumb-item>
                <Breadcrumb-item href="/components/breadcrumb">用户管理</Breadcrumb-item>
                <Breadcrumb-item>用户列表</Breadcrumb-item>
            </Breadcrumb>
        </Col>
        <Col span="16" class='headerRight'>
            <i class='headerUserName'>hi! {{userName}}　</i>
            <i class="iconfont headerIcon" :title='fullscreen?"取消全屏":"全屏"' @click='handleFullScreen'>{{fullscreen?'':''}}</i>
            <i class="iconfont headerIcon" title='设置'></i>
            <i class="iconfont headerIcon" title='退出' @click='logoutShow = true'></i>
        </Col>
        <Modal title="退出系统" v-model="logoutShow" :styles="{top: '40%'}" :closable="false" @on-ok="layout"
               @on-cancel="logoutShow = false">
            <p>确认要退出系统么?</p>
        </Modal>
    </Row>
</template>
<script lang='ts'>
    import Vue from 'vue'
    import Component from 'vue-class-component'
    import api from '@/util/api'
    import { clearSession, getSession } from '@/util/util'

    @Component({})
    export default class Header extends Vue {
        protected logoutShow: boolean = false
        protected fullscreen: boolean = false
        protected userName: string = getSession('sessionData').username

        protected handleFullScreen () {
            const docuMent: any = document
            const element: any = document.documentElement
            if (this.fullscreen) {
                if (docuMent.exitFullscreen) {
                    docuMent.exitFullscreen()
                } else if (docuMent.webkitCancelFullScreen) {
                    docuMent.webkitCancelFullScreen()
                } else if (docuMent.mozCancelFullScreen) {
                    docuMent.mozCancelFullScreen()
                } else if (docuMent.msExitFullscreen) {
                    docuMent.msExitFullscreen()
                }
            } else if (!this.fullscreen) {
                if (element.requestFullscreen) {
                    element.requestFullscreen()
                } else if (element.webkitRequestFullScreen) {
                    element.webkitRequestFullScreen()
                } else if (element.mozRequestFullScreen) {
                    element.mozRequestFullScreen()
                } else if (element.msRequestFullscreen) {
                    // IE11
                    element.msRequestFullscreen()
                }
            }
            this.fullscreen = !this.fullscreen
        }

        protected layout () {
            api.logout(this.$store.getters.getData.mobile, true).then(( respon: any ) => {
                if (respon.success === true) {
                    this.$Message.success(respon.message)
                    this.logoutShow = false
                    clearSession()
                    this.$router.push('/login')
                }
            })
        }

        // protected mounted () {
        // }

        protected isShowAside () {
            this.$store.dispatch('setAsideShow')
            console.log(this.$store.getters.getAsideShow)
        }
    }
</script>
<style type='text/scss' lang='scss' scoped>
    @import url('../style/index.scss');

    .header {
        height: 45px;
        background-color: #ffffff;
        width: 100%;
        line-height: 45px;
        font-size: 18px;
        box-sizing: border-box;
        .ivu-col {
            border: none;
            height: 45px;
            border: none;
            display: flex;
            align-items: center;
        }
        .ivu-breadcrumb {
            display: inline-block;
            margin-left: 15px;
        }
        .ivu-icon-ios-home-outline {
            vertical-align: text-bottom;
        }
        .headerRight {
            text-align: right;
            justify-content: flex-end;
            padding-right: 20px;
        }
        .headerIcon {
            height: 45px;
            line-height: 45px;
            width: 34px;
            display: inline-block;
            text-align: center;
            cursor: pointer;
            font-size: 22px;
            border: none;
            box-sizing: border-box;
        }
        .headerIcon:hover {
            color: #2d8cf0;
        }
        .headerUserName {
            font-size: 14px;
            height: 45px;
            line-height: 45px;
            display: inline-block;
            border: none;
            box-sizing: border-box;
            vertical-align: top;
            user-select: auto;
        }
    }
</style>
