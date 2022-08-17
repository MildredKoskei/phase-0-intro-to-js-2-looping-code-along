const cards=["Guadalupe","Ollie","Aki"];
const myArray=[]
function writeCards(cards ,birthday){
    for(let i =0;i<cards.length;i++){
    myArray.push(`Thank you, ${cards[i]}, for the wonderful ${birthday} gift!`);
    }
      return myArray;

}
function countDown(){
    let counter = 10;
    while(counter>=0){
        console.log(counter--);
    }
}