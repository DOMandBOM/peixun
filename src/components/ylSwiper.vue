<template>
  <div>
    <div class="wrap">
      <div style="width:1168px; height:270px; background: #fff; padding:15px; border:1px solid #e1e1e1; overflow:hidden;">
        <div class="hj">
          <div class="hjxxk">
            <p id="hj1" :class="{bold:flag1}" @click="doOne('设备设施')">设备设施</p>
            <p id="hj2" :class="{bold:flag2}" @click="doOne('培训现场')">培训现场 </p>
            <p id="hj3" :class="{bold:flag3}" @click="doOne('实操现场')">实操现场</p>
            <p id="hj4" :class="{bold:flag4}" @click="doOne('理考现场')">理考现场</p>
          </div>
          <div class="clr"></div>
          <div class="hjlist" v-if="flag1">
            <el-carousel indicator-position="outside" type="card" height="220px" :interval="1500">
              <!-- <el-carousel-item v-for="item,index in arr" :key="index">
                <img :src="item.src" :alt="item.title" style="width: 584px;height: 220px;">
              </el-carousel-item> -->
              <el-carousel-item  v-if="a1">
                <img :src="a1" alt="南方职培宣传" style="width: 584px;height: 220px;">
              </el-carousel-item>
              <el-carousel-item  v-if="a2">
                <img :src="a2" alt="南方职培宣传" style="width: 584px;height: 220px;">
              </el-carousel-item>
              <el-carousel-item  v-if="a3">
                <img :src="a3" alt="南方职培宣传" style="width: 584px;height: 220px;">
              </el-carousel-item>
            </el-carousel>
            <div class="clr"></div>
          </div>
          <div class="hjlist" v-else-if="flag2">
            <el-carousel indicator-position="outside" type="card" height="220px" :interval="1500">
              <el-carousel-item v-for="item,index in arr2" :key="index">
                <img :src="item.src" :alt="item.title" style="width: 584px;height: 220px;">
                <!-- <p> {{ item.title }}</p> -->
              </el-carousel-item>
            </el-carousel>
            <div class="clr"></div>
          </div>
          <div class="hjlist" v-else-if="flag3">
            <el-carousel indicator-position="outside" type="card" height="220px" :interval="1500">
              <el-carousel-item v-for="item,index in arr3" :key="index">
                <img :src="item.src" :alt="item.title" style="width: 584px;height: 220px;">
                <!-- <p> {{ item.title }}</p> -->
              </el-carousel-item>
            </el-carousel>
            <div class="clr"></div>
          </div>
          <div class="hjlist" v-else-if="flag4">
            <el-carousel indicator-position="outside" type="card" height="220px" :interval="1500">
              <el-carousel-item v-for="item,index in arr4" :key="index">
                <img :src="item.src" :alt="item.title" style="width: 584px;height: 220px;">
                <!-- <p> {{ item.title }}</p> -->
              </el-carousel-item>
            </el-carousel>
            <div class="clr"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import imgSrc1 from '@/assets/images/bottom/a1.jpg'
