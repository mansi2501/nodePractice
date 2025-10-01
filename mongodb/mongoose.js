import mongoose from "mongoose";

try {
    await mongoose.connect("mongodb+srv://mansitrivedi2501_db_user:SdOKLoTE9Zu33LeA@cluster0.y2z5xbz.mongodb.net/nodepractice")
    mongoose.set('debug', true);
} catch (error) {
    console.log(error);
    process.exit()
}

//create schema
const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: { type: String, required: true },
    createdAt: { type: Date, default: Date.now() }
})

const Users = mongoose.model("mongoose_test", userSchema);
await Users.create({ name: "mansi", email: "mansi@gmail.com", age: 25 });
await mongoose.connection.close();
