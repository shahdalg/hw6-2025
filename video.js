var video;

window.addEventListener("load", function () {
	console.log("Good job opening the window");

	video = document.getElementById("player1");
	video.autoplay = false;
	video.loop = false;

	updateVolumeDisplay();

	// Play
	document.getElementById("play").addEventListener("click", function () {
		video.play().then(() => {
			console.log("Play Video");
			updateVolumeDisplay();
		}).catch((e) => {
			console.log("Autoplay blocked:", e);
		});
	});

	// Pause
	document.getElementById("pause").addEventListener("click", function () {
		video.pause();
		console.log("Pause Video");
	});

	// Slow Down (10%)
	document.getElementById("slower").addEventListener("click", function () {
		video.playbackRate *= 0.9;
		console.log("New speed is", video.playbackRate.toFixed(5));
	});

	// Speed Up (inverse of slow down)
	document.getElementById("faster").addEventListener("click", function () {
		video.playbackRate /= 0.9;
		console.log("New speed is", video.playbackRate.toFixed(5));
	});

	// Skip Ahead
	document.getElementById("skip").addEventListener("click", function () {
		video.currentTime += 10;
		if (video.currentTime >= video.duration) {
			video.currentTime = 0;
			console.log("Restarting video");
		}
		console.log("Current time is", video.currentTime);
	});

	// Mute / Unmute
	document.getElementById("mute").addEventListener("click", function () {
		video.muted = !video.muted;
		this.textContent = video.muted ? "Unmute" : "Mute";
		console.log("Muted:", video.muted);
	});

	// Volume Slider
	document.getElementById("slider").addEventListener("input", function () {
		video.volume = this.value / 100;
		updateVolumeDisplay();
		console.log("Volume is", video.volume);
	});

	// Old School Style
	document.getElementById("vintage").addEventListener("click", function () {
		video.classList.add("oldSchool");
		console.log("Vintage style applied");
	});

	// Original Style
	document.getElementById("orig").addEventListener("click", function () {
		video.classList.remove("oldSchool");
		console.log("Original style restored");
	});
});

function updateVolumeDisplay() {
	document.getElementById("volume").textContent = Math.round(video.volume * 100) + "%";
}
