<template>
    <Layout class="home">
        <SideBar class='sidebar'></SideBar>
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
    import { Component, Vue } from 'vue-property-decorator'
    import Header from '@/components/header.vue'
    import TagsNav from '@/components/tagsNav.vue'
    import SideBar from '@/components/sideBar.vue'
    import Footer from '@/components/footer.vue'

    @Component({
        components: {
            Header,
            SideBar,
            TagsNav,
            Footer
        }
    })
    export default class Home extends Vue {
        constructor ( props: any ) {
            super(props)
        }
    }
</script>
<style type='text/scss' lang='scss' scoped>
    @import url('../style/index.scss');
    .home{
        height: 100%;
        display: flex;
        flex-direction: row;
        .main{
            flex: auto;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            width: 100%;
            height: 100%;
            background-color: #f9f9f9;
        .dashWaper{
            overflow: auto;
            height: calc(100% - 95px);
            padding-bottom: 50px;
        }
        }
    }
</style>
