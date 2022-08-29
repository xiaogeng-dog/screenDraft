import request from '../index'



// 各省基础数据统计
export function addRunLiftByTime () {
    return request.post({
        url: '/overallView/addRunLiftByTime'
    })
}
// 品牌综合排名
export function getLiftByweek () {
    return request.post({
        url: '/overallView/getLiftByweek'
    })
}
// 维保单位综合排名
export function getLiftOrderMonth () {
    return request.post({
        url: '/overallView/getLiftOrderMonth'
    })
}

// 使用场所
export function getLiftFormOrderYear () {
    return request.post({
        url: '/liftFormStatistic/getLiftFormOrderYear',
    })
}

// 电梯使用年限统计
export function getBastStatisticByProvince () {
    return request.post({
        url: '/overallView/getBastStatisticByProvince'
    })
}

// 各省基础数据统计
export function missingItemAnalysis () {
    return request.post({
        url: '/overallView/missingItemAnalysis'
    })
}
// 品牌综合排名
export function baseCountByProv () {
    return request.post({
        url: '/maintainStatistic/baseCountByProv'
    })
}
// 维保单位综合排名
export function maintainCountByLiftAnalysis () {
    return request.post({
        url: '/maintainStatistic/maintainCountByLiftAnalysis'
    })
}

// 电梯使用年限统计
export function userCountByAreaCodeAnalysis () {
    return request.post({
        url: '/userStatistic/userCountByAreaCodeAnalysis'
    })
}
