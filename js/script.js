
player = document.getElementById("player");
log = document.getElementById("log");
endScreen = document.getElementById("end-screen");
helpScreen = document.getElementById("help-screen");
$score = $("#score");

lives = 3;
score = 0;
shouldTakeHit = true;
scoring = false;
SHOULD_TAKE_HIT_TIMER = 400;
GAME_TICK_SPEED = 5;
SCORE_TICK_SPEED = 15;
JUMP_COOLDOWN = 800;
PAUSED = 500;

// Jump function
document.addEventListener('keydown', e => {
    if (player.classList.contains("jumping")) {
        return;
    } else {
        if (e.code === 'Space') {
            player.classList.add("jumping");
            setTimeout(function(){
                player.classList.remove("jumping");
            }, JUMP_COOLDOWN);
        };
    };
});

// Collision
collition = setInterval(function() {
    playerTop = parseInt(window.getComputedStyle(player).getPropertyValue("top"));
    logLeft = parseInt(window.getComputedStyle(log).getPropertyValue("left"));
    if (logLeft < -15 && logLeft > -124 && playerTop > 392 && shouldTakeHit) {
        shouldTakeHit = false;
        lives -= 1;
        $('#lives').text(`Lives: ${lives}`);
        // End of Game
        if (lives <= 0) {
            endScreen.classList.add("visible");
            $("#end-score").text(`You got a score of: ${score}`);
            $('#score').text(`Score: ${score}`);
            score = 0;
            log.className = '';
            scoring = false;
        };
    } else if (!shouldTakeHit) {
        setTimeout(function() {
            shouldTakeHit = true;
        }, SHOULD_TAKE_HIT_TIMER);
    };
    if (score > 815) {
        log.classList.remove("rolling");
        log.classList.add("rolling2");
    };
}, GAME_TICK_SPEED);


// Start
$('button#start').on('click', function() {
    endScreen.classList.remove("visible");
    endScreen.classList.add("hidden");
    helpScreen.classList.remove("visible");
    helpScreen.classList.add("hidden");
    log.classList.add("rolling");
    lives = 3;
    score = 0;
    $('#lives').text(`Lives: ${lives}`);
    $('#score').text(`Score: ${score}`);
    scoring = true;
});

// Help
$('button#help').on('click', function() {
    if (helpScreen.classList.contains("hidden")) {
        helpScreen.classList.remove("hidden")
        helpScreen.classList.add("visible");
    }else if (helpScreen.classList.contains("visible")) {
        helpScreen.setAttribute("class", "hidden");
    };
});

keepScore = setInterval(function(){
    if (scoring === true) {
        score += 1;
        $('#score').text(`Score: ${score}`);
    };
}, SCORE_TICK_SPEED);