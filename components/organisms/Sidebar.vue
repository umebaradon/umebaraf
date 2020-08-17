<template lang="pug">
	div
		profile-head
		menu-list
		small © 2020 umebaraf
</template>
<script>
import ProfileHead from '~/components/molecules/ProfileHead.vue'
import MenuList from '~/components/molecules/MenuList.vue'

export default {
	components: {
		ProfileHead,
		MenuList
	},
	props: {
	}
}
</script>
<style lang="sass" scoped>
.-sidebar
  small
    position: absolute
    left: 0
    bottom: 0
    text-align: center
    font-size: 12px
    color: #a4a4a4
    border-top: solid 1px #ddd
    margin: 16px
    padding-top: 16px
    box-sizing: border-box
    width: 90%
    @include sp_view
      display: none
</style>
