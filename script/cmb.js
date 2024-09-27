let body = $response.body;
let obj = JSON.parse(body);
let url = $request.url;

// 定义全局变量，用来存储第一个请求中的 ernMon 总和
if (typeof $loon !== "undefined" && typeof globalErnMonSum === "undefined") {
    var globalErnMonSum = 0;
}

// 定义函数，用于处理乘法操作
function processValue(value) {
    let num = parseFloat(value);
    return num ? (num * 2).toFixed(2) : value;
}

if (url.includes('/iincomereport/income/calendar')) {
    // 针对 /income/calendar 请求的逻辑
    let totalErnMon = 0;

    if (obj.bizResult?.data?.ernInfo) {
        obj.bizResult.data.ernInfo.forEach(entry => {
            // 对 ernMon 进行乘以2的操作
            if (entry.ernMon) {
                entry.ernMon = processValue(entry.ernMon);
            }

            // 将 ernMon 加入总和
            let ernMonValue = parseFloat(entry.ernMon);
            totalErnMon += isNaN(ernMonValue) ? 0 : ernMonValue;
        });

        // 将求和结果保存到全局变量
        globalErnMonSum = totalErnMon.toFixed(2);
    }
    $done({ body: JSON.stringify(obj) });

} else if (url.includes('/iincomereport/incomecommon/incomeflow')) {
    // 针对 /incomecommon/incomeflow 请求的逻辑

    // 如果 globalErnMonSum 有值，将其赋值到 ernZone 字段
    if (globalErnMonSum && obj.bizResult?.data?.ernInfo) {
        obj.bizResult.data.ernInfo.ernZone = globalErnMonSum;
    }

    // 对 prdErn 进行乘以2的操作
    if (obj.bizResult?.data?.prdDtl) {
        obj.bizResult.data.prdDtl.forEach(item => {
            if (item.prdErn) {
                item.prdErn = processValue(item.prdErn);
            }
        });
    }

    $done({ body: JSON.stringify(obj) });
}
