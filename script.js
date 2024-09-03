function formatSeconds(total_sec) {
    var minutes = Math.floor(total_sec / 60);
    var seconds = Math.floor(total_sec % 60);
    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    return minutes + ':' + seconds;
}

// The Dropdown Menu 
function ToggleDropDown() {
    document.getElementById("myDropdown").classList.toggle("show");
}
// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('#menuButtonId')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

var audio = document.getElementById('audioPlayer');
var playPauseImage = document.getElementById('playPauseImage');
var progressBar = document.getElementById('progressBar');
var progressCircle = document.getElementById('progressCircle');
var progressTime = document.getElementById('progressTime');
var isDragging = false;

function displayDuration() {
    var duration = audio.duration;
    if (!isNaN(duration) && duration > 0) {
        document.getElementById('audioDuration').textContent = formatSeconds(duration);
    }
}
// Attach event listener for when metadata is loaded
audio.addEventListener('loadedmetadata', displayDuration);
// Also, call displayDuration directly in case the metadata is already loaded
if (audio.readyState >= 1) {
    displayDuration();
}

function getSecondsFromTimeString(timeString) {
    const parts = timeString.split(':');

    tweetTime = (parseInt(parts[0]) * 60 + parseInt(parts[1]))
    if (parts.length > 2) {
        tweetTime = tweetTime * 60 + parseInt(parts[2]) // convert MM:SS to seconds
    }
    return tweetTime;
}

function getStartSeconds(tweet) {
    const timeString = tweet.querySelector('.start-time-icon').textContent;
    return getSecondsFromTimeString(timeString);
}

function getCurrentTweetAndIndex() {
    const tweets = document.querySelectorAll('.tweet');
    const currentTime = audio.currentTime;

    let targetTweet = null;
    let targetTweetIndex = null;
    let maxStartTime = -1;

    tweets.forEach((tweet, index) => {
        tweetTime = getStartSeconds(tweet);
        if (tweetTime <= currentTime && tweetTime > maxStartTime) {
            maxStartTime = tweetTime;
            targetTweet = tweet;
            targetTweetIndex = index;
        }
    });
    return [targetTweet, targetTweetIndex];
}

function getAdjacentTweetAndIndex(next) {
    const tweets = document.querySelectorAll('.tweet');
    if (tweets.length == 0) {
        return [null, null];
    }
    [currentTweet, currentTweetIndex] = getCurrentTweetAndIndex();
    if (next) {
        if (currentTweetIndex == null) {
            return [tweets[0], 0];
        }
        if (currentTweetIndex == tweets.length - 1) {
            return [null, null];
        }
        return [tweets[currentTweetIndex + 1], currentTweetIndex + 1];
    } else {
        if (currentTweetIndex == null || currentTweetIndex == 0) {
            return [null, null];
        }
        return [tweets[currentTweetIndex - 1], currentTweetIndex - 1];
    }
}

