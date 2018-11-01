<template>
    <ErrorContent code="500" desc="Oh~~鬼知道服务器经历了什么~" :src="src"/>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator'
    // tslint:disable
    import error from '../../images/error-500.svg'
    import ErrorContent from './errorContent.vue'

    @Component({
        components: {
            ErrorContent
        }
    })
    export default class ErrorServer extends Vue {
        protected src: any = error
    }
</script>
