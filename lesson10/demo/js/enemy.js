const enemies = [];

class Enemy {
    constructor (x, y) {
        this.x = x;
        this.y = y;
        this.velX = Math.random() > 0.5 ? 1 : -1;
        this.velY = 0;
        this.width = 30;
        this.height = 25;
    }

    render () {
        this.x += this.velX;
        if (this.x < 10 || this.x > WIDTH - 10 - this.width) {
            this.velX = -this.velX;
            this.y += 30;
        }
        ctx.drawImage(images.invader, this.x, this.y, this.width, this.height);
    }

    kill () {
        delete this;
        enemies.splice(enemies.indexOf(this), 1);
    }

    static renderAll () {
        for (const enemy of enemies) {
            enemy.render();
        }
    }

    static spawn (x, y) {
        // Math.random() * 120 - 60 + WIDTH / 2, 40
        enemies.push(new Enemy(x, y));
    }
}