<template>
  <div>
    <home :tweets="tweets"></home>
  </div>
</template>

<script>
import home from '~/components/Home'
import AppApi from '~/components/api/apimock'

export default {
  asyncData() {
    console.log('asyncData')
    return AppApi.list_tweets().then(result => {
      console.log('asyncData RESULT')
      return {
        tweets: result.data
      }
    })
  },
  components:{
    home,
  },
}
</script>

<style>
</style>
