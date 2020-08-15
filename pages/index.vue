<template lang="pug">
  div.cover
    section.-head
      div.-inner
        p.-app-name Book memo!
        img(src="~/assets/svg/book.svg" width="30" height="auto" alt="本アイコン").-app-logo
        h1 本を検索してください
        nuxt-link(to="/result").-search-link
          img(src="~/assets/svg/search.svg" width="30" height="auto" alt="検索アイコン")
    //- div
      // {{ books[0].id }},{{ books[0].name}}
      //  <ul>
      //  <li v-for="user in books" :key="user.id">
      //    {{ user.id }},{{user.name }},{{user.company.name}}
      //  </li>
      // </ul>
    //- hr
    //- div
      //- <!-- <p>{{ $store.state.message}}</p>
      //- <!-- <p>{{ $store.state.hello.message}}</p>

      //- <!-- <button v-on:click="$store.commit('updateMassege')">Update</button> -->
      //- <!-- <button v-on:click="$store.commit('updateMassege','Commit with payload')">Update</button> -->
      //- <!-- <button v-on:
      click="$store.dispatch('updateMassegeAction')">Dispatch</button> -->
      //- <!-- <button v-on:click="$store.dispatch('updateMassegeAction','Dispatch with payload')">Dispatch</button> -->
      //- <!-- <button v-on:click="$store.dispatch('hello/updateMassegeAction','Dispatch with payload')">Dispatch</button> -->
      //- Counter


    //- drawer-base
</template>

<script>
// import Counter from '~/components/Counter.vue';
// const axios = require('axios')
// import axios from "axios";

// let url = 'https://www.googleapis.com/books/v1/volumes'
// let url = 'https://jsonplaceholder.typicode.com/users'

let isModalActive

export default {
  data: function() {
    return {
      // ip:'0.0.0.0'
			show: true
    }
  },
  methods: {
    // async getIp() {
    //   this.ip = await this.$axios.$get('https://httpbin.org/get')
		// }
	},
	computed: {
	},
  components: {
    // Counter
    // ModalBase
  }
  // asyncData( {params, error} ){
  //   return axios.get(url)
  //     .then((res) => {
  //       return { books: res.data }
  //     })
  //     .catch((e => {
  //       // console.log(e.response.status)
  //       error ({ books: e.response.status, message: 'ERROR!!!!!!'})
  //     }))
	// },
}
</script>

<style lang="sass" scoped>
.cover
  width: 100%
  overflow-x: hidden
  text-align: center
  .-head
    height: 40vh
    padding: 8vh 8vw
    position: relative
    .-inner
      position: absolute
      top: 50%
      left: 50%
      transform: translateY(-50%) translateX(-50%)
      width: 100%
      .-app-name
        font-size: .6em
        font-style: italic
        margin-bottom: 1vh
      .-app-logo
        margin: 0 auto
        margin-bottom: 1vh
      h1
        font-size: 1.5em
        margin-bottom: 2vh
      .-search-link
        display: inline-block
        vertical-align: middle
        padding: 5%
        background-color: #eee
        border-radius: 50%
        img
          width: 6vw
</style>
