var config = {
    type: Phaser.AUTO,
    width: 570,
    height: 850,

    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);
var ratinho;
var parado = false;


function preload() {
    this.load.image('bg', 'assets/background.jpg');
    this.load.image('rato', 'assets/rato.png'); 
    this.load.image('splash', 'assets/splash.png');
}

function create() {

    this.add.image(285, 425, 'bg').setScale(1.0); 
    ratinho = this.add.image(500, 425, 'rato').setScale(0.3); 

    //Torna o rato interativo
    ratinho.setInteractive();

    //Adiciona um evento de clique no rato
    this.input.on('pointerdown', function(pointer) {
        if (ratinho.getBounds().contains(pointer.x, pointer.y)) // verifica se o clique ocorreu dentro da area de contato do rato
        {
            parado = true; //alterna entre parar e continuar

        //Cria efeito de fade-out
        this.tweens.add({
        targets: ratinho,
        alpha: 0,
        duration: 300,
        ease: 'Linear',
        onComplete: function(){
            ratinho.destroy();
            }
        });
        let splash = this.add.image(ratinho.x, ratinho.y, 'splash').setScale(0.5);
            splash.alpha = 0; // Começa invisível

            // Criamos um efeito de fade-in para o splash
            this.tweens.add({
                targets: splash,
                alpha: 1, // Torna visível
                duration: 300, // Tempo da animação (0.3s)
                ease: 'Linear',
                onComplete: () => {
                    // Após o fade-in, reduzimos a opacidade para 50%
                    this.tweens.add({
                        targets: splash,
                        alpha: 0.5, // Mantém opacidade em 50%
                        duration: 500, // Tempo da transição (0.5s)
                        ease: 'Linear'
                    });
                }
            });
    }
},this);
}

function update() { 

if (!parado){ //só move o rato se ele não estiver parado
    if (ratinho.x === 500){
        ratinho.setFlip(false,false);
        ratinho.ida = true;
    }
    if (ratinho.x > 70 && ratinho.ida === true){
        ratinho.x -= 5;
    }
    if (ratinho.x === 70){
        ratinho.setFlip(true,false);
        ratinho.ida = false;
    }
    if (ratinho.x < 500 && ratinho.ida === false){
        ratinho.x += 5;
    }
}
    }
