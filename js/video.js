var video;

window.addEventListener("load", function () {
	console.log("Good job opening the window");

	// Initialize the video element
	video = document.getElementById("player1");
	video.autoplay = false;
	video.loop = false;

	// Set initial volume display
	document.getElementById("volume").textContent = video.volume * 100 + "%";

	// Play
	document.getElementById("play").addEventListener("click", function () {
		video.play();
		document.getElementById("volume").textContent = video.volume * 100 + "%";
		console.log("Play Video");
	});

	// Pause
	document.getElementById("pause").addEventListener("click", function () {
		video.pause();
		console.log("Pause Video");
	});

	// Slow Down (10% reduction)
	document.getElementById("slower").addEventListener("click", function () {
		video.playbackRate *= 0.9;
		console.log("New speed is", video.playbackRate);
	});

	// Speed Up (proportional increase to match slow down)
	document.getElementById("faster").addEventListener("click", function () {
		video.playbackRate /= 0.9;
		console.log("New speed is", video.playbackRate);
	});

	// Skip Ahead
	document.getElementById("skip").addEventListener("click", function () {
		if (video.currentTime + 10 >= video.duration) {
			video.currentTime = 0;
		} else {
			video.currentTime += 10;
		}
		console.log("Current time is", video.currentTime);
	});

	// Mute/Unmute
	document.getElementById("mute").addEventListener("click", function () {
		video.muted = !video.muted;
		this.textContent = video.muted ? "Unmute" : "Mute";
		console.log("Muted:", video.muted);
	});

	// Volume Slider
	document.getElementById("slider").addEventListener("input", function () {
		video.volume = this.value / 100;
		document.getElementById("volume").textContent = video.volume * 100 + "%";
		console.log("Volume is", video.volume);
	});

	// Add vintage styling
	document.getElementById("vintage").addEventListener("click", function () {
		video.classList.add("oldSchool");
		console.log("Vintage style applied");
	});

	// Remove vintage styling
	document.getElementById("orig").addEventListener("click", function () {
		video.classList.remove("oldSchool");
		console.log("Original style restored");
	});
});
