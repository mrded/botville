const page = require('webpage').create();
const Promise = require('es6-promise').Promise;
const system = require('system');

const username = system.env.USERNAME;
const password = system.env.PASSWORD;

if (!username || !password) {
  throw 'USERNAME or PASSWORD variables are missing.';
}

const openPromise = new Promise(function(resolve, reject) {
  console.log(':: Open website');

  const data = 'username=' + username + '&password=' + password;

  page.open('https://godville.net/login/login', 'post', data, function(status) {
    status === 'success' 
      ? resolve() 
      : reject(new Error('Problems while opening a website'));
  });
});

openPromise.then(function() {
  console.log('All good');

  page.render('example.png');

  phantom.exit();
});
