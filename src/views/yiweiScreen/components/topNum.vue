<template>
  <div class="topNum-container" v-if="topNumInfo.length != 0">
    <div
      class="topNum-card"
      v-for="item in topNumInfo"
      :key="item.id"
      :style="{ background: item.color }"
    >
      <div class="card-top">{{ item.name }}</div>
      <div class="card-bottom">
        <img :src="item.image" alt="" /><span>{{
          parseInt(item.num).toLocaleString()
        }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "topNum",
  props: {
    topNumInfo: Array,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@font-face {
  font-family: screenFont;
  src: url(~@/assets/font/YouSheBiaoTiHei.ttf);
}
.topNum-container {
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: space-around;
  align-items: center;

  border-top: 1px solid #10a0e8;
  border-bottom: 1px solid #10a0e8;
  .topNum-card {
    width: 3.25rem;
    height: 1rem;

    color: #ffffff;
    font-family: "screenFont";

    .card-top {
      font-size: 0.225rem;
      margin-left: 0.125rem;
      margin-top: 0.0625rem;
    }

    .card-bottom {
      display: flex;
      align-items: center;

      font-size: 0.375rem;
      & > img {
        margin: 0 0.125rem;
        width: 0.4375rem;
        height: 0.4375rem;
      }
    }
  }
}
</style>
