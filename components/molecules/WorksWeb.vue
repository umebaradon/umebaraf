<template lang="pug">
	div
		div.-mb40
			p 比較的新しい実績を中心にご紹介
		div.-mb40
			div.-works(v-for="work in works")
				work-box.-mb24(:years="work.years" :title="work.title")
					div.-main-view(@click.prevent="openModal(work.number)")
						img(:src="require('~/assets/img/work-img-'+work.number+'.png')" :alt="work.title")
		template(v-for="(item,index) in worksContents")
			div(v-if="getModalNumber === index+1")
				modal-base(:isActive="isModalActive" @close="closeModal" :modalTitle="item.title").-modal
					template(v-slot:contents)
						p.-years {{ item.years }}
						p.-mb40 {{ item.text }}
						div.-toll.-mb40
							heading(:number="4" fontSize="ss") 【制作ツール/技術】
							p.-mb16 ・{{ item.tool }}
							heading(:number="4" fontSize="ss") 【制作期間】
							p.-mb16 ・{{ item.term }}
						div.-work-img
							template(v-if="getModalNumber === 1")
								img(src="~/assets/img/work-img-1-1.png" alt="ポートフォリオPC").-mb40
								img(src="~/assets/img/work-img-1-2.png" alt="ポートフォリオSP").-mobile.-mb24
							template(v-else-if="getModalNumber === 2")
								img(src="~/assets/img/goto.gif" alt="申請フォームgif").-mobile.-mb40
								img(src="~/assets/img/work-img-2-1.png" alt="申請フォーム").-mb24
							template(v-else-if="getModalNumber === 3")
								p.-mb16 実装ページ例：
									a(href="https://skyticket.jp/guide/story/440172") https://skyticket.jp/guide/story/440172
								p.-mb24 qiita記事：
									a(href="https://qiita.com/f-umebara/items/f32673ac7ea17270dc07") https://qiita.com/f-umebara/items/f32673ac7ea17270dc07
								img(src="~/assets/img/work-img-3-1.png" alt="観光ガイドWeb Story").-mb40
								p.-mb24 投稿方法の資料も制作。
								img(src="~/assets/img/work-img-3-2.png" alt="観光ガイドWeb Story").-mb24
								img(src="~/assets/img/work-img-3-3.png" alt="観光ガイドWeb Story").-mb24
							template(v-else-if="getModalNumber === 4")
								img(src="~/assets/img/work-img-4-1.png" alt="航空券座席指定機能").-mb24
</template>
<script>
import WorkBox from '~/components/atom/WorkBox.vue'
import Heading from '~/components/atom/Heading.vue'
import ModalBase from '~/components/atom/ModalBase.vue'

let isModalActive
let getModalNumber

export default {
	data: function() {
			return {
				isModalActive: false,
				getModalNumber: Number,
				works: [
					{number: 1, years: '2020.8' ,title: 'ポートフォリオサイト - デザイン/フロントエンド開発'},
					{number: 2, years: '2020.7' ,title: '身分証明書アップロード機能 - デザイン/フロントエンド開発'},
					{number: 3, years: '2020.5' ,title: 'Web Story及び Web Story投稿機能実装 - デザイン/Wordpress開発'},
					{number: 4, years: '2018.1' ,title: '航空券予約時の座席指定機能 - デザイン/フロントエンド開発'}
				],
				worksContents: [
					{id: 1, years: '2020.8', title: 'ポートフォリオサイト', text: 'シンプルなポートフォリオサイト。', tool: 'Sketch / Framer / vue.js / Nuxt.js / Pug / Sass', term: '約3日間'},
					{id: 2, years: '2020.7', title: '身分証明書アップロード機能', text: '画像のアップロード機能をマイページに制作。デザイン制作から実装まで担当。アップロードファイルを表示させるために、ローカルファイルを読み取るFile APIを使用する。', tool: 'Sketch / JavaScript / HTML / Scss / PHP', term: '約1週間'},
					{id: 3, years: '2020.5', title: 'Web Story及び Web Story投稿機能実装', text: 'Google AMPを使用しWeb Storyを実装。運用チームが自由に投稿できるようWordpressのカスタムフィールドを使用し、投稿機能も実装する。', tool: 'Sketch / AMP / HTML / Scss / PHP', term: '約2週間'},
					{id: 4, years: '2018.1', title: '航空券予約時の座席指定機能', text: '予約申し込み途中に航空券の座席が指定できる機能を実装。APIから送られてくる座席情報を座席表にし、指定できるようにする。', tool: 'Sketch / JavaScript / HTML / Scss / PHP', term: '約1ヶ月'}
				]
			}
	},
	components: {
		WorkBox,
		Heading,
		ModalBase
	},
	props: {
	},
	methods: {
		openModal(number) {
			this.isModalActive = true
			this.getModalNumber = number
		},
		closeModal() {
			this.isModalActive = false
		}
	}
}
</script>
<style lang="sass" scoped>
.-works
	.-main-view
		height: 250px
		overflow: hidden
		text-align: center
		&:hover
			cursor: pointer
			opacity: .8
		img
			display: inline-block
			vertical-align: middle
			height: 100%
			@include sp_view
				width: 100%
				height: auto
.-modal
	.-years
		color: #ff5c9d
		font-weight: bold
		margin-bottom: 8px
	.-work-img
		text-align: center
		max-width: 1000px
		margin: 0 auto
		img
			display: block
			width: 100%
			&.-mobile
				max-width: 375px
				margin: 0 auto
</style>
