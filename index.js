const page = require('webpage').create();
const Promise = require('es6-promise').Promise;

const openWebsite = function() {
  const url = 'https://godville.net/';

  return new Promise(function(resolve, reject) {
    page.open(url, function(status) {
      status === 'success' 
        ? resolve() 
        : reject(new Error('Problems while opening a website'));
    });
  });
}

openWebsite().then(function() {
  console.log('All good');
  page.render('example.png');

  phantom.exit();
});
