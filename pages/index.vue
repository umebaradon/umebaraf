<template lang="pug">
	div
		div.portfolio
			div.-main-wrap
				sidebar.-sidebar
				div.-main-contents
					heading(:number="2" fontSize="l" id="about").-title ABOUT
					content-base(title="プロフィール" id="about-1").-mb24
						profile
					content-base(title="スキル" id="about-2").-mb24
						skills
					content-base(title="経歴" id="about-3").-mb24
						experience
					content-base(title="技術ブログ" id="about-4").-mb40
						blog
					heading(:number="2" fontSize="l" id="works").-title WORKS
					content-base(title="Web" id="works-1").-mb40
						works-web
					content-base(title="紙" id="works-2")
						works-paper
					small © 2020 umebaraf
</template>

<script>
import Heading from '~/components/atom/Heading.vue'
import ContentBase from '~/components/atom/ContentBase.vue'
import Sidebar from '~/components/organisms/Sidebar.vue'
import Profile from '~/components/molecules/Profile.vue'
import Skills from '~/components/molecules/Skills.vue'
import Experience from '~/components/molecules/Experience.vue'
import WorksWeb from '~/components/molecules/WorksWeb.vue'
import WorksPaper from '~/components/molecules/WorksPaper.vue'
import Blog from '~/components/molecules/Blog.vue'

export default {
	data: function() {
		return {
		}
	},
	methods: {
	},
	computed: {
	},
	components: {
		ContentBase,
		Heading,
		Sidebar,
		Profile,
		Skills,
		Experience,
		WorksWeb,
		WorksPaper,
		Blog
	}
}
</script>

<style lang="sass" scoped>
.portfolio
	background-color: #f4f4f4
	.-main-wrap
		@include pc_view
			display: flex
		.-sidebar
			background-color: #fff
			overflow: hidden
			z-index: 2
			@include pc_view
				position: fixed
				left: 0
				flex: 1
				max-width: 325px
				height: 100vh
				box-shadow: -12px 0px 4px 14px rgba(0, 0, 0, 0.1)
			@include sp_view
				box-shadow: 0px 0px 4px 4px rgba(0, 0, 0, 0.1)
		.-main-contents
			flex: 2
			padding: 16px
			margin: 0 auto
			@include pc_view
				padding-left: 341px
				max-width: 1350px
			@include sp_view
			h2.-title
				margin-bottom: 24px
				&::after
					content: ''
					width: 60px
					border-bottom: solid 4px
					display: block
					padding-top: 8px
			small
				@include pc_view
					display: none
				@include sp_view
					text-align: center
					font-size: 12px
					color: #a4a4a4
					display: block
					margin: 16px
					padding-top: 16px
					box-sizing: border-box
					width: 100%
</style>