import imgSrc2 from '@/assets/images/bottom/a2.jpg'
import imgSrc3 from '@/assets/images/bottom/a3.jpg'
export default {
  data () {
    return {
      arr: [
        { title: '理论培训', src: 'https://www.henanjianan.com/upLoad/news/month_2308/202308021528088467.jpg' },
        { title: '技能培训', src: 'https://www.henanjianan.com/upLoad/news/month_2308/202308021448463703.jpg' },
        { title: '理论培训', src: 'https://www.henanjianan.com/upLoad/news/month_2308/202308021449205225.jpg' },
        { title: '理论培训', src: 'https://www.henanjianan.com/upLoad/news/month_2308/202308021453149036.jpg' },
        { title: '理论培训', src: 'https://www.henanjianan.com/upLoad/news/month_2308/202308021454016138.jpg' }
      ],
      arr2: [
        { title: '理论培训', src: 'https://www.henanjianan.com/upLoad/news/month_2308/202308021453149036.jpg' },
        { title: '理论培训', src: 'https://www.henanjianan.com/upLoad/news/month_2308/202308021454016138.jpg' },
        { title: '理论培训', src: 'https://www.henanjianan.com/upLoad/news/month_2308/202308021528088467.jpg' },
        { title: '技能培训', src: 'https://www.henanjianan.com/upLoad/news/month_2308/202308021448463703.jpg' },
        { title: '理论培训', src: 'https://www.henanjianan.com/upLoad/news/month_2308/202308021449205225.jpg' }
      ],
      arr3: [
        { title: '理论培训', src: 'https://www.henanjianan.com/upLoad/news/month_2308/202308021528088467.jpg' },
        { title: '技能培训', src: 'https://www.henanjianan.com/upLoad/news/month_2308/202308021448463703.jpg' },
        { title: '理论培训', src: 'https://www.henanjianan.com/upLoad/news/month_2308/202308021449205225.jpg' },
        { title: '理论培训', src: 'https://www.henanjianan.com/upLoad/news/month_2308/202308021453149036.jpg' },
        { title: '理论培训', src: 'https://www.henanjianan.com/upLoad/news/month_2308/202308021454016138.jpg' }
      ],
      arr4: [
        { title: '理论培训', src: 'https://www.henanjianan.com/upLoad/news/month_2308/202308021528088467.jpg' },
        { title: '技能培训', src: 'https://www.henanjianan.com/upLoad/news/month_2308/202308021448463703.jpg' },
        { title: '理论培训', src: 'https://www.henanjianan.com/upLoad/news/month_2308/202308021449205225.jpg' },
        { title: '理论培训', src: 'https://www.henanjianan.com/upLoad/news/month_2308/202308021453149036.jpg' },
        { title: '理论培训', src: 'https://www.henanjianan.com/upLoad/news/month_2308/202308021454016138.jpg' }
      ],
      flag1: true,
      flag2: false,
      flag3: false,
      flag4: false,
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
    doOne (til) {
      if (til === '设备设施') {
        this.flag1 = true
        this.flag2 = false
        this.flag3 = false
        this.flag4 = false
      } else if (til === '培训现场') {
        this.flag2 = true
        this.flag1 = false
        this.flag3 = false
        this.flag4 = false
      } else if (til === '实操现场') {
        this.flag3 = true
        this.flag1 = false
        this.flag2 = false
        this.flag4 = false
      } else if (til === '理考现场') {
        this.flag4 = true
        this.flag1 = false
        this.flag3 = false
        this.flag2 = false
      }
    }
  }
}
</script>
<style scoped>
.el-carousel__item {
  background-color:#fff !important;
}
.hj .hjxxk .bold {
    display: block;
    color: #FFFFFF;
    font-size: 18px;
    height: 42px;
    line-height: 42px;
    width: 140px;
    font-weight: bold;
    background: #C5282B;
    text-align: center;
    text-decoration: none;
}
 .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 220px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
.hj .hjxxk {
  border-bottom: 1px solid #dddddd;
  height: 42px;
  line-height: 42px;
}

/* .hj .hjxxk p {
  font-size: 16px;
  float: left;
  height: 42px;
  z-index: 1;
  width: auto;
  font-weight: bold;
  color: #fff;
  text-align: center;
  width: 140px;
  cursor: pointer;
} */

.hj .hjxxk p {
  display: block;
  font-size: 18px;
  color: #000000;
  height: 42px;
  width: 140px;
  line-height: 42px;
  text-align: center;
  font-weight: normal;
  background: #e5e5e5;
  text-decoration: none;
  cursor: pointer;
}

.hj {
  width: 1170px;
  height: 36px;
  margin: 0px auto;
  background: #FFFFFF;
}

.hj .hjxxk {
  border-bottom: 1px solid #dddddd;
  height: 42px;
  line-height: 42px;
}

.hj .hjxxk p {
  font-size: 16px;
  float: left;
  height: 42px;
  z-index: 1;
  width: auto;
  font-weight: bold;
  color: #000000;
  text-align: center;
  width: 140px;
  margin: 0;
}

.hjlist {
  width: 1170px;
  height: 220px;
  margin-top: 20px;
}</style>