function scrollToCurrentTweet() {
    const [targetTweet, _] = getCurrentTweetAndIndex();
    if (targetTweet) {
        targetTweet.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
        document.getElementById('topblock').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function updateProgressTime(currentTime) {
    progressTime.textContent = formatSeconds(audio.currentTime);
}

function updateAudioTitle() {
    const [targetTweet, targetTweetIndex] = getCurrentTweetAndIndex();
    if (targetTweet) {
        const title = targetTweet.querySelector('.tweet-title').textContent;
        const institutes = targetTweet.querySelector('.institute-text').textContent;
        document.getElementById('audio-title').textContent = title;
        document.getElementById('audio-institutes').textContent = institutes;
    } else {
        document.getElementById('audio-title').textContent = 'Listen and learn ^.^';
        document.getElementById('audio-institutes').textContent = '';
    }
}

function disableControllerButton(buttonId, undo) {
    var button = document.querySelector('#' + buttonId + ' .controllerButton');
    var mask = document.querySelector('#' + buttonId + ' .footerButtonMask');

    if (!undo) {
        button.disabled = true;
        mask.style.display = 'block';
    } else {
        button.disabled = false;
        mask.style.display = 'none';
    }
}

function updateProgressButtonStatus() {
    var enableLast = false;
    var enableNext = false;
    const tweets = document.querySelectorAll('.tweet');
    if (tweets.length > 0) {
        [_, currentTweetIndex] = getCurrentTweetAndIndex();
        if (currentTweetIndex != null && currentTweetIndex > 0) {
            enableLast = true;
        }
        if (currentTweetIndex == null || currentTweetIndex < tweets.length - 1) {
            enableNext = true;
        }
    }
    disableControllerButton('playLastButton', undo = enableLast);
    disableControllerButton('playNextButton', undo = enableNext);
}

function updateWithProgress() {
    updateProgressTime();
    updateProgressButtonStatus();
    updateAudioTitle();
}

function togglePlayPause() {
    if (audio.paused) {
        audio.play();
        playPauseImage.src = 'assets/buttonPause.svg';
    } else {
        audio.pause();
        playPauseImage.src = 'assets/buttonPlay.svg';
    }
}

audio.addEventListener('timeupdate', function () {
    if (!isDragging) {
        var progress = (audio.currentTime / audio.duration) * 100;
        progressBar.style.width = progress + '%';
        progressCircle.style.left = progress + '%'; // Corrected reference
        updateWithProgress();
    }
});

audio.addEventListener('ended', function () {
    playPauseImage.src = 'assets/buttonPlay.svg';
    progressBar.style.width = '0%';
    progressCircle.style.left = '0%';
    audio.currentTime = 0;
    updateWithProgress();
});

// Mouse events
progressCircle.addEventListener('mousedown', function (event) {
    isDragging = true;
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
});

// Touch events
progressCircle.addEventListener('touchstart', function (event) {
    isDragging = true;
    document.addEventListener('touchmove', onTouchMove);
    document.addEventListener('touchend', onTouchEnd);
});

function onMouseMove(event) {
    seek(event.clientX);
}

function onTouchMove(event) {
    var touch = event.touches[0];
    seek(touch.clientX);
}

function onMouseUp() {
    isDragging = false;
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
}

function onTouchEnd() {
    isDragging = false;
    document.removeEventListener('touchmove', onTouchMove);
    document.removeEventListener('touchend', onTouchEnd);
}

function onMouseUp() {
    isDragging = false;
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
}

progressCircle.addEventListener('dragstart', function (event) {
    event.preventDefault();
});

function jumpToSeconds(seconds) {
    audio.currentTime = seconds;
    var progress = (audio.currentTime / audio.duration) * 100;
    progressBar.style.width = progress + '%';
    progressCircle.style.left = progress + '%'; // Ensure this reference is consistent
    updateWithProgress();
    scrollToCurrentTweet();
}

function seek(event) {
    var containerRect = progressContainer.getBoundingClientRect();
    var newTime = ((event.clientX - containerRect.left) / containerRect.width) * audio.duration;
    jumpToSeconds(newTime);
}

function playAdjacentTweet(next) {
    const [adjacentTweet, _] = getAdjacentTweetAndIndex(next);
    if (adjacentTweet) {
        const startTime = getStartSeconds(adjacentTweet);
        jumpToSeconds(startTime);
    }
}

// Function to open the privacy modal
function openPopup(name) {
    document.getElementById(name).style.display = "flex";
}

// Function to close the privacy modal
function closePopup(name) {
    document.getElementById(name).style.display = "none";
}

const selectButton = document.querySelector('#selectedSpeed');
const selectOptions = document.querySelectorAll('.speedMenuItems div');
const selectElement = document.getElementById('speedOptionsHidden');

const timeTags = document.querySelectorAll('.start-time-icon');
// Loop through each element and add a click event listener
timeTags.forEach(function (timeTag) {
    timeTag.addEventListener('click', function () {
        startSeconds = getSecondsFromTimeString(timeTag.textContent);
        jumpToSeconds(startSeconds);
        if (audio.paused) {
            audio.play();
            playPauseImage.src = 'assets/buttonPause.svg';
        }
    });
});

// Toggle dropdown visibility on button click
selectButton.addEventListener('click', function () {
    this.classList.toggle('open');
});

// Update button text and playback rate when an option is selected
selectOptions.forEach(option => {
    option.addEventListener('click', function () {
        selectButton.textContent = this.getAttribute('data-value') + '\u00D7'; // Unicode for &times
        audio.playbackRate = parseFloat(this.getAttribute('data-value'));
        selectElement.value = this.getAttribute('data-value'); // Update hidden select for form submission
        selectButton.classList.remove('open');
    });
});

// Close the dropdown if the user clicks outside of it
document.addEventListener('click', function (e) {
    if (!selectButton.contains(e.target)) {
        selectButton.classList.remove('open');
    }
});