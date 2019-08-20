const bullets = [];

class Bullet {
    static rof = 0;

    constructor ({ x, y }) {
        this.y = y;
        this.velX = 0;
        this.velY = -5;
        this.width = 5;
        this.height = 15;
        this.x = x + player.width / 2 - this.width / 2;
    }

    render () {
        this.y += this.velY;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    kill () {
        delete this;
        bullets.splice(bullets.indexOf(this), 1);
    }

    collidedWithEnemy () {
        for (const enemy of enemies) {
            if ((this.y >= enemy.y && this.y <= enemy.y + enemy.height) &&
                (this.x >= enemy.x && this.x <= enemy.x + enemy.width)) {
                enemy.kill();
                this.kill();
            }
        }
    }


    static renderAll () {
        ctx.fillStyle = '#181818';
        for (const bullet of bullets) {
            if (bullet.y < -bullet.height) {
                bullet.kill();
            }
            bullet.collidedWithEnemy();
            bullet.render();
        }

        if (Bullet.rof > 0) {
            Bullet.rof--;
        }
    }

    static shoot (p, multiple) {
        if (multiple)
            return bullets.push(new Bullet(p));

        if (Bullet.rof > 0) return;
        Bullet.rof = player.shootDelay;
        bullets.push(new Bullet(p));
    }
}