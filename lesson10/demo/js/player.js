const keysPressed = {};

const player = {
    x: 0,
    y: 0,
    velX: 0,
    velY: 0,
    width: 50,
    height: 50,
    speed: 20,
    shootDelay: 1,
    action () {
        player.draw();

        if (keysPressed[ 32 ]) {
            for (let i = -5; i <= 5; i++) {
                // player.rof = 0;
                Bullet.shoot({
                    x: player.x + i * 15,
                    y: player.y
                }, true);
            }
        }

        if (player.x < 0)
            return player.x = 0;

        if (player.x + player.width > WIDTH)
            return player.x = WIDTH - player.width;

        if (player.y < 0)
            return player.y = 0;

        if (player.y + player.height > HEIGHT)
            return player.y = HEIGHT - player.height;

        if (keysPressed[ 68 ]) {
            // Right - D
            player.x += player.speed;
        }

        if (keysPressed[ 65 ]) {
            // Left - A
            player.x -= player.speed;
        }

        if (keysPressed[ 87 ]) {
            // Up - W
            player.y -= player.speed;
        }

        if (keysPressed[ 83 ]) {
            // Down - S
            player.y += player.speed;
        }
    },
    draw () {
        ctx.drawImage(images.player, player.x, player.y, player.width, player.height);
    }
}