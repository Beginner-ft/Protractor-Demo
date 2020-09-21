/**
 * 
 */


describe('Protractor Training', function(){			
	
	var pageObj=require("./ObjectsPage.js");	
	
	 beforeEach(function()
			{
			var originalTimeout;   
	       
		pageObj.getUrls();		
		
			});
	afterEach(function()
			{
		console.log("Closing browser");	
		
			});
	function Add(a,b,c) //outside the it block so that it is accessible around the 
	{
		pageObj.firstInput.sendKeys(a);
		pageObj.secondInput.sendKeys(b);	
		
		element.all(by.tagName("option")).each(function(item)
				{
			item.getAttribute("value").then(function(values)
					{
				if(values==c)
					{
					item.click(values);
					}
				
		})
	})
		//browser.actions().sendKeys(Key.ENTER).perform();
	pageObj.goButton.click();
	}
	
	it('Open Angular js website',function(){					
		
		
	Add(2,3,"ADDITION");
	Add(8,3,"DIVISION");
	Add(9,3,"MODULO");
	Add(7,3,"MULTIPLICATION");
	
			browser.sleep(5000);
		//	expect(element(by.css("h2[class='ng-binding']")).getText()).toBe("8");
			/*element(by.css("h2[class='ng-binding']")).getText().then(function(text)
					{
				console.log(text);
					
					})*/
			
	//read first element of table
	pageObj.readFirstResult();
	
	// count of the no of elements in table
	pageObj.count	
	//print table values of third column
		pageObj.readAllResults();
	
/*	element(by.model("operator")).element(by.css("option[value='DIVISION']")).click()
	element.all(by.tagName("option")).each(function(item){
					item.getAttribute("value").then(function(values)
							{
						console.log(values);
							})
				})*/

	
			
	})

})
	
