function fade(className) {
	var toFade = document.getElementsByClassName(className);
	var fadeStarted = document.getElementsByClassName(className + ' fade-start');
	var fadeEnded = document.getElementsByClassName(className + ' fade-end');
	for(var i = 0, length = toFade.length; i < length; i++) {
		var el = toFade[i];
		el.classList.add('fade-start');
	}
	setTimeout(function fadeInTimed() {
		var el = fadeStarted[0];
		el.classList.add('fade-end')
		el.classList.remove('fade-start');
		if(fadeStarted.length) {
			setTimeout(fadeInTimed, 100);
		}
	}, 100);
	setTimeout(function fadeInEnded() {
		var el = fadeEnded[0];
		el.classList.remove('fade-end');
		if(fadeEnded.length) {
			setTimeout(fadeInEnded, 100);
		}
	}, 2000);
}