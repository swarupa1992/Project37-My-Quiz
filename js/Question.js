class Question{
    constructor() {
      //new
      this.input1 = createInput("Name ");
      this.input2 = createInput("Ans ");
      this.button = createButton("Submit");
      this.greeting = createElement("h2");
      this.q1 = createElement("h4");

      this.a1 = createElement("h4");
      this.a2 = createElement("h4");
      this.a3 = createElement("h4");
      this.a4 = createElement("h4");
      
    }
  
    hide(){
         //new
         this.greeting.hide();
         this.button.hide();
         this.input1.hide();
         this.input2.hide();
         this.q1.hide();
         
        this.a1.hide();
        this.a2.hide();
        this.a3.hide();
        this.a4.hide();

    }
  
    display(){

      var title = createElement('h2')
      title.html("My Quiz Game");
      title.position(130, 0);

     
      this.q1.html("Question - The Firebase data is representing which objects.");
      this.q1.position(130,50);

      this.a1.html("1. SQL");
      this.a1.position(140,80);
      
      this.a2.html("2. Mongo");
      this.a2.position(140,100);
      
      this.a3.html("3. JSON");
      this.a3.position(140,120);
      
      this.a4.html("4. Javascript");
      this.a4.position(140,140);
      
            
      this.input1.position(130, 200);
      this.input2.position(350, 200);
      this.button.position(250, 300);
      
        
      this.button.mousePressed( () => {

        this.input1.hide();
        this.input2.hide();
        this.button.hide();

        

        player.name = this.input1.value();
        player.ans = this.input2.value();
        
        playerCount += 1;
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount);
      
      
        this.greeting.html("Hello " + player.name );
        this.greeting.position(130, 200);

      });
  
    }//display
  
  }//Question class
  