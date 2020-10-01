<template lang="pug">
	div.-blog-list
		a(:href="blog.url" target="_blank").-mb24
			div.-view
				img(:src="viewImg(blog.id)" :alt="blog.title" :data-id="blog.id")
			p {{ blog.created_at | moment }}
			heading(:number="4" fontSize="ss").-title {{ blog.title}}
</template>
<script>
import moment from 'moment'
import Heading from '~/components/atom/Heading.vue'

export default {
	components: {
		Heading
	},
	props: {
		blog: {
			type: Object,
			default: ''
		}
	},
	filters: {
		moment: function (date) {
				return moment(date).format('YYYY.MM.DD')
		}
	},
	methods: {
		viewImg(id) {
			let url
			if (id === '22af9a1335b8adb80503') {
				url = require('~/assets/img/qiita-img-1.png')
			} else if (id === 'f32673ac7ea17270dc07') {
				url = require('~/assets/img/qiita-img-2.png')
			} else if (id === 'f370556e131ae3f3267a') {
				url = require('~/assets/img/qiita-img-3.png')
			} else if (id === '171986c9e4200469ee59') {
				url = require('~/assets/img/qiita-img-4.png')
			} else {
				url = require('~/assets/img/qiita-img-no-image.png')
			}
			return url
		}
	}
}
</script>
<style lang="sass" scoped>
.-blog-list
	a
		display: inline-block
		vertical-align: middle
		width: 100%
		text-decoration: none
		color: #222
		&:hover
			opacity: .8
		.-view
			border: solid 1px #ddd
			height: 150px
			overflow: hidden
			margin-bottom: 8px
			border-radius: 5px
			display: flex
			justify-content: center
			align-items: center
			& > img
				height: 120%
				display: block
		.-title
			margin-bottom: 8px
</style>
