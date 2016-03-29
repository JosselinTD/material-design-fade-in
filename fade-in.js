function fade(className) {
	// Needed dom arrays. They auto-update on class change
	var toFade = document.getElementsByClassName(className);
	var fadeStarted = document.getElementsByClassName(className + ' fade-start');
	var fadeEnded = document.getElementsByClassName(className + ' fade-end');

	if (!toFade.length) {
		console.error('No DOM found for \'' + className + '\' class');
		return;
	}
	
	// Init the fading process. If elems are already visible, they will disappeared
	for(var i = 0, length = toFade.length; i < length; i++) {
		var el = toFade[i];
		el.classList.add('fade-start');
	}

	// Start fading on every elems but slighly spaced
	setTimeout(function fadeInTimed() {
		var el = fadeStarted[0];
		el.classList.add('fade-end')
		el.classList.remove('fade-start');
		if(fadeStarted.length) {
			setTimeout(fadeInTimed, 100);
		}
	}, 100);

	// After fading, remove not necessary needed classes
	setTimeout(function fadeInEnded() {
		var el = fadeEnded[0];
		el.classList.remove('fade-end');
		if(fadeEnded.length) {
			setTimeout(fadeInEnded, 100);
		}
	}, 2000);
}