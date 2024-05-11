<template>
<div class="wrap">
  <el-pagination
  background
  style="padding: 5px 0 40px 500px;"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-size="80"
      layout="total, prev, pager, next, jumper"
      :total="90">
    </el-pagination>
</div>
</template>

<script>
export default {
  methods: {
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    }
  },
  data () {
    return {
      currentPage: 1
    }
  }
}
</script>
<style>

</style>
