<template>
	<button 
		:class="[
		'waves-effect waves-light',
		type ? type : '',
		size ? 'btn-' + size : '',
		color ? color : '',
		disabled ? 'disabled' : ''
		]"
		@click="handleClick"

	>
		<i
			v-if="icon"
			class="material-icons"
			:class="[
				pos ? pos : ''
			]"
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
	      	pos: {
	      		type: String,
	      		default: 'left'
	      	},
	      	disabled : {
	      		type: Boolean,
	      		default: false
	      	}
		},
		methods: {
			handleClick(e) {
				this.$emit('click', e)
			}
		}
	}
</script>