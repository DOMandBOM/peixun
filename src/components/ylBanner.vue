<template>
  <div class="banner">
    <div id="full-screen-slider">
      <el-carousel :interval="5000" arrow="always" height="500px">
        <!-- <el-carousel-item v-for="item in arr" :key="item">
          <img :src="item" alt="">
        </el-carousel-item> -->
        <el-carousel-item v-if="a1">
          <img :src="a1" alt="">
        </el-carousel-item>
        <el-carousel-item v-if="a2">
          <img :src="a2" alt="">
        </el-carousel-item>
        <el-carousel-item v-if="a3">
          <img :src="a3" alt="">
        </el-carousel-item>
        <el-carousel-item v-if="a4">
          <img :src="a4" alt="">
        </el-carousel-item>
        <el-carousel-item v-if="a5">
          <img :src="a5" alt="">
        </el-carousel-item>
      </el-carousel>

    </div>
  </div>
</template>

<script>
import imgSrc1 from '@/assets/images/banner/banner1.jpg'
import imgSrc2 from '@/assets/images/banner/banner2.jpg'
import imgSrc3 from '@/assets/images/banner/banner3.jpg'
import imgSrc4 from '@/assets/images/banner/banner4.jpg'
import imgSrc5 from '@/assets/images/banner/banner5.jpg'
export default {
  data () {
    return {
      a1: null,
      a2: null,
      a3: null,
      a4: null,
      a5: null
    }
  },
  mounted () {
    this.a1 = imgSrc1
    this.a2 = imgSrc2
    this.a3 = imgSrc3
    this.a4 = imgSrc4
    this.a5 = imgSrc5
  }
}
</script>
<style scoped>
.el-carousel__item {
  background-color:#fff !important;
}
.banner {
  height: 500px;
  margin: 0px auto;
  overflow: hidden;
}

#full-screen-slider {
  width: 100%;
  height: 500px;
  position: relative;
  z-index: 10;
  margin: 0px auto;
}

.el-carousel {
  width: 1520px;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
}

.el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  .el-carousel__item {
    width: 1520px;
  }
  .el-carousel__item, .el-carousel__mask {
    left:50%;
    transform: translateX(-50%) !important;
  }
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
