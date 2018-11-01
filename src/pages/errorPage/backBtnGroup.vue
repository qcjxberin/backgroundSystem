<template>
    <div>
        <Button size="large" type="text" @click="backHome">返回首页</Button>
        <Button size="large" type="text" @click='backPrev'>返回上一页({{ second }}s)</Button>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import Component from 'vue-class-component'

    @Component({})
    export default class EackBtnGroup extends Vue {
        protected second: number = 5
        protected timer: any = null

        protected backHome () {
            this.$router.replace({path: '/'})
        }

        protected backPrev () {
            this.$router.go(-1)
        }

        protected mounted () {
            this.timer = setInterval(() => {
                if (this.second === 0) this.backPrev()
                else this.second--
            }, 1000)
        }

        protected beforeDestroy () {
            clearInterval(this.timer)
        }
    }
</script>
<style type='text/scss' lang='scss' scoped>

</style>
