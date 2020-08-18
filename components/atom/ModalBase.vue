<template lang="pug">
	transition(name="modal")
		div(v-if="isActive").base-modal
			div.-contents
				header.-mb24
					heading(:number="2" fontSize="l").-title {{ modalTitle }}
				slot(name="contents")
				footer
			div.-modal-head
				div.-auther-img
					img(src="~/assets/img/auther.png" alt="著作者")
				heading(:number="2" fontSize="s").-auther Umebara Fumie / Works
			button.-close(@click="closeModal")
				img(src="~/assets/svg/cross-w.svg" width="32" height="auto" alt="クロス")
			div.-overlay(@click.self="closeModal")
</template>

<script>
import DoubleButton from '~/components/atom/DoubleButton.vue'
import Heading from '~/components/atom/Heading.vue'

import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'

export default {
	components: {
		DoubleButton,
		Heading
	},
	props: {
		isActive: {
			type: Boolean,
			default: false
		},
		modalTitle: {
			type: String,
			default: ''
		}
	},
	methods: {
		closeModal() {
			this.$emit('close')
			clearAllBodyScrollLocks()
		}
	},
	mounted() {
		const modal = document.querySelector('.base-modal')
		disableBodyScroll(modal)
	}
}

</script>
<style lang="sass" scoped>
.base-modal
	overflow-y: auto
	box-sizing: border-box
	position: fixed
	top: 0
	right: 0
	bottom: 0
	height: 100%
	width: 100%
	z-index: 2
	.-contents
		z-index: 3
		background: #fff
		margin: 0 auto
		position: relative
		top: 80px
		@include pc_view
			width: calc(100% - 110px)
			padding: 32px 40px
		@include sp_view
			width: calc(100% - 60px)
			padding: 24px
	.-modal-head
		position: fixed
		z-index: 2
		display: flex
		height: 70px
		color: #fff
		top: 6px
		left: 50%
		transform: translateY(0%) translateX(-50%)
		@include pc_view
			width: calc(100% - 110px)
			padding: 10px 0
		@include sp_view
			width: calc(100% - 60px)
			padding: 10px 32px 10px 0
		.-auther-img
			height: 48px
			width: 48px
			border: solid 2px #fff
			border-radius: 50px
			overflow: hidden
			margin-right: 8px
			img
				display: block
				width: 100%
		.-auther
			flex: 5
			@include pc_view
				line-height: 2em
	.-close
		position: fixed
		right: 20px
		top: 24px
		z-index: 3
.-overlay
	z-index: 1
	position: fixed
	top: 0
	left: 0
	width: 100%
	height: 100%
	background-color: rgba(0, 0, 0, 0.85)
	display: flex
	align-items: center
	justify-content: center
.modal
	&-enter
		opacity: 0
	&-enter-active
		transition: .4s
	&-leave-action
		transition: .4s
	&-leave-to
		opacity: 1
</style>
