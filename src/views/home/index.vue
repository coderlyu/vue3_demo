<template>
  <div>
    <!-- 顶部搜索框 开始 -->
    <van-search
      v-model="searchKey"
      show-action
      background="#4fc08d"
      label="关键字"
      placeholder="请输入搜索关键词"
      @search="onSearch"
    >
      <template #action>
        <div @click="onSearch">搜索</div>
      </template>
    </van-search>
    <!-- 顶部搜索框 结束  -->
    <!-- 中上部 操作项 开始 -->
    <section class="operations">
      <van-grid border :column-num="2" :gutter="20">
        <van-grid-item>
          <section @click="toBorrow" class="oper-item">
            <svg-icon icon-class="borrow" class-name="icon_style"></svg-icon>
            <span>借书</span>
          </section>
        </van-grid-item>
        <van-grid-item>
          <section @click="toReturn" class="oper-item">
            <svg-icon icon-class="return" class-name="icon_style"></svg-icon>
            <span>还书</span>
          </section>
        </van-grid-item>
      </van-grid>
    </section>
    <!-- 中上部 操作项 结束 -->
    <!-- 下部分 列表项 开始 -->
    <section class="list-wrapper">
      <h2>图书列表</h2>
      <van-dropdown-menu>
        <van-dropdown-item v-model="typeVal" :options="typeOpt" />
        <van-dropdown-item v-model="orderVal" :options="orderOpt" />
      </van-dropdown-menu>
      <van-pull-refresh v-model="reLoading" @refresh="onRefresh">
        <div class="list" v-if="bookList.length > 0">
          <template v-for="item in bookList">
            <book-item
              :book="item"
              :key="item.id"
              @click="toBookDetail(item)"
            />
          </template>
        </div>
        <van-empty
          v-else
          class="custom-image"
          image="https://img.yzcdn.cn/vant/custom-empty-image.png"
          description="还没有数据呢"
        />
      </van-pull-refresh>
    </section>
    <!-- 下部分 列表项 结束 -->
  </div>
</template>
<script>
import { reactive, toRefs } from "@vue/composition-api";
import bookItem from "@/components/book-item";
const d = {
  orderOpt: [
    { text: "默认排序", value: 0 },
    { text: "热门排序", value: 1 },
    { text: "好评排序", value: 2 }
  ],
  typeOpt: [
    { text: "全部图书", value: 0 },
    { text: "新增图书", value: 1 },
    { text: "前端技术", value: 2 },
    { text: "后端技术", value: 3 },
    { text: "服务器开发", value: 4 }
  ]
};
const b = [
  {
    id: 1,
    title: "历史的B面",
    author: "鲜果图书",
    url: "https://img.yzcdn.cn/vant/apple-1.jpg",
    descript:
      "简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介"
  },
  {
    id: 2,
    title: "知乎精选",
    author: "知乎网站",
    url: "https://img.yzcdn.cn/vant/apple-1.jpg",
    descript:
      "简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介"
  },
  {
    id: 3,
    title: "让每个人都能倾诉",
    author: "和菜头",
    url: "https://img.yzcdn.cn/vant/apple-1.jpg",
    descript:
      "简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介"
  },
  {
    id: 4,
    title: "萧秋水的读书笔记",
    author: "萧秋水",
    url: "https://img.yzcdn.cn/vant/apple-1.jpg",
    descript:
      "简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介"
  }
];
export default {
  components: {
    bookItem
  },
  setup(props, ctx) {
    const onSearch = () => {
      console.log(data.searchKey);
    };
    const toBorrow = () => {
      console.log("toBorrow");
    };
    const toReturn = () => {
      console.log("toReturn");
    };
    const onRefresh = () => {
      console.log("onRefresh");
      setTimeout(() => {
        data.reLoading = false;
      }, 1000);
    };
    const toBookDetail = book => {
      console.log("跳转图书详情页", book.id);
    };
    const data = reactive({
      searchKey: "",
      orderVal: 0,
      orderOpt: d.orderOpt,
      typeVal: 0,
      typeOpt: d.typeOpt,
      reLoading: false,
      bookList: b
    });
    // 统一导出的 方法
    const methods = {
      onSearch,
      toBorrow,
      toReturn,
      onRefresh,
      toBookDetail
    };
    return {
      ...toRefs(data),
      ...methods
    };
  }
};
</script>
<style lang="scss" scoped>
.operations {
  border: 1px solid #efefef;
  padding: 20px 0;
  box-shadow: 0 0 2px rgba($color: #000000, $alpha: 0.2);
  .oper-item {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: skyblue;
    font-weight: 700;
    .icon_style {
      font-size: 64px;
      background: yellowgreen;
      color: #fff;
    }
    :nth-child(2) {
      margin-top: 10px;
    }
  }
}
.list-wrapper {
  margin-top: 20px;
  h2 {
    font-size: 16px;
    margin-left: 1em;
  }
  .list {
    min-height: 150px;
  }
  .custom-image .van-empty__image {
    width: 90px;
    height: 90px;
  }
}
</style>
