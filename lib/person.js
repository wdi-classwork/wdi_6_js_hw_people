//age (in years, default to 30)
//weight (in pounds, default to 150)
//height (in inches, default to a random value between 60 and 78)
//friends (an array of other Person objects, default to empty)

//ternary operator



var Person = function(firstName, lastName, age, weight, height, friends, people){
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.weight = weight;
  this.height = height;
  this.friends = friends;
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
    this.friends.push(person.firstName + " " + person.lastName);
    console.log("After addition: Friends list is now: ");
    for(i = 0; i < this.friends.length; i++){
      console.log(this.friends[i]);
    };
  },

  removeFriend: function(friend_name) {
    var index = this.friends.indexOf(friend_name)
    this.friends.splice(index)
    console.log("After deletion: Friends list is now: ");
    for(i = 0; i < this.friends.length; i++) {
      console.log(this.friends[i]);
    };
  },

  greetPeople: function() {
    for(i = 0;  i < this.people.length; i++) {
      console.log("Hi " + this.people[i]);
    }
  }
};

// firstName, lastName, age, weight, height, friends
var spongebob = new Person("Spongebob", "Squarepants", 5, 14, 60, ["gary", "patrick"], ["person_1", "person_2"]);

console.log("Full Name is " + spongebob.fullName());
console.log("Weight in stone is " + spongebob.weightInStone());

//add friend
var squidward = new Person("Squidward", "The Squid", 60, 28, 67, ["not spongebob"]);
spongebob.addFriend(squidward);

//remove friend
spongebob.removeFriend(squidward);

//greet people
spongebob.greetPeople();







