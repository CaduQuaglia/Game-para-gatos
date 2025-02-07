var config = {
    type: Phaser.AUTO,
    width: 1200,
    height: 800,
    
    scene: {
        preload: preload,
        create: create,
        update: update 
    }
};

var game = new Phaser.Game(config);

function preload() {
    this.load.image('mar', 'assets/bg_azul-claro.png');
    this.load.image('tubarao', 'assets/shark.png');
    this.load.image('splash', 'assets/splash.png');
}

function create() {
    this.add.image(400, 300, 'mar').setScale(2);
    tubarao = this.add.image(0, 700, 'tubarao').setScale(0.4).setInteractive();

    tubarao.once('pointerdown', destroyTubarao);
}

function update() { 
    tubarao.x += 6;
    tubarao.y -= 1;

    if (tubarao.x >= (1200 + tubarao.width/2*0.4)){ // Confere se o tubarao saiu da tela considerando o tamanho dele
        tubarao.x = 0 - tubarao.width/2*0.4; // Posiciona o tubarao fora da tela considerando o tamanho dele e a escala
    }

    if (tubarao.y <= (0 - tubarao.height/2*0.4)){
        tubarao.y = 800 + tubarao.height/2*0.4;
    }
}

function destroyTubarao() {
    tubarao.destroy();
    // Adicionar splash
}
