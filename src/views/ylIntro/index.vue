<template>
  <div>
    <!-- <ylSonBanner></ylSonBanner> -->
    <div class="wrap" style="margin:30px auto; position:relative; overflow:hidden;">
      <ylItemTop :title="info.title"></ylItemTop>
      <div class="info">
        <div v-html="info.content"></div>
    </div>
  </div>
</div></template>

<script>
// import ylSonBanner from '@/components/ylSonBanner.vue'
import ylItemTop from '@/components/ylItemTop.vue'
import { jsSchool } from '@/api/ylNavList'
export default {
  name: 'ylIntro',
  components: {
    // ylSonBanner,
    ylItemTop
  },
  data () {
    return {
      title: '学校介绍',
      info: {}
    }
  },
  created () {
    this.getJsSchool()
  },
  methods: {
    async getJsSchool () {
      const res = await jsSchool()
      console.log(res)
      this.info = res.data
    }
  }

}
</script>
<style scoped>

</style>
