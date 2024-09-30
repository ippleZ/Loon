let body = $response.body;
let obj = JSON.parse(body);
let url = $request.url;

// 定义函数用于处理 ernMon 的正负数逻辑
function processErnMon(value) {
    let num = parseFloat(value);
    if (num > 0) {
        return (num * 10).toFixed(2);
    } else if (num < 0) {
        return (num / 2).toFixed(2);
    }
    return value;
}

// 定义函数用于处理通用乘法逻辑
function processValue(value) {
    let num = parseFloat(value);
    return num ? (num * 10).toFixed(2) : value;
}

if (url.includes('/iincomereport/income/calendar')) {
    // 针对 /income/calendar 请求的逻辑
    if (obj.bizResult?.data?.ernInfo) {
        obj.bizResult.data.ernInfo.forEach(entry => {
            // 对 ernMon 进行正数乘以2，负数除以2的操作
            if (entry.ernMon) {
                entry.ernMon = processErnMon(entry.ernMon);
            }
        });
    }
    $done({ body: JSON.stringify(obj) });

} else if (url.includes('/iincomereport/incomecommon/incomeflow')) {
    // 针对 /incomecommon/incomeflow 请求的逻辑
    let totalPrdErn = 0;

    // 对 prdErn 进行乘以2的操作并进行总和计算
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
    }

    $done({ body: JSON.stringify(obj) });
}
