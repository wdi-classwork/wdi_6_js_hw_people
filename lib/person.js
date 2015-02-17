//age (in years, default to 30)
//weight (in pounds, default to 150)
//height (in inches, default to a random value between 60 and 78)
//friends (an array of other Person objects, default to empty)

var Person = function(firstName, lastName, age, weight, height, friends){
  this.firstName = firstName;
  this.lastName = lastName;
  age? this.age = age : this.age = 30;
  weight? this.weight = weight : this.weight = 150;
  height? this.height = height : this.height = Math.floor((Math.random() * (78 - 60) + 60));
  friends? this.friends = friends : this.friends = [];
};

Person.prototype = {
  fullName: function(){
    return this.firstName + " " + this.lastName;
  },

  weightInStone: function() {
    return this.weight / 14 + " stone(s)";
  },

  addFriend: function(person) {
    this.friends.push(person);
    console.log("After addition: Friends list is now: ");
    for(i = 0; i < this.friends.length; i++){
      console.log(this.friends[i].firstName + " " + this.friends[i].lastName);
    };
  },

  removeFriend: function(friend_name) {
    var index = this.friends.indexOf(friend_name)
    this.friends.splice(index)
    console.log("After deletion: Friends list is now: ");
    for(i = 0; i < this.friends.length; i++) {
      console.log(this.friends[i].firstName + " " + this.friends[i].lastName);
    };
  },

  greetPeople: function() {
    for(i = 0;  i < this.friends.length; i++) {
      console.log("Hi " + this.friends[i].firstName + " " + this.friends[i].lastName);
    }
  },

  friends: function() {
     for(i = 0; i < this.friends.length; i++){
      console.log(this.friends[i].firstName + " " + this.friends[i].lastName);
    }
  },

  describe: function() {
    return "Name is: " + this.fullName() + ", Age is: " + this.age + ", Weight is: " + this.weight + ", Height is: " + this.height + ", Friends are: ";
    }
};


// firstName, lastName, age, weight, height, friends
var gary = new Person();
gary.firstName = "Gary";
gary.lastName = "The Snail";
gary.age = 2;
gary.weight = 30;
gary.height = 63;

var patrick = new Person();
patrick.firstName = "Patrick";
patrick.lastName = "Star";
patrick.age = 4;
patrick.weight = 50;
patrick.height = 60;
patrick.friends = [spongebob];

var spongebob = new Person();
spongebob.firstName = "Spongebob";
spongebob.lastName = "Squarepants";
spongebob.age = 5;
spongebob.weight = 30;
spongebob.height = 60;
spongebob.friends = [gary, patrick];

var plankton = new Person();
plankton.firstName = "Mister";
plankton.lastName = "Plankton";
plankton.age = 20;
plankton.weight = 5;
plankton.height = 10;

var mr_krabs = new Person();
mr_krabs.firstName = "Mister";
mr_krabs.lastName = "Krabs";
mr_krabs.age = 30;
mr_krabs.weight = 15;
mr_krabs.height = 30;
mr_krabs.friends = [spongebob, squidward];

var squidward = new Person();
squidward.firstName = "Squidward";
squidward.lastName = "Tentacles";
squidward.age = 40;
squidward.weight = 28;
squidward.height = 67;
squidward.friends = [mr_krabs];

var sandy_cheeks = new Person();
sandy_cheeks.firstName = "Sandy";
sandy_cheeks.lastName = "Cheeks";
sandy_cheeks.age = 14;
sandy_cheeks.height = 62;
sandy_cheeks.friends = [spongebob, patrick];

var larry = new Person();
larry.firstName = "Larry";
larry.lastName = "The Lobster";
larry.age = 12;
larry.weight = 40;

var poppy = new Person();
poppy.firstName = "Poppy";
poppy.lastName = "Puff";
poppy.age = 40;
poppy.height = 68;
poppy.friends = [sandy_cheeks];

var lady_fish = new Person();
lady_fish.firstName = "Lady";
lady_fish.lastName = "Fish";
lady_fish.age = 33;
lady_fish.weight = 15;
lady_fish.height = 50;
lady_fish.friends = [poppy, larry, squidward];


console.log("Full Name is " + spongebob.fullName());
console.log("Weight in stone is " + spongebob.weightInStone());

console.log(spongebob.weight);

//add friend
spongebob.addFriend(squidward);

//remove friend
spongebob.removeFriend(squidward);

//greet people
spongebob.greetPeople();

console.log(spongebob.describe());
console.log(gary.describe());
console.log(patrick.describe());
console.log(plankton.describe());
console.log(mr_krabs.describe());
console.log(squidward.describe());
console.log(sandy_cheeks.describe());
console.log(larry.describe());
console.log(poppy.describe());
console.log(lady_fish.describe());










