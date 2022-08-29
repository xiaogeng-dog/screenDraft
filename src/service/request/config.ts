let BASE_URL = "";
const TIME_OUT = 10000000000;

if (process.env.NODE_ENV === "development") {
  BASE_URL = "/online/Service_Centre";
} else if (process.env.NODE_ENV === "production") {
  BASE_URL = "http://lift.cpase.org.cn:8080//Service_Centre";
} else {
  BASE_URL = "http://lift.cpase.org.cn:8080//Service_Centre";
}

export { BASE_URL, TIME_OUT };
