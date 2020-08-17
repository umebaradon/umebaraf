<template lang="pug">
  div.-workbox
    p.-years {{ years }}
    p.-title {{ title }}
    div.-contents
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
.-workbox
  .-years
    color: #ff5c9d
    font-weight: bold
    margin-bottom: 8px
  .-title
    font-weight: bold
    margin-bottom: 16px
  .-contents
    border: solid 1px #ddd
    border-radius: 5px
    padding: 16px
</style>
