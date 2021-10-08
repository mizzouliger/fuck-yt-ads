chrome.runtime.sendMessage({greeting: "this is from the sendMessage"}, function (response) {
    console.log("this is from the sendmessage");
});

function reload() {
    var adElement = document.getElementById("ad-text:3")
    if (typeof (adElement) != 'undefined' && adElement != null) {
        console.log('Ad Element exists');
    } else {
        console.log('Ad Element does not exist');
    }
}

// TODO: So this listener is not being invoked.
/*
chrome.tab.onUpdated.addEventListener({greeting: "this is in the add listener"}, function (tabId, changeInfo, tab) {
    if (changeInfo.status == 'complete' && tab.active) {
        console.log(" Is this a new tab,page");
    }
})
*/

chrome.runtime.addEventListener({greeting: "this is the event listener"}, function (tabId, changeInfo, tab) {
    if (changeInfo.status == 'complete' && tab.active) {
        console.log(" Is this a new tab,page");
    }
})

// chrome.runtime.onUpdated