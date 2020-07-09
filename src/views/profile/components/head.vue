<template>
  <div class="head">
    <div class="avatar">
      <img
        src="https://img.yzcdn.cn/vant/apple-1.jpg"
        v-on="$listeners"
        alt="头像"
      />
    </div>
    <section class="intro">
      <h2 class="van-ellipsis">CODERLY</h2>
      <p class="desc van-ellipsis">
        {{ "这家伙很懒，还没有动态，省略号这家伙很懒，还没有动态，省略号" }}
      </p>
    </section>
    <span class="link" @click="toDetail"><van-icon name="arrow"/></span>
  </div>
</template>
<script>
// import { reactive, toRefs, computed } from "@vue/composition-api";
export default {
  setup(props, ctx) {
    const _this = ctx.root;
    const toDetail = () => {
      _this.$toast("敬请期待");
    };
    return { toDetail };
  }
};
</script>
<style lang="scss" scoped>
.head {
  background: lightskyblue;
  height: 120px;
  display: flex;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    height: 10px;
    bottom: -1px;
    left: 0;
    right: 0;
    z-index: 2;
    background: #f5f5f5;
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
  }
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
