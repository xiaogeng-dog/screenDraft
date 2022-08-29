import request from '../index'
import { stringify } from "qs";

export function getBaseInfo (code) {
    return request.post({
        url: '/liftFormStatistic/getBaseFormAnalysis?areaCode=' + code,
    })
}

export function handleGetThreeAdd2 (code) {
    return request.post({
        url: '/liftFormStatistic/addFormByTime?areaCode=' + code,
    })
}

// 2022年电梯月度增量
export function handleGetMonthAdd2 (code) {
    return request.post({
        url: '/liftFormStatistic/getLiftformOrderMonth?areaCode=' + code,
    })
}

// 2022年电梯年度增量
export function handleGetYearAdd2 (code) {
    return request.post({
        url: '/liftFormStatistic/getLiftFormOrderYear?areaCode=' + code,
    })
}


export function faultCauseAnalysis (code) {
    return request.post({
        url: '/liftFormStatistic/faultCauseAnalysis?areaCode=' + code,
    })
}

export function getLiftFormTimeAnalysis (code) {
    return request.post({
        url: '/liftFormStatistic/getLiftFormTimeAnalysis?areaCode=' + code,
    })
}

// 2022年电梯月度增量
export function usefulLifeCompositeAnalysis (code) {
    return request.post({
        url: '/overallView/usefulLifeCompositeAnalysis?areaCode=' + code,
    })
}

// 2022年电梯年度增量
export function monthlySleepinessAnalysis (code) {
    return request.post({
        url: '/liftFormStatistic/monthlySleepinessAnalysis?year=' + 2021,
    })
}