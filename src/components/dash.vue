<template>
    <div class='dash'>content</div>
</template>
<script lang='ts'>
	import Vue from 'vue'
	import Component from 'vue-class-component'

	@Component({})
	export default class Dash extends Vue {
		protected mounted () {
			window.console.log('Dash')
		}
	}
</script>
<style type='text/scss' lang='scss' scoped>
    @import url('../style/index.scss');
    /*底部区域*/
    .dash {
        font-size: 38px;
        text-align: center;
    }

</style>
