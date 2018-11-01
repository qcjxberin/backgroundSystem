<template>
    <div>模块roles</div>
</template>
<script lang='ts'>
    import Vue from 'vue'
    import Component from 'vue-class-component'

    @Component({})
    export default class Roles extends Vue {
        protected year: any = new Date().getFullYear()
        protected mounted () {
            window.console.log('模块roles')
        }
    }
</script>
<style type='text/scss' lang='scss' scoped>
    @import url('../../style/index.scss');
</style>
