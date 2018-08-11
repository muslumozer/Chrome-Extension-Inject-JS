chrome.extension.onMessage.addListener(
    function(request, sender, sendResponse){
        if(request.msg == "startFunc")
		{
			 chrome.tabs.executeScript(request.tabId, {file: 'inject.js'});
		}
    }
);