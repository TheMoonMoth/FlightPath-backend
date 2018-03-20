exports.seed = function(knex, Promise) {
  return knex("filetest")
    .del()
    .then(() => {
      return knex("filetest").insert([
        {
          id: 1,
          name: "Breath of the Wild",
          file: ""
        },
        {
          id: 2,
          name: "Fez",
          file: ""
        },
        {
          id: 3,
          name: "Anti-Chamber",
          file: ""
        }
      ]);
    })
    .then(() => {
      return knex.raw("ALTER SEQUENCE filetest_id_seq RESTART WITH 4;");
    });
};
