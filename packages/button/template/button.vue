<template>
	<button 
		:class="[
		'waves-effect waves-light',
		type ? type : '',
		size ? 'btn-' + size : '',
		color ? color : ''
		]"
	>
		<i
			v-if="icon"
			class="material-icons" 
		>
		{{icon}}
		</i>
		<span v-if="$slots.default"><slot></slot></span>
	</button>
</template>

<script>
	export default {
		name: 'm-button',
		props: {
			type: {
				type: String,
				default: 'btn'
			},
			size: String,
			color: String,
			icon: {
	        	type: String,
	        	default: ''
	      	},
		}
	}
</script>