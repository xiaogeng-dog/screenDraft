import request from '../index'



// 各省基础数据统计
export function getProvinceStaticData() {
    return request.post({
        url: '/overallView/getBastStatisticByProvince'
    })
}
// 品牌综合排名
export function getBrandData() {
    return request.post({
        url: '/brand/synAnalyais'
    })
}
// 维保单位综合排名
export function getMaintData() {
    return request.post({
        url: '/maintainStatistic/maintainCountByLiftAnalysis'
    })
}

// 使用场所
export function getPlaceTypeData() {
    return request.post({
        url: '/overallView/placeTypeAnalysis',
    })
}

// 电梯使用年限统计
export function getYearData() {
    return request.post({
        url: '/overallView/usefulLifeCompositeAnalysis'
    })
}
