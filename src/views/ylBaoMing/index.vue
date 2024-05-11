<template>
  <div>
    <!-- <ylSonBanner></ylSonBanner> -->
    <div class="wrap" style="margin:30px auto; overflow:hidden;">
      <ylItemTop :title="info?.list ? info?.list[0]?.articleTypeName : ''"></ylItemTop>
      <div class="info">
          <dl v-for="item,index in info?.list" :key="index">
            <el-tooltip class="item" effect="dark" :content="item.title" placement="top">
              <dt style="text-align: center;" id="doSlOne"><router-link :to="'/ylContent?id='+item.id" >{{ item.title }}</router-link></dt>
            </el-tooltip>
            <dd v-html="item.content" id="doSl"></dd>
            <dd>发布日期：{{ item.articleAddTime?.substring(0,10) }}</dd>
          </dl>
      </div>
    </div>
    <div class="wrap">
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
// import ylFenye from '@/components/ylFenye.vue'

import { getContentList } from '@/api/ylNavList'
export default {
  name: 'ylBaoMing',
  components: {
    // ylSonBanner,
    ylItemTop
    // ylFenye
  },
  data () {
    return {
      title: '培训通知',
      info: {},
      postObj: {
        pageNo: 1,
        pageSize: 8
      }
    }
  },
  created () {
    this.getContentList()
  },
  methods: {
    async getContentList () {
      const res = await getContentList(this.$route.query.id, this.postObj)
      // console.log(res, 666666)
      this.info = res.data
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
<style scoped>
#doSl {
  overflow:hidden;
  text-overflow:ellipsis;
  display:-webkit-box;
  -webkit-line-clamp:2;
  -webkit-box-orient:vertical;
}
#doSlOne {
  overflow:hidden;
text-overflow:ellipsis;
white-space:nowrap;
}
</style>
