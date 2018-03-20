exports.seed = function(knex, Promise) {
  return knex("featured")
    .del()
    .then(function() {
      return knex("featured").insert([
        {
          id: 1,
          title: "Tilda Swinshin",
          author: "",
          body: ""
        },
        {
          id: 2,
          title: "rowValue2",
          author: "",
          body: ""
        },
        {
          id: 3,
          title: "rowValue3",
          author: "",
          body: ""
        }
      ]);
    });
};
