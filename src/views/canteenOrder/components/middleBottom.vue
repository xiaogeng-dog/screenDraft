<template>
  <div class="mb-container">
    <body-header :leftImageUrl="leftImageUrl">一卡多刷情况反馈</body-header>
    <table-temp :tableTitle="tableTitle" :tableContent="tableContent" />
  </div>
</template>

<script>
import bodyHeader from "@/views/canteenOrder/components/bodyHeader";
import tableTemp from "@/views/canteenOrder/components/tableTemp";

export default {
  name: "middleBottom",
  data() {
    return {
      leftImageUrl: require("@/assets/images/ICON-饭卡.png"),
      tableTitle: ["序号", "姓名", "当日消费（次）", "消费总金额（元）"],
      tableContent: [
        {
          id: "01",
          name: "迪丽热巴（本部员工）",
          consumNum: 7,
          consumSum: 135.0,
        },
        {
          id: "02",
          name: "古力娜扎（本部员工）",
          consumNum: 7,
          consumSum: 101.4,
        },
        {
          id: "03",
          name: "杨幂（本部员工）",
          consumNum: 7,
          consumSum: 99.8,
        },
        {
          id: "04",
          name: "刘诗诗（本部员工）",
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
.mb-container {
  width: 100%;
  height: 100%;
  padding-top: 0.1125rem;
}
</style>
