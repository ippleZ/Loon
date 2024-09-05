var body = JSON.parse($response.body);

body.data = {
  ...body.data,
  "vipType" : "lifetime",
  "vipDeadline" : "2099-09-09T09:09:09.000Z",
  "isVip" : true
};

$done({body : JSON.stringify(body)});
