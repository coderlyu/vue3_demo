<template>
  <div>
    profile
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
<style lang="scss" scoped></style>
