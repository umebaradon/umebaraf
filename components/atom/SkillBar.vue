<template lang="pug">
  div.-skill
    div.-head
      p.-name {{ skillName }}
      p.-years {{ skillYears }}
        span(v-if="skillYears === 5") 年以上
        span(v-else-if="skillYears === 1") 年未満
        span(v-else) 年
    div.-bar-base
      div.-skill-bar(:style="{width: skillProportion+'%'}")
</template>
<script>
export default {
  props: {
		skillName: {
			type: String,
			default: ''
    },
		skillYears: {
			type: Number,
			default: ''
    },
		skillProportion: {
			type: Number,
			default: '0'
    }
	},
}
</script>
<style lang="sass" scoped>
.-skill
  margin-bottom: 16px
  .-head
    display: flex
    justify-content: space-between
    width: 100%
    .-name
      font-weight: 500
    .-years
      font-size: 12px
  .-bar-base
    width: 100%
    height: 10px
    margin-top: 8px
    background-color: #e4e4e4
    border-radius: 5px
    overflow: hidden
    .-skill-bar
      background-color: #ff5c9d
      height: 10px
</style>
