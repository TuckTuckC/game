# Kangaroo Mahem
## Concept: 
    - The Player will be a kangaroo and will have to jump over logs rolling toward them.
    - There will also be eagles that come from above as the game goes on to make it harder in which the player must not jump for.
    - The player has 3 lives.
    - If the player fails to jump over a log, or jumps under an eagle, they lose 1 life.
    - The score is tracked by how many obstacles the player gets past.
## Wireframes:

## Technologies Used:
    - HTML
    - CSS 
    - Google Fonts
    - JavaScript
    - JQuery
    - BootStrap
## Approach: 
Explain your approach to develop the app/game
## Challenges: 
When the kangaroo got hit, it would lose around 60 lives. That was because I didn't set a "cooldown" for "lives -= 1" therefore it was taking away a life every 5 milliseconds, which in the game tick speed. so I set a variable called "shouldTakeHit" as a boolean, which was saying that it is okay to take damage at this time, and then set a timeout that made "shouldTakeHit" false for a certain amount of time.
Pausing the animations when the player took a hit.
## Additional information:
Add anything else you would like us to know 
## App Demo 
Link to GitHub project (i.e. - username.github.io)