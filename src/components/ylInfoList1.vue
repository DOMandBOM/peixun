<!-- eslint-disable vue/no-parsing-error -->
<template>
  <div class="wrap mt30 warp1">
    <div class="newsdiv ml30">
      <h2>{{peiXunList?.list ? peiXunList?.list[0]?.articleTypeName : ''}}<span @click="goBaoPath">更多&gt;&gt;</span></h2>
      <ul>
        <li style="cursor: pointer;" v-for="item in peiXunList?.list" :key="item.id"><router-link style="display:flex;justify-content: space-between;" target="_blank"
            :to="'/ylContent?id=' + item.id">
            <span style="display: inline-block;width: 248px;" id="doYc">{{ item.title }}</span> <span>{{ item.articleAddTime?.substring(0, 10) }}</span>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="newsdiv ml30">
      <h2>{{ newsList?.list ? newsList?.list[0]?.articleTypeName : ''}}<span @click="goBaoPath1">更多&gt;&gt;</span></h2>
      <ul>
        <li style="cursor: pointer;" v-for="item in newsList?.list" :key="item.id"><router-link style="display:flex;justify-content: space-between;" target="_blank"
            :to="'/ylContent?id=' + item.id">
            <span style="display: inline-block;width: 248px;" id="doYc">{{ item.title }}</span> <span>{{ item.articleAddTime?.substring(0, 10) }}</span>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="newsdiv ml30">
      <h2>{{quesList?.list ? quesList?.list[0]?.articleTypeName : ''}}<span @click="goBaoPath2">更多&gt;&gt;</span></h2>
      <ul>
        <li style="cursor: pointer;" v-for="item in quesList?.list" :key="item.id"><router-link style="display:flex;justify-content: space-between;" target="_blank"
            :to="'/ylContent?id=' + item.id">
            <span style="display: inline-block;width: 248px;" id="doYc">{{ item.title }}</span> <span>{{ item.articleAddTime?.substring(0, 10) }}</span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getContentList } from '@/api/ylNavList'
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
      quesList: {}
    }
  },
  created () {
    this.getContent()
    this.getContent1()
    this.getContent2()
  },
  methods: {
    // #1
    async getContent () {
      const res = await getContentList(24)
      this.peiXunList = res.data || {}
      console.log(this.peiXunList, 8888)
    },
    // #2
    async getContent1 () {
      const res = await getContentList(23)
      this.newsList = res.data || {}
      console.log(this.newsList, 8888)
    },
    // #3
    async getContent2 () {
      const res = await getContentList(25)
      this.quesList = res.data || {}
      // console.log(this.newsList, 8888)
    },
    goBaoPath () {
      this.$router.push('/ylBaoMing?id=36')
    },
    goBaoPath1 () {
      this.$router.push('/ylBaoMing?id=32')
    },
    goBaoPath2 () {
      this.$router.push('/ylBaoMing?id=25')
    }
  }
}
</script>
<style scoped>
/* .newsdiv ul li:hover {
    text-decoration: underline;
    color: red;
} */
.newsdiv ul li #doYc:hover {
    text-decoration: underline;
    color: red;
}
#doYc {
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
}
.warp1 {
  width: 1244px !important;
}

.newsdiv {
  width: 348px;
  padding: 15px;
  background: white;
  float: left;
  border: 1px solid #e1e1e1;
  overflow: hidden;
  height: 388px;
}

.newsdiv ul li {
  line-height: 44px;
  height: 44px;
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
