// let Gname :string[] =["Ramiz", "Amman","Talha"];
// for (let index = 0; index < Gname.length; index++) {
// console.log("Dear" ,Gname[index],"your avalibility is pleasure for us")
// }






////;;;;;;;;;;;;Q15;;;;;;;;;;////

// let newGuestlist :string[] =["Ramiz", "Amman","Talha","Fahad"];

// let notCome = newGuestlist[0];
// console.log(notCome,"is not comming");
// newGuestlist.splice(0,1,"Amir");
// newGuestlist.forEach(guest => console.log(`${guest},would you like to dinner with me?`))







// //Q16

let newlists :string[] =["Ramiz", "Amman","Talha","Fahad"];

// variable for those who cant come
let donotcome = newlists[1];

// print the name of guest who cntcome
console.log(donotcome,"we cannot come");
 
// add or remove values from guest list 
newlists.splice(0,1,"Abdullah");
console.log("good news ! we have found a bigger table for table");
newlists.unshift("zohan");
newlists.push("Bilal");
// add new guest at middle index
let middleindex:number =(newlists.length /2 );
newlists.splice(middleindex,0,"osama")
console.log("update list of our guests");
newlists.forEach(oneguest =>console.log(`hello ${oneguest}, would you like to dinner with us`));





///;;;;;;;;Q17;;;;;;/////

let newlistses :string[] =["Ramiz", "Amman","Talha","Fahad"];

// variable for those who cant come
let donotcomes = newlistses[1];

// print the name of guest who cntcome
console.log(donotcomes,"we cannot come");
 
// add or remove values from guest list 
newlistses.splice(0,1,"Abdullah");
console.log("good news ! we have found a bigger table for table");
newlistses.unshift("zohan");
newlistses.push("Bilal");
// add new guest at middle index
let middleindexes:number =(newlistses.length /2 );
newlists.splice(middleindexes,0,"osama")
console.log("update list of our guests");
newlistses.forEach(oneguest =>console.log(`hello ${oneguest}, would you like to dinner with us`));

console.log("Unfortunatly! the dinning table is not avalaible ,so we can only invite two guest");
// using while loop we remove guest from array
while  ( newlistses.length >2){
        let removeguest =newlistses.pop();
        console.log(`sorry ${removeguest} you are not invited`);
    };
   console.log("invitation to last 2  guest");
   newlistses.forEach(lasttwo =>console.log(`${lasttwo} you are still invited`));
   //remove two guest
   newlists.pop();
   newlists.pop();
   console.log(" empty list",newlistses);
   






















