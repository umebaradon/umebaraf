<template lang="pug">
  div.conents-wrapper
    heading(:number="3" fontSize='m') {{ title }}
    slot
</template>

<script>
import Heading from '~/components/atom/Heading.vue'

export default {
  components: {
    Heading
  },
  props: {
		title: {
			type: String,
			default: ''
    }
	},
}
</script>
<style lang="sass" scoped>
  .conents-wrapper
    border: solid 2px #f4f4f4
    padding: 24px
    background-color: #fff
    h3
      margin-bottom: 16px
</style>
