/**
 * 
 */
exports.config={
		
	//seleniumAdress: 'http://localhost:4444/wd/hub'	,
	directConnect: true,
	//seleniumServerJar :'./node_modules/selenium-server-standalone-jar/jar/selenium-server-standalone-3.141.59.jar',
	specs:['TesCase1Page.js'],

	onPrepare:function()

	{ 	 var AllureReporter = require('jasmine-allure-reporter');
		jasmine.getEnv().addReporter(new AllureReporter({
		  resultsDir: 'allure-results'
		})); 
		originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
		jasmine.DEFAULT_TIMEOUT_INTERVAL = 8000;
		browser.sleep(3000);
		browser.driver.manage().window().maximize();
	},
	
capabilities:
{
	'browserName':'chrome',
	'goog:chromeOptions': {
		w3c: false,
		 args: [ "--headless", "--disable-gpu"]
	        }

}
	};
