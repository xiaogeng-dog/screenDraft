<template>
  <div class="menu-container">
    <div class="menu-list">
      <div
        @click="changeMenu(item)"
        class="menu-item menu"
        :class="{ 'menu-active': checkedMenu === item.id }"
        v-for="item in menu"
        :key="item.id"
      >
        {{ item.title }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BodyMenu",
  props: {
    menu: Array,
    checkedMenu: Number,
  },
  data() {
    return {};
  },
  methods: {
    changeMenu(val) {
      this.$emit("changeMenu", val);
    },
  },
};
</script>

<style lang="scss" scoped>
.menu-active {
  background: url("~@/assets/image/menu-active.png") no-repeat !important;
  text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.5) !important;
}
.menu-container {
  width: 100%;
  height: 100%;
  .menu-list {
    display: flex;
    justify-content: space-between;
    width: 10.25rem;
    margin: 0 auto;

    .menu-item {
      font-size: 0.2rem;
      width: 1.5rem;
      height: 0.5rem;
      background: url("~@/assets/image/menu.png") no-repeat;
      background-size: 100%;

      text-align: center;
      font-family: PingFangSC-Semibold, PingFang SC;
      //   font-weight: 600;
      color: rgba(255, 255, 255, 0.9);
      line-height: 0.5rem;
    }
    .menu-item:hover {
      cursor: pointer;
    }
  }
}
</style>
