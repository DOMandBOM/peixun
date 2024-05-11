<template>
  <div>
    <!-- <ylSonBanner></ylSonBanner> -->
    <div class="wrap" style="margin:30px auto; position:relative; overflow:hidden;">
      <!-- <div class="leftbox">
        <div id="sticky">
          <h2>快捷导航</h2>
          <el-menu default-active="0" router class="el-menu-vertical-demo" background-color="#dddddd" @open="handleOpen"
            @close="handleClose">
            <el-menu-item index="/ylIntro">
              <span slot="title">学校简介</span>
            </el-menu-item>
            <el-menu-item index="/ylYangben?id=11">
              <span slot="title">资质荣誉</span>
            </el-menu-item>
            <el-menu-item index="ylBaoMing?id=21">
              <span slot="title">新闻动态</span>
            </el-menu-item>
            <el-menu-item index="/ylWe">
              <span slot="title">联系我们</span>
            </el-menu-item>
          </el-menu>
        </div>
      </div> -->
      <div class="rightbox">
        <ylItemTop :title="title"></ylItemTop>
        <div class="info">
          <div style="padding:10px 20px;">
            <p> 温馨提示：亲，请您仔细填写在线报名信息，以便来时能更好地为你作好报名和安排工作；另外，请不要重复提交报名申请,否则本系统将会自动删除报名申请的信息资料。</p>
            <el-form label-position="right" label-width="80px" :model="info" :rules="rules" ref="info">
              <el-form-item label="您的姓名：" prop="name">
                <el-input v-model="info.name"></el-input>
              </el-form-item>
              <el-form-item label="联系电话：" prop="phone">
                <el-input v-model="info.phone"></el-input>
              </el-form-item>
              <!-- <el-form-item label="办理工种：" prop="workType">
                <el-select placeholder="请选择" v-model="info.workType">
                  <el-option v-for="item in options" :key="item.value" :label="item.name"
                    :value="item.id"></el-option>
                </el-select>
              </el-form-item> -->
              <el-form-item label="单位名称：" prop="unitName">
                <el-input v-model="info.unitName"></el-input>
              </el-form-item>
              <el-form-item label="备注信息：" prop="remark">
                <el-input type="textarea" v-model="info.remark" :autosize="{ minRows: 4, maxRows: 4 }"
                  placeholder="请输入内容">
                </el-input>
              </el-form-item>
              <el-form-item>
                <el-button @click="doSure('info')"
                  style="width: 300px;margin-top: 30px; margin-left: 100px;background-color: #c20106;border: 0;color:#fff">
                  点击提交</el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import ylSonBanner from '@/components/ylSonBanner.vue'
import ylItemTop from '@/components/ylItemTop.vue'

import { getSubmit, getSelect } from '@/api/ylNavList'
export default {
  name: 'ylOnline',
  components: {
    // ylSonBanner,
    ylItemTop
  },
  data () {
    return {
      title: '在线报名',
      info: {
        name: '',
        phone: '',
        // workType: '',
        unitName: '',
        remark: ''
      },
      rules: {
        name: [
          { type: 'string', required: true, message: '请输入名字', trigger: 'blur' },
          { type: 'string', min: 2, max: 20, message: '名字格式不正确', trigger: 'blur' }
        ],
        phone: [
          { type: 'string', required: true, message: '请输入手机号', trigger: 'blur' },
          { type: 'string', min: 11, max: 11, message: '手机号格式不正确', trigger: 'blur' }
        ],
        // workType: [
        //   { required: true, message: '请选择办理工种', trigger: 'change' }
        // ],
        unitName: [
          { required: true, message: '请输入单位名称', trigger: 'blur' }
        ]
      }
      // options: []
    }
  },
  created () {
    // this.getSelect()
  },
  methods: {
    handleOpen (key, keyPath) {
      // console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      // console.log(key, keyPath)
    },
    doSure (info) {
      this.$refs[info].validate(async (valid) => {
        if (valid) {
          const res = await getSubmit(this.info)
          // console.log(res, 9999999999999)
          if (res.code === 0) {
            this.$message.success('提交成功')
            this.$refs[info].resetFields()
          } else {
            this.$message.warning('提交失败')
            this.$refs[info].resetFields()
          }
        }
      })
    },
    async getSelect () {
      const res = await getSelect()
      // console.log(res)
      this.options = res.data.list
    }
  }
}
</script>

<style scoped>
::v-deep .el-menu-item {
  border-bottom:1px solid #fff;
}
::v-deep .el-form-item__error {
  left:60px
}
::v-deep .el-textarea__inner {
  resize: none;
}

::v-deep .el-form-item__label {
  width: 140px !important;
  font-weight: bolder !important;
}

::v-deep .el-input {
  width: 400px !important;
}

::v-deep .el-textarea {
  width: 400px !important;
}

.leftbox {
  width: 300px;
  background: white;
  float: left;
  padding: 15px;
  overflow: hidden;
}

#sticky {
  width: 300px;
  background: white;
  margin-top: 0px;
  margin-left: 0px;
  top: 0px;
  left: 0px;
}

.leftbox h2 {
  font-size: 24px;
  font-weight: bold;
  display: block;
  padding-left: 30px;
  height: 95px;
  line-height: 95px;
  background: #c20106;
  border-bottom: solid 6px #990000;
  color: white;
  overflow: hidden;
}

.leftbox ul {
  display: block;
  width: 298px;
  /* border: 1px solid #dcdcdc; */
  overflow: hidden;
}

.leftbox ul li a {
  display: block;
  background: #dddddd;
  width: 268px;
  padding-left: 30px;
  text-align: left;
  text-decoration: none;
  line-height: 55px;
  border-bottom: solid 1px #ececec;
  margin: 0;
  font-size: 16px;
  font-weight: normal;
  color: #000;
}

.rightbox {
  width: 790px;
  /* float: right; */
  margin: 0 auto;
  background: white;
  padding: 15px 20px;
  /* min-height: 1000px; */
  overflow: hidden;
}

.contit {
  border-bottom: 1px dashed #cdcdcd;
  height: 80px;
  line-height: 80px;
  overflow: hidden;
}

.contit h2 {
  font-size: 24px;
  font-weight: bold;
  display: block;
  float: left;
  width: 400px;
}

.contit span {
  float: right;
  font-size: 15px;
  color: #999;
}

.rightbox .info {
  font-size: 14px;
  line-height: 2em;
  padding: 10px 0px;
}

.rightbox .info p {
  font-size: 15px;
  line-height: 35px;
  overflow: hidden;
}

.info table {
  width: 700px;
  margin: 20px auto;
  overflow: hidden;
}

.info input {
  width: 240px;
  padding-left: 10px;
  overflow: hidden;
}

.info span.fontred {
  color: red;
}

.info input.btn {
  background: #c20106;
  color: white;
}

.info input,
.info select.msgslt,
.info textarea {
  border: 1px solid #ccc;
  width: 300px;
  height: 33px;
  line-height: 33px;
  background: #fff;
  color: #333333;
  border: #ccc 1px solid;
  border-radius: 2px;
  padding-left: 10px;
  overflow: hidden;
}
</style>
