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

var peixinho;

function preload() {
    this.load.image('mar', 'assets/bg_azul-claro.png');
    this.load.image('logo', 'assets/logo-inteli_branco.png');
    this.load.image('peixe', 'assets/peixes/tartaruga.png');
    this.load.image('tubarão', 'assets/sharkRight.png');
}

function create() {
    this.add.image(400, 300, 'mar').setScale(2);
    this.add.image(600, 400, 'logo').setScale(0.5);
    tubarão = this.add.image(0, 650, 'tubarão').setScale(0.4);

    peixinho = this.add.image(400, 300, 'peixe');

    peixinho.setFlip(true, false);
}

function update() { 
    peixinho.x = this.input.x;
    peixinho.y = this.input.y;

    tubarão.x += 5;
    if (tubarão.x >= 1200){
        tubarão.x = 0;
    }
}
