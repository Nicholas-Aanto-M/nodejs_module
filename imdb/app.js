const movies = require("./movies");

//CRUD----------------------------------------

// //CREATE

// const movie = {
//   id: 104,
//   name: "DoctorStrange",
// };

// movies.push(movie);
// console.log("Adding", movie.name);
// console.log("---------------------MOVIES----------------------");
// console.log(movies);

// //READ

// // const id = 103;
// const id = 102;
// const movieToFind = movies.find((m) => {
//   return m.id == id;
// });
// if (!movieToFind) {
//   console.log(`Movie ${id} not found`);
// } else {
//   console.log("Movie found", movieToFind);
// }

// //UPDATE

// const updateid = 102;
// const movieName = "RAJARAJA CHOLAN";
// const movieIndex = movies.findIndex((m) => m.id === updateid);
// if (movieIndex == -1) {
//   console.log(`Movie ${id} not found`);
// } else {
//   movies[movieIndex]["name"] = movieName;
// }

// console.log(movies);

//DELETE

// const deleteID = 102;
// const movieIndex = movies.findIndex((m)=> movies.id === deleteID);
// movies.splice(movieIndex,1);
// console.log(movies);