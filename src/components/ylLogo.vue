<template>
  <div class="logo">
    <div class="wrap m40">
      <h1><a href="/"><img v-if="a1" :src="a1" alt="南方职培宣传"></a></h1>
      <!-- <div class="tel">
        <span>24小时报名热线电话</span>
        <span class="telnum">0371-63933926</span>
      </div> -->
    </div>

  </div>
</template>

<script>
import titleSrc from '@/assets/images/title.jpg'
export default {
  data () {
    return {
      a1: null
    }
  },
  mounted () {
    this.a1 = titleSrc
  }
}
</script>
<style scoped>
.logo {
  background: white;
  height: 160px;
  overflow: hidden;
}
.logo h1 {
    display: block;
    width: 900px;
    float: left;
    height: 80px;
    overflow: hidden;
  }

.tel {
  height: 60px;
  margin-top: 10px;
  float: right;
  background: url(../assets/images/tel.gif) left 5px no-repeat;
}

.tel span {
  display: block;
  padding-left: 60px;
  font-size: 14px;
  color: #000;
}

.tel span.telnum {
  font-size: 30px;
  color: #000;
  font-weight: bold;
  font-family: Arial, Gotham, "Helvetica Neue", sans-serif;
  color: #c20001;
  letter-spacing: -1px;
}
</style>
