<template>
    <div>模块account</div>
</template>
<script lang='ts'>
    import Vue from 'vue'
    import Component from 'vue-class-component'

    @Component({})
    export default class Account extends Vue {
        protected year: any = new Date().getFullYear()
        protected mounted () {
            window.console.log('模块account')
        }
    }
</script>
<style type='text/scss' lang='scss' scoped>
    @import url('../../style/index.scss');
</style>
