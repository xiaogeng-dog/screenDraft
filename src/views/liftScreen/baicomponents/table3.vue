
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
          <th style="width: 1rem">排名</th>
        </tr>
        <tr v-for="(item, index) in data1" :key="index" class="datax">
          <td style="width: 1.5rem">{{ item.serial }}</td>
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
          <th style="width: 2.5rem">品牌</th>
        </tr>
        <tr v-for="(item, index) in data1" :key="index" class="datax">
          <td style="width: 2.5rem">{{ item.brand }}</td>
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
          <th style="width: 1.5rem">电梯数量</th>
        </tr>
        <tr v-for="(item, index) in data1" :key="index" class="datax">
          <td style="width: 1.5rem">{{ item.number }}</td>
        </tr>
      </table>
    </div>

    <div class="bottom">
      <div class="subtitle">
        <div class="centertips">电梯品牌使用单位统计</div>
      </div>
      <div class="draw">
        <div class="list-l">
          <div v-for="(item, index) in data1" :key="index" class="line">
            {{ item.brand }}
          </div>
        </div>
        <div class="list-r">
          <div v-for="(item, index) in data1" :key="index">
            <div
              style="
                color: #fff;
                position: absolute;
                text-align: right;
                width: 3.4rem;
                z-index: 1;
                line-height: 0.1rem;
              "
            >
              {{ item.number }}
            </div>
            <div
              style="
                width: 3.5rem;
                height: 0.1rem;
                background-color: #2d3c50;
                border-radius: 0.05rem;
                position: relative;
              "
            >
              <div class="line"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "table3",
  data() {
    return {
      columns1: [
        {
          title: "排名",
          key: "serial",
          width: 100,
        },
        {
          title: "品牌",
          key: "brand",
          width: 240,
        },
        {
          title: "电梯数量",
          key: "number",
          width: "auto",
        },
      ],
      data1: [
        {
          serial: "01",
          brand: "品牌名称",
          number: "54323",
        },
        {
          serial: "02",
          brand: "其它",
          number: "4313",
        },
        {
          serial: "03",
          brand: "上海三菱",
          number: "3344",
        },
        {
          serial: "04",
          brand: "西子奥的斯电梯有限公司",
          number: "2414",
        },
        {
          serial: "05",
          brand: "西子奥的斯",
          number: "2212",
        },
        {
          serial: "06",
          brand: "日立",
          number: "2212",
        },
        {
          serial: "07",
          brand: "上海三菱电梯有限公司",
          number: "2212",
        },
        {
          serial: "08",
          brand: "通力电梯有限公司",
          number: "2212",
        },
        {
          serial: "09",
          brand: "通力电梯",
          number: "2212",
        },
        {
          serial: "10",
          brand: "三菱",
          number: "2212",
        },
      ],
    };
  },
  methods: {
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
            value: "N/A",
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
  .middle {
    display: flex;
    flex-direction: row;
    width: 90%;
    margin: auto;
  }
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
  .table tr:nth-child(odd) {
    background: #3e4b7d20;
    border: #3e4b7d20;
  }
  .table tr:nth-child(even) {
    background: #1d285330;
    border: #1d285330;
  }
  .bottom {
    width: 100%;
    margin: auto;
    .subtitle {
      width: 100%;
      height: 0.6rem;
      margin-top: 0.3rem;
      .centertips {
        margin: auto;
        background: url(../../../assets/image/centertips.png) center center
          no-repeat;
        height: 0.6rem;
        line-height: 0.6rem;
        text-align: center;
        font-size: 0.2rem;
        color: #fff;
        font-weight: 600;
      }
    }
    .draw {
      // background-color: #fff;
      margin: auto;
      width: 6rem;
      height: 4rem;
      display: flex;
      flex-direction: row;
      justify-content: center;
      .list-l {
        width: 1.6rem;
        // background-color: #1d2853;
        color: #fff;
        font-size: 0.125rem;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        text-align: right;
        margin-right: 0.4rem;
      }
      .list-r {
        width: 3.5rem;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        .line {
          width: 2rem;
          height: 0.1rem;
          background-color: #55d4ff;
          border-radius: 0.05rem;
          position: absolute;
        }
      }
    }
  }
}
</style>