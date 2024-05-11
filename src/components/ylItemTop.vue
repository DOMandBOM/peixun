<template>
  <div class="contit">
    <h2>{{ title }}</h2>
    <!-- <span>{{ where }}<router-link to="/">{{ home }}</router-link> &gt; {{ title }}</span> -->
  </div>
</template>

<script>
export default {
  name: 'ylItemTop',
  props: ['title'],
  data () {
    return {
      where: '您现在的位置：',
      home: '南方职培宣传'
    }
  }

}
</script>
<style></style>
