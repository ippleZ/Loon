// 定义正则表达式模式
var regex1 = /https:\/\/github\.com\/(.+)\/raw\/(.+)/gi;
var regex2 = /https:\/\/raw\.githubusercontent\.com\/(.+)/gi;

// 替换匹配项
var modifiedBody = $response.body.replace(regex1, function(match, p1, p2) {
    return 'https://raw.gitmirror.com/' + p1 + '/' + p2;
});
modifiedBody = modifiedBody.replace(regex2, function(match, p1) {
    return 'https://raw.gitmirror.com/' + p1;
});

// 返回修改后的响应体
$done({ body: modifiedBody });
