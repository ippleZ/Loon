// 创建国家列表
const full = ['HongKong','狮城','UnitedStates','America','Dubai','迪拜','Taipei','台北','Tokyo','东京','Osaka','大阪','Seoul','首尔','NewYork','纽约','LosAngeles','旧金山','Afghanistan','Aland Islands','Albania','Algeria','American Samoa','Andorra','Angola','Anguilla','Antarctica','Antigua and Barbuda','Argentina','Armenia','Aruba','Australia','Austria','Azerbaijan','Bahamas','Bahrain','Bangladesh','Barbados','Belarus','Belgium','Belize','Benin','Bermuda','Bhutan','Bolivia','Bosnia and Herzegovina','Botswana','Bouvet Island','Brazil','British Indian Ocean Territory','Brunei Darussalam','Bulgaria','Burkina Faso','Burundi','Cambodia','Cameroon','Canada','Cape Verde','Cayman Islands','Central African Republic','Chad','Chile','China','Christmas Island','Cocos Islands','Colombia','Comoros','Congo','Congo','Cook Islands','Costa Rica','Cote d Ivoire','Croatia','Cuba','Cyprus','Czech Republic','Denmark','Djibouti','Dominica','Dominican Republic','Ecuador','Egypt','El Salvador','Equatorial Guinea','Eritrea','Estonia','Ethiopia','Falkland Islands','Faroe Islands','Fiji','Finland','France','Gabon','Gambia','Georgia','Germany','Ghana','Gibraltar','Greece','Greenland','Grenada','Guadeloupe','Guam','Guatemala','Guernsey','Guinea','Guinea-Bissau','Guyana','Haiti','Heard Island and McDonald Islands','Holy See','Honduras','Hong Kong','Hungary','Iceland','India','Indonesia','Iran','Iraq','Ireland','Isle of Man','Israel','Italy','Jamaica','Japan','Jersey','Jordan','Kazakhstan','Kenya','Kiribati','Korea','Korea','Kuwait','Kyrgyzstan','Lao People Democratic Republic','Latvia','Lebanon','Lesotho','Liberia','Libyan Arab Jamahiriya','Liechtenstein','Lithuania','Luxembourg','Macao','Macedonia','Madagascar','Malawi','Malaysia','Maldives','Mali','Malta','Marshall Islands','Martinique','Mauritania','Mauritius','Mayotte','Mexico','Micronesia','Moldova','Monaco','Mongolia','Montenegro','Montserrat','Morocco','Mozambique','Myanmar','Namibia','Nauru','Nepal','Netherlands','Netherlands Antilles','New Caledonia','New Zealand','Nicaragua','Niger','Nigeria','Niue','Norfolk Island','Northern Mariana Islands','Norway','Oman','Pakistan','Palau','Palestinian Territory','Panama','Papua New Guinea','Paraguay','Peru','Philippines','Pitcairn','Poland','Portugal','Puerto Rico','Qatar','Réunion','Romania','Russian Federation','Rwanda','Saint Helena','Saint Kitts and Nevis','Saint Lucia','Saint Pierre and Miquelon','Saint Vincent and the Grenadines','Samoa','San Marino','Sao Tome and Principe','Saudi Arabia','Senegal','Serbia','Seychelles','Sierra Leone','Singapore','Slovakia','Slovenia','Solomon Islands','Somalia','South Africa','South Georgia and the South Sandwich Islands','Spain','Sri Lanka','Sudan','Suriname','Svalbard and Jan Mayen','Swaziland','Sweden','Switzerland','Syrian Arab Republic','Taiwan','Tajikistan','Tanzania,United Republic of','Thailand','Timor-Leste','Togo','Tokelau','Tonga','Trinidad and Tobago','Tunisia','Turkey','Turkmenistan','Turks and Caicos Islands','Tuvalu','Uganda','Ukraine','United Arab Emirates','United Kingdom','United States','Uruguay','Uzbekistan','Vanuatu','Venezuela','Viet Nam','Wallis and Futuna','Western Sahara','Yemen','Zambia','Zimbabwe'];
const enShort = ['HK','SG','US','US','AE','AE','TW','TW','JP','JP','JP','JP','KR','KR','US','US','US','US','AF','AX','AL','DZ','AS','AD','AO','AI','AQ','AG','AR','AM','AW','AU','AT','AZ','BS','BH','BD','BB','BY','BE','BZ','BJ','BM','BT','BO','BA','BW','BV','BR','IO','BN','BG','BF','BI','KH','CM','CA','CV','KY','CF','TD','CL','CN','CX','CC','CO','KM','CG','CD','CK','CR','CI','HR','CU','CY','CZ','DK','DJ','DM','DO','EC','EG','SV','GQ','ER','EE','ET','FK','FO','FJ','FI','FR','GA','GM','GE','DE','GH','GI','GR','GL','GD','GP','GU','GT','GG','GN','GW','GY','HT','HM','VA','HN','HK','HU','IS','IN','ID','IR','IQ','IE','IM','IL','IT','JM','JP','JE','JO','KZ','KE','KI','KP','KR','KW','KG','LA','LV','LB','LS','LR','LY','LI','LT','LU','MO','MK','MG','MW','MY','MV','ML','MT','MH','MQ','MR','MU','YT','MX','FM','MD','MC','MN','ME','MS','MA','MZ','MM','NA','NR','NP','NL','AN','NC','NZ','NI','NE','NG','NU','NF','MP','NO','OM','PK','PW','PS','PA','PG','PY','PE','PH','PN','PL','PT','PR','QA','RE','RO','RU','RW','SH','KN','LC','PM','VC','WS','SM','ST','SA','SN','RS','SC','SL','SG','SK','SI','SB','SO','ZA','GS','ES','LK','SD','SR','SJ','SZ','SE','CH','SY','TW','TJ','TZ','TH','TL','TG','TK','TO','TT','TN','TR','TM','TC','TV','UG','UA','AE','GB','US','UY','UZ','VU','VE','VN','WF','EH','YE','ZM','ZW'];
const enShort3 = ['HKG','SGP','USA','USA','ARE','ARE','TWN','TWN','JPN','JPN','JPN','JPN','KOR','KOR','USA','USA','USA','USA','AFG','ALA','ALB','DZA','ASM','AND','AGO','AIA','ATA','ATG','ARG','ARM','ABW','AUS','AUT','AZE','BHS','BHR','BGD','BRB','BLR','BEL','BLZ','BEN','BMU','BTN','BOL','BIH','BWA','BVT','BRA','IOT','BRN','BGR','BFA','BDI','KHM','CMR','CAN','CPV','CYM','CAF','TCD','CHL','CHN','CXR','CCK','COL','COM','COG','COD','COK','CRI','CIV','HRV','CUB','CYP','CZE','DNK','DJI','DMA','DOM','ECU','EGY','SLV','GNQ','ERI','EST','ETH','FLK','FRO','FJI','FIN','FRA','GAB','GMB','GEO','DEU','GHA','GIB','GRC','GRL','GRD','GLP','GUM','GTM','GGY','GIN','GNB','GUY','HTI','HMD','VAT','HND','HKG','HUN','ISL','IND','IDN','IRN','IRQ','IRL','IMN','ISR','ITA','JAM','JPN','JEY','JOR','KAZ','KEN','KIR','PRK','KOR','KWT','KGZ','LAO','LVA','LBN','LSO','LBR','LBY','LIE','LTU','LUX','MAC','MKD','MDG','MWI','MYS','MDV','MLI','MLT','MHL','MTQ','MRT','MUS','MYT','MEX','FSM','MDA','MCO','MNG','MNE','MSR','MAR','MOZ','MMR','NAM','NRU','NPL','NLD','ANT','NCL','NZL','NIC','NER','NGA','NIU','NFK','MNP','NOR','OMN','PAK','PLW','PSE','PAN','PNG','PRY','PER','PHL','PCN','POL','PRT','PRI','QAT','REU','ROU','RUS','RWA','SHN','KNA','LCA','SPM','VCT','WSM','SMR','STP','SAU','SEN','SRB','SYC','SLE','SGP','SVK','SVN','SLB','SOM','ZAF','SGS','ESP','LKA','SDN','SUR','SJM','SWZ','SWE','CHE','SYR','TWN','TJK','TZA','THA','TLS','TGO','TKL','TON','TTO','TUN','TUR','TKM','TCA','TUV','UGA','UKR','ARE','GBR','USA','URY','UZB','VUT','VEN','VNM','WLF','ESH','YEM','ZMB','ZWE'];
const zh = ['香港','新加坡','美国','美国','阿联酋','阿联酋','台湾','台湾','日本','日本','日本','日本','韩国','韩国','美国','美国','美国','美国','阿富汗','奥兰群岛','阿尔巴尼亚','阿尔及利亚','美属萨摩亚','安道尔','安哥拉','安圭拉','南极洲','安提瓜和巴布达','阿根廷','亚美尼亚','阿鲁巴','澳大利亚','奥地利','阿塞拜疆','巴哈马','巴林','孟加拉国','巴巴多斯','白俄罗斯','比利时','伯利兹','贝宁','百慕大','不丹','玻利维亚','波黑','博茨瓦纳','布维岛','巴西','英属印度洋领地','文莱','保加利亚','布基纳法索','布隆迪','柬埔寨','喀麦隆','加拿大','佛得角','开曼群岛','中非','乍得','智利','中国','圣诞岛','科科斯群岛','哥伦比亚','科摩罗','刚果','刚果','库克群岛','哥斯达黎加','科特迪瓦','克罗地亚','古巴','塞浦路斯','捷克','丹麦','吉布提','多米尼克','多米尼加','厄瓜多尔','埃及','萨尔瓦多','赤道几内亚','厄立特里亚','爱沙尼亚','埃塞俄比亚','福克兰群岛','法罗群岛','斐济','芬兰','法国','加蓬','冈比亚','格鲁吉亚','德国','加纳','直布罗陀','希腊','格陵兰','格林纳达','瓜德罗普','关岛','危地马拉','格恩西岛','几内亚','几内亚比绍','圭亚那','海地','赫德岛和麦克唐纳岛','梵蒂冈','洪都拉斯','香港','匈牙利','冰岛','印度','印度尼西亚','伊朗','伊拉克','爱尔兰','英国属地曼岛','以色列','意大利','牙买加','日本','泽西岛','约旦','哈萨克斯坦','肯尼亚','基里巴斯','朝鲜','韩国','科威特','吉尔吉斯斯坦','老挝','拉脱维亚','黎巴嫩','莱索托','利比里亚','利比亚','列支敦士登','立陶宛','卢森堡','澳门','前南马其顿','马达加斯加','马拉维','马来西亚','马尔代夫','马里','马耳他','马绍尔群岛','马提尼克','毛利塔尼亚','毛里求斯','马约特','墨西哥','密克罗尼西亚联邦','摩尔多瓦','摩纳哥','蒙古','黑山','蒙特塞拉特','摩洛哥','莫桑比克','缅甸','纳米比亚','瑙鲁','尼泊尔','荷兰','荷属安的列斯','新喀里多尼亚','新西兰','尼加拉瓜','尼日尔','尼日利亚','纽埃','诺福克岛','北马里亚纳','挪威','阿曼','巴基斯坦','帕劳','巴勒斯坦','巴拿马','巴布亚新几内亚','巴拉圭','秘鲁','菲律宾','皮特凯恩','波兰','葡萄牙','波多黎各','卡塔尔','留尼汪','罗马尼亚','俄罗斯联邦','卢旺达','圣赫勒拿','圣基茨和尼维斯','圣卢西亚','圣皮埃尔和密克隆','圣文森特和格林纳丁斯','萨摩亚','圣马力诺','圣多美和普林西比','沙特阿拉伯','塞内加尔','塞尔维亚','塞舌尔','塞拉利昂','新加坡','斯洛伐克','斯洛文尼亚','所罗门群岛','索马里','南非','南乔治亚岛和南桑德韦奇岛','西班牙','斯里兰卡','苏丹','苏里南','斯瓦尔巴岛和扬马延岛','斯威士兰','瑞典','瑞士','叙利亚','台湾','塔吉克斯坦','坦桑尼亚','泰国','东帝汶','多哥','托克劳','汤加','特立尼达和多巴哥','突尼斯','土耳其','土库曼斯坦','特克斯和凯科斯群岛','图瓦卢','乌干达','乌克兰','阿联酋','英国','美国','乌拉圭','乌兹别克斯坦','瓦努阿图','委内瑞拉','越南','瓦利斯和富图纳','西撒哈拉','也门','赞比亚','津巴布韦'];

