const express = require ('express')
const mongoose  = require('mongoose')

const personShema = new mongoose.Schema({
    name : {type: String,required: true,unique :true},
    age : Number,
    favoriteFoods : [String]
})

const person = mongoose.model('user', personShema);
module.exports= person

// const createAndSavePerson = function(done){
// let msg = new PersonModel({
//   name:"yassin",
//   age:24,
//   favoriteFoods: ["pizza","ma9loub"]
// })
// msg.save()
//    .then(doc => {
//      console.log(doc)
//    })
//    .catch(err => {
//      console.error(err)
//    })

// // Create and Save a Record of a Model:
// const createAndSavePerson = function(done){
// let yassin =( {name:"yassin", age:23,favoriteFoods:["escalope,eggs"]} )
// yassin.save ((err,data) => {
//    if(err){
//     console.log(err)}
//     else{
//         done(null,data)
//     }
// } )
// };

// Create Many Records with model.create()
   const arrayOfPeople = [
    {name:"amine", age:23,favoriteFoods:["escalope","chicken"]},
    {name:"dhia", age:22,favoriteFoods:["escalope","rise"]},
    {name:"med", age:17,favoriteFoods:["escalope","tuna"]},
    {name:"khalil", age:27,favoriteFoods:["escalope","tuna"]},
    {name:"farouk", age:30,favoriteFoods:["escalope","tuna"]},

    ];
    person.create(arrayOfPeople,(err,data)=>{
        if (err){
            console.log(err)}
        else{
            console.log(null,data);
        }    
        }
    );
    var findPeopleByName = function(personName, done) {
        person.find({name:personName},(err,data)=>{
        if(err) {
            console.log(err)}
            else{
                done(err,data)
            }
        }
          ) } ;
        