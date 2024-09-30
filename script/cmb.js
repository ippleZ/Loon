let body = $response.body;
let obj = JSON.parse(body);
let url = $request.url;

// 从参数中获取乘法因子
let ernMonFactor = parseFloat($argument.ernMonFactor); // 获取ernMon因子
let prdErnFactor = parseFloat($argument.prdErnFactor); // 获取prdErn因子

// 调试代码
console.log("ernMonFactor:", ernMonFactor);
console.log("prdErnFactor:", prdErnFactor);

// 定义函数用于处理 ernMon 的正负数逻辑
function processErnMon(value) {
    let num = parseFloat(value);
    if (num > 0) {
        return (num * ernMonFactor).toFixed(2); // 使用ernMon因子
    } else if (num < 0) {
        return (num / 2).toFixed(2);
    }
    return value;
}

// 定义函数用于处理通用乘法逻辑
function processValue(value) {
    let num = parseFloat(value);
    return num ? (num * prdErnFactor).toFixed(2) : value; // 使用prdErn因子
}

// 处理请求的逻辑
if (url.includes('/iincomereport/income/calendar')) {
    if (obj.bizResult?.data?.ernInfo) {
        obj.bizResult.data.ernInfo.forEach(entry => {
            if (entry.ernMon) {
                entry.ernMon = processErnMon(entry.ernMon);
            }
        });
    }
    $done({ body: JSON.stringify(obj) });

} else if (url.includes('/iincomereport/incomecommon/incomeflow')) {
    let totalPrdErn = 0;
    if (obj.bizResult?.data?.prdDtl) {
        obj.bizResult.data.prdDtl.forEach(item => {
            if (item.prdErn) {
                item.prdErn = processValue(item.prdErn);
                let prdErnValue = parseFloat(item.prdErn);
                totalPrdErn += isNaN(prdErnValue) ? 0 : prdErnValue;
            }
        });
    }
    if (obj.bizResult?.data?.ernInfo) {
        obj.bizResult.data.ernInfo.ernZone = totalPrdErn.toFixed(2);
    }
    $done({ body: JSON.stringify(obj) });
}
