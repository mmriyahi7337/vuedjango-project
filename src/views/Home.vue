<template>
  <div class="home">
    <h1 class="text-center mb-5"> Home</h1> 
    <article v-for="article in articles">
      <h3><a :href="`/article/${article.slug}`">{{article.title}}</a></h3>
      <div>{{article.description}}<a v-bind:href="`/article/${article.slug}`">+ more</a> </div>
    </article>


  </div>
</template>

<script>

export default {  
  name: 'Home',
  data() {
    let articles = localStorage.getItem("articles")
    articles = JSON.parse(articles)
    return{
      articles:  articles
    }
  }
  
}
</script>
