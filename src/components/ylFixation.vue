<template>
<div id="kefu1" v-if="$store.state.asideFlag">
  <div class="cs_close"><a href="javascript:;" @click="getChange"></a></div>
  <div class="cs_online">在线客服</div>
  <div class="cs_online_ct">
    <ul class="floatDqq">
      <li><a target="_blank" href="https://p.qiao.baidu.com/cps/chat?siteId=14784767&amp;userId=29320622&amp;siteToken=13fcb3a6af6f2b5eb512aa8453171050" rel="nofollow"><img src="https://www.henanjianan.com/images/qq.png" alt="建安培训张老师" align="absmiddle">建安培训-<strong>张老师</strong></a></li>
      <li><a target="_blank" href="https://p.qiao.baidu.com/cps/chat?siteId=14784767&amp;userId=29320622&amp;siteToken=13fcb3a6af6f2b5eb512aa8453171050" rel="nofollow"><img src="https://www.henanjianan.com/images/qq.png" alt="建安培训杨老师" align="absmiddle">建安培训-<strong>杨老师</strong></a></li>
      <li><a target="_blank" href="https://p.qiao.baidu.com/cps/chat?siteId=14784767&amp;userId=29320622&amp;siteToken=13fcb3a6af6f2b5eb512aa8453171050" rel="nofollow"><img src="https://www.henanjianan.com/images/qq.png" alt="建安培训刘老师" align="absmiddle">建安培训-<strong>刘老师</strong></a></li>
    </ul>
  </div>
  <div class="cs_tel_ct"><span class="cs_tel_num">156 1773 1113</span> </div>
  <div class="cs_qcode"><img src="https://www.henanjianan.com/images/code.jpg" alt="建安培训安全教育咨询微信" width="180" height="180">
    <p>扫描微信添加好友</p>
  </div>
</div>
</template>

<script>
import store from '@/store'

export default {
  props: {
    flagState: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
      asideFlag: store.asideFlag
    }
  },
  methods: {
    getChange () {
      this.$store.commit('upAsideFlag', false)
    }
  }
}
</script>
<style scoped>
.floatDqq li img {
    padding-right: 5px;
    width: 30px;
}
#kefu1 {
    position: fixed;
    right: 5px;
    bottom: 20px;
    z-index: 1000;
    width: 200px;
    padding: 0px;
    background: #fff;
    box-shadow: 0 0 6px #999;
}
.cs_close {
    position: absolute;
    right: 8px;
    top: 15px;
    width: 12px;
    height: 12px;
    background: url(https://www.henanjianan.com/images/img.gif) no-repeat 0px -150px;
}
.cs_close a {
    display: block;
    height: 10px;
}
.cs_online {
    height: 45px;
    background: #c20106;
    line-height: 45px;
    font-weight: bold;
    color: white;
    font-size: 16px;
    padding-left: 20px;
}
.cs_tel_ct {
    width: 180px;
    margin: 0px auto;
    color: #000000;
    font-size: 20px;
    font-weight: bold;
}
.floatDqq {
    width: 170px;
    margin: 0px auto;
    padding: 15px 0px 5px;
    overflow: hidden;
}
.floatDqq li {
    height: 45px;
    width: 170px;
    line-height: 45px;
    font-size: 14px;
    overflow: hidden;
}
.cs_tel_num {
    width: 180px;
    margin: 0px auto;
    height: 53px;
    line-height: 62px;
    color: #007eff;
    font-size: 18px;
    font-weight: bold;
    display: block;
    padding-left: 28px;
    background: url(https://www.henanjianan.com/images/btn_bg.jpg) no-repeat;
}
.cs_qcode {
    width: 180px;
    margin: 0px auto;
    overflow: hidden;
}
.cs_qcode p {
    text-align: center;
    color: #555555;
    padding-bottom: 15px;
    font-weight: bold;
    font-size: 18px;
}
.cs_qcode {
    width: 180px;
    margin: 0px auto;
    overflow: hidden;
}
</style>
