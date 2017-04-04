chrome.tabs.onHighlighted.addListener(function(){
	isDeveloper();
});

chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete' && tab.url.indexOf('chrome-')<0) {
		isDeveloper();
  }
});

function isDeveloper(){
	chrome.tabs.query({'active': true,'lastFocusedWindow': true,'highlighted':true,'currentWindow':true}, function (tabs) {
		chrome.cookies.get({name:"developer","url":tabs[0].url}, function(cookie){
			if(!!cookie){
				chrome.browserAction.setIcon({
		    		path : "green.png"
				});
			}else{
				chrome.browserAction.setIcon({
		    		path : "yellow.png"
				});
			}
		});
	});
}
