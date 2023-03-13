const mongoose = require('mongoose');


//looks for db, and if it does not find it, mongoose will automatically create one
mongoose.connect("mongodb://localhost:27017/fruitsDB");



const fruitSchema = new mongoose.Schema ({
  name: String,
  rating: Number,
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);



const fruit = new Fruit ({
  name: "Apple",
  rating:7,
  review: "Pretty solid as a fruit."
});

// fruit.save();



const kiwi = new Fruit ({
  name: "kiwi",
  rating:10,
  review: "Best fruit."
});

const orange = new Fruit ({
  name: "orange",
  rating:4,
  review: "Too sour for me."
});


const banana = new Fruit ({
  name: "banana",
  rating:3,
  review: "Weird texture."
});



Fruit.find({})
  .then(fruit => {
    console.log(fruit);
  })
  .catch(err => {
    console.error(err);
  });
  
// insertData();


// async function findData(){
//   try {
//     await Fruit.find({});
//     console.log();
//   } catch (error){
//     console.log(error);
//   } finally {
//     mongoose.disconnect();
//   } 
// }

// findData() ;


async function getFruits() {
  try {
    const fruits = await Fruit.find({}); // returns a Query object
    console.log(fruits); // handle the results here
  } catch (error) {
    console.log(error);
  } finally {
    mongoose.disconnect();
  }
}



//People collection
// Create the schema aka template of data entries 

const personSchema = new mongoose.Schema({
  name: String,
  age: Number
});


//Create a new model from the schema created
const Person = mongoose.model("Person", personSchema);

//Create a new person entry

const person1 = new Person ({
  name:"John",
  age: 37
});

person1.save();

