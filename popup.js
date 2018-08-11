window.addEventListener("load", function() {
	document.querySelector("#stajyer").addEventListener("click", function() {		
		chrome.tabs.getSelected(null, function(tab) {
				chrome.extension.sendMessage({ msg: "startFunc", tabId: tab.id});
			});
			
		
	});

});