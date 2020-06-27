<template>
  <div>
    <Head />
    <section class="mt-20">
      <van-grid :gutter="20" :column-num="3">
        <van-grid-item class="oper-item" @click="toDetail">
          <svg-icon icon-class="borrow" class-name="icon_style"></svg-icon>
          <small>已借阅</small>
        </van-grid-item>
        <van-grid-item class="oper-item" @click="toDetail">
          <svg-icon icon-class="return" class-name="icon_style"></svg-icon>
          <small>已归还</small>
        </van-grid-item>
        <van-grid-item class="oper-item" @click="toDetail">
          <svg-icon icon-class="comment" class-name="icon_style"></svg-icon>
          <small>已评论</small>
        </van-grid-item>
      </van-grid>
    </section>
    <section class="mt-20">
      <van-cell-group>
        <van-cell title="借阅积分" is-link icon="label-o" @click="toDetail" />
        <van-cell is-link @click="toDetail">
          <template #title>
            <span class="active-title">活动列表</span>
            <van-tag class="active-tag" type="danger">HOT</van-tag>
          </template>
        </van-cell>
      </van-cell-group>
    </section>
  </div>
</template>
<script>
// import { reactive, toRefs, computed } from "@vue/composition-api";
import Head from "./components/head";
export default {
  components: {
    Head
  },
  setup(props, ctx) {
    const _this = ctx.root;
    const toDetail = () => {
      _this.$toast("敬请期待");
    };
    return {
      toDetail
    };
  }
};
</script>
<style lang="scss" scoped>
.mt-20 {
  margin-top: 20px;
}
.oper-item {
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  cursor: pointer;
  .icon_style {
    font-size: 32px;
    margin-bottom: 5px;
  }
}
.active-tag {
  margin-left: 3px;
  font-weight: 700;
}
</style>
