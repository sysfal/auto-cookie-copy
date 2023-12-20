chrome.cookies.getAll({'domain':'from.com'}, function(cookie) {
  let copied = 0;

  for(let i=0;i<cookie.length;i++){
    if (cookie[i].name === 'c1') {
      chrome.cookies.set({'url':'https://localhost:4200', 'name':'c1', 'value':cookie[i].value});
      ++copied;
    }
    if (cookie[i].name === 'c2') {
      chrome.cookies.set({'url':'https://localhost:4200', 'name':'c2', 'value':cookie[i].value});
      ++copied;
    }
  }

  if (copied === 2) {
    let log = document.getElementById('log');
    log.innerText = 'tokens_copied';
  }
});
