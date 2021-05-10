<template>
  <div class="comments">
    <a-alert
        description="描述"
        type="info"
        show-icon
    >
      <p slot="message">
        评论支持 <span style="color: #017e66">markdown</span>，评论内容不能超过500字符
      </p>
    </a-alert>
    <a-form :form="form" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }" @submit="handleSubmit">
      <a-form-item label="Nickname">
        <a-input
            v-decorator="['note', { rules: [{ required: true, message: 'Please input your note!' }] }]"
        />
      </a-form-item>
      <a-form-item label="E-mail">
        <a-select
            v-decorator="[
          'gender',
          { rules: [{ required: true, message: 'Please select your gender!' }] },
        ]"
            placeholder="Select a option and change input text above"
            @change="handleSelectChange"
        >
          <a-select-option value="male">
            male
          </a-select-option>
          <a-select-option value="female">
            female
          </a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
        <a-button type="primary" html-type="submit">
          提交
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script src="./index.js"></script>

<style scoped lang="less">
@import "./index";
</style>
