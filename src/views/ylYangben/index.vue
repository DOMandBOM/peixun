<template>
  <div>
    <!-- <ylSonBanner></ylSonBanner> -->
    <div class="wrap" style="margin:30px auto; overflow:hidden;">
      <ylItemTop :title="info?.list ? info?.list[0]?.articleTypeName : ''"></ylItemTop>
      <ylItemImage :arr="info?.list || []"></ylItemImage>
      <el-pagination
  background
  style="text-align: center;
    line-height: 5;"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="postObj.pageNo"
      :page-size="postObj.pageSize"
      layout="total, prev, pager, next, jumper"
      :total="info.total">
    </el-pagination>
    </div>
  </div>
</template>

<script>
// import ylSonBanner from '@/components/ylSonBanner.vue'
import ylItemTop from '@/components/ylItemTop.vue'
import ylItemImage from '@/components/ylItemImage.vue'
// import ylFenye from '@/components/ylFenye.vue'

import { getContentList } from '@/api/ylNavList'
export default {
  name: 'ylYangben',
  components: {
    // ylSonBanner,
    ylItemTop,
    ylItemImage
    // ylFenye
  },
  data () {
    return {
      title: '证书样本',
      arr: [
        { title: '特种设备实习证书', img: 'https://www.henanjianan.com/upLoad/news/month_1709/201709211140511907.gif' },
        { title: '特种设备', img: 'https://www.henanjianan.com/upLoad/news/month_1709/201709211140511907.gif' },
        { title: '特种A', img: 'https://www.henanjianan.com/upLoad/news/month_1709/201709211140511907.gif' },
        { title: '特种A', img: 'https://www.henanjianan.com/upLoad/news/month_1709/201709211140511907.gif' },
        { title: '特种A', img: 'https://www.henanjianan.com/upLoad/news/month_1709/201709211140511907.gif' },
        { title: '特种A', img: 'https://www.henanjianan.com/upLoad/news/month_1709/201709211140511907.gif' },
        { title: '特种A', img: 'https://www.henanjianan.com/upLoad/news/month_1709/201709211140511907.gif' },
        { title: '特种A', img: 'https://www.henanjianan.com/upLoad/news/month_1709/201709211140511907.gif' },
        { title: '特种A', img: 'https://www.henanjianan.com/upLoad/news/month_1709/201709211140511907.gif' },
        { title: '特种A', img: 'https://www.henanjianan.com/upLoad/news/month_1709/201709211140511907.gif' },
        { title: '特种A', img: 'https://www.henanjianan.com/upLoad/news/month_1709/201709211140511907.gif' },
        { title: '特种A', img: 'https://www.henanjianan.com/upLoad/news/month_1709/201709211140511907.gif' }
      ],
      info: {},
      postObj: {
        pageNo: 1,
        pageSize: 12
      }
    }
  },
  created () {
    this.getContentList()
  },
  methods: {
    async getContentList () {
      const res = await getContentList(this.$route.query.id, this.postObj)
      this.info = res.data
      // console.log(this.info)
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (page) {
      this.postObj.pageNo = page
      this.getContentList(this.getContentList)
    }
  }
}
</script>
<style></style>
