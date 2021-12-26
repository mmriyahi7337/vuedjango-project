<template>
  <div class="Add">
    
    <h1 class="text-center mb-5"> New Article</h1> 
        <form @submit.prevent="doAdd">
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
        <button class="btn btn-primary">Add Article</button>
        </form>


  </div>
</template>

<script>

export default {  
  name: 'Add',
  data() {
    let articles = localStorage.getItem("articles")
    articles = JSON.parse(articles)
    return{
      articles:  articles,
      description: '',
      title:'',
      content:'',

    }
  },
  methods: {
      doAdd(){
          let article ={
              title: this.title,
              slug: this.title.replaceAll(' ','-').toLowerCase(),
              description: this.description,
              content: this.content,
          }
          this.articles.push(article)
          let databese = JSON.stringify(this.articles)
          localStorage.setItem("articles",databese)
          this.$router.push(`/article/${article.slug}`)
      }
  }
  
}
</script>
