// Enemies our player must avoid
class Enemy {
constructor(x, y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images

    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.speed = Math.floor(Math.random() * (8 - 4 + 1)) + 4;;
}
}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
  //  const randomspeed = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    if(this.x < 505)
        this.x = this.x  + this.speed + dt;
    else {
        this.x = -90;
        this.changeSpeed();
        this.changeRow();
      }
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Change the speed of the enemy randomly
Enemy.prototype.changeSpeed = function() {
    this.speed = Math.floor(Math.random() * (8 - 4 + 1)) + 4;
};

// Change the y-coordinate (row) of the enemy randomly
Enemy.prototype.changeRow = function() {
    this.y = (Math.floor(Math.random() * (3 - 1 + 1)) + 1) * 83;
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Enemy.prototype.getX = function() {
    return this.x;
};

Enemy.prototype.getY = function() {
  return this.y;
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Player {
constructor(x, y) {
    this.sprite = 'images/char-boy.png';
    this.x = x;
    this.y = y;
}
}

// Update the players's position, required method for game
Player.prototype.update = function(x, y) {
        this.x = (this.x + x);
        this.y = (this.y + y);
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the player on the screen, required method for game
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Depending on the arrow key pressed, find the value to add/subtract from the
// x and y coordinates
Player.prototype.handleInput = function(move) {
    let x = 0, y = 0;
    switch(move) {
        case 'left':
            if((this.x - 101) >= 0)
                x = -101;
            break;
        case 'right':
            if((this.x + 101) <= 404)
                x = 101;
            break;
        case 'down':
            if((this.y + 83) <= 440)
                y = 83;
            break;
        case 'up':
            if((this.y - 83) >= 0)
                y = -83;
            break;
    }
    this.update(x,y);
}

// Set the player to initial position
Player.prototype.die = function() {
    this.x = 202;
    this.y = 415;
}

Player.prototype.getX = function() {
    return this.x;
};

Player.prototype.getY = function() {
  return this.y;
};
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
let player = new Player(202, 415);
let enemy1 = new Enemy(0, 249);
let enemy2 = new Enemy(0, 83);
let enemy3 = new Enemy(0, 166);
let allEnemies = [enemy1, enemy2, enemy3];


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
