import mongoose from "mongoose";

const DBToDoList = mongoose.model("ToDoList");

const DBToDoItem = mongoose.model("ToDoItem", new mongoose.Schema({
    text: String,
    done: Boolean,
    list: {type: mongoose.Types.ObjectId, ref: "ToDoList"}
}));

export async function run() {
    const connection = await mongoose.connect('mongodb://127.0.0.1:27017/test');

    console.log(connection);

    return;

    const list = await DBToDoList.create({});
    const item = await DBToDoItem.create({ text: "test", list: list, done: false })

    await list.save();
    await item.save();
}