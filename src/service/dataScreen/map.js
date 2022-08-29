import request from '../index'
import { stringify } from "qs";

// 全国地图数据
export function handleGetAllProvince () {
  return request.post({
    url: '/overallView/getBastStatisticByProvince',
  })
}


export function handleGetCity (code) {
  return request.post({
    url: `/overallView/getLiftByCityAnalysis?${stringify({
      areaCode: code,
    })}`,
  })
}

