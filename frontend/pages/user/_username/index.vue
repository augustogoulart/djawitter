<template>
  <h1>Bem vindo, {{username}}</h1>
</template>

<script>
export default {
  asyncData (context) {
    return {
      username: context.params.username
    }
  },
  data(){
    return {}
  }
}
</script>
