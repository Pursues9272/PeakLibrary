<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'

interface FormItem {
  user: string
  pass: string
}

const ruleFormRef = ref<FormInstance>()
const formData = reactive<FormItem>({
  user: '',
  pass: ''
})

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!', valid, formData, fields)
      //@ts-ignore
      ElMessage({
        message: '登录成功',
        grouping: true,
        type: 'success'
      })
    } else {
      console.log('error submit!', fields)
    }
  })
}
</script>

<template>
  <div class="logon-box">
    <header>
      <img src="@/assets/logon_image/loge.png" alt="loge" />
      <div class="head-title">
        <span>望康宝后台管理系统</span>
        <span>WellBeing Backstage Management System</span>
      </div>
    </header>
    <main>
      <aside>
        <img src="@/assets/logon_image/logonMain.png" alt="logonMain" />
      </aside>
      <section>
        <div class="section-from">
          <h2>登录</h2>
          <el-form :model="formData" ref="ruleFormRef">
            <el-form-item class="from-input-colls">
              <el-input
                v-model="formData.user"
                placeholder="请输入用户名"
                style="width: 640px; height: 100px"
              >
                <template #prefix>
                  <img
                    src="@/assets/logon_image/logonUser.png"
                    height="46"
                    width="46"
                    alt="logonUser"
                  />
                </template>
              </el-input>
              <el-input
                type="password"
                placeholder="请输入密码"
                style="width: 640px; height: 100px"
                v-model="formData.pass"
                show-password
              >
                <template #prefix>
                  <img
                    src="@/assets/logon_image/logonPass.png"
                    height="46"
                    width="46"
                    alt="logonPass"
                  />
                </template>
              </el-input>
            </el-form-item>
          </el-form>
          <div class="form-but">
            <el-button @click="submitForm(ruleFormRef)">登录</el-button>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped lang="less">
@import './LogonStyle.less';
</style>
