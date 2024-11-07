function formatSeconds(total_sec) {
    var minutes = Math.floor(total_sec / 60);
    var seconds = Math.floor(total_sec % 60);
    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    return minutes + ':' + seconds;
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
if (audio) {
    audio.addEventListener('loadedmetadata', displayDuration);
    // Also, call displayDuration directly in case the metadata is already loaded
    if (audio.readyState >= 1) {
        displayDuration();
    }
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
        document.getElementById('audio-title').textContent = 'Hit play and learn on the go!';
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

if (audio) {
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
}

if (progressCircle) {
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
    }, { passive: true });
}

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

if (progressCircle) {
    progressCircle.addEventListener('dragstart', function (event) {
        event.preventDefault();
    });
}

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

const selectButton = document.querySelector('#selectedSpeed');
const selectOptions = document.querySelectorAll('.speedMenuItems div');
const selectElement = document.getElementById('speedOptionsHidden');

if (selectButton) {
    // Toggle dropdown visibility on button click
    selectButton.addEventListener('click', function () {
        this.classList.toggle('open');
    });
}

if (selectOptions) {
    // Update button text and playback rate when an option is selected
    selectOptions.forEach(option => {
        option.addEventListener('click', function () {
            selectButton.textContent = this.getAttribute('data-value') + '\u00D7'; // Unicode for &times
            audio.playbackRate = parseFloat(this.getAttribute('data-value'));
            selectElement.value = this.getAttribute('data-value'); // Update hidden select for form submission
            selectButton.classList.remove('open');
        });
    });
}

// Close the dropdown if the user clicks outside of it
document.addEventListener('click', function (e) {
    if (selectButton) {
        if (!selectButton.contains(e.target)) {
            selectButton.classList.remove('open');
        }
    }
});

function initializeFlatpickr(minDate, maxDate, defaultDate, enableDates) {
    const enabledDatesObjects = enableDates.map(date => new Date(date + "T00:00:00"));
    flatpickr("#selectedDate", {
        minDate: new Date(minDate + "T00:00:00"),
        maxDate: new Date(maxDate + "T00:00:00"),
        defaultDate: new Date(defaultDate + "T00:00:00"),
        enable: enabledDatesObjects,
        dateFormat: "l. F j, Y",
        onReady: function (selectedDates, dateStr, instance) {
            instance.input.value = instance.formatDate(new Date(defaultDate + "T00:00:00"), "l. F j, Y");
        },
        onChange: function (selectedDates, dateStr, instance) {
            const formattedDate = instance.formatDate(selectedDates[0], "Ymd");
            window.location.href = `https://ribbitribbit.co/index_${formattedDate}.html`;
        }
    });
}
initializeFlatpickr(calendar_stats.mindate, calendar_stats.maxdate, daily_data.date, calendar_stats.enabled)

function renderDailyStarter(date_str) {
    const starter = document.getElementById('daily-stats');
    starter.innerHTML = `Fresh Picks:
    <span class="highlightNumber" style="font-size: 28px;">${daily_data.stats.num_pick}</span>
    out of <span class="highlightNumber">${daily_data.stats.num_total}</span> AI papers`;
}

function renderTweets(date_str) {
    const container = document.getElementById('tweets-container');
    container.innerHTML = '';
    daily_data.tweets.forEach(tweet => {
        const tweetDiv = document.createElement('div');
        tweetDiv.className = 'tweet';

        let image_block = '';
        if (tweet["image-path"]) {
            image_block = `<div class="image-block"><img class="tweet-image" src="https://d2irtorupa9e8g.cloudfront.net/${tweet["image-path"]}" alt="Tweet Image"></div>`
        }
        tweetDiv.innerHTML = `
            <div class="tweet-content">
                <div class="tweet-header">
                    <span class="tweet-title">${tweet.title}</span>
                </div>
                <div class="institute-line">
                    <img class="arxiv-icon" src="assets/buttonArxiv.svg" alt="Arxiv link">
                    <a class="arxiv-id" href="${tweet.arxivLink}" target="_blank">arXiv ${tweet.arxivId}</a>
                </div>
                <div class="institute-line">
                    <img class="institute-icon" src="assets/buttonInstitute.svg" alt="Institute Icon">
                    <span class="institute-text">${tweet.institute}</span>
                </div>
                ${image_block}
                <div style=" height: 6px;"></div>
                <div class="primary-text-gray">
                    <a class="start-time-button"><img class="play-image" src="assets/buttonPlayFrom.svg"><span class="start-time-icon">${tweet.startTime}</span><span class="bold-dot">&middot;</span></a>${tweet.text}
                </div>
            </div>
        `;

        container.appendChild(tweetDiv);

        const startTimeIcon = tweetDiv.querySelector('.start-time-button');
        startTimeIcon.addEventListener('click', () => {
            let startSeconds = getSecondsFromTimeString(tweet.startTime);
            jumpToSeconds(startSeconds);
            if (audio.paused) {
                audio.play();
                playPauseImage.src = 'assets/buttonPause.svg';
            }
        });
    });
}

function populateForDate(date_str) {
    renderDailyStarter(date_str);
    renderTweets(date_str);
}

document.addEventListener('DOMContentLoaded', populateForDate(calendar_stats.defaultdate));