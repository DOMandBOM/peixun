<template>
  <div>
    <div class="wrap m40">
      <div class="info">
        <div style="padding:10px 20px;">
          <h2 style="text-align: center;margin-bottom: 40px;">证书查询系统</h2>
          <el-form label-position="right" label-width="80px" :model="info" :rules="rules" ref="info">
            <el-row>
              <el-col :span="10" :offset="7">
                <el-form-item label="姓名：" prop="name">
                  <el-input v-model="info.name"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="10" :offset="7">
                <el-form-item label="编号：" prop="certificateNo">
                  <el-input v-model="info.certificateNo"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="6" :offset="7">
                <el-form-item label="验证码" prop="code">
                  <el-input v-model="info.code"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="4" :offset="1">
                <img id="verifyCode" @click="changeImg" style="background-color: pink;height: 38px;width: 146px;cursor: pointer;">
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="17" :offset="5">
                <el-form-item>
                  <el-button @click="doSure('info')"
                    style="width: 400px; margin-left: 100px;background-color: #c20106;border: 0;color:#fff">查询</el-button>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { getLoginZs } from '@/api/ylNavList'
export default {
  name: 'yiSearch',
  data () {
    return {
      imgVal: null,
      info: {
        name: '',
        certificateNo: '',
        code: ''
      },
      rules: {
        name: [
          { type: 'string', required: true, message: '请输入名字', trigger: 'blur' },
          { type: 'string', min: 2, max: 20, message: '名字格式不正确', trigger: 'blur' }
        ],
        certificateNo: [
          { type: 'string', required: true, message: '请输入编号', trigger: 'blur' }
        ],
        code: [
          { type: 'string', required: true, message: '请输入验证码', trigger: 'blur' }
          // { type: 'string', min: 4, max: 4, message: '验证码为四位数', trigger: 'blur' }
        ]
      }
    }
  },
  mounted () {
    this.getYz()
  },
  methods: {
    getYz () {
      document.querySelector('#verifyCode').src = `${process.env.VUE_APP_API_URL}/web-api/dunsi/captcha/get?t=` + (new Date().getTime())
    },
    changeImg () {
      this.getYz()
    },
    doSure (info) {
      this.$refs[info].validate(async (valid) => {
        if (valid) {
          const res = await getLoginZs(this.info)
          const url = this.$router.resolve({
            path: '/stuZs'
          })
          if (res.code === 0) {
            if (res.data?.list.length > 0) {
              this.info = {
                name: '',
                certificateNo: '',
                code: ''
              }
              window.open(url.href, '_blank')
              localStorage.setItem('info', JSON.stringify(res.data.list[0]))
              localStorage.setItem('error', 'false')
            } else {
              this.info = {
                name: '',
                certificateNo: '',
                code: ''
              }
              window.open(url.href, '_blank')
              localStorage.setItem('info', JSON.stringify(res.data.list[0]))
              localStorage.setItem('error', 'false')
            }
          } else if (res.code > 0) {
            this.info = {
              name: '',
              certificateNo: '',
              code: ''
            }
            window.open(url.href, '_blank')
            localStorage.setItem('info', '{}')
            localStorage.setItem('error', 'true')
          }
          this.getYz()
        }
      })
    }
  }
}
</script>
<style scoped>
.info {
  font-size: 14px;
  line-height: 2em;
  padding: 10px 0px;
  background-color: #fff;
}
</style>
