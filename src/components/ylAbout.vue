<template>
  <div class="govbox">
    <ul class="picList">
      <li v-for="item,index in arr" :key="index"> <a :href="item.href" target="_blank" rel="nofollow"><img :src="item.src" alt="item.title"></a></li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      arr: [
        { src: 'https://www.henanjianan.com/images/b5.jpg', title: '应急管理部', href: 'http://www.mem.gov.cn' },
        { src: 'https://www.henanjianan.com/images/b8.jpg', title: '河南省住房和城乡住建厅', href: '/' },
        { src: 'https://www.henanjianan.com/images/b6.jpg', title: '河南省应急管理厅', href: '/' },
        { src: 'https://www.henanjianan.com/images/b7.jpg', title: '政务服务网', href: 'http://www.hnzwfw.gov.cn' },
        { src: 'https://www.henanjianan.com/images/b1.jpg', title: '河南省建筑市场监管公共服务平台', href: '/' },
        { src: 'https://www.henanjianan.com/images/b2.jpg', title: '河南省建设人才教育信息网', href: 'https://www.hnzjgl.gov.cn/' },
        { src: 'https://www.henanjianan.com/images/b3.jpg', title: '郑州市人力资源和社会保障局', href: 'http://zzrs.zhengzhou.gov.cn/' },
        { src: 'https://www.henanjianan.com/images/b4.jpg', title: '河南省住房和城乡建设行业职业技能信息网', href: 'http://www.hnjsjn.com/' }
      ]
    }
  }
}
</script>
<style scoped>
.govbox {
    width: 100%;
    background: #f3f3f3;
    overflow: hidden;
}
.govbox ul {
    width: 1168px;
    margin: 30px auto;
    padding: 15px;
    border: 1px solid #e1e1e1;
    background: white;
    overflow: hidden;
}
.govbox ul li {
    border: 1px solid #e3e3e3;
    width: 280px;
    height: 75px;
    float: left;
    margin-right: 5px;
    margin-bottom: 5px;
    overflow: hidden;
}
</style>
