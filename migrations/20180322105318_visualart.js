exports.up = function(knex, Promise) {
  return knex.schema.createTable("visualart", table => {
    table.increments("id");
    table.text("title");
    table.text("artist");
    table.string("url");
    table.specificType("tags", "integer[]");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("visualart");
};
