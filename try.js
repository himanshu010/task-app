// const { Mongoose } = require("mongoose");
require("./src/db/Mongoose");
const User = require("./src/models/user.js");

// User.findByIdAndUpdate("5f7a1570b0c6b3251053aca7", { age: 1 })
//   .then((user) => {
//     console.log(user);
//     return User.countDocuments({ age: 1 });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age });
  const count = await User.countDocuments({ age });

  return count;
};

updateAgeAndCount("5f7a1570b0c6b3251053aca7", 1)
  .then((count) => {
    console.log(count);
  })
  .catch((err) => {
    console.log(err);
  });
