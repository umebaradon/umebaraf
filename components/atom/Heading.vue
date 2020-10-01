<template lang="pug">
h1(v-if="number === 1" :class='getHeadingClass()')
	slot
h2(v-else-if="number === 2" :class='getHeadingClass()')
	slot
h3(v-else-if="number === 3" :class='getHeadingClass()')
	slot
h4(v-else-if="number === 4" :class='getHeadingClass()')
	slot
h5(v-else-if="number === 5" :class='getHeadingClass()')
	slot
h6(v-else-if="number === 6" :class='getHeadingClass()')
	slot
h1(v-else :class='getHeadingClass()')
	slot
</template>

<script>
export default {
	data: function() {
		return {
		}
	},
	props: {
		number: {
			type: Number,
			default: 1
		},
		fontSize: {
			type: String,
			default: 'l'
		}
	},
	methods: {
		getHeadingClass() {
			switch (this.fontSize) {
				case 'l':
					return 'heading-large'
				case 'm':
					return 'heading-middle'
				case 's':
					return 'heading-small'
				case 'ss':
					return 'heading-max-small'
				default:
					return ''
			}
		}
	}
}
</script>

<style lang="sass" scoped>
.heading-large
	font-size: 32px
	line-height: 1.4
	font-weight: bold
.heading-middle
	font-size: 24px
	line-height: 1.4
	font-weight: bold
.heading-small
	font-size: 20px
	line-height: 1.4
	font-weight: bold
.heading-max-small
	font-size: 16px
	line-height: 1.4
	font-weight: bold
</style>
