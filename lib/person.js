//age (in years, default to 30)
//weight (in pounds, default to 150)
//height (in inches, default to a random value between 60 and 78)
//friends (an array of other Person objects, default to empty)

//ternary operator



var Person = function(firstName, lastName, age, weight, height, friends, people){
  this.firstName = firstName;
  this.lastName = lastName;
  age? this.age = age : this.age = 30;
  weight? this.weight = weight : this.weight = 150;
  height? this.height = height : this.height = Math.floor((Math.random() * 78) + 60);;
  friends? this.friends = friends : this.friends = [];
  this.people = people;
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
    for(i = 0;  i < this.people.length; i++) {
      console.log("Hi " + this.people[i]);
    }
  }
};

// firstName, lastName, age, weight, height, friends
var gary = new Person("Gary", "The Snail", 2, 30, 63, ["spongebob"]);
var patrick = new Person("Patrick", "Star", 4, 50, 60, ["spongebob"])
var spongebob = new Person("Spongebob", "Squarepants", 5, 14, 60, [gary, patrick], ["person_1", "person_2"]);

console.log("Full Name is " + spongebob.fullName());
console.log("Weight in stone is " + spongebob.weightInStone());

//add friend
var squidward = new Person("Squidward", "The Squid", 60, 28, 67, ["not spongebob"]);
spongebob.addFriend(squidward);

//remove friend
spongebob.removeFriend(squidward);

//greet people
spongebob.greetPeople();









