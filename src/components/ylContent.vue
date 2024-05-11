<template>
  <div class="wrap" style="margin:30px auto; overflow:hidden;">
    <div class="leftdiv" style="height:auto;">
      <div style="display: flex; border-bottom: 1px solid #dedede;">
        <div>
          <ul class="c_bt1">
            <li>{{ content1?.articleTypeName }}</li>
          </ul>
          <div class="peixunbox1 newsdiv1">
            <div class="pxline">
              <ul>
                <li @click="doGo('ylContent?id=' + item.id)" style="cursor: pointer;display:flex;width: 358px;justify-content: space-between;"
                  v-for="item in content1?.articleList" :key="item.id">
                  <span style="display: inline-block;width: 260px;" id="doYc">{{ item.title }}</span> <span>{{
                    item.articleAddTime?.substring(0, 10) }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <ul class="c_bt1" id="tab3">
            <li>{{ content3?.articleTypeName }}</li>
          </ul>
          <div class="peixunbox1 newsdiv1">
            <div class="pxline">
              <ul>
                <li @click="doGo('ylContent?id=' + item.id)" style="cursor: pointer;display:flex;width: 358px;justify-content: space-between;"
                  v-for="item in content3?.articleList" :key="item.id">
                  <span style="display: inline-block;width: 260px;" id="doYc">{{ item.title }}</span> <span>{{
                    item.articleAddTime?.substring(0, 10) }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <ul class="c_bt">
        <li>{{ content2?.articleTypeName }}</li>
      </ul>
      <div class="peixunbox newsdiv">
        <div class="pxline">
          <ul>
            <li @click="doGo('ylContent?id=' + item.id)" style="cursor: pointer;display:flex;width: 744px;justify-content: space-between;" v-for="item in content2?.articleList"
              :key="item.id">
              <span style="display: inline-block;width: 620px;" id="doYc">{{ item.title }}</span> <span
                >{{
                  item.articleAddTime?.substring(0, 10) }}</span>
            </li>
          </ul>
        </div>
      </div>

    </div>

    <div class="rightdiv">
      <h2>培训工种</h2>
      <ul class="list-link">
        <li @click="goOther1" class="fangkuai_5"><span></span>
          <p>汽车维修培训</p>
        </li>
        <li @click="goOther2" class="fangkuai_4"><span></span>
          <p>计算机培训</p>
        </li>
        <li @click="goOther3" class="fangkuai_6"><span></span>
          <p>中式面点师培训</p>
        </li>
        <li @click="goOther4" class="fangkuai_3"><span></span>
          <p>中式面点师培训</p>
        </li>
        <li @click="goOther5" class="fangkuai_2"><span></span>
          <p>家电维修培训</p>
        </li>
        <li @click="goOther6" class="fangkuai_1"><span></span>
          <p>手工制作培训</p>
        </li>
      </ul>

      <!--资质荣誉-->
      <!-- <h2 style="padding-top:30px;">资质荣誉<span @click="doGo1('ylYangben?id=11')">更多&gt;&gt;</span></h2>
      <div id="KinSlideshow"
        style="visibility: visible; width: 350px; height: 265px; overflow: hidden; position: relative;">
        <div id="KSS_moveBox" style="width: 350px; height: 265px; overflow: hidden; position: relative;">
          <div class="block">
            <el-carousel height="300px" indicator-position="outside">

              <el-carousel-item v-if="a1">
                <img @click="doGo('/ylImg?id=78')" :src="a1" alt="">
              </el-carousel-item>
              <el-carousel-item v-if="a2">
                <img @click="doGo('/ylImg?id=78')" :src="a2" alt="">
              </el-carousel-item>
              <el-carousel-item v-if="a3">
                <img @click="doGo('/ylImg?id=78')" :src="a3" alt="">
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
      </div> -->
      <!-- 师资力量-->

      <!-- <h2 style="padding-top:30px;">师资力量<span @click="doGo1('ylYangben?id=12')">更多&gt;&gt;</span></h2>

      <div class="tec">
        <div class="tempWrap" style="overflow:hidden; position:relative; height:472px">
          <div class="tecbox" style="height: 1180px; position: relative; padding: 0px; margin: 0px; top: -153px;">
            <dl class="clone" style="height: 110px;">
              <dt><a href="/shizi/201752341.html" rel="nofollow"></a></dt>
              <dd><a href="/shizi/201752341.html" rel="nofollow"></a></dd>
              <dd>
                <p></p>
              </dd>
            </dl>
            <el-carousel height="400px" direction="vertical" autoplay loop trigger="click" :interval="3000">
              <el-carousel-item v-for="item, index in list" :key="index">
                <div style="text-align:center;padding:10px;" @click="doGo1('/ylImg?id=45')">
                  <img style="height:260px;width:80%;" :src="item.src" :alt="item.name">
                  <div>
                    <span style="font-size:18px;font-weight:blod;color:#000;">{{ item.name }}</span>
                    <p style="text-align:start">{{ item.js }}</p>
                  </div>
                </div>
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import { getHome } from '@/api/ylNavList'
import imgSrc1 from '@/assets/images/rongyu/rongyu1.jpg'
import imgSrc2 from '@/assets/images/rongyu/rongyu2.jpg'
import imgSrc3 from '@/assets/images/rongyu/rongyu3.jpg'
export default {
  data () {
    return {
      list: [
        { src: 'https://www.henanjianan.com/upLoad/news/month_2308/202308011424054582.png', name: '郭伟松', js: '大学本科毕业 高级技师，以严谨的教学作风著称，始终坚持以安全生产为最终目的的教学理念，严把每一...... ' },
        { src: 'https://www.henanjianan.com/upLoad/news/month_2308/202308011424054582.png', name: '郭伟松1', js: '大学本科毕业 高级技师，以严谨的教学作风著称，始终坚持以安全生产为最终目的的教学理念，严把每一...... ' },
        { src: 'https://www.henanjianan.com/upLoad/news/month_2308/202308011424054582.png', name: '郭伟松2', js: '大学本科毕业 高级技师，以严谨的教学作风著称，始终坚持以安全生产为最终目的的教学理念，严把每一...... ' },
        { src: 'https://www.henanjianan.com/upLoad/news/month_2308/202308011424054582.png', name: '郭伟松3', js: '大学本科毕业 高级技师，以严谨的教学作风著称，始终坚持以安全生产为最终目的的教学理念，严把每一...... ' },
        { src: 'https://www.henanjianan.com/upLoad/news/month_2308/202308011424054582.png', name: '郭伟松4', js: '大学本科毕业 高级技师，以严谨的教学作风著称，始终坚持以安全生产为最终目的的教学理念，严把每一...... ' },
        { src: 'https://www.henanjianan.com/upLoad/news/month_2308/202308011424054582.png', name: '郭伟松5', js: '大学本科毕业 高级技师，以严谨的教学作风著称，始终坚持以安全生产为最终目的的教学理念，严把每一...... ' }
      ],
      content1: null,
      content2: null,
      content3: null,
      a1: null,
      a2: null,
      a3: null
    }
  },
  mounted () {
    this.a1 = imgSrc1
    this.a2 = imgSrc2
    this.a3 = imgSrc3
  },
  methods: {
    goOther1 () {
      // this.$router.push('ylBaoMing?id=36')
      this.doGo('/')
    },
    goOther2 () {
      // this.$router.push('ylBaoMing?id=26')
      this.doGo('/')
    },
    goOther3 () {
      // this.$router.push('ylBaoMing?id=27')
      this.doGo('/')
    },
    goOther4 () {
      // this.$router.push('ylBaoMing?id=28')
      this.doGo('/')
    },
    goOther5 () {
      // this.$router.push('ylBaoMing?id=29')
      this.doGo('/')
    },
    goOther6 () {
      // this.$router.push('ylBaoMing?id=30')
      this.doGo('/')
    },
    doGo (path) {
      const url = this.$router.resolve(path)
      window.open(url.href, '_blank')
    },
    doGo1 (path) {
      this.$router.push(path)
    },
    async getHome () {
      const res = await getHome(24)
      this.content1 = res.data
      const res1 = await getHome(23)
      this.content2 = res1.data
      const res2 = await getHome(31)
      this.content3 = res2.data
    }
  },
  created () {
    this.getHome()
  }
}
</script>
<style scoped>
#doYc {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.newsdiv {
  width: 348px;
  padding: 15px 0px 15px 0;
  box-sizing: border-box;
  background: white;
  float: left;
  overflow: hidden;
  height: 388px;
}

.newsdiv ul li {
  line-height: 44px;
  height: 44px;
  overflow: hidden;
}

.newsdiv1 {
  width: 348px;
  padding: 15px 0 15px 0;
  box-sizing: border-box;
  background: white;
  float: left;
  overflow: hidden;
  height: 388px;
}

.newsdiv1 ul li {
  line-height: 44px;
  height: 44px;
  overflow: hidden;
}

.peixunbox ul li .zz:hover {
  color: #ff0000;
  text-decoration: underline;
}

.peixunbox1 ul li .zz:hover {
  color: #ff0000;
  text-decoration: underline;
}

#KinSlideshow img {
  width: 350px;
  height: 265px;
}

