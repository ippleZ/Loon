#!name = 彩云天气去广告
#!desc = 移除移除首页推广、弹窗、悬浮窗、底栏天气助手和工具箱入口，移除我的页面广告横幅。
#!icon = https://gitlab.com/lodepuly/iconlibrary/-/raw/main/App_icon/120px/ColorfulClouds.png
[Rewrite]
^https:\/\/biz\.cyapi\.cn\/(p\/v1\/entries|p\/v1\/trial_card\/info|v2\/product) reject-dict
^https:\/\/starplucker\.cyapi\.cn\/v3\/(config\/cypage\/\w+\/conditions|notification\/message_center|operation\/homefeatures) reject-dict

[Script]
http-response ^https:\/\/(wrapper\.cyapi\.cn|api\.caiyunapp\.com|cdn-w\.caiyunapp\.com)\/v1\/activity\? script-path = https://raw.githubusercontent.com/ippleZ/Loon/main/script/caiyun.js, requires-body = true, tag = 彩云天气去广告

[Mitm]
hostname = biz.cyapi.cn, starplucker.cyapi.cn, api.caiyunapp.com, cdn-w.caiyunapp.com
