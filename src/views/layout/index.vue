<template>
  <div class="layout">
    <navTop />
    <main>
      <header></header>
      <router-view />
      <footer></footer>
    </main>
    <van-tabbar route>
      <van-tabbar-item to="/home" icon="home-o">主页</van-tabbar-item>
      <span class="tab_more">
        <van-icon name="add-o" @click="addMore" />
      </span>
      <van-tabbar-item to="/profile" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script lang="ts">
// import { reactive, toRefs, computed } from "@vue/composition-api";
import { Component, Vue } from "vue-property-decorator";
import navTop from "./navTop.vue";

@Component({
  components: {
    navTop
  }
})
export default class Layout extends Vue {
  setup(props: any, ctx: any) {
    const _this: any = ctx.root;
    const addMore = (): void => {
      _this.$toast("敬请期待");
    };
    return {
      addMore
    };
  }
}
</script>

<style lang="scss" scoped>
.layout {
  overflow-y: auto;
  overflow-x: hidden;
}
header {
  height: 46px;
}
main {
  min-height: calc(100vh - 46px);
}
footer {
  height: 50px;
}
.tab_more {
  height: 50px;
  width: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  i {
    font-size: 40px;
    color: lightskyblue;
  }
}
</style>
