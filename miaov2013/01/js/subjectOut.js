define(function (require, exports) {
  function init(aA, aDiv, hash) {
    for (var i = 0; i < aDiv.length; i++) {
      if (aDiv[i].dataset.hash == 'subject') {
        startMove(aDiv[i], {width:0, height: 0}, function () {
          window.location.hash = hash;
          // 出场动画结束之后，就要走进场动画了
          require('./show.js').show(aA, aDiv);
        });
      }
    }
  }

  exports.init = init;
});
