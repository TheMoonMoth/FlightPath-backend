exports.up = function(knex, Promise) {
  return knex.schema.createTable("submissions", table => {
    table.increments("id");
    table.text("category");
    table.text("title");
    table.text("author");
    table.text("url");
    table.specificType("tags", "integer[]");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("submissions");
};
