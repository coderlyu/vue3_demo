<template>
  <div class="layout">
    <van-nav-bar class="h_style" fixed>
      <template #title>
        <span class="h_title">{{
          (route && route.meta && route.meta.title) || ""
        }}</span>
      </template></van-nav-bar
    >
    <main>
      <header></header>
      <router-view />
      <footer></footer>
    </main>
    <van-tabbar route>
      <van-tabbar-item to="/home" icon="home-o">主页</van-tabbar-item>
      <van-tabbar-item to="/profile" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { reactive, toRefs, computed } from "@vue/composition-api";
export default {
  setup(props, ctx) {
    const route = computed(() => ctx.root.$route);
    const data = reactive({
      route
    });
    return {
      ...toRefs(data)
    };
  }
};
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
</style>
