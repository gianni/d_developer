function save_options() {
    var username=document.getElementById("username").value;
    var domain=document.getElementById("domain").value;
    var settings=document.getElementById("settings").value;
    var pwd_1=document.getElementById("pwd_1").value;

    chrome.storage.sync.set({
        'username': username,
        'domain': domain,
        'settings': settings,
        'pwd_1': pwd_1
    }, function() {
        // Update status to let user know options were saved.
        var status = document.getElementById('status');
        status.textContent = 'Options saved';
        setTimeout(function() {
            status.textContent = '';
        }, 1500);
    });

}

document.getElementById('save').addEventListener('click', save_options);
