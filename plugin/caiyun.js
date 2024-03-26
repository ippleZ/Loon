#!name= 高德地图去广告
#!desc= 过滤高德地图广告
#!icon= https://gitlab.com/lodepuly/iconlibrary/-/raw/main/App_icon/120px/Amap.png

[Rewrite]
^https:\/\/biz\.cyapi\.cn\/p\/v1\/entries\? url reject-dict
^https:\/\/starplucker\.cyapi\.cn\/v3\/operation\/homefeatures\? url reject-dict

[Script]
# 移除阿里巴巴通用广告请求
http-response ^https:\/\/biz\.cyapi\.cn\/(p\/v1\/vip_info|v2\/user) script-path = https://raw.githubusercontent.com/ippleZ/Loon/main/script/caiyun.js
http-response ^https:\/\/wrapper\.cyapi\.cn\/v1\/activity\? script-path = https://raw.githubusercontent.com/ippleZ/Loon/main/script/caiyun.js
http-body ^https:\/\/wrapper\.cyapi\.cn\/v1\/(nafp\/origin_images|satellite)\?  script-path = https://raw.githubusercontent.com/ippleZ/Loon/main/script/caiyun.js


[Mitm]
hostname = m5.amap.com, m5-zb.amap.com, oss.amap.com, sns.amap.com
