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
var newlists = ["Ramiz", "Amman", "Talha", "Fahad"];
// variable for those who cant come
var donotcome = newlists[1];
// print the name of guest who cntcome
console.log(donotcome, "we cannot come");
// add or remove values from guest list 
newlists.splice(0, 1, "Abdullah");
console.log("good news ! we have found a bigger table for table");
newlists.unshift("zohan");
newlists.push("Bilal");
// add new guest at middle index
var middleindex = (newlists.length / 2);
newlists.splice(middleindex, 0, "osama");
console.log("update list of our guests");
newlists.forEach(function (oneguest) { return console.log("hello ".concat(oneguest, ", would you like to dinner with us")); });
// ///Q17
// let newlsts :string[] =["Ramiz", "Amman","Talha"];
// newlists.unshift("Abdullah")
// newlists.splice(2,0,"Bilal")
// newlists.push("Arshad")
// for (let index = 0; index < newlsts.length; index++) {
// console.log("Dear" ,newlists[index],"Good news!we found bigger table")
// }
// console.log("sorry we cannot arrange a bigger table so only two guest are invited")
// while  ( newlsts.length >2){
//     let removeguest =newlsts.pop();
//     console.log(removeguest,"sorry you are not invited");
// }
