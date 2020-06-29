<template>
  <div>
    <van-nav-bar class="h_style" fixed>
      <template #title>
        <span class="h_title">{{
          (route && route.meta && route.meta.title) || ""
        }}</span>
      </template>
      <template v-if="rightFlag && rightFlag === 1" #right>
        <van-icon @click="rightClick" name="setting-o" />
      </template>
    </van-nav-bar>
  </div>
</template>

<script>
import { reactive, toRefs, computed } from "@vue/composition-api";
export default {
  setup(props, ctx) {
    const _this = ctx.root;
    const route = computed(() => _this.$route);
    const data = reactive({
      route,
      rightFlag: 0,
      rightClick: () => {}
    });
    let clickSetting = [
      () => {},
      () => {
        _this.$router.push("/profile/setting");
      }
    ];
    data.rightFlag =
      route.value && route.value.meta && route.value.meta.rightFlag;
    data.rightClick =
      route.value &&
      route.value.meta &&
      clickSetting[route.value.meta.rightFlag];
    return {
      ...toRefs(data)
    };
  }
};
</script>

<style></style>
