import { MongoClient } from "mongodb"

const client = new MongoClient("mongodb+srv://mansitrivedi2501_db_user:SdOKLoTE9Zu33LeA@cluster0.y2z5xbz.mongodb.net/");

await client.connect();
const db = client.db('nodepractice');
const userCollection = db.collection('user');


//Add one data
// userCollection.insertOne({ name: "Mansi", age: 26 })

//Add many data at time
// userCollection.insertMany([
//     { name: "Mansi", age: 20, role: "admin" },
//     { name: "Tatvam", age: 15, role: "user" },
//     { name: "Harsh", age: 36, role: "user" },
//     { name: "Neha", age: 35, role: "user" }])

//Read data
const usersCursor = await userCollection.find().toArray();
//console.log(usersCursor);


// const usersCursor = userCollection.find();
// console.log(usersCursor);

// for await (const users of usersCursor) {
//     console.log(users);
// }

//search
// const user = await userCollection.findOne({ role: "user" })
// console.log(user);

//update
//await userCollection.updateOne({ name: "Neha" }, { $set: { role: "other" } })
//await userCollection.updateMany({ role: "user" }, { $set: { role: "other" } })


//delete
// await userCollection.deleteOne({ role: "other" })