const pigsContainer = document.querySelector(".pigs-container");
const searchInput = document.querySelector(".search-input");

// Inactivity search focus
const autoFocus = setTimeout(() => searchInput.focus(), 10000);

// Sound
const music = new Audio("./assets/sounds/music_loop_DP.mp3");

music.addEventListener("loadeddata", () => {
    // Click play/pause button
    pigsContainer.addEventListener("click", () => {
        clearTimeout(autoFocus);
        pigsContainer.classList.toggle("play");
        if (music.paused) {
            music.play();
        } else {
            music.pause();
            music.currentTime = 0;
        }
    });

    // Track end
    music.addEventListener("ended", function () {
        music.currentTime = 0;
        pigsContainer.classList.remove("play");
    });
});
