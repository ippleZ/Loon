let body = $response.body;
let obj = JSON.parse(body);
let url = $request.url;

function processValue(value) {
    let num = parseFloat(value);
    return num > 0 ? (num * 2).toFixed(2) : (num / 2).toFixed(2);
}

// 初始化一个全局变量来存储总和
let totalSum = 0;

if (url.includes('/iincomereport/income/calendar')) {
    if (obj.bizResult?.data?.ernInfo) {
        obj.bizResult.data.ernInfo.forEach(entry => {
            if (entry.ernMon) {
                totalSum += parseFloat(entry.ernMon); // 累加总和
                entry.ernMon = processValue(entry.ernMon);
            }
            if (entry.ernRat) {
                entry.ernRat = processValue(entry.ernRat);
            }
        });
    }
} else if (url.includes('/iincomereport/incomecommon/incomeflow')) {
    const excludeNames = ["朝朝宝", "周周宝", "月月宝", "季季宝", "快赎专区"];
    
    if (obj.bizResult?.data?.prdDtl) {
        obj.bizResult.data.prdDtl.forEach(item => {
            if (item.prdErn && !excludeNames.includes(item.prdName)) {
                item.prdErn = (parseFloat(item.prdErn) * 5).toFixed(2).toString();
            }
        });
    }
} else if (url.includes('/iincomereport/income/incomerate')) {
    if (obj.bizResult?.data?.ernInfo) {
        let lastEntry = obj.bizResult.data.ernInfo[obj.bizResult.data.ernInfo.length - 1];
        lastEntry.ernMon = totalSum.toFixed(2).toString(); // 使用总和
    }
}

$done({ body: JSON.stringify(obj) });
