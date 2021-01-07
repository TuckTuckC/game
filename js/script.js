
player = document.getElementById("player")
log = document.getElementById("log")
endScreen = document.getElementById("end-screen")
$score = $("#score")

lives = 3
score = 0
shouldTakeHit = true;
shouldTakeScore = true;
SHOULD_TAKE_HIT_TIMER = 400
SHOULD_TAKE_SCORE_TIMER = 800
GAME_TICK_SPEED = 5
JUMP_COOLDOWN = 800
PAUSED = 500

// Jump function
document.addEventListener('keydown', e => {
    if (player.classList.contains("jumping")) {
        return;
    } else {
        if (e.code === 'Space') {
            player.setAttribute("class", "jumping");
            setTimeout(function(){
                player.removeAttribute("class", "jumping")
            }, JUMP_COOLDOWN);
        }
    }
})

// Collision
collition = setInterval(function() {
    playerTop = parseInt(window.getComputedStyle(player).getPropertyValue("top"));
    logLeft = parseInt(window.getComputedStyle(log).getPropertyValue("left"));
    if (logLeft < -15 && logLeft > -124 && playerTop > 392 && shouldTakeHit) {
        shouldTakeHit = false
        lives -= 1
        score -= 1
        $('#lives').text(`Lives: ${lives}`)
        // End
        if (lives <= 0) {
            endScreen.style.visibility = "visible"
            $("#end-score").text(`You got a score of: ${score}`)
            $('#score').text(`Score: ${score}`)
            log.removeAttribute("class")
        }
    } else if (!shouldTakeHit) {
        setTimeout(function() {
            shouldTakeHit = true
        }, SHOULD_TAKE_HIT_TIMER)
    }
    if (logLeft < -120) {
        shouldTakeScore = false
        score += 1
        $('#score').text(`Score: ${score}`)
    } else if(!shouldTakeScore) {
        setTimeout(function() {
            shouldTakeScore = true
        }, SHOULD_TAKE_SCORE_TIMER)
    }
}, GAME_TICK_SPEED)

// Start
$('button#start').on('click', function() {
    endScreen.style.visibility = "hidden"
    log.setAttribute("class", "rolling")
    lives = 3
    score = 0
    $('#lives').text(`Lives: ${lives}`)
    $('#score').text(`Score: ${score}`)
})
