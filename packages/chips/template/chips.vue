<template>
	<div class="chip">
	    <img :src="[src]"
	    	 :alt="[
	    		alt ? alt : ''
	    	  ]" 
	    	  v-if="src"
	    >
	    <slot></slot>
	    <i class="close material-icons" v-if="close">close</i>
  	</div>
</template>

<script>
	export default {
		name: 'm-chip',
		props: {
			src: String,
			alt: {
				type: String,
				default: 'A image'
			},
			close: {
				type: Boolean,
				default: false
			}
		}
	}
</script>