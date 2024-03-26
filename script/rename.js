// 创建国家列表
const enFull = ['Hong Kong', 'HongKong', 'Macao', 'Taiwan', 'Taipei', '台北', 'Japan', 'Tokyo', '东京', 'Osaka', '大阪', 'Korea', 'Seoul', '首尔', 'Singapore', '狮城', 'United States', 'America', 'New York', '纽约', 'Los Angeles', '旧金山', 'Afghanistan', 'United Arab Emirates', 'Oman', 'Azerbaijan', 'Pakistan', 'Bahrain', 'Bhutan', 'North Korea', 'Timor-Leste', 'Philippines', 'Georgia', 'Kazakhstan', 'Kyrgyzstan', 'Cambodia', 'Qatar', 'Kuwait', 'Laos', 'Lebanon', 'Maldives', 'Malaysia', 'Mongolia', 'Bangladesh', 'Myanmar', 'Nepal', 'Cyprus', 'Saudi Arabia', 'Sri Lanka', 'Tajikistan', 'Thailand', 'Turkey', 'Turkmenistan', 'Brunei', 'Uzbekistan', 'Syria', 'Armenia', 'Yemen', 'Iraq', 'Iran', 'Israel', 'India', 'Indonesia', 'Jordan', 'Vietnam', 'China', 'Algeria', 'Egypt', 'Ethiopia', 'Angola', 'Benin', 'Botswana', 'Burkina Faso', 'Burundi', 'Equatorial Guinea', 'Togo', 'Eritrea', 'Cape Verde', 'Gambia', 'Congo (Brazzaville)', 'Congo (Kinshasa)', 'Djibouti', 'Guinea', 'Guinea-Bissau', 'Ghana', 'Gabon', 'Zimbabwe', 'Comoros', 'Côte d\'Ivoire', 'Kenya', 'Lesotho', 'Liberia', 'Libya', 'Rwanda', 'Madagascar', 'Malawi', 'Mali', 'Mauritius', 'Mauritania', 'Morocco', 'Mozambique', 'Namibia', 'South Africa', 'South Sudan', 'Niger', 'Nigeria', 'Sierra Leone', 'Senegal', 'Seychelles', 'São Tomé and Príncipe', 'Eswatini', 'Sudan', 'Somalia', 'Tanzania', 'Tunisia', 'Uganda', 'Zambia', 'Chad', 'Central African Republic', 'Albania', 'Ireland', 'Estonia', 'Andorra', 'Austria', 'Belarus', 'Bulgaria', 'Belgium', 'Iceland', 'Bosnia and Herzegovina', 'Poland', 'Denmark', 'Germany', 'Russia', 'France', 'Vatican City', 'Finland', 'Netherlands', 'Montenegro', 'Czech Republic', 'Kosovo', 'Croatia', 'Latvia', 'Lithuania', 'Liechtenstein', 'Luxembourg', 'Romania', 'Malta', 'North Macedonia', 'Moldova', 'Monaco', 'Norway', 'Portugal', 'Sweden', 'Switzerland', 'Serbia', 'San Marino', 'Slovakia', 'Slovenia', 'Ukraine', 'Spain', 'Greece', 'Hungary', 'Italy', 'United Kingdom', 'Argentina', 'Antigua and Barbuda', 'Barbados', 'Bahamas', 'Paraguay', 'Panama', 'Brazil', 'Bolivia', 'Belize', 'Dominican Republic', 'Dominica', 'Ecuador', 'Colombia', 'Costa Rica', 'Grenada', 'Cuba', 'Guyana', 'Haiti', 'Honduras', 'Canada', 'Peru', 'Mexico', 'Nicaragua', 'El Salvador', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent and the Grenadines', 'Suriname', 'Trinidad and Tobago', 'Guatemala', 'Venezuela', 'Uruguay', 'Jamaica', 'Chile', 'Australia', 'Papua New Guinea', 'Fiji', 'Kiribati', 'Marshall Islands', 'Micronesia', 'Nauru', 'Palau', 'Solomon Islands', 'Tuvalu', 'Vanuatu', 'New Zealand'];
const enShort = ['HK', 'HK', 'MO', 'TW', 'TW', 'TW', 'JP', 'JP', 'JP', 'JP', 'JP', 'KR', 'KR', 'KR', 'SG', 'SG', 'US', 'US', 'US', 'US', 'US', 'US', 'AF', 'AE', 'OM', 'AZ', 'PK', 'BH', 'BT', 'KP', 'TL', 'PH', 'GE', 'KZ', 'KG', 'KH', 'QA', 'KW', 'LA', 'LB', 'MV', 'MY', 'MN', 'BD', 'MM', 'NP', 'CY', 'SA', 'LK', 'TJ', 'TH', 'TR', 'TM', 'BN', 'UZ', 'SY', 'AM', 'YE', 'IQ', 'IR', 'IL', 'IN', 'ID', 'JO', 'VN', 'CN', 'DZ', 'EG', 'ET', 'AO', 'BJ', 'BW', 'BF', 'BI', 'GQ', 'TG', 'ER', 'CV', 'GM', 'CG', 'CD', 'DJ', 'GN', 'GW', 'GH', 'GA', 'ZW', 'KM', 'CI', 'KE', 'LS', 'LR', 'LY', 'RW', 'MG', 'MW', 'ML', 'MU', 'MR', 'MA', 'MZ', 'NA', 'ZA', 'SS', 'NE', 'NG', 'SL', 'SN', 'SC', 'ST', 'SZ', 'SD', 'SO', 'TZ', 'TN', 'UG', 'ZM', 'TD', 'CF', 'AL', 'IE', 'EE', 'AD', 'AT', 'BY', 'BG', 'BE', 'IS', 'BA', 'PL', 'DK', 'DE', 'RU', 'FR', 'VA', 'FI', 'NL', 'ME', 'CZ', 'XK', 'HR', 'LV', 'LT', 'LI', 'LU', 'RO', 'MT', 'MK', 'MD', 'MC', 'NO', 'PT', 'SE', 'CH', 'RS', 'SM', 'SK', 'SI', 'UA', 'ES', 'GR', 'HU', 'IT', 'GB', 'AR', 'AG', 'BB', 'BS', 'PY', 'PA', 'BR', 'BO', 'BZ', 'DO', 'DM', 'EC', 'CO', 'CR', 'GD', 'CU', 'GY', 'HT', 'HN', 'CA', 'PE', 'MX', 'NI', 'SV', 'KN', 'LC', 'VC', 'SR', 'TT', 'GT', 'VE', 'UY', 'JM', 'CL', 'AU', 'PG', 'FJ', 'KI', 'MH', 'FM', 'NR', 'PW', 'SB', 'TV', 'VU', 'NZ'];
const enShort3 = ['HKG', 'HKG', 'MAC', 'TWN', 'TWN', 'TWN', 'JPN', 'JPN', 'JPN', 'JPN', 'JPN', 'KOR', 'KOR', 'KOR', 'SGP', 'SGP', 'USA', 'USA', 'USA', 'USA', 'USA', 'USA', 'AFG', 'ARE', 'OMN', 'AZE', 'PAK', 'BHR', 'BTN', 'PRK', 'TLS', 'PHL', 'GEO', 'KAZ', 'KGZ', 'KHM', 'QAT', 'KWT', 'LAO', 'LBN', 'MDV', 'MYS', 'MNG', 'BGD', 'MMR', 'NPL', 'CYP', 'SAU', 'LKA', 'TJK', 'THA', 'TUR', 'TKM', 'BRN', 'UZB', 'SYR', 'ARM', 'YEM', 'IRQ', 'IRN', 'ISR', 'IND', 'IDN', 'JOR', 'VNM', 'CHN', 'DZA', 'EGY', 'ETH', 'AGO', 'BEN', 'BWA', 'BFA', 'BDI', 'GNQ', 'TGO', 'ERI', 'CPV', 'GMB', 'COG', 'COD', 'DJI', 'GIN', 'GNB', 'GHA', 'GAB', 'ZWE', 'COM', 'CIV', 'KEN', 'LSO', 'LBR', 'LBY', 'RWA', 'MDG', 'MWI', 'MLI', 'MUS', 'MRT', 'MAR', 'MOZ', 'NAM', 'ZAF', 'SSD', 'NER', 'NGA', 'SLE', 'SEN', 'SYC', 'STP', 'SWZ', 'SDN', 'SOM', 'TZA', 'TUN', 'UGA', 'ZMB', 'TCD', 'CAF', 'ALB', 'IRL', 'EST', 'AND', 'AUT', 'BLR', 'BGR', 'BEL', 'ISL', 'BIH', 'POL', 'DNK', 'DEU', 'RUS', 'FRA', 'VAT', 'FIN', 'NLD', 'MNE', 'CZE', 'XKX', 'HRV', 'LVA', 'LTU', 'LIE', 'LUX', 'ROU', 'MLT', 'MKD', 'MDA', 'MCO', 'NOR', 'PRT', 'SWE', 'CHE', 'SRB', 'SMR', 'SVK', 'SVN', 'UKR', 'ESP', 'GRC', 'HUN', 'ITA', 'GBR', 'ARG', 'ATG', 'BRB', 'BHS', 'PRY', 'PAN', 'BRA', 'BOL', 'BLZ', 'DOM', 'DMA', 'ECU', 'COL', 'CRI', 'GRD', 'CUB', 'GUY', 'HTI', 'HND', 'CAN', 'PER', 'MEX', 'NIC', 'SLV', 'KNA', 'LCA', 'VCT', 'SUR', 'TTO', 'GTM', 'VEN', 'URY', 'JAM', 'CHL', 'AUS', 'PNG', 'FJI', 'KIR', 'MHL', 'FSM', 'NRU', 'PLW', 'SLB', 'TUV', 'VUT', 'NZL'];
const zh = ['香港', '香港', '澳门', '台湾', '台湾', '台湾', '日本', '日本', '日本', '日本', '日本', '韩国', '韩国', '韩国', '新加坡', '新加坡', '美国', '美国', '美国', '美国', '美国', '美国', '阿富汗', '阿联酋', '阿曼', '阿塞拜疆', '巴基斯坦', '巴林', '不丹', '朝鲜', '东帝汶', '菲律宾', '格鲁吉亚', '哈萨克斯坦', '吉尔吉斯斯坦', '柬埔寨', '卡塔尔', '科威特', '老挝', '黎巴嫩', '马尔代夫', '马来西亚', '蒙古', '孟加拉国', '缅甸', '尼泊尔', '塞浦路斯', '沙特阿拉伯', '斯里兰卡', '塔吉克斯坦', '泰国', '土耳其', '土库曼斯坦', '文莱', '乌兹别克斯坦', '叙利亚', '亚美尼亚', '也门', '伊拉克', '伊朗', '以色列', '印度', '印度尼西亚', '约旦', '越南', '中国', '阿尔及利亚', '埃及', '埃塞俄比亚', '安哥拉', '贝宁', '博茨瓦纳', '布基纳法索', '布隆迪', '赤道几内亚', '多哥', '厄立特里亚', '佛得角', '冈比亚', '刚果（布）', '刚果（金）', '吉布提', '几内亚', '几内亚比绍', '加纳', '加蓬', '津巴布韦', '科摩罗', '科特迪瓦', '肯尼亚', '莱索托', '利比里亚', '利比亚', '卢旺达', '马达加斯加', '马拉维', '马里', '毛里求斯', '毛里塔尼亚', '摩洛哥', '莫桑比克', '纳米比亚', '南非', '南苏丹', '尼日尔', '尼日利亚', '塞拉利昂', '塞内加尔', '塞舌尔', '圣多美和普林西比', '斯威士兰', '苏丹', '索马里', '坦桑尼亚', '突尼斯', '乌干达', '赞比亚', '乍得', '中非共和国', '阿尔巴尼亚', '爱尔兰', '爱沙尼亚', '安道尔', '奥地利', '白俄罗斯', '保加利亚', '比利时', '冰岛', '波黑', '波兰', '丹麦', '德国', '俄罗斯', '法国', '梵蒂冈', '芬兰', '荷兰', '黑山', '捷克', '科索沃', '克罗地亚', '拉脱维亚', '立陶宛', '列支敦士登', '卢森堡', '罗马尼亚', '马耳他', '马其顿', '摩尔多瓦', '摩纳哥', '挪威', '葡萄牙', '瑞典', '瑞士', '塞尔维亚', '圣马力诺', '斯洛伐克', '斯洛文尼亚', '乌克兰', '西班牙', '希腊', '匈牙利', '意大利', '英国', '阿根廷', '安提瓜和巴布达', '巴巴多斯', '巴哈马', '巴拉圭', '巴拿马', '巴西', '玻利维亚', '伯利兹', '多米尼加共和国', '多米尼克', '厄瓜多尔', '哥伦比亚', '哥斯达黎加', '格林纳达', '古巴', '圭亚那', '海地', '洪都拉斯', '加拿大', '秘鲁', '墨西哥', '尼加拉瓜', '萨尔瓦多', '圣基茨和尼维斯', '圣卢西亚', '圣文森特和格林纳丁斯', '苏里南', '特立尼达和多巴哥', '危地马拉', '委内瑞拉', '乌拉圭', '牙买加', '智利', '澳大利亚', '巴布亚新几内亚', '斐济', '基里巴斯', '马绍尔群岛', '密克罗尼西亚联邦', '瑙鲁', '帕劳', '所罗门群岛', '图瓦卢', '瓦努阿图', '新西兰'];

switch ($arguments['input']) {
	case 'enFull':
		var inputList = enFull;
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
	case 'enFull':
		var outputList = enFull;
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
