<template>
	<div id="app">
		<transition mode='out-in'>
			<router-view/>
		</transition>
	</div>
</template>

<script>
	export default {
		name: 'App',
		components: {

		}
	}
</script>

<style>
	.v-enter,
	.v-leave-to {
		opacity: 0;
		transform: translateX(100px)
	}
	
	.v-enter-active,
	.v-leave-active {
		transition: all 0.5s ease;
	}
</style>