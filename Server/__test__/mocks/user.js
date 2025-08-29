const { ObjectId } = require('mongodb');

const userMocks = [
  {
    _id: new ObjectId(),
    name: "Alice Smith",
    email: "alice@example.com",
    phone: "1112223333",
    password: "hashedpassword1",
    isVerify: true,
    role: "USER",
  },
  {
    _id: new ObjectId(),
    name: "Bob Johnson",
    email: "bob@example.com",
    phone: "2223334444",
    password: "hashedpassword2",
    isVerify: false,
    role: "USER",
  },
  {
    _id: new ObjectId(),
    name: "Charlie Brown",
    email: "charlie@example.com",
    phone: "3334445555",
    password: "hashedpassword3",
    isVerify: true,
    role: "ADMIN",
  },
  {
    _id: new ObjectId(),
    name: "Diana Prince",
    email: "diana@example.com",
    phone: "4445556666",
    password: "hashedpassword4",
    isVerify: false,
    role: "USER",
  },
  {
    _id: new ObjectId(),
    name: "Ethan Hunt",
    email: "ethan@example.com",
    phone: "5556667777",
    password: "hashedpassword5",
    isVerify: true,
    role: "USER",
  },
];

module.exports = userMocks;