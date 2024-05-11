<template>
<div class="adbox">
  <img v-if="a1" :src="a1" alt="职培宣传">
</div>
</template>

<script>
import imgSrc from '@/assets/images/adBox.jpg'
export default {
  data () {
    return {
      a1: null
    }
  },
  mounted () {
    this.a1 = imgSrc
  }
}
</script>
<style scoped>
.adbox {
    width: 1200px;
    margin: 30px auto;
    overflow: hidden;
    background-color: #fff;
}

</style>
