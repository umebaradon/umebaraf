<template lang="pug">
  div.-blog
    ul
      li(v-for="blog in blogs")
        blog-box(:blog="blog")
</template>
<script>
import axios from "axios"
import BlogBox from '~/components/atom/BlogBox.vue'

const http = axios.create({
  baseURL: 'https://qiita.com/api/v2'
});

http.interceptors.request.use((config) => {
  config.headers.Authorization = "Bearer 61f2ffc7c257910ee4b509bd262477a9dea6e429";
  // console.table(config)
  return config;
}, function (error) {
  return Promise.reject(error);
});

export default {
  data: function() {
    return {
      blogs: [],
    }
  },
  components: {
    BlogBox
  },
  props: {
  },
  mounted() {
    http.get("/authenticated_user/items")
      .then(response => {
        this.blogs = [];
        response.data.forEach(function(item){
          http.get(`/items/${item.id}`)
            .then(response => {
              this.blogs.push(response.data);
            })
            .catch(error => {console.log(error);});
        }, this);
      })
      .catch(error => {console.log(error);
    });
  }
}

</script>
<style lang="sass" scoped>
.-blog
  ul
    display: flex
    flex-wrap: wrap
    justify-content: space-between
    li
      width: 32%
      @include sp_view
        width: 48%
</style>
