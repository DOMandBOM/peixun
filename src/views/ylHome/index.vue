<template>
  <div>
    <ylBanner></ylBanner>
    <ylInfoList></ylInfoList>
    <ylAdBox></ylAdBox>
    <ylContent></ylContent>
    <!-- <ylAdBox></ylAdBox> -->
    <!-- <ylSwiper></ylSwiper> -->
    <!-- <ylInfoList1></ylInfoList1> -->
    <!-- <ylAbout></ylAbout> -->
  </div>
</template>

<script>
import ylBanner from '@/components/ylBanner.vue'
import ylInfoList from '@/components/ylInfoList.vue'
import ylAdBox from '@/components/ylAdBox.vue'
import ylContent from '@/components/ylContent.vue'
// import ylSwiper from '@/components/ylSwiper.vue'
// import ylAbout from '@/components/ylAbout.vue'
// import ylInfoList1 from '@/components/ylInfoList1.vue'

export default {
  name: 'ylHome',
  components: {
    ylBanner,
    ylInfoList,
    ylAdBox,
    ylContent
    // ylSwiper
    // ylAbout,
    // ylInfoList1
  },
  data () {
    return {
      flag: true
    }
  }
}
</script>
<style></style>
