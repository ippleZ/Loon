const url = $request.url;
const ua = header["User-Agent"] || header["user-agent"];

if (url.includes("/amdc/mobileDispatch")) {
  if (
    ua.includes("AMapiPhone")
  ) {
    $done({ status: "HTTP/1.1 404 Not Found" });
  } else {
    $done({});
  }
}
