const database = require("./dbconnection.js");

module.exports = {
  listFeatures() {
    return database("featured").select();
  },
  readFeature(id) {
    return database("featured")
      .select()
      .where("id", id)
      .first()
  },
  listFiction() {
    return database("fiction").select();
  },
  listPoetry() {
    return database("poetry").select();
  },
  listArt() {
    return database("visualart").select();
  },
  listSubmissions() {
    return database("submissions").select();
  },
  listSubmissionsByType(type) {
    return database("submissions")
      .select()
      .where("category", type)
  },
  createSubmission(sub){
    return database("submissions")
      .insert(sub)
      .returning("*")
      .then(record => record[0])
  }
};




// read(id) {
//     return database("game")
//       .select()
//       .where("id", id)
//       .first();
//   },
//   create(game) {
//     return database("game")
//       .insert(game)
//       .returning("*")
//       .then(record => record[0]);
//   },
//   update(id, game) {
//     return database("game")
//       .update(game)
//       .where("id", id)
//       .returning("*")
//       .then(record => record[0]);
//   },
//   delete(id) {
//     return database("game")
//       .delete()
//       .where("id", id);
//   }