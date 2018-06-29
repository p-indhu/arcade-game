# frontend-nanodegree-arcade-game

## Table of Contents

* [Instructions](#instructions)
* [Dependencies](#dependencies)
* [How to play](#how-to-play)
* [Contributing](#contributing)
* [About](#about)

## Instructions (How to run)

The project uses HTML, Object Oriented JavaScript and CSS styling to render a Frogger Game.
To get started, open `index.html`.

## Dependencies

Right now there are no external dependencies.

## How to play

### Understanding Game elements
* Player:  Can move left, right, up and down using arrow keys.
* Enemy bug: moves from left to right with varying speeds on stone blocks only.
* Score: Finishing the game before timer ends adds bonus points.
Collecting gems increase scores.
  * Blue gem - 10 points
  * Green gem - 20 points
  * Orange gem - 50 points
* Timer: Counts down from 20 in seconds.  On winning, every second spared gets converted
as bonus points (1 second = 5 points).
* Lives:  Each player has 3 lives by default.  On colliding with the bug, player loses a life.
After losing 3 lives, the game ends.

### Instructions to play
* Using arrow keys move the player.
* Avoid colliding with the enemy bugs.
* Collect gems and play faster to improve score.
* Reach the water blocks to win the game.  
* Colliding with the enemy bug 3 times before reaching the water block causes to lose the game.

## Contributing

This repository is developed for learning experience. Therefore, pull requests most likely will not accepted.

## About

This project was developed as a part of Grow with Google - Front-End Web Developer nano-degree offered by Udacity.
