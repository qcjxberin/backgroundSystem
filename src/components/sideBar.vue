<template>
    <div :class="!siderBarFlag? 'wrapperMenu':'wrapperMenuMini'">
        <h2 class='title' v-show="!siderBarFlag">{{titleTip}}</h2>
        <div :class="!siderBarFlag? 'wrapper':'wrapperMini'">
            <Menu v-if="!siderBarFlag" theme="light" class='sideBarMenu' accordion @on-select='setActive'
                  :active-name="actives"
                  :open-names="openNameStr" ref='sideBar'>
                <template v-show='moduleList' v-for='(item, index) in moduleList'>
                    <Submenu :name="item.content" class='sideBarSubmenu' :key='index'>
                        <template slot="title" class='sidebarTitle' :title='item.content'>
                            <i class="iconfont">{{item.iconfont}}</i>{{item.content}}
                        </template>
                        <template v-if='item.child' v-for='(i, s) in item.child'>
                            <Menu-item :key='s' :name="i.content+ ',' + i.url">{{i.content}}</Menu-item>
                        </template>
                    </Submenu>
                </template>
            </Menu>
            <Menu v-if="siderBarFlag" theme="light" class='sideBarMenuMini' accordion @on-select='setActive'
                  :active-name="actives"
                  :open-names="openNameStr" ref='sideBar' width='50PX'>
                <template v-show='moduleList' v-for='(item, index) in moduleList'>
                    <MenuItem :name="item.content" class='sideBarSubmenu' :key='index'>
                        <i class="iconfont">{{item.iconfont}}</i>
                        <!--<template v-if='item.child' v-for='(i, s) in item.child'>-->
                        <!--<Menu-item :key='s' :name="i.content+ ',' + i.url">{{i.content}}</Menu-item>-->
                        <!--</template>-->
                    </MenuItem>
                </template>
            </Menu>
        </div>
    </div>
</template>
<script lang='ts' type='text/tsx'>
	import Vue from 'vue'
	import Component from 'vue-class-component'
	import {isEmpty} from '@/util/util'

	@Component({
		props: {
			moduleList: Array,
			titleTip: String
		},
		computed: {
			actives () {
				return this.$store.getters.getActives
			},
			siderBarFlag () {
				return this.$store.getters.getSiderBarFlag
			}
		},
		watch: {
			actives () {
				(this as any).openName()
			}
		}
	})
	export default class SideBar extends Vue {
		protected openNameStr: any[] = []

		protected mounted () {
			this.openName()
			this.$nextTick(() => {
				(this.$refs.sideBar as any).updateOpened()
			})
		}

		protected openName () {
			// @ts-ignore
			(this as any).moduleList.forEach((item: any) => {
				item.child.forEach((i: any, s: number) => {
					if (item.child[s].url === this.$store.getters.getActives.split(',')[1]) {
						this.openNameStr = [item.content]
					}
				})
			})
			this.$nextTick(() => {
				(this.$refs.sideBar as any).updateOpened()
			})
		}

		protected setActive (e: any) {
			/* tslint:disable-next-line*/
			const selectArray: any[] = isEmpty(this.$store.getters.getSelectArray) ? [] : this.$store.getters.getSelectArray.slice()
			this.$router.push(e.split(',')[1])
			selectArray.push(e)
			const getselectArray: any[] = selectArray.filter((item: any, index: number, self: any) => {
				return self.indexOf(item) === index
			})
			this.$store.dispatch('setSelectArray', {
				selectArray: getselectArray
			})
			this.$store.dispatch('setActives', {
				actives: e
			})
		}
	}
</script>
<style type='text/scss' lang='scss'>
    @import url("../style/index.scss");

    .wrapperMenu {
        height: 100%;
        width: 240px;
        overflow: hidden;
        transition: all 0.2s ease-in-out;
        flex: 0 0 223px;
        background-color: #f3f3f3;
        z-index: 12;
        .wrapper {
            width: 240px;
            height: 100%;
            overflow: hidden;
        }
        .sideBarMenu {
            height: calc(100% - 30px);
            width: 100%;
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

    .wrapperMenuMini {
        height: 100%;
        overflow: hidden;
        transition: all 0.2s ease-in-out;
        flex: 0 0 50px;
        background-color: #f3f3f3;
        z-index: 11;
        .wrapperMini {
            width: 50px;
            height: 100%;
            overflow: hidden;
            .sideBarMenuMini {
                width: 50px;
                background-color: #f3f3f3;
                height: 100%;
                padding-top: 44px;
                .sideBarSubmenu {
                    padding: 14px 17px;
                }
            }
        }
    }
</style>