switch ($arguments['input']) {
	case 'full':
		var inputList = full;
		break;
	case 'enShort':
		var inputList = enShort;
		break;
	case 'enShort3':
		var inputList = enShort3;
		break;
	default:
		var inputList = zh;
};

switch ($arguments['output']) {
	case 'full':
		var outputList = full;
		break;
	case 'enShort':
		var outputList = enShort;
		break;
	case 'enShort3':
		var outputList = enShort3;
		break;
	default:
		var outputList = zh;
};

var countries = {};
for (let i in inputList) {
	countries[inputList[i]] = [outputList[i], 0];
}

// 其它
var others = {
	'[Premium]': '[Premium]',
//	专线: 'Spec',
//	核心: 'Kern',
//	边缘: 'Edge',
//	高级: 'Pro',
//	标准: 'Std',
//	实验: 'Exp',
//	商宽: 'Biz',
//	家宽: 'Fam',
//	LB: 'LB',
};

var additionalOthers = $arguments.others || '{}';
// console.log(additionalOthers);
additionalOthers = JSON.parse(additionalOthers);
others = Object.assign({}, additionalOthers, others);

var autofill = parseInt($arguments.autofill) || false;

// 获取机场名
const airport = ($arguments.airport == undefined) ? '' : decodeURI($arguments.airport);

