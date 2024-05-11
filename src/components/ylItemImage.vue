<template>
  <div class="info">
    <ul>
      <li @click="goPage(item.id)" v-for="item, index in arr" :key="index">
        <img v-if="item.picPath" :src="item.picPath" :alt="item.title">
        <!-- <img v-else src="@/assets/images/noImg.jpg" alt="暂无图片"> -->
        <el-tooltip class="item" effect="dark" :content="item.title" placement="top">
          <p style="cursor: pointer;text-align: center;" id="doSlOne">{{ item.title }}</p>
        </el-tooltip>

      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ylItemImage',
  props: {
    arr: {
      type: Array,
      required: true
    }
  },
  methods: {
    goPage (id) {
      this.$router.push('/ylImg?id=' + id)
    }
  }
}
</script>
<style scoped>
#doSlOne {
  overflow:hidden;
text-overflow:ellipsis;
white-space:nowrap;
}
</style>
