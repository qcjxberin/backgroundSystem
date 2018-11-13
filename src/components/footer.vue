<template>
    <div class='footer'>北京好欣晴移动医疗科技有限公司 <strong>Copyright &copy; {{year}}</strong></div>
</template>
<script lang='ts'>
    import Vue from 'vue'
    import Component from 'vue-class-component'

    @Component({})
    export default class Footer extends Vue {
        protected year: any = new Date().getFullYear()
        protected mounted () {
            window.console.log('footer')
        }
    }
</script>
<style type='text/scss' lang='scss' scoped>
    @import url('../style/index.scss');
    /*底部区域*/
    .footer {
        width: 100%;
        height: 45px;
        line-height: 45px;
        position: fixed;
        bottom: 0px;
        text-align: center;
        background-color: #f9f9f9;
    }
</style>
