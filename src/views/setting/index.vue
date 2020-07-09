<template>
  <div class="setting">
    <van-cell-group class="setting-item">
      <van-cell title="账号与安全" is-link />
    </van-cell-group>
    <van-cell-group class="setting-item">
      <van-cell title="隐式" is-link />
      <van-cell title="通用" is-link />
    </van-cell-group>
    <van-cell-group class="setting-item">
      <van-cell title="关于图书管理系统" is-link />
      <van-cell is-link>
        <template #title>
          <span class="custom-title">帮助与反馈</span>
          <van-icon name="bulb-o" class="icon_tips" />
        </template>
      </van-cell>
    </van-cell-group>
    <van-cell-group class="setting-item">
      <van-cell is-link>
        <template #title>
          <span class="custom-title">检测更新</span>
          <span class="new_tips">NEW</span>
        </template>
      </van-cell>
    </van-cell-group>
    <section class="btn-wrapper">
      <van-button type="danger" block @click="() => (show = !show)"
        >退出登录</van-button
      >
    </section>
    <van-dialog
      v-model="show"
      title="提示"
      show-cancel-button
      @confirm="logout"
    >
      <p style="text-align: center; line-height: 200%;">
        你确定退出登录吗？
      </p>
    </van-dialog>
  </div>
</template>

<script>
import { reactive, toRefs } from "@vue/composition-api";
export default {
  setup(props, ctx) {
    const _this = ctx.root;
    const data = reactive({
      show: false
    });
    const logout = async () => {
      await _this.$store.dispatch("user/logout");
      _this.$router.push("/login");
    };
    const methods = {
      logout
    };
    return {
      ...toRefs(data),
      ...methods
    };
  }
};
</script>

<style lang="scss">
.setting {
  &-item {
    margin: 10px 0;
  }
  &-item:nth-of-type(1) {
    margin: 0;
  }
  .btn-wrapper {
    width: 90%;
    margin: 20px auto 0 auto;
  }
  .new_tips {
    padding: 3px 3px;
    background: red;
    color: #fff;
    font-weight: 600;
    font-size: 12px;
    margin-left: 3px;
    font-family: "微软雅黑";
  }
  .icon_tips {
    vertical-align: middle;
  }
}
</style>
