
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
        全国维保单位数量统计
      </div>
    </div>
    <div class="middle">
      <table border="0" class="table">
        <tr
          style="
            background: #0771b1;
            height: 0.5rem;
            line-height: 0.5rem;
            font-size: 0.2rem;
          "
        >
          <th style="width: 1rem">序号</th>
        </tr>
        <tr v-for="(item, index) in data1" :key="index" class="datax">
          <td style="width: 1.5rem">{{ item.serial }}</td>
        </tr>
        <tr>
          <th style="width: 1rem">总计</th>
        </tr>
      </table>
      <table border="0" class="table">
        <tr
          style="
            background: #0771b1;
            height: 0.5rem;
            line-height: 0.5rem;
            font-size: 0.2rem;
          "
        >
          <th style="width: 2.5rem">区域</th>
        </tr>
        <tr v-for="(item, index) in data1" :key="index" class="datax">
          <td style="width: 2.5rem">{{ item.area }}</td>
        </tr>
        <tr>
          <th style="width: 2.5rem"></th>
        </tr>
      </table>
      <table border="0" class="table">
        <tr
          style="
            background: #0771b1;
            height: 0.5rem;
            line-height: 0.5rem;
            font-size: 0.2rem;
          "
        >
          <th style="width: 1.5rem">维保单位数量</th>
        </tr>
        <tr v-for="(item, index) in data1" :key="index" class="datax">
          <td style="width: 1.5rem">{{ item.number }}</td>
        </tr>
        <tr>
          <th style="width: 1.5rem">{{ amount }}</th>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: "table1",
  data() {
    return {
      amount: 0,
      border: false,
      columns1: [
        {
          title: "序号",
          key: "serial",
        },
        {
          title: "区域",
          key: "area",
        },
        {
          title: "维保单位数量",
          key: "number",
        },
      ],
      data1: [
        {
          serial: "01",
          area: "海南省",
          number: 54323,
        },
        {
          serial: "02",
          area: "西藏省",
          number: 33124,
        },
        {
          serial: "03",
          area: "江苏省",
          number: 12345,
        },
        {
          serial: "04",
          area: "安徽省",
          number: 2221,
        },
        {
          serial: "05",
          area: "湖北省",
          number: 2212,
        },
        {
          serial: "06",
          area: "湖南省",
          number: 2212,
        },
        {
          serial: "07",
          area: "河北省",
          number: 2212,
        },
        {
          serial: "08",
          area: "河南省",
          number: 2212,
        },
        {
          serial: "09",
          area: "广东省",
          number: 2212,
        },
        {
          serial: "10",
          area: "广西省",
          number: 2212,
        },
        {
          serial: "11",
          area: "西川省",
          number: 2212,
        },
        {
          serial: "12",
          area: "贵州省",
          number: 2212,
        },
        {
          serial: "13",
          area: "云南省",
          number: 2212,
        },
        {
          serial: "14",
          area: "福建省",
          number: 2212,
        },
        {
          serial: "15",
          area: "海南省",
          number: 2212,
        },
        {
          serial: "16",
          area: "海南省",
          number: 2212,
        },
      ],
    };
  },
  mounted() {
    // this.jisuan()
  },
  methods: {
    // jisuan() {},
    rowClassName(row, index) {
      if ((index & 1) === 0) {
        return "demo-table-info-row";
      } else {
        return "demo-table-error-row";
      }
    },
    handleSummary({ columns, data }) {
      const sums = {};
      columns.forEach((column, index) => {
        const key = column.key;
        if (index === 0) {
          sums[key] = {
            key,
            value: "总计",
          };
          return;
        }
        const values = data.map((item) => Number(item[key]));
        if (!values.every((value) => isNaN(value))) {
          const v = values.reduce((prev, curr) => {
            const value = Number(curr);
            if (!isNaN(value)) {
              return prev + curr;
            } else {
              return prev;
            }
          }, 0);
          sums[key] = {
            key,
            value: v,
          };
        } else {
          sums[key] = {
            key,
            value: "",
          };
        }
      });
      return sums;
    },
  },
};
</script>
<style lang="scss">
.content {
  width: 100%;
  height: 100%;
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
  .middle {
    display: flex;
    flex-direction: auto;
    width: 90%;
    margin: auto;
    .table {
      font-size: 0.15rem;
      color: #fff;
      > tr {
        height: 0.325rem;
      }
      .datax {
        text-align: center;
        line-height: 0.25rem;
      }
    }
  }

  .table tr:nth-child(odd) {
    background: #3e4b7d20;
    border: #3e4b7d20;
  }
  .table tr:nth-child(even) {
    background: #1d285330;
    border: #1d285330;
  }
}
</style>