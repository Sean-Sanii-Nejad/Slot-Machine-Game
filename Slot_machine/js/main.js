//Dummy JSON responses
let data = [

    {
        "response": {
            "results": {
                "win": 0,
                "symbolIDs": [2, 5, 2, 1]
            }
        }
    },

    {
        "response": {
            "results": {
                "win": 8,
                "symbolIDs": [5, 5, 5, 1]
            }
        }
    },

    {
        "response": {
            "results": {
                "win": 0,
                "symbolIDs": [0, 3, 1, 4]
            }
        }
    },

    {
        "response": {
            "results": {
                "win": 0,
                "symbolIDs": [5, 4, 1, 1]
            }
        }
    },

    {
        "response": {
            "results": {
                "win": 2,
                "symbolIDs": [1, 1, 5, 3]
            }
        }
    },

    {
        "response": {
            "results": {
                "win": 4,
                "symbolIDs": [2, 2, 2, 3]
            }
        }
    },

    {
        "response": {
            "results": {
                "win": 4,
                "symbolIDs": [5, 5, 2, 2]
            }
        }
    },

    {
        "response": {
            "results": {
                "win": 3,
                "symbolIDs": [2, 2, 3, 5]
            }
        }
    },

    {
        "response": {
            "results": {
                "win": 0,
                "symbolIDs": [4, 5, 3, 5]
            }
        }
    },

    {
        "response": {
            "results": {
                "win": 8,
                "symbolIDs": [5, 5, 5, 3]
            }
        }
    },

    {
        "response": {
            "results": {
                "win": 9,
                "symbolIDs": [3, 3, 3, 3]
            }
        }
    },

    {
        "response": {
            "results": {
                "win": 6,
                "symbolIDs": [4, 4, 4, 5]
            }
        }
    },

    {
        "response": {
            "results": {
                "win": 1,
                "symbolIDs": [0, 0, 3, 5]
            }
        }
    },

    {
        "response": {
            "results": {
                "win": 5,
                "symbolIDs": [1, 1, 1, 2]
            }
        }
    },

    {
        "response": {
            "results": {
                "win": 0,
                "symbolIDs": [2, 5, 2, 2]
            }
        }
    },

    {
        "response": {
            "results": {
                "win": 5,
                "symbolIDs": [2, 2, 2, 5]
            }
        }
    },

    {
        "response": {
            "results": {
                "win": 0,
                "symbolIDs": [4, 3, 0, 5]
            }
        }
    },

    {
        "response": {
            "results": {
                "win": 6,
                "symbolIDs": [3, 3, 3, 0]
            }
        }
    },

    {
        "response": {
            "results": {
                "win": 8,
                "symbolIDs": [2, 2, 2, 2]
            }
        }
    },

    {
        "response": {
            "results": {
                "win": 0,
                "symbolIDs": [0, 1, 5, 4]
            }
        }
    },
]

// simple application configuration
let config  = {width: 1920, height: 1080};
let app

