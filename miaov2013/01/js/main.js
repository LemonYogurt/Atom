define(function (require, exports) {
  // main.js中存放一些公共的内容，比如说：logo、nav、footer、menu等内容在各个页面中都是不变的
  /*
  console.log('main.js');
  require('logo.js').init();
  require('menu.js').init();
  require('footer.js').init();
  */
  var aA = document.getElementsByTagName('a');
  var aDiv = document.getElementsByTagName('div');

  window.bBtn = true;

  window.onhashchange = function () {
    if (window.bBtn) {
      window.location.reload();
    }
  };

  require('./show.js').show(aA, aDiv);

  require('./hide.js').hide(aA, aDiv);
});
