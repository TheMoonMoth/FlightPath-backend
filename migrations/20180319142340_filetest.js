exports.up = function(knex, Promise) {
  return knex.schema.createTable("filetest", table => {
    table.increments("id");
    table.text("name");
    table.text("file");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("filetest");
};
