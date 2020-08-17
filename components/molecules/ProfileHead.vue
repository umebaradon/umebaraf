<template lang="pug">
	div
		div.profile-wrap
			div.-head-view
				img(src="~/assets/img/ume.jpeg" alt="梅の花")
			div.-auther-img
				img(src="~/assets/img/auther.png" alt="著作者")
			div.-sidebar-contents
				heading(:number="1" fontSize="m") Umebara Fumie
				p.-name 梅原 史江
				div
					p.-name-title UI/UX designer & Front-end engineer
					a(href="https://umebaraf.work") https://umebaraf.work
			div.-sns-logs
				ul
					li
						a(href="https://github.com/umebaradon")
							img(src="~/assets/img/github.png" alt="github" width="32")
					li
						a(href="https://qiita.com/f-umebara")
							img(src="~/assets/img/qiita.png" alt="qiita" width="32")
</template>

<script>
import Heading from '~/components/atom/Heading.vue'

export default {
	components: {
		Heading
	},
	props: {
	}
}
</script>

<style lang="sass" scoped>
.profile-wrap
	text-align: center
	position: relative
	.-head-view
		height: 180px
		margin-bottom: 40px
		overflow: hidden
		&>img
			display: block
			width: 100%
	.-auther-img
		height: 92px
		width: 92px
		border: solid 4px #fff
		border-radius: 50px
		overflow: hidden
		position: absolute
		top: 136px
		left: 50%
		right: 50%
		transform: translateX(-50%)
		img
			display: block
			width: 100%
	.-sidebar-contents
		padding: 16px
		.-name
			font-size: 16px
			font-weight: bold
			margin-bottom: 16px
		.-name-title,
		a
			color: #999
			font-weight: bold
			font-size: 14px
	.-sns-logs
		margin: 0 16px 16px 16px
		padding-bottom: 24px
		border-bottom: solid 1px #ddd
		ul
			display: flex
			justify-content: center
			align-items: center
			li
				width: 50px
				opacity: .4

</style>
