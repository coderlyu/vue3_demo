<template>
  <div class="login">
    <van-nav-bar title="登录" fixed />
    <section class="login-body">
      <van-form @submit="onSubmit">
        <van-field
          v-model="user.username"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="user.password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div style="margin: 16px;">
          <van-button round block type="info" native-type="submit">
            提交
          </van-button>
        </div>
      </van-form>
    </section>
  </div>
</template>

<script>
import { reactive, toRefs } from "@vue/composition-api";
export default {
  setup(props, ctx) {
    const _this = ctx.root;
    const data = reactive({
      user: {
        username: "",
        password: ""
      }
    });
    const onSubmit = () => {
      _this.$store.dispatch("user/login", data.user);
    };
    return {
      ...toRefs(data),
      onSubmit
    };
  }
};
</script>

<style lang="scss">
.login {
  height: 100vh;
  position: relative;
  // background: radial-gradient(#54a3ee, #177fde);
  background: radial-gradient(#ffffff, #5aaffd);
  .login-body {
    height: 200px;
    position: absolute;
    left: 0;
    right: 0;
    top: 40%;
    // transform: translateY(-50%);
  }
}
</style>
