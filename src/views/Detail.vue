<template>
  <div class="Detail">
    <h1 class="text-center mb-5"> Home</h1> 

    
    <article>
      <h3>{{article.title}}</h3>
      <div>{{article.content}} </div>
    </article>
    
    <div v-if="$store.state.isAuth">
      <hr>
      <button class="btn btn-warning mr-1" @click="edit= !edit">Edit</button>
      <button class="btn btn-danger mr-1">Remove</button>
      <hr class="my-4">
      <form @submit.prevent="doEdit" class="pb-5" v-if=" edit">
        <div class="form-group">
            <label for="titleInput">Title</label>
            <input type="text" class="form-control" id="titleInput" v-model="title" >
        </div>

        <div class="form-group">
            <label for="descriptionInput">Description</label>
            <textarea class="form-control" id="descriptionInput" rows="3" v-model="description"></textarea>
        </div>
        <div class="form-group">
            <label for="ContentInput">Content</label>
            <textarea class="form-control" id="ContentInput" rows="9" v-model="content"></textarea>
        </div>
        <button class="btn btn-warning">Edit Article</button>
        </form>

    </div>

  </div>
</template>

<script>

export default {  
  name: 'Detail',
  data() {

    let articles = localStorage.getItem("articles")
    articles = JSON.parse(articles) 
    let article = articles.find(
        article => article.slug == this.$route.params.slug
    )

    return{
      articles:  articles,
      article: article,
      title:article.title,
      description:  article.description,
      content: article.content,
      edit: false,
    }
  },
  methods:{
    doEdit( ){
      let index = this.articles.findIndex(
         article => article.slug == this.$route.params.slug
      )
      this.articles[index]={
        title: this.title,
              slug: this.title.replaceAll(' ','-').toLowerCase(),
              description: this.description,
              content: this.content,
      }
          let databese = JSON.stringify(this.articles)
          localStorage.setItem("articles",databese)
          this.article = this.articles[index]
          this.edit = false
          this.$router.push(`/article/${this.articles[index].slug}`)
    }
  }
  
}
</script>