// wait for DOM before creating application
window.addEventListener('load', function() {
    //Create a Pixi Application
    app = new PIXI.Application(config);

    //Add the canvas that Pixi automatically created for you to the HTML document
    document.body.appendChild(app.view);
    app.stage.scale.set(1);
    
    let player_balance = 200;
    let stake_amount = 10;

    //Creating objects
    const background_texture = PIXI.Sprite.from('assets/background_gambling.png');
    const spin_button = PIXI.Sprite.from('assets/spin.png');
    const arrow_up_button = PIXI.Sprite.from('assets/arrow_up.png');
    const arrow_down_button = PIXI.Sprite.from('assets/arrow_down.png');
    const balance_text = new PIXI.Text('Current Balance');
    const stake_text = new PIXI.Text('Stake Amount');
    const graphics = new PIXI.Graphics();

    var player_balance_text = new PIXI.Text(player_balance);
    var player_stake_text = new PIXI.Text(stake_amount);
    var win_lose_text = new PIXI.Text('');
    var speech_text = new PIXI.Text('Jackpot!');

    var speech_bubble = PIXI.Sprite.from('assets/speech_bubble.png');
    var linux_penguin = PIXI.Sprite.from('assets/linux.png');
    var linux_penguin_1 = PIXI.Sprite.from('assets/linux_1.png');


    app.loader
        .add('fruit0', 'assets/symbols/symbol_00.json') 
        .add('fruit1', 'assets/symbols/symbol_01.json') 
        .add('fruit2', 'assets/symbols/symbol_02.json')
        .add('fruit3', 'assets/symbols/symbol_03.json')
        .add('fruit4', 'assets/symbols/symbol_04.json')
        .add('fruit5', 'assets/symbols/symbol_05.json')
        .load(onAssetsLoaded);

    function onAssetsLoaded(loader, res) { 
        //Creating Fruits from spine data
        var symbolCage = new PIXI.Container();
        symbol0 = new PIXI.spine.Spine(res.fruit0.spineData);
        symbol1 = new PIXI.spine.Spine(res.fruit1.spineData);
        symbol2 = new PIXI.spine.Spine(res.fruit2.spineData);
        symbol3 = new PIXI.spine.Spine(res.fruit3.spineData);
        symbol4 = new PIXI.spine.Spine(res.fruit4.spineData);
        symbol5 = new PIXI.spine.Spine(res.fruit5.spineData);

        symbol0_1 = new PIXI.spine.Spine(res.fruit0.spineData);
        symbol1_1 = new PIXI.spine.Spine(res.fruit1.spineData);
        symbol2_1 = new PIXI.spine.Spine(res.fruit2.spineData);
        symbol3_1 = new PIXI.spine.Spine(res.fruit3.spineData);
        symbol4_1 = new PIXI.spine.Spine(res.fruit4.spineData);
        symbol5_1 = new PIXI.spine.Spine(res.fruit5.spineData);

        symbol0_2 = new PIXI.spine.Spine(res.fruit0.spineData);
        symbol1_2 = new PIXI.spine.Spine(res.fruit1.spineData);
        symbol2_2 = new PIXI.spine.Spine(res.fruit2.spineData);
        symbol3_2 = new PIXI.spine.Spine(res.fruit3.spineData);
        symbol4_2 = new PIXI.spine.Spine(res.fruit4.spineData);
        symbol5_2 = new PIXI.spine.Spine(res.fruit5.spineData);

        symbol0_3 = new PIXI.spine.Spine(res.fruit0.spineData);
        symbol1_3 = new PIXI.spine.Spine(res.fruit1.spineData);
        symbol2_3 = new PIXI.spine.Spine(res.fruit2.spineData);
        symbol3_3 = new PIXI.spine.Spine(res.fruit3.spineData);
        symbol4_3 = new PIXI.spine.Spine(res.fruit4.spineData);
        symbol5_3 = new PIXI.spine.Spine(res.fruit5.spineData);

        //Positioning Fruits
        symbol0.position.set(600, 400);
        symbol1.position.set(600, 400);
        symbol2.position.set(600, 400);
        symbol3.position.set(600, 400);
        symbol4.position.set(600, 400);
        symbol5.position.set(600, 400);

        symbol0_1.position.set(820, 400);
        symbol1_1.position.set(820, 400);
        symbol2_1.position.set(820, 400);
        symbol3_1.position.set(820, 400);
        symbol4_1.position.set(820, 400);
        symbol5_1.position.set(820, 400);

        symbol0_2.position.set(1080, 400);
        symbol1_2.position.set(1080, 400);
        symbol2_2.position.set(1080, 400);
        symbol3_2.position.set(1080, 400);
        symbol4_2.position.set(1080, 400);
        symbol5_2.position.set(1080, 400);

        symbol0_3.position.set(1300, 400);
        symbol1_3.position.set(1300, 400);
        symbol2_3.position.set(1300, 400);
        symbol3_3.position.set(1300, 400);
        symbol4_3.position.set(1300, 400);
        symbol5_3.position.set(1300, 400);

        symbol0.visible = true;
        symbol1.visible = false;
        symbol2.visible = false;
        symbol3.visible = false;
        symbol4.visible = false;
        symbol5.visible = false;   

        symbol0_1.visible = false;
        symbol1_1.visible = false;
        symbol2_1.visible = false;
        symbol3_1.visible = true;
        symbol4_1.visible = false;
        symbol5_1.visible = false;   

        symbol0_2.visible = false;
        symbol1_2.visible = true;
        symbol2_2.visible = false;
        symbol3_2.visible = false;
        symbol4_2.visible = false;
        symbol5_2.visible = false;   

        symbol0_3.visible = false;
        symbol1_3.visible = false;
        symbol2_3.visible = false;
        symbol3_3.visible = false;
        symbol4_3.visible = false;
        symbol5_3.visible = true;   

        symbolCage.addChild(symbol0, symbol1, symbol2, symbol3, symbol4, symbol5,
                                symbol0_1, symbol1_1, symbol2_1, symbol3_1, symbol4_1, symbol5_1,
                                    symbol0_2, symbol1_2, symbol2_2, symbol3_2, symbol4_2, symbol5_2,
                                        symbol0_3, symbol1_3, symbol2_3, symbol3_3, symbol4_3, symbol5_3);
        
        app.stage.addChild(symbolCage);
    }

    //Player's balance display
    player_balance_text.x = 1270;
    player_balance_text.y = 845;
    player_balance_text.style.fill = 0x00FF00;
    player_balance_text.style.fontSize = 80;

    //Player's stake display
    player_stake_text.x = 1645;
    player_stake_text.y = 845;
    player_stake_text.style.fill = 0xFF0000;
    player_stake_text.style.fontSize = 80;

    //Spin Sprite attributes
    spin_button.tint = 0xDDDDDD;
    spin_button.width = 300;
    spin_button.height = 300;
    spin_button.x = (app.screen.width / 2)-150;
    spin_button.y = 700;
    spin_button.interactive = true;
    spin_button.buttonMode = true;
    spin_button.on('pointerdown', (event) => onPointerDown(spin_button));
    spin_button.on('pointerover', (event) => onPointerOver(spin_button));
    spin_button.on('pointerout', (event) => onPointerOut(spin_button));

    //Slot Machine Box
    graphics.lineStyle(3, 0xFEEB77, 1);
    graphics.beginFill(0x142638);
    graphics.drawRect(300, 300, 1320, 200);
    graphics.endFill();

    //Current Balance box
    graphics.lineStyle(3, 0xFEEB77, 1);
    graphics.beginFill(0x103c71);
    graphics.drawRect(1550, 800, 275, 150);
    graphics.endFill();

    //Stake box
    graphics.lineStyle(3, 0xFEEB77, 1);
    graphics.beginFill(0x103c71);
    graphics.drawRect(1200, 800, 275, 150);
    graphics.endFill();

    //Arrow Borders
    graphics.lineStyle(3, 0xFEEB77, 1);
    graphics.drawCircle(650, 870, 80);
    graphics.endFill();

    //Arrow Borders
    graphics.lineStyle(3, 0xFEEB77, 1);
    graphics.drawCircle(450, 870, 80);
    graphics.endFill();

    //Player's balance title box
    balance_text.x = 1235;
    balance_text.y = 805;
    balance_text.style.fill = 0xFFFFFF;

    //Player's stake title box
    stake_text.x = 1600;
    stake_text.y = 805;
    stake_text.style.fill = 0xFFFFFF;

    //Win/Lose Text Attributes
    win_lose_text.style.fill = 0x0096FF;
    win_lose_text.style.fontSize = 100;
    win_lose_text.x = 680;
    win_lose_text.y = 100;
    win_lose_text.style.fontWeight = 'bold';  

    //Penguin Attributes
    linux_penguin.width = 150;
    linux_penguin.height = 150;
    linux_penguin.x = 50;
    linux_penguin.y = 80;

    //Penguin blink Attributes
    linux_penguin_1.width = 150;
    linux_penguin_1.height = 150;
    linux_penguin_1.x = 50;
    linux_penguin_1.y = 80;
    linux_penguin_1.visible = false;

    //Speech bubble Attributes
    speech_bubble.width = 300;
    speech_bubble.height = 200;
    speech_bubble.x = 160;
    speech_bubble.y = -20;
    speech_bubble.visible = false;

    //Speech text Attributes
    speech_text.x = 230;
    speech_text.y = 50;
    speech_text.style.fill = 0x103c71;
    speech_text.style.fontSize = 40;
    speech_text.visible = false;

    //Arrow Up Arributes
    arrow_up_button.tint = 0xDDDDDD;
    arrow_up_button.width = 200;
    arrow_up_button.height = 200;
    arrow_up_button.x = 550;
    arrow_up_button.y = 770;
    arrow_up_button.interactive = true;
    arrow_up_button.buttonMode = true;
    arrow_up_button.on('pointerdown', (event) => onPointerDown(arrow_up_button));
    arrow_up_button.on('pointerover', (event) => onPointerOver(arrow_up_button));
    arrow_up_button.on('pointerout', (event) => onPointerOut(arrow_up_button));

    //Arrow down Arributes
    arrow_down_button.tint = 0xDDDDDD;
    arrow_down_button.width = 200;
    arrow_down_button.height = 200;
    arrow_down_button.x = 350;
    arrow_down_button.y = 770;
    arrow_down_button.interactive = true;
    arrow_down_button.buttonMode = true;
    arrow_down_button.on('pointerdown', (event) => onPointerDown(arrow_down_button));
    arrow_down_button.on('pointerover', (event) => onPointerOver(arrow_down_button));
    arrow_down_button.on('pointerout', (event) => onPointerOut(arrow_down_button));
    
    app.stage.addChild(background_texture, win_lose_text, spin_button, arrow_down_button, arrow_up_button, 
        graphics, balance_text, stake_text, player_balance_text, player_stake_text, linux_penguin, linux_penguin_1, speech_bubble, speech_text);

    //Deducts Stake from Player's
    function onPointerDown(object) {
        if(object == spin_button){
            speech_bubble.visible = false;
            speech_text.visible = false;
            linux_penguin.visible = true;
            linux_penguin_1.visible = false;
            //Check if stake_amount is greater than 0, otherwise do not play
            if(stake_amount == 0){return;}
            //Check if player's balance does not go under 0, update balance when play
            if(player_balance - stake_amount < 0){return;}        
            player_balance = player_balance - stake_amount;
            player_balance_text.text = player_balance;
            randomElement = data[Math.floor(Math.random() * data.length)];
            
            updateSymbolCage(randomElement.response.results.symbolIDs);
            console.log(randomElement.response.results.win);
            //Win and Loss conditions with pay out
            if(randomElement.response.results.win == 0){          
                win_lose_text.text = 'You Lose!'     
            }
            if(randomElement.response.results.win == 1){
                player_balance = player_balance + stake_amount;
                player_balance_text.text = player_balance;
                win_lose_text.text = 'You Win!' + ' £' + stake_amount; 
            }
            if(randomElement.response.results.win == 2){
                player_balance = player_balance + stake_amount*1;
                player_balance_text.text = player_balance;
                win_lose_text.text = 'You Win!' + ' £' + stake_amount*1; 
            }
            if(randomElement.response.results.win == 3){
                player_balance = player_balance + stake_amount*2;
                player_balance_text.text = player_balance;
                win_lose_text.text = 'You Win!' + ' £' + stake_amount*2; 
            }
            if(randomElement.response.results.win == 4 ){
                player_balance = player_balance + stake_amount*3;
                player_balance_text.text = player_balance;
                win_lose_text.text = 'You Win!' + ' £' + stake_amount*3; 
            }
            if(randomElement.response.results.win == 5){
                player_balance = player_balance + stake_amount*4;
                player_balance_text.text = player_balance;
                win_lose_text.text = 'You Win!' + ' £' + stake_amount*4; 
            }
            if(randomElement.response.results.win == 6){
                player_balance = player_balance + stake_amount*5;
                player_balance_text.text = player_balance;
                win_lose_text.text = 'You Win!' + ' £' + stake_amount*5; 
            }
            if(randomElement.response.results.win == 7){
                player_balance = player_balance + stake_amount*6;
                player_balance_text.text = player_balance;
                win_lose_text.text = 'You Win!' + ' £' + stake_amount*6; 
            }
            if(randomElement.response.results.win == 8){
                player_balance = player_balance + stake_amount*7;
                player_balance_text.text = player_balance;
                win_lose_text.text = 'You Win!' + ' £' + stake_amount*7; 
            }
            if(randomElement.response.results.win == 9){
                speech_bubble.visible = true;
                speech_text.visible = true;
                linux_penguin.visible = false;
                linux_penguin_1.visible = true;
                player_balance = player_balance + stake_amount*8;
                player_balance_text.text = player_balance;
                win_lose_text.text = 'You Win!' + ' £' + stake_amount*8; 
            }
        }
        if(object == arrow_up_button){
            if(stake_amount >= 100){return;}
            stake_amount = stake_amount + 5;
            player_stake_text.text = stake_amount;
        }
        if(object == arrow_down_button){
            if(stake_amount <= 0){return;}
            stake_amount = stake_amount - 5;
            player_stake_text.text = stake_amount;
        }
    }
    function onPointerOver(object) {
        object.tint = 0xFFFFFF;
    }
    function onPointerOut(object) {
        object.tint = 0xDDDDDD;
    }
    function updateSymbolCage(newRolls){
        console.log(newRolls);  
        //Slot 0 Fruits  
        if(newRolls[0] == 0){
            symbol0.visible = true;
            symbol1.visible = false;
            symbol2.visible = false;
            symbol3.visible = false;
            symbol4.visible = false;
            symbol5.visible = false;   
        }
        if(newRolls[0] == 1){
            symbol0.visible = false;
            symbol1.visible = true;
            symbol2.visible = false;
            symbol3.visible = false;
            symbol4.visible = false;
            symbol5.visible = false;   
        }
        if(newRolls[0] == 2){
            symbol0.visible = false;
            symbol1.visible = false;
            symbol2.visible = true;
            symbol3.visible = false;
            symbol4.visible = false;
            symbol5.visible = false;   
        }
        if(newRolls[0] == 3){
            symbol0.visible = false;
            symbol1.visible = false;
            symbol2.visible = false;
            symbol3.visible = true;
            symbol4.visible = false;
            symbol5.visible = false;   
        }
        if(newRolls[0] == 4){
            symbol0.visible = false;
            symbol1.visible = false;
            symbol2.visible = false;
            symbol3.visible = false;
            symbol4.visible = true;
            symbol5.visible = false;   
        }
        if(newRolls[0] == 5){
            symbol0.visible = false;
            symbol1.visible = false;
            symbol2.visible = false;
            symbol3.visible = false;
            symbol4.visible = false;
            symbol5.visible = true;   
        }
        //Slot 1 Fruits
        if(newRolls[1] == 0){
            symbol0_1.visible = true;
            symbol1_1.visible = false;
            symbol2_1.visible = false;
            symbol3_1.visible = false;
            symbol4_1.visible = false;
            symbol5_1.visible = false;   
        }
        if(newRolls[1] == 1){
            symbol0_1.visible = false;
            symbol1_1.visible = true;
            symbol2_1.visible = false;
            symbol3_1.visible = false;
            symbol4_1.visible = false;
            symbol5_1.visible = false;   
        }
        if(newRolls[1] == 2){
            symbol0_1.visible = false;
            symbol1_1.visible = false;
            symbol2_1.visible = true;
            symbol3_1.visible = false;
            symbol4_1.visible = false;
            symbol5_1.visible = false;   
        }
        if(newRolls[1] == 3){
            symbol0_1.visible = false;
            symbol1_1.visible = false;
            symbol2_1.visible = false;
            symbol3_1.visible = true;
            symbol4_1.visible = false;
            symbol5_1.visible = false;   
        }
        if(newRolls[1] == 4){
            symbol0_1.visible = false;
            symbol1_1.visible = false;
            symbol2_1.visible = false;
            symbol3_1.visible = false;
            symbol4_1.visible = true;
            symbol5_1.visible = false;   
        }
        if(newRolls[1] == 5){
            symbol0_1.visible = false;
            symbol1_1.visible = false;
            symbol2_1.visible = false;
            symbol3_1.visible = false;
            symbol4_1.visible = false;
            symbol5_1.visible = true;   
        }
        //Slot 2 Fruits
        if(newRolls[2] == 0){
            symbol0_2.visible = true;
            symbol1_2.visible = false;
            symbol2_2.visible = false;
            symbol3_2.visible = false;
            symbol4_2.visible = false;
            symbol5_2.visible = false;   
        }
        if(newRolls[2] == 1){
            symbol0_2.visible = false;
            symbol1_2.visible = true;
            symbol2_2.visible = false;
            symbol3_2.visible = false;
            symbol4_2.visible = false;
            symbol5_2.visible = false;   
        }
        if(newRolls[2] == 2){
            symbol0_2.visible = false;
            symbol1_2.visible = false;
            symbol2_2.visible = true;
            symbol3_2.visible = false;
            symbol4_2.visible = false;
            symbol5_2.visible = false;   
        }
        if(newRolls[2] == 3){
            symbol0_2.visible = false;
            symbol1_2.visible = false;
            symbol2_2.visible = false;
            symbol3_2.visible = true;
            symbol4_2.visible = false;
            symbol5_2.visible = false;   
        }
        if(newRolls[2] == 4){
            symbol0_2.visible = false;
            symbol1_2.visible = false;
            symbol2_2.visible = false;
            symbol3_2.visible = false;
            symbol4_2.visible = true;
            symbol5_2.visible = false;   
        }
        if(newRolls[2] == 5){
            symbol0_2.visible = false;
            symbol1_2.visible = false;
            symbol2_2.visible = false;
            symbol3_2.visible = false;
            symbol4_2.visible = false;
            symbol5_2.visible = true;   
        }
        //Slot 3 Fruits
        if(newRolls[3] == 0){
            symbol0_3.visible = true;
            symbol1_3.visible = false;
            symbol2_3.visible = false;
            symbol3_3.visible = false;
            symbol4_3.visible = false;
            symbol5_3.visible = false;   
        }
        if(newRolls[3] == 1){
            symbol0_3.visible = false;
            symbol1_3.visible = true;
            symbol2_3.visible = false;
            symbol3_3.visible = false;
            symbol4_3.visible = false;
            symbol5_3.visible = false;   
        }
        if(newRolls[3] == 2){
            symbol0_3.visible = false;
            symbol1_3.visible = false;
            symbol2_3.visible = true;
            symbol3_3.visible = false;
            symbol4_3.visible = false;
            symbol5_3.visible = false;   
        }
        if(newRolls[3] == 3){
            symbol0_3.visible = false;
            symbol1_3.visible = false;
            symbol2_3.visible = false;
            symbol3_3.visible = true;
            symbol4_3.visible = false;
            symbol5_3.visible = false;   
        }
        if(newRolls[3] == 4){
            symbol0_3.visible = false;
            symbol1_3.visible = false;
            symbol2_3.visible = false;
            symbol3_3.visible = false;
            symbol4_3.visible = true;
            symbol5_3.visible = false;   
        }
        if(newRolls[3] == 5){
            symbol0_3.visible = false;
            symbol1_3.visible = false;
            symbol2_3.visible = false;
            symbol3_3.visible = false;
            symbol4_3.visible = false;
            symbol5_3.visible = true;   
        }
    }
})




