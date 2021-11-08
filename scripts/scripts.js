let player ={
    name: "",
    race: "",
    gender:"",
    
}
let gear={                                             //Starting Gear
    weapon: {
        mainHand: ["One hand wooden sword"],           //Because they are lefty 
        rightHand: [],
        dual:[],
    },
    armor: {
        Helmet:[],
        Gloves:[],
        Chest:["Cloth shirt"],
        Pants:["Cloth pants"],
    },
    inventory: {
        food:{
            bread:[2],
            manaBun:[4],
            chickenLegs:[3],
        },
        potions:["Healing potion","Mana porion","Rejuvenation potion"],
        misc:["Flint","Torch"],
    },
}

//Name of the character
let userName = prompt("What is your name?");
alert("Hello " + (userName));

//Race of the character
let userRace = prompt("What is your race?");
if (userRace == "Dwarf" || userRace == "Gnome"){
    alert("Hey big man!!");
}else{
    alert("You are a mighty " + (userRace));
}

//Gender of the character
let userGender = prompt("What's your gender?");
if (userGender == "Male"){
    alert("'ello mate!")
}else if(userGender == "Female"){
    alert("Hello m' lady");
}else{ 
    userGender !== "Male" || userGender !== "Female"        //needs a loop to ask the question again and again
    alert("Wront input please select Male or Female")
    userGender = prompt("What's your gender again?") 
}
//Prompts the user to see their inventory
let userGear = prompt("Wanna see your inventory? Y/N")
if (userGear === "Y"){
    alert("Inventory: "+(gear.armor.Chest)+" "+(gear.armor.Gloves)+" "+(gear.armor.Helmet)+" "+(gear.armor.Pants)+" "+
        (gear.inventory.food)+" "+(gear.inventory.misc)+" "+(gear.inventory.potions)+" "+
        (gear.weapon.dual)+" "+(gear.weapon.mainHand)+" "+(gear.weapon.rightHand)        
    );
}else{
    (userGear=== "N")
    alert("Ok then. No problem!");
}
let inputBox = document.getElementById("inputText");

//Add option to move left or right



//Left there is a dragon
//Give the char health points and damage


//Right a treasure chest
//Add something in inventory


player.name = userName;
player.race = userRace;
player.gender = userGender;
console.log(gear.inventory);
console.log(player.name);
console.log(player.race);
console.log(player.gender);