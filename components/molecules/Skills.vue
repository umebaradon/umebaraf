<template lang="pug">
  div
    div.-mb24
      p 自社ECサービスのインハウスデザイナー兼フロントエンドエンジニアとして開発を担当。
      p 同ブランドサイト内にて違う環境の予約サービスを横断して保守や新規開発を行う。
    div.-skill-list
      div
        heading(:number="4" fontSize="s").-mb16 デザイン
        skill-bar(skill-name="sketch" :skill-years="4" :skillProportion="100")
        skill-bar(skill-name="Prott" :skill-years="4" :skillProportion="90")
        skill-bar(skill-name="Framer" :skill-years="4" :skillProportion="70")
        skill-bar(skill-name="HTML5" :skill-years="5" :skillProportion="100")
        skill-bar(skill-name="PUG" :skill-years="1" :skillProportion="80")
        skill-bar(skill-name="CSS" :skill-years="5" :skillProportion="100")
        skill-bar(skill-name="Sass/Scss" :skill-years="4" :skillProportion="100")
        skill-bar(skill-name="UXデザイン" :skill-years="4" :skillProportion="90")
        skill-bar(skill-name="UIデザイン" :skill-years="4" :skillProportion="90")
        skill-bar(skill-name="グラフィックデザイン" :skill-years="5" :skillProportion="70")
        skill-bar(skill-name="Photooshop" :skill-years="5" :skillProportion="60")
        skill-bar(skill-name="Illustrator" :skill-years="5" :skillProportion="70")
      div
        heading(:number="4" fontSize="s").-mb16 フロントエンド開発
        skill-bar(skill-name="Git" :skill-years="2" :skillProportion="70")
        skill-bar(skill-name="SVN" :skill-years="4" :skillProportion="80")
        skill-bar(skill-name="Docker" :skill-years="1" :skillProportion="40")
        skill-bar(skill-name="Vagrant" :skill-years="4" :skillProportion="50")
        skill-bar(skill-name="Gulp" :skill-years="3" :skillProportion="80")
        skill-bar(skill-name="Webpack" :skill-years="3" :skillProportion="70")
        skill-bar(skill-name="Babel" :skill-years="3" :skillProportion="70")
        skill-bar(skill-name="jQuery" :skill-years="5" :skillProportion="90")
        skill-bar(skill-name="Node.js" :skill-years="3" :skillProportion="50")
        skill-bar(skill-name="vue.jp" :skill-years="1" :skillProportion="50")
        skill-bar(skill-name="JavaScript" :skill-years="4" :skillProportion="60")
        skill-bar(skill-name="TypeScript" :skill-years="1" :skillProportion="30")
        skill-bar(skill-name="PHP" :skill-years="3" :skillProportion="60")
        skill-bar(skill-name="Wordpress" :skill-years="4" :skillProportion="80")
</template>
<script>
import Heading from '~/components/atom/Heading.vue'
import SkillBar from '~/components/atom/SkillBar.vue'

export default {
  components: {
    Heading,
    SkillBar
  },
  props: {
	}
}
</script>
<style lang="sass" scoped>
.-skill-list
  display: flex
  justify-content: space-between
  & > *
    width: 46%
</style>
