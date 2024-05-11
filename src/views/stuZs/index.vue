<template>
  <div>
    <div style="background:#ffffff;  width:100%; margin:0 auto">
      <div style="width:500px; margin:0 auto"><a><img src="@/assets/images/seach.jpg" border="0" width="500"></a></div></div>
    <div class="ma">
      <div v-if="infoObj && !error" style="width:910px; margin:0 auto; ">
        <table width="910" height="422" border="0" align="right" cellpadding="5" cellspacing="0" bordercolor="#F0F0F0"
          bgcolor="#FFFFFF" style="font-size:14px; color:#000;">
          <tbody>
            <tr>
              <td height="117" align="center" valign="middle" style=" font-weight:400; padding-top:25px"><span
                  style="font-family: '黑体' Verdana, Geneva, sans-serif;   font-size:28px; color:#696969">证书结果查询</span>
              </td>
            </tr>
            <tr>
              <td height="265" align="center" valign="top" style="padding-top:20px">
                <table width="780" border="0" cellspacing="1" cellpadding="6" bgcolor="#CCCCCC" style="font-size:14px;">
                  <tbody>
                    <tr>
                      <td width="129" height="36" align="center" bgcolor="#FFFFFF" style="color:#7F7F7F">
                        姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名</td>
                      <td colspan="3" align="left" bgcolor="#FFFFFF" style="color:#7F7F7F">&nbsp;&nbsp;{{ infoObj.name }}</td>
                      <td width="120" rowspan="4" align="center" valign="top" bgcolor="#FFFFFF"><span><img
                            :src="infoObj.photoPath"
                            style="border:solid #FBFBFB 7px;width:120px; height:150px; margin:3px"></span></td>
                    </tr>
                    <tr>
                      <td height="38" align="center" bgcolor="#FFFFFF" style="color:#7F7F7F">
                        性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别</td>
                      <td width="139" align="left" bgcolor="#FFFFFF" style="color:#7F7F7F">&nbsp;&nbsp;{{ infoObj.gendName }}</td>
                      <td width="120" align="center" bgcolor="#FFFFFF" style="color:#7F7F7F">出生日期</td>
                      <td width="238" align="left" bgcolor="#FFFFFF" style="color:#7F7F7F">&nbsp;&nbsp;{{ infoObj.birthdayTime }}</td>
                    </tr>
                    <tr>
                      <td height="38" align="center" bgcolor="#FFFFFF" style="color:#7F7F7F">
                        课&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;程</td>
                      <td colspan="3" align="left" bgcolor="#FFFFFF" style="color:#7F7F7F">&nbsp;&nbsp;{{ infoObj.careerName }}</td>
                    </tr>
                    <tr>
                      <td height="38" align="center" bgcolor="#FFFFFF" style="color:#7F7F7F">身份证号</td>
                      <td colspan="3" align="left" bgcolor="#FFFFFF" style="color:#7F7F7F">&nbsp;&nbsp;{{ infoObj.idNo }}
                      </td>
                    </tr>
                    <tr>
                      <td height="48" align="center" bgcolor="#FFFFFF" style="color:#7F7F7F">证书编号</td>
                      <td colspan="4" align="left" bgcolor="#FFFFFF" style="color:#7F7F7F">&nbsp;&nbsp;{{ infoObj.certificateNo }}</td>
                    </tr>

                  </tbody>
                </table>
              </td>
            </tr>

            <tr>
              <td height="33" align="center">&nbsp;</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-else-if="!infoObj && !error" style="width:910px; margin:0 auto; ">
        <table width="910" height="422" border="0" align="right" cellpadding="5" cellspacing="0" bordercolor="#F0F0F0"
          bgcolor="#FFFFFF" style="font-size:14px; color:#000;">
          <tbody>
            <tr>
              <td height="117" align="center" valign="middle" style=" font-weight:400; padding-top:25px"><span
                  style="font-family: '黑体' Verdana, Geneva, sans-serif;   font-size:28px; color:#696969">记录不存在</span>
              </td>
            </tr>
            <tr>
              <td height="33" align="center">&nbsp;</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-else-if="error" style="width:910px; margin:0 auto; ">
        <table width="910" height="422" border="0" align="right" cellpadding="5" cellspacing="0" bordercolor="#F0F0F0"
          bgcolor="#FFFFFF" style="font-size:14px; color:#000;">
          <tbody>
            <tr>
              <td height="117" align="center" valign="middle" style=" font-weight:400; padding-top:25px"><span
                  style="font-family: '黑体' Verdana, Geneva, sans-serif;   font-size:28px; color:#696969">查询错误</span>
              </td>
            </tr>
            <tr>
              <td height="33" align="center">&nbsp;</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'stuZs',
  data () {
    return {
      infoObj: JSON.parse(localStorage.getItem('info')),
      error: JSON.parse(localStorage.getItem('error'))
    }
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
  display: inline-block;
  /* width: 900px; */
  /* float: left; */
  height: 80px;
  overflow: hidden;
  text-align: center;
  position: relative;
  left: -122px;
}

.logo .title {
  display: inline-block;
  width: 300px;
  /* float: left; */
  height: 80px;
  overflow: hidden;
  /* line-height: 3; */
  /* margin-left:20px; */
  position: absolute;
  top: 10px;
}

.py {
  height: 20px;
  font-size: 12px;
  display: block;
}
.ma {
    width: 100%;
    height: auto;
    overflow: hidden;
    margin: 0 auto;
    margin-top: 0px;
    background: url("http://zs.hnrz.org.cn/images/bg.jpg") center no-repeat;
    padding-top: 71px;
    padding-bottom: 61px;
}</style>
