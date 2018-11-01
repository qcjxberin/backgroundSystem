<template>
    <router-view/>
</template>
<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator'

    @Component({
        components: {}
    })
    export default class App extends Vue {
    }
</script>
<style type='text/scss' lang='scss' scoped>
    @import url('style/index.scss');
</style>

