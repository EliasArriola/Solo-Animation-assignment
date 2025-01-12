class JotaroKujo {
    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset(`./sprites/StarPlatinumFinalSprite.png`), 13, 0, 32.5, 94, 4, 0.35);
        this.x = 0;
        this.y = 0;
        this.speed = 48;
    };
    update() {
        this.x += this.speed*this.game.clockTick;
        if(this.x>1024) {
            this.x = 0;
        };

    };
    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y, 25, 25);
    };
};