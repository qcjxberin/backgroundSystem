<template>
    <ErrorContent code="404" desc="Oh~~您的页面好像飞走了~" :src="src"/>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator'
    // tslint:disable
    import error from '../../images/error-404.svg'
    import ErrorContent from './errorContent.vue'

    @Component({
        components: {
            ErrorContent
        }
    })
    export default class ErrorNotFind extends Vue {
        protected src: any = error
    }
</script>
