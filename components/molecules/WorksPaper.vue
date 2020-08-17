<template lang="pug">
	div
		div.-mb40
			p デザインから入稿まで担当
		div.-mb40
			div.-works(v-for="work in works")
				work-box.-mb24(:years="work.years" :title="work.title")
					div.-main-view(@click.prevent="openModal(work.number)")
						img(:src="require('~/assets/img/paper-img-'+work.number+'.png')" :alt="work.title")
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
								img(src="~/assets/img/paper-img-1-1.png" alt="会社名刺").-mb40
							template(v-if="getModalNumber === 2")
								img(src="~/assets/img/paper-img-2-1.png" alt="フライヤー表").-mb40
								img(src="~/assets/img/paper-img-2-2.png" alt="フライヤー裏").-mb40
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
					{number: 1, years: '2017.5' ,title: '会社名刺 - デザイン'},
					{number: 2, years: '2016.4' ,title: 'イベントフライヤー - デザイン'}
				],
				worksContents: [
					{id: 1, years: '2017.5', title: '会社名刺', text: '会社で使用する名刺デザイン。ロゴのカラーからシンプルなデザインを制作。', tool: 'Illustrator', term: '約1週間'},
					{id: 2, years: '2016.4', title: 'イベントフライヤー', text: '音楽イベントのフライヤー。', tool: 'Illustrator', term: '約1週間'}
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
			console.log(this.getModalNumber)
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
