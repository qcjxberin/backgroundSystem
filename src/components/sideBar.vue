<template>
    <div class='wrapperMenu'>
        <h2 class='title'>后台管理系统</h2>
        <Menu theme="light" class='sideBarMenu' accordion @on-select='setActiveName'>
            <template v-if='moduleList' v-for='(item, index) in moduleList'>
                <Submenu :name="index" class='sideBarSubmenu' :key='index' @click=''>
                    <template slot="title" class='sidebarTitle' :title='item.content'>
                        <i class="iconfont">{{item.iconfont}}</i>
                        {{item.content}}
                    </template>
                    <template v-if='item.child' v-for='(sitem, sindex) in item.child'>
                        <Menu-item :key='index + "" + sindex' :name="sitem.url">
                            {{sitem.content}}
                        </Menu-item>
                    </template>
                </Submenu>
            </template>
        </Menu>
    </div>
</template>
<script lang='ts'>
    import Vue from 'vue'
    import Component from 'vue-class-component'
    // import { isEmpty } from '@/unit/unit'

    @Component({})
    export default class SideBar extends Vue {
        protected moduleList: any[] = [
            {
                content: '用户管理',
                iconfont: '',
                child: [
                    {
                        content: '用户列表',
                        url: '/users'
                    }
                ]
            },
            {
                content: '角色管理',
                iconfont: '',
                child: [
                    {
                        content: '角色列表',
                        url: '/roles'
                    }
                ]
            },
            {
                content: '账户管理',
                iconfont: '',
                child: [
                    {
                        content: '账户列表',
                        url: '/account'
                    }
                ]
            },
            {
                content: '权限管理',
                iconfont: '',
                child: [
                    {
                        content: '权限列表',
                        url: '/jurisdiction'
                    }
                ]
            }, {
                content: '结算管理',
                iconfont: '',
                child: [
                    {
                        content: '结算列表',
                        url: '/settlement'
                    }
                ]
            }, {
                content: '版本管理',
                iconfont: '',
                child: [
                    {
                        content: '版本列表',
                        url: '/version'
                    }
                ]
            }, {
                content: '意见反馈',
                iconfont: '',
                child: [
                    {
                        content: '反馈列表',
                        url: '/feedback'
                    }
                ]
            }
        ]
        protected activeName: any = ''
        protected _routerList: string[] = []

        protected setActiveName ( e: any ) {
            this.activeName = e
            let flag = false
            this._routerList.map(( i, index ) => {
                if (i === e) {
                    flag = true
                }
            })
            if (!flag) {
                this._routerList.push(e)
            }
            this.$store.dispatch('setRouterList', {
                routerList: this._routerList.slice()
            })
            this.$router.push(e)
        }

        protected mounted () {
            this._routerList = this.$store.getters.getRouterList.slice()
        }

    }
</script>
<style type='text/scss' lang='scss'>
    @import url('../style/index.scss');

    .wrapperMenu {
        height: 100%;
        width: 223px;
        overflow: hidden;
        transition: all 0.2s ease-in-out;
        flex: 0 0 223px;
        background-color: #f3f3f3;
        .sideBarMenu {
            height: 100%;
            width: 240px;
            min-width: 240px;
            max-width: 240px;
            overflow-y: scroll;
            background-color: #f3f3f3;
            .ivu-menu-submenu-title {
                padding-left: 60px;
            }
            .ivu-menu-item {
                padding-left: 85px !important;
                font-size: 13px;
            }
        }
        .sideBarMenu:after {
            width: 0px;
        }
        .title {
            height: 45px;
            text-align: center;
            margin: 0 auto;
            line-height: 45px;
            font-size: 16px;
        }
    }
</style>
