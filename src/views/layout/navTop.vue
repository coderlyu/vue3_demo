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

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { reactive, toRefs, computed, watch } from "@vue/composition-api";

interface dataName {
  route: any;
  rightFlag: number;
  rightClick: clickName;
  leftFlag: number;
  leftClick: clickName;
  [prop: string]: any;
}
interface clickName {
  (): void;
}
@Component
export default class NavTop extends Vue {
  setup(props: any, ctx: any) {
    const _this: any = ctx.root;
    const route = computed(() => _this.$route);
    const data: dataName = reactive({
      route,
      rightFlag: 0,
      rightClick: () => {},
      leftFlag: 0,
      leftClick: () => {}
    });
    let clickRight: clickName[] = [
      () => {},
      () => {
        _this.$router.push("/profile/setting");
      }
    ];
    let clickLeft: clickName[] = [
      () => {},
      () => {
        _this.$router.go(-1);
      }
    ];
    const getVal = (
      data: dataName,
      clickLeft: clickName[],
      clickRight: clickName[]
    ) => {
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

    getVal(data, clickLeft, clickRight);
    watch(route, () => {
      getVal(data, clickLeft, clickRight);
    });
    return {
      ...toRefs(data)
    };
  }
}
</script>

<style></style>
