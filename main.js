const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload(`./sprites/StarPlatinumFinalSprite.png`);

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");

	gameEngine.addEntity(new JotaroKujo(gameEngine));

	gameEngine.init(ctx);

	gameEngine.start();
});
