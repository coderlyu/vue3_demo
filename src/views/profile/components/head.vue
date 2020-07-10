<template>
  <div class="head">
    <div class="avatar">
      <img :src="avatar" v-on="$listeners" alt="头像" />
    </div>
    <section class="intro">
      <h2 class="van-ellipsis">{{ name }}</h2>
      <p class="desc van-ellipsis">
        {{ intro }}
      </p>
    </section>
    <span class="link" @click="toDetail"><van-icon name="arrow"/></span>
  </div>
</template>
<script>
import { reactive, toRefs, computed } from "@vue/composition-api";
export default {
  setup(props, ctx) {
    const _this = ctx.root;
    const toDetail = () => {
      _this.$toast("敬请期待");
    };
    const data = reactive({
      name: computed(() => _this.$store.getters["user/name"]),
      avatar: computed(() => _this.$store.getters["user/avatar"]),
      intro: computed(() => _this.$store.getters["user/intro"])
    });
    return { ...toRefs(data), toDetail };
  }
};
</script>
<style lang="scss" scoped>
.head {
  background: lightskyblue;
  height: 120px;
  display: flex;
  position: relative;
  .avatar {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    img {
      width: 80px;
      height: 80px;
      box-shadow: 0 0 0 3px #fff;
      border-radius: 50%;
    }
  }
  .intro {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-around;
    padding: 20px 0;
    overflow: hidden;
    h2 {
      color: #fff;
      font-size: 16px;
      font-weight: 700;
    }
    .desc {
      color: #efefef;
      font-size: 12px;
    }
  }
  .link {
    cursor: pointer;
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    i {
      font-size: 25px;
      color: #fff;
      font-weight: 700;
    }
  }
}
</style>
