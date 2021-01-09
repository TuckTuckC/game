# Kangaroo Mahem
## Concept: 
    - The Player will be a kangaroo and will have to jump over logs rolling toward them.
    - There will also be eagles that come from above as the game goes on to make it harder in which the player must not jump for.
    - The player has 3 lives.
    - If the player fails to jump over a log, or jumps under an eagle, they lose 1 life.
    - The score is tracked by how many obstacles the player gets past.
## Technologies Used:
    - HTML
    - CSS 
    - Google Fonts
    - JavaScript
    - JQuery
    - BootStrap
## Approach: 
The main thing that makse the game work is the 2d collision, everything in the game is based around that. so I have animations for both the kangaroo and the log, and if their positions overlap, there is a collision. If a collision is found, then the player loses a life. Also a few functions to start the game, and to give instructions. And the start and the end of the game controlls the animations of the log.
## Challenges: 
When the kangaroo got hit, it would lose around 60 lives. That was because I didn't set a "cooldown" for "lives -= 1" therefore it was taking away a life every 5 milliseconds, which in the game tick speed. so I set a variable called "shouldTakeHit" as a boolean, which was saying that it is okay to take damage at this time, and then set a timeout that made "shouldTakeHit" false for a certain amount of time.
## Additional information:
I wanted to make it to where when there was a collision, the animations for both tha kangaroo and the log froze for a split second so that the user would know that they got hit other than looking at the life counter. But I couldn't figure out a way to do it using the pause and play functions.
## App Demo 
https://tucktuckc.github.io/game/