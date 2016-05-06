// hide.js专门来做出场动画的统一管理，因为每个页面的出场动画都不相同
define(function (require, exports) {
  function hide(aA, aDiv) {
    // 官网的效果是出场动画完成后，才去修改hash值的
    for (var i = 0; i < aA.length; i++) {
      aA[i].onclick = function () {
        // dataset：表示data自定义属性的集合
        // 等运动出场之后，hash值再变
        var hash = this.dataset.hash;
        window.bBtn = false;
        // window.location.hash = hash;
        switch(window.location.hash.substring(1) || 'index') {
          case 'index' :
            require('./indexOut.js').init(aA, aDiv, hash);
            break;
          case 'subject' :
            require('./subjectOut.js').init(aA, aDiv, hash);
            break;
          case 'message' :
            require('./messageOut.js').init(aA, aDiv, hash);
            break;
        }
      };
    }
  }
  exports.hide = hide;
});