//删除非必要的1
function stripOnes(proxies) {
  Object.keys(countries).forEach((item,index,array)=>{
    if (countries[item][1] === 1) {
      proxies.map((res) => {
        if (res.name.indexOf(countries[item][0]) !== -1) {
          res.name = res.name.replace("1", '').replace('0', '');
        };
      });
    };
  });
  return proxies
};

// 主函数
function operator(proxies) {
  proxies.map((res) => {
    const resultArray = [airport];
    var matched = false
    for (const elem of Object.keys(countries)) {
      if (res.name.indexOf(elem) !== -1) {
        countries[elem][1] += 1;
        if (!autofill) {
          resultArray.push(countries[elem][0], countries[elem][1]);
        } else {
          resultArray.push(countries[elem][0], countries[elem][1].toString().padStart(autofill, '0'));
        }
        // console.log(resultArray);
        matched = true
        break;
      };
    };
    if (!matched) {
      resultArray.push(res.name);
    };
    Object.keys(others).forEach((elem, index) => {
      if (res.name.indexOf(elem) !== -1) {
        resultArray.splice(2, 0, others[elem]);
      }
    });
    res.name = resultArray.join(' ');
  });
  if ($arguments.del1) {
    proxies = stripOnes(proxies);
  };
  return proxies;
}