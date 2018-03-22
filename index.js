const page = require('webpage').create();
const Promise = require('es6-promise').Promise;
const system = require('system');

if (!system.env.USERNAME || !system.env.PASSWORD) {
  throw 'USERNAME or PASSWORD variables are missing.';
}

page.settings.userAgent = 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2062.120 Safari/537.36';

const openPromise = new Promise(function(resolve, reject) {
  console.log(':: Open website');

  const data = "username=:username&password=:password&commit=Войти!"
    .replace(':username', system.env.USERNAME)
    .replace(':password', system.env.PASSWORD);

  const url = 'https://godville.net/login/login'; // Russian.
  // const url = 'https://godvillegame.com/login/login'; // English.

  page.open(url, 'post', data, function(status) {
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
