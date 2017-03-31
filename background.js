chrome.tabs.onHighlighted.addListener(function(){
	isDeveloper();
});

chrome.tabs.onUpdated.addListener(function(){
	isDeveloper();
});

function isDeveloper(){
	chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {

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
