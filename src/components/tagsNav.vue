<template>
    <div class='tagsNav-wrapper'>
        <div class="btn leftBtn">
            <i class="iconfont tagsIcon icon-left" title='左'>&#xe675;</i>
        </div>
        <div class="tagsNav">
            <div class="tagsList">
                <Tag type="dot" closable :color="actives === item.split(',')[1] ?'primary':''"
                     v-for="(item, index) in selectArray" @click="getTo(item.split(',')[1])" :key="index">
                    {{item.split(',')[0]}}
                </Tag>
            </div>
        </div>
        <div class="btn rightBtn">
            <i class="iconfont tagsIcon icon-xiangyou" title='右'>&#xe601;</i>
        </div>
        <Dropdown>
            <Button type="primary">
                标签选项
            </Button>
            <Dropdown-menu slot="list">
                <Dropdown-item>关闭所有</Dropdown-item>
                <Dropdown-item>关闭其他</Dropdown-item>
            </Dropdown-menu>
        </Dropdown>
    </div>
</template>
<script lang='ts'>
	import Vue from 'vue'
	import Component from 'vue-class-component'

	@Component({
		// props: {
		// 	selectArray: Array,
		// 	Actives: String
		// }
		watcher: {
			'this.$store.getters.getSelectArray' (e) {
				this.selectArray = e
			},
			'this.$store.getters.getActives' (e) {
				this.actives = e
			}
		}
	})
	export default class TagsNav extends Vue {
		protected actives: string = this.$store.getters.getActives
		protected selectArray: any[] = this.$store.getters.getSelectArray || []

		protected mounted () {
			window.console.log('TagsNav')
		}

		protected getTo (e: string) {
			this.$router.replace(e)
		}
	}
</script>
<style type='text/scss' lang='scss' scoped>
    @import url('../style/index.scss');
    /*底部区域*/
    .tagsNav-wrapper {
        height: 40px;
        width: 100%;
        background-color: #F0F0F0;
        position: relative;
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
        .ivu-dropdown {
            position: absolute;
            right: 5px;
            height: 40px;
            line-height: 40px;
            z-index: 999;
            background-color: #F0F0F0;
        }
        .tagsNav {
            width: calc(100% - 56px - 80px);
            display: inline-block;
            overflow-y: hidden;
            overflow-x: scroll;
            height: 40px;
            line-height: 40px;
            margin-left: 30px;
            margin-right: 86px;
            .tagsList {
                height: calc(100% - 1px);
                display: inline-block;
                padding: 1px 4px 0;
                position: absolute;
                overflow: visible;
                white-space: nowrap;
                -webkit-transition: left .3s ease;
                transition: left .3s ease;
            }
            .ivu-tag {
                height: 34px;
                line-height: 34px;
                margin-bottom: 5px;
            }
        }
    }
</style>
