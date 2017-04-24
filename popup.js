chrome.storage.sync.get({
    domain: '',
    settings: '',
    pwd_1:''
}, function(items) {

    chrome.cookies.get({name:"developer","url":"http://d2."+items.domain}, function(cookied2){
        if(cookied2){
            var d2ele=document.getElementById('d2');
            d2ele.style="background-color:#3ace61";
        }
    });

    chrome.cookies.get({name:"developer","url":"http://s2."+items.domain}, function(cookies2){
        if(cookies2){
            var s2ele=document.getElementById('s2');
            s2ele.style="background-color:#3ace61";
        }
    });


    function goSettings() {
        chrome.tabs.query({'active': true, 'lastFocusedWindow': true, 'highlighted':true,'currentWindow':true}, function (tabs) {
            var url_parts = tabs[0].url.split("/");
            var url = url_parts[0] + "//" + url_parts[2]+"/"+items.settings;
            chrome.tabs.update(tabs[0].id, {url: url});
        });
    }

    function removecookie() {
        chrome.cookies.remove({"url": "http://d2."+items.domain, "name": "developer"}, function(deleted_cookie) {});
        chrome.cookies.remove({"url": "http://s2."+items.domain, "name": "developer"}, function(deleted_cookie) {});
    }

    function copy(str) {
        document.oncopy = function(event) {
            event.clipboardData.setData('text/plain', str);
            event.preventDefault();
        };
        document.execCommand("Copy", false, null);
    }

    document.getElementById('settings').addEventListener('click', goSettings);
    document.getElementById('removed2s2').addEventListener('click', removecookie);
    document.getElementById('pwd_1').addEventListener('click', copy(items.pwd_1));

});


chrome.tabs.query({'active': true, 'lastFocusedWindow': true, 'highlighted':true,'currentWindow':true}, function (tabs) {
    var url_parts = tabs[0].url.split("/");
    var url = url_parts[0] + "//" + url_parts[2]+"/";
    chrome.cookies.get({name:"developer","url":url}, function(cookiesdev){
        if(cookiesdev.value){
            var devele=document.getElementById('developer');
            devele.innerHTML=cookiesdev.value;
        }
    });
});
