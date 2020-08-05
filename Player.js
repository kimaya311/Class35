class Player{
    constructor(){}
getCount(){

    var Playercountref = database.ref("PlayerCount");
    Playercountref.on("value",function(data){
PlayerCount =  data.val();
    })
}
updateCount(count){

    database.ref("/").update({
       PlayerCount:count 
    })
}
update(Name){

var Playerindex = ("Player"+PlayerCount);
database.ref(Playerindex.set({
    Name : name
}
));

}
}