<template>
  <div class="mb-container">
    <div class="btns-box">
      <div class="btn-box" v-for="(items, index) in allProvince" :key="index">
        <div
          @mouseenter="changeProvince(items)"
          @click="checkCity(items)"
          class="btn"
          :class="{ 'active-btn': checked === items.id }"
        >
          {{ items.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MiddleBottom",
  props: {
    allProvince: Object,
    checked: Number,
  },
  methods: {
    changeProvince(val) {
      this.$emit("changeProvince", val);
    },
    checkCity(val) {
      this.$emit("checkCity", val);
    },
  },
};
</script>

<style lang="scss" scoped>
.active-btn {
  background: url("~@/assets/image/btn-bg.png") no-repeat;
  background-size: 100% 100%;
}
.mb-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .btns-box {
    width: calc(100% - 0.75rem);
    height: 100%;

    display: flex;
    flex-wrap: wrap;

    .btn-box {
      width: calc(100% / 9);
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .btn {
      width: 1rem;
      height: 0.45rem;

      text-align: center;
      font-size: 0.2rem;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      line-height: 0.45rem;
      color: #ffffff;

      box-sizing: border-box;
    }
    .btn:hover {
      color: #85c3ff;
      border: #85c3ff 1px dotted;
      cursor: pointer;
    }
  }
}
</style>