ul.list-link .fangkuai_5 span {
  background: url('https://www.henanjianan.com/images/border_icon5.png') center 20px no-repeat;
}

ul.list-link .fangkuai_4 span {
  background: url('https://www.henanjianan.com/images/border_icon44.png') center 20px no-repeat;
}

ul.list-link .fangkuai_3 span {
  background: url('https://www.henanjianan.com/images/border_icon3.png') center 20px no-repeat;
}

ul.list-link .fangkuai_2 span {
  background: url('https://www.henanjianan.com/images/border_icon2.png') center 20px no-repeat;
}

ul.list-link .fangkuai_1 span {
  background: url('https://www.henanjianan.com/images/border_icon1.png') center 20px no-repeat;
}

ul.list-link .fangkuai_6 span {
  background: url('https://www.henanjianan.com/images/border_icon6.png') center 20px no-repeat;
}

ul.list-link li span {
  display: block;
  width: 168px;
  height: 70px;
  overflow: hidden;
}

ul.list-link li p {
  display: block;
  width: 120px;
  height: 40px;
  margin: 0px auto;
  overflow: hidden;
  text-align: center;
  color: #fff
}

ul.list-link li .fangkuai_5:hover {
  color: #ffffff;
  background-color: #e75454;
  border-color: #e75454;
}

