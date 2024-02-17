var pattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
var current = 0;
var pictureId = 0;
var numberOfPictures = 4;

var keyHandler = function (event) {

	// If the key isn't in the pattern, or isn't the current key in the pattern, reset
	if (pattern.indexOf(event.key) < 0 || event.key !== pattern[current]) {
		current = 0;
		return;
	}

	// Update how much of the pattern is complete
	current++;

	// If complete, alert and reset
	if (pattern.length === current) {
		current = 0;
        pictureId++;
        pictureId=pictureId%numberOfPictures;//loop back to first picture when repeating the easter egg
        document.getElementById('particles-js').style.backgroundImage="url('assets/img/back/"+pictureId+".jpg')";
	}
};

// Listen for keydown events
document.addEventListener('keydown', keyHandler, false);