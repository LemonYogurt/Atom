// show.js专门来做进场动画的统一管理，因为每个页面的进场动画都不相同
define(function (require, exports) {
  function show (aA, aDiv) {
    var firstHash = window.location.hash.substring(1) || 'index';

    for (var i = 0; i < aDiv.length; i++) {
      aDiv[i].style.display = 'none';
      if (firstHash == aDiv[i].dataset.hash) {
        aDiv[i].style.display = 'block';
        switch (firstHash) {
          case 'index' :
            require('./indexIn.js').init(aDiv[i]);
            break;
          case 'subject' :
            require('./subjectIn.js').init(aDiv[i]);
            break;
          case 'message' :
            require('./messageIn.js').init(aDiv[i]);
            break;
        }
      }
    }
  }

  exports.show = show;
});
