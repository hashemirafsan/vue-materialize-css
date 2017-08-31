<template>
		<span 
			v-if="$slots.default" 
			class="badge"
			:class="[
				color ? color : ''
			]"
		>
			<slot></slot>
		</span>
</template>

<script>
	export default {
		name: 'm-badge',
		props: {
			color : {
				type: String,
				default : 'teal'
			}
		}
	}
</script>