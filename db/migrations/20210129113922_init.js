exports.up = function (knex) {
  return knex.schema
    .createTable('channel', (table) => {
      table.increments();
      table.string('name').notNullable();
      table.timestamps(true, true);
    })
    .createTable('user', (table) => {
      table.increments();
      table.string('name').notNullable();
      table.string('email').notNullable().unique();
      table.integer('channel_id').unsigned()
      table.foreign('channel_id').references('id').inTable('channel');
      table.timestamps(true, true);
    })
    .createTable('video', (table) => {
      table.increments();
      table.string('title').notNullable(),
      table.integer('channel_id').unsigned()
      table.foreign('channel_id').references('id').inTable('channel');
      table.timestamps(true, true);
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('video')
    .dropTableIfExists('user')
    .dropTableIfExists('channel');
};
