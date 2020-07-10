<template>
  <div class="book" v-on="$listeners">
    <span class="book-tag">HOT</span>
    <section class="left">
      <img :src="book.imgUrl" alt="图书图片" />
    </section>
    <section class="right">
      <h3 class="ly-ellipsis">{{ book.title }}</h3>
      <p class="author ly-ellipsis"><span>作者：</span> {{ book.author }}</p>
      <p class="describe van-multi-ellipsis--l2">
        {{ book.descript || "还没有简介哦" }}
      </p>
    </section>
  </div>
</template>
<script>
export default {
  props: {
    book: {
      type: Object,
      required: true
    }
  },
  setup() {}
};
</script>
<style lang="scss">
.book {
  margin-top: 15px;
  padding-bottom: 5px;
  height: 105px;
  border-bottom: 1px solid rgba($color: #efefef, $alpha: 1);
  display: flex;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  &-tag {
    display: inline-block;
    width: 100px;
    background: red;
    letter-spacing: 3px;
    position: absolute;
    color: #fff;
    left: -30px;
    top: 8px;
    text-align: center;
    transform: rotate(-45deg);
    box-shadow: 0 0 0 1px #fff inset;
    font-family: "微软雅黑";
    font-weight: 600;
  }
  .left {
    width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 80px;
      height: 100px;
    }
  }
  .right {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    h3 {
      line-height: 20px;
      font-size: 16px;
    }
    .author,
    .describe {
      font-size: 12px;
      color: #333;
      span {
        color: #000;
      }
    }
    .describe {
      text-indent: 2em;
      color: #666;
      font-weight: 200;
    }
  }
}
.ly-ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 1;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}
</style>
