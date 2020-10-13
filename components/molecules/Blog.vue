<template lang="pug">
  div.-blog
    ul
      li(v-for="blog in blogs")
        blog-box(:blog="blog")
</template>
<script>
import axios from "axios"
import BlogBox from '~/components/atom/BlogBox.vue'
import moment from 'moment'


const http = axios.create({
  baseURL: 'https://qiita.com/api/v2'
});

http.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${process.env.TOKEN_KEY}`;
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
  created() {
    http.get("/authenticated_user/items")
      .then(response => {
        let blogArray = [];
        response.data.forEach(function(item){
          http.get(`/items/${item.id}`)
            .then(response => {
              blogArray.push(response.data);
            })
            .catch(error => {console.log(error);});
        }, this);

  // console.log(blogArray);

        blogArray.sort(function(a,b){
          let aArray = Number(moment(a.created_at).format('YYYYMMDD'));
          let bArray = Number(moment(b.created_at).format('YYYYMMDD'));
          if (aArray < bArray) {
            return -1;
          } else if (aArray > bArray) {
            return 1;
          } else {
            return 0;
          }
        });

        // console.log(blogArray);
        this.blogs = blogArray;
      })
      .catch(error => {console.log(error);
    });
  },
  methods: {

  }
}

</script>
<style lang="sass" scoped>
.-blog
  margin: 0 -8px
  ul
    li
      width: 33%
      display: inline-block
      vertical-align: top
      @include sp_view
        width: 48%
</style>
