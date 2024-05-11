<!-- <template>
  <div class="nav">
    <el-menu router :default-active="activeIndex" background-color="#c20106" style="width: 1200px;margin:0 auto;" class="el-menu-demo" mode="horizontal" @select="handleSelect">

    <el-menu-item :index="homeName?.path">{{ homeName?.cnname }}</el-menu-item>
    <el-submenu :index="item.id+''" popper-class="menu1" v-for="item in submenuArr" :key="item.id">
      <template slot="title">{{ item?.cnname }}</template>
      <el-menu-item :index="event?.path" v-for="event in item.children" :key="event.id">{{ event?.cnname }}</el-menu-item>
    </el-submenu>
    <el-menu-item :index="item?.path" v-for="item in menuArr" :key="item.id">{{ item?.cnname }}</el-menu-item>
  </el-menu>
  </div>
  </template> -->

<template>
  <div class="nav">
    <el-menu router :default-active="activeIndex" background-color="#c20106" style="width: 1200px;margin:0 auto;display: flex;
    justify-content: center;"
      class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="/index">网站首页</el-menu-item>
      <!-- <el-submenu index="2" popper-class="menu1">
        <template slot="title">关于我们</template>
        <el-menu-item index="/ylIntro">学校介绍</el-menu-item>
        <el-menu-item index="/ylYangben?id=11">资质荣誉</el-menu-item>
      </el-submenu>
      <el-submenu index="2-4">
        <template slot="title">培训通知</template>
        <el-menu-item index="/ylBaoMing?id=13">培训报名</el-menu-item>
        <el-menu-item index="/ylBaoMing?id=14">领证通知</el-menu-item>
      </el-submenu>
      <el-submenu index="2-5">
        <template slot="title">培训项目</template>
        <el-menu-item index="/">职培网校</el-menu-item>
        <el-menu-item index="ylYangben?id=16">证书样本</el-menu-item>
      </el-submenu>
      <el-submenu index="2-6">
        <template slot="title">培训现场</template>
        <el-menu-item index="/ylYangben?id=17">设备设施</el-menu-item>
        <el-menu-item index="/ylYangben?id=18">培训现场</el-menu-item>
        <el-menu-item index="/ylYangben?id=19">理考现场</el-menu-item>
        <el-menu-item index="/ylYangben?id=20">实操现场</el-menu-item>
      </el-submenu>
      <el-submenu index="2-7">
        <template slot="title">政策法规</template>
        <el-menu-item index="ylBaoMing?id=21">行业新闻</el-menu-item>
        <el-menu-item index="ylBaoMing?id=22">法律法规</el-menu-item>
      </el-submenu> -->
      <el-menu-item @click="doGo">证书查询</el-menu-item>
      <el-menu-item index="/ylOnline">在线报名</el-menu-item>
      <!-- <el-menu-item index="/ylWe">联系我们</el-menu-item> -->
    </el-menu>
  </div>
</template>

<script>

export default {
  props: {
    homeName: {
      type: Object,
      required: true
    },
    submenuArr: {
      type: Array,
      required: true
    },
    menuArr: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      // console.log(key, keyPath)
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
<style>
.el-menu--horizontal>.el-menu-item.is-active {
  border-bottom: 0 !important;
}
.menu1 {
  min-width: 140px !important;
}

.el-menu--collapse .el-menu .el-submenu,
.el-menu--popup {
  min-width: 140px !important;
}

.el-menu--horizontal .el-menu .el-menu-item.is-active {
  color: #fff !important;
}
</style>
<style scoped>
::v-deep .el-menu--horizontal>.el-submenu.is-active .el-submenu__title {
  border: 0 !important;
}

::v-deep .el-menu--horizontal .el-menu .el-menu-item.is-active {
  color: #fff !important;
}

.el-menu--horizontal .el-menu-item:not(.is-disabled):focus,
.el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
  outline: 0;
  color: #fff;
}

.el-menu--horizontal .el-menu .el-menu-item,
.el-menu--horizontal .el-menu .el-submenu__title {
  background-color: #FFF;
  float: none;
  height: 36px;
  line-height: 36px;
  padding: 0 10px;
  color: #fff;
  width: 140px;
  padding: 0 0 0 36px;
  font-size: 16px;
}

::v-deep .is-open {
  color: #FFF;
  font-size: 14px;
}

/* ::v-deep .el-menu--horizontal>.el-menu-item.is-active {
    border-bottom: 0;
  } */
::v-deep .el-menu--horizontal>.el-menu-item {
  color: #FFF !important;
  font-size: 20px;
  font-weight: bold;
}

::v-deep .el-menu--horizontal>.el-menu-item.is-active {
  color: #FFF !important;
  font-size: 20px;
  font-weight: bold;
}

::v-deep .el-submenu__title {
  color: #FFF !important;
  font-size: 20px;
  font-weight: bold;
}

::v-deep .el-submenu__title i {
  color: #FFF;
}

::v-deep .el-menu--horizontal .el-menu .el-menu-item {
  color: #fff;
}

.nav {
  height: 60px;
  background: #c20106;
  width: 100%;
}

#nav-menu {
  height: 60px;
  background: #c20106;
  width: 1200px;
  margin: 0 auto;
}

ul,
ol {
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
}</style>
