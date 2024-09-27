let body = $response.body;
let obj = JSON.parse(body);
let url = $request.url;

function processValue(value) {
    let num = parseFloat(value);
    return num > 0 ? (num * 2).toFixed(2) : (num / 2).toFixed(2);
}

if (url.includes('/iincomereport/income/calendar')) {
    // 针对 calendar 的逻辑
    if (obj.bizResult?.data?.ernInfo) {
        obj.bizResult.data.ernInfo.forEach(entry => {
            if (entry.ernMon) {
                entry.ernMon = processValue(entry.ernMon);
            }
            if (entry.ernRat) {
                entry.ernRat = processValue(entry.ernRat);
            }
        });
    }
} else if (url.includes('/iincomereport/incomecommon/incomeflow')) {
    // 针对 incomeflow 的逻辑
    const excludeNames = ["朝朝宝", "周周宝", "月月宝", "季季宝", "快赎专区"];
    
    if (obj.bizResult?.data?.prdDtl) {
        obj.bizResult.data.prdDtl.forEach(item => {
            // 仅在产品名称不在排除列表时，将 prdErn 乘以 50
            if (item.prdErn && !excludeNames.includes(item.prdName)) {
                item.prdErn = (parseFloat(item.prdErn) * 50).toFixed(2).toString();
            }
        });
    }
}

$done({ body: JSON.stringify(obj) });
