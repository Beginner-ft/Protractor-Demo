/**
 * 
 */

function ObjectsPage()
{
this.firstInput=element(by.model("first"));
this.secondInput=element(by.model("second"));
this.goButton=element(by.id("gobutton"));
this.count=function(){
	element.all(by.repeater("result in memory")).count().then(
			function(text)
			{
		console.log(text);
					
			});	
}	
this.readFirstResult=function(){
	element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(
			function(text)
			{
		console.log(text);
			
			});
}	
	
	
this.readAllResults=function()
{
	element.all(by.repeater("result in memory")).each(
			function(item)
			{
				
	item.element(by.css("td:nth-child(3)")).getText().then(
			function(text)
			{
		console.log(text);
			
			});
					
			});		
}
	
this.getUrls=function()
{ 

browser.get('https://angularjs.org');
browser.get('https://juliemr.github.io/protractor-demo/');
	}

}

module.exports=new ObjectsPage();//create an object of the method
								//created an object for exporting it throughout the project//making it globally available