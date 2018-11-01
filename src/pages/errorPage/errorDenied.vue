<template>
    <ErrorContent code="401" desc="Oh~~您没有浏览这个页面的权限~" :src="src"/>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator'
    // tslint:disable
    import error from '../../images/error-401.svg'
    import ErrorContent from './errorContent.vue'

    @Component({
        components: {
            ErrorContent
        }
    })
    export default class ErrorDenied extends Vue {
        protected src: any = error
    }
</script>
