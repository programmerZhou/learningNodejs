var fs = require('fs');
var path = require('path');
var _ = require('lodash');
var co = require('co');
var moment = require('moment');
var request = require('request');
var Promise = require('bluebird');
var fapiaoInterface = require('./fapiao/interface.js')
Promise.promisifyAll(fs);

var params = {"REQUEST_COMMON_FPKJ": 
						{	"FPQQLSH":"wjtest201701111151",
							"BMB_BBH":"",
							"ZSFS":"0",
							"KPLX":"0",
							"XSF_NSRSBH":"110109500321655",
							"XSF_MC":"百旺电子测试2",
							"XSF_DZDH":"深圳科技园",
							"XSF_YHZH":"",
							"GMF_NSRSBH": "",
							"GMF_MC": "测试",
							"GMF_DZDH": "18200710647",
							"GMF_YHZH": "",
							"GMF_SJH": "18200710647",
							"GMF_DZYX": "",
							"FPT_ZH": "",
							"WX_OPENID": "",
							"KPR": "测试单位",
							"SKR": "",
							"FHR": "",
							"YFP_DM": "",
							"YFP_HM": "",
							"JSHJ": "106",
							"HJJE": "100",
							"HJSE": "6",
							"KCE": "",
							"BZ": "0070440726/0087891369",
							"HYLX": "0",
							"BY1": "",
							"BY2": "",
							"BY3": "",
							"BY4": "",
							"BY5": "",
							"BY6": "",
							"BY7": "",
							"BY8": "",
							"BY9": "",
							"BY10": "",
							"COMMON_FPKJ_XMXXS": {"COMMON_FPKJ_XMXX": [{ "FPHXZ": "0",
																		"SPBM": "3070401000000000000",
																		"ZXBM": "",
																		"YHZCBS": "",
																		"LSLBS": "",
																		"ZZSTSGL": "",
																		"XMMC": "餐饮服务",
																		"GGXH": "",
																		"DW": "",
																		"XMSL": "2",
																		"XMDJ": "50.000000",
																		"XMJE": "100.00",
																		"SL": "0.06",
																		"SE": "6.00",
																		"BY1": "",
																		"BY2": "",
																		"BY3": "",
																		"BY4": "",
																		"BY5": ""}] } } };

function start() {
    co(function*(){
        var data = yield fapiaoInterface.doAction('FPKJ', '6d29f136114544bcc73edcce960c430231183cc192c433e2b9ebcad56e8ceb08', '5EE6C2C11DD421F2', '123456', 'testISSUE.pfx', params);

        console.log("data: " + JSON.stringify(data));
    }).catch(function(error){
        console.log("error: " + error);
    });
}

start();
