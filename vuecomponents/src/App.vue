<template>
<div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对Vue的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
     <Add @addComment ='addComment'></Add>
      <List :comments='comments' :deleteComment='deleteComment'></List>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Add from './components/Add'
import List from './components/List'
export default {
    components:{
        Add,
        List
    },
    data(){
      return{
        comments:[
          {id:1,username:'唐山海',content:'Vue真棒'},
          {id:2,username:'陈堔',content:'Vue666'},
          {id:3,username:'苏三省',content:'Vue还可以'},
        ]
      }
    },
    methods: {
      addComment(obj){
        this.comments.unshift(obj)
      },
      deleteComment(index){
        this.comments.splice(index,1)
      }
    },
}
</script>

<style scoped>


</style>

