const body = $response.body;
const obj = body.replace(/^#!desc.*\n|^#!openUrl.*\n|^#!author.*\n|^#!homepage.*\n/gm, '');
$done({ body: obj });
