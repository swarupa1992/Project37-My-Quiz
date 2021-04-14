class Contestant{


    constructor(){

        this.index = null;
        this.ans = 0;
        this.name = null;
      }
    //same old code
      getCount(){
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value",function(data){
          playerCount = data.val();
        })
      }
    ////same old code
      updateCount(count){
        database.ref('/').update({
          playerCount: count
        });
      }
    //change code
      update(){
        var playerIndex = "players/player" + this.index;
        console.log(playerIndex);
        database.ref(playerIndex).set({
          name: this.name,
          ans:this.ans
        });
      }//update
    
    
      static getPlayerInfo(){
    
           var playerInfoRef = database.ref('players');
           playerInfoRef.on("value",(data)=>{
    
                   allPlayers = data.val();
                   console.log(allPlayers);
           });
      }//getPlayerInfo

    }
    
    
    