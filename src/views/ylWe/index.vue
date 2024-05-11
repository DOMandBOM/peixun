<template>
  <div>
    <!-- <ylSonBanner></ylSonBanner> -->
    <div class="wrap" style="margin:30px auto; overflow:hidden;">
      <div style=" width:1170px; padding:15px; background:white; margin:0px auto; overflow:hidden;">
        <ylItemTop :title="title"></ylItemTop>
        <div class="info" style="height:300px;">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import ylSonBanner from '@/components/ylSonBanner.vue'
import ylItemTop from '@/components/ylItemTop.vue'
export default {
  name: 'ylWe',
  components: {
    // ylSonBanner,
    ylItemTop
  },
  data () {
    return {
      title: '联系我们'
    }
  }
}
</script>
<style scoped>
.address {
    width: 100%;
    padding-top: 50px;
    overflow: hidden;
}
</style>
