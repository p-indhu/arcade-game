// Enemies our player must avoid
class Enemy {
constructor(x, y) {
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.speed = Math.floor(Math.random() * (8 - 4 + 1)) + 4;
}
}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    if(this.x < 505) {
        this.x = this.x  + (this.speed * 55 * dt);
      }
    else {
        this.x = -90;
        this.changeSpeed();
        this.changeRow();
      }
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
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y - 15);
};

Enemy.prototype.getX = function() {
    return this.x;
};

Enemy.prototype.getY = function() {
    return this.y;
};

// Reset the enemy bug to start from the left of screen
Enemy.prototype.reset = function() {
    this.x = 0;
}

// Player class
class Player {
constructor(x, y) {
    this.sprite = 'images/char-boy.png';
    this.x = x;
    this.y = y;
    this.points = 0;
    this.life = 3;
}
}

// Update the players's position, required method for game
Player.prototype.update = function(x, y) {
        this.x = this.x + x;
        this.y = this.y + y;
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
    this.life = this.life - 1;
    return this.life;
}

Player.prototype.getX = function() {
    return this.x;
};

Player.prototype.getY = function() {
    return this.y;
};

// Set the image for player
Player.prototype.setSprite = function(sprite) {
    this.sprite = 'images/'+sprite+'.png';
}

// Reset the player to the initial position, setting points to 0 and remaining
// life to 3 when the game is reset (won or lost)
Player.prototype.reset = function() {
    this.x = 202;
    this.y = 415;
    this.points = 0;
    this.life = 3;
}

// Gem class to represent the gems to be collected
class Gem {
constructor(x, y, color) {
    this.sprite = 'images/gem-'+color+'.png';
    this.x = x;
    this.y = y;
    this.color = color;
}
}

// Draw the gem on the screen, required method for game
Gem.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x + 28, this.y + 32, 50, 85);
};

// Move the gem off screen when it is collected by the player
Gem.prototype.collected = function() {
    this.x = -100;
    this.y = -100;
}

Gem.prototype.getX = function() {
    return this.x;
};

Gem.prototype.getY = function() {
    return this.y;
};

Gem.prototype.getColor = function() {
    return this.color;
}

Gem.prototype.setX = function() {
    this.x = xValues[Math.floor(Math.random() * xValues.length)];
}

Gem.prototype.setY = function() {
    this.y = yValues[Math.floor(Math.random() * yValues.length)];
}

// Set a random position to the gems
Gem.prototype.reset = function() {
    this.setX();
    this.setY();
}

//initiating required player, enemy and gem objects
let player = new Player(202, 415);
let enemy1 = new Enemy(0, 249);
let enemy2 = new Enemy(0, 83);
let enemy3 = new Enemy(0, 166);
let allEnemies = [enemy1, enemy2, enemy3];
const xValues = [0,101,202,303,404];
const yValues = [83,166,249];
let gem1 = new Gem(xValues[Math.floor(Math.random() * xValues.length)], yValues[Math.floor(Math.random() * yValues.length)], 'blue');
let gem2 = new Gem(xValues[Math.floor(Math.random() * xValues.length)], yValues[Math.floor(Math.random() * yValues.length)], 'orange');
let gem3 = new Gem(xValues[Math.floor(Math.random() * xValues.length)], yValues[Math.floor(Math.random() * yValues.length)], 'green');
let allGems = [gem1, gem2, gem3];

// This listens for key presses and sends the keys to your
// Player.handleInput() method
document.addEventListener('keyup', function(e) {
    let allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    if(overlayOn === false)
        player.handleInput(allowedKeys[e.keyCode]);
});
