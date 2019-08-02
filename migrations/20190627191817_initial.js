
exports.up = async function(knex) {
  await knex.schema.createTable('tasks', tbl => {
      tbl.increments();
      tbl.string('title', 255).notNullable();
      tbl.boolean('completed').notNullable();
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('tasks');
};
