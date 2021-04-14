class Quiz{

    constructor(){}
  
    getState(){

      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      });
     
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    
  
  start(){

      if(gameState === 0){
    
        player = new Contestant();
  
        player.getCount();
            
        form = new Question();

        form.display();
      }
    }//start
    
  
   
  play(){
  
    form.hide();
    background("yellow");
    textSize(20);
    fill("black");
    text("Quiz Result", 120, 100);
    textSize(12);
    fill("black");
    text("Note : The answer in the green color indicates correct answer",50,300);
    Contestant.getPlayerInfo(); // calling fun. from Player class - static func.
  
    if(allPlayers !== undefined){
  
      var display_position = 130;
  
      for(var plr in allPlayers){
        var correctAns = "3";
        console.log(plr);
  
        if (correctAns === allPlayers[plr].ans)
          fill("green")
        else
          fill("red");
      
        display_position += 20;
        textSize(15);
        text(allPlayers[plr].name + ": " + allPlayers[plr].ans, 120,display_position)
      }
    }//if
  
    
  
  }//play()
  }//class


  
  