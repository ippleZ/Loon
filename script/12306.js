const url = $request.url;
const header = $request.headers;
const headopt = header["Operation-Type"] || header["operation-type"];

if (url.includes("/mobile.12306.cn/otsmobile/app/mgs/")) {
  // 12306页面内容
  const list12306 = [
    // "com.cars.otsmobile.bangbangSafe.deciveInfo", // 设备序列号
    // "com.cars.otsmobile.checkLoginStatus", // 登录信息
    // "com.cars.otsmobile.city",
    // "com.cars.otsmobile.initCountry",
    // "com.cars.otsmobile.initNewSysCache",
    // "com.cars.otsmobile.initProvince",
    "com.cars.otsmobile.integration.activityBanner", // 活动横幅
    "com.cars.otsmobile.memberInfo.getMemberQa", // 铁路会员 常见问题
    // "com.cars.otsmobile.memberInfo.integrationHomeInit", // 铁路会员 会员信息
    // "com.cars.otsmobile.newHomePage.getWeatherByStationCode", // 天气信息
    "com.cars.otsmobile.newHomePage.initData", // 热门资讯
    "com.cars.otsmobile.newHomePageBussData" // 商品信息流
    // "com.cars.otsmobile.newHomePageRefresh",
    // "com.cars.otsmobile.travelPage.initData", // 出行服务
  ];

  if (list12306?.includes(headopt)) {
    $done({ status: "HTTP/1.1 204 No Content" });
  } else {
    $done({});
  }
} else if (url.includes("/ad.12306.cn/ad/ser/getAdList")) {
  let body = "";
  let obj = JSON.parse($request.body);
  if (obj.placementNo === "0007") {
    body =
      '{"code":"00","materialsList":[{"billMaterialsId":"255","filePath":"h","creativeType":1}],"advertParam":{"skipTime":1}}';
  } else if (obj.placementNo === "G0054") {
    body = '{"code":"00","materialsList":[]}';
  } else {
    body = '{"code":"00","message":"无广告返回"}';
  }
  $done({ body });
}
