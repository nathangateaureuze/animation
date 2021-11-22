class Tableau1 extends Phaser.Scene{


    preload(){
        for (let i=1;i<=10;i++){
            this.load.image('boy-idle'+i , 'assets/Characters/boy/boy_style_1/PNG/idle/Layer-'+i+'.png')
        }
        for (let i=1;i<=10;i++){
            this.load.image('boy-idle-cligne'+i , 'assets/Characters/boy/boy_style_1/PNG/idle2/Layer-'+i+'.png')
        }
    }

    create(){
        this.initKeyboard()
        /**
         * animation quand y bouge pas
         */
        this.boyIdle = this.add.sprite(0, 0, 'boy-idle').setOrigin(0,0);
        this.anims.create({
            key: 'boy-idle',
            frames: this.getFrames('boy-idle',10),
            frameRate: 12,
            repeat: -1
        });

        /**
         * animation quand y bouge pas  et il cligne des yeux
         */
        this.boyIdleCligne = this.add.sprite(100, 0, 'boy-idle-cligne').setOrigin(0,0);
        this.anims.create({
            key: 'boy-idle-cligne',
            frames: this.getFrames('boy-idle-cligne',10),
            frameRate: 12,
            repeat: -1
        });


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
        this.input.keyboard.on('keydown', function(kevent)
        {
            switch (kevent.keyCode)
            {
                case !Phaser.Input.Keyboard.KeyCodes:
                    this.boyIdle.play('boy-idle-cligne')
                    this.boyIdleCligne.play('boy-idle')
                    break;

            }
        });

    }

    update(){

    }


}
