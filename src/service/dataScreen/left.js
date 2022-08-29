import request from '../index'
import { stringify } from "qs";

export function handleGetThreeAdd (code) {
    return request.post({
        url: '/overallView/addLiftByTime?areaCode=' + code,
    })
}

// 2022年电梯月度增量
export function handleGetMonthAdd (code) {
    return request.post({
        url: '/overallView/getLiftOrderMonth?areaCode=' + code,
    })
}

// 2022年电梯年度增量
export function handleGetYearAdd (code) {
    return request.post({
        url: '/overallView/getLiftOrderYear?areaCode=' + code,
    })
}

// 省电梯数据排名
export function handleProvinceRank () {
    return request.post({
        url: '/overallView/getBastStatisticByProvince',
    })
}

// 各市电梯量排名
export function handleCityRank (code) {
    return request.post({
        url: '/overallView/getLiftByCity?areaCode=' + code,
    })
}

// 各市电梯量基础信息
export function handleGetBaseinfo () {
    return request.post({
        url: '/overallView/globalStatistic',
    })
}

// 省内电梯量基础信息
export function handleProvinceBaseinfo (code) {
    return request.post({
        url: '/overallView/getBastStatisticByProvince?areaCode=' + code,
    })
}