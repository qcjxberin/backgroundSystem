<template>
    <div class='wrapperMenu'>
        <h2 class='title'>{{titleTip}}</h2>
        <div>
            <Menu theme="light" class='sideBarMenu' accordion @on-select='setActive' :active-name="actives">
                <template v-if='moduleList' v-for='(item, index) in moduleList'>
                    <Submenu :name="item.iconfont" class='sideBarSubmenu' :key='index' @click=''>
                        <template slot="title" class='sidebarTitle' :title='item.content'>
                            <i class="iconfont">{{item.iconfont}}</i>{{item.content}}
                        </template>
                        <template v-if='item.child' v-for='(i, s) in item.child'>
                            <Menu-item :key='s' :name="i.content+ ',' + i.url">{{i.content}}</Menu-item>
                        </template>
                    </Submenu>
                </template>
            </Menu>
        </div>
    </div>
</template>
<script lang='ts' type='text/tsx'>
	import Vue from 'vue'
	import Component from 'vue-class-component'
	// import moment from 'moment'
	@Component({
		props: {
			moduleList: Array,
			titleTip: String
		},
		computed: {
			actives () {
				return this.$store.getters.getActives
			}
		}
	})
	export default class SideBar extends Vue {
		protected setActive (e: any) {
			const selectArray: any[] = this.$store.getters.getSelectArray.slice() || []
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
