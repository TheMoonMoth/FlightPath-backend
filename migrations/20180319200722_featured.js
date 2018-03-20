exports.up = function(knex, Promise) {
  return knex.schema.createTable("featured", table => {
    table.increments("id");
    table.text("title");
    table.text("author");
    table.specificType("body", "text[]");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("featured");
};
