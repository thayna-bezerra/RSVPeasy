// migrations/create_users_table.js
exports.up = function (knex) {
    return knex.schema.createTable('users', function (table) {
        table.increments('id').primary();
        table.string('name');
        table.string('phone');
        table.string('email');
        table.boolean('verificadoByEmail').defaultTo(false);
        table.boolean('verificadoByPhone').defaultTo(false);
        table.boolean('canSendNotification').defaultTo(true);
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('users');
};