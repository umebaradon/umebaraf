<template lang="pug">
  div.-experience
    p.-years {{ years }}
    p.-title {{ title }}
    slot
</template>
<script>
export default {
  props: {
		years: {
			type: String,
			default: ''
    },
		title: {
			type: String,
			default: ''
    }
	},
}
</script>
<style lang="sass" scoped>
.-experience
  border: solid 1px #ddd
  border-radius: 5px
  padding: 16px
  .-years
    color: #ff5c9d
    font-weight: bold
    margin-bottom: 8px
  .-title
    font-weight: bold
    margin-bottom: 8px
</style>
