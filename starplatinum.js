class StarPlatinum {
    
    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset(`./sprites/justStarPlatinum.png`), 1, 0, 94, 94, 7, 0.35);
        this.x = 94;
        this.y = 0;
        this.speed = 48;
    }
    update() {
        this.x += this.speed*this.game.clockTick;
        if(this.x>1024) {
            this.x = 0;
        };
    }
    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick*6, ctx, this.x, this.y, 25, 25);
    }
}