
<template>
  <div class="content">
    <div class="toptitle">
      <img src="../../../assets/image/header-icon.png" width="30" height="30" />
      <div
        style="
          font-size: 0.2rem;
          color: #fff;
          margin-left: 0.2rem;
          line-height: 0.6rem;
        "
      >
        维保单位到达时间
      </div>
    </div>
    <Annular></Annular>
  </div>
</template>
  <script>
import Annular from "../baicomponents/echarts/annular.vue";
export default {
  name: "table5",
  components: {
    Annular,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
  <style lang="scss">
.content {
  width: 100%;
  height: 100%;
  background: transparent;
  .toptitle {
    width: 100%;
    height: 0.6rem;
    background: url(../../../assets/image/area-header.png) no-repeat;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    > img {
      margin: auto 0;
      margin-left: 0.2rem;
    }
  }
}
</style>