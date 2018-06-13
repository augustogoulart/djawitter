<template>
  <timeline :tweets="tweets"></timeline>
</template>
<script>
import timeline from '~/components/Timeline'
export default {
  props: ['tweets'],
  components:{
    timeline
  }

}
</script>
