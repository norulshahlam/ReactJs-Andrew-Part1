/*  ****** LESSON  14*******
https://www.udemy.com/course/react-2nd-edition/learn/lecture/7707686#content

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind


u can run nodemon here as this is seperated from the react

1. event binding issues

we discuss issue related to binding and in react components later

*/

const pet = {
  animal: "chicken",
  getAnimal() {
    return this.animal;
  },
};
// 1.In this example is very similar to the ESX classes example where that this binding was working.
console.log(pet.getAnimal())

// 2.  making a subtle tweak to our code we've actually broken this binding.
const getName =  pet.getAnimal;
// console.log(getName());   // error

// So this is exactly what we're seeing.
const getName2 = function(){
  return this.animal;
}
// getName2()  // error

/*
Bind is a method on a function which means right here on get name I can access bind and we're going to want to call it when we call it we get our function back which means that this and this are actually the exact same thing.
The cool thing about bind and the reason why it's actually useful is that you can use the first argument to set the this context which means that I can set it equal to that object. Once again bringing the context back to what we would expect.
*/
const getName3 = pet.getAnimal.bind(pet);
console.log(getName3());


/*********** ANOTHER EXAMPLE ****************/
var myButton = {
  content: 'OK',
  click() {
    console.log(this.content);
  }
};

myButton.click();

var looseClick = myButton.click;
// not bound, 'this' is not myButton - it is the globalThis
// looseClick(); 

var boundClick = myButton.click.bind(myButton);
// bound, 'this' is myButton
boundClick(); 
