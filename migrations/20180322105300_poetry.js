exports.up = function(knex, Promise) {
  return knex.schema.createTable("poetry", table => {
    table.increments("id");
    table.text("title");
    table.text("author");
    table.specificType("body", "text[]");
    table.specificType("tags", "integer[]");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("poetry");
};
