class Game {
    constructor(){

    }
    
    getState(){
        var playerStateRef = database.ref('gameState');
        playerStateRef.on("value",(data)=>{
          gameState = data.val();
        })
      }
    
      updateState(state){
        database.ref('/').update({
          gameState : state
        });
      }

      start(){
          if (gameState === 0) {
              form = new Form();
              form.display();

              player = new Player ();
              player.getCount();
          }
      }
      
      play(){

        image(chefImage, 600, 250, 150, 250);
        grandmaTime++
        if (grandmaTime > 10) {
          clear();
          image(backgroundImg, 0, 0, 800, 700);
          form.greeting.hide();
          image(grandmaImage, 50, 50);
          image(speechImage, 180, 80, 300, 200);
          
          if (grandmaTime > 10 && grandmaTime < 50) {
          text("Hi " + player.name, 270, 160);
          text("Grab the corn", 270, 170)
          text("put in the steamer", 270, 180);
        
        } else if(grandmaTime > 50 && grandmaTime < 100){
            text("Take the cookie dough", 270, 170);
            text("place in the oven", 270, 180);
        
          } else if(grandmaTime > 100 && grandmaTime < 150){
            text("Grab the coffee", 270, 170)
            text("serve it to the custumer", 270, 180)
        
          }  
        }
        if (grandmaTime > 150) {
          clear();
          image(kitchenImage, 0, 0, 800, 600);
          image(coffeemachineImage, 450, 280, 150, 100)
        }

      }
    
}