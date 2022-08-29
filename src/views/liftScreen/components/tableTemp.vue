<template>
  <div class="tt-container">
    <div class="table-top">
      <div
        class="table-header"
        v-for="(item, index) in tableTitle"
        :key="index"
      >
        {{ item }}
      </div>
    </div>
    <div class="table-scroll">
      <div
        class="table-bottom"
        v-for="(item, index) in tableContent"
        :key="index"
        :style="{
          background:
            index % 2 != 0 ? 'rgba(29,40,83,0.3)' : 'rgba(62, 75, 125,0.2)',
        }"
      >
        <div class="table-content" v-for="(item1, index) in item" :key="index">
          {{ item1 }}
        </div>
      </div>
    </div>
    <div class="table-sum">
      <div class="sum-title">总计</div>
      <div class="sum-num">{{ sumNum }}</div>
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
  computed: {
    sumNum() {
      return this.tableContent.reduce((prev, cur) => {
        return prev + cur.value;
      }, 0);
    },
  },
};
</script>

<style lang="scss" scoped>
.tt-container {
  width: 5.625rem;
  height: 5.875rem;
  margin: 0 auto;
  padding-top: 0.225rem;
  box-sizing: border-box;
  .table-top {
    width: 100%;
    height: 0.625rem;
    display: flex;
    background: linear-gradient(270deg, #0771b1 0%, #217cd0 100%);
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
    .table-header {
      font-size: 0.2rem;
      text-align: center;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      line-height: 0.625rem;
      color: #bdf0ff;
    }
  }
  .table-bottom {
    height: 0.55rem;
    display: flex;
    justify-content: space-around;
    line-height: 0.5rem;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.85);
    font-size: 0.2rem;
    text-align: center;
    div:nth-child(1) {
      color: #d3e6f8;
      width: 10%;
    }
    div:nth-child(2) {
      color: #85c3ff;
      width: 25%;
    }
    div:nth-child(3) {
      color: #d3e6f8;
      width: 25%;
    }
  }
  .table-sum {
    height: 0.625rem;
    width: 100%;
    background: rgba(102, 137, 169, 0.52);
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding-left: 0.8625rem;
    padding-right: 0.4625rem;
    box-sizing: border-box;

    .sum-title {
      font-size: 0.25rem;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #bdf0ff;
    }
    .sum-num {
      font-size: 0.2875rem;
      font-family: DINAlternate-Bold, DINAlternate;
      font-weight: 400;
      color: #75c0fd;
    }
  }
  .table-scroll {
    height: 4.4rem;
    overflow: auto;
  }
  .table-scroll::-webkit-scrollbar {
    width: 0px;
  }
}
</style>
