<template>
  <div class="nav">
    <el-menu :default-active="activeIndex" background-color="#c20106" style="width: 1200px;margin:0 auto;" class="el-menu-demo" mode="horizontal" @select="handleSelect">
    <el-menu-item index="/ylIntro">学校介绍</el-menu-item>
    <el-menu-item index="/ylBaoMing?id=13">培训报名</el-menu-item>
    <el-menu-item index="/ylBaoMing?id=14">领证通知</el-menu-item>
    <el-menu-item index="/ylYangben?id=18">培训现场</el-menu-item>
    <el-menu-item index="/ylYangben?id=19">理考现场</el-menu-item>
    <el-menu-item index="/ylYangben?id=20">实操现场</el-menu-item>
    <!-- <el-menu-item index="/ylBaoMing?id=41">证书查询</el-menu-item> -->
    <el-menu-item @click="doGo">证书查询</el-menu-item>
    <el-menu-item index="/ylBaoMing?id=22">法律法规</el-menu-item>
    <el-menu-item index="/ylOnline">在线报名</el-menu-item>
    <el-menu-item index="/ylWe">联系我们</el-menu-item>
  </el-menu>
  </div>
  </template>

<script>
export default {
  data () {
    return {
      navList: ['网站首页', '关于我们', '培训通知', '培训项目', '培训现场', '政策法规', '在线报名', '联系我们'],
      activeIndex: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath, 66666)
      const url = this.$router.resolve({
        path: key
      })
      console.log(url, 555)

      window.open(url.href, '_blank')
    },
    doGo () {
      const url = this.$router.resolve({
        path: '/ylSearch'
      })
      window.open(url.href, '_blank')
    }
  }
}
</script>
  <style scoped>
  .el-menu--horizontal .el-menu .el-menu-item, .el-menu--horizontal .el-menu .el-submenu__title {
      background-color: #FFF;
      float: none;
      height: 36px;
      line-height: 36px;
      padding: 0 10px;
      color: #fff;
      width: 140px;
  }
  ::v-deep .el-menu--popup {
    min-width: 140px !important;
  }
  ::v-deep .is-open {
    color:#FFF;
    font-size: 14px;
  }
  /* ::v-deep .el-menu--horizontal>.el-menu-item.is-active {
    border-bottom: 0;
  } */
  ::v-deep .el-menu--horizontal>.el-menu-item {
    color:#FFF !important;
    font-size: 20px;
    font-weight: bold;
  }
  ::v-deep .el-menu--horizontal>.el-menu-item.is-active {
    color:#FFF !important;
    font-size: 20px;
    font-weight: bold;
  }
  ::v-deep .el-submenu__title {
    color:#FFF !important;
    font-size: 20px;
    font-weight: bold;
  }

  ::v-deep .el-submenu__title i {
      color: #FFF;
  }
  ::v-deep .el-menu--horizontal .el-menu .el-menu-item {
    color:#fff;
  }
  .nav {
      height: 60px;
      background: #c20106;
      width: 100%;
      margin-top: 50px;
  }
  #nav-menu {
      height: 60px;
      background: #c20106;
      width: 1200px;
      margin: 0 auto;
  }
  ul, ol {
      list-style-type: none;
  }
  #nav-menu .menu li {
      position: relative;
      float: left;
      display: inline;
      font-size: 16px;
  }
  #nav-menu .menu li h3 {
      font-weight: normal;
      display: inline-block;
      float: left;
      width: 150px;
      height: 60px;
  }
  #nav-menu .menu li a {
      display: inline-block;
      color: #FFF;
      height: 60px;
      line-height: 60px;
      text-decoration: none;
      font-size: 20px;
      width: 150px;
      text-align: center;
      font-weight: bold;
  }
  </style>
