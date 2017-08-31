<template>
	<a :href="[
			url ? url : ''
		]" 
		class="breadcrumb"
	>
		<span 
			v-if="$slots.default" 
			:class="[
				color ? 'f-c-' + color : ''
			]"
		>
			<slot></slot>
		</span>
	</a>
</template>

<script>
	export default {
		name: 'm-breadcrumb',
		props: {
			url: {
				type: String,
				default: '#!'
			},
			color: {
				type: String,
				default: 'white'
			}
		}
	}
</script>