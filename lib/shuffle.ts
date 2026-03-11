/*Brocode Fisher-Yates shuffle*/
export default function shuffle(array:any[]){
    
    for(let i = array.length-1; i > 0;i--){
        const random = Math.floor(Math.random() * (i+1));
        [array[i], array[random]] = [array[random], array[i]];
   }
}