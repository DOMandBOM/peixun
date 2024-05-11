<template>
  <div>
    <!-- <ylSonBanner></ylSonBanner> -->
    <div class="wrap" style="margin:30px auto; position:relative; overflow:hidden;">
      <div class="leftbox">
        <div id="sticky">
          <h2>快捷导航</h2>
          <el-menu default-active="0" router class="el-menu-vertical-demo" background-color="#dddddd" @open="handleOpen"
            @close="handleClose">
            <el-menu-item index="/">
              <span slot="title">学校简介</span>
            </el-menu-item>
            <el-menu-item index="/ylYangben?id=11">
              <span slot="title">资质荣誉</span>
            </el-menu-item>
            <!-- <el-menu-item index="/ylYangben?id=12">
              <span slot="title">师资力量</span>
            </el-menu-item> -->
            <el-menu-item index="/ylBaoMing?id=21">
              <span slot="title">新闻动态</span>
            </el-menu-item>
            <el-menu-item index="/ylWe">
              <span slot="title">联系我们</span>
            </el-menu-item>
            <!-- <el-menu-item index="/ylWe">
              <img src="https://www.henanjianan.com/images/msg.jpg">
            </el-menu-item>
            <el-menu-item index="/ylWe">
              <img src="https://www.henanjianan.com/images/contact.jpg">
            </el-menu-item> -->
          </el-menu>
          <img @click="goPage1('/ylOnline')" style="margin: 10px 0 0 0" src="https://www.henanjianan.com/images/msg.jpg">
          <img @click="goPage1('/ylWe')" style="margin: 10px 0 0 0" src="https://www.henanjianan.com/images/contact.jpg">
        </div>
      </div>
      <div class="rightbox" v-loading="loading"
      element-loading-text="加载中..."
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(255, 255, 255, 1)">
        <ylItemTop :title="info.articleTypeName
          "></ylItemTop>
        <div class="info">
          <h1 v-if="info.title">{{ info.title }}</h1>
          <h1 v-else style="height: 28px;"></h1>
          <div class="pubtime">{{whenTime}} {{ info?.articleAddTime?.substring(0, 4) }}/{{ info?.articleAddTime?.substring(5, 7)
          }}/{{ info?.articleAddTime?.substring(8, 10) }} {{ info?.articleAddTime?.substring(11, 19) }} {{ contentTo }}
          </div>
          <div class="bigpic">
            <img v-if='info.picPath' :src="info.picPath" alt="专业技术人员继续教育基地">
            <!-- <img v-else src="@/assets/images/noImg.jpg" alt="暂无图片"> -->
            <div v-html="info.content"></div>
          </div>
          <div class="page">
            <p class="pre"> <span>上一篇：</span>
              <span id="preInfo" @click="goPath('ylImg?id=' + upNext?.newArticle.id)" v-if="upNext?.newArticle" style="cursor: pointer;color:#888;">{{ upNext?.newArticle.title }}</span>
              <span id="preInfo" v-else style="cursor: pointer;color:#000;">暂无文章</span>
             </p>
            <p class="next"> <span>下一篇：</span>
              <span id="nextInfo" @click="goPath('ylImg?id=' + + upNext?.oldArticle.id)" v-if="upNext?.oldArticle" style="cursor: pointer;color:#888;">{{upNext?.oldArticle.title}}</span>
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
  name: 'ylImg',
  components: {
    // ylSonBanner,
    ylItemTop
  },
  data () {
    return {
      title: '在线报名',
      info: {},
      upNext: null,
      contentTo: '文章来源：南方职培宣传',
      whenTime: '发布日期：',
      loading: true
    }
  },
  created () {
    this.loading = true
    console.log(this.loading, 0)
  },
  mounted () {
    setTimeout(() => {
      this.getContent()
      this.getUpNext()
    }, 300)
  },
  methods: {
    handleOpen (key, keyPath) {
      // console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      // console.log(key, keyPath)
    },
    goPage (path) {
      this.$router.push(path)
    },
    async getContent () {
      const res = await getContent(this.$route.query.id)
      console.log(res.data, 1)
      this.info = res.data
    },
    async getUpNext () {
      const res = await getUpNext(this.$route.query.id)
      this.upNext = res.data
      console.log(2)
      setTimeout(() => {
        this.loading = false
      }, 500)
    },
    goPath (path) {
      this.$router.push(path)
    },
    goPage1 (path) {
      const url = this.$router.resolve(path)
      window.open(url.href, '_blank')
    }
  }
}
</script>

<style scoped>
::v-deep .el-loading-spinner i {
  color:#c20106;
}
::v-deep .el-loading-spinner .el-loading-text {
  color:#c20106;
}
.info h1 {
  font-size: 22px;
  padding-top: 30px;
  text-align: center;
}

.info h1 {
  font-size: 22px;
  padding-top: 30px;
  text-align: center;
}

.bigpic {
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
}

.rightbox .info img {
  max-width: 100%;
}

::v-deep .el-menu-item {
  border-bottom: 1px solid #fff;
}

::v-deep .el-form-item__error {
  left: 60px
}

::v-deep .el-textarea__inner {
  resize: none;
}

::v-deep .el-form-item__label {
  width: 140px !important;
}

::v-deep .el-input {
  width: 400px !important;
}

::v-deep .el-textarea {
  width: 400px !important;
}

.leftbox {
  width: 300px;
  background: white;
  float: left;
  padding: 15px;
  overflow: hidden;
}

#sticky {
  width: 300px;
  background: white;
  margin-top: 0px;
  margin-left: 0px;
  top: 0px;
  left: 0px;
}

.leftbox h2 {
  font-size: 24px;
  font-weight: bold;
  display: block;
  padding-left: 30px;
  height: 95px;
  line-height: 95px;
  background: #c20106;
  border-bottom: solid 6px #990000;
  color: white;
  overflow: hidden;
}

.leftbox ul {
  display: block;
  width: 298px;
  /* border: 1px solid #dcdcdc; */
  overflow: hidden;
}

.leftbox ul li a {
  display: block;
  background: #dddddd;
  width: 268px;
  padding-left: 30px;
  text-align: left;
  text-decoration: none;
  line-height: 55px;
  border-bottom: solid 1px #ececec;
  margin: 0;
  font-size: 16px;
  font-weight: normal;
  color: #000;
}

.rightbox {
  width: 790px;
  float: right;
  background: white;
  padding: 15px 20px;
  /* min-height: 1000px; */
  overflow: hidden;
}

.contit {
  border-bottom: 1px dashed #cdcdcd;
  height: 80px;
  line-height: 80px;
  overflow: hidden;
}

.contit h2 {
  font-size: 24px;
  font-weight: bold;
  display: block;
  float: left;
  width: 400px;
}

.contit span {
  float: right;
  font-size: 15px;
  color: #999;
}

.rightbox .info {
  font-size: 14px;
  line-height: 2em;
  padding: 10px 0px;
}

.rightbox .info p {
  font-size: 15px;
  line-height: 35px;
  overflow: hidden;
}

.info table {
  width: 700px;
  margin: 20px auto;
  overflow: hidden;
}

.info input {
  width: 240px;
  padding-left: 10px;
  overflow: hidden;
}

.info span.fontred {
  color: red;
}

.info input.btn {
  background: #c20106;
  color: white;
}

.info input,
.info select.msgslt,
.info textarea {
  border: 1px solid #ccc;
  width: 300px;
  height: 33px;
  line-height: 33px;
  background: #fff;
  color: #333333;
  border: #ccc 1px solid;
  border-radius: 2px;
  padding-left: 10px;
  overflow: hidden;
}</style>
