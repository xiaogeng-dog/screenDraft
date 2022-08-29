import axios from "axios";
import vm from "../main";
import qs from "qs";

const util = {};

// read env from configs file
const env = window["$env"] ? window["$env"] : process.env.NODE_ENV;
console.log(env);

// util.baseIP = env === 'development' ? '/buildingLogin/njliftApi' : '/buildingOnline/njlift-maint/maint' // 维保平台
// util.baseIP = env === 'development' ? '/buildingOnline/njlift-api/njliftApi' : '/buildingOnline/njlift-api/njliftApi' //登录模块
// util.baseIP = env === 'development' ? 'http://10.2.14.181:8080/njlift-api/njliftApi' : 'http://10.2.14.181:8080/njlift-api/njliftApi' //登录模块
// util.baseIP = env === 'development' ? 'http://njdt.njtjy.org.cn:10014/njlift-api/njliftApi' : 'http://njdt.njtjy.org.cn:10014/njlift-api/njliftApi' //登录模块

util.baseUrl = env === 'development' ? '/api' : '/buildingOnline/njlift-maint/maint' // 维保平台
// util.baseUrl = env === 'development' ? '/shenyu/maint' : '/buildingOnline/njlift-maint/maint' // 维保平台
// util.baseUrl = env === 'development' ? '/buildingOnline/njlift-maint/maint' : '/buildingOnline/njlift-maint/maint' // 维保平台
// util.baseUrl = env === 'development' ? 'http://10.2.14.181:8080/njlift-maint/maint' : 'http://10.2.14.181:8080/njlift-maint/maint' // 维保平台
// util.baseUrl = env === 'development' ? 'http://njdt.njtjy.org.cn:10014/njlift-maint/maint' : 'http://njdt.njtjy.org.cn:10014/njlift-maint/maint' //登录模块

// util.baseRescue = env === 'development' ? '/buildingOnline/njlift-rescue/liftRescue/' : '/buildingOnline/njlift-rescue/liftRescue/' // 应急平台
// util.baseRescue = env === 'development' ? '/buildingRescue/liftRescue/' : '/buildingOnline/njlift-rescue/liftRescue/' // 应急平台
// util.baseRescue = env === 'development' ? 'http://10.2.14.181:8080/njlift-rescue/liftRescue/' : 'http://10.2.14.181:8080/njlift-rescue/liftRescue/' // 应急平台
// util.baseRescue = env === 'development' ? 'http://njdt.njtjy.org.cn:10014/njlift-rescue/liftRescue/' : 'http://njdt.njtjy.org.cn:10014/njlift-rescue/liftRescue/' //登录模块

// 将需要外挂文件覆盖的属性写在该函数执行前
loadConfigs();

//事件格式处理函数
util.dateFormat = function (fmt, date) {
  let ret;
  let opt = {
    "Y+": date.getFullYear().toString(), // 年
    "m+": (date.getMonth() + 1).toString(), // 月
    "d+": date.getDate().toString(), // 日
    "H+": date.getHours().toString(), // 时
    "M+": date.getMinutes().toString(), // 分
    "S+": date.getSeconds().toString() // 秒
    // 有其他格式化字符需求可以继续添加，必须转化成字符串
  };
  for (let k in opt) {
    ret = new RegExp("(" + k + ")").exec(fmt);
    if (ret) {
      fmt = fmt.replace(
        ret[1],
        ret[1].length == 1 ? opt[k] : opt[k].padStart(ret[1].length, "0")
      );
    }
  }
  return fmt;
};

util.numFormatter = function (num) {
  let res = num
  if (num && num !== null) {
    res = num.toString().replace(/\d+/, (n) => {
      return n.replace(/(\d)(?=(\d{3})+$)/g, ($1) => {
        return $1 + ','
      })
    })
  }
  return res
}




util.http = axios.create({
  baseURL: '',
  timeout: 60000,
});

// http请求拦截
util.http.interceptors.request.use(
  function (config) {
    config.headers.Authorization = localStorage.token;
    return config;
  },
  function (error) {
    // 请求失败的处理
    return Promise.reject(error);
  }
);

// http响应拦截
util.http.interceptors.response.use(
  function (res) {
    console.log(res)
    // 在这里对返回的数据进行处理
    if (!res.config.url.includes("refreshToken")) {
      // 记录ajax调用的时间
      sessionStorage.lastHttpRequestTime = +new Date();
    }

    switch (res.data.code) {
      case 401:
        if (vm.$route.name !== "login") {
          vm.$Message.warning({
            content: "身份认证信息已失效，请重新登录。",
            duration: 1,
            onClose: () => {
              vm.$router.push({
                name: "login"
              });
            }
          });
        }
        break;

    }


    return res;
  },
  function (error) {
    console.log(error)
    // Do something with response error
    if (error.response) {
      switch (error.response.code) {
        case 401:
          if (vm.$route.name !== "login") {
            vm.$Message.warning({
              content: "身份认证信息已失效，请重新登录。",
              duration: 2,
              onClose: () => {
                vm.$router.push({
                  name: "login"
                });
              }
            });
          } else {
            return Promise.reject(error);
          }
          break;
        case 403:
          vm.$Message.warning({
            content: error.response.data.message,
            duration: 3
          });
          break;
        default:
          return Promise.reject(error);
      }
    } else if (error.message) {
      if (error.message === "Network Error") {
        vm.$Message.error("网络连接错误，请检查网络环境！");
      } else if (error.message.indexOf("timeout") >= 0) {
        vm.$Message.error("网络连接超时，请重试！");
      } else {
        vm.$Message.error(error.message);
      }
    } else {
      vm.$Message.error("知识盲区的错误，联系程序员小哥哥吧！");
    }
  }
);

/**
 * 将请求参数转换为URLSearchParams格式
 * post、put等，axios默认使用json格式，如果需要使用form格式的，调用该函数进行转换
 * data: object
 */
util.formUrlencoded = function (data) {
  return qs.stringify(data);
};


function loadConfigs () {
  // load api from config file
  Object.keys(window).forEach(key => {
    if (key.startsWith("$")) {
      if (window[key]) {
        util[key.slice(1)] = window[key];
      }
      delete window[key];
    }
  });
}

// 最大余额法 ， 保证百分比相加为100%
util.getPercentValue = function (valueList, idx, precision) {
  if (!valueList[idx]) {
    return 0;
  }
  let sum = valueList.reduce(function (acc, val) {
    return acc + (isNaN(val) ? 0 : val);
  }, 0);
  if (sum === 0) {
    return 0;
  }

  let digits = Math.pow(10, precision);
  let votesPerQuota = valueList.map((val) => {
    return ((isNaN(val) ? 0 : val) / sum) * digits * 100;
  });
  let targetSeats = digits * 100;
  let seats = votesPerQuota.map((votes) => Math.floor(votes));
  let currentSum = seats.reduce(function (acc, val) {
    return acc + val;
  }, 0);

  let remainder = votesPerQuota.map((votes, idx) => votes - seats[idx]);

  while (currentSum < targetSeats) {
    let max = -Infinity;
    let maxId = null;
    for (let i = 0; i < remainder.length; ++i) {
      if (remainder[i] > max) {
        max = remainder[i];
        maxId = i;
      }
    }
    ++seats[maxId];
    remainder[maxId] = 0;
    ++currentSum;
  }
  return seats[idx] / digits;
}

export default {
  util: util
};