.leftdiv {
  width: 788px;
  height: 1370px;
  background: white;
  border: 1px solid #e1e1e1;
  float: left;
  overflow: hidden;
}

.c_bt {
  width: 760px;
  height: 42px;
  border-bottom: solid 1px #dddddd;
  margin: 15px 15px 0 15px;
  overflow: hidden;
}

.c_bt1 {
  width: 364px;
  height: 42px;
  border-bottom: solid 1px #dddddd;
  margin: 15px 15px 0 15px;
  overflow: hidden;
}

.c_bt li {
  color: #ce0000;
  font-size: 22px;
  height: 32px;
  line-height: 32px;
  display: block;
  font-weight: bold;
  padding-bottom: 10px;
  box-sizing: border-box;
}

.c_bt1 li {
  color: #ce0000;
  font-size: 22px;
  height: 32px;
  line-height: 32px;
  display: block;
  font-weight: bold;
  padding-bottom: 10px;
  box-sizing: border-box;
}

.peixunbox {
  width: 784px;
  margin: 0px 0px 0px 5px;
  /* border-bottom: 1px solid #dddddd; */
  overflow: hidden;
  height: 395px;
}

.peixunbox1 {
  width: 380px;
  /* margin: 0px 15px 12px; */
  /* border-bottom: 1px solid #dddddd; */
  overflow: hidden;
  height: 310px;
}

.peixunbox .pxline {
  padding-bottom: 10px;
  margin-bottom: 10px;
  /* border-bottom: 1px dotted #dedede; */
  overflow: hidden;
  height: 395px;
}

.peixunbox1 .pxline {
  padding-bottom: 10px;
  margin-bottom: 10px;
  /* border-bottom: 1px dotted #dedede; */
  overflow: hidden;
  height: 310px;
}

.peixunbox ul.list_left {
  display: block;
  width: 760px;
  overflow: hidden;
}

.peixunbox1 ul.list_left {
  display: block;
  width: 380px;
  overflow: hidden;
}

.peixunbox ul li.sortname {
  display: block;
  float: none;
  height: 45px;
  line-height: 45px;
  padding-left: 0px;
}

.peixunbox1 ul li.sortname {
  display: block;
  float: none;
  height: 45px;
  line-height: 45px;
  padding-left: 0px;
}

.peixunbox ul li {
  float: left;
  display: block;
  padding-left: 10px;
  height: 40px;
  line-height: 45px;display: flex;
}

.peixunbox1 ul li {
  float: left;
  display: block;
  padding-left: 18px;
  height: 40px;
  line-height: 45px;
  display: flex;
}

.peixunbox ul li.sortname a {
  font-weight: bold;
  font-size: 18px;
  color: #333;
  padding-right: 15px;
  text-decoration: none;
}

.peixunbox ul li a {
  color: #111111;
  font-size: 16px;
  text-decoration: none;
}

.peixunbox ul li a {
  color: #111111;
  font-size: 16px;
  text-decoration: none;
}

.peixunbox1 ul li.sortname a {
  font-weight: bold;
  font-size: 18px;
  color: #333;
  padding-right: 15px;
  text-decoration: none;
}

.peixunbox1 ul li a {
  color: #111111;
  font-size: 16px;
  text-decoration: none;
}

.peixunbox1 ul li a {
  color: #111111;
  font-size: 16px;
  text-decoration: none;
}

.rightdiv {
  width: 348px;
  /* height: 852px; */
  ;
  padding: 15px;
  background: white;
  float: right;
  border: 1px solid #e1e1e1;
  overflow: hidden;
}

.rightdiv h2 {
  display: block;
  width: 350px;
  height: 32px;
  color: #000000;
  font-size: 22px;
  padding-bottom: 15px;
  font-weight: bold;
  border-bottom: solid 1px #dddddd;
  margin-bottom: 15px;
  overflow: hidden;
}

ul.list-link {
  margin-top: 15px;
}

ul.list-link li {
  display: block;
  float: left;
  background: #c5282b;
  border: 1px solid #c5282b;
  width: 163px;
  margin: 2px;
  height: 130px;
}

.rightdiv h2 {
  display: block;
  width: 350px;
  height: 32px;
  color: #000000;
  font-size: 22px;
  padding-bottom: 15px;
  font-weight: bold;
  border-bottom: solid 1px #dddddd;
  margin-bottom: 15px;
  overflow: hidden;
}

.rightdiv h2 span {
  cursor: pointer;
  font-size: 15px;
  float: right;
  padding-right: 10px;
  margin-top: 8px;
  color: #ce0000;
  font-weight: normal;
  text-decoration: none;
}

#KinSlideshow {
  margin-top: 25px;
  padding-bottom: 40px;
}

.rightdiv .tec {
  padding-top: 10px;
  height: 350px;
  overflow: hidden;
}</style>
