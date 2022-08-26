<template>
  <div class="tt-container" :style="{ height: '85%' }">
    <div class="table-top">
      <div
        class="table-header"
        v-for="(item, index) in tableTitle"
        :key="index"
      >
        {{ item }}
      </div>
    </div>
    <div
      class="table-bottom"
      v-for="(item, index) in tableContent"
      :key="index"
      :style="{
        background:
          index % 2 == 0
            ? 'rgba(22, 119, 234, 0.05)'
            : 'rgba(62, 132, 216, 0.2);',
      }"
    >
      <div class="table-content" v-for="(item1, index) in item" :key="index">
        {{ item1 }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "tableTemp",
  props: {
    tableTitle: {
      type: Array,
      default() {
        return ["标题1", "标题2", "标题3", "标题4"];
      },
    },
    tableContent: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.tt-container {
  width: 92%;
  margin: 0 auto;
  margin-top: 0.125rem;
  overflow: hidden;
  .table-top {
    width: 100%;
    height: 0.625rem;
    display: flex;
    background: rgba(23, 100, 168, 0.3);
    box-shadow: inset 0px -1px 0px 0px rgba(0, 211, 255, 0.3);
    justify-content: space-around;
    div:nth-child(1) {
      width: 10%;
    }
    div:nth-child(2) {
      width: 25%;
    }
    div:nth-child(3) {
      width: 25%;
    }
    div:nth-child(4) {
      width: 25%;
    }
    .table-header {
      font-size: 0.2rem;
      text-align: center;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #2bcfff;
      line-height: 0.625rem;
    }
  }
  .table-bottom {
    height: 0.5rem;
    display: flex;
    justify-content: space-around;
    line-height: 0.5rem;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.85);
    font-size: 0.2rem;
    text-align: center;
    div:nth-child(1) {
      width: 10%;
    }
    div:nth-child(2) {
      width: 25%;
    }
    div:nth-child(3) {
      width: 25%;
      color: #f78400;
    }
    div:nth-child(4) {
      width: 25%;
      color: #ffc014;
    }
  }
}
</style>