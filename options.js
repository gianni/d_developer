function save_options() {
  var domain=document.getElementById("domain").value;
  var settings=document.getElementById("settings").value;

  console.log(settings);
  chrome.storage.sync.set({
    'domain': domain,
    'settings': settings
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
