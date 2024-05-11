<!-- eslint-disable vue/no-parsing-error -->
<template>
  <div class="wrap mt30 warp1">
    <marquee v-if="flag" scrollamount="6" width="1200" style="color:red;font-size:20px;">
      <a href="/baoming/20234181378.html" style="color:red;font-size:20px;" title="查看详情" rel="nofollow">
        郑重声明！最近，我校陆续接到举报，社会上有不法分子滥用我校名称或冒用我校工作人员的名义，在微信、抖音和其他新媒体渠道进行招生宣传，达到谋取利益的目的。在此，我们严正声明：南方职培学校从未委托授权任何第三方机构、个人开展相关业务，对以南方职培学校的名义进行非法招生宣传等活动的机构和个人，学校将保留依法追究其责任的权利。
        同时，我校内部工作人员从不以个人名义收款，所有跟本校的资金往来均以我校出具并认可的账户为准，严禁将资金打至私人账户。敬请广大学员保持高度警惕，认真辨别，认准官方渠道信息，以免造成个人信息泄露和财产损失。
      </a>
    </marquee>
    <div class="newsdiv ml30">
      <h2>{{ peiXunList?.list ? peiXunList?.list[0]?.articleTypeName : '' }}<span @click="goBaoPath">更多&gt;&gt;</span></h2>
      <ul>
        <li style="cursor: pointer;" v-for="item in peiXunList?.list" :key="item.id"><router-link style="display:flex;justify-content: space-between;"
            target="_blank" :to="'/ylContent?id=' + item.id">
            <span style="display: inline-block;width: 248px;" id="doYc">{{ item.title }}</span> <span
              >{{
                item.articleAddTime?.substring(0, 10) }}</span>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="newsdiv ml30">
      <h2>{{ newsList?.list ? newsList?.list[0]?.articleTypeName : '' }}<span @click="goBaoPath1">更多&gt;&gt;</span></h2>
      <ul>
        <li style="cursor: pointer;" v-for="item in newsList?.list" :key="item.id"><router-link style="display:flex;justify-content: space-between;"
            target="_blank" :to="'/ylContent?id=' + item.id">
            <span style="display: inline-block;width: 248px;" id="doYc">{{ item.title }}</span> <span
              >{{
                item.articleAddTime?.substring(0, 10) }}</span>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="newsdiv1">
      <h2>职培宣传</h2>
      <div class="cxurl" v-if="vidSrc">
        <video controls style="width:350px" :src="vidSrc"></video>
      </div>
    </div>
  </div>
</template>

<script>
import { getContentList } from '@/api/ylNavList'
import videoSrc from '@/assets/videos/xc.mp4'
export default {
  props: {
    flag: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      arr: [1, 2, 3, 4, 5, 6, 7, 8],
      peiXunList: {},
      newsList: {},
      vidSrc: null
    }
  },
  created () {
    this.getContent()
    this.getContent1()
  },
  mounted () {
    this.vidSrc = videoSrc
  },
  methods: {
    // #1
    async getContent () {
      const res = await getContentList(13)
      this.peiXunList = res.data || {}
      console.log(this.peiXunList, 8888)
    },
    // #2
    async getContent1 () {
      const res = await getContentList(21)
      this.newsList = res.data || {}
      // console.log(this.newsList, 8888)
    },
    goBaoPath () {
      this.$router.push('/ylBaoMing?id=13')
    },
    goBaoPath1 () {
      this.$router.push('/ylBaoMing?id=21')
    }
  }
}
</script>
<style scoped>
.newsdiv ul li #doYc:hover {
  text-decoration: underline;
  color: red;
}

#doYc {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.warp1 {
  width: 1244px !important;
}

:host {
  display: inline-block;
  overflow: hidden;
  text-align: initial;
  white-space: nowrap;
}

.newsdiv {
  width: 348px;
  padding: 15px;
  background: white;
  float: left;
  border: 1px solid #e1e1e1;
  overflow: hidden;
  height: 256px;
}
.newsdiv1 {
  width: 348px;
  padding: 15px;
  background: white;
  float: left;
  border: 1px solid #e1e1e1;
  overflow: hidden;
  height: 256px;
}

.newsdiv ul li {
  line-height: 44px;
  height: 44px;
  overflow: hidden;
}
.newsdiv1 h2 {
  display: block;
  width: 348px;
  height: 30px;
  color: #000;
  font-size: 22px;
  padding-bottom: 10px;
  font-weight: bold;
  border-bottom: solid 1px #dddddd;
  margin-bottom: 10px;
  overflow: hidden;
}
.newsdiv h2 {
  display: block;
  width: 348px;
  height: 30px;
  color: #000;
  font-size: 22px;
  padding-bottom: 10px;
  font-weight: bold;
  border-bottom: solid 1px #dddddd;
  margin-bottom: 10px;
  overflow: hidden;
}

.cxurl {
  padding-top: 5px;
}

.newsdiv h2 span {
  font-size: 14px;
  text-decoration: none;
  float: right;
  margin-top: 8px;
  color: #ce0000;
  font-weight: normal;
  cursor: pointer;
}</style>
