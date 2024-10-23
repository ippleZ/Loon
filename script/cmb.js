// 从 Loon 中获取自定义参数，若未设置则使用默认值
let ernMonPositiveMultiplier = $arguments.ernMonPositiveMultiplier || 2; // 正数乘以的系数
let ernMonNegativeDivider = $arguments.ernMonNegativeDivider || 1; // 负数除以的系数
let prdErnMultiplier = $arguments.prdErnMultiplier || 2; // prdErn 的乘数
let pctZoneMultiplier = $arguments.pctZoneMultiplier || 2; // pctZone 的乘数

// 定义函数用于处理 ernMon 的正负数逻辑
function processErnMon(value) {
    let num = parseFloat(value);
    if (num > 0) {
        return (num * ernMonPositiveMultiplier).toFixed(2); // 使用自定义的正数系数
    } else if (num < 0) {
        return (num / ernMonNegativeDivider).toFixed(2); // 使用自定义的负数系数
    }
    return value;
}

// 定义函数用于处理通用乘法逻辑
function processValue(value) {
    let num = parseFloat(value);
    return num ? (num * prdErnMultiplier).toFixed(2) : value; // 使用自定义的 prdErn 乘数
}

let body = $response.body;
let obj = JSON.parse(body);
let url = $request.url;

if (url.includes('/iincomereport/income/calendar')) {
    // 针对 /income/calendar 请求的逻辑
    if (obj.bizResult?.data?.ernInfo) {
        obj.bizResult.data.ernInfo.forEach(entry => {
            // 对 ernMon 进行正数乘以自定义倍数，负数除以自定义倍数的操作
            if (entry.ernMon) {
                entry.ernMon = processErnMon(entry.ernMon);
            }
        });
    }
    $done({ body: JSON.stringify(obj) });

} else if (url.includes('/iincomereport/incomecommon/incomeflow')) {
    // 针对 /incomecommon/incomeflow 请求的逻辑
    let totalPrdErn = 0;

    // 对 prdErn 进行乘以自定义倍数的操作并进行总和计算
    if (obj.bizResult?.data?.prdDtl) {
        obj.bizResult.data.prdDtl.forEach(item => {
            if (item.prdErn) {
                item.prdErn = processValue(item.prdErn);
                let prdErnValue = parseFloat(item.prdErn);
                totalPrdErn += isNaN(prdErnValue) ? 0 : prdErnValue;
            }
        });
    }

    // 将 prdErn 的总和赋值给 ernZone
    if (obj.bizResult?.data?.ernInfo) {
        obj.bizResult.data.ernInfo.ernZone = totalPrdErn.toFixed(2);
        // 将 pctZone 乘以自定义倍数
        if (obj.bizResult.data.ernInfo.pctZone) {
            obj.bizResult.data.ernInfo.pctZone = (parseFloat(obj.bizResult.data.ernInfo.pctZone) * pctZoneMultiplier).toFixed(2);
        }
    }

    $done({ body: JSON.stringify(obj) });
}
