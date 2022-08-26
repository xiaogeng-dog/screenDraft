<template>
  <div class="rb-container">
    <body-header :leftImageUrl="leftImageUrl">近7天销量最低排行</body-header>
    <table-temp :tableTitle="tableTitle" :tableContent="tableContent" />
  </div>
</template>

<script>
import bodyHeader from "@/views/canteenOrder/components/bodyHeader";
import tableTemp from "@/views/canteenOrder/components/tableTemp";
export default {
  name: "rightBottom",
  data() {
    return {
      leftImageUrl: require("@/assets/images/ICON-菜品.png"),
      tableTitle: ["排名", "名称", "价格（元）", "销量（份）"],
      tableContent: [
        {
          id: "01",
          name: "黄焖鸡米饭",
          consumNum: 7,
          consumSum: 135.0,
        },
        {
          id: "02",
          name: "油闷大虾",
          consumNum: 7,
          consumSum: 101.4,
        },
        {
          id: "03",
          name: "菜品名称展示位",
          consumNum: 7,
          consumSum: 99.8,
        },
        {
          id: "04",
          name: "菜品名称展示位",
          consumNum: 7,
          consumSum: 137.2,
        },
        {
          id: "05",
          name: "菜品名称展示位",
          consumNum: 7,
          consumSum: 137.2,
        },
        {
          id: "06",
          name: "菜品名称展示位",
          consumNum: 7,
          consumSum: 137.2,
        },
        {
          id: "05",
          name: "菜品名称展示位",
          consumNum: 7,
          consumSum: 137.2,
        },
        {
          id: "06",
          name: "菜品名称展示位",
          consumNum: 7,
          consumSum: 137.2,
        },
        {
          id: "05",
          name: "菜品名称展示位",
          consumNum: 7,
          consumSum: 137.2,
        },
        {
          id: "06",
          name: "菜品名称展示位",
          consumNum: 7,
          consumSum: 137.2,
        },
        {
          id: "05",
          name: "菜品名称展示位",
          consumNum: 7,
          consumSum: 137.2,
        },
        {
          id: "06",
          name: "菜品名称展示位",
          consumNum: 7,
          consumSum: 137.2,
        },
      ],
    };
  },
  components: {
    bodyHeader,
    tableTemp,
  },
};
</script>

<style lang="scss" scoped>
.rb-container {
  width: 100%;
  height: 51%;
  background: url("~@/assets/images/边框背景-01.png") no-repeat;
  background-size: 100% 100%;
}
</style>
