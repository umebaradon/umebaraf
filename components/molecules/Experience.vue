<template lang="pug">
  div
    div.-mb40
      p 観光系のウェブ制作や、直近数年はECサイトのデザインやフロントエンド開発を主に経験。
    div.-exp-list
      span.-line
      experience-box.-mb16(years="2008 - 2014" title="イベントフライヤーやWEBバナーバナー制作")
        p 音楽イベント制作の事務職の雑務としてデザイン業務をスタート
      experience-box.-mb16(years="2014 - 2016" title="WEBデザイナー / コーダー")
        p 観光団体や旅館のWEBサイト、キャンプ場予約サイトをデザイナー兼コーダーとして制作
      experience-box(years="2016 - 2020" title="UI/UXデザイナー / フロントエンドエンジニア")
        p 旅行チケット予約販売サイトのインハウスデザイナー兼フロントエンドエンジニアとして、既存サービス保守や新規予約サービスの立ち上げなど幅広く担当する
</template>
<script>
import ExperienceBox from '~/components/atom/ExperienceBox.vue'

export default {
  components: {
    ExperienceBox
  },
  props: {
	}
}
</script>
<style lang="sass" scoped>
.-exp-list
  position: relative
  .-line
    position: absolute
    left: 1%
    top: -1em
    background: #ff86b6
    width: 3px
    height: 100%
    height: calc(100% + 1em)
    &::before
      position: absolute
      content: ""
      width: 11px
      height: 11px
      border-radius: 50%
      background: #ff86b6
      display: block
      left: -10px
      top: 0
      width: 23px
      height: 23px
      border: solid 3px #ffffff61
    &::after
      position: absolute
      content: ""
      width: 11px
      height: 11px
      border-radius: 50%
      background: #ff86b6
      display: block
      top: 100%
      left: -4px
  .-experience
    margin-left: 60px
    position: relative
    &::before
      position: absolute
      top: 50%
      left: -52px
      content: ""
      display: block
      width: 36px
      height: 3px
      background: #ff86b6
</style>
