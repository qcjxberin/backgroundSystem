<template>
    <Row class='header'>
        <Col span="8">
            <i class="iconfont headerIcon" @click='isShowAside'></i>
            <Breadcrumb>
                <Breadcrumb-item href="/">
                    <Icon type="ios-home-outline" :size='16'></Icon>
                    首页
                </Breadcrumb-item>
                <Breadcrumb-item :href="actives.split(',')[1]">{{openNameStr}}</Breadcrumb-item>
                <Breadcrumb-item :href="actives.split(',')[1]">{{actives.split(',')[0]}}</Breadcrumb-item>
            </Breadcrumb>
        </Col>
        <Col span="16" class='headerRight'>
            <i class='headerUserName'>hi! {{userName?userName:'好欣晴移动医疗'}}　</i>
            <i class="iconfont headerIcon" :title='fullscreen?"取消全屏":"全屏"' @click='screen()'>{{fullscreen?'':''}}</i>
            <!--<i class="iconfont headerIcon" title='设置'></i>-->
            <i class="iconfont headerIcon" title='退出' @click='logoutFlag = true'></i>
        </Col>
        <Modal title="退出系统" v-model="logoutFlag" :styles="{top: '40%'}" :closable="false" @on-ok="layout"
               @on-cancel="logoutFlag = false">
            <p>确认要退出系统么?</p>
        </Modal>
    </Row>
</template>
<script lang='ts'>
	import Vue from 'vue'
	import Component from 'vue-class-component'
	import api from '@/util/api'
	import {clearSession, haddleFullScreen} from '@/util/util' // getSession

	@Component({
		props: {
			moduleList: Array
		},
		computed: {
			actives () {
				return this.$store.getters.getActives
			}
		},
		watch: {
			actives () {
				(this as any).openName()
			}
		}
	})
	export default class Header extends Vue {
		protected logoutFlag: boolean = false
		protected fullscreen: boolean = false
		protected userName: string = ''
		protected openNameStr: string = ''

		protected openName () {
			const _this: any = (this as any)
			(this as any).moduleList.forEach((item: any) => {
				item.child.forEach((i: any, s: number) => {
					if (item.child[s].url === this.$store.getters.getActives.split(',')[1]) {
						_this.openNameStr = item.content
					}
				})
			})
		}

		protected mounted () {
			this.openName()
		}

		protected layout () {
			(api.logout(this.$store.getters.getData.mobile) as any).then((respon: any) => {
				this.$Message.success(respon.message)
				this.logoutFlag = false
				clearSession()
				this.$router.replace('/login')
			})
		}

		protected screen () {
			this.fullscreen = haddleFullScreen(this.fullscreen)
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
            min-width: 330px;
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
