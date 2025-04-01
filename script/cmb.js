let body = $response.body;
let obj = JSON.parse(body);

const fieldsToModify = ["zTrxBal", "zRcyBal", "zTrxAmt"];
const targetCategories = ["个人买入", "个人卖出"];

function modifyValues(data) {
    if (Array.isArray(data)) {
        data.forEach(modifyValues);
    } else if (typeof data === 'object' && data !== null) {
        if (targetCategories.includes(data.category)) {
            fieldsToModify.forEach(field => {
                if (data[field] && typeof data[field] === 'number') {
                    data[field] *= 5;
                }
            });
        }
        Object.values(data).forEach(modifyValues);
    }
}

modifyValues(obj);

$done({ body: JSON.stringify(obj) });
