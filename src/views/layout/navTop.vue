<template>
  <div>
    <van-nav-bar class="h_style" fixed>
      <template #title>
        <span class="h_title">{{
          (route && route.meta && route.meta.title) || ""
        }}</span>
      </template>
      <template v-if="leftFlag && leftFlag === 1" #left>
        <van-icon @click="leftClick" name="arrow-left" />
      </template>
      <template v-if="rightFlag && rightFlag === 1" #right>
        <van-icon @click="rightClick" name="setting-o" />
      </template>
    </van-nav-bar>
  </div>
</template>

<script>
import { reactive, toRefs, computed, watch } from "@vue/composition-api";
export default {
  setup(props, ctx) {
    const _this = ctx.root;
    const route = computed(() => _this.$route);
    const data = reactive({
      route,
      rightFlag: 0,
      rightClick: () => {},
      leftFlag: 0,
      leftClick: () => {}
    });
    let clickRight = [
      () => {},
      () => {
        _this.$router.push("/profile/setting");
      }
    ];
    let clickLeft = [
      () => {},
      () => {
        _this.$router.go(-1);
      }
    ];
    const getVal = (data, clickLeft, clickRight) => {
      data.rightFlag =
        route.value && route.value.meta && route.value.meta.rightFlag;
      data.rightClick =
        route.value &&
        route.value.meta &&
        clickRight[route.value.meta.rightFlag];
      data.leftFlag =
        route.value && route.value.meta && route.value.meta.leftFlag;
      data.leftClick =
        route.value && route.value.meta && clickLeft[route.value.meta.leftFlag];
    };
    watch(() => {
      getVal(data, clickLeft, clickRight);
    }, [route]);
    getVal(data, clickLeft, clickRight);
    return {
      ...toRefs(data)
    };
  }
};
</script>

<style></style>
