<template>
  <div>
    <!-- <ylSonBanner></ylSonBanner> -->
    <div class="wrap" style="margin:30px auto; overflow:hidden;">
      <ylItemTop :title="info.articleTypeName"></ylItemTop>
      <div class="info">
        <div>
          <h1>{{ info.title }}</h1>
          <div class="pubtime">发布日期：{{ info.articleAddTime?.substring(0,4) }}/{{ info.articleAddTime?.substring(5,7) }}/{{ info.articleAddTime?.substring(8,10) }} {{info.articleAddTime?.substring(11,19)}} | 文章来源：南方职培宣传</div>
          <div v-html="info?.content"></div>
          <p><br></p>
          <div class="page">
            <p class="pre"> <span>上一篇：</span>
              <span id="preInfo" @click="goPath('ylContent?id=' + upNext?.newArticle.id)" v-if="upNext?.newArticle" style="cursor: pointer;color:#888;">{{ upNext?.newArticle.title }}</span>
              <span id="preInfo" v-else style="cursor: pointer;color:#000;">暂无文章</span>
             </p>
            <p class="next"> <span>下一篇：</span>
              <span id="nextInfo" @click="goPath('ylContent?id=' + + upNext?.oldArticle.id)" v-if="upNext?.oldArticle" style="cursor: pointer;color:#888;">{{upNext?.oldArticle.title}}</span>
              <span id="nextInfo" v-else style="cursor: pointer;color:#000;">暂无文章</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import ylSonBanner from '@/components/ylSonBanner.vue'
import ylItemTop from '@/components/ylItemTop.vue'
import { getContent, getUpNext } from '@/api/ylNavList'
export default {
  name: 'ylContent',
  components: {
    // ylSonBanner,
    ylItemTop
  },
  data () {
    return {
      // title: '培训通知',
      info: {},
      upNext: null
    }
  },
  created () {
    this.getContent()
    this.getUpNext()
  },
  methods: {
    async getContent () {
      // console.log(this.$route.query.id)
      const res = await getContent(this.$route.query.id)
      this.info = res.data
      console.log(this.info, 99999666)
    },
    async getUpNext () {
      const res = await getUpNext(this.$route.query.id)
      console.log(res, 'sss')
      this.upNext = res.data
    },
    goPath (path) {
      this.$router.push(path)
    }
  }
}
</script>
<style scoped>
.info h1 {
  font-size: 22px;
  padding-top: 30px;
  text-align: center;
}

.pubtime {
  font-size: 14px;
  padding: 10px 0px;
  border-bottom: 1px dotted #dedede;
  margin-bottom: 20px;
  color: #666;
  text-align: center;
  overflow: hidden;
}</style>
