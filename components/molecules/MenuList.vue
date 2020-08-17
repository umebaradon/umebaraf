<template lang="pug">
	div
		ul.menu-list
			li
				nuxt-link(v-scroll-to="'#about'", to) ABOUT
				ul
					li
						nuxt-link(v-scroll-to="'#about-1'", to) プロフィール
					li
						nuxt-link(v-scroll-to="'#about-2'", to)  スキル
					li
						nuxt-link(v-scroll-to="'#about-3'", to) 経歴
					li
						nuxt-link(v-scroll-to="'#about-4'", to) ブログ
			li
				nuxt-link(v-scroll-to="'#works'", to) WORKS
				ul
					li
						nuxt-link(v-scroll-to="'#works-1'", to) ウェブ
					li
						nuxt-link(v-scroll-to="'#works-2'", to) 紙
</template>
<script>
</script>
<style lang="sass" scoped>
.menu-list
	padding: 16px
	& > li
		font-weight: bold
		@include pc_view
			font-size: 24px
			line-height: 2em
			margin-bottom: 40px
		@include sp_view
			font-size: 16px
		ul
			@include sp_view
				display: flex
				justify-content: flex-start
			li
				font-size: 16px
				@include sp_view
					width: 25%
					text-align: center
					font-size: 14px
					a
						display: inline-block
						vertical-align: middle
						padding: 16px 0
	a
		text-decoration: none
		color: #222
		&:hover
			cursor: pointer
			opacity: .8
</style>
