class Tableau1 extends Phaser.Scene{


    preload(){
        for (let i=1;i<=10;i++){
            this.load.image('boy1-idle'+i , 'assets/Characters/boy/boy_style_1/PNG/idle/Layer-'+i+'.png')
        }
        for (let i=1;i<=10;i++){
            this.load.image('boy3-idle'+i , 'assets/Characters/boy/boy_style_3/PNG/idle/Layer-'+i+'.png')
        }
        for (let i=1;i<=10;i++){
            this.load.image('enemy1-idle'+i , 'assets/Characters/enemy 1/PNG/idle/Layer-'+i+'.png')
        }
        for (let i=1;i<=6;i++){
            this.load.image('enemy2-idle'+i , 'assets/Characters/enemy 2/PNG/idle/Layer-'+i+'.png')
        }
    }

    create(){
        this.initKeyboard()

        /**
         * animation bonhomme 1 quand y bouge pas
         */
        this.boy1Idle = this.add.sprite(-150, 0, 'boy1-idle').setOrigin(0,0);
        this.anims.create({
            key: 'boy1-idle',
            frames: this.getFrames('boy1-idle',10),
            frameRate: 10,
            repeat: -1
        });

        /**
         * animation bonhomme 3 quand y bouge pas
         */
        this.boy3Idle = this.add.sprite(500, 0, 'boy3-idle').setOrigin(0,0);
        this.anims.create({
            key: 'boy3-idle',
            frames: this.getFrames('boy3-idle',10),
            frameRate: 10,
            repeat: -1
        });

        /**
         * animation tronc sur pattes quand y bouge pas
         */
        this.enemy1Idle = this.add.sprite(50, -50, 'enemy1-idle').setOrigin(0,0);
        this.anims.create({
            key: 'enemy1-idle',
            frames: this.getFrames('enemy1-idle',10),
            frameRate: 10,
            repeat: -1
        });

        /**
         * animation sorte de mouche quand y bouge pas
         */
        this.enemy2Idle = this.add.sprite(380, 130, 'enemy2-idle').setOrigin(0,0);
        this.anims.create({
            key: 'enemy2-idle',
            frames: this.getFrames('enemy2-idle',6),
            frameRate: 10,
            repeat: -1
        });

        this.boy1Idle.play('boy1-idle')
        this.boy3Idle.play('boy3-idle')
        this.enemy1Idle.play('enemy1-idle')
        this.enemy2Idle.play('enemy2-idle')
    }

    /**
     * Renvoie un tableau d'images
     * @param prefix
     * @param length
     * @returns {*[]}
     */
    getFrames(prefix,length){
        let frames=[];
        for (let i=1;i<=length;i++){
            frames.push({key: prefix+i});
        }
        return frames;
    }


    initKeyboard(){

    }

    update(){

    }


}