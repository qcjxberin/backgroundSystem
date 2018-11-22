<template>
    <Layout class="home">
        <SideBar v-if=moduleList class='sidebar' :moduleList='moduleList' :titleTip='titleTip'></SideBar>
        <div class="main">
            <Header></Header>
            <TagsNav></TagsNav>
            <div class="dashWaper">
                <router-view/>
            </div>
        </div>
        <Footer></Footer>
    </Layout>
</template>

<script lang="ts">
	import {Component, Vue} from 'vue-property-decorator'
	import Header from '@/components/header.vue'
	import TagsNav from '@/components/tagsNav.vue'
	import SideBar from '@/components/sideBar.vue'
	import Footer from '@/components/footer.vue'
	import moduleList from '@/assets/js/modules'

	@Component({
		components: {
			Header,
			SideBar,
			TagsNav,
			Footer
		}
	})
	export default class Home extends Vue {
		constructor (props: any) {
			super(props)
		}

		protected titleTip = '后台管理系统'
		protected moduleList: any = moduleList  // 获取左侧的导航模块
		// protected actives: string = this.$store.getters.getActives
		// protected selectArray: any[] = this.$store.getters.getSelectArray || []
	}
</script>
<style type='text/scss' lang='scss' scoped>
    @import url('../style/index.scss');

    .home {
        height: 100%;
        display: flex;
        flex-direction: row;
        .main {
            flex: auto;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            width: 100%;
            height: 100%;
            background-color: #f9f9f9;
            .dashWaper {
                overflow: auto;
                height: calc(100% - 95px);
                padding-bottom: 50px;
            }
        }
    }
</style>
