<template>
    <div class="tagsNav">
        <div class='tagsNav-wrapper'>
            <div class="btn leftBtn">
                <i class="iconfont tagsIcon icon-left" title='左'>&#xe675;</i>
            </div>
            <div class="tagsNav">
                <div v-if="selectArray.length !== 0" class="tagsList">
                    <a v-for="(item, index) in selectArray"
                       class="selectActives">
                        <Tag type="dot" checkable closable @click.native="selectActives(item)"
                             :color="getActives.split(',')[1] === item.split(',')[1] ?'primary':''"
                             :key="index"
                             @on-close="(getActives.split(',')[1] !== item.split(',')[1]&&selectArray.length!==1)&&handleClose(item)">
                            {{item.split(',')[0]}}
                        </Tag>
                    </a>
                </div>
            </div>
            <div class="btn rightBtn">
                <i class="iconfont tagsIcon icon-xiangyou" title='右'>&#xe601;</i>
            </div>
        </div>
        <Dropdown trigger="click" @on-click="closeDropdown">
            <Button type="primary">
                标签选项
            </Button>
            <Dropdown-menu slot="list">
                <Dropdown-item name='关闭所有'>关闭所有</Dropdown-item>
                <Dropdown-item name='关闭其他'>关闭其他</Dropdown-item>
            </Dropdown-menu>
        </Dropdown>
    </div>
</template>
<script lang='ts'>
	import Vue from 'vue'
	import Component from 'vue-class-component'

	@Component({
		computed: {
			selectArray () {
				return this.$store.getters.getSelectArray
			},
			getActives () {
				return this.$store.getters.getActives
			}
		}
	})
	export default class TagsNav extends Vue {
		protected selectActives (name: any) {
			this.$store.dispatch('setActives', {
				actives: name
			})
			this.$router.push(name.split(',')[1])
		}

		protected closeDropdown (name: string) {
			if (name === '关闭所有') {
				this.$store.dispatch('setSelectArray', {
					selectArray: []
				})
			} else if (name === '关闭其他') {
				this.$store.dispatch('setSelectArray', {
					/*tslint:disable-next-line*/
					selectArray: this.$store.getters.getSelectArray.slice().splice(this.$store.getters.getSelectArray.indexOf(this.$store.getters.getActives), 1)
				})
			}
		}

		protected handleClose (name: any) {
			const arrList: any[] = this.$store.getters.getSelectArray.slice()
			const actives: string = this.$store.getters.getActives
			const curIndex = arrList.indexOf(actives)
			const tarIndex = arrList.indexOf(name)
			if (arrList.length === 1) {
				return
			}
			if (curIndex === tarIndex && arrList.length > 0) {
				if (tarIndex < arrList.length) {
                  (actives as any) = arrList[curIndex + 1]
				} else {
                  (actives as any) = arrList[curIndex - 1]
				}
			}
			arrList.splice(arrList.indexOf(name), 1)
			this.$store.dispatch('setSelectArray', {
				selectArray: arrList
			})
			this.$store.dispatch('setActives', {actives})
		}
	}
</script>
<style type='text/scss' lang='scss' scoped>
    @import url('../style/index.scss');
    /*tag*/
    .tagsNav {
        position: relative;
        .tagsNav-wrapper {
            height: 40px;
            width: 100%;
            background-color: #F0F0F0;
            position: relative;
            overflow: hidden;
            .btn {
                position: absolute;
                width: 28px;
                height: 38px;
                line-height: 40px;
                top: 0px;
                background: #fff;
                margin-top: 1px;
            }
            .tagsIcon {
                height: 38px;
                width: 28px;
                line-height: 38px;
                display: inline-block;
                text-align: center;
                cursor: pointer;
                font-size: 16px;
                border: none;
                box-sizing: border-box;
            }
            .tagsIcon:hover {
                color: #2d8cf0;
            }
            .leftBtn {
                left: 0px;
            }
            .rightBtn {
                right: 88px;
            }
            .tagsNav {
                width: calc(100% - 56px - 80px);
                display: inline-block;
                overflow-y: hidden;
                height: 40px;
                line-height: 40px;
                margin-left: 30px;
                margin-right: 86px;
                overflow-x: scroll;
                height: 54px;
                .tagsList {
                    display: inline-block;
                    padding: 1px 4px 0;
                    overflow-x: scroll;
                    overflow-y: hidden;
                    white-space: nowrap;
                    -webkit-transition: left .3s ease;
                    transition: left .3s ease;
                    .selectActives {
                        display: inline-block;
                        width: 126px;
                        height: 100%;
                    }
                }
                .ivu-tag {
                    height: 34px;
                    line-height: 34px;
                    margin-bottom: 5px;
                }
            }
        }
        .ivu-dropdown {
            position: absolute;
            right: 5px;
            top: 0px;
            height: 40px;
            line-height: 40px;
            background-color: #F0F0F0;
        }
    }
</style>
