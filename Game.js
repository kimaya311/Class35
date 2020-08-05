class Game {

constructor(){}
GetState(){
    var GameStateref = database.ref("GameState");
    GameStateref.on("value",function(data){
        gameState = data.val();
    });
}
Update(state){
database.ref("/").update({
    GameState: state
})
}
Start(){
 if(GameState ===0){
     console.log(GameState);
     player = new Player();
    player.getCount();
    form = new Form();
    form.display();
 }

}
}