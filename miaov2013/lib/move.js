/**
 * JavaScript Speed Animate lib v0.1
 */
function startMove(obj, json, fn) {
	clearInterval(obj.timer);
	var cur = 0;
	var speed = 0;
	var flag = true;
	obj.timer = setInterval(function () {
		flag = true;
		for (var attr in json) {
			var target = json[attr];
			if (attr == 'opacity') {
        if (Math.round(parseFloat(css(obj, attr)) * 100) == 0) {
          cur = Math.round(parseFloat(css(obj, attr)) * 100);
        } else {
          cur = Math.round(parseFloat(css(obj, attr)) * 100) || 100;
        }
			} else {
				cur = parseInt(css(obj, attr));
			}
			speed = (target - cur) / 8;
			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
			if (cur != target) {
				flag = false;
				if (attr == 'opacity') {
					obj.style.opacity = (cur + speed) / 100;
					obj.style.filter = 'alpha(opacity=' + (cur + speed) + ')';
				} else {
					obj.style[attr] = (cur + speed) + 'px';
				}
			}
		}
		if (flag) {
			clearInterval(obj.timer);
			fn && fn.call(obj);
		}
	}, 30);
}
function css(obj, attr) {
	if (obj.currentStyle) {
		return obj.currentStyle[attr];
	} else {
		return getComputedStyle(obj, false)[attr];
	}
}
